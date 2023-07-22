b1=document.querySelector('#b1');
b2=document.querySelector('#b2');
b3=document.querySelector('#b3');
let b_1=0;
let b_2=0;
s1=document.querySelector('#s1');
s2=document.querySelector('#s2');
f=document.querySelector("#f");

b1.addEventListener('click',function(e){  
    list=document.querySelector('.select').value;
   
    let z=`${list}`;

    if(z == 0){
        alert("Please select no of wins first")
    }
else{
    if(b_1==z){
        alert("Player 1 Won");
        b_1=0;
        s1.innerText=`${b_1}`;
        f.reset();
        
     }

     else{
    b_1=b_1+1;
     s1.innerText=`${b_1}`;
     }
    
}})

b2.addEventListener('click',function(e){
    list=document.querySelector('.select').value;
     let z=`${list}`;
    if(z == 0){
        alert("Please select no of wins first")
    
    }
    else{
        if(b_2==z){
            alert("Player 2 Won");
            b_2=0;
            s2.innerText=`${b_2}`;
            f.reset();
         }
         else{
            b_2++;
    s2.innerText=`${b_2}`;
         }
    
}})

b3.addEventListener("click",function(e){
    s1.innerText=0;
    s2.innerText=0;
    b_1=0;
    b_2=0;
    f.reset();
   
})