import { LitElement, html, css } from 'lit-element';

class Album extends LitElement {

  static get properties () {
    return {
      title: { type: String },
      artist: { type: String },
      src: { type: String }
    }
  }

  render () {
    return html`
      <style>
        :host {
          position: relative;
          width: 240px;
          display: inline-block;
          cursor: pointer;
        }
        .album-art {
          position: relative;
          transform-origin: center;
          box-sizing: border-box;
          width: 240px;
          height: 240px;
          background: url(${this.src});
          background-size: 100%;
        }
        .album-artist {
          opacity: .75;
          font-size: .75rem;
        }
      </style>
      <div class="album-art"></div>
      <p class="album-title">${this.title}</p>
      <p class="album-artist">${this.artist}</p>
    `;
  }

}

customElements.define('music-album', Album);