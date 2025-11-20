/*ALejandra Quiñones */

document.addEventListener('DOMContentLoaded', () => {
    const tableroJuego = document.getElementById("tablero-juego");
    const imagenesMonstrous = [

        "monstruo1.png",
        "monstruo2.png",
        "monstruo3.png",
        "monstruo4.png",
        "monstruo5.png",
        "monstruo6.png",

    ];
    console.log("Arreglo Original: ", imagenesMonstrous);
    let cartasArray = [...imagenesMonstrous, ...imagenesMonstrous];
    console.log("Sin barajar", cartasArray);
    cartasArray.sort(() => 0.5 - Math.random());
    console.log("Barajadas", cartasArray);

    let cartasVolteadas = [];
    let idsCartasVolteadas = [];
    let paresEncontrados = 0;

    function crearTablero() {
        for (let i = 0; i < cartasArray.length; i++) {
            const carta = document.createElement('div');
            carta.classList.add('carta');
            carta.setAttribute("data-id", i);
            let cartasVolteadas = [];

            const caraFrontal = document.createElement("div");
            caraFrontal.classList.add('Cara', 'Frontal');
            const imgFrontal = document.createElement('img');
            imgFrontal.setAttribute('src', 'img/cover.png');
            caraFrontal.appendChild(imgFrontal);


            const caraTrasera = document.createElement('div');
            caraTrasera.classList('cara', 'trasera');
            const imgTrasera = document.createElement('img');
            imgTrasera.setAttribute('src', 'img/' + cartasArray[i]);
            caraTrasera.appendChild(imgTrasera);



            carta.appendChild(caraFrontal);
            carta.appendChild(caraTrasera);

            tableroJuego.appendChild(carta);
            carta.addEventListener('click', voltearCarta);



        }
    }
    function voltearCarta() {
        //console.log("Si se hizo click");
        const idCarta = this.getAttribute('data-id');
        console.log(idCarta);

        if (idsCartasVolteadas.includes(idCarta)) return;

        if (cartasVolteadas.length < 2) {
            this.classList.add('volteada');

            cartasVolteadas.push(cartasArray[idCarta]);
            idsCartasVolteadas.push(idCarta);

            if (cartasVolteadas.length == 2) {
                //Comprobar parejas;
                function comprobarParejas() {
                    const todasLasCartas = document.querySelectorAll('.carta');
                    const idPrimeraCarta = idsCartasVolteadas[0];
                    const idSegundaCarta = idsCartasVolteadas[1];
                }
                if (cartasVolteadas[0] == cartasVolteadas[1]
                    &&
                    idPrimeraCarta !== idSegundaCarta
                ) {
                    //Encontramos una pareja
                    todasLasCartas[idPrimeraCarta.classList.add('acertada')];
                    todasLasCartas[idSegundaCarta.classList.add('acertada')];
                    ;
                    todasLasCartas[idPrimeraCarta].removeEventListener('click', voltearCarta);
                    todasLasCartas[idPrimeraCarta].removeEventListener('click', voltearCarta);

                    paresEncontrados++;
                } else {
                    todasLasCartas[idPrimeraCarta].classList.remove('volteada');
                    todasLasCartas[idSegundaCarta].classList.remove('volteada');
                }
            }
        }
        cartasVolteadas = [];
        idsCartasVolteadas = [];

        if (paresEncontrados == imagenesMonstrous.length) {
            alert('Felicitaciones... Has encontrado todos los monstrous')
        }
    }
    crearTablero();
});
