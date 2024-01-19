<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="150" alt="Nest Logo" /></a>
  <a href="https://react.dev/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/539px-React-icon.svg.png" width="150" alt="React Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Full Stack application (Nest.js, React.js, PostgreSQL)

---

## Description

The application utilizes JWT authentication, with the Nest.js framework employed on the server side. User data is stored in a PostgreSQL database. The primary concept involves users registering in the application created with the React.js library. The forms are validated using React Hook Form, displaying errors when applicable.

Upon making a request to the server, various pipes, guards, and filters are implemented, and the expected parameters are transformed based on the DTO schema. Additionally, to address multiple logins from different devices using the same account, a fingerprint service is integrated to capture browser information. This information is saved in the database for subsequent verification and identification.

Password hashing is employed, and all necessary information is written to the database. A pair of tokens is generated: an access token and a refresh token. The refresh token is written to an HTTP-only cookie, while the access token is returned in the response. The access token is then stored in the Redux store, facilitating access to protected pages on the client side.

For every subsequent request to the server, the access token is sent as an authorization header. When the access token expires, a request is made to the refresh route to check the validity of the refresh token. Upon a positive response, a new pair of tokens is generated and returned.

Upon logout, cookies and the Redux store are cleared to ensure security.

***All server API endpoints are described in Swagger!***

### Stack technologies:
* Server:
  - Nest.js Framework with TypeScript
  - Postgresql database
  - Prisma ORM
  - class-validator, class-transformer
  - argon2 for hashing passwords
  - passport, passport-jwt
  - nestjs-fingerprint for capture browser info
  - Swagger documentation API

* Client:
  - React
  - Redux Toolkit with RTK Query
  - Tailwind CSS
  - Typescript
  - react-router-dom
  - react-hook-form
  - Vite

---

## Get started

```bash
$ cd .\server
````

Create **.env** file based on **.env.example** file!

Launch Docker on computer. In root folder for creation database container in terminal accomplish command:
```bash
$ docker compose up -d
```

---

## Installation

From root folder:

```bash
$ cd .\server
$ yarn install
$ cd ..\client
$ yarn install
```

## Running the app

### Server:

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

#### Prisma studio for visualization and control data through browser interface:

```bash
# Prisma Studio is up on http://localhost:5555
$ npx prisma studio
```

### Client:

After installation, run client application, proceed to command below:

```bash
$ # start dev server and open browser
$ yarn run dev
$ # build for production
$ yarn run build
$ # locally preview production build
$ yarn run preview
```

## Swagger API documentation is available, when server launched:

> By default:
> http://localhost:5000/api

or

> process.env.PORT value `/api`
