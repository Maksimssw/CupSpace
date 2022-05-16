function hamburger(){
    // Клонирование меню
    const menu = document.querySelector('.menu__nav').cloneNode(1);

    const subheaderNav = document.querySelector('.subheader nav'),
          subheader = document.querySelector('.subheader'),
          hamburger = document.querySelector('.hamburger');
    
    subheaderNav.appendChild(menu);

    // При вызове (открыть меню или закрыть меню)
    function interactionTheMenu(){
        hamburger.classList.toggle('active');
        subheader.classList.toggle('active');
    }

    hamburger.addEventListener('click', interactionTheMenu);
};  

export default hamburger;