document.getElementById('validate').addEventListener('click',validate)

function validate(event){
  event.preventDefault();

  let elems = document.getElementById('picker').elements,
      elemArray = {},
      str = '';

    for(var i = 0; i<elems.length; i++){
     if(elems[i].type == 'text')
     elemArray[elems[i].id] = elems[i].value
    }
  
    Object.keys(elemArray).forEach(n=>str += `${n} : ${elemArray[n]}</br>`);

     let result = document.getElementById('result');
     result.classList = 'm-5'
     result.innerHTML = str;
}