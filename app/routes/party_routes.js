const ObjectID = require('mongodb').ObjectID;

module.exports = (app, db, pokedex) => {
  app.get('/party', (req, res) => {
    db.collection('party').find().limit(6).toArray((err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
    });
  });

  app.delete('/party/:name', (req, res) => {
    const name = { 'name': req.params.name };
    db.collection('party').deleteMany( {name: name.name}, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send('Name ' + item + ' deleted');
      }
    });
  });

  app.post('/party/:name', (req, res) => {
    pokedex.getPokemonByName(req.params.name).then(response => {
      const pokemon = { name: response.name, id: response.id};
      db.collection('party').insert(pokemon, (err, result) => {
        if (err) {
          res.send({ 'error': 'An error has occurred' });
        } else {
          res.send(result.ops[0]);
        }
      });
    });
  });

  app.put('/party/:name1/:name2', (req, res) => {
    pokedex.getPokemonByName(req.params.name2).then(response => {
      const oldMon = { 'name': req.params.name1 };
      const newMon = { name: response.name, id: response.id};
      db.collection('party').update(oldMon, newMon, (err, result) => {
        if (err) {
            res.send({'error':'An error has occurred'});
        } else {
            res.send(newMon);
        }
      });
    });
  });
};
