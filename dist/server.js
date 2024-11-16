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
const logger_1 = __importDefault(require("./logger"));
const errorHandler_1 = __importDefault(require("./errorHandler"));
// Main error handler function
const errorHandler = (error) => __awaiter(void 0, void 0, void 0, function* () {
    logger_1.default.error(error.message);
    const aiFix = yield (0, errorHandler_1.default)(error.message);
    console.log(`AI Suggested Fix: ${aiFix}`);
});
// Example usage
// try {
//   throw new Error("Failed to connect to the database");
// } catch (error) {
//   if (error instanceof Error) {
//     errorHandler(error);
//   }
// }
exports.default = errorHandler;
