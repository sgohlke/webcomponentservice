const template = document.createElement('template');
template.innerHTML = `
  <style>
    .container p {
        color: blue;
		background-color: yellow;
    	max-width: 20%;
		border: 3px solid black;
    	padding: 1em;
    	font-size: 1.5em;
    }
  </style>
  <div class="container"><p><slot></slot></p></div>
`;

export class BaseContainer extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
    this.root.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('base-container', BaseContainer);