import { borderRight, Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { Stack } from '@mui/material'
import Sliderbar from '../Slidebar/Sliderbar'
import { useState } from 'react'
import { fetchFromAPi } from '../../Utils/FetchFromApi'
import Videos from '../Videos/Videos'
import './Feed.css'
function Feed(props) {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState("");
  useEffect(() => {
    console.log(selectedCategory)
    fetchFromAPi('search?part=snippet&q=' + selectedCategory).then((data) => {
      setVideos(data?.items)
    })
  }, [selectedCategory])


  return (

    <div className="flex-container">

      <Sliderbar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} >

      </Sliderbar>
      <div className={"videosList"}>

        <span style={{ color: 'red' ,padding:'4px'}}>{selectedCategory}</span> <span style={{ color: 'white' }}>Videos</span>
        <Videos videos={videos} />


      </div>
    </div>


  )
}

export default Feed