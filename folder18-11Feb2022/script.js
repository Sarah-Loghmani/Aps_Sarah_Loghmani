const getTodos = (callBack) => {

  const request = new XMLHttpRequest(); //creat a request object

  request.addEventListener("readystatechange", function () {
    // console.log(this);
    if (this.readyState === 4 && this.status === 200) {
    //   console.log(request, request.readyState);
    //   console.log(this.responseText);
    const data = JSON.parse(this.responseText)
    callBack(data, undefined)
    } else if (this.readyState === 4) {
    //   console.log("could not fetch the data");
    callBack(undefined, "could not fetch the data");
    };
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  //*first arqument is the type of our request
  // get=> to get data
  // post=> to send data to
  //put & patch=> to update data
  //delete=> to delete data
  // *second argument is where to get data from ande where to send the request
  request.send();
};
getTodos((data, err)=>{
    console.log("callback is fired");
    // console.log(data, err);
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});

//* Hell callBack function

const getAutors = (resource, callback)=>{
    const request2 = new XMLHttpRequest();

    request2.addEventListener("readystatechange", ()=>{
        if(request2.readyState === 4 && request2.status === 200){
            const data = JSON.parse(request2.responseText)
            callback(data, undefined)
        }else if(request2.readyState === 4){
            callback(undefined, "could not fetch data");
        }
    })
    request2.open("GET", resource);
    request2.send();
};

getAutors("json/bill.json", (data, err)=>{
    console.log(data);
    getAutors("json/john.json", (data, err)=>{
        console.log(data);
        getAutors("json/smith.json", (data, err)=>{
            console.log(data);
        })
    })
})



  