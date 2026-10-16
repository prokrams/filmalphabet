import type { coverTYPE, languageTYPE, screenTYPE, valueTYPE } from '../../../types/types'
import { LetterItem } from '../letter/letter'
import './letters.css'

export default function Letters({
    onChageActiveId,
    onChangeValue,
    onNavigate,
    onClearLetter,
    values,
    covers,
    activeLang
}: {
    onChageActiveId: (id: string) => void
    onChangeValue: (id: string, value: string) => void
    onNavigate: (screen: screenTYPE) => void
    onClearLetter: (id: string) => void
    values: valueTYPE
    covers: coverTYPE
    activeLang: languageTYPE
}) {

    const alphabet_ru = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я']
    const alphabet_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    function renderAlphabet(alphabet: string[]) {
        return (
            <div className='alphabet-letters'>
                {alphabet.map((letter, i) =>
                    <LetterItem
                        key={i}
                        id={letter}
                        letter={letter}
                        values={values}
                        covers={covers}
                        onChangeValue={onChangeValue}
                        onChageActiveId={onChageActiveId}
                        onNavigate={onNavigate}
                        onClearLetter={onClearLetter}
                    />
                )}
            </div>
        )
    }

    return (
        <>
            {activeLang === 'ru' ? renderAlphabet(alphabet_ru) : renderAlphabet(alphabet_en)}
        </>
    )
}