num = 5

if num == 10
  puts "the number is 10"
elsif num > 10
  puts "the number is bigger than 10"
else
  puts "the number must be smaller than 10"
end # }

# falsey => false, nil

num = 8

# if (num != 10)
#   puts "the number is not 10"
# end

# unless (num == 10)
#   puts "the number is not 10"
# end

num = 10

# if (num == 10) console.log('the number is 10')

puts "the number is 10" if (num == 10)

sunny = false

puts "take an umbrella" unless sunny

puts sunny ? "sunny outside" : "not so sunny"
