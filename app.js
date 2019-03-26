// Click event to handle new-quote button, using jQuery
$(document).ready(() => {
    $('#new-quote').click((event) => {
        event.preventDefault();
        $.ajaxSetup({cache: false});
        $('#text').html('');
        $('#author').html('');
        $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", (a) => {
            
            $("#text").append(`${a[0].content}`);
            $("#author").append(`&mdash; ${a[0].title}`);
        });   
    });
});



