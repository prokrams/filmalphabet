import type { languageTYPE } from '../../../types/types'
import './badge-language.css'

export default function BadgeLanguage({ 
    activeLanguage, 
    onSwitchLanguage 
}: {
    activeLanguage: languageTYPE
    onSwitchLanguage: (language: languageTYPE) => void
}) {
    return(
        <div className='lang-container'>
            <button 
                onClick={() => onSwitchLanguage('ru')} 
                className={`lang-item ${activeLanguage === 'ru' ? 'active-lang-item' : ''}`}>
                РУС
            </button>
            <button 
                onClick={() => onSwitchLanguage('en')}
                className={`lang-item ${activeLanguage === 'en' ? 'active-lang-item' : ''}`}>
                ENG
            </button>
        </div>
    )
}