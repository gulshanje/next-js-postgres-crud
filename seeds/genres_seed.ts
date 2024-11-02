import { faker } from "@faker-js/faker/.";
import { Knex } from "knex";
import { Genre } from "../src/types";

const SEED_COUNT = 10;

const createGenres = (): Partial<Genre> => ( {
    name: faker.lorem.word(3),
    
});
export async function seed(knex: Knex): Promise<void> {
   const genres = Array(SEED_COUNT).fill(null).map(createGenres);
   await knex("genres").insert(genres);
};
