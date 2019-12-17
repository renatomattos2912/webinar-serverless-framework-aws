const secretsManager = require('../lib/aws-secrets-manager');
const utils = require('../lib/utils');
const faunadb = require('faunadb');
const q = faunadb.query;

async function getInstance() {
  const secrets = await secretsManager.get();
  const secret = secrets['FAUNADB_KEY'];
  return new faunadb.Client({ secret });
}

module.exports = {
  add: async ({ collection, data }) => {
    const client = await getInstance();

    return client.query(
      q.Create(q.Collection(collection), {
        data: {
          created: utils.getGtmUnixDate(),
          updated: utils.getGtmUnixDate(),
          body: data,
        },
      }),
    );
  },
  get: async ({ index }) => {
    const client = await getInstance();

    const query = q.Map(
      q.Paginate(q.Match(q.Index(index))),
      q.Lambda('X', q.Get(q.Var('X'))),
    );

    return client.query(query);
  },
  getOne: async ({ collection, id }) => {
    const client = await getInstance();

    const query = q.Get(q.Ref(q.Collection(collection), id));

    return client.query(query);
  },
  update: async ({ collection, id, data }) => {
    const client = await getInstance();

    const query = q.Update(q.Ref(q.Collection(collection), id), {
      data: {
        updated: utils.getGtmUnixDate(),
        body: data,
      },
    });

    return client.query(query);
  },
  del: async ({ collection, id }) => {
    const client = await getInstance();

    const query = q.Delete(q.Ref(q.Collection(collection), id));

    return client.query(query);
  },
};
