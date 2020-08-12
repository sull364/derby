const db = require('./derbylistingModel');

const derbylistingController = {};

derbylistingController.getLeagues = async function (req, res, next) {
  const leagues = `
  SELECT country, region, city, name, status
  FROM "public"."leagues" `;

  const data = await db.query(leagues);
  res.locals.leagues = data.rows;
  next();
};

// derbylistingController.addLeagues = async function (req, res, next) {
//   const update = `
//   INSERT INTO "public"."leagues"
//   VALUES (user input from form)`;
//   const data = await db.query(update);
//   res.locals.update = data;
// };

module.exports = derbylistingController;
