# 1. Ruby is a delight

ruby_is_eloquent = true
ruby_is_ugly = false

puts "Ruby is eloquent!" if ruby_is_eloquent
puts "Ruby's not ugly!" unless ruby_is_ugly

# 2. A simpler 'if'

# Type your Ruby code below!
puts "Hi!" if true

# 3. The One-line Unless

# Type your Ruby code below!
puts "Hi!" unless false

# 4. One Good Turn Deserves a Ternary 

# Type your Ruby code below!
puts true ? "its true" : "its false"

# 5. When and Then: The Case Statement

puts "Hello there!"
greeting = gets.chomp

# Add your case statement below!
case greeting
    when 'English' then puts "Hello!"
    when 'French' then puts "Bonjour!"
    when 'German' then puts "Guten Tag!"
    when 'Finnish' then puts "Haloo!"
    else puts "I don't know that language!"
end

#6. Conditional Assignment

favorite_book = nil
puts favorite_book

favorite_book ||= "Cat's Cradle"
puts favorite_book

favorite_book ||= "Why's (Poignant) Guide to Ruby"
puts favorite_book

favorite_book = "Why's (Poignant) Guide to Ruby"
puts favorite_book
      
#7. Now You Try!
    
# Write your code on line 2!
favorite_language ||= "Ruby"
puts favorite_language
    
#8. Implicit Return 

 def multiple_of_three(n)
  n % 3 == 0 ? "True" : "False" # <----- removed return!
end

#9. Short-Circuit Evaluation 

 def a
  puts "A was evaluated!"
  return true
end

def b
  puts "B was also evaluated!"
  return true
end

puts a || b
puts "------"
puts a && b    
        
#10. The right tool for the job 

my_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
my_array.each{ |i| puts i if i % 2 == 0 }
        
#11. Up the Down Staircase

# Write your code below!
"L".upto("P") { |letter| puts letter }
        
# 12. Call and Response
    
age = 26

# Add your code below!

age.respond_to?(:next)
        
        
# 13. Being Pushy   
 
alphabet = ["a", "b", "c"]
alphabet << 'd' # Update me! - added concatenations operator

caption = "A giraffe surrounded by "
caption << "weezards!" # Me, too!       
        
        
# 14. String Interpolation
        
favorite_things = ["Ruby", "espresso", "candy"]

puts "A few of my favorite things:"

favorite_things.each do |thing|
puts "I love #{thing}!"
end        
        
 
# 15. One-Liners        
        
# original code lasted 3 lines: 
        if 1 < 2
  puts "One is less than two!"
end
        
#made one line:
puts "One is less than two!" if 1 < 2
        
# 16. The Ternary Operator     
 
 # original code lasted 5 lines: 
 if 1 < 2
  puts "One is less than two!"
else
  puts "One is not less than two."
end       
        
 # made one line: 
 
puts 1 < 2 ? "One is less than two!" : "One is not less than two."       
        
        
        
# 17. In Case of Many Options 
        
# if/else/if else statement
puts "What's your favorite language?"
language = gets.chomp

if language == "Ruby"
  puts "Ruby is great for web apps!"
elsif language == "Python"
  puts "Python is great for science."
elsif language == "JavaScript"
  puts "JavaScript makes websites awesome."
elsif language == "HTML"
  puts "HTML is what websites are made of!"
elsif language == "CSS"
  puts "CSS makes websites pretty."
else
  puts "I don't know that language!"
end
        
        
        
# Case statement
puts "What's your favorite language?"
language = gets.chomp
case language
when "Ruby" then
  puts "Ruby is great for web apps!"
when "Python" then
  puts "Python is great for science."
when "JavaScript" then
  puts "JavaScript makes websites awesome."
when "HTML" then
  puts "HTML is what websites are made of!"
when "CSS" then
  puts "CSS makes websites pretty."
else
  puts "I don't know that language!"
end
        
    
        
# 18. Conditional Assignment        
        
 favorite_animal ||= "Armadillo"       
        
        
# 19. Implicit Return        
        
def square(n)
    n * n # or n ** 2
end        
        
# 20. 'For' Shame! 
# for loop version 
for i in (1..3)
  puts "I'm a refactoring master!"
end
    
# using .times instead   
3.times do puts "I'm a refactoring master!" end    
