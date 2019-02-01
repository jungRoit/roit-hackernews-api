
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Roit', email: 'roit.jung@gmail.com', username: 'roit', password: '123456', role_id: 1},
        {id: 2, name: 'John', email: 'john.jung@gmail.com', username: 'john', password: '123456', role_id: 1},
        {id: 3, name: 'Jack', email: 'jack.jung@gmail.com', username: 'jack', password: '123456', role_id: 1}
      ]);
    });
};
