import {Author, LibraryResponse} from "../models/models";
import axios from "axios";

class AuthorService {
    // TODO get this from evn variables
    private API_URL = 'http://localhost:8081/v1/api/authors';

    async getAllAuthors(): Promise<Author[]> {
        try {
            const response = await axios.get<LibraryResponse<Author[]>>(this.API_URL);
            return response.data.data;
        } catch (error) {
            throw new Error('Error fetching authors');
        }
    }

    async getAuthorById(id: number): Promise<Author> {
        try {
            const response = await axios.get<LibraryResponse<Author>>(`${this.API_URL}/${id}`);
            return response.data.data;
        } catch (error) {
            throw new Error(`Error fetching author with ID ${id}`);
        }
    }

    async createAuthor(author: Author): Promise<Author> {
        try {
            const response = await axios.post<LibraryResponse<Author>>(this.API_URL, author);
            return response.data.data;
        } catch (error) {
            throw new Error('Error creating author');
        }
    }

    async updateAuthor(id: number, author: Author): Promise<Author> {
        try {
            await axios.put<Author>(`${this.API_URL}/${id}`, author);
            return author;
        } catch (error) {
            throw new Error(`Error updating author with ID ${id}`);
        }
    }

    async deleteAuthor(id: number): Promise<void> {
        try {
            await axios.delete(`${this.API_URL}/${id}`);
        } catch (error) {
            throw new Error(`Error deleting author with ID ${id}`);
        }
    }
}

export const authorService = new AuthorService();
