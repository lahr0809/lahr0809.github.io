 document.querySelector('#form').addEventListener('submit', e => {
            e.preventDefault();
            data = Object.fromEntries(new FormData(e.target));
            asyncPostCall(data);
            //const convert = JSON.stringify(data);
            //console.log(data.nombre + ' ' + data.apellidos)
          });
          const asyncPostCall = async (data) => {
            try {
              const response = await fetch('https://script.google.com/macros/s/AKfycbyaIRlcU_KconK8sPp1ghcpcd56Xmun3t8joZPpKX9sS6dxvUb5UBUJx5SujuRSzC9z/exec', {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json",
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                Swal.fire('Mensaje enviado!', 'Responderé lo más pronto posible.');
                document.querySelector('#form').reset();
              }
        
            } catch (error) {
              console.log(error)
            }
          }
