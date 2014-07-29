$(document).ready(function(){
    var db = Firebase("https://contafacil.firebaseio.com/");
    var validations = {
	'#name': {
	    valid : function(name) {
		return name.match(/^[a-z A-Z]+$/);
	    },
	    required: true,
	    error: 'El nombre debe contener únicamente letras.'
	},
	'#email': {
	    valid: function(email) {
		return email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
	    },
	    required: true,
	    error: 'Debe ser un correo electrónico válido.'
	},
	'#phone': {
	    valid: function(phone) {
		return phone.match(/^[0-9]*$/);
	    },
	    required: false,
	    error: 'El teléfono debe contener únicamente dñigitos.'
	}
    };
    var validate = function(target) {
	if(target) {
	   return _validate('#'+target.id);
	}
	else {
	    var valid = true;
	    for(field in validations) {
		valid = _validate(field) && valid;
	    }
	    return valid;
	}
	function _validate(field) {
	    var val = $(field).val().trim();
	    if(validations[field].required && val === '') {
		$(field+'-error').html('Campo requerido.');
		$(field+'-error').show();
		return false;
	    }
	    if(!validations[field].valid( val ) ) {
		$(field+'-error').html( validations[field].error );
		$(field+'-error').show();
		return false;
	    }
	    $(field+'-error').hide();
	    return true;
	}
    }

    var db = new Firebase("https://contafacil.firebaseio.com/");

    $('form').on('submit',function(ev){
	ev.preventDefault();
	if(validate()) {
	    db.push({
		'name':$('#name').val(),
		'email':$('#email').val(),
		'phone':$('#phone').val(),
		'date': new Date().toISOString()
	    },function(err){
		if(err) {
		    console.log('Algo salio mal :(');
		}
		else {
		    $('input').val('');
		    $('.modal').modal('show');
		}
	    });

	}
    });
    $('input').on('change',function(ev){
	validate(ev.currentTarget);

    });
});
