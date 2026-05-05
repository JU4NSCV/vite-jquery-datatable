import './style.css';
import DataTable from 'datatables.net-dt';
import 'datatables.net-dt/css/dataTables.dataTables.css';

const API_URL = "https://corsproxy.io/?https://www.gob.ec/api/v1/instituciones";
async function cargarDatos() {
  try {
    const respuesta = await fetch(API_URL) || null;

    if (!respuesta.ok) {
      throw new Error('Error al consumir la API');
    }

    const datos = await respuesta.json();
    new DataTable('#tabla-posts', {
      data: datos,
      columns: [
        { data: 'institucion_id' },
        { data: 'institucion' },
        { data: 'siglas' },
        { data: 'tipo' },
        { data: 'sector' },
        { data: 'modificado' },
        { data: 'publicado' }
      ],
      pageLength: 10,
      language: {
        search: 'Buscar:',
        lengthMenu: 'Mostrar _MENU_ registros',
        info: 'Mostrando _START_ a _END_ de _TOTAL_ registros',
        paginate: {
          previous: 'Anterior',
          next: 'Siguiente'
        }
      }
    });
  } catch (error) {
    console.error(error);
    document.querySelector('#app').innerHTML += `
      <p class="error">No se pudieron cargar los datos.</p>
    `;
  }
}

cargarDatos();