import LangSwitch from "../lang-switch/LangSwitch";
import logo from '../../assets/logo.svg'
import './Header.css'

export default function Header({ activeLang, setActiveLang, activePage }) {
    return (
         <div className='header'>
            <img src={logo} width="200px"/>
            {activePage === 'letters' && <LangSwitch activeLang={activeLang} setActiveLang={setActiveLang}/>}
        </div>
    )
}