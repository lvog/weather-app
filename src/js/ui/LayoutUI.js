class LayoutUI {
  constructor(selector) {
    this.holder = document.querySelector(selector);
    this.errorBlock = this.holder.querySelector(".error-block");
    this.template = document.querySelector("#error-template");
  }

  showContent() {
    if (!this.holder) return;

    this.holder.classList.remove("loading");
  }

  showLoading() {
    if (!this.holder) return;

    this.holder.classList.add("loading");
  }

  showError(message) {
    if (!this.holder || !this.template) return;

    this.errorBlock.textContent = "";

    const template = this.template.content.cloneNode(true);

    template.querySelector(".error-message").textContent = message;
    this.holder.classList.remove("loading");
    this.holder.classList.add("error");
    this.errorBlock.appendChild(template);
  }

  clearError() {
    if (!this.errorBlock) return;
    this.holder.classList.remove("error");
    this.errorBlock.textContent = "";
  }
}

export const layoutUI = new LayoutUI(".load-info-block");
