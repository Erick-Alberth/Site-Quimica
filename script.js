// Adicione um evento de clique ao botão
const btn = document.getElementById("seta")

btn.addEventListener("click", function() {
    // Rola suavemente de volta para o topo da página
    window.scrollTo({ //ir para o top
      top: 0,
      behavior: "smooth"
    });
  });

  document.addEventListener('scroll', ocultar)
  
  // Adicione um evento de rolagem para mostrar/ocultar o botão
 function ocultar() {
    if (window.scrollY > 20) {
      btn.style.display = "flex";
    } else {
      btn.style.display = "none";
    }
  };

ocultar();


