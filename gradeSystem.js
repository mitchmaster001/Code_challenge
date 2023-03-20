//when the teststudentGradeSystem is declared it has scores
function teststudentGradeSystem(score){

//categorises each student according to the scores

if (score > 79 && score <= 100){
    return grade ="A"
} else if (score >= 60 && score <=79){
    return grade ="B"
} else if (score  >= 49 && score <=59){
    return grade ="C"
} else if (score >=40 && score <=49){
    return grade ="D"
    //if the score is below the above least score is;
}else {
    return grade ="E"
}
}
console.log(teststudeGradeSystem(79))