import { Send } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { GoogleLogin } from '@react-oauth/google';
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";

interface loginResponse{
  id: number;
  name: string;
  profileImage: string;
}

interface chatResponse{
  id: number;
  channelName: string;
  chat: string;
  createdAt: Date;
  updatedAt: Date;
  User: {
    id: number;
    name: string;
    profileImage: string;
  }
}

export default function ChatInterface() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<loginResponse | null>(null);
  const [chats, setChats] = useState<chatResponse[]>([]);
  const [chat, setChat] = useState("");
  const [channelName, setChannelName] = useState("Farming Tips");

  const handleLogin = (data: loginResponse) => {
    setIsLoggedIn(true);
    setUser({
      id: data.id,
      name: data.name,
      profileImage: data.profileImage,
    });
  };

  const handleChatSend = (channelName: string, chat: string) => {
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/community/chat`, {
      channelName,
      chat,
      userid: user?.id
    }).then(res => {
      console.log(res);
      setChat("");
    }).catch(err => {
      console.log(err);
      setChat("");
    });
  };

  useEffect(() => {
    if("isLoggedIn" in localStorage && "token" in localStorage) {
      if (localStorage.getItem("isLoggedIn") == "true"){
        const response = axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/google`, {
          token: localStorage.getItem("token")
        });
        response.then(res => {
          setUser({
            id: res.data.id,
            name: res.data.name,
            profileImage: res.data.profileImage,
          })
        })
        setIsLoggedIn(true);
      }else{
        console.log("not logged in");
        setIsLoggedIn(false);
      }
    }else{
      localStorage.setItem("isLoggedIn", "false");
      localStorage.removeItem("token");
      setIsLoggedIn(false);
    }
  }, []);

  const getChats = () => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/community/chats/${channelName}`).then(res => {
      setChats(res.data);
    }).catch(err => {
      console.log(err);
    });
  }

  useEffect(() => {
    getChats();
    let interval = setInterval(() => {
      getChats();
      // TODO: Convert the interval to 1000 ms at presentation
    }, 5000);
    return () => clearInterval(interval);
  }, [channelName]);

  return (
    <Card className="pb-0">
      <CardHeader>
        <CardTitle>Community</CardTitle>
      </CardHeader>
      <CardContent className="p-0 border-t">
        <div className="flex h-full bg-background min-h-[568px]">
      {/* Sidebar */}
      <div className="hidden w-[200px] flex-col border-r bg-white md:flex">
        {/* Channel Section */}
        <div className="flex-1">
          <div className="flex items-center px-3 py-2">
            <h2 className="text-sm font-medium text-muted-foreground">Channel</h2>
          </div>
          <ScrollArea className="flex-1">
            <div className="space-y-1 p-2">
              <ChannelItem color="bg-rose-500" name="Farming Tips" channelName={channelName} hasNotification={false} onClick={() => setChannelName("Farming Tips")} />
              <ChannelItem color="bg-yellow-500" name="Market Updates" channelName={channelName} hasNotification={false} onClick={() => setChannelName("Market Updates")} />
              <ChannelItem color="bg-emerald-500" name="Weather Alerts" channelName={channelName} hasNotification={false} onClick={() => setChannelName("Weather Alerts")} />
              <ChannelItem color="bg-blue-500" name="Tool Resources" channelName={channelName} hasNotification={false} onClick={() => setChannelName("Tool Resources")} />
            </div>
          </ScrollArea>
        </div>

        {/* User Profile */}
        <div className="p-3">
          {isLoggedIn == false ? <GoogleLoginButton handleLogin={handleLogin} /> : null}
          {isLoggedIn && 
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={user?.profileImage} alt="User Avatar" />
              <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium">{user?.name}</span>
            </div>
          </div>}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex flex-1 flex-col bg-white">
        {/* Chat Header */}
        <div className="border-b p-4">
          <div className="text-center text-sm text-muted-foreground">{format(new Date(), "PPP")}</div>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 px-4">
          <div className="space-y-6 py-4 max-h-[450px]">
            {chats.length > 0 && chats.map((chat, i) => (
              <Message
                key={i}
                avatar={chat.User.profileImage}
                sender={`@${chat.User.name}`}
                time={format(chat.createdAt, "PPP")}
                isCurrentUser={isLoggedIn && chat.User.id == user?.id}
                messages={[
                  chat.chat
                ]}
              />
            ))}
          </div>
        </ScrollArea>

        {/* Message Input */}
        <div className="border-t p-4">
          <div className="flex items-center gap-2">
            <input
              placeholder={isLoggedIn ? "Write a message..." : "Login to start messaging"}
              className="flex-1 border-none bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              disabled={!isLoggedIn}
              value={chat}
              onChange={(e) => setChat(e.target.value)}
            />
            <Button size="sm" className="h-8 rounded-full w-8 flex justify-center items-center bg-blue-500 hover:bg-blue-600" disabled={!isLoggedIn || chat == ""} onClick={() => handleChatSend(channelName, chat)}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
        </div>
      </CardContent>
    </Card>
    
  )
}

interface ChannelItemProps {
  color: string
  name: string
  hasNotification: boolean
  channelName: string
  onClick: () => void
}

function ChannelItem({ color, name, hasNotification, onClick, channelName }: ChannelItemProps) {
  return (
    <button className={`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left ${channelName == name ?"bg-gray-100" : ""} hover:bg-gray-100`} onClick={onClick}>
      <div className={`h-3 w-3 rounded-sm ${color}`} />
      <span className="text-sm">{name}</span>
      {hasNotification && (
        <span className="ml-auto flex h-5 min-w-[20px] items-center justify-center rounded-full px-1 text-xs">
          <div className={`h-2 w-2 rounded-sm bg-muted-foreground`} />
        </span>
      )}
    </button>
  )
}

interface MessageProps {
  avatar: string
  sender: string
  time: string
  messages: string[]
  isCurrentUser: boolean
}

function Message({ avatar, sender, time, messages, isCurrentUser }: MessageProps) {
  return (
    <div className={`flex gap-4 ${isCurrentUser ? "justify-end" : ""}`}>
      {!isCurrentUser && (
        <Avatar className="h-10 w-10">
          <AvatarImage src={avatar} />
          <AvatarFallback>{sender.charAt(1)}</AvatarFallback>
        </Avatar>
      )}
      <div className={`flex max-w-[75%] flex-col gap-1 ${isCurrentUser ? "items-end" : ""}`}>
        {sender && <div className="text-sm font-medium text-muted-foreground">{sender}</div>}
        <div className="space-y-2">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`rounded-lg p-3 text-sm ${isCurrentUser ? "bg-blue-500 text-white" : "bg-gray-100"}`}
            >
              {message}
            </div>
          ))}
        </div>
        <div className="text-xs text-muted-foreground">{time}</div>
      </div>
      {isCurrentUser && (
        <Avatar className="h-10 w-10">
          <AvatarImage src={avatar} />
          <AvatarFallback>ME</AvatarFallback>
        </Avatar>
      )}
    </div>
  )
}

function GoogleLoginButton({handleLogin}: {handleLogin: (data: loginResponse) => void}) {
  return (
    <GoogleLogin
      onSuccess={credentialResponse => {
        localStorage.setItem("token", credentialResponse.credential ?? "");
        localStorage.setItem("isLoggedIn", "true");
        const response = axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/google`, {
          token: credentialResponse.credential
        });
        response.then(res => {
          handleLogin(res.data);
        }).catch(err => {
          console.log(err);
        });
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
  );
}