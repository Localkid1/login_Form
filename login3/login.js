const isEmpty = str => !str.trim().length;

document.getElementById("name").addEventListener("input", function() {
  if( isEmpty(this.value) ) {
    console.log( "NAME is invalid (Empty)" )
  } else {
    console.log( `NAME value is: ${this.value}` );
  }
});