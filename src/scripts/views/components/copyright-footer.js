/* eslint-disable linebreak-style */
class Copyright extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <h1 class="footer-copyright">Copyright © 2021 - <p class="footer-logo">Xkz Re:stau</p></h1>
      `;
  }
}

customElements.define('copyright-footer', Copyright);
