const rating = localStorage.getItem('rating');
console.log(rating);

window.addEventListener('load',(e)=>{
    if(document.querySelector(".rating-div")){
        document.querySelector(".rating-div").innerText = `You selected ${rating} out of 5`;
    }
})