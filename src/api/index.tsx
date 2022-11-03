
import api from "./config";
interface queryTypes {
    params: string,
    word: string
}

export const fetchGuessDaily = async (params: queryTypes) => {
    const res = await api.get(`daily?guess=${params}`);
    return res;
};

export const fetchGuessRandom = async (word: string, round: number) => {
    const res = await api.get(`random?guess=${word}&seed=${round}`);
    return res;
};

export const fetchGuessWord = async (word: string, guess: string) => {
    const res = await api.get(`word/${word}?guess=${guess}`);
    return res;
}



