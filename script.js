function toggleTheme() {
  const body = document.body;
  const current = body.classList.contains("dark") ? "dark" : "light";
  const next = current === "dark" ? "light" : "dark";
  body.classList.remove(current);
  body.classList.add(next);
  localStorage.setItem("theme", next);
}

const somClique = new Audio("audio/click.mp3");
const somFechar = new Audio("audio/fechar.mp3");

document.querySelectorAll(".icon-item").forEach(botao => {
  botao.addEventListener("click", () => {
    somClique.play();
    const id = botao.getAttribute("data-section");
    const janela = document.getElementById(id);
    if (janela) {
      janela.style.display = "block";
      janela.style.top = "50%";
      janela.style.left = "50%";
      janela.style.transform = "translate(-50%, -50%)";
    }
  });
});

document.getElementById("botao-tema").addEventListener("click", () => {
  somClique.play();
});

document.querySelectorAll(".fechar").forEach(botao => {
  botao.addEventListener("click", (e) => {
    e.stopPropagation();
    const janela = botao.closest(".janela");
    janela.style.display = "none";
    somFechar.play();
  });
});

document.querySelectorAll(".janela").forEach(janela => {
  const topo = janela.querySelector(".topo-janela");
  let offsetX = 0, offsetY = 0, arrastando = false;

  topo.addEventListener("mousedown", (e) => {
    if (e.target.closest(".fechar")) return;
    arrastando = true;
    offsetX = e.clientX - janela.offsetLeft;
    offsetY = e.clientY - janela.offsetTop;
    document.body.classList.add("arrastando");
    topo.style.cursor = "grabbing";
    janela.style.transform = "none";
  });

  document.addEventListener("mousemove", (e) => {
    if (arrastando) {
      janela.style.left = e.clientX - offsetX + "px";
      janela.style.top = e.clientY - offsetY + "px";
    }
  });

  document.addEventListener("mouseup", () => {
    arrastando = false;
    document.body.classList.remove("arrastando");
    topo.style.cursor = "grab";
  });
});


document.querySelectorAll(".accordion-custom .cabecalho-pergunta").forEach(pergunta => {
  const seta = pergunta.querySelector(".seta");
  pergunta.addEventListener("click", () => {
    const resposta = pergunta.nextElementSibling;
    resposta.classList.toggle("oculto");
    seta.classList.toggle("ativa");
  });
});


const somHover = new Audio("audio/peca3.mp3");
somHover.volume = 0.2
document.querySelectorAll(".item-habilidade").forEach(caixinha => {
  caixinha.addEventListener("mouseenter", () => {
    somHover.currentTime = 0; 
    somHover.play();
  });
});

const somAbrir = new Audio("audio/paper2.mp3");
const somFechar2 = new Audio("audio/paper2.mp3");

somAbrir.volume = 0.3;
somFechar2.volume = 0.3;

const accordionContato = document.getElementById("contatoAccordion");

accordionContato.addEventListener("toggle", () => {
  if (accordionContato.open) {
    somAbrir.currentTime = 0;
    somAbrir.play();
  } else {
    somFechar2.currentTime = 0;
    somFechar2.play();
  }
});


document.querySelectorAll(".icon-item").forEach(botao => {
  botao.addEventListener("click", () => {
    const id = botao.getAttribute("data-section");
    const janela = document.getElementById(id);
    if (janela) {
      janela.classList.remove("mostrar"); 
      janela.style.display = "block";

      void janela.offsetWidth;

      janela.classList.add("mostrar");
    }
  });
});

