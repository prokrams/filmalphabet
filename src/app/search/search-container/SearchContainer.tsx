import { useState } from 'react'
import SearchItem from '../search-item/SearchItem.tsx'
import missingCover from '../../assets/missing-cover.webp'
import './SearchContainer.css'
import { type fullFilmTYPE, type keywordsTYPE, type languageTYPE, type screenTYPE } from '../../../types/types'

export default function SearchContainer({ 
    letterId, 
    handleSelectFilm, 
    activeLang, 
    handleTakeCovers, 
    onNavigate 
}: {
    letterId: string | null
    handleSelectFilm: (filmName: string, filmYear: string) => void
    activeLang: languageTYPE
    handleTakeCovers: (covers: string) => void
    onNavigate: (screen: screenTYPE) => void
}) {

    const [films, setFilms] = useState<fullFilmTYPE[]>([])
    const [loading, setLoading] = useState(<></>)

    const debounce = (func: (keywords: keywordsTYPE) => void, ms: number) => {
        let timeout: number | undefined = 0
        return function closedFunction(keywords: keywordsTYPE) {
            clearTimeout(timeout)
            timeout = setTimeout(() => func(keywords), ms)
        }
    }

    const searchMovie = async (keywords: keywordsTYPE) => {
        if (keywords === '' && letterId) {
            keywords = letterId
        } else if (keywords.length >= 1) {
            setLoading(<p className='search-info'>фильмы подгружаются<br/>первый запрос обычно приходит дольше, чем остальные</p>)
        }

        fetch(`http://localhost:8000/api?keyword=${keywords}`, {
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

    const debounceSearch = debounce((keywords: keywordsTYPE) => {
        searchMovie(keywords)
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
                                    if (activeLang === 'ru') {
                                        handleSelectFilm(film.nameRu, film.year)
                                    } else {
                                        handleSelectFilm(film.nameEn, film.year)
                                    }
                                    handleTakeCovers(film.posterUrl)
                                    onNavigate('letters')}
                                }
                            />
                        )
                    })}
                </div>}
            </div>
            {films.length <= 0 ? <p className='search-info'>по данному запросу ничего не найдено</p> : <></>}
            {loading}
            <input 
                className='search-bar' 
                type='search' 
                autoFocus 
                placeholder={`найти фильм на ${letterId}`} 
                onChange={(e) => {
                    const keywords = e.target.value as keywordsTYPE
                    debounceSearch(keywords)
                }}
            />
        </div>
    )
}