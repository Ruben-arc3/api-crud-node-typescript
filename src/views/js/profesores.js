const API = "http://localhost:3000/profesores";

async function cargar() {
  const res = await fetch(API);
  const data = await res.json();

  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  data.forEach(p => {
    lista.innerHTML += `
      <tr>
        <td>${p.nombre}</td>
        <td>${p.apellido}</td>
        <td>${p.cedula}</td>
        <td>${p.profesion}</td>
        <td>${p.telefono}</td>
        <td>
          <button class="btn btn-danger btn-sm" onclick="eliminar(${p.id})">
            Eliminar
          </button>
        </td>
      </tr>
    `;
  });
}

async function crear() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const cedula = document.getElementById("cedula").value;
  const profesion = document.getElementById("profesion").value;
  const telefono = document.getElementById("telefono").value;

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nombre,
      apellido,
      cedula,
      profesion,
      telefono
    })
  });

  cargar();
}

async function eliminar(id) {
  await fetch(`${API}/${id}`, {
    method: "DELETE"
  });

  cargar();
}

cargar();
