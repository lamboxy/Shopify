<template>
  <div class="main">
        <div class="header">
        <a href="https://shopify.com">
                <img alt="Log in to Shopify" src="https://shopify-assets.shopifycdn.com/accounts/production/theme_configuration/logo/oauth_provider/merchant/logo.svg?v=1631025778">
        </a>
      </div>
    <h1 class ="heading">Create a Shopify ID</h1>
    <h3 class ="heading3">The ecommerce platform made for you</h3>

            <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
                
                    <div class="form-group col">
                        <p class="para">Email</p>
                        <Field name="email" type="text" class="input" :class="{ 'is-invalid': errors.email }" />
                        <p class="para2">{{errors.email}}</p>
                    </div>
               
                      <div class="row">
                        <div class="column">
                   
                        <p class="para">First Name</p>
                        <Field name="firstName" type="text" class="input2" :class="{ 'is-invalid': errors.firstName }" />
                        <p class="para2">{{errors.firstName}}</p>
                    </div>

                          <div class="column2">
                        <p class="para">Last Name</p>
                        <Field name="lastName" type="text" class="input2" :class="{ 'is-invalid': errors.lastName }" />
                        <p class="para2">{{errors.lastName}}</p>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group col">
                        <p class="para">Password</p>
                        <Field name="password" type="password" class="input" :class="{ 'is-invalid': errors.password }" />
                        <p class="para2">{{errors.password}}</p>
                    </div>
                    <div class="form-group col">
                        <p class="para">Confirm Password</p>
                        <Field name="confirmPassword" type="password" class="input" :class="{ 'is-invalid': errors.confirmPassword }" />
                        <p class="para2">{{errors.confirmPassword}}</p>
                    </div>
                </div>
               
                <div class="form-group">
                    <button submit class="button">Create Shopify ID</button>
                </div> 
                
            </Form>
             
          <p class="para">
                Already have a Shopify ID?
                <router-link  :to="{ name: 'login' }">Login</router-link>
                 </p>
          <footer class="footer">
        <a class="login-footer__link" target="_blank" href="https://help.shopify.com/en/manual/your-account/logging-in#desktop" title="Help Center">Help</a>  |
        <a class="login-footer__link" target="_blank" href="https://www.shopify.com/legal/privacy" title="Privacy Policy">Privacy</a>  |
        <a class="login-footer__link" target="_blank" href="https://www.shopify.com/legal/terms" title="Terms of service">Terms</a>
      </footer>
        </div>
   
</template>

<script>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

export default {
    components: {
        Form,
        Field,
    },
    setup() {
        const schema = Yup.object().shape({
            email: Yup.string()
                .required('Email is required')
                .email('Email is invalid'),
            firstName: Yup.string()
                .required('First Name is required'),
            lastName: Yup.string()
                .required('Last name is required'),
            password: Yup.string()
                .min(5, 'Your password must be at least 5 characters, and can’t begin or end with a space.')
                .required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm Password is required'),
        });

        const onSubmit = values => {
            // display form values on success
            alert('SUCCESS!! :-)\n\n' + JSON.stringify(values, null, 4));
        }

        return {
            schema,
            onSubmit
        };
    }
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
  margin-bottom: 50px;
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
    font-size: 16px;
}

.para2 {
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

.column {
  float: left;
  width: 48.5%;

}
.column2 {
  float: right;
  width: 48.5%;

}

.row:after {
  content: "";
  display: table;
  clear: both;
}
body {
	background-color: #C6DEFF;
	font-family: 'Ubuntu', sans-serif;}
    
.main {
	background-color: #FFFFFF;
	width: 450px;
	height:auto;
    padding-top: 80px;
    padding-right:40px;
    padding-left: 40px;
	margin: auto;
    position: absolute;
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
    
.input2{
  
	width: 100%;
	color:black;
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

.input2:focus{
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