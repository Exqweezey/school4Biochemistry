build:
	docker build -t biochemistry .

run:
	docker run -d -p 3000:3000 --name school4Biochemistry --rm biochemistry