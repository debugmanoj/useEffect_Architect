import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useUserData = () => {
    const [jsonData, setJsonData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        let isMounted = true;
        setLoading(true);

        async function fetchData(){
            try {
                const response=await axios.get("https://jsonplaceholder.typicode.com/posts/1")
                if(isMounted){
                    setJsonData(response.data)
                    setLoading(false)
                }
            } catch (error) {
                if(isMounted){
                    setError(err)
                    setLoading(false)
                }
            }
        }
        setTimeout(()=>{

            fetchData()
        },4000)
        return ()=>{
            isMounted=false
        }
    },[]);

    return {jsonData,loading,error}
}

export default useUserData