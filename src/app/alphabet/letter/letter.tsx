import CrossIcon from '../../../assets/cross-icon'
import type { coverTYPE, screenTYPE, valueTYPE } from '../../../types/types'
import './letter.css'
import { useRef } from 'react'
import missingCover from '../../../assets/missing-cover.png'

export function LetterItem({ 
    id, 
    letter, 
    values, 
    covers,
    onChageActiveId, 
    onChangeValue, 
    onClearLetter,
    onNavigate
}: {
    id: string
    letter: string
    values: valueTYPE
    covers: coverTYPE
    onChageActiveId: (id: string) => void
    onChangeValue: (id: string, value: string) => void
    onNavigate: (screen: screenTYPE) => void
    onClearLetter: (id: string) => void
}) {

    const handleSetCords = (e: React.MouseEvent<HTMLTextAreaElement>) => {
        if (coverRef.current) {
            coverRef.current.style.top = e.clientY + (-210 / 2) + 'px'
            coverRef.current.style.left = e.clientX + (-140 / 2) + 'px'
        }
    }

    const coverRef = useRef<HTMLImageElement>(null)
    const handleDisplayCover = () => {
        if (coverRef.current) {
            coverRef.current.classList.add('active-cover')
        }
    }
    const handleUndisplayCover = () => {
        if (coverRef.current) {
            coverRef.current.classList.remove('active-cover')
        }
    }

    return (
        <div className='alphabet-letter'>
            <p className={values[id] ? 'active' : ''}>{letter}</p>
            {covers[id] && <img 
                ref={coverRef} 
                src={covers[id] === 'https://kinopoiskapiunofficial.tech/images/posters/kp/no-poster.png' ? missingCover : covers[id]} 
                alt={`обложка к фильму ${values[id]}`}
            />}
            <div className='alphabet-textarea'>
                <textarea
                    id={id} 
                    value={values[id] || ''} 
                    placeholder='начать поиск' 

                    onChange={e => {onChangeValue(id, e.target.value); localStorage.setItem('values', e.target.value)}} 
                    onFocus={e => {onChageActiveId(e.target.id); onNavigate('search')}}

                    onMouseMove={e => handleSetCords(e)}
                    onMouseEnter={() => handleDisplayCover()}
                    onMouseLeave={() => handleUndisplayCover()}
                />
                {values[id] && <button onClick={() => onClearLetter(id)}><CrossIcon/></button>}
            </div>
        </div>
    )
}