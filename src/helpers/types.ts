export type Channel = {
  cid: number;
  name: string;
  lang: string;
  order: number;
  modified: string;
  "default-show": number;
  "programme-type": {
    id: string;
    name: string;
  },
  "channel-category": {
    id: string;
    name: string;
    "name-sk": string;
  },
  "logo-image": {
    updated: string;
    url: string;
  }
}

export type ChannelsResponse = Channel[] | [];

export type ErrorResponse = {
  error: boolean;
  errorCode: number;
}