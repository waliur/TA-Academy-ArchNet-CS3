/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('template_criteria_association', function(table) {
        table.increments('Association_Id').notNullable().primary();
        table.integer('Crit_Id').notNullable();
        table.integer('Template_Id').notNullable();
    })
    //.toSQL().forEach(query => console.log(query.sql));
    .then(function () {
    return knex('template_criteria_association').insert([
        {Crit_Id: 1, Template_Id: 2},
        {Crit_Id: 2, Template_Id: 3},
        {Crit_Id: 3, Template_Id: 4}
    ]);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('template_criteria_association');
};