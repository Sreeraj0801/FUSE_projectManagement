"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const body_parser_1 = __importDefault(require("body-parser"));
const connection_1 = require("./Connection/connection");
const dotenv = __importStar(require("dotenv"));
const app = (0, express_1.default)();
(0, connection_1.connectToDatabase)();
dotenv.config();
//----------------------- middleware ------------------------------
app.use((0, cors_1.default)({
    origin: ["*", "http://localhost:5173", "http://fuse-official.online", "https://fuse-official.online"],
    methods: ["PUT", "POST", "DELETE", "GET", "PATCH"],
    credentials: true,
}));
// app.use(cors());
app.use((0, morgan_1.default)("dev"));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.static("Public"));
app.use(express_1.default.json());
/* ------------------------ Routes --------------------------------
   # importing Routes and Using It
   ## Import Routes - User
 */
const auth_1 = __importDefault(require("./Routes/Users/auth"));
const workspace_1 = __importDefault(require("./Routes/Users/workspace"));
const project_1 = __importDefault(require("./Routes/Users/project"));
const task_1 = __importDefault(require("./Routes/Users/task"));
//Using the Routes
app.use("/", auth_1.default);
app.use("/workspace", workspace_1.default);
app.use("/project", project_1.default);
app.use('/task', task_1.default);
//--------------------- Port Running -----------------------------
app.listen(process.env.PORT_NUMBER, () => {
    console.log(`server started at http://localhost:${process.env.PORT_NUMBER}`);
});
