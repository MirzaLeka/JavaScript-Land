
While **once** picks up database data only *once*, we use **on** to listen (subscribe) to database changes.

Sample data

```
database.ref().set({
  name: 'Mirza',
  age: 25,
  isSingle: true,
  location: {
    city: 'Sarajevo',
    country: 'Bosnia and Herzegovina'
  }
});
```

Whenever database updates, **on**, will almost instantly display changes in our app.

```
database.ref().on('value', (snapshot) => {
  console.log(snapshot.val());
}, (e) => {
  console.log('Something went wrong ', e);
});
```

Here we are using Callbacks to retrieve the data from the Firestore database.
Since Promises can only be fired once, either to resolve or reject, we cannot use them for real-time changes.
That's why we're using Callbacks instead.


Now let's update the database and after every call, **on** will run and print the value of snapshot on line 22.

```
setTimeout(() => {
  database.ref('age').set(35);
}, 2000);

// after 2 seconds, age property will update to 35 and we'll see the changes immediately

setTimeout(() => {
  database.ref('age').set(45);
}, 2000);

// then after another 2 seconds data will change and we'll see the updated results again
```

To unsubscribe from data changes we use **off**.

```
setTimeout(() => {
  database.ref().off(); // Here we're unsubscribing to data changes
  database.ref('age').set(55); // but the data will change in the DB. We just won't see it on the sceen
}, 2000);
```

### Working with multiple subscriptions

When working with multiple subscriptions it's a good idea to store each subscription into a variable.

Create a subscription

```
const onValueChange = database.ref().on('value', (snapshot) => {
   console.log(snapshot.val());
});
```

Unsubscribe from the subscription by passing it's name into **off** function

``` database.ref().off(onValueChange); ```
