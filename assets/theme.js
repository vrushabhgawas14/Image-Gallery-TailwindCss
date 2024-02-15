const theme = document.getElementById('theme');
let body = document.body;

theme.onclick = () =>{
    if (body.classList.value == 'dark-color') {
        body.classList.replace('dark-color','light-color');
        theme.innerHTML = 'Dark';
        theme.style.color = "#f5f5f5d1";
    }else{
        body.classList.replace('light-color','dark-color');
        theme.innerHTML = 'Light';
        theme.style.color = "black";
    }
}