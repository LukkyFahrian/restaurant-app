/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
class ErrorMessage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="error-container">
          <h2 tabindex="0" class="error-message">Request Error :(</h2>
      </div>
      `;
  }
}

customElements.define('error-message', ErrorMessage);
