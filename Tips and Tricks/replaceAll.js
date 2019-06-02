
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
    {key: ':/', icon: '😕'},
    {key: ':P', icon: '😋'}
    ];


// We are extending String prototype with custom made replaceAll function where we'll write the logic
String.prototype.replaceAll = function(str1, str2, ignore) 
{
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
}

// Then we map through array
emojis.map(emoji => {

    if (str.includes(emoji.key)) { // check if str includes a key and then replace all instances of that key with the proper emoji icon
        console.log(emoji.icon);
        str = str.replaceAll(emoji.key, emoji.icon); // because extended replaceAll function is now available to all String type variables
    }
});

document.write(str); // output: I love emojis 😀 😊 😀 😀 🙂 😉 😀


// Credits: https://stackoverflow.com/a/6714233/7584952
