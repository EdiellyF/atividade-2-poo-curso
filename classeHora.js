class HoraCompleta {
    #hora;
    #minuto;
    #segundo;

//sets
    definirHora(hora){
        if(Number.isInteger(hora)){
            this.#hora = hora;
        }
        else{
            throw new Error('A hora deve ser um número.');
        }
    }

    definirMinutos(minuto){
        if (typeof minuto === 'number' && minuto >= 0 && minuto < 60) {
            this.#minuto = minuto;
        } else {
            throw new Error('O Intervalo de Minutos e Segundos devem estar entre 0 e 59.');
        }
    }

    definirSegundos(segundo){
        if (segundo >= 0 && segundo < 60) {
            this.#segundo = segundo;}
        else {
                throw new Error('O Intervalo de Minutos e Segundos devem estar entre 0 e 59.');
            }
      
    }



       
            somarHora(outraHora) {
                const s = new HoraCompleta();
                let segundo_s = this.#segundo + outraHora.obterSegundos();
                let minutos_s = Math.trunc(segundo_s/60);
                segundo_s = segundo_s % 60;
                minutos_s += this.#minuto + outraHora.obterMinutos()
                let hora = Math.trunc(minutos_s/60);
                minutos_s = minutos_s % 60;
                hora +=  this.#hora + outraHora.obterHora();
                
                s.definirHora(hora);
                s.definirMinutos(minutos_s);
                s.definirSegundos(segundo_s);
        
                
                return s.obterHora()+ ' :' + s.obterMinutos() + ': ' + s.obterSegundos();
            
        
        }


   
    subtrairHoras(outraHora) {
        const s = new HoraCompleta();
      
        // Subtração dos segundos
        if (this.#segundo < outraHora.obterSegundos()) {
            this.#minuto -= 1;
            this.#segundo += 60; // Adiciona 60 segundos para converter minutos em segundos
        }
        s.#segundo = this.#segundo - outraHora.obterSegundos();
    
        // Subtração dos minutos
        if (this.#minuto < outraHora.obterMinutos()) {
            this.#hora -= 1;
            this.#minuto += 60;
        }
        s.#minuto = this.#minuto - outraHora.obterMinutos()
    
        // Subtração das horas
        s.#hora = this.#hora - outraHora.obterHora()
    
        return `O resultado da subtração das horas é ${s.#hora}:${s.#minuto}:${s.#segundo}`
    }
    

    compararHoras(outraHora){
        if (this.#hora === outraHora.obterHora() &&
        this.#minuto === outraHora.obterMinutos() &&
        this.#segundo === outraHora.obterSegundos()) {
        return 0; // As horas são iguais
    } else if (this.#hora > outraHora.obterHora() ||
               (this.#hora === outraHora.obterHora() && this.#minuto > outraHora.obterMinutos()) ||
               (this.#hora === outraHora.obterHora() && this.#minuto === outraHora.obterMinutos() && this.#segundo > outraHora.obterSegundos())) {
        return 1; // A hora atual é maior que a outra hora
    } else {
        return -1; // A hora atual é menor que a outra hora
    }
}

    //gets

    obterHora(){
        return this.#hora;
    }

    obterMinutos(){
        return this.#minuto;
    }
    obterSegundos(){
        return this.#segundo;
    }
}