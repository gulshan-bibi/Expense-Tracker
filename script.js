let total = 0;
const totalEl = document.getElementById('total');
const listEl = document.getElementById('expenseList');
const nameEl = document.getElementById('name');
const amountEl = document.getElementById('amount');

document.getElementById('addBtn').addEventListener('click', ()=>{
  const name = nameEl.value.trim();
  const amount = parseFloat(amountEl.value);
  if(!name || isNaN(amount) || amount <= 0){
    alert("Please enter valid name and amount");
    return;
  }
  total += amount;
  totalEl.innerText = total;

  const li = document.createElement('li');
  li.innerHTML = `<span>${name} - $${amount}</span> <span class="delete">X</span>`;
  
  li.querySelector('.delete').addEventListener('click', ()=>{
    li.remove();
    total -= amount;
    totalEl.innerText = total;
  });

  listEl.appendChild(li);
  nameEl.value = "";
  amountEl.value = "";
});