document.querySelector('form').addEventListener('submit',function(e){e.preventDefault();

const nombre=document.getElementById('name').value;
const correo=document.getElementById('correo').value;
const mensaje=document.getElementById('mensaje').value;

fetch('/contacto',{
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({nombre, correo, mensaje})
})
.then(res => res.json())
.then(data =>{
    alert('¡Mensaje enviado correctamente!');
    e.target.reset();
})
.catch(err =>{
    alert('Hubo un error al enviar el mensaje.');
    });
});