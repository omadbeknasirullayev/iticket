import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { Card } from './entities/card.entity';

@Injectable()
export class CardService {
  constructor (@InjectModel(Card) private cardRepository: typeof Card) {}

  // create
  async create(createCardDto: CreateCardDto) {
    const card = await this.cardRepository.create(createCardDto)
    return {message: "Successfully added", info: card}
  }
  
  // findAll
  async findAll() {
    const cards = await this.cardRepository.findAll({include: {all: true}})
    return cards
  }
  
  //findOne
  async findOne(id: number) {
    const card = await this.cardRepository.findOne({where: {id}, include: {all: true}})    
    if (!card) {
      throw new NotFoundException('No such card exists');
    }
    return card;
  }
  
  //update
  async update(id: number, updateCardDto: UpdateCardDto) {
    const card = await this.cardRepository.findOne({where: {id}})    
    if (!card) {
      throw new NotFoundException('No such card exists');
    }
    const updated = await this.cardRepository.update(updateCardDto, {where: {id}})
    return {message: "Successfully updated", count: updated}
  }

  // remove
  async remove(id: number) {
    const deleted = await this.cardRepository.destroy({where: {id}})
    return {message: "Successfully removed", count: deleted}
  }
}
