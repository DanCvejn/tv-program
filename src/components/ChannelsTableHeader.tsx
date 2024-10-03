import { ChannelsResponse } from '@/helpers/types'
import Image from 'next/image'

export const ChannelsTableHeader = ({ channels }: { channels: ChannelsResponse }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      {channels.map(channel => {
        return (
          <div key={channel.cid}>
            <Image
              src={channel['logo-image'].url}
              width={300}
              height={300}
              alt={channel.name}
              quality={100}
              className="w-[100px] h-[50px] object-contain object-center"
            />
          </div>
        )
      })}
    </div>
  )
}
