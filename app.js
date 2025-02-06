 // meditation tools

 function startBreathing(){
    window.location.href="breathe.html"}

    function startRelaxation(){
       window.location.href="relaxation.html"}

       function startBinaural(){
           window.location.href="binural.html"}

        //    blog scetion

        // function benefits(){
        //     window.location.href="benefits.html"}

            
        //     function tips(){
        //         window.location.href="tips.html"}
            


       // Form Submission
       document.querySelector('.contact-form').addEventListener('submit', function(e) {
           e.preventDefault();
           alert('Thank you for your message! We will get back to you soon.');
           this.reset();
       });