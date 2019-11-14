const partyRoutes = require('./party_routes');
const teamRoutes = require('./team_routes');

module.exports = (app, db, pokedex) => {
  partyRoutes(app, db, pokedex);
  teamRoutes(app, db, pokedex);
};
