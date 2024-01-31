import { useState, useEffect } from "react"
import { getData } from "../utils/getData.js"

export const useFetch = (url) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState( true )

    const getFetchData = async() => {
        const newData = await getData(url)
        setData({
            totalData:{
                containers: newData.subcategories.filter((v)=> v.categoryId === 1),
                networking: newData.subcategories.filter((v)=> v.categoryId === 2),
                database: newData.subcategories.filter((v)=> v.categoryId === 3),
                1: newData.services.filter((v)=> v.subCategory === 1),
                2: newData.services.filter((v)=> v.subCategory === 2),
                3: newData.services.filter((v)=> v.subCategory === 3),
                4: newData.services.filter((v)=> v.subCategory === 4),
                5: newData.services.filter((v)=> v.subCategory === 5),
                6: newData.services.filter((v)=> v.subCategory === 6),
                7: newData.services.filter((v)=> v.subCategory === 7),
                8: newData.services.filter((v)=> v.subCategory === 8),
            },
            subcategories: [],
            services: []            
          })
        setIsLoading(false)
    }

    useEffect(()=>{
        getFetchData()
    }, [])
    return {
        data,
        isLoading,
        setData
    }

}

