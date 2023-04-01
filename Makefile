PROTO_DIR=src/protos

proto_types:
	grpc_tools_node_protoc \
	--js_out=import_style=commonjs,binary:${PROTO_DIR} \
	--grpc_out=${PROTO_DIR} \
	--plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
	-I ${PROTO_DIR} \
	${PROTO_DIR}/*.proto

proto_web:
	protoc \
	--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
	--ts_out=grpc_js:${PROTO_DIR} \
	-I ${PROTO_DIR} \
	${PROTO_DIR}/*.proto

#proto_web:
#	protoc \
#  --plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
#  --js_out="import_style=commonjs,binary:./" --ts_out="service=grpc-web:./" ${PROTO_DIR}/*.proto


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