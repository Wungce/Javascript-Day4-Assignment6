const myObj = {

    apple: "red",
    ball: "round",
    cat: "meow",
    dog: "bone"
}


for (var property in myObj){
    console.log(myObj[property]);
}