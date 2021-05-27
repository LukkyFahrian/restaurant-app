/* eslint-disable linebreak-style */
class PreLoader extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div id="loading">
        <div id="loader">
            <img id="loading-image" src="https://media.giphy.com/media/gu9XBXiz60HlO5p9Nz/giphy.gif" alt="Loading..." />
        </div>
    </div>
      `;
  }
}

customElements.define('pre-loader', PreLoader);
