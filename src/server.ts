import logger from "./logger";
import analyzeError from "./errorHandler";
import dotenv from "dotenv";
dotenv.config();

// Main error handler function
const errorHandler = async (error: Error) => {
  logger.error(error.message);
  const aiFix = await analyzeError(error.message);
  console.log(`AI Suggested Fix: ${aiFix}`);
};

// Example usage
// try {
//   throw new Error("Failed to connect to the database");
// } catch (error) {
//   if (error instanceof Error) {
//     errorHandler(error);
//   }
// }

export default errorHandler;
