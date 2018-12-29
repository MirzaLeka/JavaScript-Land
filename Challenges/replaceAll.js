
// Replace all characters in string that match criteria


let str = 'I love emojis :D ^_^ :D :D :) ;) :D';

const emojis = [
    {key: ':)', icon: '🙂'},
    {key: ':D', icon: '😀'},
    {key: ":'(", icon: '😢'},
    {key: ':(', icon: '😟'},
    {key: '>_<', icon: '😠'},
    {key: '^_^', icon: '😊'},
    {key: '._.', icon: '😐'},
    {key: ';)', icon: '😉'},
    {key: '8)', icon: '😎'},
    {key: '-_-', icon: '😑'},
    {key: ':o', icon: '😮'},
    {key: ':O', icon: '😯'},
    {key: '<3', icon: '💔'},
    {key: ':*', icon: '😗'},
    {key: ':/', icon: '😕'}
    ];


// Let's define a replaceAll function and write a logic
String.prototype.replaceAll = function(str1, str2, ignore) 
{
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
}

// Then we map through array, check if str includes a key and then replace all instances of that key with the proper emoji icon
emojis.map(emoji => {
    if (str.includes(emoji.key)) {
        console.log(emoji.icon);
        str = str.replaceAll(emoji.key, emoji.icon);
    }
});

document.write(str); // output: I love emojis 😀 😊 😀 😀 🙂 😉 😀


// Credits: qwerty, StackOverFlow
