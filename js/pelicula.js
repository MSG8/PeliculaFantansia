import {Escenario} from './escenario.js';
import {Narrador} from './narrador.js';
import {Mago} from './mago.js';
import {Caballero} from './caballero.js';
import {Cazador} from './cazador.js';
import {Dragon} from './dragon.js';
import {Orco} from './orco.js';
import {Demonio} from './demonio.js';

class Pelicula
{

  constructor()
  {
    window.onload = this.inicio.bind(this);
  }

  inicio()
  {
    this.titulo = 'Batallita Fantastica';
    this.escenario = new Escenario(); //Definimos el escenario
    this.narrador = new Narrador(); //Creamos al narrador
    this.bueno(); //instanciamos y verificamos al personaje bueno
    this.malo();//instanciamos y verificamos al personaje malo
    this.primerActo(); //comienza la escena
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
    document.getElementsByTagName('main')[0].innerHTML+=(`<h1> ${this.titulo} </h1>`);
    document.getElementsByTagName('main')[0].innerHTML+=(`<h2> PRIMER ACTO: EL VIAJE </h2>`);
    this.escenario.lugar(); //Se selecciona un lugar al azar para la pelea.
    this.narrador.hablar(`Os contare una pequeña batalla que succedio hace un par de decadas en las ${this.escenario.nombreLugar}, ${this.escenario.tipoDescripcion}...`);
    this.narrador.hablar(`Primero os hablare de uno de los luchadores de esta batalla, este es un ${this.bueno.description} `);
    document.getElementsByTagName('main')[0].innerHTML+=(`<img src="Imagenes/${(this.bueno.nombre).toLowerCase()}.gif" />`);
    this.narrador.hablar(`Ahora del otro "luchador", este es un ${this.malo.description} `);
    document.getElementsByTagName('main')[0].innerHTML+=(`<img src="Imagenes/${(this.malo.nombre).toLowerCase()}.gif" />`);
    this.narrador.hablar(`Por azares del destino el ${this.bueno.nombre} y el ${this.malo.nombre} se habian cruzado en el camino de los objetivos de ambos, y ninguno de los dos estaba dispuesto a marcharse`);
    this.malo.hablar(`Malditos ${this.bueno.nombre} siempre estais molestando, sois peores que moscas`);
    this.bueno.hablar(`Asquerosos ${this.malo.nombre}, deberiais mejorar mas vuestra inteligencia y dejaar de quejaros de nuestra clase`);
    this.malo.hablar(`Como si la opinion de un minusculo ${this.bueno.nombre} me importara, ¡JAJAJA!`);
    this.narrador.hablar(`Rio el ${this.malo.nombre} de manera grave y resonante`);
    this.bueno.hablar(`No me asustas ${this.malo.nombre}`);
    this.malo.hablar(`Entonces peleemos pequeñajos`);
    document.getElementsByTagName('main')[0].innerHTML+=(`<h2> BATALLA </h2>`);
    while (this.bueno.vida > 0 && this.bueno.vida > 0)
    {
      this.bueno.eventos(this.malo);
      this.malo.eventos(this.bueno);
    }

    if (this.bueno.vida<= 0 && this.malo.vida > 0)
    {
      this.malo.hablar(`JAJAJAJA CLARO QUE IBA A GANAR`);
      this.narrador.hablar(`Dijo con orgullo el ${this.malo.nombre}`);
      document.getElementsByTagName('main')[0].innerHTML+=(`<img src="Imagenes/${(this.malo.nombre).toLowerCase()}.gif" />`);
    }
    else
    {
      if (this.bueno.vida> 0 && this.malo.vida <= 0)
      {
        this.bueno.hablar(`No pudiste con mi fuerza`);
        this.narrador.hablar(`Dijo con orgullo el ${this.bueno.nombre}`);
        document.getElementsByTagName('main')[0].innerHTML+=(`<img src="Imagenes/${(this.bueno.nombre).toLowerCase()}.gif" />`);
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

let peli = new Pelicula();
