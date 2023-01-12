import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPi } from '../../Utils/FetchFromApi'
import ChannelCard from './ChannelCard/ChannelCard'
import "./channelDetails.css"
import Videos from '../Videos/Videos'
function ChannelDetails() {
  const [ChannelDetails, setChannelDetails] = useState("")
  const [videos, setVideos] = useState("");
  const { id } = useParams()
  useEffect(() => {
    fetchFromAPi("channels?part=snippet&id=" + id).then((data) => {
      setChannelDetails(data?.items)
    })
  }, [id])
  useEffect(() => {
    fetchFromAPi(`search?channelId=${id}&part=snippet&order=date`).then((data) => {
      setVideos(data?.items)
    })
  }, [id])
  console.log(ChannelDetails)
  return (
    <React.Fragment>
      <div className="Header">

      </div>
      <div className="channelDetails">
        <ChannelCard ChannelDetails={{ ChannelDetails }} />
      </div>
      <div className="videos">
        <Videos videos={videos} />
      </div>

    </React.Fragment>
  )
}

export default ChannelDetails