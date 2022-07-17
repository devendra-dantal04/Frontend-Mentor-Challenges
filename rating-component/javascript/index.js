const ratingDiv = document.querySelector('.rating-div');
var getRating = 0;

if(document.querySelector('.rating-component')){
    const rating = document.querySelector('.rating-component');
    const rating_btn = document.querySelectorAll('.rating-selector');
    const btn = document.querySelector('.btn');

    rating.addEventListener('click', (e) => {
        const rating_btn_clicked = e.target;
        localStorage.removeItem('rating');
    
        rating_btn.forEach((btn) => {
            btn.classList.remove('clicked');
        })
    
        rating_btn_clicked.classList.add('clicked');
    
        getRating = rating_btn_clicked.dataset.num;
        localStorage.setItem('rating', getRating);
    })
    
    btn.addEventListener('click',(e)=>{
        window.location.href = './submit.html';
    })
}


