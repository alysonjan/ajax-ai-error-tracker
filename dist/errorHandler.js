"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const API_KEY = process.env.OPENAI_API_KEY;
const analyzeError = (errorMessage) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.post("https://api.openai.com/v1/completions", {
            model: "text-davinci-003",
            prompt: `Explain this error and suggest potential fixes: ${errorMessage}`,
            max_tokens: 150,
        }, {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
            },
        });
        return response.data.choices[0].text.trim();
    }
    catch (error) {
        console.error("AI analysis failed", error);
        return "Sorry, AI could not analyze the error.";
    }
});
exports.default = analyzeError;
