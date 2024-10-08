# block of code => do..end {}

i = 0

# loop do
#   i += 1
#   puts "hello, #{i}"

#   break if (i == 10)
# end

# while (i < 10) do
#   i += 1
#   puts "hello, #{i}"
# end

game_over = false

# while (!game_over) do

# end

# until (game_over) do

# end

names = ['alice', 'bob', 'carol']

# JS for..of => Ruby for..in

# for name in names do
#   puts "hello there #{name}"
# end

# names.forEach((name, index) => {})

# names.each do |name|
#   puts "hello #{name}"
# end

names.each_with_index do |name, index|
  puts "hello #{name} #{index}"
end
