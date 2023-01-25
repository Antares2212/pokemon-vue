export const rareMarker = (rarity) => {
    switch (rarity) {
        case 'Common':
            return `<i class="fa-solid fa-circle"></i>`
        case 'Uncommon':
            return `<i class="fa-solid fa-square"></i>`
        case 'Rare':
            return `<i class="fa-solid fa-star"></i>`
        case 'Rare Holo':
            return `<i class="fa-solid fa-star"></i> H`
        case 'Rare Holo V':
            return `<i class="fa-solid fa-star"></i> V`
        case 'Rare Holo GX':
            return `<i class="fa-solid fa-star"></i> GX`
        case 'Rare Holo EX':
            return `<i class="fa-solid fa-star"></i> EX`
        case 'Promo':
            return `<i class="fa-solid fa-atom"></i>`
        default:
            return '—'
    }
}