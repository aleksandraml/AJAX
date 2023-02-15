let loading = false;


const showLoader = () => {
    let loader = document.getElementById('loader');
    console.log(`showeLoader()`);
    loader.style.display = 'block';
}

const hideLoader = () => {
    let loader = document.getElementById('loader');
    console.log(`hideLoader()`);
    loader.style.display = 'none';
}


const getData = () => {
   
    if(!loading){
        fetch('https://akademia108.pl/api/ajax/get-users.php')
        .then(res => res.json())
        .then(data => {
    
            let body = document.body;
    
            let HR = document.createElement('hr');
            body.appendChild(HR);
    
            for (let user of data) {
                let pId = document.createElement('p');
                let pName = document.createElement('p');
                let pWebsite = document.createElement('p');
    
                pId.innerText = `user ID: ${user.id}`;
                pName.innerText = `user Name: ${user.name}`;
                pWebsite.innerHTML = `user URL: ${user.website}<br />-------`;
    
                body.appendChild(pId);
                body.appendChild(pName);
                body.appendChild(pWebsite);
            }
    
            loading = false;
            hideLoader();
            
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
    }
    loading = true;
    
}

let endOfThePage = 0;

const scrollToEndOfPage = () => {
    
    let d = document.documentElement;

    let scrollHeight = d.scrollHeight;

    let scrollTop = d.scrollTop;

    let clientHeight = d.clientHeight;

    let sumScrollTopClientHEight = Math.ceil(scrollTop + clientHeight);

    console.log(`scrollHeight: ${scrollHeight}`);
    console.log(`sumScrollTopClientHEight: ${sumScrollTopClientHEight}`)
    console.log(`scrollTop: ${scrollTop}`);
    console.log(`clientHeight: ${clientHeight}`);
    console.log(`================`);

    if(sumScrollTopClientHEight >= scrollHeight) {
        console.log(`Scroll to the end of the page ${endOfThePage}`);

        endOfThePage += 1;
    }

    showLoader();
    getData();
}

window.addEventListener('scroll', scrollToEndOfPage)