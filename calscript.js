/*----  Get Value and Display Input  ----*/
outputresult = document.getElementById("output");
    
function display(numbers)
{
outputresult.value+=numbers;   
}

/*----  Calculate  Function    
function Calculate(){
try
  {
    outputresult.value = eval(outputresult.value);
  }
  
 catch (error)
  {
    alert("Invalid input ");
  }
}

/*----  Clear Function     
function clr()
{
  outputresult.value = ("");
}

/*----  Delete  Function  For oneby one   
function del()
{
  outputresult.value = outputresult.value.slice(0,-1);
}
 ----*/