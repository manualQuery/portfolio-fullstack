import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";


@Injectable()

export class PrismaService extends PrismaClient implements OnModuleInit{
constructor (){
    super()
    
}
async onModuleInit() {
    try {
      await this.$connect();
      const students = await this.user.findMany();
    //   console.log('user:',this.user);
      console.log('Successfully connected to the database');
    } catch (error) {
      console.error('Error connecting to the database:', error);
      throw error; 
    }
  }
}