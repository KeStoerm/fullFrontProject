import { mockAnswer } from "@/mockData/mocks"
import { Persons } from "@/types/types"

export const getShamePointsForMonth = (): Promise<Persons> => {
    return new Promise(resolve => setTimeout(resolve, 5000, mockAnswer));
}