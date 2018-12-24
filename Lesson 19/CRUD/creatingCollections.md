
### SQL vs NoSQL

Database = Database (DB for short)
Table = Collection

Data is stored in Javascript objects, formally referred as **Documents**.


### Start mongo

Open your terminal/cmd and type *mongo*

**Create DB in MongoDB**

```use myFirstDB``` // *use*, followed by database name
Output: ```switched to db myFirstDB```

**Create a collection**

```db.createCollection('users')``` // collection name should be lowercase
Output: ```{ "ok" : 1 }```

**Drop (delete) collection**

````db.users.drop();``` // *db*, followed by collection name, followed by *drop()* 
This will delete the collection we just created.
Output: ```true```

**If there are no collections in the db, db will be removed as well.**
