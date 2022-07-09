import { getData } from './getData';
import { blockBody } from './helpers';
import { unblockBody } from './helpers';

export const changeCart = () => {

    const cartList = document.querySelector('.cart__list')

    let pid = 0;
    let cart = [];
    let products = getData()

    const renderCartIcon = (textContent, display) => {

        document.querySelector('.cart>span').textContent = textContent
        document.querySelector('.cart>span').style.display = display
    }

    const renderProductBtn = (elem, str) => {

        elem.textContent = str;

    }


    const renderCartBody = () => {

        let total = 0;

        cartList.innerHTML = `
        <div class="list-cart__title">Checkout</div>
		<div class="list-cart__close">+</div>
        <ul class="list-cart__items">

        </ul>
        <div class="list-cart__total"></div>
        <div class="list-cart__user">
            <input type="text" class="list-cart__name" placeholder="Please indicate your name" name="name" required >
            <input type="tel" class="list-cart__phone" placeholder="Please indicate your phone" name="phone" required >
        </div>
        <button type="submit" class="list-cart__button button">Buy now</button>`

        const cartListItems = cartList.querySelector('.list-cart__items');

        cart.forEach((item) => {

            const cartItem = document.createElement('li');
            cartItem.classList.add('cart__item')
            cartItem.setAttribute('item-id', `${item.pid}`)

            let totalPrice = (+item.quantity) * (parseInt(item.item.price.replace(/[\s.,%]/g, '')))
            cartItem.innerHTML = `
        <div class="cart__image"> <img src="dist/img/products/${item.item.image}" alt=""></div>
        <div class="cart__text">
            <a class="cart__title">${item.item.title}</a>
            <div class="cart__quantity quantity-cart">
                
                <div class="quantity-cart__row">
                <div class="quantity-cart__column"><div class="quantity-cart__title">Quantity:</div>
                    <div class="quantity-cart__less">-</div>
                    <div class="quantity-cart__quantity">${item.quantity}</div>
                    <div class="quantity-cart__more">+</div>
                </div>
                <div class="quantity-cart__column">
                    
                    <div class="quantity-cart__price">Price: <p> ${totalPrice} </p></div>
                    
                </div>
                </div>
            </div>
            <div class="cart__delete">Delete</div>
        </div>
        `

            cartListItems.append(cartItem);

            total += totalPrice

        })

        cartList.querySelector('.list-cart__total').innerHTML = `Total price: ${total} Rp`

    }

    const renderQuantity = (elem, command) => {


        let itemId = elem.closest('.cart__item').getAttribute('item-id');
        const item = document.querySelector(`[data-pid="${itemId}"]`)

        let itemQuantity = elem.closest('.cart__item').querySelector('.quantity-cart__quantity').textContent


        if (command === 'delete') {
            console.log(itemId);
            removeItemFromCart(itemId)

            if (item) {
                renderProductBtn(item.querySelector('.actions-product__button'), 'Add to cart')
                item.querySelector('.actions-product__button').classList.remove('in-cart')
            }


        }

        if (command === 'less') {

            if (+itemQuantity > 1) {
                cart.forEach((item) => {
                    if (item.pid === itemId) {
                        item.quantity--

                    }
                })
                itemQuantity--
                localStorage.setItem('cart', JSON.stringify(cart))
            } else {
                removeItemFromCart(itemId)

                if (item) {
                    renderProductBtn(item.querySelector('.actions-product__button'), 'Add to cart')
                    item.querySelector('.actions-product__button').classList.remove('in-cart')
                }

            }



        }

        if (command === 'more') {

            cart.forEach((item) => {
                if (item.pid === itemId) {
                    item.quantity++

                }
            })
            itemQuantity++
            localStorage.setItem('cart', JSON.stringify(cart))
        }

        renderCartBody()

        if (cart.length === 0) {
            setTimeout(() => {
                cartList.classList.remove('cart__list-active')
                unblockBody()
            }, 300)

        }

    }


    const removeItemFromCart = (id) => {

        let productToRemove = 0


        cart.find((item, index) => {
            if (item.pid == id) {
                productToRemove = index
            };
        });

        cart.splice(productToRemove, 1)

        localStorage.removeItem('cart')
        if (cart.length > 0) {

            localStorage.setItem('cart', JSON.stringify(cart))

            renderCartIcon(cart.length, 'flex')
        } else {
            renderCartIcon('', 'none')
        }

    }

    const addItemToCart = () => {

        let cartArr = [];

        if (localStorage.getItem('cart')) {
            cartArr = JSON.parse(localStorage.getItem('cart'));
        }


        products.forEach(product => {

            if (+product.id === +pid) {

                if (cartArr.length === 0) {
                    let productToCart = {}
                    productToCart.pid = pid;
                    productToCart.quantity = 1;
                    productToCart.item = product

                    cartArr.push(productToCart)

                } else {
                    if (!cartArr.find(item => +item.pid === +product.id)) {
                        let productToCart = {}
                        productToCart.pid = pid;
                        productToCart.quantity = 1;
                        productToCart.item = product


                        cartArr.push(productToCart)
                    }

                }

            }
        });


        localStorage.setItem('cart', JSON.stringify(cartArr))

        cart = JSON.parse(localStorage.getItem('cart'));

        setTimeout(() => {
            if (cartArr.length > 0) {
                renderCartIcon(cartArr.length, 'flex')
            } else { renderCartIcon('', 'none') }


            setTimeout(() => { cartArr.length = 0 }, 1000)

        }, 1000)





    }

    const flyToCart = () => {

        const product = document.querySelector(`[data-pid="${pid}"]`)
        const productImage = product.querySelector('.item-product__image')

        const productImageFly = productImage.cloneNode(true);

        const productImageFlyWidth = productImage.offsetWidth
        const productImageFlyHeight = productImage.offsetHeight
        const productImageFlyTop = productImage.getBoundingClientRect().top
        const productImageFlyLeft = productImage.getBoundingClientRect().left


        productImageFly.classList.remove('item-product__image')
        productImageFly.classList.add('flyImage')

        productImageFly.style.cssText = `
        left: ${productImageFlyLeft}px;
        top: ${productImageFlyTop}px;
        width: ${productImageFlyWidth}px;
        height: ${productImageFlyHeight}px;
        `

        document.body.append(productImageFly)

        const cartFlyLeft = document.querySelector('.cart__icon').getBoundingClientRect().left
        const cartFlyTop = document.querySelector('.cart__icon').getBoundingClientRect().top

        productImageFly.style.cssText = `
        left: ${cartFlyLeft}px;
        top: ${cartFlyTop}px;
        width: 0px;
        height: 0px;
        opacity: 0;
        `

        setTimeout(() => {
            productImageFly.remove()
        }, 1000)



    }

    const init = () => {

        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'));



            renderCartIcon(cart.length, 'flex')


        } else {
            renderCartIcon('', 'none')
        }
        renderCartBody()



    }


    init()

    window.addEventListener("orientationchange", function () {
        renderCartBody()
    }, false);

    document.addEventListener('click', (e) => {



        if (e.target.classList.contains('actions-product__button') && !e.target.classList.contains('in-cart')) {
            e.preventDefault()

            pid = e.target.closest('.products__item').getAttribute('data-pid')

            addItemToCart()


            e.target.classList.add('in-cart')
            renderProductBtn(e.target, 'In cart')
            flyToCart()
            setTimeout(renderCartBody, 1000)


        } else if (e.target.classList.contains('in-cart')) {
            e.preventDefault()

            pid = e.target.closest('.products__item').getAttribute('data-pid')

            e.target.classList.remove('in-cart')
            renderProductBtn(e.target, 'Add to cart')

            removeItemFromCart(pid)
            renderCartBody()

        }

        if (e.target.closest('.user__cart') && cartList.querySelector('.cart__item')) {

            cartList.classList.add('cart__list-active')
            blockBody()
        }

        if (cartList.classList.contains('cart__list-active') && e.target.classList.contains('list-cart__close')) {

            cartList.classList.remove('cart__list-active')
            unblockBody()
        }

        if (cartList.classList.contains('cart__list-active') && e.target.classList.contains('cart__delete')) {
            renderQuantity(e.target, 'delete')
        }

        if (cartList.classList.contains('cart__list-active') && e.target.classList.contains('quantity-cart__less')) {
            renderQuantity(e.target, 'less')
        }

        if (cartList.classList.contains('cart__list-active') && e.target.classList.contains('quantity-cart__more')) {
            renderQuantity(e.target, 'more')
        }


    })

}