import { CheckCircle } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPi } from '../../Utils/FetchFromApi'
import { Link } from 'react-router-dom'
import Videos from '../Videos/Videos'
function VideoDetails() {
  const [videoDetails, setVideoDetails] = useState("")
  const [videos, setVideos] = useState([])

  const { id } = useParams()
  useEffect(() => {
    fetchFromAPi('videos?part=snippet,statistics&id=' + id).then((data) => {
      setVideoDetails(data?.items[0])
    })
  }, [id])
  useEffect(() => {
    fetchFromAPi('search?part=snippet&relatedToVideoId=' + id + '&type=video').then((data) => {
      setVideos(data?.items)
    })

  }, [id])

  return (
    <div className="videoDetails">
      <iframe aria-controls='' style={{ width: '100%' }} height="315"
        src={"https://www.youtube.com/embed/" + id}>
      </iframe>


      <p style={{ color: 'white', fontWeight: 'bold' }}>{videoDetails?.snippet?.title}</p>
      <div className="flexContainer">
        <Link to={'/channel/' + videoDetails?.snippet?.channelId}> <p style={{ color: 'white', fontSize: '8px' }}>{videoDetails?.snippet?.channelTitle} <span><CheckCircle sx={{ fontSize: '12px', color: 'gray', fontWeight: 'bold ' }}></CheckCircle></span></p></Link>

        <div>
          <span style={{ color: 'white', fontSize: '10px', opacity: '0.7' }}>{parseInt(Math.floor(Math.random() * 100000)).toLocaleString()} Veiws</span>
          <span style={{ color: 'white', fontSize: '10px', marginLeft: '5px', marginRight: '5px', opacity: '0.7' }}>{videoDetails?.statistics?.viewCount} Like</span>
        </div>
      </div>
      <div>
        <Videos videos={videos} />
      </div>

    </div>




  )
}

export default VideoDetails

