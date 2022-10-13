const username="1' AND 1=1 (length(database())) \n \t = 8 --"
const password='==1 -- AND 1=1 {()} ++ UNION ALL SELECT FROM %6%'

const sanitizer=(username,password)=>{
   const newUsername=allFunc(username)
   const newPass=allFunc(password)
   console.log("The new username "+ newUsername + "and password " + newPass);
}
const allFunc=(s)=>{

    var newStr=s.replaceAll('"','')
    newStr=newStr.replaceAll("'","")
    newStr=newStr.replaceAll(' SELECT ','')
    newStr=newStr.replaceAll(' WHERE ','')
    newStr=newStr.replaceAll(' OR ','')
    newStr=newStr.replaceAll(' DROP ','')
    newStr=newStr.replaceAll(' AND ','')
    newStr=newStr.replaceAll(' UNION ','')
    newStr=newStr.replaceAll('--','')
    newStr=newStr.replaceAll('\n','')
    newStr=newStr.replaceAll('\t','')
    newStr=newStr.replaceAll('=','')
    newStr=newStr.replaceAll(';','')
    newStr=newStr.replaceAll('(','')
    newStr=newStr.replaceAll(')','')
    newStr=newStr.replaceAll('{','')
    newStr=newStr.replaceAll('}','')
    newStr=newStr.replaceAll('[','')
    newStr=newStr.replaceAll(']','')
    newStr=newStr.replaceAll('%','')
    newStr=newStr.replaceAll('+','')
    newStr=newStr.replaceAll(' ','')


    return newStr
}

sanitizer(username,password)