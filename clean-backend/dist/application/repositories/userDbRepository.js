"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class userDbRepository {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async add(userDetails) {
        await this.repository.add(userDetails);
    }
}
exports.default = userDbRepository;
//# sourceMappingURL=userDbRepository.js.map