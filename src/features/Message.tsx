import React from "react"

export {}
interface MessageProps {
  message: {
    role: string
    content: string
  }
}

const Message: React.FC<MessageProps> = ({ message }) => {
  return (
    <div
      className={`mb-2 p-4 text-[#666D80] text-2xl rounded-lg w-fit max-w-[70%] ${message.role === "user" ? "bg-[#DFE1E7]  self-end  " : "bg-[#DBEAFE] self-start"}`}
      dangerouslySetInnerHTML={{
        __html: message.content
      }}
    />
  )
}

export default Message
