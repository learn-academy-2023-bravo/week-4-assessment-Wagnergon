# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

# Psuedo code
# Make a method called odd_or_even
# make the paramater a number
# use % modulator to determine if its even or odd
# if its odd return "is odd"
# if its even return "is even"
# remember to put end statements


# def odd_or_even (number)
#     if number % 2 == 0
#         return "is even"
#     else
#         return "is odd"
#     end
# end

# p odd_or_even(reposts1)
# output: "7 is odd"

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

#Psuedo code 
# make a method named remove vowels
# make the parameter a string
# declare another variable vowels = "aeiouAEIOU"
# make another variable named result 
# make the result = str.delete using the delete method
# pass the vowels into the str.delete(vowels)
# return result
# dont forget your end statements

# def delete_vowels(str)
#     vowels = "aeiouAEIOU"
#     result = str.delete(vowels)
#     return result
# end

# p delete_vowels(beatles_album1)
# output: "Rubbr Sl"



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'


#psuedocode
# make method called palindrome_checker
# make the argument a string
# make an if statement
# use the equality operator == 
# if str === str.reverse return "is a palindrome"
# else return false
# dont forget your end statements


# def palindrome_checker (str)
#     if str == str.reverse
#        return "#{str} is a palindrome"
#     else 
#        return "#{str} is not a palindrome"
#     end
# end

# p palindrome_checker(palindrome_tester1)

#output: "racecar is not a pallindrome"