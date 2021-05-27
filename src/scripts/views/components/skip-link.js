/* eslint-disable linebreak-style */
class skipLink extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <a href="#contentMain" aria-label="skip ke konten" class="skip-link">Menuju ke konten</a>
    `;
  }
}

customElements.define('skip-link', skipLink);
