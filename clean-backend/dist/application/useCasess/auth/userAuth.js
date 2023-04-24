"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRegister = void 0;
const userRegister = async (user, userRepository, authService) => {
    user.email = user.email.toLowerCase();
    //const isExistingEmail = await userRepository.
};
exports.userRegister = userRegister;
//# sourceMappingURL=userAuth.js.map