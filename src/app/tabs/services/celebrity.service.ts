import { Injectable } from "@angular/core";
import { Celebrity } from "src/app/shared/interfaces/celebrity.interfaces";

@Injectable({
    providedIn: 'root'
})
export class CelebrityService {
    private celebrities_list: Celebrity[] = [
        {
            id: "nm0000701",
            name: "Ian McKellen",
            birthYear: 1939,
            deathYear: 0,
        },
        {
            id: "nm0000008",
            name: "Marlon Brando",
            birthYear: 1924,
            deathYear: 2004,
        },
        {
            id: "nm0000158",
            name: "Tom Hanks",
            birthYear: 1956,
            deathYear: 0,
        },
        {
            id: "nm0000704",
            name: "Elijah Wood",
            birthYear: 1981,
            deathYear: 0,
        },
        {
            id: "nm0000199",
            name: "Al Pacino",
            birthYear: 1940,
            deathYear: 0,
        },
        {
            id: "nm0000705",
            name: "Robin Wright",
            birthYear: 1966,
            deathYear: 0,
        },
        {
            id: "nm0000237",
            name: "John Travolta",
            birthYear: 1954,
            deathYear: 0,
        },
        {
            id: "nm0000235",
            name: "Uma Thurman",
            birthYear: 1970,
            deathYear: 0,
        },
        {
            id: "nm0000434",
            name: "Mark Hamill",
            birthYear: 1951,
            deathYear: 0,
        },
        {
            id: "nm0000148",
            name: "Harrison Ford",
            birthYear: 1942,
            deathYear: 0,
        },
    ];

    getList(): Celebrity[] {
        return this.celebrities_list;
    }
}