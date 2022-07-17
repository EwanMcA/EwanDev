function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = 'heyoooo'

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = () => console.log("blahhhhhhhhhh");

  element.appendChild(btn);

   return element;
 }

 document.body.appendChild(component());
