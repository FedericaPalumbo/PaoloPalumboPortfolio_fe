export type Milestone = {
    year: string,
    title: string,
    // categoria e dettaglio, es. 'Training · Leiria, PT'
    label: string,
    description: string,
    // true per compagnia e scuole: titolo rosso scuro con linea laterale
    featured?: boolean
}