/*setting button*/
const button = document.querySelector(".submit-button");
button.addEventListener("click", validade);

/*setting error field*/
const name = document.getElementById("name");
const email = document.getElementById("email");
const mobileEmail = document.getElementById("mobile-email");
const mobileDdd = document.getElementById("ddd-column");
const mobilePhone = document.getElementById("phone-column");
const ddd = document.getElementById("ddd");
const phone = document.getElementById("phone");
const birth = document.getElementById("birth");
name.addEventListener("input", nameErrorCheck);
email.addEventListener("input", emailErrorCheck);
mobileEmail.addEventListener("input", mobileEmailErrorCheck);
mobileDdd.addEventListener("input", mobileDddErrorCheck);
mobilePhone.addEventListener("input", mobilePhoneErrorCheck);
ddd.addEventListener("input", dddErrorCheck);
phone.addEventListener("input", phoneErrorCheck);
birth.addEventListener("input", birthErrorCheck);

function validade(e){
/*getting objects*/
const form = document.getElementById("submit-form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const mobileEmail = document.getElementById("mobile-email");
const ddd = document.getElementById("ddd");
const mobileDdd = document.getElementById("ddd-column");
const mobilePhone = document.getElementById("phone-column");
const phone = document.getElementById("phone");
const birth = document.getElementById("birth");
const activeOutput1 = document.getElementById("active-output1");
const activeOutput2 = document.getElementById("active-output2");
const activeOutput3 = document.getElementById("active-output3");
const activeOutput4 = document.getElementById("active-output4");
const activeOutput5 = document.getElementById("active-output5");
const activeOutput6 = document.getElementById("active-output6");
const activeOutput7 = document.getElementById("active-output7");
const radio = document.getElementById("authorization-yes");
const radio2 = document.getElementById("authorization-not");
const mobileActiveOutput2 = document.getElementById("mobile-active-output2");

/*setting validation*/
if (name.value === ""){
activeOutput1.style.display = "block";	
activeOutput1.innerHTML = "Este campo é de preenchimento obrigatório";
}else{
activeOutput1.style.display = "none";	
activeOutput1.innerHTML = "";
}

if (email.value === ""){	
activeOutput2.innerHTML = "Este campo é de preenchimento obrigatório";
}else{	
activeOutput2.innerHTML = "";
}

if (ddd.value === ""){	
activeOutput3.innerHTML = "Digite o DDD!";
}else{	
activeOutput3.innerHTML = "";
}

if (phone.value === ""){	
activeOutput4.innerHTML = "Este campo é de preenchimento obrigatório";
}else{	
activeOutput4.innerHTML = "";
}

if (birth.value === ""){	
activeOutput7.innerHTML = "Este campo é de preenchimento obrigatório";
}else{	
activeOutput7.innerHTML = "";
}

/*setting mobile*/
if (mobileEmail.value === ""){	
mobileActiveOutput2.innerHTML = "Este campo é de preenchimento obrigatório";
}else{	
mobileActiveOutput2.innerHTML = "";
}

if (mobilePhone.value === ""){	
activeOutput6.innerHTML = "Este campo é de preenchimento obrigatório";
}else{	
activeOutput6.innerHTML = "";
}
if (mobileDdd.value === ""){	
activeOutput5.innerHTML = "0-9";
}else{	
activeOutput5.innerHTML = "";
}
/*submit form*/
e.preventDefault();
if ((activeOutput1.innerHTML == "") && (activeOutput2.innerHTML == "") 
&& (activeOutput3.innerHTML == "") && (activeOutput4.innerHTML == "") && 
   (activeOutput7.innerHTML == "") && (radio.checked == true || radio2.checked == true)){
form.submit();
}

if ((mobileActiveOutput2.innerHTML == "") && (activeOutput5.innerHTML == "") 
&& (activeOutput6.innerHTML == "")){
form.submit();
}

}


function nameErrorCheck(){
const activeOutput1 = document.getElementById("active-output1");
activeOutput1.style.display = "none";	
activeOutput1.innerHTML = "";
}
function dddErrorCheck(){
const activeOutput3 = document.getElementById("active-output3");
const ddd = document.getElementById("ddd");
var test = document.getElementById("ddd").value;
const form = document.getElementById("submit-form");	
activeOutput3.innerHTML = "";
if (/^[0-9\s]+$/gi.test(test)){
activeOutput3.innerHTML = "";
} else {
activeOutput3.innerHTML = "0-9";
}
}
function phoneErrorCheck(){
const activeOutput4 = document.getElementById("active-output4");
const phone = document.getElementById("phone");	
var test = document.getElementById("phone").value;
activeOutput4.innerHTML = "";

const user = phone.value.substring(0, phone.value.indexOf("9"));
const domain = phone.value.substring(phone.value.indexOf("9")+1, phone.value.length);
if ((/^[0-9-\s]+$/gi.test(test)) && (domain.length >=9)){
activeOutput4.innerHTML = "";
} else {
activeOutput4.innerHTML = "digite um número válido no formato 9+ 2222-2222";
}
}

function emailErrorCheck(){
const activeOutput2 = document.getElementById("active-output2");
const email = document.getElementById("email");
const user = email.value.substring(0, email.value.indexOf("@"));
const domain = email.value.substring(email.value.indexOf("@")+1, email.value.length);
if ((user.length >=1) &&(domain.search("@") ==-1) &&
(user.search("@") ==-1) && (domain.length >=1) &&
(user.search(" ") ==-1) && (domain.search(" ") ==-1) &&
(domain.indexOf(".")>=1) && (domain.lastIndexOf(".") < domain.length -1)
){
activeOutput2.innerHTML = "";
}else{
activeOutput2.innerHTML = "digite um email válido!";
}
}
function birthErrorCheck(){
const activeOutput7 = document.getElementById("active-output7");
const birth = document.getElementById("birth");
var test = document.getElementById("birth").value;	
activeOutput7.innerHTML = "";

const user = birth.value.substring(0, birth.value.indexOf[0]);
const domain = birth.value.substring(birth.value.indexOf[0]+1, birth.value.length);
if ((/^[0-9/\s]+$/gi.test(test)) && (domain.length >=10)){
activeOutput7.innerHTML = "";
} else {
activeOutput7.innerHTML = "digite um número válido no formato 00/00/0000";
}
}

function mobileEmailErrorCheck(){
const mobileActiveOutput2 = document.getElementById("mobile-active-output2");
const mobileEmail = document.getElementById("mobile-email");
const user = mobileEmail.value.substring(0, mobileEmail.value.indexOf("@"));
const domain = mobileEmail.value.substring(mobileEmail.value.indexOf("@")+1, mobileEmail.value.length);
if ((user.length >=1) &&(domain.search("@") ==-1) &&
(user.search("@") ==-1) && (domain.length >=1) &&
(user.search(" ") ==-1) && (domain.search(" ") ==-1) &&
(domain.indexOf(".")>=1) && (domain.lastIndexOf(".") < domain.length -1)
){
mobileActiveOutput2.innerHTML = "";
}else{
mobileActiveOutput2.innerHTML = "digite um email válido!";
}
}

function mobileDddErrorCheck(){
const activeOutput5 = document.getElementById("active-output5");
const ddd = document.getElementById("ddd-column");
var test = document.getElementById("ddd-column").value;	
activeOutput5.innerHTML = "";
if (/^[0-9\s]+$/gi.test(test)){
activeOutput5.innerHTML = "";
} else {
activeOutput5.innerHTML = "0-9";
}
}
function mobilePhoneErrorCheck(){
const activeOutput6 = document.getElementById("active-output6");
const phone = document.getElementById("phone-column");	
var test = document.getElementById("phone-column").value;
activeOutput6.innerHTML = "";

const user = phone.value.substring(0, phone.value.indexOf("9"));
const domain = phone.value.substring(phone.value.indexOf("9")+1, phone.value.length);
if ((/^[0-9-\s]+$/gi.test(test)) && (domain.length >=9)){
activeOutput6.innerHTML = "";
} else {
activeOutput6.innerHTML = "digite um número válido no formato 9+ 2222-2222";
}
}