Noah Valuks' Tech Test:

Using Jest to test functionality -- because that's what I'm most used to and therefore, given the timelimit, means I can concentrate more on the code/test writing.

I have chosen to use toLowerCase so that if someone was to capitalise either word, it would still work to test if they were anagrams. And this is reflected in the tests. However, this current solution doesn't take into consideration any special characters - we could fix this by using a replace on the strings.
I also could make the function less lines by doing the formatString logic to each string in-line instead but I was aiming for DRY code and I like to make things easier to read.

To run tests: run 'npm test'