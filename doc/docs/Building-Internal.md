# Building Internal

## Docker

Build and push the Try Now page with:

```bash
docker build -t cdt-cloud-try-now-page:latest -f dockerfiles/try-now-page/Dockerfile .
docker tag cdt-cloud-try-now-page:latest <tbd>/cdt-cloud-try-now-page:latest
docker push <tbd>/cdt-cloud-try-now-page:latest
```
