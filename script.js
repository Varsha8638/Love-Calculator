function calculateLove(){
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();
    

    if(name1==='' || name2===''){
        alert("Please enter both names.");


    }
    else{
        const loverPercentage = Math.floor(Math.random()*100);

        const result = document.getElementById("result");

        result.innerHTML = `${name1} and ${name2}'s love percentage: ${loverPercentage}%`;

        if(loverPercentage<30){
            result.innerHTML +="<br> Not a great match. Keeping Looking!";
        }
        else if(loverPercentage>=30 && loverPercentage<70){
            result.innerHTML+="<br> There is potential. Give it try!";
        }
        else{
            result.innerHTML+="<br> Great match. Love is in the air!";

        }
    }
}