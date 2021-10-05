export class Escenario
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

    // document.getElementsByTagName('body')[0].style.backgroundImage = `url(fondo${this.suerte})`;
  }

  static suerte(max=0,min=0)
  {
    this.max = max+1;
    this.min = min;

    return (Math.floor(Math.random() * (this.max - this.min)) + this.min);
  }
}
