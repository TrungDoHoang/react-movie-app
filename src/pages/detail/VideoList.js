import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import tmbApi from '../../api/tmbAPI'

const VideoList = (props) => {
    const { category } = useParams()
    const [videos, setVideos] = useState([])

    useEffect(() => {
        (async () => {
            const response = await tmbApi.getVideos(category, props.id)
            setVideos(response.results.slice(0, 5))
        })()
    }, [category, props.id])
    return (
        <>
            {
                videos.map((video, index) => (
                    <Video key={index} item={video} />
                ))
            }
        </>
    )
}
const Video = ({item}) => {
    const iframeRef = useRef()
    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px'
        iframeRef.current.setAttribute('height', height)
    },[])
    return (
        <div className="video">
            <div className="video__title">
                <h2>{item.name}</h2>
            </div>
            <iframe 
                src={`https://www.youtube.com/embed/${item.key}`}
                width="100%"
                title="video"
                ref={iframeRef}
            ></iframe>
        </div>
    )
}

export default VideoList
