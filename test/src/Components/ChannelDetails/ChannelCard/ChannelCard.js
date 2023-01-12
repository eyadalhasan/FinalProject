import { SnippetFolder, ThumbUp } from '@mui/icons-material'
import React from 'react'
import "./ChannelCard.css"
import { CheckCircle } from '@mui/icons-material'
import Videos from '../../Videos/Videos'
import { demoProfilePicture } from '../../../Utils/constants'
function ChannelCard(props) {
    console.log(props.ChannelDetails)
    return (
        <React.Fragment>
            <div className="channel-card">
                <img src={props.ChannelDetails?.ChannelDetails[0]?.snippet?.thumbnails?.high?.url||demoProfilePicture} alt="" />
                <div className="card-footer channel">
                    <div style={{ color: 'white', fontSize: '8px' }}><span>{props?.ChannelDetails?.ChannelDetails[0]?.snippet?.title}</span><span><CheckCircle sx={{ fontSize: '8px', color: 'gray', fontWeight: 'bold' }}></CheckCircle ></span>
                        <br />
                        <span style={{ fontSize: '8px', color: 'gray', fontWeight: 'bold' }}>{props?.ChannelDetails?.ChannelDetails[0]?.statistics?.subscriberCount} subscriber</span>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default ChannelCard