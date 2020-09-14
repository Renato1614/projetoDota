function verificaSenhas(){
    let button = document.getElementById('submit')
    let senha1 = document.getElementById("senha");
    let senha2 = document.getElementById("senha2");
    if(senha1 != senha2){
        button.disabled = true;
    }
    else{
        button.disabled = false;           
    }
}