import { ICreateUserDTO } from '@modules/account/dto/ICreateUserDTO';
import { User } from '@modules/account/entities/User';

interface IUsersRepository {
  create({
    id,
    name,
    password,
    email,
    driver_license,
    avatar,
  }: ICreateUserDTO): Promise<User>;
  list(): Promise<User[]>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
}

export { IUsersRepository };
