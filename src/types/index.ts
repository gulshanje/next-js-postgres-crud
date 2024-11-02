export interface Author {
    id: number;
    name: string;
    bio: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Genre {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;

}

export interface Book {
    id: number;
    title: string;
    description: string;
    price: number;
    authorId: number;
    genreId: number;
    createdAt: Date;
    updatedAt: Date;

}

declare module "knex/types/tables" {
    interface Tables {
        authors: Author;
        genres: Genre;
        books: Book;
    }
}