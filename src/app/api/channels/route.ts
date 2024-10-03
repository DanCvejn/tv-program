import { fetcher } from "@/helpers/fetch";
import { NextApiRequest, NextApiResponse } from "next";

const channels = [1,2,3,4,17,18,19,24,78,89,92,226,333,352,357,371,455,466,474,558,559,560,606,608,727,818,904,905];

export async function GET (req: NextApiRequest, res: NextApiResponse) {
  const payload = new FormData();
  payload.append("channel_cid_arr", channels.join(","));
  payload.append("localization", "1");
  const response = await fetcher("tvchannellist_mobile.php", payload);
  if (response.error) {
    res.statusCode = response.errorCode;
    return new Response(JSON.stringify(response));
  } else {
    res.statusCode = 200;
    const dataResponse = response.data["tv-program-channels"];
    return new Response(JSON.stringify(dataResponse));
  }
}