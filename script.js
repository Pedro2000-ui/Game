
const jogador1 = 'X';
const jogador2 = 'O';

let vezDoJogador = jogador1;
let fimDoJogo = false;

let pontoJg1 = 0;
let pontoJg2 = 0;
let jogadaJogador1 = 0;
let jogadaJogador2 = 0;

pontuacaoJg1 = document.getElementById('pontoJg1');
pontuacaoJg2 = document.getElementById('pontoJg2');
movimentoJg1 = document.getElementById('movimentoJg1');
movimentoJg2 = document.getElementById('movimentoJg2');


atualizarMeuMostrador();
verificarInicializarosEspacos();



function atualizarMeuMostrador() 
{
  if (vezDoJogador == jogador1)
  {
    let jogador = document.querySelector("div#mostrador img");
    jogador.setAttribute("src", "imagens/x.png");
  }

  else
  {
    let jogador = document.querySelector("div#mostrador img");
    jogador.setAttribute("src", "imagens/o.png");
  }
}


function verificarInicializarosEspacos()
{
  let espacos = document.getElementsByClassName("casa");
  for (let i =0; i < espacos.length; i++)
  {
    espacos[i].addEventListener("click", function(){
    
      if (fimDoJogo == true)
      {
        return;
      }

      else
      {
        if (espacos[i].getElementsByTagName('img').length == 0)
        {
          if (vezDoJogador == jogador1)
          {
            espacos[i].innerHTML = "<img class='imagem' src= 'imagens/x.png'>";
            espacos[i].setAttribute("jogada", jogador1);
            jogadaJogador1++;
            movimentoJg1.value = jogadaJogador1;
            vezDoJogador = jogador2;
          }

          else 
          {
            espacos[i].innerHTML = "<img class='imagem' src= 'imagens/o.png'>";
            espacos[i].setAttribute("jogada", jogador2);
            jogadaJogador2++;
            movimentoJg2.value = jogadaJogador2;
            vezDoJogador = jogador1;
          }
          atualizarMeuMostrador();
          verificaVencedorOuVelha();
        }
      }
    });
  }
}

function verificaVencedorOuVelha()
{
  let vencedor = '';

  let a1 = document.getElementById("a1").getAttribute("jogada");
  let a2 = document.getElementById("a2").getAttribute("jogada");
  let a3 = document.getElementById("a3").getAttribute("jogada");

  let b1 = document.getElementById("b1").getAttribute("jogada");
  let b2 = document.getElementById("b2").getAttribute("jogada");
  let b3 = document.getElementById("b3").getAttribute("jogada");

  let c1 = document.getElementById("c1").getAttribute("jogada");
  let c2 = document.getElementById("c2").getAttribute("jogada");
  let c3 = document.getElementById("c3").getAttribute("jogada");

  if(((a1==b1 && a1==c1) || (a1==a2 && a1==a3) || (a1==b2 && a1==c3)) && a1 !='')
  {
    vencedor = a1;
  }

  else
  { 
    if(((b2==b1 && b2==b3) || (b2==a2 && b2==c2) || (b2==a3 && b2==c1)) && b2 !='')
    {
      vencedor = b2;
    }

    else
    { 
      if(((c3==c2 && c3==c1) || (c3==a3 && c3==b3)) && c3 !='')
      {
        vencedor = c3;
      }
    }
  }
  
  if (vencedor != '')
  {
    fimDoJogo = true;
    alert("O ganhador foi o jogador: " + vencedor + " Clique no botão para reiniciar");

    if(vencedor == 'X')
    {
      pontoJg1++;
      pontuacaoJg1.value = pontoJg1;
    }

    else
    {
      pontoJg2++;
      pontuacaoJg2.value = pontoJg2;
    }
  }

  else
  {
    if(a1!='' && a2!='' && a3!=''&& b1!='' && b2!='' && b3!='' && c1!='' && c2!='' && c3!='')
    {
      alert("Deu velha, clique no botão para reiniciar");
      fimDoJogo = true;
    }
  }
}

function reinicio()
{
  fimDoJogo = false;
  jogadaJogador1 = 0;
  jogadaJogador2 = 0;
  movimentoJg1.value = jogadaJogador1;
  movimentoJg2.value = jogadaJogador2;
  
  let img = document.getElementsByClassName("imagem");
  let espacos = document.getElementsByClassName("casa");
  
  for (let i =0; i < espacos.length; i++)
  {
    for (let j =0; j < img.length; j++)
    {
      img[j].parentNode.removeChild(img[j]);
    }
    espacos[i].setAttribute("jogada", "");
  }
}



