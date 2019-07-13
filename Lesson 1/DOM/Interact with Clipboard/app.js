
function toggleDesignMode() {

  const { designMode } = document;

  /* When document.designMode is on, you can manipulate the DOM as any text file */  
  designMode === 'off' ? document.designMode  = 'on' : document.designMode = 'off';

  console.log(`Design mode: ${document.designMode.toUpperCase()}`);
}


function copyToClipboard() {

  /* Get the text field */
  const elemeent = document.getElementById("copyInput");
  
  /* Select the text field */
  elemeent.select();
  
  /* Copy the text inside the text field */
  document.execCommand("copy");
  
  /* Alert the copied text */
  console.log(`Copied the text: ${elemeent.value}`);
}


function cutToClipboard() {

  const elemeent = document.getElementById("cutInput");
  console.log(`Cut the text: ${elemeent.value}`);

  elemeent.select();
  document.execCommand("cut");
}


async function pasteFromClipboard() {

  // Pop-up will appear asking you to you for permission to access the clipboard for security reasons  
  const textFromClipboard = await navigator.clipboard.readText();

  const element = document.getElementById("pasteInput");
  element.focus();
  element.value = textFromClipboard
}


function checkCapsLock(event) {

  const warningMsg = document.getElementById('warning-msg');

   // If "caps lock" is pressed, display the warning message
   
  if (event.getModifierState("CapsLock")) {
    warningMsg.style.display = "block";
  } else {
    warningMsg.style.display = "none"
  }
}


function updateText(event) {

  // Execute command if user presses the SHIFT key
  if (event.keyCode == 16) {
    document.execCommand("bold");
  }

}
