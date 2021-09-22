$('#adduser').submit(function(event){
    alert("Data inserted sucessfully")
})
$('#updateuser').submit(function(event){
    event.preventDefault()
    var array = $(this).serializeArray()
    console.log(array);
  

    var request={
        'url':'http://localhost:4000/updateuser/${array.id}',
        'method':'PUT',
        'data':array

    }
    $.ajax(request).done(function(response){
        alert("Data updated sucessfully ")
    })
})