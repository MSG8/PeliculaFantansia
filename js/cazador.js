import {Escenario} from './escenario.js';
import {Personaje} from './personaje.js'
export class Cazador extends Personaje
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
