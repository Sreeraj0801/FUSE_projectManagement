"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../../config"));
const serverConfig = (server) => {
    const startServer = () => {
        server.listen(config_1.default.server.port, () => {
            console.log(`Server listening on Port   ${config_1.default.server.port}`.bg_magenta);
        });
    };
    return {
        startServer
    };
};
exports.default = serverConfig;
//# sourceMappingURL=server.js.map