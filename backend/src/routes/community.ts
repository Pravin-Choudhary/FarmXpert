import { Router } from "express";
import { prisma } from "..";
import { ChatSchema } from "../types";

const CommunityRouter = Router();

CommunityRouter.get("/chats/:channelName" , async (req , res) => {
    const channelName = req.params.channelName;
    try {
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
        if(chats){
            res.json(chats);
        }else{
            res.status(404).json({message: "No chats found"});
        }
    }catch(e){
        res.status(500).json({message: "Internal Server Error"});
    }
});

CommunityRouter.post("/chat" , async (req , res) => {
    const parsedBody = ChatSchema.safeParse(req.body);
    if (parsedBody.success) {
        try {
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
        }catch(e){
            res.status(500).json({message: "Internal Server Error"});
        }
    } else {
        res.status(400).json({
            message: "Invalid request body"
        });
    }
});

export default CommunityRouter;