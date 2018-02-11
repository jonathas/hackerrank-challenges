/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vowelsList = ['a', 'e', 'i', 'o', 'u'];

    let word = s.split('');

    let vowels = word.filter(letter => vowelsList.indexOf(letter) !== -1);
    let consonants = word.filter(letter => vowelsList.indexOf(letter) === -1);

    vowels.map(vowel => console.log(vowel));
    consonants.map(consonant => console.log(consonant));
}