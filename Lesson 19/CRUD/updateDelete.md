
### Update

**Update one record**

Updates all students with the name that matches criteria. We ue $set operator to set new value:
```
db.students.updateOne(
    {name: 'Mirza'}, // with this we grab the specific entry (filter it)
    {
        $set: 
        {
            name: 'ML'
        }
    }
);
```
Output: ```{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }```
Because we are using updateOne() this will only update one student, even if we have multiple students with the same name.

**Update Many**

With Update many we can update multiple records at once:

```
db.students.updateMany(
    {age: 23}, 
    {
        $set: 
        {
            age: 24
        }
    }
);
```

Output: ```{ "acknowledged" : true, "matchedCount" : 2, "modifiedCount" : 2 }```
Now all users with the age 23 have age 24.

**Replace One**

As they name says, we can replace attribute of one record that matches criteria.
```
db.students.replaceOne(
    {name: 'ML'}, 
    {name: 'Mike', age: 47}  
);
```

Output: ```{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }```

We will replace the record that matches the filter ```{name: 'ML'}``` with what we specified below.


### Delete

**Delete one**

To delete a record we use deleteOne():
```db.students.deleteOne({name: 'Amar'});``` Mongo will find record with this attribute and delete it

Output: ```{ "acknowledged" : true, "deletedCount" : 1 }```

**Delete Many**

We can select elements that match certain crieteria and delete those elements:
```db.students.deleteMany({age: {$gte: 28}});``` deleteMany with age equal or greater than 28

Output: ```{ "acknowledged" : true, "deletedCount" : 2 }```

**Delete All**

Similar to find all, to delete all documents in the collection we type:
```db.students.deleteMany({});```

Output: ```{ "acknowledged" : true, "deletedCount" : 4 }```
