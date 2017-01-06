#Building a simple method to handle sorting in reverse alphabetical order.

def alphabetize(arr, rev=false)
  if rev
    arr.sort { |item1, item2| item2 <=> item1 }
  else
    arr.sort { |item1, item2| item1 <=> item2 }
  end
end

books = ["Heart of Darkness", "Code Complete", "The Lorax", "The Prophet", "Absalom, Absalom!"]

puts "A-Z: #{alphabetize(books)}"
puts "Z-A: #{alphabetize(books, true)}"


# This way is sorting numerical data
def alphabetize(arr, rev=false)
    arr.sort!
    if rev == true
     arr.reverse!
    else
     arr
  end
end

numbers = [3, 2, 6, 9, 19]

puts alphabetize(numbers)

