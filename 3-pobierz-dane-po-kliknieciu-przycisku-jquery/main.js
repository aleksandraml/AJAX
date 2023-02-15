$(document).ready(function () {


    $('#get-data').click(function () {

        //wariant 1
//         $.get('https://akademia108.pl/api/ajax/get-post.php')
//             .done(function (data) {

//                 let pID = $('<p></p>').text(`Post ID: ${data.id}`);

//                 let pUserID = $('<p></p>').text(`User ID: ${data.id}`);

//                 let pTitle = $('<p></p>').text(`Title: ${data.id}`);

//                 let pBody = $('<p></p>').text(`Body: ${data.id}`);

//                 let hr = $('<hr />');

//                 let jqBody = $('body');

//                 jqBody.append(pID);
//                 jqBody.append(pUserID);
//                 jqBody.append(pTitle);
//                 jqBody.append(pBody);
//                 jqBody.append(hr);

//                 // console.log(data)
//             })
//             .fail(function (error) {
//                 console.log(error);
//             });
//     });
// });


//wariant 2
$.getJSON('https://akademia108.pl/api/ajax/get-post.php')
.done(function (data) {

    let pID = $('<p></p>').text(`Post ID: ${data.id}`);

    let pUserID = $('<p></p>').text(`User ID: ${data.id}`);

    let pTitle = $('<p></p>').text(`Title: ${data.id}`);

    let pBody = $('<p></p>').text(`Body: ${data.id}`);

    let hr = $('<hr />');

    let jqBody = $('body');

    jqBody.append(pID);
    jqBody.append(pUserID);
    jqBody.append(pTitle);
    jqBody.append(pBody);
    jqBody.append(hr);

    // console.log(data)
})
.fail(function (error) {
    console.log(error);
});
});
});

