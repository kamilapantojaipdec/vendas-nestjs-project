import {
  BadRequestException,
  // BadGatewayException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createPasswordHashed, validatePassword } from '../utils/password';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/createUser.dto';
import { UpdatePasswordDTO } from './dtos/update-password.dto';
import { UserType } from './enum/user-type.enum';
import { UserEntity } from './interfaces/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const user = await this.findUserByEmail(createUserDto.email).catch(
      () => undefined,
    );

    if (user) {
      throw new UnauthorizedException('Email já registrado no sistema');
    }

    const passwordHashed = await createPasswordHashed(createUserDto.password);

    return this.userRepository.save({
      ...createUserDto,
      typeUser: UserType.User,
      password: passwordHashed,
    });
  }

  async getAllUser(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async getUserByIdUsingRelations(userId: number): Promise<UserEntity> {
    return this.userRepository.findOne({
      where: {
        id: userId,
      },
      relations: {
        addresses: {
          city: {
            state: true,
          },
        },
      },
    });
  }

  async findUserById(userId: number): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new NotFoundException(`UserId: ${userId} Not Found`);
    }
    return user;
  }

  async findUserByEmail(email: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      throw new NotFoundException(`UserId: ${email} Not Found`);
    }
    return user;
  }

  async updatePasswordUser(
    updatePasswordDTO: UpdatePasswordDTO,
    userId: number,
  ): Promise<UserEntity> {
    const user = await this.findUserById(userId);

    const passwordHashed = await createPasswordHashed(
      updatePasswordDTO.newPassword,
    );

    const isMatch = await validatePassword(
      updatePasswordDTO.lastPassword,
      user.password || '',
    );

    if (!isMatch) throw new BadRequestException('Last password invalid');

    return this.userRepository.save({ ...user, password: passwordHashed });
  }
}
