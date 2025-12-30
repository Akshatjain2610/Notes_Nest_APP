import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UsersService {
    private usersRepo;
    constructor(usersRepo: Repository<User>);
    findByEmail(email: string): Promise<User | null>;
    create(user: Partial<User>): Promise<User>;
}
