import type { coverTYPE, languageTYPE, screenTYPE, valueTYPE } from '../../../types/types'
import Letters from '../letters/letters'
import './letters-container.css'

export default function LettersContainer({ 
    onChageActiveId, 
    onChangeValue, 
    onNavigate,
    onClearLetter,
    values,
    activeLang, 
    covers
}: {
    onChageActiveId: (id: string) => void
    onChangeValue: (id: string, value: string) => void
    onNavigate: (screen: screenTYPE) => void
    onClearLetter: (id: string) => void
    values: valueTYPE
    activeLang: languageTYPE
    covers: coverTYPE
}) {
    return (
        <div className='alphabet-container'>
            <Letters
                onChageActiveId={onChageActiveId} 
                onChangeValue={onChangeValue} 
                onNavigate={onNavigate}
                onClearLetter={onClearLetter}
                values={values} 
                activeLang={activeLang} 
                covers={covers}
            />
        </div>
    )
}