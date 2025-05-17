// js/nav.js
fetch('nav.html')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to load nav.html: ${response.status}`);
    }
    return response.text();
  })
  .then(html => {
    document.getElementById('nav-placeholder').innerHTML = html;
  })
  .catch(error => {
    console.error('Error loading nav:', error);
  });
