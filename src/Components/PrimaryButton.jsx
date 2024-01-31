export const PrimaryButton = ({text = '', handleClick = ()=>{} }) => {
  return (
    <button className="relative 
      inline-flex items-center justify-center 
      p-0.5 mb-2 me-2 
      overflow-hidden text-sm font-medium 
       rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white
       text-white focus:ring-4 focus:outline-none focus:ring-blue-800"
      onClick={handleClick}
      >
        <span className="relative 
          px-5 py-2.5
          transition-all ease-in duration-150
           bg-gray-900 
          rounded-md group-hover:bg-opacity-0 text-2xl"
        >
            {text}
        </span>
    </button>
  )
}