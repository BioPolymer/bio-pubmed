import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "@biopolymer-elements/bio-link/bio-link-chiclet";
import "@biopolymer-elements/bio-link/bio-link-text";

/**
 * `BioPubmedCard` This element is designed to display PubMed data.
 *
 * @customElement
 * @polymer
 * @demo
 *
 */
export class BioPubmedCard extends PolymerElement {
  static get properties() {
    return {
      /** The model for the pubmed object. */
      model: {
        type: Object,
        value: null
      }
    };
  }

  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        .card {
          margin: 24px;
          padding: 16px;
          color: #757575;
          border-radius: 5px;
          background-color: #fff;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
            0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
          @apply --layout-vertical;
        }
        .title {
          color: #909090;
        }
        .buttons {
          @apply --layout-horizontal;
          margin-top: 10px;
          padding-top: 5px;
          border-top: 1px solid #cccccc;
        }
      </style>
      <div class="card">
        <div class="title">[[model.text]]</div>
        <div class="buttons">
          <bio-link-text id="[[model.pubmed]]" type="pubmed"></bio-link-text>
        </div>
      </div>
    `;
  }

  /**
   * Instance of the element is created/upgraded. Use: initializing state,
   * set up event listeners, create shadow dom.
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * Use for one-time configuration of your component after local
   * DOM is initialized.
   */
  ready() {
    super.ready();
  }
}

customElements.define("bio-pubmed-card", BioPubmedCard);
