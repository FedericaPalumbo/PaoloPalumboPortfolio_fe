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
// link ai social nella pagina Contacts
export type SocialLink = {
    label: string,
    url: string
}

// categorie dei filtri nella pagina Videos (il testo è anche l'etichetta mostrata, in maiuscolo via css)
export type VideoCategory = 'Classical' | 'Contemporary' | 'Performances' | 'Behind the scenes'
export type VideoFilter = VideoCategory | 'All'

// ciò che serve al lettore per aprire un video: lo hanno sia i video in griglia sia lo showreel
export type Playable = {
    title: string,
    // percorso della foto in public/images: copertina provvisoria finché non c'è il video
    poster: string,
    // percorso del file in public/videos, es. '/videos/showreel-2025.mp4'. Se manca, il lettore mostra solo la copertina
    src?: string
}

// video della griglia, sotto i filtri
export type Video = Playable & {
    category: VideoCategory,
    // anno e luogo, es. '2024 · YAGP Finals, USA'
    meta: string,
    role: string
}

// film principale in cima alla pagina
export type Showreel = Playable & {
    // es. '01:42'
    duration: string,
    tags: string
}