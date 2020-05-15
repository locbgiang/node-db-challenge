
exports.up = function(knex) {
    return knex.schema
    .createTable('Projects', tbl=>{
        tbl.increments();
        tbl.string('Name', 255).notNullable();
        tbl.string('Description', 255);
        tbl.boolean('Completed').notNullable().defaultTo(false);
    })
    .createTable('Tasks', tbl=>{
        tbl.increments();
        tbl.integer('Project_ID').unsigned().notNullable().references('Projects.id').onUpdate('CASCADE').onDelete('RESTRICT');
        tbl.string('Step', 255).notNullable();
        tbl.string('Note', 255);
        tbl.boolean('Completed').notNullable().defaultTo(false);
    })
    .createTable('Resources', tbl=>{
        tbl.increments();
        tbl.string('Name', 255).notNullable();
        tbl.string('Description', 255);
    })
    .createTable('Project_Resources', tbl=>{
        tbl.increments();
        tbl.integer('Project_ID').unsigned().notNullable().references('Projects.id').onUpdate('CASCADE').onDelete('RESTRICT');
        tbl.integer('Resource_ID').unsigned().notNullable().references('Resources.id').onUpdate('CASCADE').onDelete('RESTRICT');

    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('Project_Resources')
    .dropTableIfExists('Resources')
    .dropTableIfExists('Tasks')
    .dropTableIfExists('Projects')
};