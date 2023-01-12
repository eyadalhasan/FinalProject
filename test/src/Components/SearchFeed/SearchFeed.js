import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { borderRight, Box, Typography } from '@mui/material'
import { Stack } from '@mui/material'
import Sliderbar from '../Slidebar/Sliderbar'
import { useEffect } from 'react'
import { fetchFromAPi } from '../../Utils/FetchFromApi'
import Videos from '../Videos/Videos'
import '../Feed/Feed.css'
function SearchFeed() {
  const [videos, setVideos] = useState("")
  const [searchBy, setSearchBy] = useState("")
  const { id } = useParams();
  console.log(id)
  useEffect(() => {
    console.log(searchBy)
    fetchFromAPi('search?part=snippet&q=' + id).then((data) => {
      setVideos(data?.items)
    })
    
  }, [id])
  return (

    <div className={"videosList"}>

      <span style={{ color: 'red', padding: '4px' }}>{id}</span> <span style={{ color: 'white' }}>Videos</span>
      <Videos videos={videos} />


    </div>



  )
}

export default SearchFeed

