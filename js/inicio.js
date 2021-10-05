'use strict'
console.log('JS Cargada');

class Pelicula
{
  constructor()
  {
    this.titulo = 'Batallita Fantastica';
    this.escenario = new Escenario(); //Definimos el escenario
    this.narrador = new Narrador(); //Creamos al narrador
    this.bueno(); //instanciamos y verificamos al personaje bueno
    this.malo();//instanciamos y verificamos al personaje malo

    this.primerActo();
  }

  bueno()
  {
    do //Se encarga de alertar al usuario si tiene fallo al entrar los datos
    {
      this.eleccionBueno = (prompt('Buenas jugador, que clase de luchador quiere usted ser (MAGO/CABALLERO/CAZADOR): ').replace(/ /g, "")).toUpperCase();//CAMBIAMOS LOS ESPACIOS EN BLANCO Y LO PONEMOS TODO MAYUSCULAS, ASI NO DARA FALLO AL ENTRAR LOS DATOS
      if (this.eleccionBueno != 'MAGO' && this.eleccionBueno != 'CABALLERO' && this.eleccionBueno != 'CAZADOR') //Si escribes mal, te salta un alerta del fallo
      {
        alert('Usted fallo en la entrada de datos');
      }
    } while (this.eleccionBueno != 'MAGO' && this.eleccionBueno != 'CABALLERO' && this.eleccionBueno != 'CAZADOR');

    switch (this.eleccionBueno)
    {
      case 'MAGO':
        this.bueno = new Mago();
        break;
      case 'CABALLERO':
        this.bueno = new Caballero();
        break;
      case 'CAZADOR':
        this.bueno = new Cazador();
        break;
      default: //Si por algun casual sale de do while con fallo, le mostrara al usuario que tiene un fallo al instanciar el personaje
        alert('Ha ocurrido un error al instanciar al personaje bueno');
    }
  }

  malo()
  {
    do
    {
      this.eleccionMalo = (prompt('Buenas jugador, que clase de enemigo quiere usted para pelear (DRAGON/ORCO/DEMONIO): ').replace(/ /g, "")).toUpperCase();//CAMBIAMOS LOS ESPACIOS EN BLANCO Y LO PONEMOS TODO MAYUSCULAS, ASI NO DARA FALLO AL ENTRAR LOS DATOS
      if (this.eleccionMalo != 'DRAGON' && this.eleccionMalo != 'ORCO' && this.eleccionMalo != 'DEMONIO')
      {
        alert('Usted fallo en la entrada de datos');
      }
    } while (this.eleccionMalo != 'DRAGON' && this.eleccionMalo != 'ORCO' && this.eleccionMalo != 'DEMONIO');
    switch (this.eleccionMalo)
    {
      case 'DRAGON':
        this.malo = new Dragon();
        break;
      case 'ORCO':
        this.malo = new Orco();
        break;
      case 'DEMONIO':
        this.malo = new Demonio();
        break;
      default:
        alert('Ha ocurrido un error al instanciar al personaje malo');
    }
  }

  primerActo()
  {
    document.write(`<h1> ${this.titulo} </h1>`);
    document.write(`<h2> PRIMER ACTO: EL VIAJE </h2>`);
    this.escenario.lugar(); //Se selecciona un lugar al azar para la pelea.
    this.narrador.hablar(`Os contare una pequeña batalla que succedio hace un par de decadas en las ${this.escenario.nombreLugar}, ${this.escenario.tipoDescripcion}...`);
    this.narrador.hablar(`Primero os hablare de uno de los luchadores de esta batalla, este es un ${this.bueno.description} `);
    document.write(`<img src="Imagenes/${(this.bueno.nombre).toLowerCase()}.gif" />`);
    this.narrador.hablar(`Ahora del otro "luchador", este es un ${this.malo.description} `);
    document.write(`<img src="Imagenes/${(this.malo.nombre).toLowerCase()}.gif" />`);
    this.narrador.hablar(`Por azares del destino el ${this.bueno.nombre} y el ${this.malo.nombre} se habian cruzado en el camino de los objetivos de ambos, y ninguno de los dos estaba dispuesto a marcharse`);
    this.malo.hablar(`Malditos ${this.bueno.nombre} siempre estais molestando, sois peores que moscas`);
    this.bueno.hablar(`Asquerosos ${this.malo.nombre}, deberiais mejorar mas vuestra inteligencia y dejaar de quejaros de nuestra clase`);
    this.malo.hablar(`Como si la opinion de un minusculo ${this.bueno.nombre} me importara, ¡JAJAJA!`);
    this.narrador.hablar(`Rio el ${this.malo.nombre} de manera grave y resonante`);
    this.bueno.hablar(`No me asustas ${this.malo.nombre}`);
    this.malo.hablar(`Entonces peleemos pequeñajos`);
    document.write(`<h2> BATALLA </h2>`);
    while (this.bueno.vida > 0 && this.bueno.vida > 0)
    {
      this.bueno.eventos(this.malo);
      this.malo.eventos(this.bueno);
    }

    if (this.bueno.vida<= 0 && this.malo.vida > 0)
    {
      this.malo.hablar(`JAJAJAJA CLARO QUE IBA A GANAR`);
      this.narrador.hablar(`Dijo con orgullo el ${this.malo.nombre}`);
      document.write(`<img src="Imagenes/${(this.malo.nombre).toLowerCase()}.gif" />`);
    }
    else
    {
      if (this.bueno.vida> 0 && this.malo.vida <= 0)
      {
        this.bueno.hablar(`No pudiste con mi fuerza`);
        this.narrador.hablar(`Dijo con orgullo el ${this.bueno.nombre}`);
        document.write(`<img src="Imagenes/${(this.bueno.nombre).toLowerCase()}.gif" />`);
      }
      else
      {
        if (this.bueno.vida<= 0 && this.malo.vida <= 0)
        {
          this.narrador.hablar(`Tristemente.. llenos de ira acabaron ambos con sus vidas`);
        }
      }
    }
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
      'Tierras de Mordor',
      'Arenas Llameantes',
      'Cascadas Infinita',
      'Cuevas Musgosa'
    ];

    this.descripcion=
    [
      'un lugar rodeado de arboles muertos y arena negra, donde no se puede ver nada por su densa niebla.',
      'un desierto gigantesco el cual tiene dunas de arena y lava por todas partes.',
      'cascadas y cascadas de agua que caen en un inmenso alcantalido con varios saliente a lo largo de su caida.',
      'una cueva fria y humeda cuvierta de un muesgo brillante'
    ];

    this.suerte=Escenario.suerte(3,0);

    this.nombreLugar=this.lugar[this.suerte];

    this.tipoDescripcion=this.descripcion[this.suerte];

    // document.getElementsByTagName('main')[0].style.backgroundImage = `url(fondo${this.suerte})`;
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

    atacar(personaje)
    {
      this.distintosAtaques=
      [
        ['bola de fuego', 20, 'PUSHH', 'fuego'],
        ['misiles arcanos', 25, 'PIN PIN PIN', 'misiles'],
        ['rayo helador',10, 'SHHHHH', 'hielo']
      ];

      this.suerteAtaque = Escenario.suerte(2,0);

      document.write(`<p class=${this.nombre}> <span class="negrita">${this.nombre}:</span>  ¡${this.distintosAtaques[this.suerteAtaque][0]}! </p>`);
      document.write(`<p class=${this.distintosAtaques[this.suerteAtaque][3]}> ${this.distintosAtaques[this.suerteAtaque][2]} </p>`);
      document.write(`<p class="narrador"> <span class="negrita">Narrador:</span>  El ${this.nombre} lanzo su ataque ${this.distintosAtaques[this.suerteAtaque][0]} y daño a ${personaje.nombre} quitandole ${this.distintosAtaques[this.suerteAtaque][1]}  </p>`);

      personaje.vida = personaje.vida - (this.distintosAtaques[this.suerteAtaque][1]);

    }

    hablar(texto)
    {
        document.write(`<p class="mago"> <span class="negrita"> ${this.nombre}: </span> ${texto} </p>`);
    }

    defender()
    {
      document.write(`<p class=${this.nombre}> <span class="negrita">${this.nombre}:</span>  ¡DEFENSA! </p>`);
      document.write(`<p class="narrador"> <span class="negrita">Narrador:</span>  El ${this.nombre} se defendio, aguanta 10pto mas de ataque </p>`)

      this.vida = this.vida + 10;
    }

    curar()
    {
      document.write(`<p class=${this.nombre}> <span class="negrita">${this.nombre}:</span>  ¡CURACION! </p>`);
      document.write(`<p class="narrador"> <span class="negrita">Narrador:</span>  El ${this.nombre} se curo, recuperando 30pto mas de vida </p>`)

      this.vida = this.vida + 30;
    }

    eventos(personaje, suerteMovimiento = Escenario.suerte(9,0))
    {
      console.log(suerteMovimiento);
      if (suerteMovimiento<=5 && suerteMovimiento>=0)
      {
        this.atacar(personaje);
      }

      if(suerteMovimiento<=6 && suerteMovimiento>=8)
      {
        this.defender();
      }

      if(suerteMovimiento==9)
      {
        this.curar();
      }

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

    atacar(personaje)
    {
      this.distintosAtaques=
      [
        ['espada sagrada', 20, 'FUN', 'brillo'],
        ['filo retumbante', 25, 'FUSHSHAS', 'fuerza'],
        ['embate poderosos',10, 'FLINN', 'fuerza']
      ];

      this.suerteAtaque = Escenario.suerte(2,0);

      document.write(`<p class=${this.nombre}> <span class="negrita">${this.nombre}:</span>  ¡${this.distintosAtaques[this.suerteAtaque][0]}! </p>`);
      document.write(`<p class=${this.distintosAtaques[this.suerteAtaque][3]}> ${this.distintosAtaques[this.suerteAtaque][2]} </p>`);
      document.write(`<p class="narrador"> <span class="negrita">Narrador:</span>  El ${this.nombre} lanzo su ataque ${this.distintosAtaques[this.suerteAtaque][0]} y daño a ${personaje.nombre} quitandole ${this.distintosAtaques[this.suerteAtaque][1]}  </p>`)

      personaje.vida = personaje.vida - (this.distintosAtaques[this.suerteAtaque][1]);

    }

    hablar(texto)
    {
        document.write(`<p class=${this.nombre}> <span class="negrita"> ${this.nombre}: </span> ${texto} </p>`);
    }

    defender()
    {
      document.write(`<p class=${this.nombre}> <span class="negrita">${this.nombre}:</span>  ¡DEFENSA! </p>`);
      document.write(`<p class="narrador"> <span class="negrita">Narrador:</span>  El ${this.nombre} se defendio, aguanta 10pto mas de ataque </p>`)

      this.vida = this.vida + 10;
    }

    curar()
    {
      document.write(`<p class=${this.nombre}> <span class="negrita">${this.nombre}:</span>  ¡CURACION! </p>`);
      document.write(`<p class="narrador"> <span class="negrita">Narrador:</span>  El ${this.nombre} se curo, recuperando 30pto mas de vida </p>`)

      this.vida = this.vida + 30;
    }

    eventos(personaje, suerteMovimiento = Escenario.suerte(9,0))
    {
      if (suerteMovimiento<=5 && suerteMovimiento>=0)
      {
        this.atacar(personaje);
      }

      if(suerteMovimiento<=6 && suerteMovimiento>=8)
      {
        this.defender();
      }

      if(suerteMovimiento==9)
      {
        this.curar();
      }

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

    atacar(personaje)
    {
      this.distintosAtaques=
      [
        ['tramapa mortal', 20, 'FAS', 'fuerza'],
        ['emboscada', 25, '..... TRACK', 'sigiloso'],
        ['disparo certero',10, 'FLINN', 'fuerza']
      ];

      this.suerteAtaque = Escenario.suerte(2,0);

      document.write(`<p class=${this.nombre}> <span class="negrita">${this.nombre}:</span>  ¡${this.distintosAtaques[this.suerteAtaque][0]}! </p>`);
      document.write(`<p class=${this.distintosAtaques[this.suerteAtaque][3]}> ${this.distintosAtaques[this.suerteAtaque][2]} </p>`);
      document.write(`<p class="narrador"> <span class="negrita">Narrador:</span>  El ${this.nombre} lanzo su ataque ${this.distintosAtaques[this.suerteAtaque][0]} y daño a ${personaje.nombre} quitandole ${this.distintosAtaques[this.suerteAtaque][1]}  </p>`)

      personaje.vida = personaje.vida - (this.distintosAtaques[this.suerteAtaque][1]);

    }

    hablar(texto)
    {
        document.write(`<p class=${this.nombre}> <span class="negrita"> ${this.nombre}: </span> ${texto} </p>`);
    }

    defender()
    {
      document.write(`<p class=${this.nombre}> <span class="negrita">${this.nombre}:</span>  ¡DEFENSA! </p>`);
      document.write(`<p class="narrador"> <span class="negrita">Narrador:</span>  El ${this.nombre} se defendio, aguanta 10pto mas de ataque </p>`)

      this.vida = this.vida + 10;
    }

    curar()
    {
      document.write(`<p class=${this.nombre}> <span class="negrita">${this.nombre}:</span>  ¡CURACION! </p>`);
      document.write(`<p class="narrador"> <span class="negrita">Narrador:</span>  El ${this.nombre} se curo, recuperando 30pto mas de vida </p>`)

      this.vida = this.vida + 30;
    }

    eventos(personaje, suerteMovimiento = Escenario.suerte(9,0))
    {
      if (suerteMovimiento<=5 && suerteMovimiento>=0)
      {
        this.atacar(personaje);
      }

      if(suerteMovimiento<=6 && suerteMovimiento>=8)
      {
        this.defender();
      }

      if(suerteMovimiento==9)
      {
        this.curar();
      }

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

    atacar(personaje)
    {
      this.distintosAtaques=
      [
        ['garras filosas', 20, 'FAS', 'fuerza'],
        ['llamarada', 25, 'PUSHH', 'fuego'],
        ['golpe de cola',10, 'PUN', 'fuerza']
      ];

      this.suerteAtaque = Escenario.suerte(2,0);

      document.write(`<p class=${this.nombre}> <span class="negrita">${this.nombre}:</span>  ¡${this.distintosAtaques[this.suerteAtaque][0]}! </p>`);
      document.write(`<p class=${this.distintosAtaques[this.suerteAtaque][3]}> ${this.distintosAtaques[this.suerteAtaque][2]} </p>`);
      document.write(`<p class="narrador"> <span class="negrita">Narrador:</span>  El ${this.nombre} lanzo su ataque ${this.distintosAtaques[this.suerteAtaque][0]} y daño a ${personaje.nombre} quitandole ${this.distintosAtaques[this.suerteAtaque][1]}  </p>`)

      personaje.vida = personaje.vida - (this.distintosAtaques[this.suerteAtaque][1]);

    }

    hablar(texto)
    {
        document.write(`<p class=${this.nombre}> <span class="negrita"> ${this.nombre}: </span> ${texto} </p>`);
    }

    defender()
    {
      document.write(`<p class=${this.nombre}> <span class="negrita">${this.nombre}:</span>  ¡DEFENSA! </p>`);
      document.write(`<p class="narrador"> <span class="negrita">Narrador:</span>  El ${this.nombre} se defendio, aguanta 10pto mas de ataque </p>`)

      this.vida = this.vida + 10;
    }

    curar()
    {
      document.write(`<p class=${this.nombre}> <span class="negrita">${this.nombre}:</span>  ¡CURACION! </p>`);
      document.write(`<p class="narrador"> <span class="negrita">Narrador:</span>  El ${this.nombre} se curo, recuperando 30pto mas de vida </p>`)

      this.vida = this.vida + 30;
    }

    eventos(personaje, suerteMovimiento = Escenario.suerte(9,0))
    {
      if (suerteMovimiento<=5 && suerteMovimiento>=0)
      {
        this.atacar(personaje);
      }

      if(suerteMovimiento<=6 && suerteMovimiento>=8)
      {
        this.defender();
      }

      if(suerteMovimiento==9)
      {
        this.curar();
      }

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

    atacar(personaje)
    {
      this.distintosAtaques=
      [
        ['golpe atroz', 20, 'FAS', 'fuerza'],
        ['mazazo destroza roca', 25, 'PUSHH', 'fuerza'],
        ['golpe de mazo',10, 'PUN', 'fuerza']
      ];

      this.suerteAtaque = Escenario.suerte(2,0);

      document.write(`<p class=${this.nombre}> <span class="negrita">${this.nombre}:</span>  ¡${this.distintosAtaques[this.suerteAtaque][0]}! </p>`);
      document.write(`<p class=${this.distintosAtaques[this.suerteAtaque][3]}> ${this.distintosAtaques[this.suerteAtaque][2]} </p>`);
      document.write(`<p class="narrador"> <span class="negrita">Narrador:</span>  El ${this.nombre} lanzo su ataque ${this.distintosAtaques[this.suerteAtaque][0]} y daño a ${personaje.nombre} quitandole ${this.distintosAtaques[this.suerteAtaque][1]}  </p>`)

      personaje.vida = personaje.vida - (this.distintosAtaques[this.suerteAtaque][1]);

    }

    hablar(texto)
    {
        document.write(`<p class=${this.nombre}> <span class="negrita"> ${this.nombre}: </span> ${texto} </p>`);
    }

    defender()
    {
      document.write(`<p class=${this.nombre}> <span class="negrita">${this.nombre}:</span>  ¡DEFENSA! </p>`);
      document.write(`<p class="narrador"> <span class="negrita">Narrador:</span>  El ${this.nombre} se defendio, aguanta 10pto mas de ataque </p>`)

      this.vida = this.vida + 10;
    }

    curar()
    {
      document.write(`<p class=${this.nombre}> <span class="negrita">${this.nombre}:</span>  ¡CURACION! </p>`);
      document.write(`<p class="narrador"> <span class="negrita">Narrador:</span>  El ${this.nombre} se curo, recuperando 30pto mas de vida </p>`)

      this.vida = this.vida + 30;
    }

    eventos(personaje, suerteMovimiento = Escenario.suerte(9,0))
    {
      if (suerteMovimiento<=5 && suerteMovimiento>=0)
      {
        this.atacar(personaje);
      }

      if(suerteMovimiento<=6 && suerteMovimiento>=8)
      {
        this.defender();
      }

      if(suerteMovimiento==9)
      {
        this.curar();
      }

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

    atacar(personaje)
    {
      this.distintosAtaques=
      [
        ['garras muertas', 20, 'FAS', 'fuerza'],
        ['llamarada helada', 25, 'FSHH', 'hielo'],
        ['golpe punzante',10, 'FAS', 'fuerza']
      ];

      this.suerteAtaque = Escenario.suerte(2,0);

      document.write(`<p class=${this.nombre}> <span class="negrita">${this.nombre}:</span>  ¡${this.distintosAtaques[this.suerteAtaque][0]}! </p>`);
      document.write(`<p class=${this.distintosAtaques[this.suerteAtaque][3]}> ${this.distintosAtaques[this.suerteAtaque][2]} </p>`);
      document.write(`<p class="narrador"> <span class="negrita">Narrador:</span>  El ${this.nombre} lanzo su ataque ${this.distintosAtaques[this.suerteAtaque][0]} y daño a ${personaje.nombre} quitandole ${this.distintosAtaques[this.suerteAtaque][1]}  </p>`)

      personaje.vida = personaje.vida - (this.distintosAtaques[this.suerteAtaque][1]);

    }

    hablar(texto)
    {
        document.write(`<p class=${this.nombre}> <span class="negrita"> ${this.nombre}: </span> ${texto} </p>`);
    }

    defender()
    {
      document.write(`<p class=${this.nombre}> <span class="negrita">${this.nombre}:</span>  ¡DEFENSA! </p>`);
      document.write(`<p class="narrador"> <span class="negrita">Narrador:</span>  El ${this.nombre} se defendio, aguanta 10pto mas de ataque </p>`)

      this.vida = this.vida + 10;
    }

    curar()
    {
      document.write(`<p class=${this.nombre}> <span class="negrita">${this.nombre}:</span>  ¡CURACION! </p>`);
      document.write(`<p class="narrador"> <span class="negrita">Narrador:</span>  El ${this.nombre} se curo, recuperando 30pto mas de vida </p>`)

      this.vida = this.vida + 30;
    }

    eventos(personaje, suerteMovimiento = Escenario.suerte(9,0))
    {
      if (suerteMovimiento<=5 && suerteMovimiento>=0)
      {
        this.atacar(personaje);
      }

      if(suerteMovimiento<=6 && suerteMovimiento>=8)
      {
        this.defender();
      }

      if(suerteMovimiento==9)
      {
        this.curar();
      }

    }
}

let peli = new Pelicula(); // llamo al constructor de la clase pelicula
