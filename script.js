document.addEventListener('DOMContentLoaded', function () {
       const boxes = document.querySelectorAll('.box');
       const adventureHeading = document.querySelector('h1');
   
       boxes.forEach((box, index) => {
         box.addEventListener('mouseenter', () => {
           handleBoxHover(index);
         });
   
         box.addEventListener('mouseleave', () => {
           handleBoxLeave(index);
         });
   
         box.addEventListener('click', () => {
           handleBoxClick(index);
         });
       });
   
       adventureHeading.addEventListener('click', () => {
         handleAdventureHeadingClick();
       });
   
       function handleBoxHover(index) {
         const textSections = document.querySelectorAll('.text');
         textSections.forEach((text, textIndex) => {
           if (textIndex === index) {
             text.style.opacity = 1;
           } else {
             text.style.opacity = 0.5;
           }
         });
       }
   
       function handleBoxLeave(index) {
         const textSections = document.querySelectorAll('.text');
         textSections.forEach((text) => {
           text.style.opacity = 1;
         });
       }
   
       function handleBoxClick(index) {
         const adventureLinks = [
           'https://example.com/biking',    
           'https://example.com/paragliding',
           'https://example.com/surfing',    
           'https://example.com/diving',     
         ];
   
         if (index >= 0 && index < adventureLinks.length) {
           window.location.href = adventureLinks[index];
         }
       }
   
       function handleAdventureHeadingClick() {
         // Add functionality for the Adventure heading click event if needed
         alert('Adventure heading clicked!');
       }
     });