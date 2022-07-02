export const galery = () => {
    const galery = document.querySelector('.galery')
    const galeryImages = document.querySelectorAll('.row-furniture__item')
    const furniture = document.querySelector('.furniture')

    let coordX = null;


    const showCurrentImage = (elem) => {

        let currentImage = elem.closest('.row-furniture__item').getAttribute('href')
        galery.querySelector('.galery__image').innerHTML = `<img src="${currentImage}" alt="">`
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

    const showOtherImage = (direction, elem) => {

        if (direction === 'next') {

            // getNextImageName()

            if (getNextImageName(1)) {
                galery.querySelector('.galery__image').innerHTML = `<img src="dist/img/furniture/${getNextImageName(1)}.jpg" alt="">`
            }

        }
        if (direction === 'prev') {
            if (getNextImageName(-1)) {
                galery.querySelector('.galery__image').innerHTML = `<img src="dist/img/furniture/${getNextImageName(-1)}.jpg" alt="">`
            }
        }
    }

    furniture.addEventListener('click', (e) => {

        if (e.target.closest('.row-furniture__item')) {
            e.preventDefault()

            showCurrentImage(e.target)
            galery.classList.toggle('galery-active')


        }


    })


    galery.addEventListener('click', (e) => {

        if (e.target.closest('.galery__next')) {
            showOtherImage('next', e.target)


        }

        if (e.target.closest('.galery__prev')) {
            showOtherImage('prev', e.target)
        }

        if (e.target.closest('.galery__button')) {
            galery.classList.toggle('galery-active')
        }



    })

    galery.querySelector('.galery__image').addEventListener('pointerdown', (e) => {
        coordX = e.clientX;

    }, false)

    galery.querySelector('.galery__image').addEventListener('pointermove', (e) => {

        if (!coordX) return

        let touchEnd = e.clientX;

        if (touchEnd > coordX) {
            if (getNextImageName(1)) {
                galery.querySelector('.galery__image').innerHTML = `<img src="dist/img/furniture/${getNextImageName(1)}.jpg" alt="">`
            }

        } else if (touchEnd < coordX) {
            if (getNextImageName(-1)) {
                galery.querySelector('.galery__image').innerHTML = `<img src="dist/img/furniture/${getNextImageName(-1)}.jpg" alt="">`
            }

        }

        coordX = null;

    }, false)
}