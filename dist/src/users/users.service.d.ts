import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UpdateUserDTO } from './dtos/update-user.dto';
export declare class UsersService {
    private repo;
    constructor(repo: Repository<User>);
    create(email: string, password: string, username: string): Promise<User>;
    find(email: string): Promise<User[]>;
    findOne(id: number): Promise<User>;
    update(id: number, body: UpdateUserDTO): Promise<User>;
    remove(id: number): Promise<User>;
}
