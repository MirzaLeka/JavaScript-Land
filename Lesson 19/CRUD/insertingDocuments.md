
### Datatypes
MongoDB uses *BSON* language, which is binary JSON. Here is a list of data types BSON supports:
* string ```Hello World```
* int ```141```
* double ```3.14```
* boolean ```true / false```
* array ```[1, 2, 3]```
* object ``` {key: value, key: value} ``` // we can store objects inside objects
* date ```new Date('<YYYY-nn-dd>')```
* object_id ```<ObjectId>``` // object_id is a special identifier for special entries, like SQL id
* no_value ```null```

There are additional data types like Timestamp, Binary Data, Regular expressions, JS Code, etc.

### Before we can store data in collection we must create a database, followed by collection

Open your terminal/cmd and type *mongo*
```use studentsDB``` // creates DB
```db.createCollection('students')``` // creates Collection


**Insert a single record into a collection**

```db.students.insertOne({name: 'Mirza', age: 24})```
Output: 
```
"acknowledged" : true,
"insertedId" : ObjectId("5c21392b89f875a4da02cc69") // id of the record we just inserted, unique indenifier
```

We can specify a custom ObjectId
```db.students.insertOne({_id: 2, name: 'Ermin', age: 23})```
Output: ```{ "acknowledged" : true, "insertedId" : 2 }```


**Insert many records at once**

What follows is an array of objects:
```
db.students.insertMany([ 
    {
        name: 'Amar',
        age: 25
    },
    {
        name: 'Emir',
        age: 21
    },
    {
        name: 'Amila',
        age: 28
    }
]);
```
Output: 
```
    "acknowledged" : true,
    "insertedIds" : [
         ObjectId("5c213b9689f875a4da02cc6a"), // id of each record we inserted
         ObjectId("5c213b9689f875a4da02cc6b"),
         ObjectId("5c213b9689f875a4da02cc6c")
    ]
```
