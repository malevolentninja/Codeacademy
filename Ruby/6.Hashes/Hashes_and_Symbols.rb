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

# 13. Dare to Compare

# 14 Becoming More Selective

# 15. More Methods , More Solutions
