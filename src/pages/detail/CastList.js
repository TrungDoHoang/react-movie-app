import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import apiConfig from '../../api/apiConfig'
import tmbApi from '../../api/tmbAPI'

const CastList = (props) => {
    const { category } = useParams()
    const [casts, setCasts] = useState([])

    useEffect(() => {
        (async () => {
            const response = await tmbApi.credits(category, props.id)
            setCasts(response.cast.slice(0, 5))
        })()
    }, [category, props.id])

    return (
        <div className="casts">
            {
                casts.map((cast, index) => (
                    <div className="casts__item" key={index}>
                        <div
                            className="casts__item__img"
                            style={{
                                backgroundImage: `url(${apiConfig.w500Image(cast.profile_path)})`
                            }}
                        ></div>
                        <p className="casts__item__name">{cast.name}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default CastList
