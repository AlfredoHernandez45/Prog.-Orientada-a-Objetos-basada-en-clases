//Código JavaScript

//Función constructora Jugador

class Jugador{
    #caraDado1 = 0;  //Hacer privado
    #caraDado2 = 0;  //Hacer privado
    
    constructor(nombre) {//define el nombre por default
        this.nombre = nombre;
    }
    get name(){//regresa el nombre
        return this.nombre;
    }

    //seters
    #setdado1(cara){
        this.#caraDado1 = cara;
    }
    #setdado2(cara){
        this.#caraDado2 = cara;
    }
    set caraDado1(cara){
        this.#setdado1(cara);//Hacer privado y sus métodos getter y setter
        //caraDado1 = dado1;  //Hacer privado y sus métodos getter y setter
    }
    set caraDado2(cara){
        this.#setdado2(cara);//Hacer privado y sus métodos getter y setter
        //caraDado2 = dado2;  //Hacer privado y sus métodos getter y setter
    }

    //geters
    #getdado1(){
        return this.#caraDado1;
    }

    #getdado2(){
        return this.#caraDado2;
    }
    get caraDado1(){
        return this.#getdado1();
    }
    get caraDado2(){
        return this.#getdado2();
    }
    
    
}//Fin de CLASE JUGADOR

class JuegoDados{
    
    constructor(numeroJuego, j1, j2){
        this.numeroJuego = numeroJuego;
        this.jugador1 = new Jugador(j1.name);
        this.jugador2 = new Jugador(j2.name);
    }
    
    tirarDados(){
        this.jugador1.caraDado1 = Math.round((Math.random() * 5) + 1);
        this.jugador1.caraDado2 = Math.round((Math.random() * 5) + 1);
        this.jugador2.caraDado1 = Math.round((Math.random() * 5) + 1);
        this.jugador2.caraDado2 = Math.round((Math.random() * 5) + 1);
        //console.log(this.jugador1.caraDado1);
        
    }

    determinaGanador () {
        if ( ((this.jugador1.caraDado1 + this.jugador1.caraDado2) == 7)
            && ((this.jugador2.caraDado1 + this.jugador2.caraDado2) != 7) )
            return this.jugador1.name;
        else if ( ((this.jugador2.caraDado1 + this.jugador2.caraDado2) == 7)
            && ((this.jugador1.caraDado1 + this.jugador1.caraDado2) != 7) )
            return this.jugador2.name;
        else return null;
    }
}//Fin de CLASE JUEGOS

/* Programar la clase que represente al torneo
clase torneoDados
    jugadas //Arreglo de objetos de clase JuegoDados

    juegosGanadosJugador1   //Hacer privado y métodos getter y setter
    juegosGanadosjugador2   //Hacer privado y métodos getter y setter

    función crear
    función jugar
    función resultado     //hacer privado y métodos getter y setter
*/

class torneoDados{
    #juegosGanadosJugador1 = 0;
    #juegosGanadosJugador2 = 0;

    #setjuegoGanadoJugador1(n){
        this.#juegosGanadosJugador1 = n;
    }
    #setjuegosGanadosJugador2(n){
        this.#juegosGanadosJugador2 = n;
    }
    set juegosGanadosJugador1(n){
        this.#setjuegoGanadoJugador1(n);//Hacer privado y sus métodos getter y setter
        
    }
    set juegosGanadosJugador2(n){
        this.#setjuegosGanadosJugador2(n);//Hacer privado y sus métodos getter y setter
        
    }

    //geters
    #getjuegoGanadoJugador1(){
        return this.#juegosGanadosJugador1;
    }

    #getjuegosGanadosJugador2(){
        return this.#juegosGanadosJugador2;
    }
    get juegosGanadosJugador1(){
        return this.#getjuegoGanadoJugador1();
    }
    get juegosGanadosJugador2(){
        return this.#getjuegosGanadosJugador2();
    }
    //
    constructor (){
        
        this.jugadas = new Array();
    }

    crear(j1, j2){
        this.jugador1 = new Jugador(j1);
        this.jugador2 = new Jugador(j2);

    }

    jugar(cont){
        
        this.jugadas.push(new JuegoDados(cont+1, this.jugador1, this.jugador2));

        this.jugadas[cont].tirarDados();
        
        var ganador = this.jugadas[cont].determinaGanador()

        if(ganador == this.jugador1.name){
            this.juegosGanadosJugador1++;
            console.log("El ganador del juego "+ (cont+1) +" es: " + this.jugador1.name);
        }
        else if(ganador == this.jugador2.name){
            console.log("El ganador del juego "+ (cont+1) +" es: " + this.jugador2.name);
            this.juegosGanadosJugador2++;
        }
        
    }

    #resultado(){
        if(this.juegosGanadosJugador1 == 3){
            return this.jugador1.name;
            
        }
        else if(this.juegosGanadosJugador2 == 3){
            return this.jugador2.name;
            
        }
    }
    get resultado(){
        return this.#resultado();
    }

    set resultado(n){
        this.#resultado = n;
    }
}
var torneo = new torneoDados();
torneo.crear("Pedro Sánchez", "Antonio Ramírez");

var cont = 0;
var ganadorTorneo = " ";

while(ganadorTorneo == " "){
    torneo.jugar(cont);
    if(torneo.resultado != undefined){
        ganadorTorneo = torneo.resultado;
        console.log("\nEl ganador del torneo es "+ ganadorTorneo);
    }
    cont++;
}
