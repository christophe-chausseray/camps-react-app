.DEFAULT_GOAL := help

## Help
.PHONY: help
help:
	@echo ""
	@echo "To install your camps application you need to run : make install"
	@echo ""

.PHONE: install
install:
	cp .env.dist .env
	yarn install
