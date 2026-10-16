import searchFilms from '../../api/search-films'
import type { keywordsTYPE } from '../../types/types'

function debounce(
    func: (keywords: string) => void,
    ms: number
) {
    let timeout: number | undefined = 0
    return function closedFunction(keywords: keywordsTYPE) {
        clearTimeout(timeout)
        timeout = setTimeout(() => func(keywords), ms)
    }
}

const debounceSearch = 
    debounce((keywords: keywordsTYPE) => {
        searchFilms(keywords)
    }, 1000)

export default debounceSearch