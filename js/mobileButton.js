$(document).ready(function () {

  // nav
  const btnMobile = $('#btn-mobile')
  const nav = $('#nav')
  const menu = $('#menu')
  const logo = $('#logo')
  const body = $('#body')

  function toggleMenu() {
    $(nav).toggleClass('active')

    const active = $(nav).hasClass('active')
    let msg 

    $(btnMobile).attr('aria-expanded', active);

    if (active) {
      $(body).css('overflow', 'hidden')
      msg = 'Fechar menu'
    } else {
      $(body).css('overflow', 'auto')
      msg = 'Abrir menu'
    }

    $(btnMobile).attr('aria-label', msg)
  }
  
  $(btnMobile).click(toggleMenu)
  $(menu).click(toggleMenu)
  $(logo).click(function () { 
    const active = $(nav).hasClass('active')

    if (active) {
      toggleMenu()
    }
  });
})