
#### Rimraf allows you to delete files and folders with a help of package.json and npm.

* First of all we create a script in package.json folder, write script name, followed by "rimraf ./path"
I named this script "clean".

* This path can be file or folder we want to delete.

#### Setting rimraf for Javascript30 course

Let's delete **toDelete** folder in Rimraf lesson.

* First we need to find the path that leads us from root to this folder.

* The path will look like this *Lesson 30/Rimraf/toDelete*, but because we have a space in path, we need to wrap it around double quotes. We also need to use escape characters to tell package.json to ignore double quotes around the path. 
That being said our final script will look like this:
```  "clean": "rimraf \"Lesson 30/Rimraf/toDelete\"" ```

* Finally we can execute this command by typing ``` npm run clean ```, which will delete toDelete folder in Rimraf directory. 
