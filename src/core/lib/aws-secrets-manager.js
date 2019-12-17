const AWS = require('aws-sdk')
const uuid = require('uuid/v4')

const secretsmanager = new AWS.SecretsManager({
  endpoint: process.env['SECRETS_ENDPOINT'],
  region: process.env['REGION']
})

module.exports = {
  get,
  put
}

async function get () {
  return new Promise(function (resolve, reject) {
    try {
      const params = {
        SecretId: process.env['SECRETS_ID']
      }

      secretsmanager.getSecretValue(params, (err, res) => {
        if (err) return reject(err)

        if (res.SecretString !== '') {
          return resolve(JSON.parse(res.SecretString))
        } else {
          return resolve(res.SecretBinary)
        }
      })
    } catch (err) {
      return reject(err)
    }
  })
}

async function put ({ name, value }) {
  const secretObj = await get()
  secretObj[name] = value

  return new Promise(function (resolve, reject) {
    try {
      const params = {
        ClientRequestToken: uuid(),
        SecretId: process.env['SECRETS_ID'],
        SecretString: JSON.stringify(secretObj)
      }

      secretsmanager.putSecretValue(params, (err, res) => {
        if (err) return reject(err)
        return resolve({ success: true })
      })
    } catch (err) {
      return reject(err)
    }
  })
}
