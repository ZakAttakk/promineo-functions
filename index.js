var bestSellingAlbums = [
  [1956, "Harry Belafonte", "Calypso"],
  [1967, "The Monkees", "More of The Monkees"],
  [1968, "The Jimi Hendrix Experience", "Are You Experienced?"],
  [1974, "Elton John", "Goodbye Yellow Brick Road"],
  [1977, "Fleetwood Mac", "Rumours"],
  [1981, "REO Speedwagon", "Hi Infidelity"],
  [1983, "Michael Jackson", "Thriller"],
  [1985, "Bruce Springsteen", "Born in the U.S.A."],
  [1987, "Bon Jovi", "Slippery When Wet"],
  [1993, "Whitney Houston", "The Bodyguard"],
  [1996, "Alanis Morissette", "Jagged Little Pill"],
  [1997, "Spice Girls", "Spice"],
  [2000, "NSYNC", "No Strings Attached"],
  [2003, "50 Cent", "Get Rich or Die Tryin'"],
  [2009, "Taylor Swift", "Fearless"],
  [2011, "Adele", "21"],
];

// Above is an array of arrays.  Here are some ways that you can access its data:

var arrayItem = bestSellingAlbums[8];
console.log(arrayItem[1]); // This prints "Bon Jovi"

console.log(bestSellingAlbums[8][1]); // This also prints "Bon Jovi"

// Below is a function that accepts an array as an argument and returns a string:

function sayAlbumInfo(anArray) {
  var year = anArray[0];
  var artist = anArray[1];
  var album = anArray[2];

  return (
    "In " + year + " the best selling album was " + album + " by " + artist
  );
}

// #1: Make the console print "In 1974 the best selling album was Goodbye Yellow Brick Road by Elton John"



// #2: Write a For loop that uses the function above to print a similar statement for every single year/album/artist.



// #3: Now, instead of using your own loop, use the .map function to print a similar statement for every single year/album/artist.  (Use Google if need to be reminded of how to use .map on an array.)  It's OK if the statements are all grouped together as a new array.



// #4 Time to modify the function above.  Make it so that the function checks if the length of the incoming array is 3.  If its lenth IS 3, it should continue to return the same statement.  However, if its length is not 3, it should return "That array is not the correct format." Test that your new function works by un-commenting the two lines of code below:

// var badArray = ["Backstreet Boys", "Millennium"]
// console.log(sayAlbumInfo(badArray))


// #5: Write a new function called "findBestSellingAlbumByYear".  The function should accept a year (an integer) as an argument.  The inside of the function should have a For loop that loops through the array "bestSellingAlbums".  If the argument year matches one of the years in "bestSellingAlbums", then the function should return "The best selling album of that years was" and then it should say the album/artist.  If there is no matching year, the function should return "I don't know what the best selling album was for that year!"




console.log("**************************");


var newYorkCity = {
  population: 8804190,
  "Median home value": "$635,200",
  medianRent: "$1,489",
  povertyRate: "17.3%",
  "Pop per square mile": 29303,
  counties: [
    "Bronx (The Bronx)",
    "Kings (Brooklyn)",
    "New York (Manhattan)",
    "Queens (Queens)",
    "Richmond (Staten Island)",
  ],
  boroughPopulations: {
    bronx: 1472654,
    brooklyn: 2736074,
    manhattan: 1694263,
    queens: 2405464,
    staten: 495747,
  },
  settled: 1624,
  mayor: "Eric Adams",
  squareMiles: 472.43,
  calcManhattanPercentage: function () {
    var manhattanPercent = this.boroughPopulations.manhattan / this.population;
    console.log(manhattanPercent)
  },
  comparePopulation: function () {
    // empty function
  },
};

// Above is an object stored in the variable newYorkCity.  This is how you access items in an object:

console.log(newYorkCity.population) // This will print the population of NYC

console.log(newYorkCity["population"]) // This will also print the population oc NYC

// In both cases, "population" is an object KEY and 8804190 is an object VALUE

newYorkCity.calcManhattanPercentage() // This will call a function (AKA a "method") that is part of an object



// #6: Print NYC's median rent.



// #7: Print NYC's median home value and population per square mile.



// #8: Loop through NYC's counties and print each county's name.



// #9: Print Brooklyn's population.



// #10: Fix the .calcManhattanPercentage function so that manhattanPercent is returned as a percentage rounded to the nearest 2 decimal places (for instance: 12.34).  You might need to Google how to round decimals using JavaScript.



// #11: Finish writing the .comparePopulation method.  The method should accept a "city" and a "population" as arguments.  The method should should compare "population" to NYC's population.  If NYC's population is bigger, the method should return the statement "NYC is bigger than" the other city's name.  Otherwise, it should return the statement "NYC is smaller than " the other city's name.



// #12: CHALLENGE QUESTION - You can get all the keys of an object and save them as an array like this:

var objKeys = Object.keys(newYorkCity)

// You can loop through this array of KEYS to access all the VALUES of an object:

for (var i = 0; i < objKeys.length; i++) {
  
}

// In the loop above, print the VALUE of each object's key

