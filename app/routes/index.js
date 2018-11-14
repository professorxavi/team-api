const partyRoutes = require('./party_routes');

module.exports = (app, db, pokedex) => {
  partyRoutes(app, db, pokedex);
};
