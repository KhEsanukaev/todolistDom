const input = document.querySelector("#input");
const addBtn = document.querySelector("#btn");
const result = document.querySelector("#result");
//

//check.type = "checkbox"
//check.prepend(textEl)


addBtn.addEventListener("click", (e) => {
  if (input.value === "") {
    return alert("empty field");
  }
  createDeleteElements(input.value);
  input.value = "";
});

function createDeleteElements(value) {
    const li = document.createElement("li");
    li.className = "li";
    li.style.width = '100%'
    li.style.display = 'flex'
    li.style.justifyContent = 'space-between'
    
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = "x";
    
    const check = document.createElement("input")
    check.type = 'checkbox'

    check.addEventListener('change', (e) => {
        if (check.checked) {
            li.style.textDecoration = 'line-through'
        }else li.style.textDecoration = 'none'
    
        
    })

    

  const textEl = document.createElement("div");
  textEl.textContent = value;

  btn.addEventListener("click", (e) => {
    e.target.parentNode.remove();
  });
li.prepend(check)
  li.append(textEl, btn);
  result.appendChild(li);
  
}
