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
        this.jugador1 = j1;
        this.jugador2 = j2;
    }
    
    get tirarDados(){
        this.jugador = Math.round((Math.random() * 5) + 1);
        return this.jugador;
        
    }

    determinaGanador (jugador1, jugador2) {
        if ( ((jugador1.caraDado1 + jugador1.caraDado2) == 7)
            && ((jugador2.caraDado1 + jugador2.caraDado2) != 7) )
            return jugador1.name;
        else if ( ((jugador2.caraDado1 + jugador2.caraDado2) == 7)
            && ((jugador1.caraDado1 + this.jugador2.caraDado1) != 7) )
            return jugador2.name;
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

    constructor (){
        this.jugadas = new Array();
    }

    crear(j1, j2){
        this.jugador1 = new Jugador(j1);
        this.jugador2 = new Jugador(j2);

    }

    jugar(cont){
        cont++;
        this.jugadas.push(new JuegoDados(cont, this.jugador1, this.jugador2));
    
    }
}
