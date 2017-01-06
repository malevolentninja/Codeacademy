1. Why Methods? 
def prime(n)
  puts "That's not an integer." unless n.is_a? Integer
  is_prime = true
  for i in 2..n-1
    if n % i == 0
      is_prime = false
    end
  end
  if is_prime
    puts "#{n} is prime!"
  else
    puts "#{n} is not prime."
  end
end

prime(2)
prime(9)
prime(11)
prime(51)
prime(97)

2. Method Syntax

=begin
def welome 
puts "Welcome to Ruby!"
end
=end

def puts_1_to_10
  (1..10).each { |i| puts i }
end
puts_1_to_10 # Ignore this for now. We'll explain it soon!

3. Create Your Own

# Define your method below!


def greeting
    puts "greeting"
end



# Define your method above this line.

greeting # Ignore this for now. We'll explain
         # it in the next exercise!



4. Call it!

def array_of_10
  puts (1..10).to_a
end

array_of_10

5. Parameters and Arguments 

def cubertino(n) # defined with parameter n
  puts n ** 3
end

cubertino(8) # called with argument 8

6. Splat!

def cubertino(n) # defined with parameter n
  puts n ** 3
end

cubertino(8) # called with argument 8

7. Let's Learn Return 

def add(n, nn)
return n + nn
end

add(5, 7)

8. Practice Makes Perfect


def greeter(name) # method takes single string parameter
    return "Hello #{name}" # returns string "Greeting!"
end

def by_three?(number) # takes a single integer parameter
    if number % 3 == 0  # returns true if number is evenly divisible by three
        return true
    else
        return false    # if not return false
    end
end

by_three?(7) 

greeter("Joe")

=begin best practice to end method names that produce boolean values with a question mark.
=end


9. Blocks are Like Nameless Methods 

1.times do
  puts "I'm a code block!"
end

1.times { puts "As am I!" }

10. How blocks Differe from Methods

# method that capitalizes a word
def capitalize(string) 
  puts "#{string[0].upcase}#{string[1..-1]}"
end

capitalize("ryan") # prints "Ryan"
capitalize("jane") # prints "Jane"

# block that capitalizes each string in the array
["ryan", "jane"].each {|string| puts "#{string[0].upcase}#{string[1..-1]}"} # prints "Ryan", then "Jane"



11. Using Code Blocks

# The block, {|i| puts i}, is passed the current
# array item each time it is evaluated. This block
# prints the item. 
[1, 2, 3, 4, 5].each { |i| puts i }

# This block prints the number 5 for each item.
# (It chooses to ignore the passed item, which is allowed.)
[1, 2, 3, 4, 5].each { |i| puts 5 * i }

12. Introduction to Sorting 

my_array = [3, 4, 8, 7, 1, 6, 5, 9, 2]

# Call the sort! method on my_array below.
# my_array should then equal [1, 2, 3, 4, 5, 6, 7, 8, 9].

puts my_array.sort!

13. Foundations 

# library sorting code
books = ["Charlie and the Chocolate Factory", "War and Peace", "Utopia", "A Brief History of Time", "A Wrinkle in Time"]

# How might we sort! the books in alphabetical order? (Hint, hint)

puts books.sort!

14. The combined Comparison Operator 

book_1 = "A Wrinkle in Time"

book_2 = "A Brief History of Time"

book_1 <=> book_2

15. Getting Technical 

books = ["Charlie and the Chocolate Factory", "War and Peace", "Utopia", "A Brief History of Time", "A Wrinkle in Time"]

# To sort our books in ascending order, in-place
books.sort! { |firstBook, secondBook| firstBook <=> secondBook }

# Sort your books in descending order, in-place below

books = ["Charlie and the Chocolate Factory", "War and Peace", "Utopia", "A Brief History of Time", "A Wrinkle in Time"]

# To sort our books in ascending order, in-place
books.sort! { |firstBook, secondBook| firstBook <=> secondBook }

# Sort your books in descending order, in-place below

puts books.sort!{ |x,y| y <=> x}

16. Basic Methods 

def welcome
    puts "Welcome to Ruby!"
end

puts welcome


17. Methods with Arguments 

def welcome(name)
return "Hello, #{name}"
end

18. Blocks

my_array = [1, 2, 3, 4, 5]

my_array.each { |i| puts i * i}

19. Sorting

fruits = ["orange", "apple", "banana", "pear", "grapes"]

fruits.sort!{ |x,y| y <=> x}
