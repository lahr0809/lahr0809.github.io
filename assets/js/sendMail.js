document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    data = Object.fromEntries(new FormData(e.target));
    asyncPostCall(data);
    //const convert = JSON.stringify(data);
    //console.log(data.nombre + ' ' + data.apellidos)
  });
  const asyncPostCall = async (data) => {
    try {
      const response = await fetch(`https://script.google.com/macros/s/AKfycbzHZ7krLzA2Cd8m6jHvzSFyjXfngW7wM9Hu_edhtexZZeC9spujCTuh4YM7pVE4mtU0/exec?name=${data.name}&email=${data.email}&message=${data.message}`, {
        method: 'POST',
        redirect: 'follow'
      });
      if (response.ok) {
        const jsonResponse = await response.json();
        Swal.fire('Mensaje enviado!', 'Responderé lo más pronto posible.');
        document.querySelector('form').reset();
        //console.log(jsonResponse);
      }

    } catch (error) {
      console.log(error)
    }
  }