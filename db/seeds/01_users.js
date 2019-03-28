
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, 
          name: 'Lucas', 
          email: 'lucasbeemer@gmail.com', 
          password: 'password'
        },
        { id: 2, 
          name: 'Jerry', 
          email: 'jerrysmith@gmail.com', 
          password: 'password'
        },
        { id: 3, 
          name: 'Monica', 
          email: 'monicalewis@yahoo.com', 
          password: 'password'
        }
      ]);
    });
};
