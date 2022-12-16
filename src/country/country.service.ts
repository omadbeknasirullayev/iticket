import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './entities/country.entity';

@Injectable()
export class CountryService {
  constructor(@InjectModel(Country) private countryRepository: typeof Country) {}

  async create(createCountryDto: CreateCountryDto) {
    return await this.countryRepository.create(createCountryDto);
  }

  async findAll() {
    return await this.countryRepository.findAll({include:{all:true}});
  }

  async findOne(id: number) {
    return await this.countryRepository.findByPk(+id);
  }

  async update(id: number, updateCountryDto: UpdateCountryDto) {
    const check = await this.countryRepository.findByPk(id)
    if(!check){
        throw new HttpException(
            'Id is incorrect',
            HttpStatus.BAD_REQUEST
        )
    }
    const newCountry = await this.countryRepository.update({
        ...updateCountryDto
    },{where:{id:id},returning:true})
    return newCountry
  }

  async remove(id: number) {
    return await this.countryRepository.destroy({
      where:{
        id:+id
      }
    });
  }
}