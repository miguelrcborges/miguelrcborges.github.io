COMPONENTS = $(wildcard components/*.html)

.PHONY = build

build: compiled.js

compiled.js: $(COMPONENTS)
	html2js $^
