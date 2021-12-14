import React, { useEffect, useState } from 'react'
import tmbApi, { movieType } from '../../api/tmbAPI'
import SwiperCore, {Autoplay} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import HeroSlideItem from './HeroSlideItem'
import './hero-slide.scss'
import TrailerModal from './TrailerModal'

function HeroSlide() {
    const [movieItems, setMovieItems] = useState([])

    useEffect(() => {
        (async () => {
            const params = { page: 1 }
            try {
                const response = await tmbApi.getMovieList(movieType.popular, { params })
                setMovieItems(response.results.slice(0, 4))
            } catch {
                console.log('error loading data hero-slide')
            }
        })()
    }, [])

    SwiperCore.use([Autoplay])
    return (
        <div className="hero-slide">
            <Swiper
                modules={Autoplay}
                spaceBetween={0}
                slidesPerView={1}
                grabCursor={true}
                // autoplay={{delay: 4000}}
            >
                {
                    movieItems.map((item, index) => (
                        <SwiperSlide key={index}>
                            {({isActive}) => (
                                <HeroSlideItem item={item} className={isActive ? 'active' : ''}/>
                            )}
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            {
                movieItems.map((item, index) => (
                    <TrailerModal key={index} item={item} />
                ))
            }
        </div>
    )
}

export default HeroSlide
