const api ="AIzaSyC46X3vRtIGmuKypOJAT0KLCdv7ih4lbr8"

import { GoogleGenAI } from '@google/genai';


const ai = new GoogleGenAI({
  apiKey:api
});

async function runGemini(userInput) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
     contents: [
      {
        role: "user",
        parts: [{ text: userInput }],
      },
    ],
  });
  let cleaned = response.text.replace(/\*\*/g, '')  // Remove double asterisks
  .replace(/\*/g, ''); // remove list stars
  console.log(response.text);
  return cleaned;
}

// await main(); 
export default runGemini;

// ✅ Function takes 'userInput' as argument
// async function runGemini(userInput) {
//   const ai = new GoogleGenAI({
//    apiKey: api
//   });
//   console.log("satrt");
  

//   const tools = [
//     { googleSearch: {} },
//   ];

//   const config = {
//     thinkingConfig: {
//       thinkingBudget: -1,
//     },
//     tools,
//     responseMimeType: 'text/plain',
//   };

//   const contents = [
//     {
//       role: 'user',
//       parts: [{ text: userInput }],
//     },
//   ];

//   const response = await ai.models.generateContentStream({
//     model: 'gemini-2.5-pro',
//     config,
//     contents,
//   });

//    let fullResponse = '';
// let count=1;

//   for await (const chunk of response) {
//     if (chunk.text) {
//       console.log(chunk.text);
//       fullResponse += chunk.text;
//       console.log(count++);
      
//     }
  
// }

//   return fullResponse;


//   }


// // ✅ Call the function with any prompt
//  export default runGemini;



  // for await (const chunk of response) {
  //   console.log(chunk.text);
  //   let data=chunk.text;
  //   return data;
