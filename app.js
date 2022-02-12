const allButton = document.getElementsByClassName('button-test');
const prime = document.getElementById('prime')
console.log(allButton)
console.log(prime)

for (const button of allButton) {
       button.addEventListener('click', function (e) {
              // console.log(e.target.parentNode.parentNode)
              if (e.target.id == 'prime') {
                     document.getElementById('title').style.color = 'red';
              }
              else {
                     document.getElementById('title').style.color = 'green';
              }
       })
}

let count = 0;

// document.getElementById('add').addEventListener('click', function (e) {
//        count++;
//        control('count');
// })

// document.getElementById('minus').addEventListener('click', function (e) {
//        count--;
//        control('count');
// })

function add(e) {
       count++;
       control('count');
}

function minus(e) {
       count--;
       control('count');
}

function control(id) {
       document.getElementById(id).innerText = count;
}