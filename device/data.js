$(document).ready(function() {
    const url = 'http://11533238.ngrok.io/records';
    const $_question = $('.question');
    const medication = $_question.data('medication');
    const user = $_question.data('user');
    const data = {
        user: parseInt(user),
        medication: parseInt(medication)
    };

    $('.btn-success').click(function() {
        data.date = Date();
        data.answer = "Sim";
        console.log('sim');
        $.ajax({
            type: 'POST',
            url: url,
            data: data,
            dataType: 'json'
        });
    });

    $('.btn-danger').click(function() {
        data.date = Date();
        data.answer = "Não";
        console.log('não');
        $.ajax({
            type: 'POST',
            url: url,
            data: data,
            dataType: 'json'
        });
    });
});
