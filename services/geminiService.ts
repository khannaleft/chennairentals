
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you might have better error handling, 
  // but for this example, we'll log a warning.
  // The app will still function with mock data, but AI features will be disabled.
  console.warn("Gemini API key not found. AI features will be disabled.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const generateItemDescription = async (itemName: string, categoryName: string): Promise<string> => {
  if (!API_KEY) {
    return "This is a high-quality item perfect for your needs. Please contact us for more details about its features and availability.";
  }
  
  try {
    const prompt = `Generate a compelling and brief rental description for a "${itemName}" in the "${categoryName}" category for a rental store in Chennai named "Chennai Rentals". Highlight 1-2 key features and its suitability for events or use cases. Keep the description under 40 words and give it a touch of local flavor.`;
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        temperature: 0.8,
        topP: 0.9,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Error generating description with Gemini:", error);
    return `The ${itemName} is a top-of-the-line model, perfect for making your event special. Reliable and easy to use, it's a popular choice for all occasions.`;
  }
};
