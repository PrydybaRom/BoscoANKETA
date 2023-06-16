
document.getElementById('sends').onclick = cheakRadio;

function cheakRadio(){
    let stoliar = 0;
    let mechanik = 0;
    let people = 0;
    let programer = 0;
    let cook = 0;

    let answerOne = document.getElementsByName('one');
    let answerTwo = document.getElementsByName('two');
    let answerThree = document.getElementsByName('three');
    let answerFour = document.getElementsByName('four');
    let answerFive = document.getElementsByName('five');
    let answerSix = document.getElementsByName('six');
    let answerSeven = document.getElementsByName('seven');
    let answerEight = document.getElementsByName('eight');
    let answerNine = document.getElementsByName('nine');
    let answerTen = document.getElementsByName('ten');
    let answerEleven = document.getElementsByName('eleven');
    let answerTwelve = document.getElementsByName('twelve');
    let answerThirteen = document.getElementsByName('thirteen');
    let answerFourteen = document.getElementsByName('fourteen');
    let answerFiveteen = document.getElementsByName('fiveteen');
    let answerSixteen = document.getElementsByName('sixteen');
    let answerSeventeen = document.getElementsByName('seventeen');
    let answerEighteen = document.getElementsByName('eighteen');
    let answerNineteen = document.getElementsByName('nineteen');
    let answerTwenty = document.getElementsByName('twenty');

    // document.querySelector('.window_to_profesion').innerHTML = answer[i].value;

    for (let i = 0; i < answerEleven.length; i++){
        if (answerOne[i].checked){
            if (answerOne[i].value == '1a'){
                stoliar++;
            }
            else{
                mechanik++;
            }
        }

        if (answerTwo[i].checked){
            if (answerTwo[i].value == '2a'){
                people++;
            }
            else{
                programer++;
            }
        }

        if (answerThree[i].checked){
            if (answerThree[i].value == '3a'){
                cook++;
            }
            else{
                stoliar++;
            }
        }

        if (answerFour[i].checked){
            if (answerFour[i].value == '4a'){
                mechanik++;
            }
            else{
                people++;
            }
        }

        if (answerFive[i].checked){
            if (answerFive[i].value == '5a'){
                programer++;
            }
            else{
                cook++;
            }
        }

        if (answerSix[i].checked){
            if (answerSix[i].value == '6a'){
                stoliar++;
            }
            else{
                people++;
            }
        }

        if (answerSeven[i].checked){
            if (answerSeven[i].value == '7a'){
                cook++;
            }
            else{
                mechanik++;
            }
        }

        if (answerEight[i].checked){
            if (answerEight[i].value == '8a'){
                people++;
            }
            else{
                cook++;
            }
        }

        if (answerNine[i].checked){
            if (answerNine[i].value == '9a'){
                mechanik++;
            }
            else{
                programer++;
            }
        }

        if (answerTen[i].checked){
            if (answerTen[i].value == '10a'){
                stoliar++;
            }
            else{
                programer++;
            }
        }

        if (answerEleven[i].checked){
            if (answerEleven[i].value == '11a'){
                stoliar++;
            }
            else{
                mechanik++;
            }
        }

        if (answerTwelve[i].checked){
            if (answerTwelve[i].value == '12a'){
                people++;
            }
            else{
                programer++;
            }
        }

        if (answerThirteen[i].checked){
            if (answerThirteen[i].value == '13a'){
                cook++;
            }
            else{
                stoliar++;
            }
        }

        if (answerFourteen[i].checked){
            if (answerFourteen[i].value == '14a'){
                mechanik++;
            }
            else{
                people++;
            }
        }

        if (answerFiveteen[i].checked){
            if (answerFiveteen[i].value == '15a'){
                programer++;
            }
            else{
                cook++;
            }
        }

        if (answerSixteen[i].checked){
            if (answerSixteen[i].value == '16a'){
                stoliar++;
            }
            else{
                people++;
            }
        }

        if (answerSeventeen[i].checked){
            if (answerSeventeen[i].value == '17a'){
                cook++;
            }
            else{
                mechanik++;
            }
        }

        if (answerEighteen[i].checked){
            if (answerEighteen[i].value == '18a'){
                people++;
            }
            else{
                cook++;
            }
        }

        if (answerNineteen[i].checked){
            if (answerNineteen[i].value == '19a'){
                mechanik++;
            }
            else{
                programer++;
            }
        }

        if (answerTwenty[i].checked){
            if (answerTwenty[i].value == '20a'){
                stoliar++;
            }
            else{
                people++;
            }
        }
    }
    // alert(`S-${stoliar}, M-${mechanik}, P-${people}, IT-${programer}, K-${cook}`)
    document.querySelector('.res').innerHTML = `Дякую, що пройшли анкетування!`;
    document.querySelector('.res2').innerHTML = `Професія, яка набрала найбільшу кількість балів є найбільш відповідною до Ваших інтересів.`;
    document.querySelector('.profesion1').innerHTML = `Столяр - ${stoliar}`; 
    document.querySelector('.profesion2').innerHTML = `Автомеханік - ${mechanik}`;
    document.querySelector('.profesion3').innerHTML = `Людина - ${people}`;
    document.querySelector('.profesion4').innerHTML = `IT-Розробник - ${programer}`;
    document.querySelector('.profesion5').innerHTML = `Kухар - ${cook}`;
}


