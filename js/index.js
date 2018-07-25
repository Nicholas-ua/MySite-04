$('#page-loaded').html((new Date).toLocaleTimeString());

$('Form input[type = "submit"]').click(sendForm);

function sendForm(e) {
    const form = $('form')[0];
    if (!form.checkValidity()) {
        return;
    }
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/smm1@ukr.net",
        method: "POST",
        data: {
            name: $('#name').val(),
            email: $('#email').val(),
            comment: $('#comment').val()
        },
        dataType: "json"
    })
    .done(function () {
        $('form')[0].reset();
        $('#msg').html('Thank you! Your comments has been send!');
    })
    .fail(function () {
        $('#msg').html('Sorry, there is an error!');
    });
}