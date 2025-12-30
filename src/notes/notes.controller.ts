import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Get()
  getAll() {
    return this.notesService.findAll();
  }

  @Get('/:id')
  getOne(@Param("id") id: number) {
    return this.notesService.findOne(id)
  }

  @Post()
  create(@Body() data: CreateNoteDto) {
    return this.notesService.create(data.note);
  }

  @Put('/:id')
  update(@Param("id") id: number, @Body() data: UpdateNoteDto) {
    return this.notesService.updateOne(id, data.note)
  }

  @Delete('/:id')
  remove(@Param("id") id: number) {
    return this.notesService.removeOne(id)
  }
}
