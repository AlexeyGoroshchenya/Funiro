import { isMobile } from './helpers';

export const scrollGalery = () => {

    const furniture = document.querySelector('.furniture__body')

    if (furniture && !isMobile.any()) {
        const furnitureItems = document.querySelector('.furniture__items')
        const furnitureColumns = document.querySelectorAll('.furniture__column')

        const speed = 0.01;

        let positionX = 0;
        let coordXPercent = 0;

        const setMouseGaleryStyle = () => {

            let furnitureItemsWidth = 0;

            furnitureColumns.forEach(item => {
                furnitureItemsWidth += item.offsetWidth;
            })

            const furnitureDifferent = furnitureItemsWidth - furniture.offsetWidth;
            const distX = Math.floor(coordXPercent - positionX);

            positionX = positionX + (distX * speed);
            let position = furnitureDifferent / 200 * positionX;

            furnitureItems.style.cssText = `transform: translate3d(${-position}px, 0, 0);`

            if (Math.abs(distX) > 0) {
                requestAnimationFrame(setMouseGaleryStyle)
            } else {
                furniture.classList.remove('_init')
            }

        }

        furniture.addEventListener('mousemove', (e) => {

            const furnitureWidth = furniture.offsetWidth;

            const coordX = e.pageX - furnitureWidth / 2;

            coordXPercent = coordX / furnitureWidth * 200;

            if (!furniture.classList.contains('_init')) {
                requestAnimationFrame(setMouseGaleryStyle)
                furniture.classList.add('_init')
            }

        })

    }


}