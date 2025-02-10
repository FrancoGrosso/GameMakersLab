  const images = [
    { src: "_f16fcd7b-1b00-49e3-85e1-54dd055fb579.jfif", text: "Fantasía y Aventura" },
    { src: "_69710de5-2477-48f7-883d-5f80c2f3db85.png", text: "Mundo Abierto Estilizado" },
    { src: "_84553d43-3dd4-414e-adf3-2aafe07b08ae.jfif", text: "Juego de Disparos Realista" },
    { src: "_0a575da7-5e77-459a-b4c4-0761a6bface2.jfif", text: "Exploración en Tercera Persona" }
    ];

  let index = 0;
  const imgElement = document.getElementById("changingImage");
  const textElement = document.getElementById("changingText");

  function changeImageAndText() {
    // Actualizamos el índice
    index = (index + 1) % images.length;
    
    // Para que la animación se vuelva a reproducir, removemos cualquier animación previa
    imgElement.style.animation = 'none';
    textElement.style.animation = 'none';
    
    // Opcional: Ocultamos los elementos brevemente para que el cambio se note
    imgElement.style.opacity = 0;
    textElement.style.opacity = 0;
    
    // Cambiamos la imagen y el texto después de 500ms
    setTimeout(() => {
      imgElement.src = images[index].src;
      textElement.textContent = images[index].text;
      
      // Aplicamos las animaciones: imagen de arriba a abajo y texto de abajo a arriba
      imgElement.style.animation = 'fadeInDown 0.4s ease-in-out';
      textElement.style.animation = 'fadeInUp 0.4s ease-in-out';
      
      // Aseguramos que la opacidad vuelva a 1
      imgElement.style.opacity = 1;
      textElement.style.opacity = 1;
    }, 100);
  }

  // Cambiamos cada 3 segundos
  setInterval(changeImageAndText, 3500);


//_____________________________________________________________________________________//
//_____________________________________________________________________________________//
//_____________________________________________________________________________________//

let menu3Lines = document.querySelectorAll('line');
let menuActive = false;
let menu = document.querySelector('menu');

function toggleMenu() {
     //Change to a cross and center them changing the css attributes
      if (!menuActive) {
            menu3Lines[0].style.transform = 'translateY(16px) rotate(45deg)';
     
            menu3Lines[1].style.opacity = '0';
            menu3Lines[2].style.transform = 'translateY(-10px) rotate(-45deg)';
            menuActive = true;
      } else {
            menu3Lines[0].style.transform = 'rotate(0deg)';
          
            menu3Lines[1].style.opacity = '1';
            menu3Lines[2].style.transform = 'rotate(0deg)';
         
            menuActive = false;
      }
      //translate the menu to 0 and -110% in Y to show and hide it
      menu.style.transform = menuActive ? 'translateY(0)' : 'translateY(-110%)';
}
