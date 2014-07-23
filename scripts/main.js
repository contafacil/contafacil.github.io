$(document).ready(function() {
	var contafacilDb = new Firebase("https://contafacil.firebaseio.com/");
	$("#mc-embedded-subscribe").on("click",function(event) {
		event.preventDefault();
		contafacilDb.push({
			"name":$("#name").val(),
			"email":$("#email").val()
		},function(error) {
			if(error) {
				console.log("something went wrong.");
				alert("Algo salió mal. Por favor recargue la página.");
			} else {
				console.log("¡Yaju! :D");
				alert("Te has registrado exitosamente. Espera noticias de Contafácil muy pronto!");
			}
		});
	});
});
