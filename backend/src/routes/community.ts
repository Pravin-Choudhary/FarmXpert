import { Router } from "express";
import { prisma } from "..";
import { ChatSchema } from "../types";

const CommunityRouter = Router();

CommunityRouter.get("/chats/:channelName" , async (req , res) => {
    const channelName = req.params.channelName;
    const chats = await prisma.communityChats.findMany({
        where:{
            channelName: channelName
        },
        include:{
            User: {
                select:{
                    id: true,
                    name: true,
                    profileImage: true
                }
            }
        }
    });
    res.json(chats);
});

CommunityRouter.post("/chat" , async (req , res) => {
    const parsedBody = ChatSchema.safeParse(req.body);
    if (parsedBody.success) {
        const newChat = await prisma.communityChats.create({
            data: {
                channelName: parsedBody.data.channelName,
                chat: parsedBody.data.chat,
                userid: parsedBody.data.userid
            }
        });
        if (newChat) {
            res.status(200).json({
                message: "Chat created successfully"
            });
        } else {
            res.status(500).json({
                message: "Error creating chat"
            });
        } 
    } else {
        res.status(400).json({
            message: "Invalid request body"
        });
    }
});

export default CommunityRouter;