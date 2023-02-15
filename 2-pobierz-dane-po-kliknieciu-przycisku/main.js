

// $( document ).ready(function() {
//     console.log( "ready!" );
// });

let btnGetData = document.getElementById('get-data');


const getData = () => {
    

    fetch('https://akademia108.pl/api/ajax/get-post.php')
    .then(res => res.json())
    .then(data =>{

        let pId = document.createElement('p');
        let pUserId = document.createElement('p');
        let pTitle = document.createElement('p');
        let pBody = document.createElement('p');
        
        pId.innerText = `Post ID: ${data.id}`;
        pUserId.innerText = `User ID: ${data.userid}`;
        pTitle.innerText = `Title: ${data.tittle}`;
        pBody.innerText = `Body: ${data.body}`;

        document.body.appendChild(pId);
        document.body.appendChild(pUserId);
        document.body.appendChild(pTitle);
        document.body.appendChild(pBody);

    });
}
btnGetData.addEventListener('click', getData)