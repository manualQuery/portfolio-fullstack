// src/user/user.controller.ts

import { Controller, Post, Body, Param, Get,UploadedFile, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, LoginUserDto } from './create-user-dto/dto';
import { CreateProfileDto } from './create-profile-dto/dto';
import { FileInterceptor } from '@nestjs/platform-express';
// import { storageConfig } from 'src/multer/multer.config';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.userService.register(createUserDto);
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    return this.userService.login(loginUserDto);
  }


   @Post('profile')
   
  async createProfile(@Body() createProfileDto: CreateProfileDto, @Param('userId') userId: number) {
    return this.userService.createProfile(userId, createProfileDto);
  }

// @Post('profile/:userId')
// @UseInterceptors(FileInterceptor('image', { storage: storageConfig }))
// async createProfile(
//   @Param('userId') userId: number,  // URL parameter (userId)
//   @UploadedFile() image: Express.Multer.File,  // File upload (image)
//   @Body() createProfileDto: CreateProfileDto,  // Request body
// ) {
//   if (image) {
//     // Set image URL/path in the DTO
//     createProfileDto.image = image.path;  // Assuming image is stored in 'path' property
//   }
//   return this.userService.createProfile(userId, createProfileDto);
// }


   @Get('profile/:userId')
  async getProfile(@Param('userId') userId: number) {
    return this.userService.getProfile(userId);
  }
}
