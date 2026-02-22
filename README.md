# Levios Fullstack Template

Full-stack e-commerce monorepo: Levios backend + Next.js 15 storefront (full starter content: cart, checkout, account, products).

## Structure

```
apps/
  backend/       Levios commerce backend (API + Admin Dashboard at /app)
  storefront/    Next.js 15 App Router storefront
packages/
  shared/        Shared types and utilities
```

## Quick Start

### 1. Start infrastructure

**With Docker (local PostgreSQL + Redis):**

```bash
docker compose up -d
```

**With Supabase:** Skip Docker for PostgreSQL — only start Redis or use Upstash.

### 2. Configure environment

```bash
cp .env.example apps/backend/.env
```

Edit `apps/backend/.env` with your database credentials.

For the storefront:

```bash
cp .env.example apps/storefront/.env.local
```

### 3. Install dependencies

```bash
# With bun
bun install

# Or with yarn
yarn install
```

### 4. Run migrations and seed

```bash
bun run dev:backend
# In another terminal:
cd apps/backend && bunx levios db:migrate && bun run seed
```

### 5. Start development

```bash
bun run dev
```

- Backend: http://localhost:9000
- Admin Dashboard: http://localhost:9000/app
- Storefront: http://localhost:3000

## Database Options

### Local PostgreSQL

Use the included `docker-compose.yml`:

```bash
docker compose up -d postgres redis
```

### Supabase

1. Create a project at [supabase.com](https://supabase.com)
2. Copy the connection string from Settings > Database
3. Set `DATABASE_URL`, `SUPABASE_URL`, and `SUPABASE_SERVICE_KEY` in `apps/backend/.env`

## Customization

- **Custom API routes:** `apps/backend/src/api/`
- **Custom modules:** `apps/backend/src/modules/`
- **Custom workflows:** `apps/backend/src/workflows/`
- **Admin widgets:** `apps/backend/src/admin/`
- **Storefront pages:** `apps/storefront/src/app/`
