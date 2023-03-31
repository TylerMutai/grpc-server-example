#proto:
#	protoc -I=src/protos src/protos/*.proto --js_out=import_style=commonjs,binary:src/protos --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:src/protos

PROTO_DIR=./src/protos

proto_types:
	protoc \
  --plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
  --js_out="import_style=commonjs,binary:./" --ts_out="./" ${PROTO_DIR}/*.proto

proto_web:
	protoc \
  --plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
  --js_out="import_style=commonjs,binary:./" --ts_out="service=grpc-web:./" ${PROTO_DIR}/*.proto


# Generate Types
#proto_types:
#	npx proto-loader-gen-types --longs=String --enums=String \
#  --defaults --oneofs --grpcLib=@grpc/grpc-js \
#  --outDir=${PROTO_DIR} ${PROTO_DIR}/*.proto
#
## Generate JS and TS code
#proto_js:
#	protoc -I=${PROTO_DIR} ${PROTO_DIR}/*.proto \
#  --js_out=import_style=commonjs:${PROTO_DIR} \
#  --grpc-web_out=import_style=typescript,mode=grpcwebtext:${PROTO_DIR}
#
proto: proto_types proto_web