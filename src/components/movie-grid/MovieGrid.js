import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import tmbApi, { category, movieType, tvType } from '../../api/tmbAPI'
import { OutlineButton } from '../button/Button'
import MovieCard from '../movie-card/MovieCard'
import MovieSearch from '../movie-search/MovieSearch'
import './movie-grid.scss'

const MovieGrid = (props) => {
    const [items, setItems] = useState([])
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)

    const { keyword } = useParams()

    useEffect(() => {
        (async () => {
            let response = null
            if (keyword === undefined) {
                const params = {}
                switch (props.category) {
                    case category.movie:
                        response = await tmbApi.getMovieList(movieType.upcoming, { params })
                        break;
                    default:
                        response = await tmbApi.getTvList(tvType.popular, { params })
                }
            } else {
                const params = {
                    query: keyword,
                }
                response = await tmbApi.search(props.category, { params })
            }
            console.log(response)
            setItems(response.results)
            setTotalPage(response.total_pages)
        })()
    }, [props.category, keyword])

    const loadMore = async () => {
        let response = null
        if (keyword === undefined) {
            const params = {
                page: page + 1
            }
            switch (props.category) {
                case category.movie:
                    response = await tmbApi.getMovieList(movieType.upcoming, { params })
                    break;
                default:
                    response = await tmbApi.getTvList(tvType.popular, { params })
            }
        } else {
            const params = {
                query: keyword,
                page: page + 1,
            }
            response = await tmbApi.search(props.category, { params })
        }
        setItems([...items, ...response.results])
        setPage(response.page)
    }

    return (
        <>
            <div className="section mb-3">
                <MovieSearch category={props.category} keyword={keyword} />
            </div>
            <div className="movie-grid">
                {
                    items.map((item, index) => <MovieCard item={item} category={props.category} key={index} />)
                }
            </div>
            {
                page < totalPage ? (
                    <div className="movie-grid__load-more">
                        <OutlineButton className="small" onClick={loadMore}>Load More</OutlineButton>
                    </div>
                ) : null
            }
        </>
    )
}

export default MovieGrid
