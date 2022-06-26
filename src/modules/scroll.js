import { animate } from "./helpers";

export const scroll = () => {

    const btnScrollUp = document.querySelector('.arrow')
    const borderBtnLine = (document.querySelector('.popular').offsetTop);

    const moveBtn = (str) => {
        if (str === 'hide') {
            btnScrollUp.classList.remove('arrow-active');
        } else if (str === 'show') {
            btnScrollUp.classList.add('arrow-active');
        }
    }

    const goTo = (target) => {

        const linkTargetName = target.getAttribute('href').replace('#', '')
        const linkTarget = document.getElementById(linkTargetName)


        if (linkTarget) {
            animate({
                duration: 300,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {

                    let count = target.offsetTop - (target.offsetTop - linkTarget.offsetTop) * progress

                    window.scrollTo({
                        top: count,
                    })
                }
            });
        }

    }

    document.body.addEventListener('click', (e) => {


        if (e.target.closest('.arrow')) {
            e.preventDefault()
            goTo(btnScrollUp, 'top')
        }

        if (e.target.classList.contains('menu-header__link') || e.target.classList.contains('footer__link') || e.target.classList.contains('goto-link')) {

            e.preventDefault()
            goTo(e.target)
        }



    })

    window.addEventListener('scroll', function () {

        if (scrollY >= borderBtnLine) {
            moveBtn('show')
        } else {
            moveBtn('hide')
        }
    });
}