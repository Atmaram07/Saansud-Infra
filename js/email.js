
(function($) {
    $(document).ready(function(){
   
        $(document).ready(function() {
            $('#quoteForm').submit(function(event) {
                event.preventDefault();
        
                // Collect form data
                var formData = $(this).serialize();
        
                // Ajax request to the PHP script
                $.ajax({
                    type: 'POST',
                    url: 'email/get-a-quote.php',
                    data: formData,
                    success: function(response) {
                        // Display the server response
                        $('#response-error').hide();
                        $('#response').show().html(response);
                        $('#quoteForm')[0].reset();
                    },
                    error: function() {
                        //alert('An error occurred while sending the email.');
                        $('#response').hide();
                        $('#response-error').show().html('An error occurred while sending the email.');
                    }
                });
            });
            $('#contact-form').submit(function(event) {
                event.preventDefault();
        
                // Collect form data
                var formData = $(this).serialize();
        
                // Ajax request to the PHP script
                $.ajax({
                    type: 'POST',
                    url: 'email/contact.php',
                    data: formData,
                    success: function(response) {
                        // Display the server response
                            $('#response-error').hide();
                            $('#response').show().html(response);
                            $('#contact-form')[0].reset();
                    },
                    error: function() {
                        //alert('An error occurred while sending the email.');
                        $('#response').hide();
                        $('#response-error').show().html('An error occurred while sending the email.');
                    }
                });
            });
        });
        
        
    });
})( jQuery );