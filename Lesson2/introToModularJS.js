const people = (function () {

        let people =  [];

        // cache DOM
        let el = document.querySelector("#peopleModule");
        let $el = $("#peopleModule"); // we can only call jquery functions with $variables and $(element)
        let button = this.el.querySelector('button');
        let input = this.el.querySelector("input");
        let ul = this.el.querySelector("ul");
        let $ul = this.$el.find("ul"); // jquery alternative to delegate event
        let template = this.el.querySelector("#people-template").innerHTML;

        // bind events -- users can't access this
        button.addEventListener('click', addPerson); //no need to bind this. it's not an object anymore
        $ul.delegate("i.del", "click", deletePerson);

        _render(); // added _ to easier recognize the private variable

        let _render = () => { // renders HTML
            let data = {
                people: this.people
            };
            this.ul.innerHTML = Mustache._render(this.template, data);
        }
        let addPerson = (value) => { // adds elements to array
            // we need to check if value of person's name is string

            let name = (typeof value === "string") ? value : input.value;

            this.people.push(name); // push value from input or function argument
            this._render();
            this.input.value = '';
        }
        let deletePerson = (event) => {
            let i;
            if (typeof event === "number") {
                i = event; // if we pass in index as number, delete that index
            } else { // else delete onclick (x button)
                let $remove = $(e.target).closest("li");
                let i = this.$ul.find('li').index($remove);   
            }

            this.people.splice(i, 1);
            this._render();
        }

        return { // so user only can control the two methods that we're returning
            addPerson,
            deletePerson
        }
    
})();


/*  Since querySelectorAll nodeList doesn't support eventListeners, we need to iterate each item   */
    // var el = document.querySelectorAll('i.del');
    // el.forEach(item => {
    //     item.addEventListener('click', function () {
    //         alert('hello');
    //     }, false);
    // });

    // console.log(JSON.stringify(el));

/*  if element is not in DOM yet, this will prevent addListenerError
        if (this.del) {
         this.del.forEach(item => {
         item.addEventListener('click', alert("wada"));
            });       
                }
*/

/* Perhaps and alternative to mustache 

for each item
this.template.innerHTML = data

*/