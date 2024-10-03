import { ChannelsResponse } from "@/helpers/types";

export default async function Home() {
  const data = await (await fetch("http://localhost:3000/api/channels")).json();
  const channels: ChannelsResponse = data.channel;

  return (
    <div className="w-full h-full">

    </div>
  );
}
