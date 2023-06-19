import { PartialType } from '@nestjs/mapped-types';
import { CreateTableAccountDto } from './create-table-account-dto';

export class UpdateTableAccountDto extends PartialType(CreateTableAccountDto) {}
