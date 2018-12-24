
#### Before we can find something we need to have the documents inside a collection

**Find all**

Find all documents within the collection
```db.students.find({})```

Output:
```
{ "_id" : ObjectId("5c21392b89f875a4da02cc69"), "name" : "Mirza", "age" : 24 }
{ "_id" : 2, "name" : "Ermin", "age" : 23 }
{ "_id" : ObjectId("5c213b9689f875a4da02cc6a"), "name" : "Amar", "age" : 25 }
{ "_id" : ObjectId("5c213b9689f875a4da02cc6b"), "name" : "Emir", "age" : 21 }
{ "_id" : ObjectId("5c213b9689f875a4da02cc6c"), "name" : "Amila", "age" : 28 }
```

We can also *exclude* some properties. For example we can exclude ObjectId:
```db.students.find({}, {_id: 0})```

Output: 
```
{ "name" : "Mirza", "age" : 24 }
{ "name" : "Ermin", "age" : 23 }
{ "name" : "Amar", "age" : 25 }
{ "name" : "Emir", "age" : 21 }
{ "name" : "Amila", "age" : 28 }
```

**Limit results**

Let's set a limit to only 2 documents
```db.students.find({}, {_id: 0}).limit(2)```

Output: 
```
{ "name" : "Mirza", "age" : 24 }
{ "name" : "Ermin", "age" : 23 }
```

**Sort results**

We pick an attribute and then we tell Mongo to sort by that attribute. Let's sort students by name:
```db.students.find({}, {_id: 0}).sort({name: 1})```

Output:
```
{ "name" : "Amar", "age" : 25 }
{ "name" : "Amila", "age" : 28 }
{ "name" : "Emir", "age" : 21 }
{ "name" : "Ermin", "age" : 23 }
{ "name" : "Mirza", "age" : 24 }
```

Number 1 stands for *Ascending* order. This means documents will be sorted from A to Z for Strings and from smallest to largest numbers for Numbers.
Opposite of this would be -1 which stands for *Descending* order.

```db.students.find({}, {_id: 0}).sort({name: -1})```

Output:
```
{ "name" : "Mirza", "age" : 24 }
{ "name" : "Ermin", "age" : 23 }
{ "name" : "Emir", "age" : 21 }
{ "name" : "Amila", "age" : 28 }
{ "name" : "Amar", "age" : 25 }
```

**Sort by multiple attributes**

When sorting by multiple attributes Mongo will prioritize the first attribute over the second.
```db.students.find({}, {_id: 0}).sort({age: 1, name: 1})```

Output:
```
{ "name" : "Emir", "age" : 21 }
{ "name" : "Ermin", "age" : 23 }
{ "name" : "Mirza", "age" : 24 }
{ "name" : "Amar", "age" : 25 }
{ "name" : "Amila", "age" : 28 }
```

For example if two students have the same age and age is the first attribute, only then Mongo will look at the name and then decide which name matches criteria (which name comes first). Otherwise it would just sort by age.

We can prove this if we switch attributes. Notice that we have students with the same capital letter in their names. We can rearrange the list above if we include name and the age.
```db.students.find({}, {_id: 0}).sort({name: 1, age: 1})```

Output:
```
{ "name" : "Amar", "age" : 25 }
{ "name" : "Amila", "age" : 28 }
{ "name" : "Emir", "age" : 21 }
{ "name" : "Ermin", "age" : 23 }
{ "name" : "Mirza", "age" : 24 }
```

**Find document that matches criteria**

This can return multiple records, but since all of our students have different name and age, it will return only one.
```db.students.find({name: 'Mirza'}, {_id: 0})```

Output: ```{ "name" : "Mirza", "age" : 24 }```

You can search by passing multiple attributes like:
```db.students.find({ name : "Emir", age : 21 }, {_id: 0})```

Output: ```{ "name" : "Emir", "age" : 21 }```

The code above works like **And** => find students with name: name and age: age, but we can also use **Or** logic
```db.students.find({$or: [{name: 'Amila'}, {age: 21}]}, {_id: 0})``` 
This will return any student with the name Amila or age 21.

Output:
```
{ "name" : "Emir", "age" : 21 }
{ "name" : "Amila", "age" : 28 }
```

$or is MongoDB operator that provides an array of objects, where first object is option one and second is option two.

**Greater and Less than**

We can also set some conditions:
$gt = greater than
$lt = less than

The following will return all students with the age greater than 23
```db.students.find({age: {$gt: 23}}, {_id: 0})```

Output:
```
{ "name" : "Mirza", "age" : 24 }
{ "name" : "Amar", "age" : 25 }
{ "name" : "Amila", "age" : 28 }
```

Opposite of that would be the less than
```db.students.find({age: {$lt: 23}}, {_id: 0})```

Output: ```{ "name" : "Emir", "age" : 21 }```

There is one student with the age 23 and since 23 is nor greater not smaller than 23, this record will always be excluded.
For that reason we can use $lte which stands less than or equal to. We can do the same for $gt => $gte.
```db.students.find({age: {$lte: 23}}, {_id: 0})```

Output:
```
{ "name" : "Ermin", "age" : 23 }
{ "name" : "Emir", "age" : 21 }
```

**Equal operators**:

$eq = equal to
$ne = not equal to

**Return records based on attributes from the array**

We can use $in operator to return records with the names that we specifiy in the array
```db.students.find({name: {$in: ['Amar', 'Ermin']}}, {_id: 0});```

Output:
```
{ "name" : "Ermin", "age" : 23 }
{ "name" : "Amar", "age" : 25 }
```

Opposite of $in would be $nin which means return all records with the names that are *not* int the array.

**Return records that have certain attribute**

We can use $exists operator to check if attribute exists and then return students with that attribute.
```db.students.find({age: {$exists: true}}, {_id: 0});```

Output:
```
{ "name" : "Mirza", "age" : 24 }
{ "name" : "Ermin", "age" : 23 }
{ "name" : "Amar", "age" : 25 }
{ "name" : "Emir", "age" : 21 }
{ "name" : "Amila", "age" : 28 }
```

Because all students have age attribute.

**Return records with the attribute of a certain type**

We can search for all students with the name attribute type string:
db.students.find({name: {$type: 2}}, {_id: 0});

1 is a double,
2 is a string,
3 is an object

> See full list of types:
https://docs.mongodb.com/manual/reference/bson-types/