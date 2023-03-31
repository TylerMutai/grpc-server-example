proto:
	protoc -I=src/protos src/protos/*.proto --js_out=import_style=commonjs,binary:src/protos --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:src/protos
