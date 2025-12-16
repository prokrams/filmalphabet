import { useState } from 'react'
import SearchItem from '../../components/search-item/SearchItem'
import missingCover from '../../assets/missing-cover.webp'
import './SearchContainer.css'

export default function SearchContainer({ letterId, handleSelectFilm, activeLang, handleTakeCovers, handleChangePage }) {

    const [films, setFilms] = useState([0])
    const [loading, setLoading] = useState(<></>)

    const debounce = (func, ms) => {
        let timeout
        return function closedFunction(...args) {
            clearTimeout(timeout)
            timeout = setTimeout(() => func.apply(this, args), ms)
        }
    }

    const searchMovie = async e => {
        let keywords = e.target.value
        if (keywords === '') {
            keywords = letterId
        } else if (keywords.length >= 1) {
            setLoading(<p className='search-info'>фильмы подгружаются<br/>первый запрос обычно приходит дольше, чем остальные</p>)
        }

        fetch(`https://backend-filmalphabet.onrender.com/api?keyword=${keywords}`, {
            method: 'GET',
        })
        .then(res => {
            if (res.ok) {
                setLoading(<></>)
                console.log(res, loading)
                return res.json()
            }
        })
        .then(json => {
            setFilms(json.films)
            console.log(json.films)
        })
        .catch(e => {
            setLoading(<p className='search-info'>выходит ошибка, видимо сегодня без фильмов...<br/>{`${e}`}</p>)
            console.error(e)
        })
    }

    const debounceSearch = debounce((e) => {
        searchMovie(e)
    }, 1000)

    return (
        <div className='search-container'>
            <div className='search-wrapper-films'>
                {films.length >= 0 + 2 && <div className='search-list-films'>
                    {films
                    .filter(film => film.type === "FILM")
                    .map(film => {
                        return (
                            <SearchItem
                                key={film.filmId} 
                                img={film.posterUrl === 'https://kinopoiskapiunofficial.tech/images/posters/kp/no-poster.png' ? missingCover : film.posterUrl} 
                                title={film.nameRu == null ? film.nameEn : film.nameRu} 
                                year={film.year} 
                                originalTitle={film.nameEn == null ? film.nameRu : film.nameEn} 
                                idUrl={film.filmId} 
                                rating={film.rating === 'null' ? '-' : film.rating} 
                                country={film.genres[0] && film.genres[0].genre || ''} 
                                onClick={() => {
                                    activeLang === 1 ? handleSelectFilm(film.nameEn, film.year) : handleSelectFilm(film.nameRu, film.year)
                                    handleTakeCovers(film.posterUrl)
                                    handleChangePage('letters')}
                                }
                            />
                        )
                    })}
                </div>}
            </div>
            {films.length <= 0 ? <p className='search-info'>по данному запросу ничего не найдено</p> : <></>}
            {loading}
            <input className='search-bar' type='search' autoFocus placeholder={`найти фильм на ${letterId}`} onChange={e => debounceSearch(e)}/>
        </div>
    )
}