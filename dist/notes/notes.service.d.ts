import { Repository } from 'typeorm';
import { Note } from './note.entity';
export declare class NotesService {
    private notesRepo;
    constructor(notesRepo: Repository<Note>);
    findAll(): Promise<{
        Notes: Note[];
        Total: number;
    }>;
    findOne(id: number): Promise<Note>;
    create(note: string): Promise<Note>;
    updateOne(id: number, newNote: string): Promise<Note>;
    removeOne(id: number): Promise<{
        message: string;
    }>;
}
