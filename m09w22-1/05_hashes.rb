# hash in Ruby, objects, dictionaries, associative arrays
# collection of key/value pairs

user = {
  "username" => "jstamos",
  "password" => "1234",
}

# puts user
# puts user["username"]

# symbols => lightweight strings (primitive)

user = {
  :username => "jstamos",
  :password => "1234"
}

# puts user
# p user["username"] # nil
# puts user[:username] # jstamos

user = {
  username: "jstamos",
  password: "1234"
}

puts user
