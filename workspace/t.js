function start(){
    var b = readLine("Fahrenheit to Celcius (F) or Celcius to Fahrenheit (C)? ");
    if (b == "F"){
        console.log(cel + "°C");
    } else if (b == "C"){
        console.log(fah + "°F");
    } else if (b != "F" || "C"){
        console.log("Input was not 'F' or 'C'. Please try again.");
    }

}

function fah(f){
    var f = readInt("Enter Fahrenheit: ");
    var celcius = (f - 32)*(5/9);
    return celcius;
}

function cel(c){
    var c = readInt("Enter Celcius: ");
    var fahrenheit = (c * (9/5)) + 32
    return fahrenheit;
}

start();