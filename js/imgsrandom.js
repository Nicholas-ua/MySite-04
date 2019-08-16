image = new Array();
        image[0]="images/base-01.png" + " " + "id=drag1" + " " + "onclick=" + "hideDivs0()";
        image[1]="images/flange-02.png" + " " + "id=drag2" + " " + "onclick=" + "hideDivs1()";
        image[2]="images/riser-03.png" + " " + "id=drag3" + " " + "onclick=" + "hideDivs2()";
        image[3]="images/slab-04.png" + " " + "id=drag4" + " " + "onclick=" + "hideDivs3()";
        image[4]="images/holder-05.png" + " " + "id=drag5" + " " + "onclick=" + "hideDivs4()";
        image[5]="images/vert-link-06.png" + " " + "id=drag6" + " " + "onclick=" + "hideDivs5()";
        image[6]="images/horiz-link-07.png" + " " + "id=drag7" + " " + "onclick=" + "hideDivs6()";
        image[7]="images/bend-link-08.png" + " " + "id=drag8" + " " + "onclick=" + "hideDivs7()";
        
        //window.onload = function () {
  
        myFunction();
  
        function myFunction() {
        
          image.sort(function(a, b){return 0.5 - Math.random()});
          //document.getElementById("parts").innerHTML = image;
          
          for (var i=0; i<image.length; i++)
          {
            document.write ("<img src="+image[i] + ">");
            document.write("<br>");
            document.write("<hr>");
          }
          document.write("<p>Click the button again.</p>");
          document.write('<button onclick="window.location.reload()">Once more!</button>');
        };
        //}
