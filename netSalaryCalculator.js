// When the netSalaryCalculator is declared it checks the month and annual rates 
function taxCalculator(grosssalary) {

let tax;
    // checks the monthtax and prints out the rates
    if (grosssalary <= 24000) {
       tax = grosssalary * 0.1;
    } else if (grosssalary<= 32333) {
      tax = grosssalary * 0.25;
    } else if (grosssalary > 32333) {
       tax = grosssalary * 0.3;
    }
   return tax ; 
}
    console.log(taxCalculator(70000));


 // NSSF RATES 
// //    NEW RATES

function netSalaryCalculator(pensionablepay) {
     if (pensionablepay <= 6000) {
         return print = "Tier:1"
     } else if (pensionablepay >=6001 && pensionablepay <= 18000) {
         return print = "Tier:2"
     }
 } 
         console.log(netSalaryCalculator(17000));




function netSalaryCalculator(maxcontribution) {
       if (maxcontribution === 400) {
             return print = "Pay Monthly";
         } else if (maxcontribution === 200) {
             return print = "Pay Biweekly";
         } else if (maxcontribution === 100) {
             return print = "Pay Weekly";
         }
     }
        console.log(netSalaryCalculator(400));

        // // When the netSalaryCalculator is declared it checks the other PAYE parameters    

function netSalaryCalculator(annuallmt) {

 
//s Personal Relief
   if (annuallmt === "ksh 28800") {
     return print = "Effective since 25 April,2020";
     // Insurance Relief
     } else if (annuallmt === "ksh 60000") {
        return print = "Effective since 1 January 2007";
    // Allowable Pension Fund Contribution
     } else if (annuallmt === "ksh 240000") {
       return print = "Effective since 1 January,2006";
     // Allowable HOSP Contribution
     } else if (annuallmt === "ksh 0") {
      return print = "Effective since 1 January,2021";
     // Affordable Housing Relief
     } else if (annuallmt === "ksh 108000") {
     return print = "Effective since 1 January 2018";
     // Allowable Owner Occupier Interest 
     } else if (annuallmt === "ksh 300000") {
      return print = "Effective since 1 January,2017";
     // Disability Exemption 
     } else if (annuallmt === "ksh 1800000") {
      return print = "Effective since 10 March,2018";
    }
    }
      console.log(netSalaryCalculator("ksh 300000"));




//When the netSalaryCalculator is declared it checks the grosspay
function netSalaryCalculator(grosspay) {
// Checks the grosspay amount and prints the Deduction amount
    if (grosspay <= 5999) {
        return print = "Deduction:150"
    } else if (grosspay >= 6000 && grosspay <= 7999) {
        return print = "Deduction:300"
    } else if (grosspay >= 8000 && grosspay <= 11999) {
        return print = "Deduction:400"
    } else if (grosspay >= 12000 && grosspay <= 14999) {
        return print = "Deduction:500"
    } else if (grosspay >= 15000 && grosspay <= 19999) {
        return print = "Deduction:600"    
    } else if (grosspay >= 20000 && grosspay <= 24999) {
        return print = "Deduction:750"   
    } else if (grosspay >= 25000 && grosspay <= 29999) {
        return print = "Deduction:850"     
    } else if (grosspay >= 30000 && grosspay <= 34999) {
        return print = "Deduction:900"    
    } else if (grosspay >= 35000 && grosspay <= 39999) {
        return print = "Deduction:950"   
    }else if (grosspay >= 40000 && grosspay <= 44999) {
        return print = "Deduction:1000"
    } else if (grosspay >= 45000 && grosspay <= 49999) {
        return print = "Deduction:1100"
    } else if (grosspay >= 50000 && grosspay <= 59999) {
        return print = "Deduction:1200"
    } else if (grosspay >= 60000 && grosspay <= 69999) {
        return print = "Deduction:1300"    
    } else if (grosspay >= 70000 && grosspay <= 79999) {
        return print = "Deduction:1400"   
    } else if (grosspay >= 80000 && grosspay <= 89999) {
        return print = "Deduction:1500"     
    } else if (grosspay >= 90000 && grosspay <= 99999) {
        return print = "Deduction:1600"    
    } else  {
        return print = "Deduction:1700"   
    }

}
console.log(netSalaryCalculator(100000));



