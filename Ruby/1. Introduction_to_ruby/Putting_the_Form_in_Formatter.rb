# A simple Ruby program to read a user's input and correct the capitalization. 


print "what's your first name?"
first_name= gets.chomp


print "what's your last name?"
last_name= gets.chomp
.capitalise!

print "what city are you from?"
city = gets.chomp
.capitalise!

print "what state are you from?(abbreviate please)"
state =  gets.chomp
.upcase

print "what's your first name?"
first_name= gets.chomp
.capitalise!
puts "Your name is #{first_name}!"

print "what's your last name?"
last_name= gets.chomp
.capitalise!
puts "Your last name is #{last_name}!"

print "what city are you from?"
city = gets.chomp
.capitalise!
puts "You live in #{city}!"

