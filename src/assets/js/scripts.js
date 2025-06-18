    $(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('active');    
    })
    
    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
    const header = $('header');
    const headerHeight = header.outerHeight();
    const scrollPosition = $(window).scrollTop() + headerHeight;  // <<== Atenção: aqui somando


    let activeSectionIndex = 0;

    sections.each(function(i) {
        const section = $(this);
        const sectionTop = section.offset().top;
        const sectionBottom = sectionTop + section.outerHeight();


        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            activeSectionIndex = i;
            return false;
        }

        // Ativa última seção se passar do topo dela
        if (i === sections.length - 1 && scrollPosition >= sectionTop) {
            activeSectionIndex = i;
            return false;
        }
    });

    navItems.removeClass('active');
    $(navItems[activeSectionIndex]).addClass('active');
});

    $('.nav-item a').on('click', function(e) {
    e.preventDefault();

    const targetId = $(this).attr('href');
    const targetSection = $(targetId);

    if(targetSection.length) {
        const headerHeight = $('header').outerHeight();
        const targetPosition = targetSection.offset().top - headerHeight;

        $('html, body').animate({
            scrollTop: targetPosition
        }, 200);
    }
});

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.livro', {
        origin: 'left',
        duration: 2000,
        distance: '10%'
    });

    ScrollReveal().reveal('#compilado_livros', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    });
    
    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 2000,
        distance: '20%'
    });
});