"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const server_1 = __importDefault(require("./frameworks/webserver/server"));
const routes_1 = __importDefault(require("./frameworks/webserver/routes"));
const express_2 = __importDefault(require("./frameworks/webserver/express"));
const Colors = require("colors.ts");
const errorHandlingMiddleware_1 = __importDefault(require("./frameworks/webserver/middlewares/errorHandlingMiddleware"));
const appError_1 = __importDefault(require("./frameworks/webserver/utils/appError"));
const connection_1 = __importDefault(require("./frameworks/database/mongodb/connection"));
Colors.enable;
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
//connectiong mongoDB
(0, connection_1.default)();
(0, express_2.default)(app);
//routes for each endPoint
(0, routes_1.default)(app, express_1.default);
app.use(errorHandlingMiddleware_1.default);
app.all("*", (req, res, next) => {
    next(new appError_1.default("Not Found ", 404));
});
(0, server_1.default)(server).startServer();
//# sourceMappingURL=index.js.map