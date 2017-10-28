run:
	docker run -p 2333:2333 -d xhinliang/site

bash:
	docker run -p 2333:2333 --rm -t -i xhinliang/site bash

build:
	docker build -t xhinliang/site . 
