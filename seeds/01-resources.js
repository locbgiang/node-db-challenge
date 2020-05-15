exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Resources').insert([
        {Name: "Computer", Description: "A personal computer"},
        {Name: "Room", Description: "A large room to work in"},
        {Name: "Vehicle"},
        {Name: "Microphone"},
      ]);
    });
};
