import React, {FC, useState} from "react";
import axios from 'axios';

const ACCESS_KEY = "ysoEfCkU_eju9aypPTkcMTJWFOyCd9Kti7sLUywcKz0"

interface Props {
    query: string,
}

const Background: FC<Props> = ({query}) => {
  const [imageUrl, setImageUrl] = useState<string>('')
    const getPhoto = async () => {
        try {
            const response = await axios.get(`https://api.unsplash.com/search/photos/?client_id=${ACCESS_KEY}&query=${query}`)
            const firstPic = response?.data?.results[0]?.urls?.full
            setImageUrl(firstPic)
        } catch (e) {
            console.log(e)
        }

    }
getPhoto()
    return (
        <div className={'background-photo'}>
            <img src={imageUrl} alt=""/>
        </div>
    )
}

export default Background