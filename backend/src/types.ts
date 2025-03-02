import { z } from "zod";

export const ChatSchema = z.object({
    channelName: z.string(),
    chat: z.string(),
    userid: z.number()
});