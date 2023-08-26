NODE_BIN=./node_modules/.bin
PROTOS_PATH := grpc-protobufs
PROTOS := $(filter-out $(PROTOS_PATH), $(notdir $(shell find $(PROTOS_PATH) -maxdepth 1 -type d)))

build: pull npm_init clean_src generate_code npm_build

pull:
	git submodule init
	git submodule update --remote --merge

npm_init:
	test -d node_modules || npm ci

clean_src:
	rm -rf src
	mkdir src

generate_code: $(PROTOS)

$(PROTOS): %:
	mkdir src/$@

	$(NODE_BIN)/grpc_tools_node_protoc \
	--plugin=protoc-gen-ts_proto=$(NODE_BIN)/protoc-gen-ts_proto \
	--ts_proto_opt=env=node \
	--ts_proto_opt=forceLong=bigint \
	--ts_proto_out=src/$@ \
	--ts_proto_opt=outputServices=nice-grpc,outputServices=generic-definitions,useExactTypes=false,esModuleInterop=true \
	--proto_path=$(PROTOS_PATH)/$@ \
	$(PROTOS_PATH)/$@/*.proto

npm_build:
	npm run build
