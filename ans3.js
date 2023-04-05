const urls = [
    "https://www.boredapi.com/api/activity",
    "https://www.boredapis.com/api/activity",
    "https://www.boredapis2.com/api/activity",
];

//empty object
let success = {
    data: [

    ],
    url:[

    ]
}

for (const [key, value] of Object.entries(urls)) {

    fetch(value)
    .then(function(response){
        //hanya terima status yang sukses
        if(response.status>=200 && response.status <=299){
            return response.json();
        } else{
            //throw error
            throw Error(response.statusText);
        }
        
    })
    .then(function(user){
        success.data = user;
        success.url = value;
        console.log(success);
    })
    .catch(function(error){
        // error ga dilakukan apa apa
    })
   
}

