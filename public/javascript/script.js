document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#iconContainer button').forEach(button => {
    button.addEventListener('click', () => {
      const svg = button.querySelector('svg');
      if (svg) {
        const serializer = new XMLSerializer();
        const svgString = serializer.serializeToString(svg);

        navigator.clipboard.writeText(svgString)
          .then(() => {
            console.log(`Copied SVG from #${button.id}`);
          })
          .catch(err => {
            console.error('Clipboard write failed:', err);
          });
      }
    });
  });
});
