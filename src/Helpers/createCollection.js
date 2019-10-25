const sdk = require('node-appwrite');
const config = {
  project: '5dab24a22069b',
  endpoint: 'http://localhost/v1',
  key: '09085b3794fd446f3a4dbb9e0a6081afa7b84d8df2fc19ae3ffce6423fb120629f1cfeeec8c39326bcf35ac981f754def9fe752d5c6c715e5d68b3215e58b5012d72c09cbed3c0fc53ed337a4ac00d53def480e022dba53ea53afa18fae4c80ea1e18f6c586314d80d83bdf801b15b8cc9ec7d88056bcd3c1315753984874157',
};


// Init SDK
const client = new sdk.Client();

const database = new sdk.Database(client);

client
    .setProject(config.project)
    .setKey(config.key)
    .setEndpoint(config.endpoint)
;

const collectionName = 'newCollection';
const read = ['*'];
const write = ['*'];
const rules = [
  {
    'label': 'completed',
    'key': 'completed',
    'type': 'boolean',
    'default': false,
    'required': true,
    'array': false,
  },
  {
    'label': 'text',
    'key': 'text',
    'type': 'text',
    'default': '',
    'required': true,
    'array': false,
  },
];

const promise = database.createCollection(collectionName, read, write, rules);

promise.then(function(response) {
  console.log(response);
}, function(error) {
  console.log(error);
});
