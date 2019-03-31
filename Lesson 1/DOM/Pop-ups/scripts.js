
function callScripts() {

  // alert pop-up
  alert('Hey there!');

  // default prompt
  prompt('Here is default prompt and some text in it!');

  // prompt with default text
  prompt('Here is a default prompt with default text', 'Default'); 

  // save prompt text into variable
  let doing = prompt('How are you doing today?', 'great');

  // if you don't type anything and press OK, variable doing will have the default text 'great'
  // else it will be what ever you typed in

  // print value we entered in prompt
  alert(`You are doing ${doing}`);

  // if we deleted the default text, left an empty input and press OK, we'll get an empty text.
  // that's why i'll override the doing variable. If it's empty I'll say doing = 'great'
  if (!doing) {
    doing = 'great';
  }

  // default confirm
  confirm('Here is a default confirm pop-up');

  // confirm that matters
  if (confirm(`Confirm that you are doing ${doing}:`)) {
    // if you press OK you will get the following message
    alert('You confirmed it. Nice work!');
  }
}
