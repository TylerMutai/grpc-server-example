// package: contacts
// file: src/protos/contacts.proto

import * as src_protos_contacts_pb from "../../src/protos/contacts_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ContactServiceAddContact = {
  readonly methodName: string;
  readonly service: typeof ContactService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_protos_contacts_pb.Contact;
  readonly responseType: typeof src_protos_contacts_pb.ContactID;
};

type ContactServiceGetContacts = {
  readonly methodName: string;
  readonly service: typeof ContactService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_protos_contacts_pb.Empty;
  readonly responseType: typeof src_protos_contacts_pb.ContactList;
};

type ContactServiceUpdateContact = {
  readonly methodName: string;
  readonly service: typeof ContactService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_protos_contacts_pb.Contact;
  readonly responseType: typeof src_protos_contacts_pb.Contact;
};

type ContactServiceDeleteContact = {
  readonly methodName: string;
  readonly service: typeof ContactService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_protos_contacts_pb.ContactID;
  readonly responseType: typeof src_protos_contacts_pb.Empty;
};

export class ContactService {
  static readonly serviceName: string;
  static readonly AddContact: ContactServiceAddContact;
  static readonly GetContacts: ContactServiceGetContacts;
  static readonly UpdateContact: ContactServiceUpdateContact;
  static readonly DeleteContact: ContactServiceDeleteContact;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class ContactServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  addContact(
    requestMessage: src_protos_contacts_pb.Contact,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_protos_contacts_pb.ContactID|null) => void
  ): UnaryResponse;
  addContact(
    requestMessage: src_protos_contacts_pb.Contact,
    callback: (error: ServiceError|null, responseMessage: src_protos_contacts_pb.ContactID|null) => void
  ): UnaryResponse;
  getContacts(
    requestMessage: src_protos_contacts_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_protos_contacts_pb.ContactList|null) => void
  ): UnaryResponse;
  getContacts(
    requestMessage: src_protos_contacts_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: src_protos_contacts_pb.ContactList|null) => void
  ): UnaryResponse;
  updateContact(
    requestMessage: src_protos_contacts_pb.Contact,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_protos_contacts_pb.Contact|null) => void
  ): UnaryResponse;
  updateContact(
    requestMessage: src_protos_contacts_pb.Contact,
    callback: (error: ServiceError|null, responseMessage: src_protos_contacts_pb.Contact|null) => void
  ): UnaryResponse;
  deleteContact(
    requestMessage: src_protos_contacts_pb.ContactID,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_protos_contacts_pb.Empty|null) => void
  ): UnaryResponse;
  deleteContact(
    requestMessage: src_protos_contacts_pb.ContactID,
    callback: (error: ServiceError|null, responseMessage: src_protos_contacts_pb.Empty|null) => void
  ): UnaryResponse;
}

