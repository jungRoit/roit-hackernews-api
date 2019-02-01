module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'roit-hackernews',
      user: 'lf',
      password:'lf',
      host:'localhost'
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  },
  production : {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  }
}