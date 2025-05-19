fetch('nav.html')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to load nav.html: ${response.status}`);
    }
    return response.text();
  })
  .then(html => {
    document.getElementById('nav-placeholder').innerHTML = html;

    // Initialize dark mode toggle after nav is loaded
    function tryInitDarkmode() {
      if (typeof initDarkmode === "function") {
        initDarkmode();
      } else {
        setTimeout(tryInitDarkmode, 50);
      }
    }
    tryInitDarkmode();
  })
  .catch(error => {
    console.error('Error loading nav:', error);
  });

  