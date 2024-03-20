/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('category', function(table) {
        table.increments('Subcat').notNullable().primary();
        table.string('Subcat_Name', [50]);
        table.integer('Cat_Id').notNullable();
        table.string('Cat_Name', [50]).notNullable();
        table.boolean('Active');
    })
    //.toSQL().forEach(query => console.log(query.sql));
    .then(function () {
    return knex('category').insert([
        {Subcat_Name: 'List of preffered options', Cat_Id: 1, Cat_Name: 'Options_1'},
        {Subcat_Name: 'List of preffered options', Cat_Id: 2, Cat_Name: 'Options_1'},
        {Subcat_Name: 'List of preffered options', Cat_Id: 3, Cat_Name: 'Options_1'}
    ]);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('category');
};
