<script lang="ts">
    import { isAuthenticatedUser } from "../src/UserAuthetication.js";
    let name ;
    let password;
    function handleFormClick(){
         if(name =="NAGP" && password=="Default")
         {
            isAuthenticatedUser.update((n)=>true);
         }
         else
         {
            alert("please enter valid credentails");
         }
    }

</script>

<div class="root">
<div class="container">
    <div class="logo">Svelte Workshop</div>
    <div class="login-item">
      <div class="form form-login">
        <div class="form-field">
          <label class="user" for="login-username"><span class="hidden">Username</span></label>
          <input id="login-username" type="text" class="form-input" placeholder="Username" bind:value={name} required>
        </div>

        <div class="form-field">
          <label class="lock" for="login-password"><span class="hidden">Password</span></label>
          <input id="login-password" type="password" class="form-input" placeholder="Password" bind:value={password} required>
        </div>

        <div class="form-field">
          <button type="submit" on:click={handleFormClick} >Log In </button>
        </div>
    </div>
    </div>
</div>
</div>
<style type="css">

@import url('https://netdna.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.css');
@import url(https://fonts.googleapis.com/css?family=Lato:400,300,700);



.root {
/* Remember to use the other versions for IE 10 and older browsers! */
display: flex;
justify-content: center;
align-items: center;
min-height: 100%;
font-family: 'lato', sans-serif;
color: #fff;
}

.container {
  background: linear-gradient(to top, #16222A , #3A6073);
  border-radius: 5px;
  box-shadow: 0 1.5px 0 0 rgba(0,0,0,0.1);
  width:450px;
  display: flex;  
  flex-direction: column;
}

.logo{
  font-family: "museo-slab";  
  font-size:20px;
  text-align: center;
  padding: 20px 20px 0;
  margin:0;
}

.login-item {
	color: #ffff;
	padding:25px 25px 0;
	margin: 20px 20px 0;	
	border-radius: 3px;
}

input {
  border: 0;
  color: inherit;
  font: inherit;
  margin: 0;
  outline: 0;
  padding: 0;
  -webkit-transition: background-color .3s;
  transition: background-color .3s;
}

.user:before {
  content: '\f007';
  font: 14px fontawesome;
	color: #5b5b5b;
}

.lock:before {
  content: '\f023';
  font: 14px fontawesome;
	color: #5b5b5b;
}

.form input[type="password"], .form input[type="text"], .form  {
    width: 100%;
}

.form-login label,
.form-login input[type="text"],
.form-login input[type="password"],
.form-login button[type="submit"] {
  border-radius: 0.25rem;
  padding: 1rem;
  color: #3A3F44;  
}

.form-login label {
  background-color: #222222;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}

.form-login input[type="text"], .form-login input[type="password"] {
  background-color: #ffffff;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
.form-login input[type="text"]:focus, .form-login input[type="text"]:hover, .form-login input[type="password"]:focus, .form-login input[type="password"]:hover {
  background-color: #eeeeee;
}
.form-login button[type="submit"] {
  background-color: #00B9BC;
  color: #eee;
  font-weight: bold;
  text-transform: uppercase;
}
.form-login button[type="submit"]:focus, .form-login button[type="submit"]:hover {
  background-color: #197071;
}
.form-field {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 2rem;
}

button{
    width: 100%;
}


.hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}


</style>