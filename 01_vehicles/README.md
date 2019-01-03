# Vehicles

### Total Points: 6.00

There are many different types of vehicles!  In this problem, create a class `'Vehicle'` that accepts an array as an argument.  The `'Vehicle'` class will return an object with the properties 'wheelTotal', 'energySource', 'manufacturer', and 'isOn'.  It will have additional access to a `'getSpec'` method that accepts a name of a property and returns the value at that property.

After the `'Vehicle'` class is created, create an additional class called `'Tesla'`.  The `'Tesla'` class will have all the properties as an instance of `'Vehicle'`, with its own unique properties such as 'milesPerCharge', 'model', 'chargePercentage', and 'minutesToCharge'.  All instances of `'Tesla'` will have access to the `'minutesToFullCharge'` method that calculates how long it will take the Tesla vehicle to reach 100 percent battery. (Note: the specs state the vehicle takes 100 minutes to charge, and the vehicle in the specs starts at 50%, use the equation 100 - chargePercentage to calculate the amount of minutes until a full charge, don't complicate the equation for any other edge cases).

**Use ES2015 Class Syntax**

Tip: Read the specs carefully!