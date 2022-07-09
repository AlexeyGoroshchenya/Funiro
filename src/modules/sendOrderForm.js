import { changeCart } from './changeCart';
import { renderProducts } from './renderProducts';
import { unblockBody } from './helpers';
import { getData } from './getData';

export const sendOrderForm = (form) => {



    let cart = [];

    const cartList = document.querySelector('.cart__list')

    const errorText = 'Something went wrong...';
    const successText = 'The order is issued successfully. Our manager will contact you.';
    const notValidText = 'Please check the entered data';
    const loadText = 'The order is sent...'

    const statusBlock = document.createElement('div')


    const showSubmitStatus = (str) => {

        document.body.append(statusBlock)
        statusBlock.classList.add('submit__message')


        statusBlock.textContent = str


    }

    const sendToTelegram = (message) => {
        const token = '5441053399:AAHmtB5dRwz1LnS692orcmhVk3U06vzRUkA'
        const URI_API = `https://api.telegram.org/bot${token}/sendMessage`



        axios.post(URI_API, {
            chat_id: '-677057242',
            parse_mode: 'html',
            text: message
        })
            .then((res) => {
                showSubmitStatus(successText)

                localStorage.removeItem('cart')
                cart.length = 0

                form.querySelectorAll('input').forEach(item => { item.value = '' })

                cartList.classList.remove('cart__list-active')
                unblockBody()




                setTimeout(() => {
                    document.querySelector('.cart__list').innerHTML = ''
                    //changeCart()

                    document.querySelector('.cart>span').textContent = ''
                    document.querySelector('.cart>span').style.display = 'none'

                    setTimeout(() => {
                        document.querySelectorAll('.in-cart').forEach(item => {
                            item.classList.remove('in-cart')
                            item.textContent = 'Add to cart'
                        })
                        //  renderProducts()
                    }, 1000)

                }, 2000)



            })
            .catch((err) => {
                console.log(err);
                showSubmitStatus(errorText)
            })
    }

    const submitData = () => {

        let totalPrice = 0

        let name = form.querySelector('.list-cart__name').value
        let phone = form.querySelector('.list-cart__phone').value


        let message = `<b> Заявка с сайта Funiro </b>\n`;
        message += `
        <b>Имя: ${name}  </b>\n
        <b>Телефон: ${phone}  </b>\n
        <b>Заказ:</b>\n
        `;

        cart.forEach((item, index) => {

            totalPrice += (+item.quantity) * (parseInt(item.item.price.replace(/[\s.,%]/g, '')))

            message += `
                        <b>Лот ${index + 1}. Товар: ${item.item.title}. Количество: ${item.quantity}.</b>\n 
                       <b>Стоимость: ${item.item.price}</b>\n
                        `

        });

        message += `<b>Общая сумма заказа: ${totalPrice} </b>`



        showSubmitStatus(loadText)



        sendToTelegram(message)

    }



    try {
        if (!form) {
            throw new Error('верните форму')
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            cart = JSON.parse(localStorage.getItem('cart'))

            submitData()
        })

        document.addEventListener('click', (e) => {
            if (statusBlock && statusBlock.classList.contains('submit__message') && !e.target.closest('.submit__message')) {
                statusBlock.remove()

            }
        })

    } catch (error) {
        console.log(error.message);
    }






}