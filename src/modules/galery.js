import { blockBody } from './helpers';
import { unblockBody } from './helpers';

export const galery = () => {
    const galery = document.querySelector('.galery')
    const galeryImages = document.querySelectorAll('.row-furniture__item')
    const furniture = document.querySelector('.furniture')
    const galeryImage = galery.querySelector('.galery__image')

    let coordX = null;


    const showCurrentImage = (elem) => {

        let currentImage = elem.closest('.row-furniture__item').getAttribute('href')
        galeryImage.innerHTML = `<img src="${currentImage}" alt="">`
    }

    const getCurrentImageName = () => {



        let currentImageUrl = galery.querySelector('.galery__image>img').getAttribute('src')

        return currentImageUrl.match(/([^\/]+)(?=\.\w+$)/)[0];
    }

    const getNextImageName = (step) => {

        let num = -2;
        let filename = '';

        galeryImages.forEach((element, index) => {

            let currentfilename = element.href.match(/([^\/]+)(?=\.\w+$)/)[0];

            if (currentfilename === getCurrentImageName()) {

                return num = index;
            }
        })


        galeryImages.forEach((element, index) => {

            if (index === (num + step)) {

                return filename = element.href.match(/([^\/]+)(?=\.\w+$)/)[0];

            }
        })

        if (filename !== '') return filename;

    }

    const showOtherImage = (direction) => {

        if (direction === 'next') {

            if (getNextImageName(1)) {
                galeryImage.classList.add('galery-in-transition')
                setTimeout(() => {
                    galeryImage.innerHTML = `<img src="dist/img/furniture/${getNextImageName(1)}.jpg" alt="">`;

                    setTimeout(() => {
                        galeryImage.classList.remove('galery-in-transition')
                    }, 200)

                }, 200)

            }

        }
        if (direction === 'prev') {
            if (getNextImageName(-1)) {
                galeryImage.classList.add('galery-in-transition')
                setTimeout(() => {
                    galeryImage.innerHTML = `<img src="dist/img/furniture/${getNextImageName(-1)}.jpg" alt="">`;

                    setTimeout(() => {
                        galeryImage.classList.remove('galery-in-transition')
                    }, 200)

                }, 200)

            }
        }
    }

    furniture.addEventListener('click', (e) => {

        if (e.target.closest('.row-furniture__item')) {
            e.preventDefault()

            showCurrentImage(e.target)
            galery.classList.toggle('galery-active')
            blockBody()


        }


    })


    galery.addEventListener('click', (e) => {

        if (e.target.closest('.galery__next')) {
            showOtherImage('next')


        }

        if (e.target.closest('.galery__prev')) {
            showOtherImage('prev')
        }

        if (e.target.closest('.galery__button')) {
            galery.classList.toggle('galery-active')
            unblockBody()
        }



    })

    galeryImage.addEventListener('pointerdown', (e) => {
        coordX = e.clientX;

    }, false)

    galeryImage.addEventListener('pointermove', (e) => {

        if (!coordX) return

        let touchEnd = e.clientX;

        if (touchEnd > coordX) {
            if (getNextImageName(1)) {
                showOtherImage('next')
            }

        } else if (touchEnd < coordX) {
            if (getNextImageName(-1)) {
                showOtherImage('prev')
            }

        }

        coordX = null;

    }, false)
}