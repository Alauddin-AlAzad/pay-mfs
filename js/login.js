
//from submit relodpage

document.getElementById('btn-login').addEventListener('click',function(event){
    event.preventDefault();  //vejal for beginner
    const phnNum=document.getElementById('phn-num').value;
    const pinNum=document.getElementById('pin-num').value;
    if(phnNum==='01823869466' && pinNum==='0177')
    {
        console.log("Login Succesfully");
    }
    else{
        alert("Invalid Username or Password")
    }
})