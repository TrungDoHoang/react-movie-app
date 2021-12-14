import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide} from 'swiper/react'
import tmbApi, { category } from '../../api/tmbAPI'
import apiConfig from '../../api/apiConfig'
import './movie-list.scss'

function MovieList(props) {
    const [items, setItems] = useState([])

    useEffect(() => {
        (async () => {
            let response = null
            const params = {}
            if(props.type !== 'similar'){
                switch (props.category) {
                    case category.movie:
                        response = await tmbApi.getMovieList(props.type, {params})
                        break;
                    default:
                        response = await tmbApi.getTvList(props.type, {params})
                }
            } else{
                response = await tmbApi.similar(props.category, props.id)
            }
            setItems(response.results)
        })()
    }, [])
    console.log(items)
    return (
        <div className="movie-list">
            <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={'auto'}
            >
                {
                    items.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img src={apiConfig.w400Image(item.poster_path)} alt="" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default MovieList

