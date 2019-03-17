const template = document.createElement('template');
template.innerHTML = `
  <style>
    .basebutton {
        color: yellow;
		background-color: black;
    	font-size: 1.5em;
    }
  </style>
  <input type="button" class="basebutton" >
`;

export class BaseButton extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
    this.root.appendChild(template.content.cloneNode(true));
    
    if (this.getAttribute('label')) {
 		this.root.querySelector('input').setAttribute('value', this.getAttribute('label'));	
    }
  }
}

customElements.define('base-button', BaseButton);