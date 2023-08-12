fetch("https://burgers1.p.rapidapi.com/burgers", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "burgers1.p.rapidapi.com",
		"x-rapidapi-key": "7e1082e15cmsh701a1750c023b6bp1f367ajsn55d9b8feacf6"
	}
})
.then(response => response.json())
 .then((mydata) => {
     var data1 = "";
    mydata.map((item) => {
         data1+= ` <p>${item.description}</p>
            <p>${item.name}</p>
            <p>${item.price}</p>
            <p>${item.web}</p>
         `
     })
     document.getElementById("root").innerHTML = data1;

    
 })
     