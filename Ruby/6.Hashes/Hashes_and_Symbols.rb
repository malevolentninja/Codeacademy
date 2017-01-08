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


# 6. What's a Symbol?

# 7. Symbol Syntax

# 8. What are Symbols Used For?

# 9. Coverting Between Symbols and Strings

# 10. Many paths to the Same Summit 

# 11. All Aboard the Hash Rocket!

# 12. The Hash Rocket Has Landed 

# 13. Dare to Compare

# 14 Becoming More Selective

# 15. More Methods , More Solutions
