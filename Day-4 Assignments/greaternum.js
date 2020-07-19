'use strict';
function Number(num) {
    if (num > 100 || num <100) {
      return true || false;
    } else {
      return confirm('You enter number is greater than 100');
    }
  }
  
  let num = prompt('Enter the Number?');
  
  if ( Number(num) ) {
    alert( 'Access granted' );
  } else {
    alert( 'Access denied' );
  }