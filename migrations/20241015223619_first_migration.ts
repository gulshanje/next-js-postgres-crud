import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('authors', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.text('bio').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })

    .createTable('genres', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable().unique().index();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })

    .createTable('books', (table) => {
        table.increments('id').primary();
        table.text('title').notNullable().unique().index();
        table.text('description').notNullable();
        table.integer('price').notNullable();
        table.integer('genre_id').references('genres.id').notNullable();
        table.integer('author_id').references('id').inTable('authors').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists('books');
    await knex.schema.dropTableIfExists('genres');
    await knex.schema.dropTableIfExists('authors');
}

