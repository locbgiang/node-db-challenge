exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Tasks').insert([
        {Project_ID: 1, Step: "1. Research Pokemon"},
        {Project_ID: 1, Step: "2. Build the website"},
        {Project_ID: 2, Step: "1. Play a lot of video games"},
        {Project_ID: 2, Step: "2. Code a new game"},
        {Project_ID: 3, Step: "1. Build a virus"}
      ]);
    });
};
