
// replace multiple params with an object

const category = 'tech';
const condition = 'new';
const shipping = 'free';

const filterOptions = {
	category, condition, shipping
}

function selectCategory(newCategory) {
	
	// before the change
	console.log(filterOptions);
	
	filterOptions.category = newCategory;
	FSS(filterOptions);
}

function FSS(obj) {
	// after the change
	console.log(obj);
}

selectCategory('furniture');
