import Nylas from "nylas";

export const nylasConfig = {
  clientId: "c90f43b2-7ae6-42a6-b789-4e1c59301140",
  callbackUri: "http://localhost:3000/api/oauth/exchange",
  apiKey: process.env.NYLAS_API_KEY,
  apiUri: process.env.NYLAS_API_URI,
};

export const nylas = new Nylas ({
  apiKey: nylasConfig.apiKey,
  apiUri: nylasConfig.apiUri,
});