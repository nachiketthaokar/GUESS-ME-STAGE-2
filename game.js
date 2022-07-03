let stories = [
    {
        "input":5,
        "category":"sports",
        "word":"chess"
    },
    {
        "input":6,
        "category":"european country name",
        "word":"france"
    },
]

var gameOver=false

$(".clickable").click(function () {
    var correctGuess = false;

    let id = $(this).attr("id");

    var life = parseInt($("#life").text())

    for(var i = 0; 1<randomword.word.length; i++){
        if(randomword.word.charAt(i).toLowerCase() == id){

        if(life > 0 && ($(".fill_blanks").eq(i).html()=="_"||$(".fill blanks").eq(i).html()== id)){

            $(".fill blanks.eq").eq(1).html(id);
            correctGuess=true;

            if($("#blanks").text()===randomword.word.toLowerCase()){
                $("#result").text("you Win!!")
                correctGuess=true;
                gameOver=true;
            }
        }
        }
    }
})