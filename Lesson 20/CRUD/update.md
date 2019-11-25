
**Update** is for updating database.
Let's start by posting new data.

``` const database = firebase.database(); ```

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

Unlike **set**, **update** only works with objects. 

```
database.ref().update({
  name: 'Ermin',
  age: 24
});
```

We go to the root of our database and select the properties we wish to *update*. This will **not** override other values as it was the case with **set**.
The updated version will look like this:

```
{
  name: 'Ermin',
  age: 24,
  isSingle: true,
  location: {
    city: 'Sarajevo',
    country: 'Bosnia and Herzegovina'
  }
}
```

With **update** we can *update*, *add* new properties to our object and *delete* them by setting a value to null in the same query.

```
database.ref().update({
  name: 'Cama',  
  siblings: 1,
  isSingle: null
});
```

And we can see the output of our actions.

```
{
  name: 'Cama',
  age: 24,
  siblings: 1,
  location: {
    city: 'Sarajevo',
    country: 'Bosnia and Herzegovina'
  }
}
```

**update** only *updates* at the root level. When we use nested objects we need provide a reference location, otherwise we'll override whole nested object.

```
database.ref().update({
  'location/city': 'Kotorac'
});
```

And preview the changes.

```
{
  name: 'Cama',
  age: 24,
  siblings: 1,
  location: {
    city: 'Kotorac',
    country: 'Bosnia and Herzegovina'
  }
}
```
