
// function myFunction() {
//     var x = document.getElementById("mySelect").value;
//     document.getElementById("demo").innerHTML = "You selected: " + x;
//     fullSearch.category = x;
// }


const items = [
    { price: 40, date: 1000, text: 'Golf 4', category: 'cars' },
    { price: 50, date: 2000, text: 'Army men', category: 'toys' },
    { price: 60, date: 3000, text: 'Barbie doll', category: 'toys' },
    { price: 70, date: 4000, text: 'Pokeball', category: 'toys' },
    { price: 80, date: 5000, text: 'watch', category: 'furniture' },
    { price: 90, date: 6000, text: 'Golf 3', category: 'cars' },
    { price: 10, date: 7000, text: 'Gameboy', category: 'toys' },
    { price: 20, date: 8000, text: 'Chair', category: 'furniture' },
    { price: 30, date: 9000, text: 'Sony TV', category: 'tech' },
    { price: 40, date: 1000, text: 'Elit TV', category: 'tech' },
    { price: 50, date: 2000, text: 'Hyundai ix35', category: 'cars' },
    { price: 60, date: 3000, text: 'Ford Focus', category: 'cars' },
    { price: 70, date: 4000, text: 'Table', category: 'furniture' },
    { price: 80, date: 5000, text: 'Bed', category: 'furniture' }
];


!function() {

    const row = document.querySelector('.row');
    let sum = '';

    items.forEach(item => {
      sum+=  `<div class="col-sm-4">
            <div class="items">
              <h5>${item.text}</h5>
              <p>${item.category}</p>
            </div>
        </div>`
    });

    row.innerHTML = sum;
    
}();



function handleSubmit(event) {
    event.preventDefault();
    
    const category = document.getElementById("mySelect");
    const pickedCategory = category.options[category.selectedIndex].value;

    const sort = document.getElementById("sort");
    const sortOption = sort.options[sort.selectedIndex].value;

    const searchValue = event.target.search.value;

    // sort by price, date, text(asc/desc)?

    const filteredSearch = items.filter( item => item.text.toLowerCase().includes(searchValue.toLowerCase()) );
    const filterCategory = filteredSearch.filter(search => pickedCategory === 'all categories'? filteredSearch : search.category === pickedCategory );
    const filterSort = filterCategory.filter(() => sortOption === 'asc' ? filterCategory.sort() : filterCategory.sort().reverse() );
    
    console.log(filteredSearch);
    console.log(filterCategory);
    console.log(filterSort);

    const row = document.querySelector('.row');


}
