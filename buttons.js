function toggleMenu() {
    if(document.getElementById('navbar').classList.contains('is-active')){
        document.getElementById('navbar').classList.remove('is-active');
    }else{
        document.getElementById('navbar').classList.add('is-active');
    }
}