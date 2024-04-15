/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('assessment', function(table) {
        table.increments('Ass_Id').notNullable().primary();
        table.string('Ass_Name', [50]).unique();
        table.integer('Client_Id').notNullable();
        table.integer('Service_Id').notNullable();
        table.integer('Template_Id').notNullable();
        table.jsonb('Criteria');
        table.jsonb('Results');
        table.date('Date_Created');
        table.date('Last_Modified');
    })
    //.toSQL().forEach(query => console.log(query.sql));
    .then(function () {
    return knex('assessment').insert([
        {Ass_Name: 'Appilcation Upgrade', Client_Id: 1, Service_Id: 2, Template_Id: 3},
        {Ass_Name: 'Cloud Migration', Client_Id: 2, Service_Id: 3, Template_Id: 4},
        {Ass_Name: 'Scoping Study', Client_Id: 3, Service_Id: 4, Template_Id: 5}
    ]);
  })
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('assessment');
};