import { CreateUserDTO } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDTO } from './dtos/update-user.dto';
import { AuthService } from './auth/auth.service';
import { User } from './entities/user.entity';
import { SigninDTO } from './dtos/signin.dto';
export declare class UsersController {
    private usersService;
    private authService;
    constructor(usersService: UsersService, authService: AuthService);
    whoAmI(user: User): User;
    createUser(body: CreateUserDTO, session: any): Promise<User>;
    signin(body: SigninDTO, session: any): Promise<User>;
    signOut(session: any): void;
    findUser(id: string): Promise<User>;
    findAllUsers(email: string): Promise<User[]>;
    removeUser(id: string): Promise<User>;
    updateUser(id: string, body: UpdateUserDTO): Promise<User>;
}
