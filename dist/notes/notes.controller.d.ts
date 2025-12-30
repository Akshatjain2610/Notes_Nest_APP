import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
export declare class NotesController {
    private notesService;
    constructor(notesService: NotesService);
    getAll(): Promise<{
        Notes: import("./note.entity").Note[];
        Total: number;
    }>;
    getOne(id: number): Promise<import("./note.entity").Note>;
    create(data: CreateNoteDto): Promise<import("./note.entity").Note>;
    update(id: number, data: UpdateNoteDto): Promise<import("./note.entity").Note>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
