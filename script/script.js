const navSlide = () => {
    const burger = document.getElementById("burger");
    const nav = document.getElementById("navbar");
    
    alert(burger);

    burger.addEventListener('click', () =>{
        nav.classList.toggle('navbar-active{');
        alert("asd");
    });
}

const app = () =>{
    navSlide();
}
app()