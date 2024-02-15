/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('criteria', function(table) {
        table.increments('Crit_id').notNullable().primary();
        table.string('Crit_name', [50]).unique();
        table.integer('Subcat_Id').notNullable();
        table.string('Cat_1', [50]);
        table.string('Cat_2', [50]);
        table.string('Cat_3', [50]);
        table.string('Cat_4', [50]);
        table.string('Cat_5', [50]);
        table.string('Cat_6', [50]);
    })
    //.toSQL().forEach(query => console.log(query.sql));
    .then(function () {
    return knex("criteria").insert([
        {Crit_name: "test1", Subcat_Id: 1}
    ]);
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function(knex) {
    return knex.schema.dropTable('criteria');
}
