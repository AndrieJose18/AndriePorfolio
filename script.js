// Toggle skills list visibility
function toggleSkills() {
  const skills = document.getElementById('skills-list');
  if (skills.style.display === 'none') {
    skills.style.display = 'block';
  } else {
    skills.style.display = 'none';
  }
}

// Update footer year dynamically
document.getElementById('year').textContent = new Date().getFullYear();
