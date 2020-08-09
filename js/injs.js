
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
this.classList.toggle("active");
var panel = this.nextElementSibling;
if (panel.style.maxHeight) {
  panel.style.maxHeight = null;
} else {
  panel.style.maxHeight = panel.scrollHeight + "px";
}
});
}

document.getElementById("purple").addEventListener("mouseover", function() {
    document.getElementById("purple").style.backgroundColor = "#ccc";
});
document.getElementById("purple").addEventListener("mouseout", function() {
    document.getElementById("purple").style.backgroundColor = "#B677C2";
});

document.getElementById("orange").addEventListener("mouseover", function() {
    document.getElementById("orange").style.backgroundColor = "#ccc";
});
document.getElementById("orange").addEventListener("mouseout", function() {
    document.getElementById("orange").style.backgroundColor = "#FF983D";
});



document.getElementById("column1").addEventListener("mouseover", function() {
    document.getElementById("column1").style.backgroundColor = "#ccc";
});
document.getElementById("column1").addEventListener("mouseout", function() {
    document.getElementById("column1").style.backgroundColor = "#B677C2";
});


document.getElementById("column2").addEventListener("mouseover", function() {
    document.getElementById("column2").style.backgroundColor = "#ccc";
});
document.getElementById("column2").addEventListener("mouseout", function() {
    document.getElementById("column2").style.backgroundColor = "#FF983D";
});


document.getElementById("column3").addEventListener("mouseover", function() {
    document.getElementById("column3").style.backgroundColor = "#ccc";
});
document.getElementById("column3").addEventListener("mouseout", function() {
    document.getElementById("column3").style.backgroundColor = "#65B4E9";
});

//first
document.getElementById("zin").addEventListener("click", zoomin);
document.getElementById("zout").addEventListener("click", zoomout);

function zoomin(){
        var myImg = document.getElementById("stmartin");
        var currWidth = myImg.clientWidth;
        var currHeight = myImg.clientHeight;
        if(currWidth >= 2000){
            alert("Maximum zoom-in level reached.");
        } else{
            myImg.style.width = (currWidth + 50) + "px";
        }

        if(currHeight >= 890){
            alert("Maximum zoom-in level reached.");
        } else{
            myImg.style.height = (currHeight + 50) + "px";
        }
    }
    function zoomout(){
        var myImg = document.getElementById("stmartin");
        var currWidth = myImg.clientWidth;
        var currHeight = myImg.clientHeight;
        if(currWidth <= 550){
            alert("Minimum zoom-out level reached.");
        } else{
            myImg.style.width = (currWidth - 50) + "px";
        }

        if(currHeight <= 550){
            alert("Minumum zoom-out level reached.");
        } else{
            myImg.style.height = (currHeight - 50) + "px";
        }
    }


    //second
    document.getElementById("zin2").addEventListener("click", zoomin2);
    document.getElementById("zout2").addEventListener("click", zoomout2);

    function zoomin2(){
            var myImg = document.getElementById("gaur");
            var currWidth = myImg.clientWidth;
            var currHeight = myImg.clientHeight;
            if(currWidth >= 2000){
                alert("Maximum zoom-in level reached.");
            } else{
                myImg.style.width = (currWidth + 50) + "px";
            }

            if(currHeight >= 890){
                alert("Maximum zoom-in level reached.");
            } else{
                myImg.style.height = (currHeight + 50) + "px";
            }
        }
        function zoomout2(){
            var myImg = document.getElementById("gaur");
            var currWidth = myImg.clientWidth;
            var currHeight = myImg.clientHeight;
            if(currWidth <= 550){
                alert("Minimum zoom-out level reached.");
            } else{
                myImg.style.width = (currWidth - 50) + "px";
            }

            if(currHeight <= 550){
                alert("Minumum zoom-out level reached.");
            } else{
                myImg.style.height = (currHeight - 50) + "px";
            }
        }


        //third
        document.getElementById("zin3").addEventListener("click", zoomin3);
        document.getElementById("zout3").addEventListener("click", zoomout3);

        function zoomin3(){
                var myImg = document.getElementById("sylhet");
                var currWidth = myImg.clientWidth;
                var currHeight = myImg.clientHeight;
                if(currWidth >= 2000){
                    alert("Maximum zoom-in level reached.");
                } else{
                    myImg.style.width = (currWidth + 50) + "px";
                }

                if(currHeight >= 890){
                    alert("Maximum zoom-in level reached.");
                } else{
                    myImg.style.height = (currHeight + 50) + "px";
                }
            }
            function zoomout3(){
                var myImg = document.getElementById("sylhet");
                var currWidth = myImg.clientWidth;
                var currHeight = myImg.clientHeight;
                if(currWidth <= 550){
                    alert("Minimum zoom-out level reached.");
                } else{
                    myImg.style.width = (currWidth - 50) + "px";
                }

                if(currHeight <= 550){
                    alert("Minumum zoom-out level reached.");
                } else{
                    myImg.style.height = (currHeight - 50) + "px";
                }
            }



            //fourth
            document.getElementById("zin4").addEventListener("click", zoomin4);
            document.getElementById("zout4").addEventListener("click", zoomout4);

            function zoomin4(){
                    var myImg = document.getElementById("barishal");
                    var currWidth = myImg.clientWidth;
                    var currHeight = myImg.clientHeight;
                    if(currWidth >= 2000){
                        alert("Maximum zoom-in level reached.");
                    } else{
                        myImg.style.width = (currWidth + 50) + "px";
                    }

                    if(currHeight >= 890){
                        alert("Maximum zoom-in level reached.");
                    } else{
                        myImg.style.height = (currHeight + 50) + "px";
                    }
                }
                function zoomout4(){
                    var myImg = document.getElementById("barishal");
                    var currWidth = myImg.clientWidth;
                    var currHeight = myImg.clientHeight;
                    if(currWidth <= 550){
                        alert("Minimum zoom-out level reached.");
                    } else{
                        myImg.style.width = (currWidth - 50) + "px";
                    }

                    if(currHeight <= 550){
                        alert("Minumum zoom-out level reached.");
                    } else{
                        myImg.style.height = (currHeight - 50) + "px";
                    }
                }

                //fifth
                document.getElementById("zin5").addEventListener("click", zoomin5);
                document.getElementById("zout5").addEventListener("click", zoomout5);

                function zoomin5(){
                        var myImg = document.getElementById("puthia");
                        var currWidth = myImg.clientWidth;
                        var currHeight = myImg.clientHeight;
                        if(currWidth >= 2000){
                            alert("Maximum zoom-in level reached.");
                        } else{
                            myImg.style.width = (currWidth + 50) + "px";
                        }

                        if(currHeight >= 890){
                            alert("Maximum zoom-in level reached.");
                        } else{
                            myImg.style.height = (currHeight + 50) + "px";
                        }
                    }
                    function zoomout5(){
                        var myImg = document.getElementById("puthia");
                        var currWidth = myImg.clientWidth;
                        var currHeight = myImg.clientHeight;
                        if(currWidth <= 550){
                            alert("Minimum zoom-out level reached.");
                        } else{
                            myImg.style.width = (currWidth - 50) + "px";
                        }

                        if(currHeight <= 550){
                            alert("Minumum zoom-out level reached.");
                        } else{
                            myImg.style.height = (currHeight - 50) + "px";
                        }
                    }
