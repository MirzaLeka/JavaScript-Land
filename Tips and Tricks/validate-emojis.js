// Validates if string includes Emojis

const dummy = '🇯🇵😀😀😀 company'

// const invalidChars = '$$$$';

// const res = dummy.replaceAll(/\p{Emoji}/gu, '-'); // '--'

// console.log(res)

if (dummy.match(/\p{Emoji}/gu)) {
    console.log('Emojis are not valid characters')
} else {
    console.log('all good')
}

// Log: Emojis are not valid characters


// Credits:
// https://www.wisdomgeek.com/development/web-development/javascript/how-to-check-if-a-string-contains-emojis-in-javascript/
