export const SecondaryButton = ({text, handlerClick = ()=>{}}) => {
  return (
    <button className="bg-white/5 
            border border-white/10  rounded-full
            flex justify-center items-center gap-x-2
            py-1 px-2 md:py-2 md:px-4
            text-xs md:text-base
            text-white/50
            transition
            hover:scale-110 hover:bg-white/10" 
            onClick={handlerClick}
            >  
            {text}
    </button> 
  )
}