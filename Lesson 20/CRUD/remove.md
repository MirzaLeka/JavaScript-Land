
As expected, **remove** is used for removing data.
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

Now let's use **remove** to remove a property. 

``` database.ref('age').remove(); ```

And we'll get an updated version of an object.

```
{
  name: 'Mirza',
  isSingle: true,
  location: {
    city: 'Sarajevo',
    country: 'Bosnia and Herzegovina'
  }
}
```

To wipe whole database we execute **remove** in the root. 
We can also use promises to confirm that data was removed.

``` 
  database.ref()
    .remove()
    .then(() => {
      console.log('All gone!');
    })
    .catch((e) => {
      console.log('Error occured: ', e);  
    });
```
