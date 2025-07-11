async function loadExercises(muscle) {
  const res = await fetch('data/exercises.json');
  const data = await res.json();
  const exercises = data[muscle];

  const container = document.getElementById("exercise-list");
  container.innerHTML = `<h2>${muscle} Exercises</h2>`;

  exercises.forEach(ex => {
    const div = document.createElement("div");
    div.className = "exercise-card";
    div.innerHTML = `
      <h3>${ex.name}</h3>
      <p>${ex.description}</p>
      <img src="${ex.image}" alt="${ex.name}" width="100%">
      <iframe width="100%" height="200" src="${ex.video}" frameborder="0" allowfullscreen></iframe>
    `;
    container.appendChild(div);
  });
}
