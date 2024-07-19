function validationform(){
    var fname=document.validateform.fname.value;
    var lname=document.validateform.lname.value;
    var city=document.validateform.city.value;
    var num=document.validateform.num.value;
    var address=document.validateform.address.value;
    if(fname==null||fname==""||lname==null||lname==""){
        alert("Name shouldn't be blank");
        return false;
    }
    else if(address==null||address==""){
        alert("Fill the address");
        return false;
    }
    else if(num.length<10){
        alert("Enter proper Phone number");
        return false;
    }
    else if(city==null||city==""){
        alert("Fill the city");
        return false;
    }
    else{
        document.write("Form submitted sucessfully");
        return true;
    }
}
