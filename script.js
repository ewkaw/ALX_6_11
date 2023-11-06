const loginForm = document.getElementById("login-form")

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();//powstrzymaj domyslne dzialanie przegladarki
    //login i password nie wysiwelti sie w przegladarce w wyszukiwarce

    const data = new FormData(e.target);
    console.log(data.get("login"));
   
    alert(`Login: ${data.get('login')} i Hasło ${data.get('password')}`);
    //prompt()
    //confirm();
   
    console.log("zatwierdzony formularz");
});

document.getElementById('btn').addEventListener('click', e => {
    console.log('KLIK');
    //current target => rodzic, element ktory ma przypisana funkcje 
   //target => element ktory zostal faktycznie klikniety
}); 