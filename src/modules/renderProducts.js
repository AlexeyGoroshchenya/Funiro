import { getData } from './getData';

export const renderProducts = () => {

    const galery = document.querySelector('.products__items');
    const btnMore = document.querySelector('.products__btn');

    let numberCards = 4

    const setNumberOfCards = () => {
        if (galery.clientWidth > 950 && galery.clientWidth < 1237) {
            numberCards = 6
        } else {
            numberCards = 4
        }
    }

    const renderCard = (item) => {

        const galeryCard = document.createElement('article');
        galeryCard.classList.add('products__item', 'item-product')
        galeryCard.setAttribute('data-pid', `${item.id}`)

        let labelNew = '';
        let labelSale = '';
        let selectedButton = '<a href="#" class="actions-product__button button">Add to cart</a>';
        let cart = [];

        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'));

            cart.forEach(product => {

                if (product.pid == item.id) {
                    selectedButton = `<a href="#" class="actions-product__button in-cart button">In cart</a>`
                }

            })


        }

        if (item.labels.length) {

            item.labels.forEach((label) => {

                if (label.type === 'sale') {
                    labelSale = `<div class="item-product__label item-product__label-sale">${label.value}</div>`
                }

                if (label.type === 'new') {
                    labelNew = `<div class="item-product__label item-product__label-new">${label.value}</div>`
                }

            })

        }

        let priceOld = '';
        if (item.priceOld.length) {

            priceOld = `Rp ${item.priceOld}`;
        }

        galeryCard.innerHTML = `
       
        <div class="item-product__labels">
        ${labelNew}
        ${labelSale}

        </div>

        <a href="${item.url}" class="item-product__image">
            <img src="dist/img/products/${item.image}" alt="">
        </a>
        <div class="item-product__body">
            <div class="item-product__content">
                <div class="item-product__title">${item.title}</div>
                <div class="item-product__text">${item.text}</div>
            </div>
            <div class="item-product__prices">
                <div class="item-product__price">Rp ${item.price}</div>
                <div class="item-product__price-old">${priceOld}</div>
            </div>
            <div class="item-product__actions actions-product">
                <div class="actions-product__body">
                    ${selectedButton}
                    <a href="${item.shareUrl}" class="actions-product__link"><img
                            src="dist/img/iconsfont/share.svg" alt="">
                        <p> Share</p>
                    </a>
                    <a href="${item.likeUrl}" class="actions-product__link"><img src="dist/img/iconsfont/like.svg"
                            alt="">
                        <p> Like</p>
                    </a>
                </div>
            </div>
        </div>
        `;
        galery.append(galeryCard);
    }

    const startRender = (array) => {

        galery.innerHTML = "";

        array.forEach((item, index) => {
            if (index < numberCards) {
                renderCard(item);
            }

        })
    }

    const moreRender = (arr) => {

        const rendered = document.querySelectorAll('.products__item');

        arr.forEach((product, index) => {
            if (index >= rendered.length && index < (rendered.length + numberCards)) {
                renderCard(product)
            }
        })

    }

    setNumberOfCards()

    startRender(getData())

    btnMore.addEventListener('click', (e) => {
        e.preventDefault()

        moreRender(getData())
    })



}