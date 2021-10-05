export class Narrador
{
  hablar(texto)
  {
    document.getElementsByTagName('main')[0].innerHTML+=(`<p class="narrador"> <span class="negrita"> Narrador: </span> - ${texto} </p>`)
  }
}
