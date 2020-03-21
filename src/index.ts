import "@webcomponents/custom-elements";

class AutoheightTextarea extends HTMLElement {
  private textarea: HTMLTextAreaElement | null = null;
  private numCharacters: number = 0;
  private charCountTimer: number | null = null;

  constructor() {
    super();
    this.resizeArea = this.resizeArea.bind(this);
    this.checkLength = this.checkLength.bind(this);

    // For HTML or server-side rendered uses the textarea is available immidiately
    const textarea = this.querySelector("textarea");
    if (textarea) {
      this.init(textarea);
    }

    // For Virtual DOMs, the children are added after this element has been instantiated,
    // so we need to listen for mutations
    else {
      const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          if (mutation.addedNodes.length && mutation.addedNodes[0].nodeName === "TEXTAREA") {
            observer.disconnect();
            this.init(mutation.addedNodes[0] as HTMLTextAreaElement);
          }
        });
      });

      observer.observe(this, { childList: true });
    }

    setTimeout(() => {
      if (!this.textarea) {
        console.error("<autoheight-textarea> needs a <textarea> child in order to initialize");
      }
    }, 500);
  }

  init(textarea: HTMLTextAreaElement) {
    this.textarea = textarea;
    this.textarea.addEventListener("input", this.resizeArea);
    this.resizeArea();

    this.charCountTimer = setInterval(this.checkLength, 100);
  }

  checkLength() {
    if (!this.textarea) {
      return;
    }

    const newNumChars = this.textarea.value.length;
    if (newNumChars !== this.numCharacters) {
      this.numCharacters = newNumChars;
      this.resizeArea();
    }
  }

  disconnectedCallback() {
    if (this.textarea) {
      this.textarea.removeEventListener("input", this.resizeArea);
    }

    if (this.charCountTimer) {
      clearInterval(this.charCountTimer);
    }
  }

  // Resize logic
  private resizeArea() {
    requestAnimationFrame(() => {
      if (!this.textarea) {
        return;
      }

      this.textarea.style.height = "";
      const trackedHeight = this.textarea.scrollHeight;
      this.textarea.style.height = `calc(0.5em + ${trackedHeight}px)`;
    });
  }
}

customElements.define("autoheight-textarea", AutoheightTextarea);
