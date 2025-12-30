import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './note.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private notesRepo: Repository<Note>,
  ) {}

  async findAll() {
    const data = await this.notesRepo.find({
        order: { createdAt: 'DESC' },
      })
    return {
      Notes: data,
      Total: data.length
    };
  }

  async findOne(id: number) {
    const note = await this.notesRepo.findOneBy({ id });

    if (!note) {
      throw new NotFoundException('Note not found');
    }

    return note;
  }

  create(note: string) {
    const newNote = this.notesRepo.create({ note });
    return this.notesRepo.save(newNote);
  }

  async updateOne(id: number, newNote: string) {
    const note = await this.notesRepo.findOneBy({ id });

    if (!note) {
      throw new NotFoundException('Note not found');
    }

    note.note = newNote;

    return this.notesRepo.save(note);
  }

  async removeOne(id: number) {
    const data = await this.notesRepo.delete(id);
    return {
      message: "Note Deleted Succesfully"
    }
  }
}
