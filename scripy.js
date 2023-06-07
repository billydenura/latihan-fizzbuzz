let btn = document.getElementsByTagName("button")
console.log(btn)
const keluaran = document.getElementsByClassName("hasil")

btn[0].addEventListener("click",function(){
    let number = document.getElementById("masukan").value
    const hasil = document.createElement("p")
    console.log(number)
    if(number%3==0 && number%5==0){
        hasil.innerHTML = "FizzBuzz"
        keluaran[0].append(hasil);
    }else if(number%5==0){
        hasil.innerHTML = "Buzz"
        keluaran[0].append(hasil);
    }else if(number%3==0){
        hasil.innerHTML = "Fizz"
        keluaran[0].append(hasil);
    }else{
        hasil.innerHTML = number
        keluaran[0].append(hasil);
    }
})