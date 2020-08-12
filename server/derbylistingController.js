const db = require('./derbylistingModel');

const derbylistingController = {};

derbylistingController.getLeagues = function (req, res, next) {
  const leagues = `
  SELECT country, region, city, name, status
  FROM "public"."leagues" `;

  db.query(leagues)
    .then((data) => {
      // res.body
      res.locals.leagues = { hi: 'there' }; // {'hi':'there'}
      console.log(res.locals.leagues);
      next();
    });
};

// derbylistingController.addLeagues = async function (req, res, next) {
//   const update = `
//   INSERT INTO "public"."leagues"
//   VALUES (user input from form)`;
//   const data = await db.query(update);
//   res.locals.update = data;
// };

module.exports = derbylistingController;
