// <<-----Age Calculator starts Here------->>
  const agecalculator = (currentyear, yourage) =>{
      let age = currentyear - yourage
      console.log("See your age below")
      return age
  }
  console.log("your age is ", agecalculator(2021,1998))

  // <<-----Age Calculator ends Here------->>



    // <<-----BMI Calculator starts Here------->>

  const bmicalculator = (bodyweight , bodyheight) =>{
      let a = bodyweight/(bodyheight*bodyheight)
      console.log(" See your BMI below")
      return a
  }
  console.log("your BMI is",bmicalculator(50,15) )

      // <<-----BMI Calculator ends Here------->>
