const init = async () => {
    try {
        // llamar a la API
        const response = await fetch("https://rickandmortyapi.com/api/character/?page=20")

        // console.log(response)
        // Transformar la info a JSON
        const data = await response.json()
        console.log(data.results)

        const charContainerElement = document.getElementById("char-container")

        // iteramos
        data.results.forEach( (element) => {
            charContainerElement.innerHTML += `
            <div class="char-card">
                <img class="char-image" src="${element.image}" alt="character">
                <div class="char-info-container">
                    <div class="char-info">
                        <p class="text-white">${element.name}</p>
                        <p class="text-white">${element.species} - ${element.status}</p>
                    </div>
                    <div class="char-info">
                        <p class="text-gray">Last known location:</p>
                        <p class="text-white">${element.location.name}</p>
                    </div>
                    <div class="char-info">
                        <p class="text-gray">First seen in:</p>
                        <p class="text-white">${element.origin.name}</p>
                    </div>
                </div>
            </div>
            `
        })

        console.log("init");
    } catch (error) {
        console.error(error)
    }
}
const btnSearch = document.getElementById("search")
btnSearch.addEventListener("click",()=>{
    console.log("buscando")
    const input = document.getElementById("input-search")
    if(input.value !== ""){
        
    }else{
        alert("Debe ingresar paramentros a buscar")
    }

})


init()