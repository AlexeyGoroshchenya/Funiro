


import { menu } from './modules/menu';
import { spoiler } from './modules/spoiler';
import { swiper } from './modules/swiper';
import { renderSlider } from './modules/renderSlider';
import { renderProducts } from './modules/renderProducts';
import { changeCart } from './modules/changeCart';
import { galery } from './modules/galery';
import { scrollGalery } from './modules/scrollGalery';
import { sendEmailForm } from './modules/sendEmailForm';
import { sendOrderForm } from './modules/sendOrderForm';


menu();
spoiler();
swiper();
renderSlider();
renderProducts();
changeCart();
galery();

scrollGalery();
sendEmailForm(document.querySelector('.footer__form'), document.querySelector('.footer__subscribe'));

sendOrderForm(document.querySelector('.cart__body'))



//валидация и отправка почты
//адаптив

//отправка заказа