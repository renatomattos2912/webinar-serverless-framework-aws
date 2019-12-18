# Webinar: Serverless framework AWS

## Description

A simple CRUD app using serverless framework, AWS and FaunaDB.

## Setup

- Create an AWS account.
- Setup AWS CLI and set you credentials locally.
- Install node js latest LTS version.
- Instal serverless framework CLI.
- Create a FaunaDB account.
- Set FaunaDB secret key in AWS secrets manager.
- Set Postman to make api calls (Check postmand folder inside docs)

## Secrets to set in AWS

- FAUNADB_KEY

## Commands

```bash
# Install packages
npm ci

# Run locally for development
npm run dev

# Deploy project in your AWS account
npm deploy

# Undeploy project
npm undeploy
```

## Reference

- [AWS](https://aws.amazon.com/)
- [Serverless Framework](https://serverless.com/)
- [FaunaDB Docs](https://docs.fauna.com/fauna/current/)
