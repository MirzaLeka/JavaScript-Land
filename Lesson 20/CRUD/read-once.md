
**once** is used to pick up data *once* and then close the connection.

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

To read a value from **once** we need to use promises. As a return result we'll get a paramater named
**snapshot** on which we can call *val()* method to print the value coming from the database.


Read at root level

```
database.ref()
  .once('value')
  .then((snapshot) => {
    console.log(snapshot.val());
  })
  .catch((e) => {
    console.log('Error fetching data ', e);
  });
```

Read just nested object

```
database.ref('location')
  .once('value')
  .then((snapshot) => {
    console.log(snapshot.val());
  })
  .catch((e) => {
    console.log('Error fetching data ', e);
  });
```


Read a property within nested object

```
database.ref('location/city')
  .once('value')
  .then((snapshot) => {
    console.log(snapshot.val());
  })
  .catch((e) => {
    console.log('Error fetching data ', e);
  });
```
