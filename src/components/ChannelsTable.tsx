import { ChannelsResponse } from '@/helpers/types'
import { ChannelsTableHeader } from './ChannelsTableHeader'

export const ChannelsTable = ({ channels }: { channels: ChannelsResponse }) => {
  return (
    <div className='w-full h-full flex justify-start items-start gap-4 overflow-auto bg-white rounded-2xl relative'>
      <ChannelsTableHeader channels={channels} />
    </div>
  )
}
