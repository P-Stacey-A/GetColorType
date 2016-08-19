var getColorType = function(color){
  
   switch(color){
    case "red":
    case "blue":
    case "yellow": 
      return "The color " +color+ " is a primary color!";
      
    case "violet":
    case "green":
    case "orange":
      return "The color " +color+ " is a secondary color!";
      
    default:
      return "Sorry, I don't know that color."
   }
  
};

console.log(getColorType("green"));
