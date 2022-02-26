<template>

<div class="main">
    <div class="header">
        <a href="https://shopify.com">
                <img alt="Log in to Shopify" src="https://shopify-assets.shopifycdn.com/accounts/production/theme_configuration/logo/oauth_provider/merchant/logo.svg?v=1631025778">
        </a>
    </div>
    <h1 class ="heading">Log in</h1>
    <h3 class ="heading3">Continue to Shopify</h3>
    
	<form class="form1" method="post">
    <div class="Email">
	<p class="para">Email</p>
    <input class="input" type="text" align="left" placeholder="Email" name="Email" id="Email" required>
    </div>
    <button class="button">Next</button>
	</form> 
    <p class="para">
            New to Shopify?
            <router-link  :to="{ name: 'signup' }">Get started</router-link> 
    </p>
     <footer class="footer">
        <a class="login-footer__link" target="_blank" href="https://help.shopify.com/en/manual/your-account/logging-in#desktop" title="Help Center">Help</a>  |
        <a class="login-footer__link" target="_blank" href="https://www.shopify.com/legal/privacy" title="Privacy Policy">Privacy</a>  |
        <a class="login-footer__link" target="_blank" href="https://www.shopify.com/legal/terms" title="Terms of service">Terms</a>
      </footer>
 </div>   
</template>

<script>
export default {

}
</script>

<style scoped>

.heading {
    font-size: 24px;
    font-weight: 600;
    line-height: 1.5rem;
    text-align: left;
    padding-top: 40px;
}

.heading3 {
    font-size: 16px;
    font-weight: 400;
    color: #6d7175;
    line-height: 1.5rem;
    text-align: left;
    
}

.label {
    position: absolute;
    top:0;
    left:0;
    
}

.button {
  background-color:#008060 ; 
  border: none;
  color: white;
  width:100%;
  padding: 27.2px 44.8px ;
  text-align: center;
  text-decoration: none;
  font-weight: 700;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 6px;
}
.button:hover {
  filter: brightness(90%);
}

.para {
    margin:8px 0px 0px;
    text-align: left;
    font-size: 14px;
}
.footer{
    position: absolute;
    bottom: 0;
    right:0;
    padding-right: 40px;
    padding-left: 40px;
    padding-bottom: 40px;
}
img {
    display: block;
    max-width: 100%;
    width:117px;
    height:34px
}
body {
	background-color: #C6DEFF;
	font-family: 'Ubuntu', sans-serif;}
    
.main {
	background-color: #FFFFFF;
	width: 450px;
	height: 500px;
    padding-top: 80px;
    padding-right:40px;
    padding-left: 40px;
	margin: auto;
    position: fixed;
    left: 10%;
    top: 12%;
	border-radius: 1.5em;
	box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);}
    
.input{
    
	width: 100%;
	color: black;
    padding-right:40px;
    padding-left: 40px;
    margin-bottom: 10px;
	font-weight: 400;
	font-size: 16px;
	background: white;
	padding: 24px 16px 6px 12px;
	border-radius: 6px;
  border-style: solid;
	box-sizing: border-box;

}

.input:focus{
	border: 2px solid rgba(0, 0, 0, 0.18) !important;}

.submit {
	cursor: pointer;
	border-radius: 5em;
	color: #fff;
	background: linear-gradient(to right, #368BC1, #87AFC7);
	border: 0;
	padding-left: 40px;
	padding-right: 40px;
	padding-bottom: 10px;
	padding-top: 10px;
	font-family: 'Ubuntu', sans-serif;
	margin-left: 35%;
	font-size: 13px;
	box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);}
    
.forgot {
	text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);
	color: #87AFC7;
	padding-top: 15px;}
    
a {
	text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);
	color: #87AFC7;
	text-decoration: none}
    
@media (max-width: 600px) {
	.main {
	border-radius: 0px;
        }
}
</style>