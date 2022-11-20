function Click_Main(){
    let Scores = +Score_value.value;
    Scores++;
    document.getElementById("Score_value").value = Scores
    document.getElementById("Score").value = document.getElementById("Score_value").value 
    console.log(Score_value.value)
}
function Click_Up(){
    let VScores = +VAuto_Score_value.value;
    let AScores = +Score_value.value;

    if(AScores >= VScores){
        AScores -= VScores
        document.getElementById("Score_value").value = AScores
        document.getElementById("Score").value = document.getElementById("Score_value").value 
        document.getElementById("VAuto_Score_value").value = VScores + 25
        
        let Scores = +Auto_Score_value.value;
        Scores++;
        document.getElementById("Auto_Score_value").value = Scores
        document.getElementById("Auto_Score").value = document.getElementById("Auto_Score_value").value 
        console.log(VAuto_Score.value)
    }
}
setInterval(function () {
    let Scores_Auto = +Auto_Score_value.value;
    let Scores = +Score_value.value + Scores_Auto;
    document.getElementById("Score_value").value = Scores
    document.getElementById("Score").value = document.getElementById("Score_value").value 
    console.log(Score_value.value)
},1000)
function Tab(item){
    if (item ==1 ){
        Main_Game.style.display = 'flex';
        Main_Upgrade.style.display = 'none';
    }else if (item == 2){
        Main_Upgrade.style.display = 'flex';
        Main_Game.style.display = 'none'
    }
}
$(document).mouseup( function (e) {
    if(e.target.id != 'menu'){
        $('#menu').css({
            'animation' : '1s reverse_menu'
        })
        $('#menu').fadeOut()
        $('#menu_up').css({
            'animation' : '1s reverse_menu'
        })
        $('#menu_up').fadeOut()
    }

 })
function Abre_(e){
    if(e == 0){
        if($('#menu').is(':hidden')){
            $('#menu').css({
                'animation' : '1s menu'
            })
            $('#menu').fadeIn();
        }
        else{
            $('#menu').css({
                'animation' : '1s reverse_menu'
            })
            $('#menu').fadeOut()
        }
    }
    else{
        if($('#menu_up').is(':hidden')){
            $('#menu_up').css({
                'animation' : '1s menu'
            })
            $('#menu_up').fadeIn();
        }
        else{
            $('#menu_up').css({
                'animation' : '1s reverse_menu'
            })
            $('#menu_up').fadeOut()
        }
    }
}