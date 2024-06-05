class ToggleInfo extends HTMLElement {
  constructor() {
    super();
    this.__isVisible = false;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <style>
            p {
                display: none;
            }
        </style>

        <button>Show</button>
        <p>
          <slot></slot>
        </p>
    `;
    this._button = this.shadowRoot.querySelector("button");
    this._paragraph = this.shadowRoot.querySelector("p");
    this._button.addEventListener("click", this._toggleInfo.bind(this));
  }

  connectedCallback() {
    if (
      this.hasAttribute("is-visible") &&
      this.getAttribute("is-visible") === "true"
    ) {
      this._isVisible = true;
      this._button.textContent = "Hide";
      this._paragraph.style.display = "block";
    }
  }

  _toggleInfo() {
    this._isVisible = !this._isVisible;
    this._button.textContent = this._isVisible ? "Show" : "Hide";
    this._paragraph.style.display = this._isVisible ? "block" : "none";
  }
}

customElements.define("uc-toggle-info", ToggleInfo);
