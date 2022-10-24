const elemento = document.querySelector(".content");
const iniciarBotao = document.getElementById("iniciar");
const backCard = document.getElementsByClassName("back");

let cartasSelecionadas = [];
let val = 0;
let quantidade = 0;
let selected = 0;
let contador = 0;
let sucesso = 0;


const gifs = ["parrotgiff1", "parrotgiff2", "parrotgiff3", "parrotgiff4", "parrotgiff5", "parrotgiff6", "parrotgiff7"];

function iniciar(){
    iniciarBotao.disabled = true;
    while (true){
        quantidade = Number(prompt("Escolha a quantidade de cartas entre 4 e 14 (Apenas numeros Pares!!!!)"));

        if(quantidade < 4 || quantidade > 14){
            alert("Digite um número entre 4 e 14!!!!");
        }
        else if(quantidade % 2 != 0){
            alert("Digite um valor par!");
        }
        else{
            break
        }
    }

    const x = (quantidade/2);
    const newParrots = gifs.slice(0, x).concat(gifs.slice(0.,x));
    const aleatorioGif = newParrots.sort(()=> Math.random() -0.5);

    while(val != quantidade){
        elemento.innerHTML += 
        `
        <div class="card"  onclick="virarCarta(this)">
        <div class="front-face face">
            <img src="./assets/images/${aleatorioGif[val]}.gif">
        </div>
        <div class="back-face face" <div">
            <img src="./assets/images/parrot.png" alt="">
        </div>
        </div>

        `;

        val++;
    }
}

function reiniciar(){
    elemento.innerHTML = "";
    quantidade = 0;
    val = 0;
    sucesso = 0;
    cartasSelecionadas.length = 0;

    iniciarBotao.disabled = false;
}

function virarCarta(carta) {
    carta.classList.toggle('virada');
    contador++;


    if (contador < 2){
        cartasSelecionadas.push(carta);
    }
    if (contador == 2){
        cartasSelecionadas.push(carta);
        contador = 0;

        sucesso += 1;

        cartasSelecionadas[0].removeAttribute("onclick");
        carta.removeAttribute("onclick");
        if(cartasSelecionadas[0].firstElementChild.querySelector("img").getAttribute("src") != carta.firstElementChild.querySelector("img").getAttribute("src")){
            sucesso -= 1;

            setTimeout(desvirar, 2000, cartasSelecionadas[0], carta); 
            cartasSelecionadas[0].setAttribute('onclick','virarCarta(this)');
            cartasSelecionadas[1].setAttribute('onclick','virarCarta(this)');
            
            cartasSelecionadas.length = 0;
        }
        cartasSelecionadas.length = 0;
    }
    vitoria();
}

function desvirar(var1, var2){
  //const cartas = document.querySelectorAll('.virada');
  //for( let i = 0; i < cartas.length; i++){
  //    cartas[i].classList.remove('virada');
  //}
  var1.classList.remove("virada")
  var2.classList.remove("virada")
}

function vitoria() {
    if(sucesso === (quantidade/2)){
        sucesso = 0;
        alert("Parabens, você venceu!")
    }
}
