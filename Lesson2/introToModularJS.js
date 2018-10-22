(function () {

    const people = {
        people: [],
        init() { // initializes everything
            this.catcheDom();
            this.bindEvents();
            this.render();
        },
        catcheDom() { // selects DOM elements
            this.el = document.querySelector("#peopleModule");
            this.$el = $("#peopleModule"); // we can only call jquery functions with $variables and $(element)
            this.button = this.el.querySelector('button');
            this.input = this.el.querySelector("input");
            this.ul = this.el.querySelector("ul");
            this.$ul = this.$el.find("ul"); // jquery alternative to delegate event
            this.template = this.el.querySelector("#people-template").innerHTML;
        },
        bindEvents() { // works with listeners
            this.button.addEventListener('click', this.addPerson.bind(this));
            this.$ul.delegate("i.del", "click", this.deletePerson.bind(this));
        },
        render() { // renders HTML
            let data = {
                people: this.people
            };
            this.ul.innerHTML = Mustache.render(this.template, data);
        },
        addPerson(value) { // adds elements to array
            this.people.push(value || this.input.value); // push value from input or function argument
            this.render();
            this.input.value = '';
        },
        deletePerson(e) {
            let $remove = $(e.target).closest("li");
            let i = this.$ul.find('li').index($remove);

            this.people.splice(i, 1);
            this.render();
        }
    }

    people.init();

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