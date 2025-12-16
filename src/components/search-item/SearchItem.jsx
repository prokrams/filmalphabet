import './SearchItem.css'
import icon from '../../assets/kinopoisk-icon.svg'

export default function SearchItem({img, title, year, originalTitle, idUrl, rating, country, onClick}) {
    return (
        <div className='search-item' onClick={() => onClick()}>
            <img className='search-img' src={img} alt={title} title={title}/>
            <div className='search-desc'>
                <div>
                    <h1>{title}</h1>
                    <h2>{originalTitle}</h2>
                </div>
                <div className='search-keywords'>
                    <div>
                        <p 
                            style={{
                                padding: '.25rem .5rem',
                                backgroundColor: '#585858',
                                color: 'var(--black)',
                                borderRadius: '50px'
                            }}
                        >{year}</p>
                        <p 
                            style={{
                                padding: '.25rem .5rem',
                                backgroundColor: '#585858',
                                color: 'var(--black)', 
                                borderRadius: '50px'
                            }}
                        >{country}</p>
                    </div>
                    <div>
                        <img src={icon} width='25px'/>
                        <a style={{
                            padding: '.25rem 0 .25rem .5rem',
                            color: '#FF5500', 
                            borderRadius: '50px'
                        }}
                        href={`https://www.kinopoisk.ru/film/${idUrl}/`}>{rating}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}