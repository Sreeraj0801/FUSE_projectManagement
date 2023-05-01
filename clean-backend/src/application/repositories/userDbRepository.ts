import { userRepositoryMongoDb } from "../../frameworks/database/mongodb/repositories/userRepositoryMongoDb";
import { UserDetails } from "../../entities/users";
export default class userDbRepository {
  private repository: userRepositoryMongoDb;

  constructor(repository: userRepositoryMongoDb) {
    this.repository = repository;
  }

  async add(userDetails: UserDetails) {
    await this.repository.add(userDetails);
  }
}
