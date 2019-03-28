
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        { title: 'Batman Begins', 
          description: 'After training with his mentor, Bruce Wayne begins his fight to free crime-ridden Gotham City from corruption and finds his true identity.', 
          genre: 'Action',
          user_id: 2
        },
        { title: 'The Dark Knight', 
          description: 'The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.', 
          genre: 'Action',
          user_id: 1
        },
        { title: 'The Dark Knight Rises', 
          description: 'Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City, now on the edge of total annihilation, from the brutal guerrilla terrorist Bane.', 
          genre: 'Action',
          user_id: 3
        }
      ]);
    });
};
