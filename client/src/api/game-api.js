import * as requester from './requester';

const BASE_URL = 'http://localhost:3030/jsonstore/games';

export const getAll = async () => {
    const result = await requester.get(BASE_URL);
    console.log(Object.values(result));

    const games = Object.values(result);

    return games;
};

