import { Plus, Paperclip, Smile, Send } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export default function ChatInterface() {
  return (
    <Card className="pb-0">
      <CardHeader>
        <CardTitle>Community</CardTitle>
      </CardHeader>
      <CardContent className="p-0 border-t">
        <div className="flex h-full bg-background">
      {/* Sidebar */}
      <div className="hidden w-[200px] flex-col border-r bg-white md:flex">
        {/* Channel Section */}
        <div className="flex-1">
          <div className="flex items-center px-3 py-2">
            <h2 className="text-sm font-medium text-muted-foreground">Channel</h2>
          </div>
          <ScrollArea className="flex-1">
            <div className="space-y-1 p-2">
              <ChannelItem color="bg-rose-500" name="Farming Tips" hasNotification={true} />
              <ChannelItem color="bg-yellow-500" name="Market Updates" hasNotification={false} />
              <ChannelItem color="bg-emerald-500" name="Weather Alerts" hasNotification={false} />
              <ChannelItem color="bg-blue-500" name="Tool Resources" hasNotification={false} />
            </div>
          </ScrollArea>
        </div>

        {/* User Profile */}
        <div className="p-3">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>KH</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium">Kevin Heart</span>
              <span className="text-xs text-muted-foreground">On duty</span>
            </div>
            <Button variant="ghost" size="icon" className="ml-auto h-8 w-8">
              <span className="sr-only">Menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <circle cx="12" cy="12" r="1" />
                <circle cx="12" cy="5" r="1" />
                <circle cx="12" cy="19" r="1" />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex flex-1 flex-col bg-white">
        {/* Chat Header */}
        <div className="border-b p-4">
          <div className="text-center text-sm text-muted-foreground">February 16th, 2024</div>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 px-4">
          <div className="space-y-6 py-4">
            <Message
              avatar="/placeholder.svg?height=40&width=40"
              sender="@Kevinuhuy"
              time="Today 11:52"
              isCurrentUser={false}
              messages={[
                "Hello how are you doing?",
                "I wanted to discuss the possibility of creating a new UI/UX design for our new product. Are you available to chat about it?",
              ]}
            />

            <Message
              avatar="/placeholder.svg?height=40&width=40"
              sender=""
              time="Today 11:52"
              isCurrentUser={true}
              messages={[
                "Hi there! I'm doing well, thank you. Of course, I'd be happy to discuss it. What specifically are you looking to achieve with the new design?",
              ]}
            />

            <Message
              avatar="/placeholder.svg?height=40&width=40"
              sender=""
              time="Today 11:52"
              isCurrentUser={false}
              messages={[
                "We're aiming for a cleaner, more intuitive interface that aligns with our brand identity. It should be mobile-responsive and prioritize ease of navigation. Also, we're open to exploring new design trends that could elevate the overall look and feel.",
              ]}
            />
          </div>
        </ScrollArea>

        {/* Message Input */}
        <div className="border-t p-4">
          <div className="flex items-center gap-2">
            <input
              placeholder="Write a message..."
              className="flex-1 border-none bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            <Button size="sm" className="h-8 rounded-full w-8 flex justify-center items-center bg-blue-500 hover:bg-blue-600">
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
}

function ChannelItem({ color, name, hasNotification }: ChannelItemProps) {
  return (
    <button className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left hover:bg-gray-100">
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
          <AvatarFallback>KH</AvatarFallback>
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

