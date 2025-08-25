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
        " Sep 2017 - Jun 2018" :`Nottingham College - BTEC IT
        ----------------------------------------------

        Grade: Pass - Highest possible grade
        ----------------------------------------------
        
        This was my level 1 IT course at Nottingham College. It focused on basic information technology topics like how to use Office software (including a basic database in Access) and writing basic HTML+CSS.
        
        Skills:
        Basic IT knowledge, Office essentials, Office 365
        `,



        " Sep 2018 - Jun 2019":`
        

        `,
        " Sep 2019 - Jul 2021": "",
        " Sep 2021 - Jun 2024": ""
        
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


