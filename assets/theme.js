let theme = document.getElementById('theme');

theme.addEventListener('click',()=>{
    if(document.documentElement.classList.value =='dark'){
        document.documentElement.classList.remove('dark');
    }else{
        document.documentElement.classList.add('dark');
    }
})