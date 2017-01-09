# 1. The Story So Far
my_hash = { "name" => 1 }

# 2. Iterating Over Hashes

matz = { "First name" => "Yukihiro",
  "Last name" => "Matsumoto",
  "Age" => 47,
  "Nationality" => "Japanese",
  "Nickname" => "Matz"
}

matz.each do |key, value|
  puts value, matz[value]
end

# 3. Nil: a Formal Introduction 

creatures = { "weasels" => 0,
  "puppies" => 6,
  "platypuses" => 3,
  "canaries" => 1,
  "Heffalumps" => 7,
  "Tiggers" => 1
}

creatures["animal"]


# 4. Setting Your Own Default

no_nil_hash = Hash.new("drafty")

# 5. A Key of a Different Colour. 
menagerie = { :foxes => 2,
  :giraffe => 1,
  :weezards => 17,
  :elves => 1,
  :canaries => 4,
  :ham => 1
}

# 6. What's a Symbol?

puts "string".object_id
puts "string".object_id

puts :symbol.object_id
puts :symbol.object_id

# 7. Symbol Syntax

my_first_symbol = :triangle_star

# 8. What are Symbols Used For?

symbol_hash = {
  :one => 1,
  :buds => 4,   
  :specops => 666,
}

# 9. Coverting Between Symbols and Strings

strings = ["HTML", "CSS", "JavaScript", "Python", "Ruby"]

symbols = [] # new variable, symbols, and store an empty array in it

strings.each do |x| # Use .each to iterate over the strings array.
    symbols.push(x.intern ) # use .push to add that new symbol to symbols.
end


# 10. Many paths to the Same Summit 

strings = ["HTML", "CSS", "JavaScript", "Python", "Ruby"]

symbols = [] # new variable, symbols, and store an empty array in it

strings.each do |x| # Use .each to iterate over the strings array.
    symbols.push(x.intern ) # use .push to add that new symbol to symbols.
end


# 11. All Aboard the Hash Rocket!

movies = {
    :A_fist_full_of_dollars => "Classic",
    :A_few_dollars_more   => "Classic",
}

# 12. The Hash Rocket Has Landed 

movies = {
 Mean_Girls: "classic chick-flick",
 Devil_Wears_Prada: "4.5 stars",
 Twilight: "Sparkly vampires suck"
}

# 13. Dare to Compare

require 'benchmark'

string_AZ = Hash[("a".."z").to_a.zip((1..26).to_a)]
symbol_AZ = Hash[(:a..:z).to_a.zip((1..26).to_a)]

string_time = Benchmark.realtime do
  100_000.times { string_AZ["r"] }
end

symbol_time = Benchmark.realtime do
  100_000.times { symbol_AZ[:r] }
end

puts "String time: #{string_time} seconds."
puts "Symbol time: #{symbol_time} seconds."

# 14 Becoming More Selective

movie_ratings = {
  memento: 3,
  primer: 3.5,
  the_matrix: 5,
  truman_show: 4,
  red_dawn: 1.5,
  skyfall: 4,
  alex_cross: 2,
  uhf: 1,
  lion_king: 3.5
}
# Add your code below!

good_movies = movie_ratings.select { |n,r| r>3}

# 15. More Methods , More Solutions

movie_ratings = {
  memento: 3,
  primer: 3.5,
  the_matrix: 3,
  truman_show: 4,
  red_dawn: 1.5,
  skyfall: 4,
  alex_cross: 2,
  uhf: 1,
  lion_king: 3.5
}
# Add your code below!

movie_ratings.each_key { |k| puts k }
