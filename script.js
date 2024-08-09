//SLIDER AUTOMATICO
document.addEventListener("DOMContentLoaded", function() {
    const radios = document.querySelectorAll('input[name="slide"]');
    let intervalo;
    const tempoTroca = 10000; 

    function iniciarTrocaAutomatica() {
        intervalo = setInterval(trocarSlide, tempoTroca);
    }
    function pararTrocaAutomatica() {
        clearInterval(intervalo);
    }

    function trocarSlide() {
        const indiceAtual = Array.from(radios).findIndex(radio => radio.checked);

        if (indiceAtual === -1) return;

        radios[indiceAtual].checked = false;
        const proximoIndice = (indiceAtual + 1) % radios.length;
        radios[proximoIndice].checked = true;
    }

    //REINICIA O TEMPO DE TROCA QUANDO MUDO O SLIDE MANUALMENTE
    function reiniciarTrocaAutomatica() {
        pararTrocaAutomatica();
        iniciarTrocaAutomatica();
    }

    radios.forEach(radio => {
        radio.addEventListener('change', reiniciarTrocaAutomatica);
    });
    
    //INICIA O SLIDER
    iniciarTrocaAutomatica();
});

