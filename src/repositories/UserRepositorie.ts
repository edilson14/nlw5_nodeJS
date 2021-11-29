import { EntityRepository, Repository } from 'typeorm';
import { User } from '../models/User';

@EntityRepository(User)
class Usersrepositores extends Repository<User> {

    
}


export { Usersrepositores };