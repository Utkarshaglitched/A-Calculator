let numarr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9","."];
let op = ["+", "/", "*", "-"];
let input = document.getElementById('inputing');
let numbers = document.getElementsByClassName("numbers");
let butt = document.getElementsByTagName('button');
console.log(butt[0]);
let enter = "";

function display(en) {
    input.value = en;
}

function clear() {
    input.value = "";

}

function calci() {
    input.value = eval(enter)
}

let len = Array.from(butt).length;
for (let i = 0; i < len; i++) {
    function calculation() {
        let valueEntered = butt[i].innerText;
        if (valueEntered === "C") {
            enter = '';
            clear();
        }
        else if (numarr.includes(valueEntered)) {
            enter += valueEntered;
            let cntIndex=0;
            for(let i=0;i<enter.length;i++){
                for(let j=0;j<op.length;j++){
                    if(enter[i]===op[j]){
                        console.log(enter[i]);
                        cntIndex=i; 
                        break;
                    }
                }
            }
            display(enter.slice(cntIndex));
        }

        else if (op.includes(valueEntered)) {
            enter += valueEntered;
            clear();
            input.value = valueEntered;
        }

        else if (valueEntered === "=") {
            if (enter === "80085") {
                clear();
                enter="";
                alert("BOOBS?????");
            }

            else if(enter===""){
                input.innerText=""
            }
            else {
                calci();
            }
        }
        else if(valueEntered==="B"){
            enter=enter.slice(0,-1);
            // clear();
            display(enter);
        }
        else {
            display(enter);
        }
    }
    butt[i].addEventListener('click', calculation);
}

function keyenter(eve){
    if(numarr.includes(eve.key)){
        enter+=eve.key;
        display(enter);
    }
    else if(op.includes(eve.key)){
        enter+=eve.key;
        display(enter);
    }
    if(eve.key==="Backspace"){
        enter=enter.slice(0,-1);
        display(enter);
    }
    else if(eve.key==="Enter"){
        if (enter === "80085") {
            clear();
            enter="";
            alert("BOOBS?????");
        }
        else{
            calci();
        }
    }
    
}

document.addEventListener('keydown',keyenter);