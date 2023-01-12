import React from 'react'
import { Link } from 'react-router-dom';
import { Box, Checkbox, Stack } from '@mui/material'
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl } from '../../Utils/constants';
import { CheckCircle } from '@mui/icons-material'
function Videos(props) {
    var arr = [];

    console.log(props.videos)
    for (let i = 0; i < props?.videos?.length; i++) {

        arr.push(
            <div className="card" key={i} style={{ height: '300px', width: '150px' }} title={props.videos[i].snippet.title}>

                <Link to={`/video/${props.videos[i].id.videoId}`}  >

                    <img src={props.videos[i].snippet.thumbnails.high.url} alt="" height={200} width={"150"} />
                </Link>



                <div className="card-body" >
                    <span style={{ fontSize: '12px' }}>{props.videos[i].snippet.title || demoVideoTitle}</span>

                </div>
                <Link to={`/channel/${props.videos[i].snippet.channelId}`}  >

                    <div className="card-footer" >
                        <span style={{ fontSize: '8px' }}>{props.videos[i].snippet.channelTitle || demoChannelTitle}<span><CheckCircle sx={{ fontSize: '8px' }}></CheckCircle></span></span>
                    </div>
                </Link>

            </div>
        )

    }
    return (
        <Stack direction={"row"} flexWrap={"wrap"} margin={2} gap={2} overflow={"auto"} className="video">
            {

                arr

            }

        </Stack>
    )
}

export default Videos
