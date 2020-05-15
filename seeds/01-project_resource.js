exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Project_Resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Project_Resources').insert([
        {Project_ID: 1, Resource_ID: 1},
        {Project_ID: 1, Resource_ID: 2},
        {Project_ID: 2, Resource_ID: 1},
        {Project_ID: 2, Resource_ID: 2},
        {Project_ID: 2, Resource_ID: 4},
      ]);
    });
};