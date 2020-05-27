"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var typeorm_1 = require("typeorm");
var users_routes_1 = __importDefault(require("./routes/users.routes"));
var puerto = process.env.PORT || 3000;
var app = express_1.default();
typeorm_1.createConnection();
//midelware
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(morgan_1.default('dev'));
//routes
app.use(users_routes_1.default);
console.log(puerto);
app.listen(puerto);
console.log('escuchando');
