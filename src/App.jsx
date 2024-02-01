import { PrimaryButton } from "./Components/PrimaryButton"
import { Header } from "./Components/Header"
import { SecondaryButton } from "./Components/SecondaryButton"
import { useState } from "react"
import { Card } from "./Components/Card"
import { useFetch } from "./hooks/useFetch"
import { Loading } from "./Components/Loading"

function App() {
  const url = import.meta.env.VITE_API_URL

  const {data, isLoading, setData} = useFetch(url)

  const onCategories = (newData) =>{
    setData({...data, subcategories: newData})
  }

  const onSubcategories = (newData) =>{
    setData({...data, services: newData})
  }

  return (
    <>
      {
        isLoading ?  
          <Loading/>
        :
        <>
          <Header/>
          <aside className='flex align-middle justify-center flex-wrap mt-10 lg:mt-20 gap-5'>
            <PrimaryButton text={"Containers"} handleClick={()=> onCategories(data.totalData.containers)}/>
            <PrimaryButton text={"Networking"} handleClick={()=> onCategories(data.totalData.networking)}/>
            <PrimaryButton text={"Database"} handleClick={()=> onCategories(data.totalData.database)}/>
            <PrimaryButton text={"Computing"} handleClick={()=> onCategories(data.totalData.computing)}/>
          </aside>

          <section className="flex gap-4 mt-8 flex-wrap justify-center">
            {
              data.subcategories.map((e)=>(
                <SecondaryButton text={e.name} key={e.name} handlerClick={()=> onSubcategories(data.totalData[e.subCategoryId])}/>
              ))
            }
          </section>

          <section className="flex gap-4 mt-8 flex-wrap justify-center" >
          {
            data.services.map((e)=>(
              <Card title={e.name} link={e.link} provider={e.ProviderLongName} description={e.description} key={e.name}/>
            ))
          }
          </section>

          <footer className='mx-auto w-[300px] md:w-[700px] mt-10 mb-6 text-center text-teal-100'> Franz Ventocilla - 2024 </footer>
        </>
        
      }
    </>
  )
}

export default App
