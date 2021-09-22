$('#adduser').submit(function(event){
    alert("Data inserted sucessfully")
})


$("#updateuser").submit(function(event){
  
    event.preventDefault();
    var unindexed_array = $(this).serializeArray()
   
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })
    console.log(data);

var request = {
    "url":`http://localhost:4000/api/users/${data.id}`,
    "method":"PUT",
    "data":data
}

$.ajax(request).done(function(response){
    alert("Data updated sucessfully")
})
})

if(window.location.pathname=="/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id =$(this).attr("data-id")
        var request = {
            "url":`http://localhost:4000/api/users/${id}`,
            "method":"DELETE",
            
        } 
        if(confirm("do you really want to delete ")){
            $.ajax(request).done(function(response){
                alert("Data deleted sucessfully")
                location.reload()
            })
        }
    })
}