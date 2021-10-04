'use strict'
console.log('JS Cargada');

class Pelicula
{
  constructor()
  {
    this.titulo = 'Batallita Fantastica' //necesario poner el this, si no se puede confundir con variable
    this.escenario = new Escenario();
    this.narrador = new Narrador();
    this.eleccionBueno = prompt('Buenas jugador, que clase de luchador quiere usted ser (MAGO/CABALLERO/CAZADOR): ');
    this.eleccionBueno = this.eleccionBueno.replace(" ", "")

    // if (true) {
    //
    // }
    this.bueno = new Mago ();
    this.bueno.hablar(`Tu clase es ${this.bueno.nombre} y su descripcion es -> ${this.bueno.description}, sus puntos de vida son ${this.bueno.vida}`);

    this.malo = new Demonio ();
    this.malo.hablar(`Tu clase es ${this.malo.nombre} y su descripcion es -> ${this.malo.description}, sus puntos de vida son ${this.malo.vida}`);


  }

  primerActo()
  {
    document.write(`<h1> ${this.titulo} </h1>`);
    document.write(`<h2> PRIMER ACTO: LA SORPRESA </h2>`);

    this.escenario.lugar();
    document.write(`<h2> EL NOMBRE DE ESTE LUGAR ES ${this.escenario.nombreLugar} Y SU DESCRIPCION ES ${this.escenario.tipoDescripcion}</h2>`)


    // document.write(`<p> ${this.pueblo.nombre} era un pueblo ${this.pueblo.descripcion}, en el pasado fue un pueblo tranquilo y prospero pero eso cambio tras el paso del Sendero de las Lagrimas</p>`);
    // this.narrador.hablar(` Era otra calurosa mañana, se escuchaba el sonido de la musica de la taberna de fondo mientras ${this.paco.nombre}${this.paco.descripcionPersonaje} preparaba su caballo.`);
    // this.paco.hablar(`¿Que haces esta tarde ${this.maria.nombre}?.`);
    // this.narrador.hablar(`Pregunto ${this.paco.nombre} mientras acababa de preparar su caballo.`);
    // this.maria.hablar(` La verdad que no tengo nada que hacer ${this.paco.nombre}`);
    // this.narrador.hablar(`${this.maria.nombre} es una ${this.maria.descripcionPersonaje}. Miro con cursiosidad a su compañero, le extrañaba que este le preguntase sobre sus planes ya que ${this.paco.nombre} siempre estaba demasiado ocupado`);
    // this.maria.hablar(` ¿Por que me preguntas tu algo asi..?`);
    // this.paco.hablar(` Porque.... necesito tu ayuda.`);
    // this.narrador.hablar(` ${this.paco.nombre} sonrio mientras sacaba un pequeño trozo de oro de la mochila de su caballo.`);
    // this.narrador.hablar(`La rosto de ${this.maria.nombre} cambio de golpe al tiempo que el reflejo del oro aparecia frente su vista.`);
    // this.maria.hablar(` ¡¿DE DONDE SACASTE ESO?!`);
    // this.narrador.hablar(`La rosto de ${this.maria.nombre} cambio de golpe al tiempo que el reflejo del oro aparecia frente su vista.`);
    // this.narrador.hablar(`${this.paco.nombre} devolvio el oro a su mochila mientras se avalanza a silenciar a su amiga.`);
    // this.maria.hablar(` ${this.maria.nombre}, quedamos en 1 hora detras de la taberna para ir a recoger todo el oro que podamos, asi que rapido ve a preparar tu caballo`);
    // this.narrador.hablar(`${this.maria.nombre} simplemente asento y salio corriendo a preparar su caballo.`);
  }


}

class Escenario
{ //Colocamos un valor por defecto al constructor, por si no llaman al metodo lugar() este tendra ya valores de nommbreLugar y tipoDescripcion
  constructor(nombreLugar='Tierra de mordor', tipoDescripcion='Es un lugar rodeado de arboles muertos y arena negra, donde no se puede ver nada por su densa niebla.')
  {
    this.nombreLugar = nombreLugar;
    this.tipoDescripcion = tipoDescripcion;
  }

  lugar()
  {
    this.lugar=
    [
      'Tierra de Mordor',
      'Arenas Llameantes',
      'Cascada Infinita',
      'Cueva Musgosa'
    ];

    this.descripcion=
    [
      'Es un lugar rodeado de arboles muertos y arena negra, donde no se puede ver nada por su densa niebla.',
      'Es un desierto gigantesco el cual tiene dunas de arena y lava por todas partes.',
      'Son cascadas y cascadas de agua que caen en un inmenso alcantalido con varios saliente a lo largo de su caida.',
      'Cueva fria y humeda cuvierta de un muesgo brillante'
    ];

    this.suerte=Escenario.suerte(3,0);

    this.nombreLugar=this.lugar[this.suerte];

    this.tipoDescripcion=this.descripcion[this.suerte];
  }

  static suerte(max=0,min=0)
  {
    this.max = max+1;
    this.min = min;

    return (Math.floor(Math.random() * (this.max - this.min)) + this.min);
  }
}

class Narrador
{
  hablar(texto)
  {
    document.write(`<p class="narrador"> <span class="negrita"> Narrador: </span> - ${texto} </p>`)
  }
}

class Personaje
{
  constructor()
  {
    this.vida = 100;
  }
}

class Mago extends Personaje
{
    constructor()
    {
      super();
      this.nombre = 'MAGO';
      this.description = this.darDescription();
    }

    darDescription()
    {
      this.descripcionClase=
      [
        'joven mago en busca de grandes aventuras',
        'experimentado mago en busca de materiales raros',
        'antiguo mago loco con poderes increibles'
      ];

      return this.descripcionClase[Escenario.suerte(2,0)];
    }

    hablar(texto)
    {
        document.write(`<p class="mago"> <span class="negrita"> ${this.nombre}: </span> ${texto} </p>`);
    }
}


class Caballero extends Personaje
{
    constructor()
    {
      super();
      this.nombre= 'CABALLERO';
      this.description =  this.darDescription();
    }

    darDescription()
    {
      this.descripcionClase=
      [
        'joven caballero en busca de lograr fama',
        'experimentado caballero el cual peleo ya con varias bestias',
        'legendario guerrerro en busca de su objetivo final de vida'
      ];

      return this.descripcionClase[Escenario.suerte(2,0)];
    }

    hablar(texto)
    {
        document.write(`<p class="caballero"> <span class="negrita"> ${this.nombre}: </span> ${texto} </p>`);
    }
}

class Cazador extends Personaje
{
    constructor()
    {
      super();
      this.nombre= 'CAZADOR';
      this.description = this.darDescription();
    }

    darDescription()
    {
      this.descripcionClase=
      [
        'joven cazador que ayuda a su pueblo',
        'experimentado cazador con varias piezas de caza memorables',
        'uno de los mejores cazadores de las tierras, conocido por su ira'
      ];

      return this.descripcionClase[Escenario.suerte(2,0)];
    }

    hablar(texto)
    {
        document.write(`<p class="cazador"> <span class="negrita"> ${this.nombre}: </span> ${texto} </p>`);
    }
}

class Dragon extends Personaje
{
    constructor()
    {
      super();
      this.nombre = 'DRAGON';
      this.description = this.darDescription();
    }

    darDescription()
    {
      this.descripcionClase=
      [
        'joven dragon en busca de grandes riquezas',
        'experimentado dragon en busca de grandes conquista',
        'antiguo dragon demente'
      ];

      return this.descripcionClase[Escenario.suerte(2,0)];
    }

    hablar(texto)
    {
        document.write(`<p class="mago"> <span class="negrita"> ${this.nombre}: </span> ${texto} </p>`);
    }
}


class Orco extends Personaje
{
    constructor()
    {
      super();
      this.nombre= 'ORCO';
      this.description =  this.darDescription();
    }

    darDescription()
    {
      this.descripcionClase=
      [
        'joven orco en busca de un gran festin',
        'experimentado orco en busca de batalla',
        'legendario guerrerro orco lleno de cicatrices en busca de contar sus historias'
      ];

      return this.descripcionClase[Escenario.suerte(2,0)];
    }

    hablar(texto)
    {
        document.write(`<p class="caballero"> <span class="negrita"> ${this.nombre}: </span> ${texto} </p>`);
    }
}

class Demonio extends Personaje
{
    constructor()
    {
      super();
      this.nombre= 'DEMONIO';
      this.description = this.darDescription();
    }

    darDescription()
    {
      this.descripcionClase=
      [
        'joven demonio en busca de subir de nivel',
        'experimentado demonio en busca de sangre para sus rituales',
        'uno de los peores demonio, conocido por jugar con sus presas'
      ];

      return this.descripcionClase[Escenario.suerte(2,0)];
    }

    hablar(texto)
    {
        document.write(`<p class="cazador"> <span class="negrita"> ${this.nombre}: </span> ${texto} </p>`);
    }
}

class PersonajeMalo extends Personaje
{
    hablar(texto)
    {
        document.write(`<p class="malo"> <span class="negrita"> ${this.nombre}: </span>  ${texto} </p>`);
    }
}

new Pelicula(); // llamo al constructor de la clase pelicula
