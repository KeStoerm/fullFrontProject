import { Person } from "@/types/types"
import axios, { AxiosResponse } from "axios";

export const getShamePointsForMonth = async (): Promise<Array<Person>> => {
    const date = new Date();
        const url = process.env.VUE_APP_FULL_FRONT_BACKEND_URL + '/' + date.getFullYear() + '/' + (date.getMonth() + 1) ;
        const { data } = await axios.get(url, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json'
            }
        });
        return data;
}
