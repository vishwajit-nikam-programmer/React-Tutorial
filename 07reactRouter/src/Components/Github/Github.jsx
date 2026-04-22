import React from "react"
//import React, { useEffect, useState } from 'react'
import { useLoaderData } from "react-router-dom"
import { githubInfoLoader } from "../../Constants/GithubInfoLoader"

function Github() {
   const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-500 text-3xl text-white p-4'>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt='Git Picture' width={300}></img>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
   const response = await fetch('https://github.com/vishwajit-nikam-programmer')
          return response.json()
}