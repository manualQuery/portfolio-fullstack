// src/user/user.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto , LoginUserDto} from './create-user-dto/dto';
import { CreateProfileDto } from './create-profile-dto/dto';


@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async register(createUserDto: CreateUserDto) {
    const {email, confirmpassword, password, firstname, lastname, phoneNumber,username } = createUserDto;

    // Check if the user already exists
    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      throw new Error('User already exists');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user in the database
    const user = await this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        confirmpassword:confirmpassword,
        firstname,
        lastname,
        phoneNumber,
        username
      },
    });

    return user;
  }

  async login(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;

    // Find the user by email
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      throw new Error('Invalid credentials');
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }

    return user; // You can extend this to return a JWT or a session
  }

  async createProfile(userId: number, createProfileDto: CreateProfileDto) {
  const { image, occupation, gender, religion, description } = createProfileDto;

  // Check if profile already exists for the user
  const existingProfile = await this.prisma.profile.findUnique({
    where: { userId },
  });
  if (existingProfile) {
    throw new Error('Profile already exists for this user');
  }

  // Create new profile for the user
  const profile = await this.prisma.profile.create({
    data: {
      userId,
      image,
      occupation,
      gender,
      religion,
      description,
    },
  });

  return profile;
}

// async updateProfile(userId: number, updateProfileDto: UpdateProfileDto) {
//   const { image, occupation, gender, religion, description } = updateProfileDto;

//   // Check if the profile exists for the user
//   const existingProfile = await this.prisma.profile.findUnique({
//     where: { userId },
//   });
//   if (!existingProfile) {
//     throw new Error('Profile not found');
//   }

//   // Update the profile
//   const updatedProfile = await this.prisma.profile.update({
//     where: { userId },
//     data: {
//       image,
//       occupation,
//       gender,
//       religion,
//       description,
//     },
//   });

//   return updatedProfile;
// }
async getProfile(userId: number) {
  const profile = await this.prisma.profile.findUnique({
    where: { userId },
    include: {
      user: true, // This will include the related User data
    },
  });

  if (!profile) {
    throw new Error('Profile not found');
  }

  return profile;
}


}
