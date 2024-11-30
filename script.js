function validate(){
let username = document.getElementById('username').value;
let password = document.getElementById('password').value;

if(username === 'Anuradha Singh' && password === 'Mahadev'){
  alert('Login Sucessful !');
}
else{
  alert('Incorrect password or username');
}

}
