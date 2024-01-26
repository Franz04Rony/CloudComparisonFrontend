import { PrimaryButton } from "./Components/PrimaryButton"
import { Header } from "./Components/Header"
import { getData } from "./utils/getData"
import { SecondaryButton } from "./Components/SecondaryButton"
import { useState } from "react"
import { Card } from "./Components/Card"

const url = import.meta.env.VITE_API_URL

const handlerClicker = {
  container: await getData(`${url}/api/category/1`),
  networking: await getData(`${url}/api/category/2`),
  database: await getData(`${url}/api/category/3`),
  1: await getData(`${url}/api/services/1`),
  2: await getData(`${url}/api/services/2`),
  3: await getData(`${url}/api/services/3`),
  4: await getData(`${url}/api/services/4`),
  5: await getData(`${url}/api/services/5`),
  6: await getData(`${url}/api/services/6`),
  7: await getData(`${url}/api/services/7`),
  8: await getData(`${url}/api/services/8`),
}

function App() {
  const [categories, setCategories] = useState([])
  const [services, setServices] = useState([])

  const categoriesClickHandler = (data) =>{
    setCategories(data)
  }

  const servicesClickHandler = (data) =>{
    setServices(data)
  }

  return (
    <>
      <Header/>
      <aside className='flex align-middle justify-center flex-wrap mt-10 lg:mt-20 gap-5'>
        <PrimaryButton text={"Containers"} handleClick={()=> categoriesClickHandler(handlerClicker.container)}/>
        <PrimaryButton text={"Networking"} handleClick={()=> categoriesClickHandler(handlerClicker.networking)}/>
        <PrimaryButton text={"Database"} handleClick={()=> categoriesClickHandler(handlerClicker.database)}/>
      </aside>

      <section className="flex gap-4 mt-8 flex-wrap justify-center">
        {
          categories.map((e)=>(
            <SecondaryButton text={e.name} key={e.name} handlerClick={()=> servicesClickHandler(handlerClicker[e.subCategoryId])}/>
          ))
        }
      </section>

      <section className="flex gap-4 mt-8 flex-wrap justify-center" >
       {
        services.map((e)=>(
          <Card title={e.name} link={e.link} provider={e.ProviderLongName} description={e.description} key={e.name}/>
        ))
       }
      </section>

      <></>
      <footer className='mx-auto w-[300px] md:w-[700px] mt-10 mb-6 text-center text-teal-100'> Franz Ventocilla - 2024 </footer>
    </>
  )
}

export default App
