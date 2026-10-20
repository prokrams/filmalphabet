import logo from '../../assets/logo.svg'
import './header.css'
import type { languageTYPE } from '../../types/types'
import BadgeLanguage from './badge-language/badge-language'

export default function Header({ 
    activeLanguage, 
    onSwitchLanguage, 
    activeScreen
}: {
    activeLanguage: languageTYPE
    onSwitchLanguage: (language: languageTYPE) => void
        activeScreen: string
}) {

    const onClearStorage = () => {
        localStorage.removeItem('values')
        localStorage.removeItem('covers')
        location.reload()
    }

    return (
         <div className='header'>
            <img src={logo} width={200} height={20}/>
            <div className='menu'>
                {activeScreen === 'letters' && 
                    <>
                        <button onClick={onClearStorage}>Очистить алфавит</button>
                        <BadgeLanguage 
                            activeLanguage={activeLanguage} 
                            onSwitchLanguage={onSwitchLanguage}
                            />
                    </>
                }
            </div>
        </div>
    )
}