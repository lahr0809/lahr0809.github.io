
const url = 'https://viper.jugacosenamas.store/categorias';


const recibeInfo = () => {
    fetch(url)
            .then(response => response.json())
            .then(datos => {
                let cad = '<tr><th>Competición</th><th>Encuentro</th><th>Canal</th></tr>';
               
                for (let usuario of datos.data) {
                    cad += `<tr><td>${usuario.nombre}</td>
                                <td>${usuario.titulo}</td><td>`;   
                                                
                                for (let urls of usuario.canales) {
                                    const newStr = urls.url_video.slice(7)
                                    cad +=`<button onclick="loadChanel('${newStr}')">${urls.titulo}</button>`;
                                };
                                

                }
                cad += `</td></tr>`;
                document.getElementById("list").innerHTML = cad;
            });
}
const loadChanel = (chanel)=>{
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