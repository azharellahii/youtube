import { useState, useEffect } from "react";
import Api from "../../Apis/Api";

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([])
    useEffect(() => {
        search(defaultSearchTerm)
    }, [defaultSearchTerm])
    const search = async term => {
        const response = await Api.get('/search', {
            params: {
                q: term
            }
        })
        setVideos(response.data.items)
    }

    return [videos, search]
}

export default useVideos