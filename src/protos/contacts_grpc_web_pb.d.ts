import * as grpcWeb from 'grpc-web';

import * as contacts_pb from './contacts_pb';


export class ContactServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  addContact(
    request: contacts_pb.Contact,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: contacts_pb.ContactID) => void
  ): grpcWeb.ClientReadableStream<contacts_pb.ContactID>;

  getContacts(
    request: contacts_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: contacts_pb.ContactList) => void
  ): grpcWeb.ClientReadableStream<contacts_pb.ContactList>;

  updateContact(
    request: contacts_pb.Contact,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: contacts_pb.Contact) => void
  ): grpcWeb.ClientReadableStream<contacts_pb.Contact>;

  deleteContact(
    request: contacts_pb.ContactID,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: contacts_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<contacts_pb.Empty>;

}

export class ContactServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  addContact(
    request: contacts_pb.Contact,
    metadata?: grpcWeb.Metadata
  ): Promise<contacts_pb.ContactID>;

  getContacts(
    request: contacts_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<contacts_pb.ContactList>;

  updateContact(
    request: contacts_pb.Contact,
    metadata?: grpcWeb.Metadata
  ): Promise<contacts_pb.Contact>;

  deleteContact(
    request: contacts_pb.ContactID,
    metadata?: grpcWeb.Metadata
  ): Promise<contacts_pb.Empty>;

}

