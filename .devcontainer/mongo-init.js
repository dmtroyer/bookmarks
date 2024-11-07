// Create a new user with readWrite privileges in the bookmarks database
db.createUser({
  user: process.env.MONGODB_USER,
  pwd: process.env.MONGODB_PASSWORD,
  roles: [{ role: "readWrite", db: "bookmarks" }]
});
