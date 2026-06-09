COMPOSE := docker compose
DEV_SERVICE := app-dev
PROD_SERVICE := app-prod

.PHONY: dev dev-build prod prod-build down logs ps cache-clear docker-cache-clear clean typecheck

dev:
	$(COMPOSE) up -d $(DEV_SERVICE)

dev-build:
	$(COMPOSE) up -d --build $(DEV_SERVICE)

prod:
	$(COMPOSE) up -d $(PROD_SERVICE)

prod-build:
	$(COMPOSE) up -d --build $(PROD_SERVICE)

down:
	$(COMPOSE) down --remove-orphans

logs:
	$(COMPOSE) logs -f

ps:
	$(COMPOSE) ps

cache-clear:
	$(COMPOSE) down -v --remove-orphans
	rm -rf node_modules/.vite dist

docker-cache-clear:
	$(COMPOSE) down -v --remove-orphans
	docker builder prune -f

clean: cache-clear

typecheck:
	$(COMPOSE) run --rm $(DEV_SERVICE) npm run typecheck
