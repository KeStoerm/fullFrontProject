export interface ShamePoint {
    date: string,
}

export interface Person {
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
