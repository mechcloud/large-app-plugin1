# large-app-plugin1

## Deploying this plugin in docker
```
cd <workspace>
git checkout git@github.com:koyadume/large-app-plugin1.git
cd large-app-plugin1
docker build -t large-app-plugin1 . && docker run -d --name=large-app-plugin1 -p 8091:80 large-app-plugin1
```

## Testing plugin app
```
curl http://<docker-vm-ip>:8091
```

