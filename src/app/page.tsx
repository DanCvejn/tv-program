import { ChannelsTable } from "@/components/ChannelsTable";
import { Header } from "@/components/Header";
import { Channel, ChannelsResponse } from "@/helpers/types";

const channelsGroups = ["ČT", "Nova", "Prim", "Óčko"];

const sortByGroups = (channels: ChannelsResponse) => {
  const sortedChannels: Channel[] = [];
  channelsGroups.forEach(group => {
    const groupChannels = channels.filter(channal => channal.name.toLowerCase().includes(group.toLowerCase()));
    if (groupChannels.length === 0) return;
    sortedChannels.push(...groupChannels);
  });
  sortedChannels.push(...channels.filter(channel => sortedChannels.find(c => c.cid === channel.cid) === undefined));
  return sortedChannels;
}

export default async function Home() {
  const data = await (await fetch("http://localhost:3000/api/channels")).json();
  const channels: ChannelsResponse = data.channel;
  const sortedChannels: ChannelsResponse = sortByGroups(channels);

  return (
    <div className="w-full h-full p-4 flex flex-col justify-start items-center gap-4">
      <Header />
      <ChannelsTable channels={sortedChannels} />
    </div>
  );
}
