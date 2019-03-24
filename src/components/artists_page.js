import { LitElement, html } from 'lit-element';
import './album';

class ArtistsPage extends LitElement {

  createRenderRoot () {
    return this;
  }

  static get properties () {
    return {
      artist: { type: String },
      _artistData: { type: Object }
    }
  }

  connectedCallback () {
    super.connectedCallback();
    import(`../data/artists/${this.artist}.json`).then(artist => this._artistData = artist);
  }

  attributeChangedCallback(name, old, val) {
    super.attributeChangedCallback(name, old, val);
    if (name === 'artist') {
      import(`../data/artists/${this.artist}.json`).then(artist => this._artistData = artist);
    }
  }

  openArtist (artist) {
    this._artistData = undefined;
    this.setAttribute('artist', artist);
    scrollTo(0, 0);
  }

  render () {
    if (this._artistData) {
      return html`
        <style>
          h1 {
            position: absolute;
            left: 8px;
            bottom: 8px;
            font-size: 6rem;
            font-weight: 900;
          }
          header {
            background: linear-gradient(transparent, #222);
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 512px;
          }
          header::before {
            content: "";
            z-index: -1;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: url('${this._artistData.header}');
            background-size: cover;
            background-attachment: fixed;
            background-position: center; 
          }
          main {
            position: relative;
            margin-top: 512px;
          }
          .category-title {
            font-weight: 900;
            font-size: 3rem;
            text-align: center;
          }
          .category-body {
            text-align: center;
            white-space: nowrap;
            overflow-x: auto;
          }
        </style>
        <header>
          <h1>${this.artist}</h1>
        </header>
        <main>
          ${this._artistData.albums.length > 0 ? html`
            <h2 class="category-title">Albums</h2>
            <div class="category-body">
              ${this._artistData.albums.map(album => html`
                <music-album title=${album.title} artist=${this.artist} src=${album.cover} @click=${() => {
                  this.parentElement.dispatchEvent(new CustomEvent('set-page', { detail: { pageType: 'album', page: `albums/${this.artist}/${album.title}` } }))
                }}></music-album>
              `)}
            </div>
          ` : html`<div class="category-body"></div>`}
          ${this._artistData.singles.length > 0 ? html`
            <h2 class="category-title">Singles & EPs</h2>
            <div class="category-body">
              ${this._artistData.singles.map(single => html`
                <music-album title=${single.title} artist=${this.artist} src=${single.cover} @click=${() => {
                  this.parentElement.dispatchEvent(new CustomEvent('set-page', { detail: { pageType: 'album', page: `singles/${this.artist}/${single.title}` } }))
                }}></music-album>
              `)}
            </div>
          ` : html`<div class="category-body"></div>`}
          <button @click=${() => this.openArtist('Ariana Grande')} ?disabled=${this.artist === 'Ariana Grande'}>Ariana Grande</button>
          <button @click=${() => this.openArtist('Billie Eilish')} ?disabled=${this.artist === 'Billie Eilish'}>Billie Eilish</button>
          <button @click=${() => this.openArtist('Alessia Cara')} ?disabled=${this.artist === 'Alessia Cara'}>Alessia Cara</button>
        </main>
      `;
    } else {
      return html`<p>Loading...</p>`;
    }
  }

}

customElements.define('artists-page', ArtistsPage);