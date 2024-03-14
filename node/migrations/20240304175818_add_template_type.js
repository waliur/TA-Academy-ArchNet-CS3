/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('template_type', function(table) {
        table.increments('Temp_Type').notNullable().primary();
        table.integer('Template_Category').notNullable();
    })
    //.toSQL().forEach(query => console.log(query.sql));
    .then(function () {
    return knex('template_type').insert([
        {Template_Category: 1},
        {Template_Category: 2},
        {Template_Category: 3}
    ]);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('template_type');
};
