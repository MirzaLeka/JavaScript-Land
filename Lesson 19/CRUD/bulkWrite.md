
### Bulk actions

Bulk actions/writes are series of database requests combined into one request. We can insert document, update it, delete it, insert new one, all with one command.
Bulk action/write can only work for one collections.

```
db.students.bulkWrite(
    [
        {
            insertOne: {
                'document': {name: 'Mirza', age: 24}
            }
        },
        {
            updateOne: {
                filter: {name: 'Mirza'},
                update: {$set: {age: 25}}
            }
        },
        {
            replaceOne: {
                filter: {name: 'Mirza'},
                replacement: {name: 'Harvey Specter', age: 44}
            }
        },
        {
            deleteOne: {
                filter: {name: 'Mirza'}
            }
        }

    ]
);
```

Output:
```
      "acknowledged" : true,
        "deletedCount" : 0,
        "insertedCount" : 1,
        "matchedCount" : 2,
        "upsertedCount" : 0,
        "insertedIds" : {
                "0" : ObjectId("5c21866789f875a4da02cc6f")
        },
        "upsertedIds" : {

        }
```
With bulk write we can do more things at once.
