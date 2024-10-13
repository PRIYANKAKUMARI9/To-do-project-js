    const getinputbox=document.getElementById('input-box')
    const  getlicontainer=document.getElementById('li-container')
   
    function btnInput(){
        if(getinputbox.value === ''){
            alert("enter first somthing")
        }
        else{
            let li=document.createElement("li");
            li.innerHTML=getinputbox.value;
            getlicontainer.appendChild(li);
            let span=document.createElement("span");
            span.innerHTML='\u2716';
            li.appendChild(span)
        }
        getinputbox.value='';
    }

    getlicontainer.addEventListener('click',function(e){
       if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
       }
    })