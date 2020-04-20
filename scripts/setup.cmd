mkdir node_modules
docker volume create nodemodules
docker-compose -f docker.compose.builder.yml run --rm install