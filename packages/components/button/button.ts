import { LitElement, unsafeCSS } from "lit";
import { html, literal } from "lit/static-html.js";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import componentBase from "@daisyui-lit/styles/css/base/component-base";
import buttonStyle from "./button.style.css";
import type {
  DaButtonColorType,
  DaButtonShapeType,
  DaButtonSizeType,
} from "./button.type";
@customElement("da-button")
export class DaButton extends LitElement {
  static styles = [componentBase, unsafeCSS(buttonStyle)];

  @property({ type: String, reflect: true }) color: DaButtonColorType =
    "default";

  @property({ type: Boolean, reflect: true }) link: boolean = false;

  @property({ type: String, reflect: true }) size: DaButtonSizeType = "md";

  @property({ type: Boolean, reflect: true }) active: boolean = false;

  @property({ type: Boolean, reflect: true }) disabled: boolean = false;

  @property({ type: Boolean, reflect: true }) outline: boolean = false;

  @property({ type: Boolean, reflect: true }) wide: boolean = false;

  @property({ type: Boolean, reflect: true }) glass: boolean = false;

  @property({ type: Boolean, reflect: true }) block: boolean = false;

  @property({ type: Boolean, reflect: true }) loading: boolean = false;

  @property({ type: String, reflect: true }) shape: DaButtonShapeType =
    "default";

  @property({ type: Boolean, reflect: true }) noAnimation: boolean = false;

  protected render() {
    const tag = this.link ? literal`a` : literal`button`;
    return html`
      <${tag}
        class="${classMap({
          btn: true,
          //outline
          "btn-outline": this.outline,
          //disabled
          "btn-disabled": this.disabled,
          //wide
          "btn-wide": this.wide,
          //active
          "btn-active": this.active,
          //size
          [`btn-${this.size}`]: true,
          //block
          "btn-block": this.block,
          //glass
          glass: this.glass,
          // color
          "btn-primary": this.color === "primary",
          "btn-secondary": this.color === "secondary",
          "btn-accent": this.color === "accent",
          "btn-ghost": this.color === "ghost",
          "btn-info": this.color === "info",
          "btn-success": this.color === "success",
          "btn-warning": this.color === "warning",
          "btn-error": this.color === "error",
          "btn-link": this.link,
          //loading
          loading: this.loading,
          //shape
          "btn-circle": this.shape === "circle",
          "btn-square": this.shape === "square",
          //no-animation
          "no-animation": this.noAnimation,
        })}"
      >
        <slot></slot>
      </${tag}>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "da-button": DaButton;
  }
}
