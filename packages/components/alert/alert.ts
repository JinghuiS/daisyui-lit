import { html, LitElement, TemplateResult, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import componentBase from "@daisyui-lit/styles/css/base/component-base";
import alertStyle from "./alert.style.css";
import { DaAlertColorType } from "./alert.type";

@customElement("da-alert")
export class DaAlert extends LitElement {
  static styles = [componentBase, unsafeCSS(alertStyle)];

  @property({ type: String, reflect: true }) color: DaAlertColorType =
    "default";

  @property({ type: Object, reflect: true }) action!: TemplateResult<any>;
  protected render() {
    return html`
      <div
        class="${classMap({
          "da-alert": true,
          alert: true,
          "alert-info": this.color === "info",
          "alert-success": this.color === "success",
          "alert-warning": this.color === "warning",
          "alert-error": this.color === "error",
        })}"
      >
        <slot></slot>

        <div class="flex-none">${this.action}</div>
      </div>
    `;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    "da-alert": DaAlert;
  }
}
