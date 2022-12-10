const burgerTab = document.getElementById('burger');
const menuTab = document.getElementById('menu');


burgerTab.addEventListener('click', () => {
    if(menuTab.classList.contains('hidden')) {
        menuTab.classList.remove('hidden');
    }else {
        menuTab.classList.add('hidden');
    }
})