var arrayOfNames = [Smith, Keats, Moby, Jack];

var stringOfArray = "";
for(var i = 0; i < arrayOfNames.length; i++)
{
    stringOfArray += arrayOfNames[i] + ", ";
}

document.getElementById("something").textContent= stringOfArray;


// This is not the proper way to create an array of strings. Fix the array and it will work correctly. From Kenn.