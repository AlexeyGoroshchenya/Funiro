export const getData = (callback) => {

    const products = [
        {
            "id": 1,
            "url": "#",
            "title": "Syltherine",
            "text": "Stylish cafe chair",
            "labels": [
                {
                    "type": "sale",
                    "value": "-30%"
                }
            ],
            "image": "01.webp",
            "price": "2.500.000",
            "priceOld": "3.500.000",
            "shareUrl": "#",
            "likeUrl": "#"
        },
        {
            "id": 2,
            "url": "#",
            "title": "Leviosa",
            "text": "Stylish cafe chair",
            "labels": "",
            "image": "02.webp",
            "price": "2.500.000",
            "priceOld": "",
            "shareUrl": "#",
            "likeUrl": "#"
        },
        {
            "id": 3,
            "url": "#",
            "title": "Lolito",
            "text": "Luxury big sofa",
            "labels": [
                {
                    "type": "sale",
                    "value": "-50%"
                },
                {
                    "type": "new",
                    "value": "New"
                }
            ],
            "image": "03.webp",
            "price": "7.000.000",
            "priceOld": "14.000.000",
            "shareUrl": "#",
            "likeUrl": "#"
        },
        {
            "id": 4,
            "url": "#",
            "title": "Respira",
            "text": "Minimalist fan",
            "labels": [
                {
                    "type": "new",
                    "value": "New"
                }
            ],
            "image": "04.webp",
            "price": "500.000",
            "priceOld": "",
            "shareUrl": "#",
            "likeUrl": "#"
        },
        {
            "id": 5,
            "url": "#",
            "title": "Grifo",
            "text": "Night lamp",
            "labels": "",
            "image": "05.webp",
            "price": "1.500.000",
            "priceOld": "",
            "shareUrl": "#",
            "likeUrl": "#"
        },
        {
            "id": 6,
            "url": "#",
            "title": "Muggo",
            "text": "Small mug",
            "labels": [
                {
                    "type": "new",
                    "value": "New"
                }
            ],
            "image": "06.webp",
            "price": "150.000",
            "priceOld": "",
            "shareUrl": "#",
            "likeUrl": "#"
        },
        {
            "id": 7,
            "url": "#",
            "title": "Pingky",
            "text": "Cute bed set",
            "labels": [
                {
                    "type": "sale",
                    "value": "-50%"
                },
                {
                    "type": "new",
                    "value": "New"
                }
            ],
            "image": "07.webp",
            "price": "7.000.000",
            "priceOld": "14.500.000",
            "shareUrl": "#",
            "likeUrl": "#"
        },
        {
            "id": 8,
            "url": "#",
            "title": "Potty",
            "text": "Minimalist flower pot",
            "labels": [
                {
                    "type": "new",
                    "value": "New"
                }
            ],
            "image": "08.webp",
            "price": "500.000",
            "priceOld": "",
            "shareUrl": "#",
            "likeUrl": "#"
        },
        {
            "id": 9,
            "url": "#",
            "title": "Frammy",
            "text": "Set of blue frames",
            "labels": [
                {
                    "type": "new",
                    "value": "New"
                }
            ],
            "image": "09.webp",
            "price": "500.000",
            "priceOld": "",
            "shareUrl": "#",
            "likeUrl": "#"
        },
        {
            "id": 10,
            "url": "#",
            "title": "Bohauss",
            "text": "Luxury big sofa 2-seat",
            "labels": [
                {
                    "type": "new",
                    "value": "New"
                }
            ],
            "image": "10.webp",
            "price": "17.000.000",
            "priceOld": "",
            "shareUrl": "#",
            "likeUrl": "#"
        },
        {
            "id": 11,
            "url": "#",
            "title": "Big",
            "text": "Luxury big bed",
            "labels": [
                {
                    "type": "new",
                    "value": "New"
                }
            ],
            "image": "11.webp",
            "price": "15.000.000",
            "priceOld": "",
            "shareUrl": "#",
            "likeUrl": "#"
        }
    ]


    return products
    callback(products)

    /*return fetch('/dist/json/products.json', {
        method: 'GET',

    }).then(res => res.json())
        .then(res => {

            callback(res)

        })

        .catch(error => {

            console.log(error);

        })*/
}