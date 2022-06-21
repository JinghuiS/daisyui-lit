import { html, LitElement, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import badgeStyle from "./badge.style.css";
import componentBase from "@daisyui-lit/styles/css/base/component-base";
import type { DaBadgeColorType, DaBadgeSizeType } from "./badge.type";
// import style from "./style";
@customElement("da-badge")
export class DaBadge extends LitElement {
  @property({ type: Boolean, reflect: true }) outline = false;

  @property({ type: String, reflect: true }) color: DaBadgeColorType =
    "default";

  @property({ type: String, reflect: true }) size: DaBadgeSizeType = "md";
  static styles = [componentBase, unsafeCSS(badgeStyle)];
  render() {
    return html`
      <span
        class="${classMap({
          badge: true,
          // outline
          "badge-outline": this.outline,
          // color
          "badge-primary": this.color === "primary",
          "badge-secondary": this.color === "secondary",
          "badge-accent": this.color === "accent",
          "badge-ghost": this.color === "ghost",
          "badge-info": this.color === "info",
          "badge-success": this.color === "success",
          "badge-warning": this.color === "warning",
          "badge-error": this.color === "error",
          // size
          "badge-xs": this.size === "xs",
          "badge-sm": this.size === "sm",
          "badge-md": this.size === "md",
          "badge-lg": this.size === "lg",
        })}"
      >
        <slot></slot>
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "da-badge": DaBadge;
  }
}
