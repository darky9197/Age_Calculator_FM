let dateString = '';
let dateStringC = '';
let dateObj;

const dateObjC = new Date();
let cday = dateObjC.getDate();
let cmonth = dateObjC.getMonth();
let cyear = dateObjC.getFullYear();

const calc = document.getElementById("calculateBtn").addEventListener("click",()=>{
    const datein = document.getElementById("dayIn");
    const monthin = document.getElementById("monthIn");
    const yearin = document.getElementById("yearIn");

    // date validation
    if(datein.value === "" || monthin.value === "" || yearin.value === "") {
        const ele = document.querySelectorAll("#err11")
        ele.forEach((e)=>{
            e.classList.remove("hide")
            e.classList.add("show")   
        })
    }
    else{
        if(isNaN(datein.value) || isNaN(monthin.value) || isNaN(yearin.value)){
            alert("Enter Numerical Values")
            datein.value = "";
            monthin.value = "";
            yearin.value = "";
        }
        else{
            if(datein.value > 31){
                const ele = document.getElementById("err31")
                ele.classList.remove("hide")
                ele.classList.add("show")   
            }
            else if(monthin.value > 12){
                const ele = document.getElementById("err22")
                ele.classList.remove("hide")
                ele.classList.add("show")  
            }
            else if(yearin.value >= cyear){
                const ele = document.getElementById("err23")
                ele.classList.remove("hide")
                ele.classList.add("show")  
            }
            else{
                dateString = `${yearin.value}-${monthin.value}-${datein.value}`;
                dateObj = new Date(dateString)
                console.log(dateString)
                console.log(dateObj)
                
                if(!isNaN(dateObj)){
                    console.log("valid")
                    const label = document.querySelectorAll("#labelid");
                    const inputs = document.querySelectorAll(".input-s");
                    label.forEach((e)=>{
                        e.classList.remove("red")
                    });
                    inputs.forEach((e)=>{
                        e.classList.remove("bred")
                    });
                    const ele = document.getElementById("err21")
                    ele.classList.remove("show")
                    ele.classList.add("hide")
                }
                else{
                    console.log("Invalid")
                    const label = document.querySelectorAll("#labelid");
                    const inputs = document.querySelectorAll(".input-s");
                    label.forEach((e)=>{
                        e.classList.add("red")
                    })
                    inputs.forEach((e)=>{
                        e.classList.add("bred")
                    })
                    const ele = document.getElementById("err21")
                    ele.classList.remove("hide")
                    ele.classList.add("show")
                }
            }
        }
    }    

    // Age Calculation System
    const dayout = document.getElementById("dayOut");
    const monthout = document.getElementById("monthOut");
    const yearout = document.getElementById("yearOut");

    const tDiff = dateObjC.getTime() - dateObj.getTime();
    const dDiff = Math.round(tDiff / (1000 * 60 * 60 * 24));
    console.log(dDiff);

    let year = dDiff / 365;
    let day = dDiff % 365;
    let month = day / 30;
    day = day % 30;
    
    yearout.textContent = Math.round(year);
    monthout.textContent = Math.round(month);
    dayout.textContent = Math.round(day);
    
});
