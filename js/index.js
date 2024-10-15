function article() {
   let whatsNew = document.getElementById('whats-new');
   let blogs = document.getElementById('blogs');
   
   if (whatsNew.style.display === 'none' || whatsNew.style.display === '') {
       whatsNew.style.display = 'block';  
       blogs.style.display = 'none';     
       btnA.style.backgroundColor="#1d75bd";
       btnA.style.height="80px";
       btnB.style.height="70px";
       btnB.style.backgroundColor="#27aae2";
   }
}

function blog() {
   let whatsNew = document.getElementById('whats-new');
   let blogs = document.getElementById('blogs');
   
   if (blogs.style.display === 'none' || blogs.style.display === '') {
       blogs.style.display = 'block';  
       whatsNew.style.display = 'none';  
        btnB.style.backgroundColor="#1d75bd";
        btnA.style.backgroundColor="#27aae2";
        btnB.style.height="80px";
        btnA.style.height="70px";
   }
}