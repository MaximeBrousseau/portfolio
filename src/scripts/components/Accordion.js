/** classe principal de l'accordeon  */

export default class Accordion {
    constructor(element) {
      this.element = element;
  
      this.init();
    }
  
    /**
       * method description
      La methode boucle nous element de l'Accordeon
       */
    init() {
      this.options = this.element.querySelectorAll('.js-target');
      //------boucle qui va checher tout les element achetéML qui on la classe js-header
      for (let i = 0; i < this.options.length; i++) {
        this.option = this.options[i];
        //------tu fou un click sur tes element bouclé
        this.option.addEventListener('click', this.onToggleAcco.bind(this));
      }
    }
  
    /**
       * method description
      La methode vient activer et désactiver les element de l'accordeon au besoin
       */
    onToggleAcco(event) {
      //------Peu pas oublier de mettre un target
      const toggle = event.currentTarget;
      //------Damn ta reussi a activer la premiere que ta click, Legende
      toggle.classList.toggle('acco-is-active');
  
      //------La on fait une boucle pour verifier si ils ont des classe si on click sur une nouvelle
      for (let i = 0; i < this.options.length; i++) {
        this.item = this.options[i];
        if (
          this.item.classList.contains('acco-is-active') &&
          this.item != toggle
        ) {
          this.item.classList.remove('acco-is-active');
        }
      }
    }
  }