function checkVowels(){
    const text = document.getElementBy('inputText').value;
    const vowelCount = 0;
    text = text.toLowerCase();
    for(let i = 0; i < text.length; i++){
        let char = text.chartAt(i);
        if(isVowel(char)){
            vowelCount++;
        }
    }
    const result = document.getElementById('result');
    result.textContent = "Total Vowels:" + vowelCount;
}

function isVowel(char){
    const vowels = ["a","e","i","o","u"];
    return vowels.includes(char);;
}