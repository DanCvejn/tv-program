import { fetcher } from "@/helpers/fetch";
import { NextRequest, NextResponse } from "next/server";
export const dynamic = "force-dynamic";


export async function GET (req: NextRequest, context: {params: {id: string}}) {
  const id = context.params.id;
  if (!id) return NextResponse.json({ error: "Missing id parameter", errorCode: 400 }, { status: 400 });
  const payload = new FormData();
  payload.append("channel_cid", id.toString());
  payload.append("day", "0");
  const response = await fetcher("tvprogrammelist_mobile.php", payload);
  if (response.error) return NextResponse.json(response, { status: response.errorCode });
  return NextResponse.json(response.data["tv-program-programmes"]);
}