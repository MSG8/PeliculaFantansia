import {Escenario} from './escenario.js';
import {Personaje} from './personaje.js'
export class Caballero extends Personaje
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

      document.getElementsByTagName('main')[0].innerHTML+=(`<p class=${this.nombre}> <span class="negrita">${this.nombre}:</span>  ¡${this.distintosAtaques[this.suerteAtaque][0]}! </p>`);
      document.getElementsByTagName('main')[0].innerHTML+=(`<p class=${this.distintosAtaques[this.suerteAtaque][3]}> ${this.distintosAtaques[this.suerteAtaque][2]} </p>`);
      document.getElementsByTagName('main')[0].innerHTML+=(`<p class="narrador"> <span class="negrita">Narrador:</span>  El ${this.nombre} lanzo su ataque ${this.distintosAtaques[this.suerteAtaque][0]} y daño a ${personaje.nombre} quitandole ${this.distintosAtaques[this.suerteAtaque][1]}  </p>`)

      personaje.vida = personaje.vida - (this.distintosAtaques[this.suerteAtaque][1]);

    }

    hablar(texto)
    {
        document.getElementsByTagName('main')[0].innerHTML+=(`<p class=${this.nombre}> <span class="negrita"> ${this.nombre}: </span> ${texto} </p>`);
    }

    defender()
    {
      document.getElementsByTagName('main')[0].innerHTML+=(`<p class=${this.nombre}> <span class="negrita">${this.nombre}:</span>  ¡DEFENSA! </p>`);
      document.getElementsByTagName('main')[0].innerHTML+=(`<p class="narrador"> <span class="negrita">Narrador:</span>  El ${this.nombre} se defendio, aguanta 10pto mas de ataque </p>`)

      this.vida = this.vida + 10;
    }

    curar()
    {
      document.getElementsByTagName('main')[0].innerHTML+=(`<p class=${this.nombre}> <span class="negrita">${this.nombre}:</span>  ¡CURACION! </p>`);
      document.getElementsByTagName('main')[0].innerHTML+=(`<p class="narrador"> <span class="negrita">Narrador:</span>  El ${this.nombre} se curo, recuperando 30pto mas de vida </p>`)

      this.vida = this.vida + 30;
    }

    eventos(personaje, suerteMovimiento = Escenario.suerte(9,0))
    {
      if (suerteMovimiento<=5 && suerteMovimiento>=0)
      {
        this.atacar(personaje);
      }
      else
      {
        if(suerteMovimiento<=8 && suerteMovimiento>=6)
        {
          this.defender();
        }
        else
        {
          if(suerteMovimiento==9)
          {
            this.curar();
          }
        }
      }
    }
}
