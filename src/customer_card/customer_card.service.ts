import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCustomerCardDto } from './dto/create-customer_card.dto';
import { UpdateCustomerCardDto } from './dto/update-customer_card.dto';
import { CustomerCard } from './entities/customer_card.entity';

@Injectable()
export class CustomerCardService {
  constructor(
    @InjectModel(CustomerCard)
    private customerCardRepository: typeof CustomerCard,
  ) {}

  // create
  async create(createCustomerCardDto: CreateCustomerCardDto) {
    const card = await this.customerCardRepository.findOne({
      where: { is_main: true, customer_id: createCustomerCardDto['customer_id']},
    });

    if (!card) {
      const customerCard = await this.customerCardRepository.create({
        ...createCustomerCardDto,
        is_main: true
    });
      return { message: 'Successfully added', info: customerCard };
    }

    const customerCard = await this.customerCardRepository.create(
      createCustomerCardDto,
      );
      console.log(createCustomerCardDto)
    return { message: 'Successfully added', info: customerCard };
  }

  //isMain
  async isMain(id: number, customer_id: number) {
    const card = await this.customerCardRepository.findOne({where: {is_main: true, customer_id}});
    if (card) {
      return {message: 'This card already main card'}
    }
    
    await this.customerCardRepository.update({is_main: false}, {where: {id: card.id}})
   
    await this.customerCardRepository.update({is_main: true}, {where: {id}})
    return {message: "Successfully changed"}
  }

  //activate
  async activate(id: number) {
    const card = await this.customerCardRepository.findOne({where: {id}})
    if(!card) {
      throw new NotFoundException('No such customerCard exists')
    }
   await this.customerCardRepository.update({is_active: true}, {where: {id}})
    return {message: "Successfully activate"}
  }


  // findAll
  async findAll() {
    const customerCards = await this.customerCardRepository.findAll({
      include: { all: true },
    });
    return customerCards;
  }

  //findOne
  async findOne(id: number) {
    const customerCard = await this.customerCardRepository.findOne({
      where: { id },
      include: { all: true },
    });
    if (!customerCard) {
      throw new NotFoundException('No such customerCard exists');
    }
    return customerCard;
  }

  //update
  async update(id: number, updateCustomerCardDto: UpdateCustomerCardDto) {
    const customerCard = await this.customerCardRepository.findOne({
      where: { id },
    });
    if (!customerCard) {
      throw new NotFoundException('No such customerCard exists');
    }
    const updated = await this.customerCardRepository.update(
      updateCustomerCardDto,
      { where: { id } },
    );
    return { message: 'Successfully updated', count: updated };
  }

  // remove
  async remove(id: number) {
    const deleted = await this.customerCardRepository.destroy({
      where: { id },
    });
    return { message: 'Successfully removed', count: deleted };
  }
}
