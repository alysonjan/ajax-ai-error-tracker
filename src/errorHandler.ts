import axios from "axios";

const API_KEY = process.env.OPENAI_API_KEY;

const analyzeError = async (errorMessage: string) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        model: "text-davinci-003",
        prompt: `Explain this error and suggest potential fixes: ${errorMessage}`,
        max_tokens: 150,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error("AI analysis failed", error);
    return "Sorry, AI could not analyze the error.";
  }
};

export default analyzeError;
