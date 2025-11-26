const API = "http://localhost:3000/estudiantes";

async function cargar() {
  const res = await fetch(API);
  const data = await res.json();

  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  data.forEach(e => {
    lista.innerHTML += `
      <tr>
        <td>${e.nombre}</td>
        <td>${e.apellido}</td>
        <td>${e.cedula}</td>
        <td>${e.email}</td>
        <td>
          <button class="btn btn-danger btn-sm" onclick="eliminar(${e.id})">Eliminar</button>
        </td>
      </tr>
    `;
  });
}

async function crear() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const cedula = document.getElementById("cedula").value;
  const email = document.getElementById("email").value;

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, apellido, cedula, email })
  });

  cargar();
}

async function eliminar(id) {
  await fetch(`${API}/${id}`, { method: "DELETE" });
  cargar();
}

cargar();
