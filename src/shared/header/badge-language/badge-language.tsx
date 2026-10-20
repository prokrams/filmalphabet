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
                className={activeLanguage === 'ru' ? 'active' : ''}>
                абв
            </button>
            <button 
                onClick={() => onSwitchLanguage('en')}
                className={activeLanguage === 'en' ? 'active' : ''}>
                abc
            </button>
        </div>
    )
}