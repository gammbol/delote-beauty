  const burger = () => {
    const button = $('.header__right_menu');
    const body = button.find('.header__right_menu__content')

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    })

    const toggleMenu = () => {
        body.toggleClass('active');

        if (body.hasClass('active')) {
            $(body).css('display', 'none');
        } else {
            $(body).css('display', 'block');
        }
    }
  }

  burger();