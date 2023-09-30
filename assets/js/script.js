let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
let inp = $('#input')
let outp = $('#output')
let mode1 = $('#mode1')
let mode2 = $('#mode2')
let mode3 = $('#mode3')
let mode = ''
let barBtn = $('#bar')
let checkMode = ()=>{
if (mode1.checked) {
    outp.innerHTML = inp.value.length
}
if (mode2.checked) {
    outp.innerHTML = btoa(inp.value)
}
if (mode3.checked) {
    outp.innerHTML = atob(inp.value)
}
}
inp.onkeyup = ()=>{
    console.log(mode)
    checkMode()
}
function copy(){
    outp.select()
    document.execCommand('copy')
}