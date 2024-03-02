document.getElementById('soma').addEventListener('click', somarhora);
document.getElementById('subtrair').addEventListener('click',subtrairhoras);
document.getElementById('comparar').addEventListener('click',compararhora);


    
    function somarhora(){
        try {
            const h1 = new HoraCompleta();
            const h2 = new HoraCompleta();
            // h1 - definição de valores
            h1.definirHora(parseInt(document.getElementById('hora1').value));
            h1.definirMinutos(parseInt(document.getElementById('minutos1').value));
            h1.definirSegundos(parseInt(document.getElementById('segundos1').value));
            // h2  - definição de valores
            h2.definirHora(parseInt(document.getElementById('hora2').value));
            h2.definirMinutos(parseInt(document.getElementById('minutos2').value));
            h2.definirSegundos(parseInt(document.getElementById('segundos2').value));

            //chamada funçao somarHora, onde H1 chama a funçao e passa como parametro h2
            const res = h1.somarHora(h2);
            mostrarHora(res);   
    
        } catch (error) {
            alert('Erro: ' + error.message);
        }
    }
    
   



function mostrarHora(retorno){
    res = document.getElementById('res')
    res.innerHTML += retorno + '<BR>';   
}

function subtrairhoras(){
    try {
            const h1 = new HoraCompleta();
            const h2 = new HoraCompleta();

            // h1 - definição de valores
            h1.definirHora(parseInt(document.getElementById('hora1').value));
            h1.definirMinutos(parseInt(document.getElementById('minutos1').value));
            h1.definirSegundos(parseInt(document.getElementById('segundos1').value));

            // h2  - definição de valores
            h2.definirHora(parseInt(document.getElementById('hora2').value));
            h2.definirMinutos(parseInt(document.getElementById('minutos2').value));
            h2.definirSegundos(parseInt(document.getElementById('segundos2').value));


            //chamada funçao subtrair, onde H1 chama a funçao e passa como parametro h2
            const res = h1.subtrairHoras(h2);
            
            mostrarHora(res);

    }catch (error) {
        alert('Erro: ' + error.message);
    }

}

function compararhora() {
    try {
        const h1 = new HoraCompleta();
        const h2 = new HoraCompleta();

        // h1 - definição de valores
        h1.definirHora(parseInt(document.getElementById('hora1').value));
        h1.definirMinutos(parseInt(document.getElementById('minutos1').value));
        h1.definirSegundos(parseInt(document.getElementById('segundos1').value));

        // h2  - definição de valores
        h2.definirHora(parseInt(document.getElementById('hora2').value));
        h2.definirMinutos(parseInt(document.getElementById('minutos2').value));
        h2.definirSegundos(parseInt(document.getElementById('segundos2').value));

        //chamada funçao comparar, onde H1 chama a funçao e passa como parametro h2
        const res = h1.compararHoras(h2);
        
        mostrarHora(res);
    } catch (error) {
        alert('Erro: ' + error.message);
    }
}
