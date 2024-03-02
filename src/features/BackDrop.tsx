import type React from "react"

interface BackDrop {
  setIsBackDrop: (input: boolean) => void
}

const BackDrop: React.FC<BackDrop> = ({ setIsBackDrop }) => {
  return (
    <div
      onClick={() => {
        setIsBackDrop(false)
      }}
      className=" fixed top-0 left-0 min-h-screen h-full bg-[#0D0D1233] bg-opacity-20 minWidth  "></div>
  )
}

export default BackDrop
