# Introduction to Control Flow 

#1. How it works 

print "Integer please: "
user_num = Integer(gets.chomp)

if user_num < 0
  puts "You picked a negative integer!"
elsif user_num > 0
  puts "You picked a positive integer!"
else
  puts "You picked zero!"
end

#2. If 

if 1 < 2
print "I'm getting printed because 1 is less than 2!" #I'm getting printed because 1 is less than 2!
end



#3. Else 

if 1 > 2
print "I'm getting printed because 1 is less than 2!" 

else
print "That means i'll get printed!" 

end
#  1 > 2 = false, therefore else string is printed = That means i'll get printed!

#4. Elsif

if 1 < 2
print "I'm getting printed because 1 is less than 2!"

elsif 1 > 2
print "oh dear"

else
print "That means i'll get printed!"

end
#I'm getting printed because 1 is less than 2!

#5. Unless

hungry = false

unless hungry
  puts "I'm writing Ruby programs!"
else
  puts "Time to eat!"
end

# hungry is false , therefore the string is printed = I'm writing Ruby programs!



#Making Comparisons
#6. Equal or Not? 

is_true = 2 != 3

is_false = 2 == 3 

#7. Less Than or Greater Than

test_1 = 17 >= 16

test_2 = 21 < 30

test_3 = 9 >= 9

test_4 = -11 < 4

#8. Practice makes Perfect

# test_1 = 77 != 77
test_1 = false

# test_2 = -4 <= -4
test_2 = true

# test_3 = -44 < -33
test_3 = true

# test_4 = 100 == 1000
test_4 = false


#Boolean Operators 
#9. And 


=begin 
true && true # => true
true && false # => false
false && true # => false
false && false # => false
=end

# boolean_1 = 77 < 78 && 77 < 77
boolean_1 = false

# boolean_2 = true && 100 >= 100
boolean_2 = true

# boolean_3 = 2**3 == 8 && 3**2 == 9
boolean_3 = true

#10. Or
=begin
true || true # => true
true || false # => true
false || true # => true
false || false # => false
=end

boolean_1 = 2**3 != 3**2 || true
boolean_1 = true

boolean_2 = false || -10 > -9
boolean_2 = false

boolean_3 = false || false
boolean_3 = false

#11. Not 

=begin
!true # => false
!false # => true
=end

# boolean_1 = !true
boolean_1 = false

# boolean_2 = !true && !true
boolean_2 = false

# boolean_3 = !(700 / 10 == 70)
boolean_3 = false

#12. Combining Boolean Operators

=begin
(x && (y || w)) && z
=end

boolean_1 = (3 < 4 || false) && (false || true)
boolean_1 = true

boolean_2 = !true && (!true || 100 != 5**2)
boolean_2 = false

boolean_3 = true || !(true || false)
boolean_3 = true

#Review
#13. Nice Work!
#Nothing to write

#14. If, Else, and Elsif

a = 10
b = 11
if a < b
  print "a is less than b!"
elsif b > a
  print "b is less than a!"
else
  print "b is equal to a!"
end

# a is less than b! is printed


#15. Unless

problem = false
print "let use continue" unless problem


#16. Dare to compare

# test_1 should be false
test_1 = 10 > 20

# test_2 = should be false
test_2 = 10 == 1

# test_3 = should be true
test_3 = 8 != 10


#17. Billions of Booleans


# test_1 should be true
test_1 = ( 1 == 1 ) && ( 2 == 2 )

# test_2 = should be true
test_2 =  ( 1 == 2 ) || ( 2 == 2 )

# test_3 = should be false
test_3 = !( false ) && ( 2 > 3)
