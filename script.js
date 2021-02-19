const toggl = function() {
    const navbar = document.querySelector('.navigation__toggl--js');
    navbar.classList.toggle('hide');
    const topmargin = document.querySelector('.body').classList.toggle('topmargin')
}
const button = document.querySelector('.navigation__button--js');
button.addEventListener("click", toggl);



    
    /*addEventListener('click', console.log('click'));

console.log(button)*/