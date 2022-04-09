
{

  // header固定配置
  const header =document.getElementById('headerInner');

  function onscrollCallback(entries) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        header.classList.add('scrolled');
      }else{
        header.classList.remove('scrolled');
      }
    });
  }

  const onScrollObserver = new IntersectionObserver(onscrollCallback);
  onScrollObserver.observe(document.getElementById('target'));

  // ハンバーガーメニュー
  const ham = $('#js-hamburger');
  const nav = $('#js-nav');
  ham.on('click', function () { 
    ham.toggleClass('active'); 
    nav.toggleClass('active');
  });


  // topへスクロール
  const top =document.getElementById('top');

  function topscrollCallback(entries) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        top.classList.add('scrolled');
      }else{
        top.classList.remove('scrolled');
      }
    });
  }

  const topScrollObserver = new IntersectionObserver(topscrollCallback);
  topScrollObserver.observe(document.getElementById('sc_target'));

  top.addEventListener('click', e => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  const swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    effect: 'fade',
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    loop: true,
    watchSlidesProgress: true,
  });

  // function topscrollCallback(entries) {
  //   entries.forEach(entry => {
  //     if(!entry.isIntersecting) {
  //       top.classList.add('top_scrolled');
  //     }else{
  //       top.classList.remove('top_scrolled');
  //     }
  //   });
  // }

  // const topScrollObserver = new IntersectionObserver(topscrollCallback);
  // topScrollObserver.observe(document.getElementById('sc_target'));
}
