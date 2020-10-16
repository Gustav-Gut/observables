import { Character } from './character';

export interface AllCharacters {
    "info": {
        "count": number,
        "pages": number,
        "next": string,
        "prev": null
    },
    "results": Character[]
}
