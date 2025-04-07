import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const ReactQueryForDataFetching = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['jsonPlaceholders'],
        queryFn: async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users');
            return res.data;
        },
         // Don't call API again for next 5 minutes
         staleTime: 5 * 60 * 1000,  // 5 mins → 5 * 60 sec * 1000 ms

         // Keep Data in Memory for 30 minutes
         cacheTime: 30 * 60 * 1000  // 30 mins → 30 * 60 sec * 1000 ms
    })
    if (isLoading) return <h2>Loading...</h2>
    if (isError) return <h2>Something went wrong!</h2>
    return (
        <div>
            <h1>React Query for Data Fetching</h1>

            {
                data.map((val) => {
                    return val.name

                })
            }
        </div>
    )
}

export default ReactQueryForDataFetching