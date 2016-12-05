$(document).ready(function(){
    console.log('Ready!');
    var name = document.getElementById('name');
    var image = document.getElementById('image');
    var movie = document.getElementById('movie');
    var comment = document.getElementById('comment');
    var submit = document.getElementById('submit');
    var buttonbar = document.getElementById('buttonbar');
    var errordiv = document.getElementById('errordiv');
    var topbox = document.getElementById('newboxplace')
    
    var index = 0;
        
    var nregEx = /^[a-zA-Z0-9]{8,15}$/;
    var iregEx = /.(gif|png|jpg)$/;
    var mregEx = /^[a-zA-Z ]{1,100}$/;
    var cregEx = /[a-zA-Z0-9 .\,?!]{1,100}/;
        
         name.onkeyup = function(){
            if(nregEx.test(name.value) == true){
                index = index + 1;
                name.style.color = 'green';
                errordiv.style.right = '600';
            }
            else{
                errordiv.style.right= 0;
                name.style.color = 'red';
                errordiv.innerHTML="Incorrect Username";
                errordiv.style.color = 'red';
        }
    }
         image.onkeyup = function(){
            if(iregEx.test(image.value) == true){
                index = index + 1;
                image.style.color = 'green';
                errordiv.style.right = '600';
            }
            else{
                errordiv.style.right= 0;
                image.style.color = 'red';
                errordiv.innerHTML="Wrong Image File";
                errordiv.style.color = 'red';
        }
    }
         movie.onkeyup = function(){
            if(mregEx.test(movie.value) == true){
                index = index + 1;
                movie.style.color = 'green';
                errordiv.style.right = '600';
            }
            else{
                errordiv.style.right= 0;
                movie.style.color = 'red';
                errordiv.innerHTML="Incorrect Movie Title";
                errordiv.style.color = 'red';
        }
    }
             
         comment.onkeyup = function(){
            if(cregEx.test(comment.value) == true){
                index = index + 1;
                comment.style.color = 'green';
                errordiv.style.right = '600';
            }
            else{
                errordiv.style.right= 0;
                comment.style.color = 'red';
                errordiv.innerHTML="Incorrect Comment";
                errordiv.style.color = 'red';
        }
    }
         submit.onclick = function(){
            if((iregEx.test(image.value)== true && nregEx.test(name.value) == true)&&(cregEx.test(comment.value) == true && mregEx.test(movie.value)== true)){
                var newbox = document.createElement('div');
                topbox.appendChild(newbox);
                newbox.classname='newbox';
                newbox.style.width='40vw';
                newbox.style.height='30vh';
                newbox.style.border='2px solid';
                newbox.style.margin='auto';
                newbox.style.backgroundColor='rgba(255, 255, 255, 0.77)';
                var blankdiv = document.createElement('div');
                topbox.appendChild(blankdiv);
                blankdiv.classname='blankdiv';
                blankdiv.style.height='5vh';
                var imagepic = document.createElement('img');
                newbox.appendChild(imagepic);
                imagepic.classname='imagepic';
                imagepic.src = image.value;
                imagepic.style.width='5vw';
                imagepic.style.height='5vw';
                imagepic.style.display='inline-block';
                imagepic.style.borderRadius='6vw';
                imagepic.style.marginRight='20vw';
                var movieposter = document.createElement('img');
                newbox.appendChild(movieposter);
                movieposter.classname='movieposter';
                    $.ajax({
                    url:'http://www.omdbapi.com/?t='+movie.value,
                    dataType:'jsonp',
                    success:function(resp){
                    console.log(resp);
                    movieposter.src = resp.Poster;
                    movieposter.style.width='8vw';
                    movieposter.style.height='19vh';

                    }
                })
                var commentbox = document.createElement('h3');
                newbox.appendChild(commentbox);
                commentbox.style.border='2px solid';
                commentbox.innerHTML=comment.value;
                commentbox.style.backgroundColor='rgba(255, 255, 255, 0.77)';
                
                var namebox = document.createElement('h2');
                newbox.appendChild(namebox);
                namebox.style.marginRight='auto';
                namebox.innerHTML=name.value;
                namebox.style.backgroundColor='rgba(255, 255, 255, 0.77)';
                
                }
            else{console.log('not Good!')
                errordiv.style.right= 0;
                errordiv.innerHTML="Invalid field input";
                errordiv.style.color = 'red';
                }
         }
    
   
});
