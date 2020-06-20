module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        uri: env("DATABASE_URI"),
      },
      options: {
        database: "parish",
        ssl: true,
      },
    },
  },
});
