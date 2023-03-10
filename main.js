let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#eb4b00;">Soy escritora y profesora de idiomas...</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
