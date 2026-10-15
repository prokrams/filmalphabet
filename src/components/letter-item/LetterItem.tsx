import type { coverTYPE, valueTYPE } from '../../app/App'
import './Letter.css'
import { useRef, type Dispatch, type SetStateAction } from 'react'

export function LetterItem({ 
    id, 
    letter, 
    values, 
    setValue, 
    activeId, 
    covers, 
    setCovers, 
    handleChangePage 
}: {
    id: string
    letter: string
    values: valueTYPE
    setValue: Dispatch<SetStateAction<valueTYPE>>
    activeId: Dispatch<SetStateAction<string | null>>
    covers: coverTYPE
    setCovers: Dispatch<SetStateAction<coverTYPE>>
    handleChangePage: (newPage: string) => void
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
        <div className='abc-item'>
            <div className='letter'>{letter}</div>
            <img 
                ref={coverRef} 
                src={covers && covers[id]} 
                alt=''
            />
            <div className='abc-textarea'>
                <textarea 
                    id={id} 
                    className='desc' 
                    value={values && values[id] || ''} 
                    placeholder='начать поиск' 
                    onChange={e => setValue(prev => ({...prev, [id]: e.target.value}))} 
                    onFocus={e => {activeId(e.target.id); handleChangePage('search')}}
                    onMouseMove={e => handleSetCords(e)}
                    onMouseEnter={() => handleDisplayCover()}
                    onMouseLeave={() => handleUndisplayCover()}
                />
                {values[id] != null && <svg 
                    onClick={() => {setValue(prev => ({...prev, [id]: ''})); setCovers(prev => ({...prev, [id]: ''}))}}
                    className='delete-mark' 
                    xmlns="http://www.w3.org/2000/svg" 
                    height="24px" 
                    viewBox="0 -960 960 960" 
                    width="24px"
                    ><path d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z"/></svg>}
            </div>
        </div>
    )
}

export function Letters({ 
    values, 
    setValue, 
    activeId, 
    handleChangePage, 
    covers, 
    setCovers, 
    activeLang 
}: {
    values: valueTYPE
    setValue: Dispatch<SetStateAction<valueTYPE>>,
    activeId: Dispatch<SetStateAction<string | null>>
    handleChangePage: (newPage: string) => void
    covers: coverTYPE
    setCovers: Dispatch<SetStateAction<coverTYPE>>
    activeLang: number
}) {

    const letters_line1 = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й']
    const letters_line2 = ['к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф']
    const letters_line3 = ['х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я']
    const letters_line4 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
    const letters_line5 = ['l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v']
    const letters_line6 = ['w', 'x', 'y', 'z']

    function renderColum(line: string[]) {
        return (
            <div className='abc-colum'>
                {line.map((letter, i) => 
                    <LetterItem 
                        id={letter} 
                        key={i} 
                        letter={letter} 
                        values={values} 
                        setValue={setValue} 
                        activeId={activeId} 
                        covers={covers} 
                        setCovers={setCovers} 
                        handleChangePage={handleChangePage}
                    />
                )}
            </div>
        )
    }

    function renderAllColum(line1: string[], line2: string[], line3: string[]) {
            return (
                <>
                    {renderColum(line1)}
                    {renderColum(line2)}
                    {renderColum(line3)}
                </>
            )
    }

    return (
        <>
            {activeLang === 0 && 
                renderAllColum(letters_line1, letters_line2, letters_line3)
            }
            {activeLang === 1 &&
                renderAllColum(letters_line4, letters_line5, letters_line6)
            }
        </>
    )
}