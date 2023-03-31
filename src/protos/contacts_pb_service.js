// package: contacts
// file: src/protos/contacts.proto

var src_protos_contacts_pb = require("../../src/protos/contacts_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ContactService = (function () {
  function ContactService() {}
  ContactService.serviceName = "contacts.ContactService";
  return ContactService;
}());

ContactService.AddContact = {
  methodName: "AddContact",
  service: ContactService,
  requestStream: false,
  responseStream: false,
  requestType: src_protos_contacts_pb.Contact,
  responseType: src_protos_contacts_pb.ContactID
};

ContactService.GetContacts = {
  methodName: "GetContacts",
  service: ContactService,
  requestStream: false,
  responseStream: false,
  requestType: src_protos_contacts_pb.Empty,
  responseType: src_protos_contacts_pb.ContactList
};

ContactService.UpdateContact = {
  methodName: "UpdateContact",
  service: ContactService,
  requestStream: false,
  responseStream: false,
  requestType: src_protos_contacts_pb.Contact,
  responseType: src_protos_contacts_pb.Contact
};

ContactService.DeleteContact = {
  methodName: "DeleteContact",
  service: ContactService,
  requestStream: false,
  responseStream: false,
  requestType: src_protos_contacts_pb.ContactID,
  responseType: src_protos_contacts_pb.Empty
};

exports.ContactService = ContactService;

function ContactServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ContactServiceClient.prototype.addContact = function addContact(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ContactService.AddContact, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ContactServiceClient.prototype.getContacts = function getContacts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ContactService.GetContacts, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ContactServiceClient.prototype.updateContact = function updateContact(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ContactService.UpdateContact, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ContactServiceClient.prototype.deleteContact = function deleteContact(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ContactService.DeleteContact, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.ContactServiceClient = ContactServiceClient;

