/* eslint-disable linebreak-style */
class PreLoader extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div id="loading">
        <div id="loader">
            <img id="loading-image" src="./loader.gif" alt="Loading..." />
        </div>
    </div>
      `;
  }
}

customElements.define('pre-loader', PreLoader);
