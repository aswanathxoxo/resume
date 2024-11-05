// Add animations to section headers
document.querySelectorAll('h2').forEach((header) => {
  header.addEventListener('mouseover', () => {
      header.style.transform = 'scale(1.1)';
      header.style.transition = 'transform 0.3s ease-in-out';
  });

  header.addEventListener('mouseout', () => {
      header.style.transform = 'scale(1)';
  });
});

// Add accordion effect to education and experience sections
document.querySelectorAll('.education, .experience').forEach((section) => {
  section.addEventListener('click', () => {
      section.classList.toggle('active');
  });
});

// Add hover effect to experience items
document.querySelectorAll('.experience li').forEach((experience) => {
  experience.addEventListener('mouseover', () => {
      experience.style.backgroundColor = '#f7f7f7';
      experience.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
  });

  experience.addEventListener('mouseout', () => {
      experience.style.backgroundColor = 'transparent';
      experience.style.boxShadow = 'none';
  });
});

// Add hover effect to About and Contact links
document.querySelectorAll('.additional-info a').forEach((link) => {
  link.addEventListener('mouseover', () => {
      link.style.transform = 'scale(1.1)';
      link.style.transition = 'transform 0.3s ease-in-out';
  });

  link.addEventListener('mouseout', () => {
      link.style.transform = 'scale(1)';
  });
});
