export interface ShamePoint {
    personName: string,
    date: string,
}

export interface Person {
    id: string,
    name: string,
    shamePoints: Array<ShamePoint>,
}

export type Persons = Array<Person>

export interface ShameRank {
    name: string,
    rank: number,
    shamePointAmount: number,
}

export type ShameRanking = Array<ShameRank>