 document.querySelector('#form').addEventListener('submit', e => {
            e.preventDefault();
            data = Object.fromEntries(new FormData(e.target));
            asyncPostCall(data);
            //const convert = JSON.stringify(data);
            //console.log(data.nombre + ' ' + data.apellidos)
          });
          const asyncPostCall = async (data) => {
            try {
              const response = await fetch('https://script.google.com/macros/s/AKfycbzk5PfL-J-7Vw6VZW-HM3iJDcswrEg9LABR6yaKNH5UNoKWm70QPIXFrUurkbTmzyWq/exec', {
                mode:  'no-cors',
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
