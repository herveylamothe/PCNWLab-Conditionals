/************************************
                README
*************************************/
/*
    * DO NOT USE LOOPS IF POSSIBLE
    * THESE *SHOULD* BE SOLVABLE BY BRUTE FORCE IF/ELSE/SWITCH STATMENTS
    * IF POSSIBLE, WRITE HELPER FUNCTIONS, THEY ARE YOUR FRIENDS
    * SOME ARE __HARD__ - YOU ASKED :)
*/


/*
    @function compareInts
    @param firstNum {number} 
    @param secondNum {number}
    @returns {boolean}
    @description compare firstNum with secondNum
                 if firstNume is greater than secondNum,
                    return true
                 TODO:
                    - validate the both firstNum and secondNum are indeed numbers
                        if not, attempt to coerce
                        if not coercable, return false
                    - validate that both firstNum and secondNum are both whole numbers
                        if not, turn them to whole numbers
                    - as a challenge - attempt to implement the validations above
                        in seperate functions that are invoked
    @example compareInts( 1,2 ); // false
*/

/*
    @function signOfProduct
    @param term1 {number}
    @param term2 {number}
    @param term3 {number}
    @returns {number}
    @description WITHOUT actually multiplying
                 attempt to determine the sign of the product
                 if negative, return -1
                 else return 1
                 TODO:
                    - if term1...term3 are not numbers, throw error
    @example signOfProduct(-5, 6, -4); // 1
*/

/*
    @function signOfProduct2
    @param term1 {number}
    @param term2 {number}
    @param term3 {number}
    @param shouldRetProd {boolean, false}
    @returns {number}
    @description same implementation as above but with
                 a default `shouldRetProd` param that is set to false
                 
                 IF it shouldRetProd is true, return NOT the sign but
                 instead the product itself (ok to perform product expression
                 in this instance)
    @example signOfProduct(-5, 6, -4, true); // 120
*/

/*
    @function anyUpperCase
    @param term {string}
    @returns {boolean}
    @description determine if the input string 
                 has any uppercase values in it
                 CHALLENGE:
                    - do not use any sort of loop to accomplish this
                    - can be done with only conditional statements and also
                        some string methods (hint, look up string methods)
    @example anyUpperCase('teSt'); // true
*/

/*
    @function isEmptyString
    @param term {string}
    @returns {boolean}
    @description determine if the input string is empty
                 we define emptiness to be any of the following:
                    - ''
                    - ' '
                    - '    ', you get the point
                    CHALLENGE: you don't need to use any sort of loops for this
*/

/*
    @function parseInt
    @param term {string}
    @returns {number}
    @description implement the parseInt method that is popularly implemented by
                 most longuages - but on your own!
                 
                 DO NOT USE PARSEINT...
                 
                 EASY MODE:
                    - assume the strings included are only SINGLE DIGIT, ie:
                            '5', '9', '17'
                    - in this mode, also assume only positive integers that are
                        also whole numbers
                
                HARD MODE:
                    - make no such assumptions about the nature of the string
                    - expect any kind of string, including:
                        '5' -> 5
                        '5628' -> 5628
                        '5.629' -> 5
                        '-67' -> -67
                        '5f' -> 5
                        'f473' -> NaN
                        '5e4' -> 5000
*/

/*
    @function validatePassword
    @param pw1 {string}
    @param pw2 {string}
    @return {boolean}
    @description given two password "input" attempts,
                 determine that:
                    - both pw1 and pw2 are equivalent
                    - both pw1 and pw2 is at least 8 characters long
                    - both pw1 and pw2 has at least 3 numbers
                    - both pw1 and pw2 has at least one special character (!@#$%^&*)
                    - both pw1 and pw2 has at least one uppercase character
*/

/*
    @function validateEmailAddress
    @param term {string}
    @return {boolean}
    @description given an input string, determine if the string is a valid email
                 in order for an email to be "valid", it must satisfy the following
                 conditions:
                    - has NO spaces
                          NO dashes (-)
                          NO pound signs (#)
                          NO asterisks (*)
                          NO percent symbols (%)
                          NO dollar signs ($)
                          NO exclamation points (!)
                          NO exponent signs (^)
                          NO ampersands (&)
                          NO parenthesis ()
                    - cannot start with a number
                    - must have an @ sign that is not the first three characters
                        of the string
                    - must have a user name that is at least three chars long
                        we define "user name" to be something like:
                            foo.bar@gmail.com
                        ^ in the case above, username would be foo.bar, it must
                        be longer than 3 characters
                    - must end in either:
                        - .com
                        - .net
                        - .co
                        (...for now)
*/

/*
    @function truthTableEvaluator
    @param P {boolean}
    @param evaluator {string}
    @param Q {boolean}
    @returns {boolean}
    @description
        let's implement a simple logic based truthtable evalulator
        P and Q are true/false
        - evaluator can be either:
            '^' (logical AND, conjunction)
            'v' (logical OR, disjunction)
            '->' (logical conditional, implication)
            '<->' (biconditional)
            more info: https://medium.com/i-math/intro-to-truth-tables-boolean-algebra-73b331dd9b94
        - implement the tables from medium based on the evaluator
            and assert that the correct result is returned
        - if incorrect inputs, throw error
            
*/







