const lyrics = 'hush little baby dont you cry everything gonna be alright'

const doesExist = lyrics.includes('baby');
console.log('baby is there', doesExist);

//to ignore case sensitive
const searchString = 'Hush';

//we have to convert both of compared element to lower case first
const lyricsLowerCase = lyrics.toLowerCase();
const searchStringLowerCase = searchString.toLowerCase();

//search in string
const isThere = lyricsLowerCase.includes(searchStringLowerCase);
console.log('there is hush ', isThere);

// if we want to do it one line
var search = 'alrighT';
const isPresent = lyrics.toLowerCase().includes(search.toLowerCase());
console.log('alright is present ', isPresent);



//--------------------------------------------------------------------------------------
//indexof

console.log(lyrics.indexOf('you'));

//msg print if available or not by index finding
if (lyrics.indexOf('you') !== -1) {
    console.log('is there');
}
else {
    console.log('cannot find');
}

//startswith will chcek if the string have started with the word
console.log('started with hush', lyrics.startsWith('hush'));

//endswith will chcek if the string/ file have ended with the word,it is used for checking file extension

console.log('ended with my', lyrics.endsWith('my'));

//another example
const filename = 'mypic.png';
console.log('ended with .png', filename.endsWith('.png'));