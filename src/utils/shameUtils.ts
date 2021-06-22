import { Persons, ShameRanking } from "@/types/types";
import { map, reduce, size, sortBy, reverse } from 'lodash';

export const analyseShamePointResult = (results: Persons): ShameRanking => {
    const countedShames: ShameRanking = map(results, result => ({name: result.name, rank: 0, shamePointAmount: size(result.shamePoints)}))

    const sortedShames: ShameRanking = reverse(sortBy(countedShames, ['shamePointAmount']));
    const rankedShames: ShameRanking = map(sortedShames, (result, index) => ({...result, rank: index }));

    return rankedShames;
}

export const calculateTotalShamePoints = (results: Persons): number => {
    return reduce(results, (sum, result) => sum + size(result.shamePoints), 0);
}
