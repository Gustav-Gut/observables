import { StructureData } from './structure-data';

export interface Character {
    "id": number,
    "name": string,
    "status": string,
    "species": string,
    "type": string,
    "gender": string,
    "origin": StructureData,
    "location": StructureData,
    "image": string,
    "episode": [
        string
    ],
    "url": string,
    "created": string
}
