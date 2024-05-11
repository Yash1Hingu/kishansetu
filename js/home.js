document.addEventListener("DOMContentLoaded", function() {
    const accordionBtns = document.querySelectorAll('.faq-que');
   
    accordionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            
            const panel = this.nextElementSibling;
            const panels = document.querySelectorAll('.faq-ans');
            const buttons = document.querySelectorAll('.faq-que');
  
            panels.forEach(p => {
                if (p !== panel && p.classList.contains('active')) {
                    p.classList.remove('active');
                }
            });
  
            buttons.forEach(b => {
                if (b !== this && b.classList.contains('active')) {
                    b.classList.remove('active');
                }
            });
  
            panel.classList.toggle('active');
            this.classList.toggle('active');
        });
    });
  });