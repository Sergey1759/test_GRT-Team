let container = document.getElementById('container');
function createElement(obj){
    let ol = document.createElement('ol');
    for (const iterator in obj) {
        console.log(obj[iterator]);

        if(obj[iterator][0]){
            let li = document.createElement('li');
            li.innerHTML = `<b> ${iterator} </b>  : ${obj[iterator][0].text}`;
            ol.appendChild(li);
        } else{
            let li = document.createElement('li');
            li.innerHTML = `<b> ${iterator} </b> : not found `;
            ol.appendChild(li);
        }
    }
    container.appendChild(ol);
}

export function Put(array){
    for (const arrays of array) {
        for (const object of arrays.group) {
            createElement(object);
        }
    }
}



