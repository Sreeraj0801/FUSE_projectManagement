"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class authController {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async registerUser(req, res) {
        const { name, mobile, email, pword } = req.body;
    }
}
exports.default = authController;
//# sourceMappingURL=authControllers.js.map