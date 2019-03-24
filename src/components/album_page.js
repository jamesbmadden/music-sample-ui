import { LitElement, html, css } from 'lit-element';

class AlbumPage extends LitElement {

  createRenderRoot () {
    return this;
  }

  static get properties () {
    return {
      album: { type: String },
      _albumData: { type: Object }
    }
  }

  connectedCallback () {
    super.connectedCallback();
    import(`../data/${this.album}.json`).then(album => this._albumData = album);
  }

  attributeChangedCallback(name, old, val) {
    super.attributeChangedCallback(name, old, val);
    if (name === 'album') {
      import(`../data/${this.album}.json`).then(album => this._albumData = album);
    }
  }

  openAlbum (album) {
    this._albumData = undefined;
    this.setAttribute('album', album);
    scrollTo(0, 0);
  }

  setPage(page, pageType) {
    this.parentElement.dispatchEvent(new CustomEvent('set-page', { detail: { pageType, page } }));
  }

  render () {
    if (this._albumData) {
      return html`
        <style>
          h1 {
              font-size: 6rem;
              font-weight: 900;
              margin: .25rem 0;
            }
            .header-text {
              position: absolute;
              left: 8px;
              bottom: 8px;
            }
            .header-text a {
              font-size: 2.5rem;
              font-weight: 900;
            }
            a {
              text-decoration: underline;
            }
            a:hover {
              color: #f44336;
              cursor: pointer;
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
              background: url('${this._albumData.cover}');
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
            ol {
              padding: 0;
            }
            .album-track {
              box-sizing: border-box;
              padding: 1rem;
              position: relative;
              width: 100%;
              display:flex;
              cursor: pointer;
            }
            .album-track:hover {
              background: rgba(255, 255, 255, 0.1);
            }
            .album-track > * {
              width: 100%;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .album-track > .track-length, .explicit-warning {
              width: auto;
              overflow: initial;
              margin: 0 .25rem;
            }
            .explicit-hide {
              opacity: 0;
            }
        </style>
        <header>
          <div class="header-text">
            <h1>${this._albumData.title}</h1>
            <a tabindex="0" @click=${() => {
              this.setPage(this._albumData.artist, 'artist');
            }}>${this._albumData.artist}</a>
          </div>
        </header>
        <main>
          <h2 class="category-title">Tracks</h2>
          <ol>
            ${this._albumData.tracks.map(track => html`
              <li class="album-track">
                <span>${track.title}</span>
                <div class="artists">
                  ${track.artists.map((artist, index) => html`
                    <a tabindex="0"  @click=${() => {
                      this.setPage(artist, 'artist');
                    }}>${artist}</a>${index < track.artists.length-1 ? ', ' : ''}
                  `)}
                </div>
                <span class="explicit-warning ${track.explicit ? 'explicit-show' : 'explicit-hide'}">Explicit</span>
                <span class="track-length">${track.length}</span>
              </li>
            `)}
          </ol>
        </main>
      `;
    } else {
      return html`<p>Loading...</p>`;
    }
  }

}

customElements.define('album-page', AlbumPage);