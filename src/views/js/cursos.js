const API = "http://localhost:3000/cursos";

async function cargar() {
  const res = await fetch(API);
  const data = await res.json();

  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  data.forEach(c => {
    lista.innerHTML += `
      <tr>
        <td>${c.nombre}</td>
        <td>${c.descripcion}</td>
        <td>${c.profesor?.nombre || "Sin profesor"}</td>
      </tr>
    `;
  });
}

async function crear() {
  const nombre = document.getElementById("nombre").value;
  const descripcion = document.getElementById("descripcion").value;
  const profesor = document.getElementById("profesor").value;

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nombre,
      descripcion,
      profesor
    })
  });

  cargar();
}

async function asociar() {
  const curso_id = document.getElementById("curso_id").value;
  const estudiante_id = document.getElementById("estudiante_id").value;

  await fetch(`${API}/${curso_id}/asociar`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      curso_id,
      estudiante_id
    })
  });

  alert("Estudiante asociado correctamente");
  cargar();
}

cargar();
