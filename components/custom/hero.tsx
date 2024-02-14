export const Hero = () => {
  return (
    <div className="py-4 mt-12 h-[30vh] w-full flex flex-col justify-start items-start">
      <div className="w-full mx-auto flex flex-col sm:flex-row justify-center items-center sm:gap-4">
        <ClippedText content="Learn" />
        <ClippedText content="Collaborate" />
        <ClippedText content="Develop" />
      </div>
      <p className="w-[20rem] sm:text-lg sm:w-[25rem] mx-auto text-center py-3 text-slate-400">{"Unleash innovation, join the open-source revolution with us!"}</p>
    </div>
  )
}

const ClippedText = ({ content }: { content: string }) => {
  return (
    <div className="text-4xl sm:text-5xl font-extrabold ...">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
        {content}{"."}
      </span>
    </div>
  )
}