const theme = document.getElementById('theme');
let body = document.body;
body.classList.add('dark-color');

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

//Css for Manual Theme Changing
// :root{
//     --color1: #001f85b4;
//     --color2: #070020d1;
//     --color3:#cfcfcfd1;
// }

// .dark-color{
//     background-color: var(--color2);
//     --btn-bg : var(--color3);
//     --border: var(--color3);
// }

// .light-color{
//     background-color: var(--color1);
//     --btn-bg : var(--color2);
//     --border: var(--color2);
// }

// #theme{
//     background: var(--btn-bg);
// }