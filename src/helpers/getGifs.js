export const getGifs = async (url, apiKey, limite, categoria)=> {
    let params = { api_key:apiKey, limit:limite, q: encodeURI( categoria ) };
    Object.keys(params).map( (key, index) => url += `${index == 0 ? '?' : '&'}${key}=${params[key]}` );
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        };
    });
    return gifs;
}