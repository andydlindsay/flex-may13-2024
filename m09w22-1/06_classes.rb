# keys are private by default, readable, writable, readable and writable

class Car
  def initialize(make, model, year)
    @make = make
    @model = model
    @year = year
  end

  # attr_reader :model
  # attr_writer :model
  attr_accessor(:year, :model, :make)

  # getter for make
  # def make
  #   return @make
  # end

  # # setter for make
  # def make= (new_value)
  #   @make = new_value
  # end
end

my_car = Car.new('Toyota', 'Tercel', 1986)

p my_car
p my_car.make()

my_car.make = 'Ford'

p my_car

p my_car.model
my_car.model = 'F150'

p my_car

p my_car.year
my_car.year = 2011

p my_car
