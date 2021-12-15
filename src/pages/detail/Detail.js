import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import apiConfig from '../../api/apiConfig'
import tmbApi from '../../api/tmbAPI'
import CastList from './CastList'
import VideoList from './VideoList'
import MovieList from '../../components/movie-list/MovieList'
import './detail.scss'

function Detail() {
    const { id, category } = useParams()
    const [item, setItem] = useState(null)
    useEffect(() => {
        (async () => {
            const params = {}
            const response = await tmbApi.detail(category, id, { params })
            setItem(response)
            window.scrollTo(0, 0)
        })()
    }, [category, id])
    return (
        <>
            {
                item && (
                    <>
                        <div className="banner"
                            style={{
                                backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path
                                    || item.poster_path)})`
                            }}
                        >
                        </div>
                        <div className="movie-content container mb-3">
                            <div className="movie-content__poster">
                                <div
                                    className="movie-content__poster__img"
                                    style={{
                                        backgroundImage: `url(${apiConfig.originalImage(item.poster_path
                                            || item.backdrop_path)})`
                                    }}
                                ></div>
                            </div>
                            <div className="movie-content__info">
                                <div className="title">
                                    {item.title || item.name}
                                </div>
                                <div className="genres">
                                    {
                                        item.genres && item.genres.slice(0,5).map((genre, index) => (
                                            <span key={index}>{genre.name}</span>
                                        ))
                                    }
                                </div>
                                <p className="overview">{item.overview}</p>
                                <div className="cast">
                                    <div className="section__header">
                                        <h2>Casts</h2>
                                    </div>
                                    <CastList id={item.id} />
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="section mb-3">
                                <VideoList id={item.id} />
                            </div>
                            <div className="section mb-3">
                                <div className="section__header mb-2">
                                    <h2>Similar</h2>
                                </div>
                                <MovieList category={category} type='similar' id={item.id} />
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default Detail
