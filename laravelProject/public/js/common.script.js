$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

$.validator.addMethod('divisible', function(value, element) {
    return /^\+[1-9]{1}[0-9]{5,14}$/.test( value );
}, 'Please enter a valid phone number.');

/* Loader Hide / Show */
function loaderToggle ( status = 0 ) {
	if ( status ) {
		$("#loader").removeClass('hide');
	} else {
		$("#loader").addClass('hide');
	}
}

/* check type */

function check_type ( value, type ) {
	if ( !typeof value === type ) {
	    swal_error( 'Oops!, you have change something!' );
	    return false;
	}
}


/* Swal Notifications */
function swal_success ( message, title = 'Success!' ) {
	swal({
	    type: 'success',
	    title: title,
	    text: message,
	    buttonsStyling: false,
	    confirmButtonClass: 'btn btn-lg btn-success'
	});
}

function swal_error ( message = 'Oops!, Something went wrong.', title = 'Error!' ) {
	swal({
	    type: 'error',
	    title: title,
	    text: message,
	    confirmButtonText: 'Dismiss',
	    buttonsStyling: false,
	    confirmButtonClass: 'btn btn-lg btn-danger'
	});
}

function swal_warning ( message, title = 'Warning' ) {
    swal({
      	type: 'warning',
      	title: title,
      	text: message,
      	buttonsStyling: false,
      	confirmButtonClass: 'btn btn-lg btn-warning'
    });
}

function swal_confirmation ( callback, title = 'Are you sure?', text = "You won't be able to revert this!" ) {
	swal({
	    title: title,
	    text: text,
	    type: 'warning',
	    showCancelButton: true,
	    confirmButtonColor: '#0CC27E',
	    cancelButtonColor: '#FF586B',
	    confirmButtonText: 'Yes, delete it!',
	    cancelButtonText: 'No, cancel!',
	    confirmButtonClass: 'btn btn-success mr-5',
	    cancelButtonClass: 'btn btn-danger',
	    buttonsStyling: false
	}).then(
		callback
		, function (dismiss) {
	    if (dismiss === 'cancel') {
	        swal('Cancelled', 'Your data is safe :)', 'error');
	    }
	});
}