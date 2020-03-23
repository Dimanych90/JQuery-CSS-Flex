$(document).ready(() => {
    $('#showMenu').on('click', function () {
        debugger
        $(this).addClass('button_active');
        $('.sidebar-menu').addClass('sidebar-menu_visible');
        $('.close').addClass('close_visible');
    });


    $('#close').on('click', function () {
        $('.sidebar-menu').removeClass('sidebar-menu_visible');
        $('#showMenu').removeClass('button_active');
    });

    $('#query').on('click', function () {    
        $.get(`https://jsonplaceholder.typicode.com/todos/1`, (response) => {            
            var html = `
                UserId: ${response.userId} 
                Title: ${response.title}
            `;
            $('#responseContainer').text(html);
        });
    });
});