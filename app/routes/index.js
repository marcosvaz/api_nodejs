module.exports = (app) => {
  app.route('/')
    .get(async (req, res) => {
      res.send('Hello World');
    });
}