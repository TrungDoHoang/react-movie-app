import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { category } from '../../api/tmbAPI'
import Button from '../button/Button'
import Input from '../input/Input'
import './movie-search.scss'

const MovieSearch = (props) => {
    const navigate = useNavigate()
    const searchBoxRef = useRef()
    const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '')
    const goToSearch = useCallback(() => {
        if (keyword.trim().length > 0) {
            navigate(`/${category[props.category]}/search/${keyword}`)
        } else {
            searchBoxRef.current.classList.toggle('open')
            if(searchBoxRef.current.classList.contains('open')){
                searchBoxRef.current.firstElementChild.focus()
            } else {
                searchBoxRef.current.firstElementChild.blur()
            }
        }
    },[keyword, props.category, navigate])

    useEffect(() => {
        if(keyword.trim().length > 0){
            searchBoxRef.current.classList.add('open')
        }
        const enterEvent = e => {
            e.preventDefault()
            if(e.keyCode === 13){
                goToSearch()
            }
        }
        document.addEventListener('keyup', enterEvent)
        return () => {
            document.removeEventListener('keyup', enterEvent)
        }
    },[keyword, goToSearch])
    return (
        <div className="movie-search" ref={searchBoxRef}>
            <Input 
                type="text"
                placeholder="Enter key word"
                value={keyword}
                onChange={ e => {setKeyword(e.target.value)}}
            />
            <Button className="small" onClick={goToSearch}><i className="bx bx-search"></i></Button>
        </div>
    )
}

export default MovieSearch
