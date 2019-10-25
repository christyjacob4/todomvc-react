/* eslint-disable require-jsdoc */
let self = null;

class DB {
  constructor(sdk, collectionId) {
    this.sdk = sdk;
    this.collectionId = collectionId;
    self = this;
  }

  addTodo(data) {
    const read = ['*'];
    const write = ['*'];
    const promise = this.sdk.database.createDocument(this.collectionId, data, read, write);
    console.log('[INFO] Adding Todo');
    return promise.then(function(response) {
      return response;
    }, function(error) {
      return error;
    });
  }

  updateTodo(documentId, data) {
    const read = ['*'];
    const write = ['*'];
    const promise = this.sdk.database.updateDocument(this.collectionId, documentId, data, read, write);
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
