=begin Building a program which takes a user's input , then builds a Hash from that input. 
Each key in the hash will be a word from the user , and the value willbe the number of times it occurs.

=end

puts "Please enter your Text: "
text = gets.chomp

words = text.split(" ")

frequencies = Hash.new(0)

words.each { |word| frequencies[word] += 1 }

frequencies = frequencies.sort_by {|a, b| b }

frequencies.reverse!

frequencies.each { |word, frequency| puts word + " " + frequency.to_s }
