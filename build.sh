#!/bin/bash

npm run build
docker build --pull --rm -f "dockerfile" -t ducthach1401/cloud-ui:0.0.2 "."
docker push ducthach1401/cloud-ui:0.0.2