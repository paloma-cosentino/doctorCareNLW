window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
    showNavOnScroll();
    showBackToTopButton()   
    changeBackgroundColorOfButton()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)

}

function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight/2 // O innerHeight verifica a altura da viewport
    
    //verficar se a seção passou da linha
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight

    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    //informaçoes dos dados e da lógica
    //console.log('O topo da seção chegou ou passou da linha alvo?', sectionTopReachOrPassedTargetLine)

    //verificar se a base está abaixo da linha alvo
    const sectionEndsAt = sectionTop + sectionHeight
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    //console.log('O fundo da seção passou da linha?', sectionEndPassedTargetLine)

    // Limites da seção
    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if (sectionBoundaries){
        menuElement.classList.add('active')
    }
}

function showNavOnScroll(){
    if (scrollY > 0) { // scrollY verifica a posição do scroll no eixo Y
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function showBackToTopButton() {
    if (scrollY > 450) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

function changeBackgroundColorOfButton(){
   
   if (scrollY > (document.body.scrollHeight - 792)) {
        backToTopButton.classList.add('bgColor')
    } else {
        backToTopButton.classList.remove('bgColor')
    }
}

function openMenu() {
     document.body.classList.add('menu-expanded')
     
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}




 ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
  }).reveal(`
    #home, 
    #home img, 
    #home .stats, 
    #services,
    #services header,
    #services .card
    #about, 
    #about header, 
    #about .content, footer`)