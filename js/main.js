document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
  
      const href = this.href;
      document.body.classList.add('fade-out');
  
      setTimeout(() => {
        window.location = href;
      }, 500);
    });
  });