const express = require('express');
const expressGraphQL = require('express-graphql');// provide for glue layer for express and GraphQL
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', expressGraphQL({// connect the express and GraphQL as middleware
  schema,
  graphiql: true
}));

app.listen(4000, () => {//localhost:4000/
  console.log('Listening');
});
