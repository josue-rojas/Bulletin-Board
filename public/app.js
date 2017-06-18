function submitComment(){
  var title = document.getElementById("title").value;
  var body = document.getElementById("body").value;
  var dat = {"title":title, "body":body};
  //console.log(data);
  $.ajax({
    type:"POST",
    url:"/newmessage",
    processData: false,
    datatype:'json',
    contentType: 'application/json',
    data: JSON.stringify({"title":title, "body":body}),
    success:function(res){
      window.location = window.location; //refresh
  }
})
}


function deleteM(id){
  $.ajax({
    type:"POST",
    url:"/deletemessage/"+id,
    datatype:'json',
    contentType: 'application/json',
    data: JSON.stringify({"title":title, "body":body}),
    success:function(res){
      window.location = window.location; //refresh
  }
  })
}
