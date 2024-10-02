import { RequestInit } from "next/dist/server/web/spec-extension/request";
import { parseString } from "xml2js";

interface ErrorResponse {
  error: true;
  errorCode: number;
}

interface SuccessResponse {
  error: false;
  data: { [key: string]: string | number | boolean };
}

type Response = ErrorResponse | SuccessResponse;

export const fetcher = async (url: string, payload?: RequestInit["body"]): Promise<Response> => {
  const response = await fetch(process.env.API_URL + url, {
    method: "POST",
    body: payload,
  });
  if (response.status !== 200) return { error: true, errorCode: response.status };
  const xmlText = await response.text();
  return await xmlParser(xmlText);
}

const valueProcessor = (value: string): string | number | boolean => {
  if (value === "true") return true;
  if (value === "false") return false;
  if (isNaN(Number(value))) return value;
  return parseInt(value);
}

const xmlParser = (xml: string): Promise<Response> => {
  return new Promise((resolve) => {
    parseString(xml, {explicitArray: false, valueProcessors: [valueProcessor]}, (err, result) => {
      if (err) resolve({ error: true, errorCode: 500 });
      else resolve({ error: false, data: result });
    });
  });
}