import './film-card.css'
import icon from '../../../assets/kinopoisk-icon.svg'
import type { filmTYPE } from '../../../types/types'

export default function FilmCard({
    img, 
    title, 
    year, 
    originalTitle, 
    idUrl, 
    rating, 
    country, 
    onClick
}: filmTYPE) {
    return (
        <div className='search-item' onClick={() => onClick()}>
            <img className='search-img' src={img} alt={title} title={title}/>
            <div className='search-desc'>
                <div className='search-titles'>
                    <p>{title}</p>
                    <p>{originalTitle}</p>
                </div>
                <div className='search-keywords'>
                    <div>
                        <span>{year}</span>
                        <span>{country}</span>
                    </div>
                    <a href={`https://www.kinopoisk.ru/film/${idUrl}/`} target='_blank' rel="noopener noreferrer" className='search-rating'>
                        <img src={icon} width='25px'/>
                        <p>{rating}</p>
                    </a>
                </div>
            </div>
        </div>
    )
}