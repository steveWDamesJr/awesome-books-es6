"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.askQuestion = void 0;
const readline = require("readline");
const askQuestion = (question) => {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(`${question} (Y/n)`, (value) => {
            rl.close();
            if (!value || value.toLowerCase() === 'y') {
                return resolve(true);
            }
            return resolve(false);
        });
    });
};
exports.askQuestion = askQuestion;
