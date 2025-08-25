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
        "- Sep 2017 - Jun 2018" :`Nottingham College - BTEC IT
        ----------------------------------------------

        Grade: Pass - Highest possible grade
        ----------------------------------------------
        
        This was my level 1 IT course at Nottingham College. It focused on basic information technology topics like how to use Office software (including a basic database in Access) and writing basic HTML+CSS.
        
        Skills:
        Basic IT knowledge, Office essentials, Office 365
        `,



        "- Sep 2018 - Jun 2019":`Nottingham College - City and Guilds - Systems and support
        --------------------------------------------------------------------

        Grade: Distinction overall
        ------------------------------------------

        This was the IT support orientated course. This involved handling a basic LAN network within the classroom,
        wiring power plugs and ethernet cables. We also resolved hardware issues within computers. Not to mention 
        we were taught the standard practices of an IT support person, logging problems within spreadsheets to a superb 
        standard and handling the said problem accordingly. This course also included installing operating systems on machines and
        installing software correctly and safely as well as handling admin tasks from the Windows server PC within the classroom adding accounts 
        to the network and their respective login credentials.
        
        Skills:
        LAN network setup and troubleshooting, Power and Ethernet cable wiring, Computer hardware troubleshooting and repair, IT support practices (issue logging and resolution tracking), Spreadsheet-based problem logging and documentation, Operating system installation and configuration, Software installation and maintenance, Windows Server administration (user account creation and credential management)

        `,
        "- Sep 2019 - Jul 2021": `Nottingham College - Computer Software Engineering
        ---------------------------------------------------------------------------
        
        Grade: Distinction*,Distinction* ,Distinction*
        ----------------------------------------------------------

        In this course I received the highest grades possible over the two year span. This course was structured around software development and games as a whole. We wrote GUI applications (I chose Python and it's Tkinter library for this), wrote the front end of a website for a client to their specifications and requirements, planned tasks using GANTT charts and set deadlines accordingly, configured networks on a software level using CISCO packet tracer, learned about networks(topolgies, OSI layer, checksum,DTE & DCE,), subnetworks (i.e sub-networks that are determined by their number for their group), network security (i.e DDOS, MITM), OOP paradigms (Polymorphism,encapsulation,inheritance)

        Skills:
        Python (Programming Language), Tkinter (GUI Development), Front-end Web Development, Client Requirement Analysis, Gantt Chart Planning, Task Scheduling, Network Configuration (CISCO Packet Tracer), Network Topologies, OSI Model, Checksum, DTE & DCE Configuration, Subnetting, Network Security (DDOS, MITM), Object-Oriented Programming (OOP), Polymorphism, Encapsulation, Inheritance
        `,
        "- Sep 2021 - Jun 2024": `University Of Nottingham - BS, Computer Science
        --------------------------------------------------------------------

        Grade: 2:1
        -----------------

        Developed strong foundations across programming, software engineering, and systems design. Projects spanned low-level programming (ARM assembly, C, C++ with SDL2/OpenGL, operating system schedulers), functional programming (Haskell), and object-oriented development (Java, JavaFX, Android). Built applied software such as games, GUIs, server programs, and Android apps. Collaborated on a Capital One industry project to create a smart receipt analyzer app (OCR, NLP, API development, Docker). Explored advanced areas including cryptography (AES in GCM), data visualization (Observable JavaScript), AI chatbot development (NLTK), and computer graphics with OpenGL.
        
        Skills:
        Java, JavaFX, Java Swing, Android Development, PHP, SQL, Flask, RESTful APIs, Docker, Docker Compose, C, C++ (SDL2, OpenGL, GLFW), ARM Assembly, Haskell, Python, NLTK, Natural Language Processing (NLP), Naive Bayes Classifier, Sentiment Analysis, HTML, CSS, JavaScript, Observable (Data Visualization), API Development, Operating Systems (POSIX Threads, Process Scheduling, Concurrency, Disk I/O), Cryptography (AES GCM), Software Specification, Maintainable Software Development, Object-Oriented Programming (OOP), Functional Programming, Concurrent Programming, Research Ethics, Cryptography, Information Visualization, Virtual Reality (VR), Teamwork, Agile Methodologies, Scrum, Scrumban, JSON, YAML, Linux, Back End Development, Network Programming (Dijkstra’s Algorithm, Server/Client Models), Graphics Programming (Shaders, Texturing, Procedural Generation), Information Security
        `
        
        };
    const TITLE_ID = "FE-FolderSelector"
    const titleSection = document.getElementById(TITLE_ID)

    for (const [key, value] of Object.entries(myPathObjects)) {
        titleContent = generateCustomDiv("path_clickable",["FE-Contents"],key,"Contents",value)

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

document.getElementById("FE-Contents").innerText = "Try clicking one of these!\n\n\n\t\t\t<--------"
document.getElementById("FE-SubTitle-Objects").innerText = document.getElementById("FE-FolderSelector").children.length + " Objects"


