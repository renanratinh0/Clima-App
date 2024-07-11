const apikey = "fdb25a0e19dae3dc0a169a5e9a1213c2";
const apicountry = "https://flagcdn.com/32x24/br.png"// error 

const cityInput = document.querySelectorAll("#city-input");
const seachBtn  = document.querySelector("#search");






seachBtn.addEventListener("click", (e) =>{

    e.preventDefault();
    const cityInput = document.querySelectorAll("#city-input");

    const city = cityInput.value;
    console.log(city);
})


