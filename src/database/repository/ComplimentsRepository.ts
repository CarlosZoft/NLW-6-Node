import { EntityRepository, Repository } from 'typeorm';
import { Compliment } from '../entity/Compliment';

@EntityRepository(Compliment)
export class ComplimentsRepository extends Repository<Compliment> {

}