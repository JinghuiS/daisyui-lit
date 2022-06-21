import { css } from "lit";

export default css`
  .rounded-box {
    border-radius: var(--daisy-rounded-box, 1rem);
  }
  .rounded-t-box {
    border-top-left-radius: var(--daisy-rounded-box, 1rem);
    border-top-right-radius: var(--daisy-rounded-box, 1rem);
  }
  .rounded-b-box {
    border-bottom-left-radius: var(--daisy-rounded-box, 1rem);
    border-bottom-right-radius: var(--daisy-rounded-box, 1rem);
  }
  .rounded-l-box {
    border-top-left-radius: var(--daisy-rounded-box, 1rem);
    border-bottom-left-radius: var(--daisy-rounded-box, 1rem);
  }
  .rounded-r-box {
    border-top-right-radius: var(--daisy-rounded-box, 1rem);
    border-bottom-right-radius: var(--daisy-rounded-box, 1rem);
  }
  .rounded-br-box {
    border-bottom-right-radius: var(--daisy-rounded-box, 1rem);
  }
  .rounded-tr-box {
    border-top-right-radius: var(--daisy-rounded-box, 1rem);
  }
  .rounded-bl-box {
    border-bottom-left-radius: var(--daisy-rounded-box, 1rem);
  }
  .rounded-tl-box {
    border-top-left-radius: var(--daisy-rounded-box, 1rem);
  }
  .rounded-btn {
    border-radius: var(--daisy-rounded-btn, 0.5rem);
  }
  .rounded-badge {
    border-radius: var(--daisy-rounded-badge, 1.9rem);
  }
`;
