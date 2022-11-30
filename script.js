/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

const caesarCipher = (s, k) => {
    let newPhrase = '';
    let original = "abcdefghijklmnopqrstuvwxyz";
    let upperOrig = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    k = k % original.length;
    let rotated = original.slice(k) + original.slice(0, k);
    let upRot = upperOrig.slice(k) + upperOrig.slice(0, k);
    for(let i = 0; i < s.length; i++) {
        if (original.includes(s[i])) {
            let idx = original.indexOf(s[i]);
            newPhrase += rotated[idx]
        } else if (upperOrig.includes(s[i])) {
            let idx = upperOrig.indexOf(s[i]);
            newPhrase += upRot[idx]
        } else {
            newPhrase += s[i]
        }
        
    };
    console.log(newPhrase)
    return newPhrase;
}



/////////////////////////////////////////////////////////////////////////////
function caesarCipher(s, k) {
    const ALPHABETS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxy';
    let offset = k % 26;
    return s.split('').map(letter => ALPHABETS.includes(letter) ? ALPHABETS[ALPHABETS.indexOf(letter) + offset] : letter).join('');
}
