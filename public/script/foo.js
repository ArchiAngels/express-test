console.log('connected');

let links = null;
// let url = 'https://test-new-app-myown.herokuapp.com/api/links';
let url = '/api/links';
let element_id = document.createElement('DIV');
    element_id.id = 'Main-own';
    document.body.appendChild(element_id);

get_links_from_backend();

function get_links_from_backend(){
    let myPromise = new Promise(function(resolve,reject){
        let xhr = new XMLHttpRequest();
        xhr.open('GET',url);
        xhr.onload = function(){
            if(xhr.status == 200){
                resolve(xhr.response);
            }else{
                reject(`Error code ${xhr.status}`);
            }
        }
        xhr.onerror = function(){
            reject(`Error code ${xhr.status}`);
        }
        xhr.send();
    })

    myPromise.then(
        function(value){
            paste_links(JSON.parse(value));
        },
        function(error){
            element_id.innerHTML = error;
        }
    )
}

function paste_links(json){
    let html = ``;
    for(let i =0; i < json.length;i++){
        html += `<a href="${json[i].link}">${json[i].title}</a>${i != json.length-1? '<br>':''}`;
    }
    element_id.innerHTML = html;
}