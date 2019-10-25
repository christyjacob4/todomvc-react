/* eslint-disable require-jsdoc */
class DB {
  constructor(sdk, collectionId) {
    this.sdk = sdk;
    this.collectionId = collectionId;
    this.user = null;
    this.read = null;
    this.write = null;
  }

  setUser(user) {
    this.user = user;
    this.read = user && [user.roles[1]];
    this.write = user && [user.roles[1]];
  }

  getUser(user) {
    return this.user;
  }

  addTodo(data) {
    const promise = this.sdk.database.createDocument(this.collectionId, data, this.read, this.write);
    console.log('[INFO] Adding Todo');
    return promise.then(function(response) {
      return response;
    }, function(error) {
      return error;
    });
  }

  updateTodo(documentId, data) {
    const promise = this.sdk.database.updateDocument(this.collectionId, documentId, data, this.read, this.write);
    console.log('[INFO] Updating Todo');
    return promise.then(function(response) {
      return response;
    }, function(error) {
      return error;
    });
  }


  deleteTodo(documentId) {
    const promise = this.sdk.database.deleteDocument(this.collectionId, documentId);
    console.log('[INFO] Deleting Todo');
    return promise.then(function(response) {
      return response;
    }, function(error) {
      return error;
    });
  }

  completeTodo() {

  }


  getTodos() {
    const promise = this.sdk.database.listDocuments(this.collectionId);
    return promise.then(function(response) {
      return response;
    }, function(error) {
      return error;
    });
  }
}

export default DB;
