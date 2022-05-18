//event.preventDefault();

function removeElemsByClass(str){

    const elems = document.querySelectorAll(`.${str}`);
    elems.forEach(elem =>{
        elem.remove()
    })
}

function countElemesByClass(str){
    let count = 0;
    const elems = document.querySelectorAll(`.${str}`);
    elems.forEach(elem =>{
        count++;
    })
    return count;
}

function tenAmount(num){
    let x = 0
    let counter = 0 // im lazy
    let y = num.split('')
    for(let i = y.length-1; i >= 0 ; i --){
        x += parseInt(y[i]) * counter
        counter++
    }
    event.preventDefault();
    return counter -1
   

}

function ModuleMaker(content){ // messy messy messy

    let value = content[0].value
    removeElemsByClass("startbox")
    removeElemsByClass("moduleMaker")
    let form =  document.createElement("form")
    form.className="moduleMaker"
    form.id = "foo"
    document.getElementsByTagName('body')[0].appendChild(form);
    document.getElementById("foo").setAttribute("onSubmit", "processModules(this)");


    for(let i = 0;i< value; i++){
        let a = document.createElement("div")
        let x = document.createElement("input")
        let f = document.createElement("input")
        a.className = "ModuleSelectDiv"
        x.type = "text"
        f.type = "text"
        x.className = "Grade"
        f.className = "Credits"
        x.placeholder = `Module ${i+1} grade: `
        f.placeholder = `Module ${i+1} credits: `
        a.appendChild(x)
        a.appendChild(f)
        form.appendChild(a)
    }

    let x = document.createElement("input")
    x.type = "submit"
    x.className = "ModuleCalcSubmit"
    form.appendChild(x)

    event.preventDefault()
}   

function placeBR(){
    let x = document.createElement("br")
    document.getElementsByTagName('body')[0].appendChild(x);
}

function processModules(content){

    let total = 0
    let counter = 0

    for(let i = 0; i < content.length-1;i+=2 ){
        let num = parseInt(content[i].value)
        if(parseInt(content[i+1].value)>=20){
            num = num*2
            counter ++
        }
        total += num
        counter ++
    }

    
    total = Math.round(total / counter)

    removeElemsByClass("Grade")
    removeElemsByClass("Credits")
    removeElemsByClass("ModuleCalcSubmit")
    let a = document.createElement("div")
    document.getElementsByTagName('body')[0].appendChild(a);
    let b = document.createElement("p")
    b.id = "xyz"
    b.className = "counter"
    a.appendChild(b)
    counting(total,25)

    event.preventDefault()

}

function counting(num,time){ // derived from https://www.youtube.com/watch?v=PueMsfzFNWA

    let start = 0
    let interval = time

    let counter = setInterval(function(){

        start += 1
        document.getElementById("xyz").textContent = start

        if(start == num){
            clearInterval(counter)
            
        }

    },interval)

}