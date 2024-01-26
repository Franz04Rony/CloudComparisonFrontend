import { Github } from "../icons/icons"

export const Header = () => {
  return (
    <section className="w-full flex justify-between items-center">
        <span></span>
        <h1 className="text-3xl lg:text-5xl font-bold ml-12 lg:ml-20">Cloud services comparison </h1>
        <a href="https://github.com/Franz04Rony" target="_blank" className="text-teal-100 hover:text-teal-200" aria-label="View source on Github">
            <Github width={100} height={100}/>
        </a>
    </section>
  )
}