import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
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

    private celebrityList = new Subject<Celebrity[]>();
    CelebrityListObs = this.celebrityList.asObservable();

    getList(): void {
        this.celebrityList.next(this.celebrities_list)
    }

    // getList(): Celebrity[] {
    //     return this.celebrities_list;
    // }

    getById(id: string): Celebrity | undefined {
        const celebrity = this.celebrities_list.find((celebrity: Celebrity) => celebrity.id === id);
        return celebrity;
    }

    update(updatedMovie: Celebrity): void {
        const index = this.celebrities_list.findIndex((movie: Celebrity) => movie.id === updatedMovie.id);
        if (index !== -1) {
            this.celebrities_list[index] = updatedMovie;
        }

        this.celebrityList.next(this.celebrities_list)
    }

    private _numId = this.celebrities_list.length;
    
    create(createdCelebrity: Celebrity) {
        const newId = `nm${(this._numId + 1).toString().padStart(7, '0')}`;
        this._numId += 1;
        this.celebrities_list.push({
            id: newId,
            name: createdCelebrity.name,
            birthYear: createdCelebrity.birthYear,
            deathYear: createdCelebrity.deathYear
        })
        this.celebrityList.next(this.celebrities_list);
    }

    delete(id: string): void {
        const index = this.celebrities_list.findIndex((c: Celebrity) => c.id === id);
        if (index !== -1) {
            this.celebrities_list.splice(index, 1);
            this.celebrityList.next(this.celebrities_list);
        }
    }

}