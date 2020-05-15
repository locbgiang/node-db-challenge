exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Projects').insert([
        {Name: "Build a website", Description: "A Pokemon website"},
        {Name: "Build a game"},
        {Name: "Build a virus"}
      ]);
    });
};