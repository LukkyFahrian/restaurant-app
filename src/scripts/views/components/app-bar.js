/* eslint-disable linebreak-style */
class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="header">
        <div class="header__inner">
            <button id="menu" class="header__menu">☰</button>
            <h1 class="header__title">
                Xkz Re:stau
            </h1>
        </div>
        <nav id="navigationDrawer" class="nav">
            <ul class="nav__list">
                <li class="nav__item"><a href=".">Home</a></li>
                <li class="nav__item"><a href="#/favorite">Favorite</a></li>
                <li class="nav__item"><a href="https://github.com/ExKazze" target="_blank" rel="noopener">About Us</a></li>
            </ul>
        </nav>
    </div>
    `;
  }
}

customElements.define('app-bar', AppBar);
