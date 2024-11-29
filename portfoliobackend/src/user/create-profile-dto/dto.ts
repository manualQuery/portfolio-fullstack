import { IsString, IsOptional } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @IsOptional()
  image?: string;

  @IsString()
  @IsOptional()
  occupation?: string;

  @IsString()
  gender: string;

  @IsString()
  religion: string;

  @IsString()
  @IsOptional()
  description?: string;
}



export class UpdateProfileDto {
  @IsString()
  @IsOptional()
  image?: string;

  @IsString()
  @IsOptional()
  occupation?: string;

  @IsString()
  @IsOptional()
  gender?: string;

  @IsString()
  @IsOptional()
  religion?: string;

  @IsString()
  @IsOptional()
  description?: string;
}
