
/* Try and Catch */

// Try and catch is used to handle runtime errors. That means code will run but it will fail at some point, like we dividing with zero
    // Parse time errors will prevent code from executing at all and will crash at start, like opening { and not closing it

// There are 4 principles of error handling
    // 1) try
    // 2) catch
    // 3) throw
    // 4) finnaly

// Example

    try{

        console.log("Start of try runs");

        // unicycle; // is not defined, thus this will fail

        console.log("End of try runs -- will never be executed");

    } catch (err) {

        console.log("Error has occured: " + err.stack);
      // err.stack will give you much more detailed error, while logging just err will print the following:
    // 'Error has occured: ReferenceError: unicycle is not defined'. That's our message above and what the error is. It's very clear.

    } finally {
        console.log("This code will execute anyway");
    }

    console.log("... Then execution continues");


    // We can create custom erros with throw

    
    let json = '{"age": 24}';

    try {
        let user = JSON.parse(json); // we parse data

        if (!user.name) { // if data doesn't include name key, we'll throw an error (this is custom error)
            throw new SyntaxError("Incomplete data: no name"); // SyntaxError is name of the error. message is the message inside ("")
        }

    } catch (e) {
        console.log("JSON error" + e.name); // e.name will be SyntaxError or we can just log out e and will get more detailed error
    }