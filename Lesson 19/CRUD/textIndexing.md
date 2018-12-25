
### Text indexing

Text indexing allows us to searched through documents, as we would search through search bar.
Let's kick things of by create a new collection and store some data in it:

```db.createCollection('stores');```

```
db.stores.insertMany(
   [
     { _id: 1, name: "Java Hut", description: "Coffee and cakes" },
     { _id: 2, name: "Burger Buns", description: "Gourmet hamburgers" },
     { _id: 3, name: "Coffee Shop", description: "Just coffee" },
     { _id: 4, name: "Clothes Clothes Clothes", description: "Discount clothing" },
     { _id: 5, name: "Java Shopping", description: "Indonesian goods" }
   ]
)
```

We start by creating index. We'll create index for name and description attributes.

**Setup**

```db.stores.createIndex({name: 'text', description: 'text'});```
What this does is if we search for something, MongoDB will look for the name and the description attribute that matches that what we searched for.

**Search**

This is how you do search:
```db.stores.find({$text: {$search: 'Coffee'}});``` $text => search for text, $search => what are we wearching for (our text)
MongoDB will look for any document in the collection with the name or the description containing word 'Coffee'.

Output:
```
{ "_id" : 3, "name" : "Coffee Shop", "description" : "Just coffee" }
{ "_id" : 1, "name" : "Java Hut", "description" : "Coffee and cakes" }
```

**Search for multiple**

We can type in multiple words and Mongo will search for documents containing at least one of those words:
```db.stores.find({$text: {$search: 'Java Hut Coffee'}});```

Output:
```
{ "_id" : 3, "name" : "Coffee Shop", "description" : "Just coffee" }
{ "_id" : 1, "name" : "Java Hut", "description" : "Coffee and cakes" }
{ "_id" : 5, "name" : "Java Shopping", "description" : "Indonesian goods" }
```

**Score**

Score will rank all search results on how close were they related to text we searched for.

```
db.stores.find(
    { $text: { $search: 'Java Hut Coffee' } },
    { score: { $meta: 'textScore'} }
).sort(
    { score: { $meta: 'textScore' } }
);
```

Score tells us what are the most relevant entries. Like with google, the item on the top is the item with most relevance to the information provided (searched for).
Then we can do many things like sort and we're gonna sort by score.

```
Output:
{ "_id" : 1, "name" : "Java Hut", "description" : "Coffee and cakes", "score" : 2.25 }
{ "_id" : 3, "name" : "Coffee Shop", "description" : "Just coffee", "score" : 1.5 }
{ "_id" : 5, "name" : "Java Shopping", "description" : "Indonesian goods", "score" : 0.75 }
```
