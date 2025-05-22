#!/bin/sh
set -e

echo "Waiting for MySQL to be ready..."

until mysqladmin ping -h db -u root -padmin_pass123 --silent; do
  echo "Waiting for database connection..."
  sleep 2
done

echo "MySQL is up! Running Prisma migrations..."

npx prisma migrate deploy # Applies migrations from prisma/migrations

npx prisma generate        # Generates Prisma client (important after migrations/schema changes)

npx prisma migrate status

echo "Migrations done. Loading initial data from SQL..."

echo "Checking SQL dump file:"
ls -l /app/scripts/SQL_DUMP_DATA.sql
head -20 /app/scripts/SQL_DUMP_DATA.sql

mysql -h db -u root -padmin_pass123 TicketDB < /app/scripts/SQL_DUMP_DATA.sql 2> /tmp/sql_import_errors.log || {
  echo "Error during SQL import:"
  cat /tmp/sql_import_errors.log
  exit 1
}

echo "Data loaded. Starting app..."

exec npm run dev

echo "App exited"
