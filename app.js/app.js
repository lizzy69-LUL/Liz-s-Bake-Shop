// app.js

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Ensure each dropdown wrapper is the positioning context
  document.querySelectorAll('.product-dropdown').forEach(dropdown => {
    dropdown.style.position = 'relative';
  });

  // Attach click handlers to each “i” info-icon
  document.querySelectorAll('.info-icon').forEach(icon => {
    icon.addEventListener('click', () => {
      // Find the matching ingredient-list by ID (from data-target)
      const list = document.getElementById(icon.dataset.target);
      // Toggle its visibility
      list.style.display = (list.style.display === 'block') ? 'none' : 'block';
    });
  });
});
