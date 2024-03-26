"use strict";
//3rd party hai module
//package.json stand for javascript object rotation (package json)
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_js_1 = __importDefault(require("./main.js"));
const laptopUsersStudent = (0, main_js_1.default)(); // we make like a module 
console.log(`laptop student value:${laptopUsersStudent}`);
