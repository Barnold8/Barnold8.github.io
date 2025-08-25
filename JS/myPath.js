function generateCustomDiv(_ID="",_classlist=[],_contents="",_customAttributeName="",_customAttributeContents=""){

    const newDiv = document.createElement("div");
    const newContent = document.createTextNode(_contents);
    newDiv.appendChild(newContent);

    _classlist.forEach(_class => {
        newDiv.classList.add(_class)
    });

    // gross checks here
    if(_ID != ""){
        newDiv.setAttribute("id", _ID);
    }
    if(_contents != ""){
        newDiv.innerText = _contents
    }
    if(_customAttributeName != "" && _customAttributeContents != ""){
        newDiv.setAttribute(_customAttributeName, _customAttributeContents);
    }
    // gross checks here

    return newDiv
}

function displayPath(){

    

}

function generateTitles(){
    var myPathObjects = {
        " Sep 2017 - Jun 2018" :"",
        " - Year 2 - Huh": "Grade: Distinction\n\noverallGrade: Distinction overall\n\nThis was the IT support orientated course. This involved handling a basic LAN network within the classroom, wiring power plugs and ethernet cables. We also resolved hardware issues within computers. Not to mention we were taught the standard practices of an IT support person, logging problems within spreadsheets to a superb standard and handling the said problem accordingly. This course also included installing operating systems on machines and installing software correctly and safely as well as handling admin tasks from the Windows server PC within the classroom adding accounts to the network and their respective login credentials.",
        " - Year 3 - What": "Grade: Distinction*,Distinction* ,Distinction*Grade: Distinction*,Distinction* ,Distinction*In this course I received the highest grades possible over the two year span. This course was structured around software development and games as a whole. We wrote GUI applications (I chose Python and it's Tkinter library for this), wrote the front end of a website for a client to their specifications and requirements, planned tasks using GANTT charts and set deadlines accordingly, configured networks on a software level using CISCO packet tracer, learned about networks(topolgies, OSI layer, checksum,DTE & DCE,), subnetworks (i.e sub-networks that are determined by their number for their group), network security (i.e DDOS, MITM), OOP paradigms (Polymorphism,encapsulation,inheritance) Skills: Python (Programming Language)"
        
        };
    const TITLE_ID = "FE-FolderSelector"
    const titleSection = document.getElementById(TITLE_ID)

    for (const [key, value] of Object.entries(myPathObjects)) {
        titleContent = generateCustomDiv("path_clickable",[],key,"Contents",value)

        titleContent.addEventListener("click", function (event) {
            
            elemCustomAttrib = event.target.getAttribute("contents")

            document.getElementById("FE-Contents").innerText = elemCustomAttrib
            
            });

        titleSection.appendChild(
            titleContent
        )

    }

}

generateTitles()

document.getElementById("FE-Contents").innerText = "\n\n\t\t\tTry clicking one of these!\n\n\n\t\t\t<--------"
document.getElementById("FE-SubTitle-Objects").innerText = document.getElementById("FE-FolderSelector").children.length + " Objects"


