export type Milestone = {
    year: string,
    title: string,
    // categoria e dettaglio, es. 'Training · Leiria, PT'
    label: string,
    description: string,
    // true per compagnia e scuole: titolo rosso scuro con linea laterale
    featured?: boolean
}

// riga della fascia dati in fondo alla pagina About, es. { label: 'Languages', value: 'Italian · English' }
export type ProfileFact = {
    label: string,
    value: string
}