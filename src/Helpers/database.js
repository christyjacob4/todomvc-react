class DB {
  constructor(sdk) {
    this.sdk = sdk;
  }

  addTodo() {

  }

  updateTodo() {

  }


  deleteTodo() {

  }

  completeTodo() {

  }

  createCollection(name, apiKey) {
    this.sdk.setKey(apiKey);
    const promise = this.sdk.database.createCollection(name);

    promise.then(function(response) {
      console.log(response);
    }, function(error) {
      console.log(error);
    });
  }
}

export default DB;
