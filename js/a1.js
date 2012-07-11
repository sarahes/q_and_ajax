function sendRequest(answers, whichAnswer) {
    var xhr = new XMLHttpRequest();
    if (xhr) 
    {
        xhr.onreadystatechange = function() 
        { 
            displayResponse(xhr, whichAnswer);
        }
        xhr.open("GET", answers, true);
        xhr.send(null);
    }
}

function displayResponse(xhr, whichAnswer) 
{
    if (xhr.readyState == 4) 
    {
        if (xhr.status == 200 || xhr.status == 304) 
        {			
            if (whichAnswer == 'answer1')
            {
                var answerDiv1 = document.getElementById('answer1');	
                answerDiv1.innerHTML = "<h3>Answers: </h3>";
                answerDiv1.innerHTML += "<ol>";
                lines = xhr.responseText.split("\n");
                for(var i = 0; i <= lines.length; i++)
                {
                    if(lines[i].indexOf("q1*") != -1)
                    {	
                        answer = lines[i].substring(lines[i].indexOf("*") + 1);
                        answerDiv1.innerHTML += "<li>" + answer + "</li>";
                        
                    }
                }	
                answerDiv1.innerHTML += "</ol>";
            }
            if (whichAnswer == 'answer2')
            {
                var answerDiv2 = document.getElementById('answer2');	
                answerDiv2.innerHTML = "<h3>Answers: </h3>";
                answerDiv2.innerHTML += "<ol>";
                lines = xhr.responseText.split("\n");
                for(var i = 0; i <= lines.length; i++)
                {
                    if(lines[i].indexOf("q2*") != -1)
                    {	
                        answer = lines[i].substring(lines[i].indexOf("*") + 1);
                        answerDiv2.innerHTML += "<li>" + answer + "</li>";
                        
                    }
                }	
                answerDiv2.innerHTML += "</ol>";
            }
            if (whichAnswer == 'answer3')
            {
                var answerDiv3 = document.getElementById('answer3');	
                answerDiv3.innerHTML = "<h3>Answers: </h3>";
                answerDiv3.innerHTML += "<ol>";
                lines = xhr.responseText.split("\n");
                for(var i = 0; i <= lines.length; i++)
                {
                    if(lines[i].indexOf("q3*") != -1)
                    {	
                        answer = lines[i].substring(lines[i].indexOf("*") + 1);
                        answerDiv3.innerHTML += "<li>" + answer + "</li>";
                        
                    }
                }	
                answerDiv3.innerHTML += "</ol>";
            }
            if (whichAnswer == 'answer4')
            {
                var answerDiv4 = document.getElementById('answer4');	
                answerDiv4.innerHTML = "<h3>Answers: </h3>";
                answerDiv4.innerHTML += "<ol>";
                lines = xhr.responseText.split("\n");
                for(var i = 0; i <= lines.length; i++)
                {
                    if(lines[i].indexOf("q4*") != -1)
                    {	
                        answer = lines[i].substring(lines[i].indexOf("*") + 1);
                        answerDiv4.innerHTML += "<li>" + answer + "</li>";
                        
                    }
                }	
                answerDiv4.innerHTML += "</ol>";
            }
            if (whichAnswer == 'answer5')
            {
                var answerDiv5 = document.getElementById('answer5');	
                answerDiv5.innerHTML = "<h3>Answers: </h3>";
                answerDiv5.innerHTML += "<ol>";
                lines = xhr.responseText.split("\n");
                for(var i = 0; i <= lines.length; i++)
                {
                    if(lines[i].indexOf("q5*") != -1)
                    {	
                        answer = lines[i].substring(lines[i].indexOf("*") + 1);
                        answerDiv5.innerHTML += "<li>" + answer + "</li>";
                        
                    }
                }	
                answerDiv1.innerHTML += "</ol>";
            }
            if (whichAnswer == 'answer6')
            {
                var answerDiv6 = document.getElementById('answer6');	
                answerDiv6.innerHTML = "<h3>Answers: </h3>";
                answerDiv6.innerHTML += "<ol>";
                lines = xhr.responseText.split("\n");
                for(var i = 0; i <= lines.length; i++)
                {
                    if(lines[i].indexOf("q6*") != -1)
                    {	
                        answer = lines[i].substring(lines[i].indexOf("*") + 1);
                        answerDiv6.innerHTML += "<li>" + answer + "</li>";
                        
                    }
                }	
                answerDiv6.innerHTML += "</ol>";
            }
        
        }
        else if (xhr.status == 404) 
        {
            
        }
    }
}			

function show() 
{       
    var tag = this.getAttribute('id');
     
    if (tag == "all")
    {
        document.getElementById("t_html").setAttribute("class", "show");
        document.getElementById("t_css").setAttribute("class", "show");           
        document.getElementById("t_js").setAttribute("class", "show");
        document.getElementById("t_ajax").setAttribute("class", "show");
    }
    if (tag == "html")
    {
        document.getElementById("t_html").setAttribute("class", "show");
        document.getElementById("t_css").setAttribute("class", "hide");           
        document.getElementById("t_js").setAttribute("class", "hide");
        document.getElementById("t_ajax").setAttribute("class", "hide");        
    }
    if (tag == "css")
    {   
        document.getElementById("t_html").setAttribute("class", "hide");
        document.getElementById("t_css").setAttribute("class", "show");           
        document.getElementById("t_js").setAttribute("class", "hide");
        document.getElementById("t_ajax").setAttribute("class", "hide");
    }
    if (tag == "js")
    {
        document.getElementById("t_html").setAttribute("class", "hide");
        document.getElementById("t_css").setAttribute("class", "hide");           
        document.getElementById("t_js").setAttribute("class", "show");
        document.getElementById("t_ajax").setAttribute("class", "hide");
    }
    if (tag == "ajax")
    {
        document.getElementById("t_html").setAttribute("class", "hide");
        document.getElementById("t_css").setAttribute("class", "hide");           
        document.getElementById("t_js").setAttribute("class", "hide");
        document.getElementById("t_ajax").setAttribute("class", "show");
    }     
}
    
window.onload = function() 
{
    // add event listeners to answer buttons + send ajax request
    var answer1 = document.getElementById('q1');
    answer1.addEventListener('click', function(e) 
    {
        e.preventDefault();
        document.getElementById("answer1").setAttribute("class", "answer show");
        var whichAnswer = 'answer1';
        sendRequest(this.href, whichAnswer);
    }, false);

    var answer2 = document.getElementById('q2');
    answer2.addEventListener('click', function(e) 
    {
        e.preventDefault();
        document.getElementById("answer2").setAttribute("class", "answer show");
        var whichAnswer = 'answer2';
        sendRequest(this.href, whichAnswer);
    }, false);
    
    var answer3 = document.getElementById('q3');
    answer3.addEventListener('click', function(e) 
    {
        e.preventDefault();
        document.getElementById("answer3").setAttribute("class", "answer show");
        var whichAnswer = 'answer3';
        sendRequest(this.href, whichAnswer);
    }, false);
    
    var answer4 = document.getElementById('q4');
    answer4.addEventListener('click', function(e) 
    {
        e.preventDefault();
        document.getElementById("answer4").setAttribute("class", "answer show");
        var whichAnswer = 'answer4';
        sendRequest(this.href, whichAnswer);
    }, false);
    
    var answer5 = document.getElementById('q5');
    answer5.addEventListener('click', function(e) 
    {
        e.preventDefault();
        document.getElementById("answer5").setAttribute("class", "answer show");
        var whichAnswer = 'answer5';
        sendRequest(this.href, whichAnswer);
    }, false);	
    
    var answer6 = document.getElementById('q6');
    answer6.addEventListener('click', function(e) 
    {
        e.preventDefault();
        document.getElementById("answer6").setAttribute("class", "answer show");
        var whichAnswer = 'answer6';
        sendRequest(this.href, whichAnswer);
    }, false);
    
    //add event listeners for tag list to hide show certain questions
    document.getElementById('all').addEventListener('click',show,false);
    document.getElementById('html').addEventListener('click',show,false);
    document.getElementById('css').addEventListener('click',show,false);
    document.getElementById('js').addEventListener('click',show,false);
    document.getElementById('ajax').addEventListener('click',show,false);   
}
    
 
