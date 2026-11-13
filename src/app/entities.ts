export type Milestone = {
    year: string,
    title: string,
    // categoria e dettaglio, es. 'Training · Leiria, PT'
    label: string,
    description: string,
    // true per compagnia e scuole: titolo rosso scuro con linea laterale
    featured?: boolean
}

// riga della fascia dati in fondo alla pagina About
export type ProfileFact = {
    label: string,
    value: string
}
// banner a tutta larghezza con citazione sopra una foto
export type QuoteBanner = {
    text: string,
    author: string,
    // percorso della foto in public/images
    image: string
}