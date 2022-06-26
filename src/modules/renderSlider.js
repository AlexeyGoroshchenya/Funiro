import { isMobile } from './helpers';

export const renderSlider = () => {


	if (isMobile.any() && window.screen.width < 992) {

		const displacedButton = document.querySelector('.slider__button').cloneNode(true);

		document.querySelector('.slider__main').append(displacedButton)
		document.querySelector('.slider__button').remove()

	}




}