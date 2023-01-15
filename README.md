THESE ARE THE BRIEF DESCRIPTION THAT EXPLAINS THE REGEX PATTERN THAT I USED WHILE VALIDATING MY VISA CARD NUMBER

Useful Regex for Validating Proper Visa Card Numbers

Summary
Each credit card company uses different number structures, and it is important in your e-commerce platform to be able to match the expected credit card company with the appropriate card number structure. For each type of credit card you accept on your platform, you will need to include the appropriate Regex function to validate it. In this post, we'll go through the validation for the Visa card, which is the most commonly used card out there.

Table of Contents
Anchors
Quantifiers
Bracket Expressions
Grouping Constructs
Regex Components
Visa cards all start with 4 and contain either thirteen or sixteen digits. Here is the Regex function for validating a Visa card number (without spaces or dashes):

^4[0-9]{12}(?:[0-9]{3})?$
Anchors
In this expression, we have a starting and ending anchor:

^ The up-carrot indicates that the string should begin with a 4.

$ The dollar-sign indicates that the string should end once the other internal quantifiers, bracket expressions, and grouping constructs have been met.

Bracket Expressions
Now that we've determined what the first character needs to be, how do we determine what numbers to expect?

Square bracket expressions dictate a range of characters that are allowed at a certain point in an expected string. After our 4, we have a bracket expression of [0-9]. This ensures that the characters that follow the 4 may be any number between 0 and 9. You will see these appear twice in the expression.

Quantifiers
We also need to set some limits on how many characters, and exactly what kind of character to expect.

If we take a look back at our expression, we can see after the ^4[0-9] we have our first quantifier {12}

^4[0-9]{12}(?:[0-9]{3})?$
This {12} tells us that the preceeding pattern must repeat twelve times.

The 4 is excluded from this pattern since it's an anchor character.

Therefore, after the 4, there will be 12 more numbers between 0 and 9.

We also have a {3} after the second [0-9] bracket expression. This means there may be a further three digits after the initial thirteen.

Grouping Constructs
The reason we say there "may" be a further three digits is that Visa cards can have either thirteen or sixteen digits. To allow for these optional three digits, but still verify the rest of the card, we need to use a non-capturing group construct.

The entire last part of the expression is wrapped with question marks ? and (parenthesis).

(?:[0-9]{3})?
There are three distinct actions going on here:

The ( ) encapsulates those three digits in a group
The ? says to only match this pattern once or not at all
The : separates the parts of the function that are always required to match exactly versus the second half that is not
By doing this, we are telling the expression that these last three digits should not be captured or future reference. If a customer entered a valid credit card with only thirteen digits, without that : in the regex, it would always throw an error.

So in conclusion, we have a regex that accomplishes the following:

Allows for either 13 or 16 digits between 0 and 9
The first number must always be a 4
^4[0-9]{12}(?:[0-9]{3})?$
