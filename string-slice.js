//slice will cut out a certain part from a string
const lyrics = 'hush little baby dont you cry. everything gonna be alright';

//slice have to need start index and ending index
const parts = lyrics.slice(3, 9);
console.log(parts);

const parts2 = lyrics.substring(3, 9);
console.log(parts2);

//join
const lines = ['hush little baby dont you cry.', 'everything gonna be alright'];
const newLines = lines.join(':');
console.log(newLines);