export const getData = (callback) => {
    return fetch('/dist/json/products.json', {
        method: 'GET',

    }).then(res => res.json())
        .then(res => {

            callback(res)

        })

        .catch(error => {

            console.log(error);

        })
}