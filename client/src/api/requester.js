async function requester(method, url, data) {
    const options = {};

    if(method !== 'GET'){
        options.method = method;
    }

    if (data) {
        options.headers = {
            'Content-Type': 'application/json',
        },
            options.body = JSON.stringify(data);
    }
    try {
        const respons = await fetch(url, options);
        const gamesData = await respons.json();

        return gamesData;


    } catch (err) {
        return alert(err.message);
    }


}

export const get = requester.bind(null, 'get');
export const post = requester.bind(null, 'post');
export const put = requester.bind(null, 'put');
export const del = requester.bind(null, 'delete');
