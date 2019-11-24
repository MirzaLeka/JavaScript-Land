
We use **set** to POST new data to our database

``` const database = firebase.database(); ```

We can just set a string as our data.

``` database.ref().set('London'); ```

But more useful way to work with Databases is to use objects.

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

Now we created a user object in the root of the application. This completely overriden any previous data in the root.
So if we want to change a property and set a new value like this,

``` database.ref().set({ age: 35 }); ``` **INCORRECT**

this will completely wipe out previous data and replace it with object with property age equal to 35.
To avoid this, we use *ref* to reference the field we want to change.

``` database.ref('age').set({ age: 35 }); ``` **CORRECT**

And then we'll an updated version of our object that looks like this:

```
{
  name: 'Mirza',
  age: 35,
  isSingle: true,
  location: {
    city: 'Sarajevo',
    country: 'Bosnia'
  }
}
```

To update nested property we need to reffer to it's parent. If we want to update the city and write something like,

``` database.ref('location').set({ city: 'Tuzla' }); ``` **INCORRECT**

what we'll get is a new location object with a single property, *city*, set to *London*.
Much better way to achieve this is to use */* to reffer to a property inside property, rather then entire nested object.

``` database.ref('location/city').set('Tuzla'); ``` **CORRECT**

```
{
  name: 'Mirza',
  age: 35,
  isSingle: true,
  location: {
    city: 'Tuzla',
    country: 'Bosnia'
  }
}
```


As we've seen **set** can be used to add and update a property, but it can also be used to remove it.

``` database.ref('isSingle').set(null); ```

If we set a property of our object to null then that property will be **removed** from an object:

```
{
  name: 'Mirza',
  age: 35,
  location: {
    city: 'Tuzla',
    country: 'Bosnia'
  }
}
```

We can use promises and async await to confirm the action was executed.

```
database.ref().set({
  name: 'Mirza',
  age: 25,
  isSingle: true,
  location: {
    city: 'Sarajevo',
    country: 'Bosnia and Herzegovina'
  }
}).then(() => {
  console.log('Data is saved!');
}).catch((e) => {
  console.log('Something went wrong! ', e);
});
```
