import { PartialType } from '@nestjs/mapped-types';
import { CreateDiscountCuponDto } from './create-discount_cupon.dto';

export class UpdateDiscountCuponDto extends PartialType(CreateDiscountCuponDto) {}
