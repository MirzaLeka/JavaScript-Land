
# This file covers the most common regex commands

### Literal expressions

These expressions return exactly what we write down:

* /JACK/ = matches the exact word with __only__ uppercase letters
* /JACK/i = matches the exact word with both lowercase and uppercase letters

### Meta characters

We can use a set of characters to easily match the desired expressions:

* \d = matches any digit (number)
* \D = matches anything that's not a digit

* \w = matches any word
* \W = matches anything that's not a word

* \s = matches a space between words
* \S = matches anything that's not a space

* \. = matches dot
* $ = ends with
* ? = may or may not include character

----------------------------------------------------------------------------

* \w\w = matches any two letters words ('ab', 'cd', 'ca')
* \s\s = natcges two spaces between words ('hello  world')
* \d\d = matches any two digit number (11, 25, 34)
* \d{2} = matches two digit number

----------------------------------------------------------------------------

* /[a-z]/i = matches all letters a to z (lowercase and uppercase)
* /[0-9]/ = matches all numbers 0 to 9
* /jpg|jpeg|gif|png/ = matches selected file types
* \.(jpg|jpeg|gif|png)$ = matches all files that **end with** ($ sign) . followed by either selected file type
