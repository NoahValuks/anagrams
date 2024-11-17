Noah Valuks' Tech Test:

Using Jest to test functionality -- because that's what I'm most used to and therefore, given the timelimit, means I can concentrate more on the code/test writing.

I have chosen to use toLowerCase so that if someone was to capitalise either word, it would still work to test if they were anagrams. And this is reflected in the tests. However, this current solution doesn't take into consideration any special characters - we could fix this by using a replace on the strings.

I could make the solution less lines by doing the formatString logic in line to each string in areAnagrams but I was going for DRY code and also reusability. 

To run tests: 

run 'npm install' and then 'npm test'
