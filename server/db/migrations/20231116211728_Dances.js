/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('Dances', (table) => {
    table.increments('id')
    table.varchar('name')
    table.varchar('description')
    table.varchar('link')
    table.boolean('is_complete')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('Dnances')
}
