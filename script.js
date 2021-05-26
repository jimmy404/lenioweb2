function setCalculator(calc) {
  const iframe = document.getElementById('iframeId');
  iframe.setAttribute('src', `./calculator_${calc}/index.html`);
}
