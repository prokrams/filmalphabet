import { useState } from 'react'
import FilmCard from '../film-card/film-card.tsx'
import missingCover from '../../../assets/missing-cover.png'
import './search-container.css'
import type { fullFilmTYPE, keywordsTYPE, languageTYPE, screenTYPE, statusTYPE } from '../../../types/types'
import Status from '../status/status.tsx'
import BackIcon from '../../../assets/back-icon.tsx'

export default function SearchContainer({ 
    onNavigate,
    handleSelectFilm, 
    handleTakeCovers, 
    letterId, 
    activeLang 
}: {
    onNavigate: (screen: screenTYPE) => void
    handleSelectFilm: (filmName: string, filmYear: string) => void
    handleTakeCovers: (covers: string) => void
    letterId: string | null
    activeLang: languageTYPE
}) {

    const [films, setFilms] = useState<fullFilmTYPE[]>([])
    const [status, setStatus] = useState<statusTYPE>('idle')
    const [error, setError] = useState<string>()

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
            setStatus('loading')
        }

        fetch(`https://backend-filmalphabet.onrender.com/api?keyword=${keywords}`, {
            method: 'GET',
        })
        .then(res => {
            if (res.ok) {
                setStatus('success')
                return res.json()
            }
        })
        .then(json => {
            setFilms(json.films)
        })
        .catch(err => {
            setStatus('failed')
            setError(err)
            console.error(err)
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
                            <FilmCard
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
            <Status status={status} error={error}/>
            <div className='search-bar'>
                <button onClick={() => onNavigate('letters')}><BackIcon/></button>
                <input 
                    className='search-input' 
                    type='search' 
                    autoFocus 
                    placeholder={`найти фильм на ${letterId}`}
                    onChange={(e) => {
                        const keywords = e.target.value as keywordsTYPE
                        debounceSearch(keywords)
                    }}
                    />
            </div>
        </div>
    )
}