function scrollToProducts() {
    const productsSection = document.querySelector('.products');
    productsSection.scrollIntoView({ behavior: 'smooth' });
  }
  
  function sendToWhatsApp() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    const text = `Hello! New inquiry from Swad-e-Ratlam site:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const url = `https://wa.me/917204027477?text=${encodeURIComponent(text)}`;
    
    window.open(url, "_blank");
  }