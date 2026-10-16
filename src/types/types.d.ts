export {}

export type valueTYPE = Record<string, string>

export type coverTYPE = valueTYPE

export type screenTYPE = 'letters' | 'search'

export type languageTYPE = 'ru' | 'en'

export type statusTYPE = 'idle' | 'loading' | 'failed' | 'success'

export type keywordsTYPE = string

export type filmTYPE = {
    img: string
    title: string
    year: string
    originalTitle: string
    idUrl: string
    rating: string
    country: string
    onClick: () => void
}

export interface fullFilmTYPE extends filmTYPE {
    type: string
    filmId: string
    posterUrl: string
    nameRu: string
    nameEn: string
    genres: Record<string, string>[]

}