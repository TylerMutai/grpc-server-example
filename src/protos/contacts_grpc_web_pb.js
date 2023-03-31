/**
 * @fileoverview gRPC-Web generated client stub for contacts
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.20.3
// source: contacts.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.contacts = require('./contacts_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.contacts.ContactServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.contacts.ContactServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.contacts.Contact,
 *   !proto.contacts.ContactID>}
 */
const methodDescriptor_ContactService_AddContact = new grpc.web.MethodDescriptor(
  '/contacts.ContactService/AddContact',
  grpc.web.MethodType.UNARY,
  proto.contacts.Contact,
  proto.contacts.ContactID,
  /**
   * @param {!proto.contacts.Contact} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.contacts.ContactID.deserializeBinary
);


/**
 * @param {!proto.contacts.Contact} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.contacts.ContactID)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.contacts.ContactID>|undefined}
 *     The XHR Node Readable Stream
 */
proto.contacts.ContactServiceClient.prototype.addContact =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/contacts.ContactService/AddContact',
      request,
      metadata || {},
      methodDescriptor_ContactService_AddContact,
      callback);
};


/**
 * @param {!proto.contacts.Contact} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.contacts.ContactID>}
 *     Promise that resolves to the response
 */
proto.contacts.ContactServicePromiseClient.prototype.addContact =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/contacts.ContactService/AddContact',
      request,
      metadata || {},
      methodDescriptor_ContactService_AddContact);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.contacts.Empty,
 *   !proto.contacts.ContactList>}
 */
const methodDescriptor_ContactService_GetContacts = new grpc.web.MethodDescriptor(
  '/contacts.ContactService/GetContacts',
  grpc.web.MethodType.UNARY,
  proto.contacts.Empty,
  proto.contacts.ContactList,
  /**
   * @param {!proto.contacts.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.contacts.ContactList.deserializeBinary
);


/**
 * @param {!proto.contacts.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.contacts.ContactList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.contacts.ContactList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.contacts.ContactServiceClient.prototype.getContacts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/contacts.ContactService/GetContacts',
      request,
      metadata || {},
      methodDescriptor_ContactService_GetContacts,
      callback);
};


/**
 * @param {!proto.contacts.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.contacts.ContactList>}
 *     Promise that resolves to the response
 */
proto.contacts.ContactServicePromiseClient.prototype.getContacts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/contacts.ContactService/GetContacts',
      request,
      metadata || {},
      methodDescriptor_ContactService_GetContacts);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.contacts.Contact,
 *   !proto.contacts.Contact>}
 */
const methodDescriptor_ContactService_UpdateContact = new grpc.web.MethodDescriptor(
  '/contacts.ContactService/UpdateContact',
  grpc.web.MethodType.UNARY,
  proto.contacts.Contact,
  proto.contacts.Contact,
  /**
   * @param {!proto.contacts.Contact} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.contacts.Contact.deserializeBinary
);


/**
 * @param {!proto.contacts.Contact} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.contacts.Contact)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.contacts.Contact>|undefined}
 *     The XHR Node Readable Stream
 */
proto.contacts.ContactServiceClient.prototype.updateContact =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/contacts.ContactService/UpdateContact',
      request,
      metadata || {},
      methodDescriptor_ContactService_UpdateContact,
      callback);
};


/**
 * @param {!proto.contacts.Contact} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.contacts.Contact>}
 *     Promise that resolves to the response
 */
proto.contacts.ContactServicePromiseClient.prototype.updateContact =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/contacts.ContactService/UpdateContact',
      request,
      metadata || {},
      methodDescriptor_ContactService_UpdateContact);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.contacts.ContactID,
 *   !proto.contacts.Empty>}
 */
const methodDescriptor_ContactService_DeleteContact = new grpc.web.MethodDescriptor(
  '/contacts.ContactService/DeleteContact',
  grpc.web.MethodType.UNARY,
  proto.contacts.ContactID,
  proto.contacts.Empty,
  /**
   * @param {!proto.contacts.ContactID} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.contacts.Empty.deserializeBinary
);


/**
 * @param {!proto.contacts.ContactID} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.contacts.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.contacts.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.contacts.ContactServiceClient.prototype.deleteContact =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/contacts.ContactService/DeleteContact',
      request,
      metadata || {},
      methodDescriptor_ContactService_DeleteContact,
      callback);
};


/**
 * @param {!proto.contacts.ContactID} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.contacts.Empty>}
 *     Promise that resolves to the response
 */
proto.contacts.ContactServicePromiseClient.prototype.deleteContact =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/contacts.ContactService/DeleteContact',
      request,
      metadata || {},
      methodDescriptor_ContactService_DeleteContact);
};


module.exports = proto.contacts;
