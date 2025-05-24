document.getElementById('presentacion').addEventListener('click', function () {
    const carta = document.getElementById('carta');
    const presentacion = document.getElementById('presentacion');
  
    presentacion.style.display = 'none';
    carta.classList.remove('oculto');
  
    // Activamos animación después de mostrar
    setTimeout(() => {
      carta.querySelector('.carta').style.opacity = '1';
    }, 100);
  });
  