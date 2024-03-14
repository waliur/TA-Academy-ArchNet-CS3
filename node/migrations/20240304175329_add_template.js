/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('template', function(table) {
        table.increments('Template_Id').notNullable().primary();
        table.string('Template_Name', [50]).unique();
        table.integer('Temp_Type_Id').notNullable();
        table.boolean('Active');
        table.jsonb('Template_Contents');
    })
    //.toSQL().forEach(query => console.log(query.sql));
    .then(function () {
    return knex('template').insert([
        {Template_Name: 'Uprade Options', Temp_Type_Id: 1},
        {Template_Name: 'Migration Options', Temp_Type_Id: 2},
        {Template_Name: 'Problem Statement Options', Temp_Type_Id: 3},
    ]);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('template');
};
