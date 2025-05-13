## Getting Started with the Ticketing App

#### Current Stack

- Next.js
- Shadcn
- TypeScript
- Prisma
- MySQL - [install and have a instance ready](https://dev.mysql.com/downloads/)
- Next Auth
- Zod
- TailwindCSS
- React Hook Form

> <i>Check also package.json</i>

#### With this app you have:

- CRUD - Tickets and handle different types of status or priority
- CRUD - Users with different roles
- Have general information with a Ticket Dashboard
- You do have an all configured and secure application
- You can host your own Service Desk

## Running Locally ( Dev )

You should have .env and .env.local file in your directory

    .env
    DATABASE_URL="mysql://root:password@localhost:3306/TicketDB"

<br>

    .env.local
    NEXTAUTH_SECRET="v3gS0C5XYm7xOi9qr6glQNTE2d8TEs="

you can generate your own auth secret with, this is for Next Auth

    openssl rand -base64 32

#### Install Dependencies

    npm i

#### Bonus - Dump Data

- You have a SQL_DUMP_DATA.txt file, just execute that big statement in your DB, you should have example files now.

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
- Send your schema to your DB without generate migrations with
  `dotenv -e .env.prod -- npx prisma db push`
  > Create your ADMIN user first in your production DB to be able to create users.

## Deploying on Vercel

- Connect your Github repo to Vercel
- Override the build command to `prisma generate && next build`
- Add your production variables, you will only have

Your app should be running.
