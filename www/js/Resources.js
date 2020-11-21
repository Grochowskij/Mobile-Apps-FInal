/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

document.getElementById("home").addEventListener("click", function(){
    link("index");
});

document.getElementById("aleria").addEventListener("click", function(){
    link("Aleria");
});

document.getElementById("derin").addEventListener("click", function(){
    link("Derin");
});

document.getElementById("oak").addEventListener("click", function(){
    link("OakOfAges");
});

function link(location){
    window.location.href = location + ".html";
}
