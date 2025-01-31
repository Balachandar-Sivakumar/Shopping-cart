'use strict'

let grtext = document.getElementById('grname'),
    gramount = document.getElementById('gramount'),
    ultag = document.querySelector('ul'),
    btn = document.querySelector('button'),
    total = document.querySelector('.total'),
    asc = document.querySelector('.asc'),
    desc = document.querySelector('.desc');
let count = 0;

btn.addEventListener('click',start)

function start(){
    let name = grtext.value,
          amount = Number(gramount.value);
    
    if (!name || isNaN(amount) || !amount) return alert('Enter correct value');

    let li = document.createElement('li'),
          a = document.createElement('p'),
          b = document.createElement('p'),
          c = document.createElement('i');
        

    a.className = 'cont';
    a.textContent = name;
    b.className = 'ttl';
    b.textContent = amount;
    c.className = 'icon fa-solid fa-trash';
    
    
    
    li.append(a,b, c);
    ultag.appendChild(li);
    
    count += amount;
    total.textContent = `Total : ${count}`;

    c.addEventListener('click', () => {
        li.remove();
        count -= amount;
        total.textContent = `Total : ${count}`;
    });

    grtext.value = gramount.value = '';
}

function sort(n) {
    let items = Array.from(ultag.children);
    items.sort((a, b) => {
        const d = Number(a.querySelector('.ttl').textContent),
              e = Number(b.querySelector('.ttl').textContent);
        return n ? d - e : e - d;
    });
    ultag.innerHTML = '';
    ultag.append(...items);
}

asc.addEventListener('click', () => sort(true));
desc.addEventListener('click', () => sort(false));
grtext.addEventListener('keypress',(n)=> {return n.key==="Enter" ? start():0});
gramount.addEventListener('keypress',(n)=> {return n.key==="Enter" ? start():0});