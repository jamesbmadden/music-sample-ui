import { LitElement, html, css } from 'lit-element';
import './components/artists_page';
import './components/album_page';

class Root extends LitElement {

  createRenderRoot () {
    return this;
  }

  static get properties () {
    return {
      pageType: { type: String }, // AKA Home, Artist, Album
      page: { type: String } // AKA 'Ariana Grande', 'albums/Ariana Grande/thank u, next'
    }
  }

  constructor () {
    super();
    this.pageType = 'artist';
    this.page = 'Ariana Grande';
    this.addEventListener('set-page', event => {
      this.pageType = event.detail.pageType;
      this.page = event.detail.page;
      window.scrollTo(0, 0);
    })
  }

  render () {
    if (this.pageType === 'artist') {
      return html`<artists-page artist=${this.page}></artists-page>`;
    } else if (this.pageType === 'album') {
      return html`<album-page album=${this.page}></album-page>`;
    }
  }

}

customElements.define('music-root', Root);