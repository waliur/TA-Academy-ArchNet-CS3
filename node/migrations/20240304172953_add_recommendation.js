/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('recommendation', function(table) {
        table.increments('Recommendation_id').notNullable().primary();
        table.integer('Crit_Id').notNullable();
        table.integer('Ass_Id').notNullable();
        table.string('Recommendation_Detail', [50]);
        table.string('Recommendation_Response', [50]);
        table.boolean('Completed');
        table.boolean('Archived');
    })
    //.toSQL().forEach(query => console.log(query.sql));
    .then(function () {
    return knex('recommendation').insert([
        {Crit_Id: 100, Ass_Id: 200,Recommendation_Detail: 'Test Recommendation', Recommendation_Response: 'Initial Response', Completed: true, Archived: false},
        {Crit_Id: 200, Ass_Id: 300,Recommendation_Detail: 'Test Recommendation', Recommendation_Response: 'Initial Response', Completed: false, Archived: false}
    ]);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('recommendation');
};