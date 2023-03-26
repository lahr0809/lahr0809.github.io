const url = 'https://viper.jugacosenamas.store/categorias';
const recibeInfo = () => {
    fetch(url)
        .then(response => response.json())
        .then(datos => {
            let cad = ``;   
            for (let usuario of datos.data) {
                let contador = 0;
                cad += `<div class="accordionItem">
                <div class="accordionTitle" id="${usuario.id}" onClick="myFunction(${usuario.id})">
                <div class="hora_canales"><span>Horario</span><span>${usuario.horario}</span></div>
                <div class="juego">
                    <span>${usuario.nombre}</span>
                    <h3>${usuario.titulo}</h3>
                    </div>
                   <div class="num_canales">`;
                    
                  for (let urls of usuario.canales) {
                    if (urls.id != 0) contador++;
                };
                   cad += `<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z">
                   </path>
               </svg><br>${contador} Canales</div>
                  </div>
                  <div class="accordionContent">
                  <div>`;
                
                  for (let urls of usuario.canales) {
                    const newStr = urls.url_video.slice(7);
              
               contador++;
                    cad += `<button onclick="loadChanel('${newStr}')">${urls.titulo}</button>`;
                };
                  cad +=`</div>
                </div>
              </div>`;
            };
         
            document.getElementById("content-table").innerHTML = cad;
        });
}
const loadChanel = (chanel) => {
    document.getElementById("iframe").src = "https://" + chanel;
}
function boton_full_screen() {
    document.getElementById("boton_full_screen").style =
        "display:none";
    document.getElementById(
        "btn_quitar_full_screen"
    ).style = "display:block";
    document
        .getElementById("iframe")
        .classList.add("full_screen_iframe");
    document.documentElement.requestFullscreen();
}
function btn_quitar_full_screen() {
    document.getElementById("boton_full_screen").style =
        "display:block";
    document.getElementById(
        "btn_quitar_full_screen"
    ).style = "display:none";

    document
        .getElementById("iframe")
        .classList.remove("full_screen_iframe");
    document.exitFullscreen();
}
recibeInfo();
