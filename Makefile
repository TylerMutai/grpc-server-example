PROTO_DIR=src/protos

proto_types:
	grpc_tools_node_protoc \
	--js_out=import_style=commonjs,binary:${PROTO_DIR} \
	--grpc_out=grpc_js:${PROTO_DIR} \
	--plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
	-I ${PROTO_DIR} \
	${PROTO_DIR}/*.proto

proto_web:
	protoc \
	--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
	--ts_out=grpc_js:${PROTO_DIR} \
	-I ${PROTO_DIR} \
	${PROTO_DIR}/*.proto

proto: proto_types proto_web