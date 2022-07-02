export const menu = () => {

    const header = document.querySelector('.header');
    const menu = document.querySelector('.menu__list');


    const toggleUserMenu = () => {
        document.querySelector('.user__list').classList.toggle('user__list-active')

    }

    const moveUserMenu = () => {
        if (window.screen.width < 768) {

            const searchMenuMobile = header.querySelector('.header__search').cloneNode(true);

            document.querySelector('.menu__list').prepend(searchMenuMobile)
            header.querySelectorAll('.header__search')[1].remove()
        } else if ((window.screen.width >= 768)) {
            const searchMenu = header.querySelector('.header__search').cloneNode(true);

            document.querySelector('.header__menu').after(searchMenu)
            header.querySelectorAll('.header__search')[0].remove()
        }
    }




    const openSubMenu = (target) => {

        target.classList.add('menu__item-active')
    }

    const closeSubMenu = (target) => {

        target.classList.remove('menu__item-active')
    }

    const toggleMenu = () => {

        document.querySelector('.menu__list').classList.toggle('menu__list-active');
        document.querySelector('.header__button').classList.toggle('header__button-active');
    }

    document.body.addEventListener('click', (e) => {

        let openeSubMenu = header.querySelector('.menu__item-active')

        if (!openeSubMenu) {
            if (e.target.closest('.menu__item-list')) {

                e.preventDefault();
                openSubMenu(e.target.closest('.menu__item-list'));

            }

        } else if (openeSubMenu && e.target.closest('.menu__item-list')) {
            e.preventDefault();
            if (e.target.closest('.menu__item-list') !== openeSubMenu.closest('.menu__item-list')) {

                closeSubMenu(openeSubMenu);
                openSubMenu(e.target.closest('.menu__item-list'));
            } else {

                closeSubMenu(openeSubMenu);//проверить закрытие субменю на мобильной версии
            }

        } else if (openeSubMenu && !e.target.closest('.menu__sublist')) {

            closeSubMenu(openeSubMenu);
        }

        if (!document.querySelector('.search-form-item-active') && e.target.closest('.search-icon')) {
            document.querySelector('.search-form-item').classList.add('search-form-item-active');

            if (header.querySelector('.menu__list-active')) {
                toggleMenu();

            }
        } else if (document.querySelector('.search-form-item-active') && !e.target.closest('.search-form-item')) {
            document.querySelector('.search-form-item').classList.remove('search-form-item-active')
        }



        if (header.querySelector('.menu__list-active')) {
            if (!e.target.closest('.menu__list') || e.target.closest('.header__button') || e.target.matches('.menu__item>a')) {
                toggleMenu()
            }

        } else {
            if (e.target.closest('.header__button')) {
                toggleMenu()
            }
        }



        if (header.querySelector('.user__list-active')) {
            if (!e.target.closest('.user__list')) {
                toggleUserMenu()
            }
        } else {
            if (e.target.closest('.user__icon')) {
                toggleUserMenu()
            }
        }






    })

    window.addEventListener("orientationchange", function () {
        moveUserMenu()
    }, false);

    moveUserMenu()



}