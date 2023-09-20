/*let btn = document.getElementById('btn')
btn.addEventListener('click', function () {
    try {
        let value = document.getElementById('inputValue').value
        if(value == '') throw 'Age cant be blank'
        if(isNaN(value)) throw 'Age should be a number'

        console.log(value)

    } catch (error) {
        alert(error)
    }
    finally{
        console.log('I run no matter what happens')
    }
    
})*/


function getMonthName(mo) {
    mo--; // Adjust month number for array index (so that 0 = Jan, 11 = Dec)
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];
    if (months[mo]) {
      return months[mo];
    } else {
      throw new Error("InvalidMonthNo"); // throw keyword is used here
    }
  }
  
  try {
    // statements to try
    monthName = getMonthName(myMonth); // function could throw exception
  } catch (e) {
    monthName = "unknown";
    logMyErrors(e); // pass exception object to error handler (i.e. your own function)
  }