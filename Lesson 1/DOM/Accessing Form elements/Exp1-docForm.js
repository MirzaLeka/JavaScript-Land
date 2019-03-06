
function func() {
    // we call form using keyword document, followed by form name:
    // document.firstForm

    console.log(document.firstForm.children); // returns HTML collection of elements within first form (input, input, button)

    // we can access value of the first input element using first index

    console.log(document.firstForm.children[0].value);

    // but we can also access the same value using document, followed by form name, followed by input name

    console.log(document.firstForm.username.value);

    // both previous statements will print value of first input tag withing first form
}
