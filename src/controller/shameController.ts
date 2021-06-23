import { Person } from "@/types/types"
import axios from "axios";

const getOrigin = (): string => {
    return window.location.hostname;
}

export const getShamePointsForMonth = async (): Promise<Array<Person>> => {
    const date = new Date();
        const url = getOrigin() + ':1336' + '/' + date.getFullYear() + '/' + (date.getMonth() + 1) ;
        const { data } = await axios.get(url, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json'
            }
        });
        return data;
}
