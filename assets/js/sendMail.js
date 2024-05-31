 document.querySelector('#form').addEventListener('submit', e => {
            e.preventDefault();
            data = Object.fromEntries(new FormData(e.target));
            asyncPostCall(data);
          });
          const asyncPostCall = async (data) => {
            try {
              const response = await fetch('https://script.google.com/macros/s/AKfycbyMv2mzLQopLuuq1wGMCBwx6JX_0qHJawo6jArj7b0Snw5yLUWJKB4qWi12YAUq9ZuF/exec', {
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
