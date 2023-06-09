import React, { useState, useEffect } from 'react'
import SearchBar from './Components/SearchBar'
import VideoList from './Components/VideoList'
import VideoDetail from './Components/VideoDetail'
import useVideos from './Components/hooks/useVideos'
const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null)
    const [videos, search] = useVideos('Buildings')


    useEffect(() => {
        setSelectedVideo(videos[0])
    }, [videos])


    const onVideoSelect = video => {
        setSelectedVideo(video)
    }

    return (
        <div className='ui container'>
            <SearchBar onFormSubmit={search} />
            <div className='ui grid'>
                <div className='ui row'>
                    <div className='eleven wide column'>
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className='five wide column'>
                        <VideoList
                            onVideoSelect={onVideoSelect}
                            videos={videos}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
