document.querySelector('#fname').addEventListener('blur',()=>{
const reg=/^[a-zA-Z]{2,10}$/;
const name=document.querySelector('#fname');
if(!reg.test(name.value)){
    document.querySelector('.emptyname').textContent="Enter the valid name"
}
else{
    document.querySelector('.emptyname').textContent=""; 
}


});
   
    document.querySelector('#zipcode').addEventListener('blur',()=>{
        const reg=/^[1-9][0-9]{5}$/;
        const name=document.querySelector('#zipcode');
        if(!reg.test(name.value)){
            document.querySelector('.emptyzip').textContent="Enter the Correct ZipCode";
        }
        else{
            document.querySelector('.emptyzip').textContent="";
        }
        
        
        
        });

    document.querySelector('#Email').addEventListener('blur',()=>{
            const reg=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
            const name=document.querySelector('#Email');
            if(!reg.test(name.value)){
                document.querySelector('.emptyemail').textContent="Enter the Valid Email Address";
            }
            else{
                document.querySelector('.emptyemail').textContent="";
            }
            
            
            
            });

            document.querySelector('#phone').addEventListener('blur',()=>{
                const reg=/^[6-9]{1}[0-9]{9}$/;
                const name=document.querySelector('#phone');
                if(!reg.test(name.value)){
                    document.querySelector('.emptyphone').textContent="Enter the Valid Phone Number";
                }
                else{
                    document.querySelector('.emptyphone').textContent="";
                }
                
                
                });      