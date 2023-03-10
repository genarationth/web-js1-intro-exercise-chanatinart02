function ChangeName() {
   let name = prompt('what your name')

   if(name !== null && name !== '') {
    document.getElementById('inputName').innerHTML = `Hello ${name}`;
  } else {
    document.getElementById('inputName').innerHTML = 'Hello Newbie';
  }
   }
