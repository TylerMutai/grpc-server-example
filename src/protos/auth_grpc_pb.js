// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var auth_pb = require('./auth_pb.js');

function serialize_auth_LoginRequest(arg) {
  if (!(arg instanceof auth_pb.LoginRequest)) {
    throw new Error('Expected argument of type auth.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_LoginRequest(buffer_arg) {
  return auth_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_LoginResponse(arg) {
  if (!(arg instanceof auth_pb.LoginResponse)) {
    throw new Error('Expected argument of type auth.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_LoginResponse(buffer_arg) {
  return auth_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_UserRequest(arg) {
  if (!(arg instanceof auth_pb.UserRequest)) {
    throw new Error('Expected argument of type auth.UserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_UserRequest(buffer_arg) {
  return auth_pb.UserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_UserResponse(arg) {
  if (!(arg instanceof auth_pb.UserResponse)) {
    throw new Error('Expected argument of type auth.UserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_UserResponse(buffer_arg) {
  return auth_pb.UserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthServiceService = exports.AuthServiceService = {
  login: {
    path: '/auth.AuthService/Login',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.LoginRequest,
    responseType: auth_pb.LoginResponse,
    requestSerialize: serialize_auth_LoginRequest,
    requestDeserialize: deserialize_auth_LoginRequest,
    responseSerialize: serialize_auth_LoginResponse,
    responseDeserialize: deserialize_auth_LoginResponse,
  },
  userMe: {
    path: '/auth.AuthService/UserMe',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.UserRequest,
    responseType: auth_pb.UserResponse,
    requestSerialize: serialize_auth_UserRequest,
    requestDeserialize: deserialize_auth_UserRequest,
    responseSerialize: serialize_auth_UserResponse,
    responseDeserialize: deserialize_auth_UserResponse,
  },
};

exports.AuthServiceClient = grpc.makeGenericClientConstructor(AuthServiceService);
