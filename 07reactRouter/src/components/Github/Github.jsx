import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/V-Rexx')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])

    const data = useLoaderData();

  return (
    <div className='text-center m-4 bg-gray-600 text-white text-3xl p-4'>Github followers: {data.followers}
        <img src={data.avatar_url} alt='Git picture' width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/V-Rexx')
    return res.json()
}