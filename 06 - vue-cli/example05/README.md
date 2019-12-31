# Step 1. Build Vue

```bash
$ npm run build
```

# Step 2. Build Image

```bash
$ docker build -t vue/example .
```

# Step 3. `docker run`

```bash
$ docker run -d -p 8080:80 vue/example:latest
```