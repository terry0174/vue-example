# Step 1. Build Image

```bash
$ docker build -t vue/example .
```

# Step 2. `docker run`

```bash
$ docker run -d -p 8080:80 vue/example:latest
```