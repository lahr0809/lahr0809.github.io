/*TAB SKILLS*/
function openCity(evt, TabName) {
	evt.preventDefault();
	var i, x, tablinks;
	x = document.getElementsByClassName("infmi");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablink");
	for (i = 0; i < x.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" tab-active", "");
	}
	document.getElementById(TabName).style.display = "block";
	evt.currentTarget.className += " tab-active";
}
/*END TAB SKILLS*/

/*END FORM CONTACT*/
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
		Swal.fire({
			icon: "success",
			title: "Mensaje enviado!', 'Responderé lo más pronto posible.",
			showConfirmButton: false,
			timer: 1500
		  });
		document.querySelector('#form').reset();
	  }

	} catch (error) {
	  console.log(error)
	}
  }