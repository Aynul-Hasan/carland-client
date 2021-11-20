import  { useEffect, useState } from 'react'
import axios from 'axios'
const useData=(url)=>{
    // console.log(url)
    const [cardData, setcardData] = useState([])
    const [dataLoding, setdataLoding] = useState(false)
   useEffect(() => {
        const getData=async()=>{
            setdataLoding(true)
            const res= await axios.get(url)
            setcardData(res.data)
            setdataLoding(false)
            // console.log(res)
        }
        getData()
   }, [url])
   return [cardData,dataLoding]
}
export default useData