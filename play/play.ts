import "@daisyui-lit/styles/css/theme/light.css";
import "@daisyui-lit/components";
import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("daisyui-web-play")
export class Playground extends LitElement {
  protected render() {
    return html`
      <da-alert color="info">2121</da-alert>
      <da-badge>1212</da-badge>
      <da-button shape="circle" outline color="info">121</da-button>
    `;
  }
}
