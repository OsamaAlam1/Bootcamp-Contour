const dashTwixt2Evens = ((number) => {
   
  let result = " "
  let nums = String(number).split("")
  for(let num of nums){
    if(num % 2 == 0){
        result += (num + "-")
    }
  }
  return result
  })

  console.log(dashTwixt2Evens(1234561234));