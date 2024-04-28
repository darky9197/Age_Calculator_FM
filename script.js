let dateString = '';
let dateStringC = '';
let dateObjn;

const dateObjC = new Date();
let cday = dateObjC.getDate();
let cmonth = dateObjC.getMonth();
let cyear = dateObjC.getFullYear();

const calc = document.getElementById("calculateBtn").addEventListener("click",()=>{
    const datein = document.getElementById("dayIn");
    const monthin = document.getElementById("monthIn");
    const yearin = document.getElementById("yearIn");
    const label = document.querySelectorAll("#labelid");
    const inputs = document.querySelectorAll(".input-s");
    const dayout = document.getElementById("dayOut");
    const monthout = document.getElementById("monthOut");
    const yearout = document.getElementById("yearOut");

    // empty string validation
    if(datein.value === "" || monthin.value === "" || yearin.value === "") {
        const ele = document.querySelectorAll("#err11")
        ele.forEach((e)=>{
            e.classList.remove("hide")
            e.classList.add("show")   
        })
        label.forEach((e)=>{
            e.classList.add("red")
        })
        inputs.forEach((e)=>{
            e.classList.add("bred")
        })
        
    }
    else{
        const ele = document.querySelectorAll("#err11")
        ele.forEach((e)=>{
            e.classList.remove("show")
            e.classList.add("hide")   
        })
        // Non Integer validation
        if(isNaN(datein.value) || isNaN(monthin.value) || isNaN(yearin.value)){
            alert("Enter Numerical Values")
            datein.value = "";
            monthin.value = "";
            yearin.value = "";
        }
        else{
            // date format validation
            if(datein.value > 31){
                const ele = document.getElementById("err31")
                ele.classList.remove("hide")
                ele.classList.add("show")   

                label.forEach((e)=>{
                    e.classList.add("red")
                })
                inputs.forEach((e)=>{
                    e.classList.add("bred")
                })
            }
            else if(monthin.value > 12){
                const ele = document.getElementById("err22")
                ele.classList.remove("hide")
                ele.classList.add("show")  

                label.forEach((e)=>{
                    e.classList.add("red")
                })
                inputs.forEach((e)=>{
                    e.classList.add("bred")
                })
            }
            else if(yearin.value >= cyear){
                const ele = document.getElementById("err23")
                ele.classList.remove("hide")
                ele.classList.add("show")  

                label.forEach((e)=>{
                    e.classList.add("red")
                })
                inputs.forEach((e)=>{
                    e.classList.add("bred")
                })
            }
            else{
                const ele1 = document.getElementById("err31")
                ele1.classList.remove("show")
                ele1.classList.add("hide")  

                const ele2 = document.getElementById("err22")
                ele2.classList.remove("show")
                ele2.classList.add("hide")  

                const ele3 = document.getElementById("err23")
                ele3.classList.remove("show")
                ele3.classList.add("hide") 

                dateString = `${yearin.value}-${monthin.value}-${datein.value}`;
                let dateObj = new Date(dateString)
                dateObjn = dateObj;
                console.log(dateString)
                console.log(dateObj)
                
                // Valid Date validation
                if(!isNaN(dateObj)){
                    console.log("valid")
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

    const tDiff = dateObjC.getTime() - dateObjn.getTime();
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


document.oncontextmenu = function(e){
    var target = (typeof e !="undefined")? e.target: event.srcElement
    if (target.tagName == "IMG" || (target.tagName == 'A' && target.firstChild.tagName == 'IMG'))
        return false

}