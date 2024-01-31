export const getData = async(url) => {
  const resp1 = await fetch(`${url}/api/subcategories`)
  const data1 = await resp1.json()
  
  const resp2 = await fetch(`${url}/api/services`)
  const data2 = await resp2.json()
  return {
    subcategories: data1,
    services: data2
  }
}
