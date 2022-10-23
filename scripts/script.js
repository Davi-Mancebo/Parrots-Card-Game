const elemento = document.querySelector("ul");
const iniciarBotao = document.getElementById("iniciar");

let val = 0;
let quantidade = 0;

let gifs = []

function iniciar(){
    iniciarBotao.disabled = true;
    while (true){
        quantidade = Number(prompt("Escolha a quantidade de cartas entre 4 e 14 (Apenas numeros Pares!!!!)"))

        if(quantidade < 4 || quantidade > 14){
            alert("Digite um número entre 4 e 14!!!!")
        }
        else if(quantidade % 2 != 0){
            alert("Digite um valor par!")
        }
        else{
            break
        }
    }

    while(val != quantidade){
        elemento.innerHTML += 
        `
        <li>
            <div class="card front" <div onclick="rotate(this)">
                <img src="./assets/images/parrot.png" alt="">
            </div>
            <div class="card back" <div onclick="rotate(this)">
                <img src="./assets/images/parrot.png" alt="">
            </div>
        </li>
        `;
        val++;
    }
}

function reiniciar(){
    elemento.innerHTML = "";
    quantidade = 0;
    val = 0;

    iniciarBotao.disabled = false;
}

function rotate(card) {
    card.classList.toggle("rotate");
}