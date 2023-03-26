
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
                <div class="hora_canales">${usuario.horario}</div>
                <div class="juego">
                    <span>${usuario.nombre}</span>
                    <h3>${usuario.titulo}</h3>
                    </div>
                   <div class="hora_canales">`;
                    
                  for (let urls of usuario.canales) {
                    if (urls.id != 0) contador++;
               cad += `<p>${contador} Canales</p>`;
                };
                   
                   cad += `</div>
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
