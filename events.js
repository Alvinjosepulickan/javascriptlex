/*
Below are some of the built-in event handlers. 

Event 

click   onclick 
                When the user clicks on an element, the event handler onclick handles it. 
keypress onkeypress 
                When the user presses the keyboard's key, event handler onkeypress handles it. 
keyup onkeyup 
                When the user releases the keyboard's key, the event handler onkeyup handles it. 
load onload 
                When HTML document is loaded in the browser, event handler onload handles it 
blur  onblur 
                When an element loses focus, the event handler onblur handles it. 
change onchange 
                When the selection of checked state change for input, select or text-area element changes, event handler onchange handles it. 

*/
/*
 <html>  
   <head>  
       <script src="test.js"></script>      
   </head>  
   <body>  
        <p onclick="executeMe();">Para says !!! </p> 
   </body>  
</html> 

*/



function executeMe(){
    console.log("Hi");
}
function SaySomething(){
    console.log("ennondu");
}