"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authServiceInterface = void 0;
const authServiceInterface = (service) => {
    const encryptedPassword = (pword) => service.encryptedPassword(pword);
    return {
        encryptedPassword
    };
};
exports.authServiceInterface = authServiceInterface;
//# sourceMappingURL=authServiceInterface.js.map