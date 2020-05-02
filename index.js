"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
var database_1 = require("database");
dotenv_1.config();
new database_1.Database();
