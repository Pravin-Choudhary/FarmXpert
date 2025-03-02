import { z } from "zod";

export const ChatSchema = z.object({
    channelName: z.string(),
    chat: z.string(),
    userid: z.number()
});

export const CropSchema = z.object({
    name: z.string(),
    location: z.string(),
    size: z.string(),
    soilType: z.string(),
    irrigationMethod: z.string(),
    plantingDate: z.string(),
    usingFertilizer: z.string()
});