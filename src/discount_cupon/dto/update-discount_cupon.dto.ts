import { PartialType } from '@nestjs/swagger';
import { CreateDiscountCuponDto } from './create-discount_cupon.dto';

export class UpdateDiscountCuponDto extends PartialType(CreateDiscountCuponDto) {}
