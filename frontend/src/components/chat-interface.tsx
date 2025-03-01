import { Plus, Send, Paperclip, Smile } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Textarea } from "@/components/ui/textarea"

export default function ChatInterfaceTemp() {
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="hidden w-64 flex-col border-r bg-muted/10 md:flex">
        <div className="p-4">
          <h2 className="text-lg font-semibold">Channels</h2>
        </div>

        {/* Channel List */}
        <ScrollArea className="flex-1">
          <div className="space-y-1 p-2">
            <ChannelItem color="bg-rose-500" name="Mobile Designer" />
            <ChannelItem color="bg-yellow-500" name="Front-End Community" />
            <ChannelItem color="bg-emerald-500" name="UI/UX Community" />
            <ChannelItem color="bg-blue-500" name="Web Designer" />

            <Button variant="ghost" size="sm" className="w-full justify-start gap-2 text-muted-foreground">
              <Plus className="h-4 w-4" />
              <span>Make a Channel</span>
            </Button>
          </div>
        </ScrollArea>

        {/* User Profile */}
        <div className="border-t p-4">
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
      <div className="flex flex-1 flex-col">
        {/* Chat Header */}
        <div className="border-b p-4">
          <div className="text-center text-sm text-muted-foreground">February 16th, 2024</div>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-6">
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
          <div className="flex items-end gap-2">
            <Button variant="outline" size="icon" className="h-10 w-10 shrink-0 rounded-full">
              <Paperclip className="h-5 w-5" />
              <span className="sr-only">Attach file</span>
            </Button>
            <Textarea placeholder="Write a message..." className="min-h-10 flex-1 resize-none" />
            <Button variant="outline" size="icon" className="h-10 w-10 shrink-0 rounded-full">
              <Smile className="h-5 w-5" />
              <span className="sr-only">Emoji</span>
            </Button>
            <Button size="icon" className="h-10 w-10 shrink-0 rounded-full bg-primary">
              <Send className="h-5 w-5" />
              <span className="sr-only">Send</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

interface ChannelItemProps {
  color: string
  name: string
}

function ChannelItem({ color, name }: ChannelItemProps) {
  return (
    <div className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-muted">
      <div className={`h-3 w-3 rounded-sm ${color}`} />
      <span className="text-sm">{name}</span>
      <Button variant="ghost" size="icon" className="ml-auto h-6 w-6 text-muted-foreground">
        <span className="sr-only">Notifications</span>
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
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </Button>
    </div>
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
        {sender && <div className="text-sm font-medium">{sender}</div>}
        <div className="space-y-2">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`rounded-lg p-3 ${isCurrentUser ? "bg-primary text-primary-foreground" : "bg-muted"}`}
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

