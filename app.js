// Click event to handle new-quote button, using jQuery
$(document).ready(() => {
    $('#new-quote').click((event) => {
            event.preventDefault();
            $.ajax({
                url: '/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
                success (data) {
                    var post = data.shift(); // The data is an array of posts. Grab the first one.
                    $('#author').text(post.title);
                    $('#text').html(post.content);
                }

            //         // If the Source is available, use it. Otherwise hide it.
            //         if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
            //             $('#quote-source').html('Source:' + post.custom_meta.Source);
            //         } else {
            //             $('#quote-source').text('');
            //         }
            //     },
            //     cache: false
        })    // });
    })
})




