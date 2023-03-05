import { ChatGPTAPI } from "chatgpt";
export interface AccountWithUserInfo {
  apiKey: string;
}

// Account will be one in the session token or email and password
export type IAccount = AccountWithUserInfo;

export interface IChatGPTItem {
  chatGpt: ChatGPTAPI;
  account: IAccount;
}
export interface IConversationItem {
  conversation: ChatGPTAPI;
  account: IAccount;
  messageId?: string;
}

export interface IConfig {
  chatGPTAccountPool: IAccount[];
  chatGptRetryTimes: number;
  chatPrivateTiggerKeyword: string;
  chatTiggerRule?: string;
  openAIProxy?: string;
  disableGroupMessage?: boolean;
  clearanceToken: string;
  userAgent: string;
}
