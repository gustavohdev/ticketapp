# Getting Started with the Ticketing App 🛸🛸🛸🛸

### Current Stack

- Next.js
- Shadcn
- TypeScript
- Prisma
- MySQL - [install and have a instance ready](https://dev.mysql.com/downloads/)
- Next Auth
- Zod
- TailwindCSS
- React Hook Form

💡 <i>Check also package.json</i>

### With this app you have:

- CRUD - Tickets and handle different types of status or priority
- CRUD - Users with different roles
- Have general information with a Ticket Dashboard
- You do have an all configured and secure application
- You can host your own Service Desk

## Easy Setup with Docker

- Have Docker on your machine - [Docker](https://www.docker.com/)
- Clone and go the root of the project
- Use:

```sh
docker compose up
```

✅ Your app is gonna be available at port 3000

🪪 You can login as an admin user with an ADMIN role with this one:
`admin`
`adminpass123`

⏭️ If wanna persist the data you will need to create a volume attached to the db inside docker-compose.yml

⏭️ One thing that I will be working on later or you can work on it your own, it's add logging to the tickets

## Manual Setup - Running Locally ( dev )

#### Have .env and .env.local file in your root directory

    .env
    DATABASE_URL="mysql://root:password@localhost:3306/TicketDB"

<br>

    .env.local
    NEXTAUTH_SECRET="v3gS0C5XYm7xOi9qr6glQNTE2d8TEs="

#### Generate your own auth secret––this is for Next Auth

    openssl rand -base64 32

#### Install Dependencies

    npm i

#### Bonus - Dump Data

✅ You have a SQL_DUMP_DATA.sql file, just execute that big statement in your DB, you should have example files now.

#### Generating Prisma Migrations

    npx prisma migrate dev
    // follow the steps, put any name you want for the migration
    // if you access your DB, your schema will be there

#### Run

    yarn run dev

## Deploying to Prod

#### Create an .env.prod, this will make you create the prod initial config locally

        DATABASE_URL=""
        NEXTAUTH_SECRET=""

#### Install these dependencies

       npm install dotenv-cli --save-dev
       npm install -g dotenv-cli

- Get a DB on AWS, Railway or any other service that you would like and setup your database ( Recommend MySQL for now ).
- Send your schema to your DB without generate migrations with...

  `dotenv -e .env.prod -- npx prisma db push`

  ‼️ Create your ADMIN user first in your production DB to be able to create users. ( SQL DUMP DATA already provides it)

## Deploying on Vercel

- Connect your Github repo to Vercel
- Override the build command to `prisma generate && next build`
- Add your production variables inside Vercel

#### <i>Your app should be running.</i>

## About Prisma when you go further

#### Hints 💡

`dotenv -e .env.prod -- npx prisma migrate deploy`

- This applies existing migration files safely (ones you've already created with migrate dev), and is the recommended way to apply schema changes in production.

#### Warnings ⚠️

` dotenv -e .env.prod -- npx prisma db push`

- Not recommended for production in most cases unless you're doing a fresh setup or have full control over data integrity.
