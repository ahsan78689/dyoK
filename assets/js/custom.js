BOOKLET = [];
BOOKLET["Products"] = [];
BOOKLET["Active"] = 0;
BOOKLET["Counter"] = 1;
ACTIVE = 0;
CURRENTDESIGN = 0;

function changeNav(section) {
    var i;
    SI = 0;

    var DNL = document.getElementById("PRODNAV").getElementsByTagName("a")
    var SECTIONS = document.getElementById("section").getElementsByTagName("div");
    if (section == "Next" || section == "Previous") {
        for (i = 0; i < DNL.length; i++) {
            if (DNL[i].parentNode.classList.contains("active")) {
                SI = i;
                break
            }
        }
        if (section == "Next") {
            SI = SI + 1
        }
        if (section == "Previous") {
            SI = SI - 1
        }
    } else {
        for (i = 0; i < DNL.length; i++) {
            if (DNL[i].id == section) {
                SI = i;
                break
            }
        }
    }
    var VWR = document.getElementById("Viewer");
    var SMN = document.getElementById("SubMain");
    var ADD = document.getElementById("Additional");
    var NXT = document.getElementById("Next");
    var PRV = document.getElementById("Previous");
    var BBTN = document.getElementById("BookletButton")

    PRODTYPE = document.getElementById("ProductType[" + ACTIVE + "]");
    PRODSTYLE = document.getElementById("ProductStyle[" + ACTIVE + "]");
    PRODDESIGN = document.getElementById("ProductDesign[" + ACTIVE + "]");
    if (section == "SubmitOrder" && document.getElementById("BookletDesigns").children.length) {
        SI = 4
    } else if (PRODTYPE.value == "") {
        SI = 0
    } else {
        if ((PRODSTYLE.value == "" || PRODSTYLE.value == "undefined") && STYLE[PRODTYPE.value] && SI > 1) {
            SI = 1
        } 
        else if ((PRODTYPE.value != "" && PRODTYPE.value != "undefined") && !STYLE[PRODTYPE.value] && SI == 1) {
            SI = 2
        }
        if ((PRODDESIGN.value == "" || PRODDESIGN.value == "undefined") && (DESIGNS[PRODTYPE.value] || DESIGNS[PRODTYPE.value][STYLE.value]) && SI > 2) {
            SI = 2
        }
    }
    section = DNL[SI].id;
    if (SI > 1) {
        ADD.style.display = VWR.style.display = SMN.style.display = ""
    }
    if (SI == 1) {
        ADD.style.display = "";
        VWR.style.display = SMN.style.display = "none"
    }
    if (SI < 1) {
        ADD.style.display = VWR.style.display = SMN.style.display = "none"
    }
    if (SI < 1) {
        PRV.style.visibility = "hidden"
    } else {
        PRV.style.visibility = "visible"
    }
    if (SI < 3) {
        BBTN.style.visibility = "hidden"
    } else if (SI >= DNL.length - 1) {
        BBTN.style.visibility = "hidden"
    } else {
        BBTN.style.visibility = "visible"
    }
    if (SI >= DNL.length - 2) {
        NXT.style.visibility = "hidden"
    } else {
        NXT.style.visibility = "visible"
    }
    if (SI > 3) {
        document.getElementById("PRODNAV").style.visibility = "hidden"
    } else {
        document.getElementById("PRODNAV").style.visibility = "visible"
    }

    OLDACTIVE = document.getElementsByClassName("active");
    while (OLDACTIVE.length) {
        OLDACTIVE[0].classList.remove("active")
    }
    NEWACTIVE = document.getElementsByClassName(section);
    for (i = 0; i < NEWACTIVE.length; i++) {
        NEWACTIVE[i].classList.add("active")
    }

}

PRODUCTS = {};
PRODUCTS["Jersey"] = {
    "Options": ["Collar", "Number", "Logo"],
    "Licenses": ["QRL Logo", "CRL Logo", "NRL-VIC Logo", "NRL-WA Logo"],
    "Logos": ["LeftChest", "RightChest", "RightSleeve", "LeftSleeve", "CentreChest", "CentreBack", "UpperBack", "LowerBack", "Default"]
}

PRODUCTS["Singlet"] = {
    "Options": ["Number", "Logo"],
    "Licenses": [],
    "Logos": ["LeftChest", "RightChest", "CentreChest", "UpperBack", "CentreBack", "LowerBack", "Default"]
}

PRODUCTS["Tee"] = {
    "Options": ["Number", "Logo"],
    "Licenses": [],
    "Logos": ["LeftChest", "RightChest", "LeftSleeve", "RightSleeve", "CentreChest", "UpperBack", "CentreBack", "LowerBack", "Default"]
}

PRODUCTS["Polo"] = {
    "Options": ["Number", "Logo"],
    "Licenses": [],
    "Logos": ["LeftChest", "RightChest", "LeftSleeve", "RightSleeve", "CentreChest", "UpperBack", "CentreBack", "LowerBack", "Default"]
}

PRODUCTS["Rugby"] = {
    "Options": ["Number", "Logo"],
    "Licenses": [],
    "Logos": ["LeftChest", "RightChest", "LeftSleeve", "RightSleeve", "CentreChest", "UpperBack", "CentreBack", "LowerBack", "Default"]
}

PRODUCTS["Netball"] = {
    "Options": ["Number", "Logo"],
    "Licenses": [],
    "Logos": ["LeftChest", "RightChest", "LeftSleeve", "RightSleeve", "CentreChest", "UpperBack", "CentreBack", "LowerBack", "Default"]
}


function newProduct() {
    BOOKLET["Products"][BOOKLET["Counter"]] = {};
    ACTIVE = BOOKLET["Counter"];
    BOOKLET["Counter"]++;
    var STAA = ["ProductType", "ProductStyle", "ProductDesign"];
    var FS = document.createElement("fieldset");
    FS.id = "FS[" + ACTIVE + "]";
    FS.style.display = "none";
    FS.classList.add("Product[" + ACTIVE + "]");
    document.forms[0].appendChild(FS);
    for (i in STAA) {
        var I = document.createElement("input");
        I.name = I.id = STAA[i] + "[" + ACTIVE + "]";
        I.type = "hidden";
        FS.appendChild(I);
    }

    var FS = document.createElement("fieldset");
    FS.id = "fields[" + ACTIVE + "]";
    FS.classList.add("Product[" + ACTIVE + "]")
    var DIV = document.createElement("div");
    DIV.id = "Colours[" + ACTIVE + "]";
    FS.appendChild(DIV);
    var IL = document.getElementById("fields").getElementsByClassName("show");
    while (IL.length) {
        IL[0].classList.remove("show")
    }
    document.getElementById("fields").appendChild(FS);
    FS.className = "show";

    var FS = document.createElement("fieldset");
    FS.id = "logos[" + ACTIVE + "]";
    var IL = document.getElementById("logodiv").getElementsByClassName("show");
    while (IL.length) {
        IL[0].classList.remove("show")
    }
    FS.classList.add("Product[" + ACTIVE + "]");
    FS.classList.add("show");
    document.getElementById("logodiv").appendChild(FS);

    var OPTSEL = document.getElementById("OptionSel");
    for (j = 0; j < OPTSEL.children.length; j++) {
        OPTSEL.children[j].style.display = "none"
    }
    changeNav(0)
}
newProduct();

function editProduct(number) {
    if (typeof (number) == "undefined") {
        console.log("No product specified for editing");
        return
    }
    ACTIVE = number;
    var OPTSEL = document.getElementById("OptionSel");
    for (j = 0; j < OPTSEL.children.length; j++) {
        OPTSEL.children[j].style.display = "none"
    }
    PRODTYPE = document.getElementById("ProductType[" + ACTIVE + "]");
    PRODSTYLE = document.getElementById("ProductStyle[" + ACTIVE + "]");
    PRODDESIGN = document.getElementById("ProductDesign[" + ACTIVE + "]");
    var IL = document.getElementById("fields").getElementsByClassName("show");
    while (IL.length) {
        IL[0].classList.remove("show")
    }
    document.getElementById("fields[" + ACTIVE + "]").className = "show";
    var IL = document.getElementById("logodiv").getElementsByClassName("show");
    while (IL.length) {
        IL[0].classList.remove("show")
    }
    document.getElementById("logos[" + ACTIVE + "]").className = "show";
    if (PRODTYPE.value != "") {
        ProductSelect.call(document.getElementById(PRODTYPE.value))
    } else {
        changeNav(0)
    }
    if (PRODSTYLE.value != "" && STYLE[PRODTYPE.value].length == 1) {
        StyleSelect.call(document.getElementById(PRODSTYLE.value))
    }
    if (PRODDESIGN.value != "") {
        design();
        changeNav("Customise");
        RHSInfo();
    }
}

function deleteProduct(number) {
    if (!confirm("Are you sure you want to remove this " + document.getElementById("ProductType[" + number + "]").value + " from your cart?")) {
        console.log("aborting deletion");
        return
    }
    // Add modal popup later
    delete BOOKLET["Products"][number];
    removeNode("FS[" + number + "]", document);
    removeNode("fields[" + number + "]", document);
    removeNode("logos[" + number + "]", document);
    var IL = document.getElementsByClassName("Product[" + number + "]");
    while (IL.length) {
        IL[0].parentNode.removeChild(IL[0])
    }
    var IL = document.getElementsByClassName("OPT[" + number + "]");
    while (IL.length) {
        IL[0].parentNode.removeChild(IL[0])
    }
    if (ACTIVE == number) {
        var PRODS = Object.keys(BOOKLET.Products)
        if (PRODS.length != 0) {
            ACTIVE = PRODS[PRODS.length - 1]
        } else {
            newProduct()
        }
    }
    var OPTSEL = document.getElementById("OptionSel");
    for (j = 0; j < OPTSEL.children.length; j++) {/*j.style.display="none"*/
    }
    BookletSlider();
}

GARMENTS = ["Singlet", "Tee", "Dress", "Jersey"];
STYLE = [];
DESIGNS = [];
ROLLOVER = [];
SVGDIR = [];
DELIVERY = [];
INFO = [];
SVGPERSTYLE = [];
BRANDONCOLOUR = [];

STYLE["Singlet"] = ["Style1"];

STYLE["Tee"] = ["Style1"];

STYLE["Netball"] = ["Style1"];

STYLE["Polo"] = ["Style1"];
STYLE["Rugby"] = ["Style1"];


DESIGNS["Singlet"] = ["S-01", "S-02", "S-03", "S-04", "S-05", "S-06", "S-07", "S-08", "S-09", "S-10", "S-11", "S-12", "S-13", "S-14", "S-15", "S-16"];

DESIGNS["Tee"] = ["T-01", "T-02", "T-03", "T-04", "T-05", "T-06", "T-07", "T-08", "T-09", "T-10", "T-11", "T-12", "T-13", "T-14", "T-15", "T-16", "T-17", "T-18", "T-19", "T-20", "T-21"];

DESIGNS["Netball"] = ["Netball-01", "Netball-02", "Netball-03", "Netball-04", "Netball-05", "Netball-06", "Netball-07", "Netball-08", "Netball-09", "Netball-10", "Netball-11", "Netball-12", "Netball-13", "Netball-14", "Netball-15", "Netball-16", "Netball-17", "Netball-18", "Netball-19", "Netball-20", "Netball-21", "Netball-22", "Netball-23", "Netball-24", "Netball-25"];

DESIGNS["Polo"] = ["Polo-01", "Polo-02", "Polo-03", "Polo-04", "Polo-05", "Polo-06", "Polo-07", "Polo-08", "Polo-09", "Polo-10", "Polo-11", "Polo-12", "Polo-13", "Polo-14", "Polo-15", "Polo-16","Polo-17", "Polo-18", "Polo-19", "Polo-20", "Polo-21"];
DESIGNS["Rugby"] = ["KBRJ-01", "KBRJ-02", "KBRJ-03", "KBRJ-04", "KBRJ-05", "KBRJ-06", "KBRJ-07", "KBRJ-08", "KBRJ-09", "KBRJ-10", "KBRJ-11", "KBRJ-12", "KBRJ-13", "KBRJ-14", "KBRJ-15", "KBRJ-16","KBRJ-17", "KBRJ-18", "KBRJ-19", "KBRJ-20"];

SVGDIR["Singlet"] = "Singlet";
SVGDIR["Tee"] = "Tee";
SVGDIR["Netball"] = "Netball";
SVGDIR["Polo"] = "Polo";
SVGDIR["Rugby"] = "Rugby";

SVGPERSTYLE["Shorts"] = true;
SVGPERSTYLE["Socks"] = true;
DESIGNS["BikePants"] = [];
DELIVERY["Jersey"] = DELIVERY["Shorts"] = DELIVERY["Polo"] = DELIVERY["Tee"] = DELIVERY["Singlet"] = DELIVERY["Dress"] = "4-6";
DELIVERY["Socks"] = "6-8";
DELIVERY["SeniorJersey"] = DELIVERY["Jacket"] = DELIVERY["Hoodie"] = "8-10";
INFO["Jersey"] = INFO["Shorts"] = "Struddys Sports are Official Licensed suppliers of Jerseys and Shorts for QRL, CRL, NRL Victoria and NRL Western Australia.<br>Featuring a High-Performance Dry-Airflow Fabric, these make ideal playing uniforms for League, Union, AFL and other full-contact sports.";
INFO["Tee"] = INFO["Polo"] = INFO["Singlet"] = INFO["Hoodie"] = INFO["Jacket"] = "Featuring our High-Performance Struddys fabrics for ultimate comfort and performance.";
INFO["Dress"] = "Featuring High-Performance Dry-Airflow Fabric, our sublimated dresses are ideal for Netball and Hockey.";
INFO["Socks"] = "Featuring Compression elastic in ankle, foot and calf for ultimate comfort.";
COLWY = [];
COLWY["Sub"] = ["Natural", "Sand", "Flash", "Cream", "Fawn", "BA Yellow", "Yellow", "Boomers Gold", "Bobs Gold", "Gold", "Hot Pink", "Powder Pink", "Baby Pink", "Plum", "Fucia", "Musk", "Lilac", "Lavender", "Purple", "Light Purple", "Violet", "Dark Maroon", "Maroon", "Light Maroon", "Burgundy", "Cherry", "Light Red", "Red", "Fire", "Orange", "Tigers Orange", "Ochre", "Choc Brown", "Dark Brown", "Light Brown", "Olive", "Black", "Ink", "Midnight", "Navy", "Junior Navy", "Airforce Blue", "Ice Blue", "Azure", "Turquoise", "Cyan", "Mid Blue", "Sky", "Corn Flower", "Aqua", "Sapphire", "Royal", "Reflex Blue", "Mint", "Jade", "Teal", "Crocs Green", "Fluro Green", "Lime", "Apple", "Emerald", "Grass", "Forest","Khaki", "Bottle", "Dark Bottle", "Ocean", "Petrol", "Jet Black", "Gun Grey", "Charcoal", "Soft Grey", "Silver", "Titanium"];

COLWY["Singlet"] = ["Lime", "Apple", "Emerald", "Grass", "Forest","Khaki", "Bottle", "Dark Bottle", "Ocean", "Petrol", "Jet Black", "Gun Grey", "Charcoal", "Soft Grey", "Silver", "Titanium"];

COLWY["S-BallColour"] = ["Black", "White"];

BRANDONCOLOUR["Tee"] = [];
BRANDONCOLOUR["Jersey"] = BRANDONCOLOUR["Tee"]["Players"] = {
    "001": "Colour2",
    "002": "Colour2",
};

BRANDONCOLOUR["Singlet"] = {
    "S-01": "Colour1"
};

function ProductSelect() {
    var PRODTYPE = document.getElementById("ProductType[" + ACTIVE + "]");
    var PRODSTYLE = document.getElementById("ProductStyle[" + ACTIVE + "]");
    var VIEW = document.getElementById("View");
    VIEW.value = "Front";
    PRODTYPE.value = this.id;
    if (STYLE[PRODTYPE.value].indexOf(PRODSTYLE.value) == -1) {
        PRODSTYLE.value = ""
    }
    ;VIEWCLICK = 0;
    //Product Defaults
    //Product Defaults
    var SHOWOPT = [];
    if (typeof (PRODUCTS[PRODTYPE.value]) != "undefined" && typeof (PRODUCTS[PRODTYPE.value]["Options"]) != "undefined") {
        for (i in PRODUCTS[PRODTYPE.value]["Options"]) {
            SHOWOPT.push(PRODUCTS[PRODTYPE.value]["Options"][i].toLowerCase() + "div")
        }
        for (j in SHOWOPT) {
            document.getElementById(SHOWOPT[j]).style.display = "inherit"
        }
    } else {
        console.log("Please add configuration for this garment type")
    }
    //
    /* Generate Per Product Fields for CollarStyle, Numbers, Logos etc */
    var FS = document.getElementById("FS[" + ACTIVE + "]");
    var OPTS = ["Collar", "Senior", "Bib", "Number"];
    if (typeof (PRODUCTS[PRODTYPE.value]) != "undefined" && typeof (PRODUCTS[PRODTYPE.value]["Options"]) != "undefined") {
        for (i in OPTS) {
            if (PRODUCTS[PRODTYPE.value]["Options"].indexOf(OPTS[i]) != -1) {
                if (!document.getElementById(OPTS[i] + "Style[" + ACTIVE + "]")) {
                    var OPTEMP = document.getElementById(OPTS[i] + "Style")
                    var I = OPTEMP.cloneNode(true);
                    I.name = I.id = OPTS[i] + "Style[" + ACTIVE + "]";
                    I.classList.add("OPT[" + ACTIVE + "]");
                    OPTEMP.parentNode.appendChild(I);
                }
            } else if (document.getElementById(OPTS[i] + "Style[" + ACTIVE + "]")) {
                console.log("removing unnecessary node");
                document.getElementById(OPTS[i] + "Style[" + ACTIVE + "]").parentNode.style.display = "none";
                removeNode(OPTS[i] + "Style[" + ACTIVE + "]", document)
            }
        }
    } else {
        console.log("Please add configuration for this garment type (#2)")
    }
    // Now do Logos
    if (typeof (PRODUCTS[PRODTYPE.value]) != "undefined" && typeof (PRODUCTS[PRODTYPE.value]["Logos"]) != "undefined") {
        if (!document.getElementById("SBALL[" + ACTIVE + "]")) {
            var D = document.createElement("DIV");
            document.getElementById("logos[" + ACTIVE + "]").appendChild(D);
            D.id = "branding[" + ACTIVE + "]";
            var DIV = document.createElement("DIV");
            D.appendChild(DIV);
            var L = document.createElement("label");
            DIV.appendChild(L);
            L.textContent = "Branding Location";
            L.htmlFor = "SBALL[" + ACTIVE + "]";
            var I = document.createElement("select");
            DIV.appendChild(I);
            I.name = I.id = "SBALL[" + ACTIVE + "]";
            I.className = "brandselect";
            var V = document.createElement("option");
            V.value = "RightChest";
            V.textContent = "Right Chest";
            I.add(V);
            var V = document.createElement("option");
            V.textContent = V.value = "Default";
            I.add(V);
            I.value = "Default";
        }
        if (!document.getElementById("ShortsBranding[" + ACTIVE + "]")/*&& PRODTYPE.value=="Shorts"*/
        ) {
            var D = document.createElement("DIV");
            document.getElementById("logos[" + ACTIVE + "]").appendChild(D);
            D.id = "ShortsBranding[" + ACTIVE + "]";
            var DIV = document.createElement("DIV");
            D.appendChild(DIV);
            var L = document.createElement("label");
            DIV.appendChild(L);
            L.textContent = "Branding Location";
            L.htmlFor = "ShortsBrand[" + ACTIVE + "]";
            var I = document.createElement("select");
            DIV.appendChild(I);
            I.name = I.id = "ShortsBrand[" + ACTIVE + "]";
            I.className = "shortsbrand";
            var V = document.createElement("option");
            V.value = "S-Ball";
            V.textContent = "Struddys S-Ball";
            I.add(V);
            var V = document.createElement("option");
            V.value = "QRL+S-Ball";
            V.textContent = "QRL Logo + Struddys S-Ball";
            I.add(V);
            var V = document.createElement("option");
            V.value = "CRL+S-Ball";
            V.textContent = "CRL Logo + Struddys S-Ball";
            I.add(V);
            var V = document.createElement("option");
            V.value = "NRL-VIC+S-Ball";
            V.textContent = "NRL-VIC Logo + Struddys S-Ball";
            I.add(V);
            var V = document.createElement("option");
            V.value = "NRL-WA+S-Ball";
            V.textContent = "NRL-WA Logo + Struddys S-Ball";
            I.add(V);
        }
        if (!document.getElementById("SockTeamName[" + ACTIVE + "]")/*&& PRODTYPE.value=="Socks"*/
        ) {
            var D = document.createElement("DIV");
            document.getElementById("logos[" + ACTIVE + "]").appendChild(D);
            D.id = "SockTeamName[" + ACTIVE + "]";
            var DIV = document.createElement("DIV");
            D.appendChild(DIV);
            var L = document.createElement("label");
            DIV.appendChild(L);
            L.textContent = "Embroidered Teamname";
            L.htmlFor = "SockTeamNameSelect[" + ACTIVE + "]";
            var I = document.createElement("select");
            DIV.appendChild(I);
            I.name = I.id = "SockTeamNameSelect[" + ACTIVE + "]";
            I.className = "sockembroidery";
            var V = document.createElement("option");
            V.value = V.textContent = "None";
            I.add(V);
            var V = document.createElement("option");
            V.value = V.textContent = "Back";
            I.add(V);
            var V = document.createElement("option");
            V.value = V.textContent = "Sides";
            I.add(V);
            I.value = "Back";
            var DIV = document.createElement("DIV");
            D.appendChild(DIV);
            var L = document.createElement("label");
            DIV.appendChild(L);
            L.textContent = "Sock Text";
            L.htmlFor = "SockTeamNameText[" + ACTIVE + "]";
            var I = document.createElement("input");
            DIV.appendChild(I);
            I.name = I.id = "SockTeamNameText[" + ACTIVE + "]";
            I.className = "socktext";
            I.placeholder = "Team Name";
        }
        for (i in PRODUCTS[PRODTYPE.value]["Logos"]) {
            if (!document.getElementById(PRODUCTS[PRODTYPE.value]["Logos"][i] + "[" + ACTIVE + "]")) {
                var D = document.createElement("DIV");
                D.id = PRODUCTS[PRODTYPE.value]["Logos"][i] + "[" + ACTIVE + "]";
                D.className = "uploaddiv";
                var DIV = document.createElement("DIV");
                D.appendChild(DIV);
                var L = document.createElement("label");
                DIV.appendChild(L);
                L.textContent = unCamelCase(PRODUCTS[PRODTYPE.value]["Logos"][i]);
                L.htmlFor = PRODUCTS[PRODTYPE.value]["Logos"][i] + "Select[" + ACTIVE + "]";
                var I = document.createElement("select");
                DIV.appendChild(I);
                I.name = I.id = PRODUCTS[PRODTYPE.value]["Logos"][i] + "Select[" + ACTIVE + "]";
                I.className = "uploadselect";
                var V = document.createElement("option");
                V.textContent = V.value = "None";
                I.add(V);
                var V = document.createElement("option");
                V.textContent = V.value = "Logo";
                I.add(V);
                var V = document.createElement("option");
                V.textContent = V.value = "Text";
                I.add(V);
                var DIV = document.createElement("DIV");
                D.appendChild(DIV);
                DIV.style.display = "none";
                //var L=document.createElement("label");DIV.appendChild(L);L.textContent=unCamelCase(PRODUCTS[PRODTYPE.value]["Logos"][i])+" Logo";L.htmlFor=PRODUCTS[PRODTYPE.value]["Logos"][i]+"Logo["+ACTIVE+"]";
                //changed Left Chest Logo label to Select Logo
                var L = document.createElement("label");
                DIV.appendChild(L);
                L.textContent = "Select Logo";
                L.htmlFor = PRODUCTS[PRODTYPE.value]["Logos"][i] + "Logo[" + ACTIVE + "]";
                var I = document.createElement("input");
                DIV.appendChild(I);
                I.type = "file";
                I.name = I.id = PRODUCTS[PRODTYPE.value]["Logos"][i] + "Logo[" + ACTIVE + "]";
                I.className = "logoupload";
                var DIV = document.createElement("DIV");
                D.appendChild(DIV);
                DIV.style.display = "none";
                var L = document.createElement("label");
                DIV.appendChild(L);
                L.textContent = unCamelCase(PRODUCTS[PRODTYPE.value]["Logos"][i]) + " Text";
                ;L.htmlFor = PRODUCTS[PRODTYPE.value]["Logos"][i] + "Text[" + ACTIVE + "]";
                var I = document.createElement("textarea");
                DIV.appendChild(I);
                I.name = I.id = PRODUCTS[PRODTYPE.value]["Logos"][i] + "Text[" + ACTIVE + "]";
                I.className = "addtext";
                document.getElementById("logos[" + ACTIVE + "]").appendChild(D);
            }
        }
    } else {
        console.log("Please add logo configuration for this garment type (#2)")
    }
    var NSEL = document.getElementById("numberdiv");
    var NSTYL = document.getElementById("NumberStyle[" + ACTIVE + "]");
    
    document.getElementById("ProdH3").textContent = unCamelCase(PRODTYPE.value);
    for (var i = 1; i <= 2; i++) {
        document.getElementById("ProdS" + i).innerHTML = "";
    }
    StyleCreate()

    //}
    if (STYLE[PRODTYPE.value].length == 1) {
        StyleSelect.call(document.getElementById(STYLE[PRODTYPE.value][0]))
        // changeNav("Style")
    } else {
        changeNav("Style")
    }
    var IL = document.getElementById("GarSel").getElementsByClassName("chosen");
    while (IL.length) {
        IL[0].classList.remove("chosen")
    }
    if (PRODTYPE.value != "" && PRODTYPE.value != null && document.getElementById(PRODTYPE.value) != undefined) {
        document.getElementById(PRODTYPE.value).classList.add("chosen")
    }
    window.addEventListener("beforeunload", navaway);
}

function navaway(e) {
    console.log(e);
    e.preventDefault();
    e.returnValue = "You haven't yet submitted your order.\nTo change your selections, use the navigation bar.";
    return "You haven't yet submitted your order.\nTo change your selections, use the navigation bar."
}

function StyleSelect() {
    var PRODTYPE = document.getElementById("ProductType[" + ACTIVE + "]");
    var PRODSTYLE = document.getElementById("ProductStyle[" + ACTIVE + "]");
    PRODSTYLE.value = this.id;
    var VIEW = document.getElementById("View");
    VIEW.value = "Front";

    // Add a style specific section if needed

    //
    materialController();
    removeNode("ColourPicker", document);
    DesignCreate();
    var VS = document.getElementById("ViewSel");
    while (VS.children.length) {
        VS.removeChild(VS.children[0])
    }
    var L = document.createElement("li");
    VS.appendChild(L)
    var A = document.createElement("a");
    A.id = "Front";
    A.title = "Front View";
    A.classList.add("chosen");
    L.appendChild(A);
    A.addEventListener("click", ViewSelect);
    var I1 = document.createElement("img");
    I1.src = "assets/images/" + PRODTYPE.value + PRODSTYLE.value + "View" + "Front.png";
    A.appendChild(I1)
    var L = document.createElement("li");
    VS.appendChild(L)
    var A = document.createElement("a");
    A.id = "Back";
    A.title = "Back View";
    L.appendChild(A);
    A.addEventListener("click", ViewSelect);
    var I1 = document.createElement("img");
    I1.src = "assets/images/" + PRODTYPE.value + PRODSTYLE.value + "View" + "Back.png";
    A.appendChild(I1)
    if (PRODTYPE.value == "Shorts" && PRODSTYLE.value == "Training" || PRODTYPE.value == "Cap" || PRODSTYLE.value == "Touch Football") {
        var L = document.createElement("li");
        VS.appendChild(L)
        var A = document.createElement("a");
        A.id = "Left";
        A.title = "Left View";
        L.appendChild(A);
        A.addEventListener("click", ViewSelect);
        var I1 = document.createElement("img");
        I1.src = "assets/images/" + PRODTYPE.value + "View" + "Left.svg";
        A.appendChild(I1)
        var L = document.createElement("li");
        VS.appendChild(L)
        var A = document.createElement("a");
        A.id = "Right";
        A.title = "Right View";
        L.appendChild(A);
        A.addEventListener("click", ViewSelect);
        var I1 = document.createElement("img");
        I1.src = "assets/images/" + PRODTYPE.value + "View" + "Right.svg";
        A.appendChild(I1)
    }
    changeNav("Design");
    design();
    NumberSelect.call(document.getElementById(document.getElementById("NumberStyle[" + ACTIVE + "]").value));
    RHSInfo();
    var IL = document.getElementById("StyleSel").getElementsByClassName("chosen");
    while (IL.length) {
        IL[0].classList.remove("chosen")
    }
    if (PRODSTYLE.value != "" && PRODSTYLE.value != null && document.getElementById(PRODSTYLE.value) != undefined) {
        document.getElementById(PRODSTYLE.value).classList.add("chosen")
    }
}

/* Controls the Material Colour of the Shirt */
function materialController(colour) {
    var PRODTYPE = document.getElementById("ProductType[" + ACTIVE + "]");
    var PRODSTYLE = document.getElementById("ProductStyle[" + ACTIVE + "]");
    var PRODDESIGN = document.getElementById("ProductDesign[" + ACTIVE + "]");
    if (colour == "S-BallColour") {
        return COLWY["S-BallColour"]
    }
    if (colour !== undefined && colour.indexOf("TextColour") != -1) {
        return COLWY["Sub"]
    }
    if (PRODTYPE.value == "Jacket") {
        if (colour !== undefined) {
            if (colour == "Zipper") {
                return COLWY["Zipper"]
            } else if (colour == "Piping") {
                return COLWY["Sub"]
            } else {
                return COLWY["Jacket"]
            }
        }
        return COLWY["Jacket"]
    } else if (PRODTYPE.value == "Hoodie") {
        if (colour !== undefined) {
            if (colour == "Drawcord") {
                return COLWY["Drawcord"]
            } else if (colour == "Ribbing") {
                return COLWY["Ribbing"]
            } else if (colour == "Zipper") {
                return COLWY["Zipper"]
            } else {
                return COLWY["Hoodie"]
            }
        }
        return COLWY["Hoodie"]
    } else if (PRODTYPE.value == "SeniorJersey" && PRODSTYLE.value == "Knitted") {
        return COLWY["SeniorJersey"]
    } else if (PRODTYPE.value == "Shorts" && colour == "Short") {
        return COLWY["StockShort"]
    } else if (PRODTYPE.value == "Socks") {
        return COLWY["Sock"]
    } else if (PRODTYPE.value == "Cap") {
        if (PRODDESIGN.value == "Multi") {
            return ["Black", "Navy 289"]
        }
        return COLWY["Cap"]
    } else if (PRODTYPE.value == "Gilet") {
        if (colour !== undefined && colour == "Zipper") {
            return ["Black", "Navy 289"]
        } else {
            return COLWY["Gilet"]
        }
    } else {
        return COLWY["Sub"]
    }
}

function ViewSelect() {
    var VIEW = document.getElementById("View");
    var IL = document.getElementById("ViewSel").getElementsByClassName("chosen");
    while (IL.length) {
        IL[0].classList.remove("chosen")
    }
    this.classList.add("chosen");
    VIEW.value = (typeof (this.id) !== "undefined") ? this.id : "Front";
    design();
}

function NumberSelect() {
    var PRODTYPE = document.getElementById("ProductType[" + ACTIVE + "]");
    var PRODSTYLE = document.getElementById("ProductStyle[" + ACTIVE + "]");
    if (typeof (PRODUCTS[PRODTYPE.value]) != "undefined" && typeof (PRODUCTS[PRODTYPE.value]["Options"]) != "undefined" && PRODUCTS[PRODTYPE.value]["Options"].indexOf("Number") != -1) {/* */
    } else {
        console.log("Number not configured");
        return
    }
    if (!document.getElementById("NumberStyle[" + ACTIVE + "]")) {
        console.log("Number not set");
        return
    }
    var VN = ["NoNumber", "StandardNumber", "OutlineNumber"];
    var NSTYL = document.getElementById("NumberStyle[" + ACTIVE + "]");
    if (this.id != "NumberStyle[" + ACTIVE + "]" && VN.indexOf(this.id) != -1) {
        NSTYL.value = this.id
    }
    ;var IL = document.getElementById("NumberSel").getElementsByClassName("chosen");
    while (IL.length) {
        IL[0].classList.remove("chosen")
    }
    if (NSTYL.value != "" && NSTYL.value != null && document.getElementById(NSTYL.value) != undefined) {
        document.getElementById(NSTYL.value).classList.add("chosen")
    }
    if (document.getElementById("Number[" + ACTIVE + "]")) {
        if (NSTYL.value == "NoNumber") {
            document.getElementById("Number[" + ACTIVE + "]").parentNode.style.display = "none";
        } else {
            document.getElementById("Number[" + ACTIVE + "]").parentNode.style.display = "block"
        }
    }
    if (document.getElementById("NumberOutline[" + ACTIVE + "]")) {
        if (NSTYL.value != "OutlineNumber") {
            document.getElementById("NumberOutline[" + ACTIVE + "]").parentNode.style.display = "none";
        } else {
            document.getElementById("NumberOutline[" + ACTIVE + "]").parentNode.style.display = "block"
        }
    }
    if (document.getElementById("CentreBackSelect[" + ACTIVE + "]")) {
        var CBLOGO = document.getElementById("CentreBackSelect[" + ACTIVE + "]");
        if (NSTYL && NSTYL.value != "NoNumber") {
            if (CBLOGO.length != 1) {
                CBLOGO.remove(2);
                CBLOGO.remove(1);
                CBLOGO.remove(0);
                var V = document.createElement("option");
                V.textContent = V.value = "Numbers";
                CBLOGO.add(V);
            }
        } else {
            if (CBLOGO.length == 1) {
                CBLOGO.remove(0);
                var V = document.createElement("option");
                V.textContent = V.value = "None";
                CBLOGO.add(V);
                var V = document.createElement("option");
                V.textContent = V.value = "Logo";
                CBLOGO.add(V);
                var V = document.createElement("option");
                V.textContent = V.value = "Text";
                CBLOGO.add(V);
            }
        }
    }

    if (!S || !S.documentElement || S.documentElement.nodeName != "svg") {
        design()
    } else if (typeof (S) === "object" && S.readyState == "complete") {
        if (CBLOGO) {
            embellish.call(CBLOGO);
        }
    }
    if (NSTYL.value != "NoNumber") {// add that extra code in stylselect 
    //document.getElementById("CentreBack["+ACTIVE+"]").style.display="none";document.getElementById("CentreBackSelect["+ACTIVE+"]").selectedIndex=0
    }
}

function SeniorSelect() {
    document.getElementById("SeniorStyle[" + ACTIVE + "]").value = this.id;
    var IL = document.getElementById("SeniorSel").getElementsByClassName("chosen");
    while (IL.length) {
        IL[0].classList.remove("chosen")
    }
    this.classList.add("chosen");
    if (document.getElementById("Senior[" + ACTIVE + "]")) {
        if (this.id == "NoSeniorText") {
            document.getElementById("Senior[" + ACTIVE + "]").parentNode.style.display = "none"
        } else {
            document.getElementById("Senior[" + ACTIVE + "]").parentNode.style.display = "inherit"
        }
    }
    //if(VIEWCLICK>0){ViewSelect.call(document.getElementById("Front"))}
    //VIEWCLICK=1;
    design();
}

function BibSelect() {
    document.getElementById("BibStyle[" + ACTIVE + "]").value = this.id;
    var IL = document.getElementById("BibSel").getElementsByClassName("chosen");
    while (IL.length) {
        IL[0].classList.remove("chosen")
    }
    this.classList.add("chosen");
    if (document.getElementById("Bib[" + ACTIVE + "]")) {
        if (this.id == "NoBib") {
            document.getElementById("Bib[" + ACTIVE + "]").parentNode.style.display = "none"
        } else {
            document.getElementById("Bib[" + ACTIVE + "]").parentNode.style.display = "inherit"
        }
    }
    if (document.getElementById("Position[" + ACTIVE + "]")) {
        if (this.id == "NoBib") {
            document.getElementById("Position[" + ACTIVE + "]").parentNode.style.display = "none"
        } else {
            document.getElementById("Position[" + ACTIVE + "]").parentNode.style.display = "inherit"
        }
    }
    design();
}

function StyleCreate() {
    VALS = [];
    var PRODTYPE = document.getElementById("ProductType[" + ACTIVE + "]");
    var PRODSTYLE = document.getElementById("ProductStyle[" + ACTIVE + "]");
    var SS = document.getElementById("StyleSel")
    while (SS.children.length) {
        SS.removeChild(SS.children[0])
    }
    if (typeof (STYLE[PRODTYPE.value]) === "undefined") {
        PRODSTYLE.parentNode.style.display = "none";
        StyleSelect();
        return
    }
    else {
        PRODSTYLE.parentNode.style.display = "";
        VALS = STYLE[PRODTYPE.value]
    }
    for (var i = 0; i < VALS.length; i++) {
        var L = document.createElement("li");
        var A = document.createElement("a");
        A.id = A.title = VALS[i];
        L.appendChild(A);
        A.addEventListener("click", StyleSelect);
        var I = document.createElement("img");
        I.src = "assets/images/" + PRODTYPE.value + VALS[i] + ".png";
        A.appendChild(I)
        var BR = document.createElement("br");
        A.appendChild(BR);
        var IT = document.createElement("h2");
        IT.textContent = VALS[i];
        A.appendChild(IT);
        SS.appendChild(L)
    }
    var BLRB = (typeof (INFO[PRODTYPE.value]) != "undefined") ? INFO[PRODTYPE.value] : "";
    document.getElementById("ProductInfo1").innerHTML = "Can't find what you're looking for? Contact us for a more detailed consultation.<br>" + BLRB;
}

function DesignCreate() {
    VALS = [];
    var PRODTYPE = document.getElementById("ProductType[" + ACTIVE + "]");
    var PRODSTYLE = document.getElementById("ProductStyle[" + ACTIVE + "]");
    var PRODDESIGN = document.getElementById("ProductDesign[" + ACTIVE + "]");
    var DS = document.getElementById("DesignSel");
    while (DS.children.length) {
        DS.removeChild(DS.children[0])
    }
    if (typeof (DESIGNS[PRODTYPE.value]) === "undefined") {
        PRODDESIGN.value = PRODTYPE.value;
        VALS = [PRODTYPE.value]
    } else if (typeof (DESIGNS[PRODTYPE.value][PRODSTYLE.value]) !== "undefined") {
        VALS = DESIGNS[PRODTYPE.value][PRODSTYLE.value]
    } else {
        VALS = DESIGNS[PRODTYPE.value]
    }
    for (var i = 0; i < VALS.length; i++) {
        //var V = document.createElement("option");V.textContent=V.value=VALS[i];PRODDESIGN.add(V);
        var L = document.createElement("li");
        var A = document.createElement("a");
        A.id = A.title = VALS[i];
        L.appendChild(A);
        //A.addEventListener("click",function(){PRODDESIGN.value=this.id;design();RHSInfo();});
        var PSLC = (PRODSTYLE.value == "undefined") ? "" : PRODSTYLE.value.toLowerCase();
        var DNAME = PRODTYPE.value + "/" + PSLC + VALS[i];
        var I = document.createElement("img");
        I.src = "assets/images/" + DNAME + ".jpg";
        
        if (PRODTYPE.value == "Singlet") {
            I.src = "assets/images/Singlet/" + VALS[i] + ".png";
        } else if (PRODTYPE.value == "Tee") {
            I.src = "assets/images/Tee/" + VALS[i] + ".png";
        } else if (PRODTYPE.value == "Polo") {
            I.src = "assets/images/Polo/" + VALS[i] + ".png";
        } else if (PRODTYPE.value == "Rugby") {
            I.src = "assets/images/Rugby/" + VALS[i] + ".png";
        } else if (PRODTYPE.value == "Netball") {
            I.src = "assets/images/Netball/" + VALS[i] + ".png";
        }
        A.appendChild(I)
        DS.appendChild(L)
    }
    design();
}

COLOURS = "Extended";
MINQTY = 1;
LOGO = [];
LOGO["LeftChest"] = {
    x: 42,
    y: 20,
    width: 12,
    height: 12,
    clip: "FBodyLogos"
};
LOGO["RightChest"] = {
    x: 17,
    y: 20,
    width: 12,
    height: 12,
    branding: 1,
    clip: "FBodyLogos"
};
LOGO["RightSleeve"] = {
    x: 0,
    y: 15,
    width: 12,
    height: 12,
    rotate: 15,
    clip: "SleeveLogos"
};
LOGO["LeftSleeve"] = {
    x: 59,
    y: 15,
    width: 12,
    height: 12,
    rotate: -15,
    clip: "SleeveLogos"
};
LOGO["CentreChest"] = {
    x: 18.3,
    y: 31.5,
    width: 35,
    height: 25,
    clip: "FBodyLogos"
};
LOGO["Default"] = {
    x: 30.5,
    y: 17,
    width: 10,
    height: 10,
    branding: 2,
    clip: "FBodyLogos"
};

function CollarSelect(value) {
    //var product=BOOKLET.Active;	
    var COLST = document.getElementById("CollarStyle[" + ACTIVE + "]");
    var CVO = []
    for (var i = 0; i < COLST.options.length; i++) {
        CVO.push(COLST.options[i].value)
    }
    if (typeof (value) === "undefined") {
        var COLV = readCookie("CollarStyle[" + ACTIVE + "]");
        if (!COLV || CVO.lastIndexOf(COLV) == -1) {
            COLST.selectedIndex = 0
        } else if (CVO.lastIndexOf(COLV) != -1) {
            COLST.selectedIndex = CVO.lastIndexOf(COLV)
        }
    } else {
        createCookie("CollarStyle[" + ACTIVE + "]", COLST.value, 3);
    }
    // Collar Selection Indicator
    var IL = document.getElementById("CollarSel").getElementsByTagName("a");
    for (var i = 0; i < IL.length; i++) {
        if (IL[i].id == COLST.value) {
            IL[i].classList.add("chosen")
        } else {
            IL[i].classList.remove("chosen")
        }
    }
    if (document.getElementById("View").value != "Back") {
        var COLS = S.getElementById("Collars").getElementsByTagName("g")
    } else {
        var COLS = S.getElementById("Collars").getElementsByTagName("path")
    }
    for (var i = 0; i < COLS.length; i++) {
        COLS[i].style.visibility = "hidden"
    }
    S.getElementById(COLST.value).removeAttribute("visibility");
    S.getElementById(COLST.value).style.visibility = "visible";
    
    RHSInfo();
}

function RHSInfo() {
    var PRODTYPE = document.getElementById("ProductType[" + ACTIVE + "]");
    var PS = document.getElementById("ProductStyle[" + ACTIVE + "]");
    var PD = document.getElementById("ProductDesign[" + ACTIVE + "]");
    var COLST = document.getElementById("CollarStyle[" + ACTIVE + "]");
    if ((PS.value == "" || PS.value == "undefined") && STYLE[PRODTYPE.value]) {
        return
    }
    if (PRODTYPE.value == "Jersey" || PRODTYPE.value == "Tee" && PS.value == "Players") {
        var STYL = (PS.value == "Club") ? PS.value : COLST.value
    } else if (typeof (STYLE[PRODTYPE.value]) === "undefined") {
        var STYL = PRODTYPE.value
    } else {
        var STYL = PS.value
    }

    document.getElementById("ProdH3").textContent = unCamelCase(STYL);
    document.getElementById("ProdS1").innerHTML = unCamelCase(PRODTYPE.value)
    document.getElementById("ProdS2").innerHTML = " Design #" + PD.value;
    if (typeof (STYLE[PRODTYPE.value]) === "undefined") {
        document.getElementById("ProdH3").textContent = unCamelCase(PRODTYPE.value);
    }
}

function JerseyInit() {
    var PRODTYPE = document.getElementById("ProductType[" + ACTIVE + "]");
    var PS = document.getElementById("ProductStyle[" + ACTIVE + "]");
    var PD = document.getElementById("ProductDesign[" + ACTIVE + "]");
    var COLST = document.getElementById("CollarStyle[" + ACTIVE + "]");
    var hideID = [];
    var hideCLASS = [];
    var hideDOM = [];

    var showID = showDOM = showCLASS = [];
    if (PRODTYPE.value == "Singlet") {
        showDOM = ["Trim"]
    } else {
        showDOM = ["Collar"];
        showID.push("Sleeves");
    }
    if (PRODTYPE.value == "Jersey") {
        if (PS.value == "Players") {
            hideID = [];
            hideCLASS = [];
            hideDOM = [];
            COLARR = (PRODTYPE.value == "Tee" && PS.value == "Players") ? ["Nitro", "Excel", "Performance"] : ["Nitro", "Performance"];
            showDOM.push("Insert");
            DESC = "Standard Fit<br>Koolite Polyester";
            if (PRODTYPE.value == "Tee") {
                DESC = "Standard Fit<br>Microwaffle/Honeycomb Polyester";
            }
        }
    } else if (PRODTYPE.value == "Polo") {
        COLARR = ["Polo"];
        DESC = (PS.value == "Club" || PS.value == "Performance") ? "Classic Fit<br>Microwaffle/Honeycomb Polyester" : "Standard Fit<br>Microwaffle/Honeycomb Polyester";
    }
    if (PRODTYPE.value == "Singlet") {
        showDOM = ["Trim"];
        COLARR = ["SingletTrim"];
        //COLARR=["SingletTrim"];
        if (PS.value == "Performance") {
            /*COLARR=["SingletTrim"];*/
            DESC = "Standard Fit<br>Microwaffle/Honeycomb Polyester";
        }
    }
    if (COLARR.length > 1) {
        document.getElementById("collardiv").style.display = "inherit";
    } else {
        document.getElementById("collardiv").style.display = "none";
    }
    for (var i = 0; i < hideID.length; i++) {
        if (S.getElementById(hideID[i])) {
            S.getElementById(hideID[i]).style.visibility = "hidden"
        }
    }
    for (var i = 0; i < hideDOM.length; i++) {
        if (document.getElementById(hideDOM[i])) {
            document.getElementById(hideDOM[i]).parentNode.style.display = "none"
        }
    }
    for (var i = 0; i < hideCLASS.length; i++) {
        var j = S.getElementsByClassName(hideCLASS[i]);
        for (var k = 0; k < j.length; k++) {
            j[k].style.visibility = "hidden"
        }
    }
    for (var i = 0; i < showID.length; i++) {
        if (S.getElementById(showID[i])) {
            S.getElementById(showID[i]).style.visibility = "inherit"
        }
    }
    for (var i = 0; i < showDOM.length; i++) {
        if (document.getElementById(showDOM[i])) {
            document.getElementById(showDOM[i]).parentNode.style.display = ""
        }
    }
    for (var i = 0; i < showCLASS.length; i++) {
        var j = S.getElementsByClassName(showCLASS[i]);
        for (var k = 0; k < j.length; k++) {
            j[k].style.visibility = "inherit"
        }
    }
    // Code to create select element, or extra code to display thumbnails in additional box for new DYO 
    var COLST = document.getElementById("CollarStyle[" + ACTIVE + "]");
    ;var COLSEL = document.getElementById("CollarSel");
    while (COLSEL.children.length) {
        COLSEL.removeChild(COLSEL.children[0])
    }
    // while (COLST.options.length) {
    //     COLST.remove(0)
    // }
    for (var i = 0; i < COLARR.length; i++) {
        var V = document.createElement("option");
        V.value = COLARR[i];
        V.textContent = unCamelCase(COLARR[i]);
        // COLST.add(V)
        var L = document.createElement("li");
        var A = document.createElement("a");
        A.id = A.title = COLARR[i];
        L.appendChild(A);
        A.addEventListener("click", function() {
            createCookie("CollarStyle[" + ACTIVE + "]", this.id, 3);
            CollarSelect()
        });
        // temporary workaround to remove file not found errors due to recent design change
        if (COLARR.length > 1) {
            var I = document.createElement("img");
            I.src = "assets/images/Collars/Collar" + COLARR[i] + ".svg";
            A.appendChild(I);
        }
        // end workaround, remove if statement and adjust accordingly if modifying this feature
        COLSEL.appendChild(L);
    }
    if (PRODTYPE.value != "Singlet" && PRODTYPE.value != "Polo") {
        CollarSelect();
    }
}

function svgController() {
    console.log("Controller running");
    var PRODTYPE = document.getElementById("ProductType[" + ACTIVE + "]");
    var PRODSTYLE = document.getElementById("ProductStyle[" + ACTIVE + "]");
    PRODDESIGN = document.getElementById("ProductDesign[" + ACTIVE + "]");
    var BRAND = document.getElementById("branding[" + ACTIVE + "]");
    var NSTYL = document.getElementById("NumberStyle[" + ACTIVE + "]");
    var SHOBRAD = document.getElementById("ShortsBranding[" + ACTIVE + "]");
    var SHOBRA = document.getElementById("ShortsBrand[" + ACTIVE + "]");
    SHOBRA.addEventListener("change", design);
    SHOBRAD.style.display = "none";
    var SOCKTND = document.getElementById("SockTeamName[" + ACTIVE + "]");
    var SOCKTNS = document.getElementById("SockTeamNameSelect[" + ACTIVE + "]");
    var SOCKTNT = document.getElementById("SockTeamNameText[" + ACTIVE + "]");
    SHOBRA.addEventListener("change",design);
    SOCKTND.style.display = "none";
    LOGO = [];
    DESC = "<br>";
    VALUES = [];

    /* Singlet */
    if (PRODTYPE.value == "Singlet") {

        LOGO["LeftChest"] = {
            x: 295,
            y: 145,
            width: 80,
            height: 80,
            clip: "FBodyLogos"
        };
        LOGO["RightChest"] = {
            x: 120,
            y: 145,
            width: 80,
            height: 80,
            branding: 1,
            clip: "FBodyLogos"
        };
        LOGO["CentreChest"] = {
            x: 100,
            y: 260,
            width: 300,
            height: 100,
            clip: "FBodyLogos"
        };
        VALUES['UpperBack'] = {
            y: 80,
        };
        LOGO["UpperBack"] = {
            x: 120,
            y: VALUES['UpperBack']['y'],
            width: 260,
            height: 60,
            clip: "BBodyLogos"
        };
        
        if (PRODTYPE.value == "Singlet" && PRODDESIGN.value == "S-01"){
            LOGO["CentreBack"] = {
                x: 100,
                y: VALUES['UpperBack']['y']+140,
                width: 300,
                height: 200,
                clip: "BBodyLogos"
            };
        }
        else{
            LOGO["CentreBack"] = {
                x: 100,
                y: VALUES['UpperBack']['y']+70,
                width: 300,
                height: 200,
                clip: "BBodyLogos"
            };
        }
        LOGO["LowerBack"] = {
            x: 62,
            y: 570,
            width: 380,
            height: 80,
            clip: "BBodyLogos"
        };
        LOGO["Default"] = {
            x: 230,
            y: 130,
            width: 44,
            height: 44,
            clip: "FBodyLogos"
        };
        drawNumber();
        drawLogo("CentreBack", "numbers");
    }
    /* End Singlet */

    /* Teeshirt */
    else if (PRODTYPE.value == "Tee") {
        LOGO["Default"] = {
            x: 230,
            y: 70,
            width: 35,
            height: 35,
            clip: "FBodyLogos"
        };
        LOGO["LeftChest"] = {
            x: 295,
            y: 90,
            width: 80,
            height: 80,
            clip: "FBodyLogos"
        };
        LOGO["RightChest"] = {
            x: 120,
            y: 90,
            width: 80,
            height: 80,
            branding: 1,
            clip: "FBodyLogos"
        };
        LOGO["CentreChest"] = {
            x: 120,
            y: 230,
            width: 260,
            height: 100,
            clip: "FBodyLogos"
        };
        VALUES['UpperBack'] = {
            y: 40,
        };
        LOGO["UpperBack"] = {
            x: 115,
            y: VALUES['UpperBack']['y'],
            width: 270,
            height: 60,
            clip: "BBodyLogos"
        };
        LOGO["CentreBack"] = {
            x: 120,
            y: VALUES['UpperBack']['y']+70,
            width: 260,
            height: 200,
            clip: "BBodyLogos"
        };
        LOGO["LowerBack"] = {
            x: 112,
            y: 440,
            width: 270,
            height: 80,
            clip: "BBodyLogos"
        };
    }
    /* End Teeshirt */

    /* Polo */
    else if (PRODTYPE.value == "Polo") {
        LOGO["Default"] = {
            x: 235,
            y: 250,
            width: 36,
            height: 36,
            clip: "FBodyLogos"
        };
        LOGO["LeftChest"] = {
            x: 295,
            y: 120,
            width: 80,
            height: 80,
            clip: "FBodyLogos"
        };
        LOGO["RightChest"] = {
            x: 120,
            y: 120,
            width: 80,
            height: 80,
            branding: 1,
            clip: "FBodyLogos"
        };
        LOGO["CentreChest"] = {
            x: 120,
            y: 260,
            width: 260,
            height: 100,
            clip: "FBodyLogos"
        };
        VALUES['UpperBack'] = {
            y: 40,
        };
        LOGO["UpperBack"] = {
            x: 115,
            y: VALUES['UpperBack']['y'],
            width: 270,
            height: 60,
            clip: "BBodyLogos"
        };
        LOGO["CentreBack"] = {
            x: 120,
            y: VALUES['UpperBack']['y']+70,
            width: 260,
            height: 200,
            clip: "BBodyLogos"
        };
        LOGO["LowerBack"] = {
            x: 115,
            y: 520,
            width: 270,
            height: 80,
            clip: "BBodyLogos"
        };
    }
    /* End Polo */

    /* Rugby */
    else if (PRODTYPE.value == "Rugby") {
        LOGO["Default"] = {
            x: 225,
            y: 100,
            width: 35,
            height: 35,
            clip: "FBodyLogos"
        };
        LOGO["LeftChest"] = {
            x: 285,
            y: 120,
            width: 80,
            height: 80,
            clip: "FBodyLogos"
        };
        LOGO["RightChest"] = {
            x: 120,
            y: 120,
            width: 80,
            height: 80,
            branding: 1,
            clip: "FBodyLogos"
        };
        LOGO["CentreChest"] = {
            x: 110,
            y: 260,
            width: 260,
            height: 100,
            clip: "FBodyLogos"
        };
        VALUES['UpperBack'] = {
            y: 65,
        };
        LOGO["UpperBack"] = {
            x: 105,
            y: VALUES['UpperBack']['y'],
            width: 270,
            height: 60,
            clip: "BBodyLogos"
        };
        LOGO["CentreBack"] = {
            x: 110,
            y: VALUES['UpperBack']['y']+70,
            width: 260,
            height: 200,
            clip: "BBodyLogos"
        };
        LOGO["LowerBack"] = {
            x: 105,
            y: 520,
            width: 270,
            height: 80,
            clip: "BBodyLogos"
        };
    }
    /* End Rugby*/

    /* Netball */
    else if (PRODTYPE.value == "Netball") {
        LOGO["Default"] = {
            x: 150,
            y: 115,
            width: 35,
            height: 35,
            clip: "FBodyLogos"
        };
        LOGO["LeftChest"] = {
            x: 185,
            y: 140,
            width: 70,
            height: 70,
            branding: 2,
            clip: "FBodyLogos"
        };
        LOGO["RightChest"] = {
            x: 80,
            y: 140,
            width: 70,
            height: 70,
            branding: 1,
            clip: "FBodyLogos"
        };
        LOGO["CentreChest"] = {
            x: 85,
            y: 370,
            width: 160,
            height: 100,
            clip: "FBodyLogos"
        };
        VALUES['UpperBack'] = {
            y: 30,
        };
        LOGO["UpperBack"] = {
            x: 75,
            y: VALUES['UpperBack']['y'],
            width: 185,
            height: 60,
            clip: "BBodyLogos"
        };
        LOGO["CentreBack"] = {
            x: 88,
            y: VALUES['UpperBack']['y']+70,
            width: 160,
            height: 160,
            clip: "BBodyLogos"
        };
        LOGO["LowerBack"] = {
            x: 66,
            y: 520,
            width: 200,
            height: 80,
            clip: "BBodyLogos"
        };
    }

    /* End Netball */


    //Hide SBall choices
    // var HIDESBALL = ["SeniorJersey", "Socks", "Jacket", "Hoodie", "Shorts", "Cap"];
    // if (HIDESBALL.indexOf(PRODTYPE.value) != -1) {
    //     BRAND.style.display = "none"
    // } else {
    //     BRAND.style.display = "inherit"
    // }
    //document.getElementById("senioreasyupload").style.display=(PRODTYPE.value=="SeniorJersey")?"":"none";
    //if(PRODTYPE.value!="SeniorJersey"){document.getElementById("SeniorJerseySpreadsheet").value=""}
    DU = document.getElementsByClassName("uploaddiv");
    for (var i = 0; i < DU.length; i++) {
        var M = (DU[i].id.indexOf("[") != -1) ? DU[i].id.slice(0, DU[i].id.indexOf("[")) : DU[i].id;
        if (LOGO[M]) {
            DU[i].style.display = (M == "Default" || M == "RightHip" || (M == "CentreBack" && NSTYL.value != "NoNumber")) ? "none" : ""
        } else {
            DU[i].style.display = "none";
            removeNode(M, S)
            DU[i].getElementsByTagName("select")[0].selectedIndex = 0;
            DU[i].getElementsByTagName("input")[0].value = "";
            DU[i].getElementsByTagName("textarea")[0].value = "";
        }
    }
    document.getElementById("collardiv").style.display = "none";
    if (PRODTYPE.value == "Jersey" || PRODTYPE.value == "Tee" && PRODSTYLE.value == "Players" || PRODTYPE.value == "Polo" || PRODTYPE.value == "Singlet") {
        // JerseyInit()
    }
    var SBALL = document.getElementById("SBALL[" + ACTIVE + "]");
    // Configure Branding Colours
    if (typeof (BRANDONCOLOUR[PRODTYPE.value]) === "undefined") {
        BRANDONCOLS = []
    } else if (typeof (BRANDONCOLOUR[PRODTYPE.value][PRODSTYLE.value]) !== "undefined") {
        BRANDONCOLS = BRANDONCOLOUR[PRODTYPE.value][PRODSTYLE.value];
    } else {
        BRANDONCOLS = BRANDONCOLOUR[PRODTYPE.value];
    }
    // Add branding per location code later
    //var SBALLCOL=document.getElementById("S-BallColour");
    if (BRANDONCOLS.hasOwnProperty(PRODDESIGN.value)) {
        BRANDONCOL = BRANDONCOLS[PRODDESIGN.value];
    } else {
        if (PRODTYPE.value == "Socks") {
            BRANDONCOL = (PRODSTYLE.value == "Elite") ? "Leg" : "Foot"
        } else {
            BRANDONCOL = "Colour1"
        }
    }
    //if(BRANDONCOL){SBALLCOL.parentNode.style.display="none"}else{SBALL.parentNode.style.display="inherit"}
    if (document.getElementById("RightChestSelect[" + ACTIVE + "]")) {
        var RCLOGO = document.getElementById("RightChestSelect[" + ACTIVE + "]");
        var LSTANDARD = ["None", "Logo", "Text"];
        var LRCL = [];
        var LFULL = (!PRODUCTS[PRODTYPE.value].Licenses) ? LSTANDARD : LSTANDARD.concat(PRODUCTS[PRODTYPE.value].Licenses);
        for (i = RCLOGO.options.length - 1; i > 2; i--) {
            if (LFULL.indexOf(RCLOGO.options[i].value) == -1) {
                if (RCLOGO.options[i].selected && S.getElementById("RightChest")) {
                    removeNode("RightChest", S)
                }
                RCLOGO.remove(i)
            }
        }
        for (i = 0; i < RCLOGO.options.length; i++) {
            LRCL.push(RCLOGO.options[i].value);
        }
        if (!PRODUCTS[PRODTYPE.value].Licenses || PRODUCTS[PRODTYPE.value].Licenses.length == 0) {/* do nothing for now */
        } else {
            for (i in PRODUCTS[PRODTYPE.value].Licenses) {
                if (LRCL.indexOf(PRODUCTS[PRODTYPE.value].Licenses[i]) == -1) {
                    var V = document.createElement("option");
                    V.textContent = V.value = PRODUCTS[PRODTYPE.value].Licenses[i];
                    RCLOGO.add(V);
                }
            }
        }
    }
    if (PRODTYPE.value == "Jacket" || PRODTYPE.value == "Hoodie") {
        SBALL.remove(1)
    } else {
        if (SBALL.length != 2) {
            var V = document.createElement("option");
            V.textContent = V.value = "Default";
            SBALL.add(V);
        }
    }
    var COLSTYL = document.getElementById("CollarStyle[" + ACTIVE + "]")
    SBall();
    // if (PRODTYPE.value == "Tee") {
    //     INS = document.getElementById("Insert[" + ACTIVE + "]");
    //     if (COLSTYL.value == "Excel") {
    //         INS.parentNode.style.display = "none"
    //     } else {
    //         INS.parentNode.style.display = ""
    //     }
    // }

    if (document.getElementById("CentreBackSelect[" + ACTIVE + "]")) {
        var CBLOGO = document.getElementById("CentreBackSelect[" + ACTIVE + "]");
        if (NSTYL && NSTYL.value != "NoNumber") {
            if (CBLOGO.length != 1) {
                CBLOGO.remove(2);
                CBLOGO.remove(1);
                CBLOGO.remove(0);
                var V = document.createElement("option");
                V.textContent = V.value = "Numbers";
                CBLOGO.add(V);
            }
        } else {
            if (CBLOGO.length == 1) {
                CBLOGO.remove(0);
                var V = document.createElement("option");
                V.textContent = V.value = "None";
                CBLOGO.add(V);
                var V = document.createElement("option");
                V.textContent = V.value = "Logo";
                CBLOGO.add(V);
                var V = document.createElement("option");
                V.textContent = V.value = "Text";
                CBLOGO.add(V);
            }
        }
    }

    if (NSTYL.value == "StandardNumber") {
        if (S.getElementById("Numbers")) {
            S.getElementById("Numbers").style.visibility = "inherit"
        }
        if (document.getElementById("Number[" + ACTIVE + "]")) {
            document.getElementById("Number[" + ACTIVE + "]").parentNode.style.display = "block"
        }
        if (document.getElementById("NumberOutline[" + ACTIVE + "]")) {
            document.getElementById("NumberOutline[" + ACTIVE + "]").parentNode.style.display = "none"
        }
        if (S.getElementById("NumberOutline")) {
            S.getElementById("NumberOutline").style.visibility = "hidden"
        }
    } else if (NSTYL.value == "OutlineNumber") {
        if (S.getElementById("NumberOutline")) {
            S.getElementById("NumberOutline").style.visibility = "inherit"
        }
        if (document.getElementById("Number[" + ACTIVE + "]")) {
            document.getElementById("Number[" + ACTIVE + "]").parentNode.style.display = "block"
        }
        if (document.getElementById("NumberOutline[" + ACTIVE + "]")) {
            document.getElementById("NumberOutline[" + ACTIVE + "]").parentNode.style.display = "block"
        }
        if (S.getElementById("Numbers")) {
            S.getElementById("Numbers").style.visibility = "inherit"
        }
    } else {
        if (S.getElementById("Numbers")) {
            S.getElementById("Numbers").style.visibility = "hidden"
        }
        if (S.getElementById("NumberOutline")) {
            S.getElementById("NumberOutline").style.visibility = "hidden"
        }
        if (document.getElementById("Number[" + ACTIVE + "]")) {
            document.getElementById("Number[" + ACTIVE + "]").parentNode.style.display = "none"
        }
        if (document.getElementById("NumberOutline[" + ACTIVE + "]")) {
            document.getElementById("NumberOutline[" + ACTIVE + "]").parentNode.style.display = "none"
        }
    }
}

function sockEmbellish() {
    var S = document.getElementById("DYOSVG").contentDocument;
    if (!S || !S.documentElement || S.documentElement.nodeName != "svg") {
        console.log("Sock Embellish function didn't find a valid svg to draw")
    }
    removeNode("SockTeamName", S);
    removeNode("Sball", S);
    var TNS = document.getElementById("SockTeamNameSelect[" + ACTIVE + "]");
    var SOCKTNT = document.getElementById("SockTeamNameText[" + ACTIVE + "]");
    if (SOCKTNT.value.length > 13) {
        alert("A 13 character limit applies to Team Name embroidery on socks");
        SOCKTNT.value = SOCKTNT.value.slice(0, 13)
    }
    var P = (S.getElementById("Leg")) ? S.getElementById("Leg").parentNode : S.documentElement;
    if (!S.getElementById("BackText")) {
        var g = document.createElementNS(SVG_NS, "g");
        g.id = "BackText";
        P.appendChild(g)
    }
    if (!S.getElementById("SideText")) {
        var g = document.createElementNS(SVG_NS, "g");
        g.id = "SideText";
        P.appendChild(g)
    }
    if (!S.getElementById("NoText")) {
        var g = document.createElementNS(SVG_NS, "g");
        g.id = "NoText";
        P.appendChild(g)
    }
    S.getElementById("BackText").style.display = (TNS.value != "Back") ? "none" : "";
    S.getElementById("SideText").style.display = (TNS.value != "Sides") ? "none" : "";
    S.getElementById("NoText").style.display = (TNS.value == "Back") ? "none" : "";
    if (!S.getElementById("sball")) {
        drawSBall()
    }
    drawLogo("Sball", "sball");
    if (TNS.value != "None") {
        if (!document.getElementById("SockTeamNameTextColour[" + ACTIVE + "]")) {
            addColour("SockTeamNameTextColour[" + ACTIVE + "]")
        }
        SOCKTNT.parentNode.style.display = ""
        position = "SockTeamName";
        var t = document.createElementNS(SVG_NS, "text");
        t.id = position;
        var PTC = document.getElementById("SockTeamNameTextColour[" + ACTIVE + "]");
        createCookie(PTC.id, PTC.value, 3);
        t.setAttributeNS(null, 'fill', HEX[PTC.value]);
        var tlb = document.getElementById("SockTeamNameText[" + ACTIVE + "]").value.split("");
        var tvw = 1;
        tvh = tlb.length * 1.1;
        var A = LOGO[position];
        var fw = A['width'];
        var fh = A['height'] / tvh;
        var fs = fw;
        var tratio = ((1 - (fw / fh)) / 2) * A['height'];
        var tyam = (tratio > 0) ? tratio : 0;
        var x = A['x'] + A['width'] * .5;
        var y = A['y'] + tyam;
        t.setAttributeNS(null, 'class', 'TeamName fill');
        t.setAttributeNS(null, 'x', x);
        t.setAttributeNS(null, 'y', y);
        t.setAttributeNS(null, 'font-size', fs);
        t.setAttributeNS(null, 'text-anchor', 'middle');
        if (A['rotate']) {
            var CX = A['x'] + A['width'] / 2;
            var CY = A['y'] + A['height'] / 2;
            t.setAttributeNS(null, "transform", "rotate(" + A['rotate'] + "," + CX + "," + CY + ")")
        }
        for (var i in tlb) {
            var ts = document.createElementNS(SVG_NS, "tspan");
            ts.setAttributeNS(null, 'x', x);
            ts.setAttributeNS(null, 'dy', '1.1em');
            var tn = document.createTextNode(tlb[i]);
            ts.appendChild(tn);
            t.appendChild(ts);
        }
        if (A['clip'] && S.getElementById(A['clip'])) {
            S.getElementById(A['clip']).insertBefore(t, S.getElementById(A['clip']).firstChild)
        } else if (S.getElementById("Content")) {
            S.getElementById("Content").insertBefore(t, S.getElementById("Content").firstChild)
        } else {
            S.documentElement.appendChild(t)
        }

        if (t.parentNode.style.display == "") {
            var td = t.getBBox();
            var tsw = A['width'] / td.width;
            var tsh = A['height'] / td.height;
            if (tsw >= 1 || tsh >= 1) {
                var tso = (tsw < tsh) ? tsw : tsh;
                fs = fs * tso;
                t.setAttributeNS(null, 'font-size', fs);
                var tss = t.getElementsByTagNameNS(SVG_NS, "tspan");
                for (i = 0; i < tss.length; i++) {
                    //var nf=(i==0)?0:fs*1.1;
                    tss[i].setAttributeNS(null, 'dy', '1.1em')
                }
                var tratio = ((1 - (tsw / tsh)) / 2) * A['height'];
                var tyam = (tratio > 0) ? tratio : 0;
                var y = A['y'] + tyam;
                t.setAttributeNS(null, 'y', y);
            }
        }

    } else {
        removeNode("SockTeamNameTextColour[" + ACTIVE + "]", document);
        SOCKTNT.parentNode.style.display = "none"
    }
}

function validateform() {
    var err = [];
    if (!document.getElementById("Name").value || !(document.getElementById("Phone").value || document.getElementById("Email").value)) {
        err.push("your contact details are filled in");
    }
    //if(!document.getElementById("Competition").value){err.push("your competition is specified or 'N\\A'");}
    var captcha_response = grecaptcha.getResponse();
    if (captcha_response.length == 0) {
        err.push("the reCAPTCHA is checked");
    }
    if (err.length) {
        alert("Please ensure that: " + err.join(", ") + '.');
        return false
    } else {
        window.removeEventListener("beforeunload", navaway);
        return true;
    }
}

/*Definitions*/
SVG_NS = 'http://www.w3.org/2000/svg';
XLink_NS = 'http://www.w3.org/1999/xlink';
CDColour = ["Natural", "Sand", "Flash", "Cream", "Fawn", "BA Yellow", "Yellow"];
HDColour = ["Natural", "Sand", "Flash", "Cream", "Fawn", "BA Yellow", "Yellow"];
SColour = ["Natural", "Sand", "Flash", "Cream", "Fawn", "BA Yellow", "Yellow"];
ColourHex = ["Natural", "Sand", "Flash", "Cream", "Fawn", "BA Yellow", "Yellow", "Boomers Gold", "Bobs Gold", "Gold", "Hot Pink", "Powder Pink", "Baby Pink", "Plum", "Fucia", "Musk", "Lilac", "Lavender", "Purple", "Light Purple", "Violet", "Dark Maroon", "Maroon", "Light Maroon", "Burgundy", "Cherry", "Light Red", "Red", "Fire", "Orange", "Tigers Orange", "Ochre", "Choc Brown", "Dark Brown", "Light Brown", "Olive", "Black", "Ink", "Midnight", "Navy", "Junior Navy", "Airforce Blue", "Ice Blue", "Azure", "Turquoise", "Cyan", "Mid Blue", "Sky", "Corn Flower", "Aqua", "Sapphire", "Royal", "Reflex Blue", "Mint", "Jade", "Teal", "Crocs Green", "Fluro Green", "Lime", "Apple", "Emerald", "Grass", "Forest","Khaki", "Bottle", "Dark Bottle", "Ocean", "Petrol", "Jet Black", "Gun Grey", "Charcoal", "Soft Grey", "Silver", "Titanium"];
PRGB = ["#FBF7F6", "#FFF5EF", "#FCF4E4", "#F5E0BA", "#DBC592", "#FFEB41", "#FFED00", "#FEDF40", "#FEDA28", "#FBCC11", "#E4137B", "#EF8FB8", "#F0BACA", "#C675AD", "#AE2082", "#832F8B", "#4F7BBE", "#2C5AA6", "#283C88", "#683790", "#1E4283", "#6A1D47", "#88194D", "#B51E43", "#B61F39", "#C61E50", "#E51B4A", "#DB1F27", "#DF1F26", "#E64B25", "#F3A21E", "#D34427", "#825739", "#543E25", "#856427", "#8F8439", "#231815", "#231815", "#103054", "#073454", "#01466D", "#0076AC", "#51C1DF", "#00ABDB", "#00AAE0", "#00B5EB", "#009DDF", "#B6DCF5", "#00ACE8", "#0097DA", "#0074B7", "#006EA4", "#0068AC", "#A4D5C1", "#00A7B6", "#009E9F", "#009A82", "#B9D436", "#4EB248", "#00AA5F", "#009A51", "#B8CC35", "#00784F", "#006D3B", "#00684A", "#005C42", "#0080A0", "#007C7C", "#211613", "#635859", "#A0908B", "#D2CDCA", "#E7EEF3", "#FAFAF8"
    ];
HEX = new Object();
for (i in ColourHex) {
    HEX[ColourHex[i]] = PRGB[i]
}
defcols = {
    "Colour1": "Mid Blue",
    "Colour2": "Navy",
    "Colour3": "Gun Grey",
    "Colour4": "Petrol",
    "Colour5": "Lime",
    "Colour6": "Maroon",
    "BottomHem" : "Royal",
    "Number": "White",
    "NumberOutline": "Black",
    "Collar": "Midnight",
    "NeckAndArmTrim": "Airforce Blue",
    "NeckTrim": "Airforce Blue",
    "ArmTrim": "Airforce Blue",
    "InnerTrim": "Natural",
    "Insert": "Azure",
    "Gradient1" : "Gold",
    "Gradient2" : "Orange",
    "Gradient3" : "Hot Pink",
}

// function shirtColours(){

// }

/*create SVG object*/
function design() {
    //var product=BOOKLET.Active;
    if (document.getElementById("DYOSVG")) {
        console.log("Removing " + document.getElementById("DYOSVG").data);
    }
    removeNode("DYOSVG", document);
    var x = document.createElement("object");
    x.id = "DYOSVG";
    x.onload = getSVGinfo;
    x.type = "image/svg+xml";
    VIEW = (document.getElementById("View")) ? document.getElementById("View").value : "";
    var VB = "";
    switch (VIEW) {
    case 'Back':
        VB = "B";
        break;
    case 'Left':
        VB = "L";
        break;
    case 'Right':
        VB = "R";
        break;
    case 'Front':
    default:
        VB = "";
    }
    PRODTYPE = document.getElementById("ProductType[" + ACTIVE + "]");
    PRODSTYLE = document.getElementById("ProductStyle[" + ACTIVE + "]");
    PRODDESIGN = document.getElementById("ProductDesign[" + ACTIVE + "]");
    SVGFOLDER = (typeof (SVGDIR[PRODTYPE.value]) === 'undefined') ? PRODTYPE.value : SVGDIR[PRODTYPE.value];
    SVGFOLDER = "assets/images/" + SVGFOLDER + "/";
    SVGPREFIX = (typeof (SVGPERSTYLE[PRODTYPE.value]) === 'undefined') ? "" : (PRODSTYLE.value).toLowerCase();
    var ref = document.URL;
    var last = ref.lastIndexOf("/") + 1;
    var sdir = ref.substring(0, last) + SVGFOLDER;
    x.data = sdir + SVGPREFIX + PRODDESIGN.value + VB + ".svg";
    document.getElementById("graphic").appendChild(x);
}

/*read SVG colour classes*/
function getSVGinfo() {
    console.log(this);
    S = document.getElementById("DYOSVG").contentDocument;
    var STYLESVG = []
      , NUMCOLS = [];
    var i;

    for (var j = 0; j < S.styleSheets.length; j++) {
        var rules = S.styleSheets[j].rules || S.styleSheets[j].cssRules;
        // This CSS code may need to be modified to handle using commas in CSS for shared code
        for (i in rules) {
            if (typeof rules[i].selectorText == 'string') {
                STYLESVG.push(rules[i].selectorText)
            }
        }
        for (i in STYLESVG) {
            var start_pos = STYLESVG[i].indexOf('.') + 1;
            var end_pos = STYLESVG[i].indexOf('.', start_pos);
            if (end_pos != -1) {
                var NC = STYLESVG[i].substring(start_pos, end_pos);
                // begin IE stupidity workaround
                var NC2 = STYLESVG[i].substring(end_pos + 1);
                if (NC == "fill" || NC == "stroke" || NC == "stopColor") {
                    NUMCOLS.push(NC2)
                } else if (NC2 == "fill" || NC2 == "stroke" || NC2 == "stopColor") {
                    NUMCOLS.push(NC)
                }
            }
        }
        NUMCOLS = NUMCOLS.filter(function(itm, i, a) {
            return i == a.indexOf(itm)
        });
    }
    var PREVIOUS = document.getElementsByClassName("colourfill");
    for (i = PREVIOUS.length; i > 0; i--) {
        var M = (PREVIOUS[i - 1].id.indexOf("[") != -1) ? PREVIOUS[i - 1].id.slice(0, PREVIOUS[i - 1].id.indexOf("[")) : PREVIOUS[i - 1].id;
        var A = (PREVIOUS[i - 1].id.indexOf("[") != -1) ? PREVIOUS[0].id.slice(PREVIOUS[0].id.indexOf("[") + 1, PREVIOUS[0].id.length - 1) : null;
        if (A != ACTIVE) {
            continue
        }
        PREVIOUS[i - 1].material = (typeof materialController == 'function') ? materialController(M) : PREVIOUS[i - 1].material;
        var col = readCookie(PREVIOUS[i - 1].id);
        if (col && PREVIOUS[i - 1].material.indexOf(col) == -1) {
            removeCookie(PREVIOUS[i - 1].id)
        }
        if (PREVIOUS[i - 1].material.indexOf(PREVIOUS[i - 1].value) == -1) {
            if (defcols[PREVIOUS[i - 1]] && PREVIOUS[i - 1].material.indexOf(defcols[PREVIOUS[i - 1]]) != -1) {
                PREVIOUS[i - 1].value = defcols[PREVIOUS[i - 1]];
            }
            {
                var rand = Math.floor(Math.random() * PREVIOUS[i - 1].material.length);
                PREVIOUS[i - 1].value = PREVIOUS[i - 1].material[rand];
            }
            colour.call(PREVIOUS[i - 1]);
        }
        if (NUMCOLS.indexOf(PREVIOUS[i - 1].id) == -1 && PREVIOUS[i - 1].id != "S-BallColour") {
            PREVIOUS[i - 1].parentNode.parentNode.removeChild(PREVIOUS[i - 1].parentNode)
        }
    }
    for (i in NUMCOLS) {
        if (!document.getElementById(NUMCOLS[i]) + "[" + ACTIVE + "]") {
            addColour(NUMCOLS[i] + "[" + ACTIVE + "]")
        }
        ;colour.call(document.getElementById(NUMCOLS[i] + "[" + ACTIVE + "]"))
    }
    // Re-Initialise set values
    if (typeof svgController == 'function') {
        svgController();
    }
    if (!S.getElementById("Content")) {
        var CNT = document.createElementNS(SVG_NS, "g");
        CNT.id = "Content";
        S.documentElement.appendChild(CNT)
    }
    S.getElementById("Content").style.visibility = "hidden";
    S.getElementById("Content").style.visibility = "hidden";
    if (document.getElementById("SBALL[" + ACTIVE + "]")) {
        drawSBall();
        // SBall();
        // colour.call(document.getElementById("S-BallColour[" + ACTIVE + "]"));
    }
    DL = document.getElementById("logos[" + ACTIVE + "]").getElementsByClassName("logoupload");
    DT = document.getElementById("logos[" + ACTIVE + "]").getElementsByClassName("addtext");
    DS = document.getElementById("logos[" + ACTIVE + "]").getElementsByClassName("uploadselect");
    for (var i = 0; i < DS.length; i++) {
        embellish.call(DS[i])
    }
    for (var i = 0; i < DL.length; i++) {
        if (DL[i].value) {
            if (CYCLE == true) {
                DLCount++
            }
            HFS.call(DL[i])
        }
    }
    for (var i = 0; i < DT.length; i++) {
        if (DT[i].value) {
            addText.call(DT[i])
        }
    }
    // Continue with Garment Specific Logic	
    //	document.getElementById("Colour1").classList.add("chosen");
    //	if(document.getElementById("Colour1")){createColourPicker.call(document.getElementById("Colour1"))}else{console.log("dfjvdfj")}
    // colourBranding()
    //Clone the node 
    if (CYCLE == true && DLCount == 0) {
        generateImages()
    }
}
DLCount = 0;
CYCLE = false;
VIEWINDEX = 0;

function generateImages() {
    if (CYCLE == true && DLCount == 0) {
        console.log("Cycling");
        if (VIEWINDEX < VIEWS.length) {
            var VIEW = document.getElementById("View").value;
            console.log(VIEW);
            if (document.getElementById("BookletProduct[" + ACTIVE + "]")) {
                console.log("Booklet found");
                var FG = document.getElementById("BookletProduct[" + ACTIVE + "]");
                if (document.getElementById("BookletFigure[" + ACTIVE + VIEW + "]")) {
                    removeNode("BookletFigure[" + ACTIVE + VIEW + "]", document)
                }
                var IMG = document.createElement("img");
                IMG.id = "BookletFigure[" + ACTIVE + VIEW + "]";
                IMG.className = VIEW;
                IMG.src = 'data:image/svg+xml;base64,' + window.btoa(S.documentElement.outerHTML || new XMLSerializer().serializeToString(S.documentElement));
                FG.appendChild(IMG);
                console.log(VIEW + " added to booklet");
                VIEWINDEX++;
                if (VIEWINDEX == VIEWS.length) {
                    CYCLE = false;
                    VIEWINDEX = 0;
                    changeNav("SubmitOrder");
                    ViewSelect.call(document.getElementById("Front"))
                } else {
                    return ViewSelect.call(document.getElementById(VIEWS[VIEWINDEX]))
                }
            }
        }
    }
}

/*=================== Color Functions ====================*/

/* Colour SVG Class*/
function colour() {
    var CID = this.id;
    var COL = this.value;
    this.style.background = HEX[COL];
    this.style.color = fontCol(COL);
    createCookie(CID, COL, 3);
    var CID = (CID.indexOf("[") != -1) ? CID.slice(0, CID.indexOf("[")) : CID;
    if (CID.slice(-10) == "TextColour") {
        CID = CID.substr(0, CID.length - 10)
    }
    var i;
    var FILV = S.getElementsByClassName(CID + " fill");
    for (i = 0; i < FILV.length; i++) {
        FILV[i].style.fill = HEX[COL];
    }
    var STRV = S.getElementsByClassName(CID + " stroke");
    for (i = 0; i < STRV.length; i++) {
        STRV[i].style.stroke = HEX[COL];
    }
    var FADV = S.getElementsByClassName(CID + " stopColor");
    for (i = 0; i < FADV.length; i++) {
        FADV[i].style.stopColor = HEX[COL];
    }
}

/*add SVG colours as Document inputs*/
function addColour(N, material) {
    var M = (N.indexOf("[") != -1) ? N.slice(0, N.indexOf("[")) : N;
    // Uses standard colours, add material colour functionality later
    if (!material) {
        if (typeof materialController == 'function') {
            material = materialController(M);
        } else {
            if (COLOURS == "Standard") {
                material = SColour
            } else if (COLOURS == "Extended") {
                material = ColourHex
            } else {
                material = CDColour
            }
        }
    }
    if (document.getElementById(N)) {
        console.log(N);
        document.getElementById(N).material = material;
        console.log("Colour already found");
        return
    }
    var col = readCookie(N);
    if (!col || material.indexOf(col) == -1) {
        if (defcols[M] && material.indexOf(defcols[M]) != -1) {
            col = defcols[M];
        } else {
            var rand = Math.floor(Math.random() * material.length);
            col = material[rand]
        }
    }
    var x = document.createElement("div");
    if (M == "S-BallColour") {
        x.style.display = "none";
        document.getElementById("fields[" + ACTIVE + "]").appendChild(x)
    } 
    // else if(M.slice(-18)=="OutlinedTextColour"){
    // document.getElementById(M.slice(0,-18)+"["+ACTIVE+"]").appendChild(x)
    // } 
    else if (M.slice(-10) == "TextColour") {
        document.getElementById(M.slice(0, -10) + "[" + ACTIVE + "]").appendChild(x)
    }//else if(N=="Number"){document.getElementById("StandardNumber").appendChild(x)/*insertBefore(x,document.getElementById("Colours").nextElementSibling);*/}
    //else if(N=="NumberOutline"){document.getElementById("OutlineNumber").appendChild(x)/*insertBefore(x,document.getElementById("Colours").nextElementSibling);*/}
    else if (M.slice(0, 6) != "Colour") {
        document.getElementById("fields[" + ACTIVE + "]").appendChild(x)
    } else {
        document.getElementById("Colours[" + ACTIVE + "]").appendChild(x)
    }
    var z = document.createElement("label");
    z.htmlFor = N;
    z.textContent = unCamelCase(M)
    var y = document.createElement("input");
    y.id = N;
    y.name = N;
    y.value = col;
    y.readOnly = "true";
    y.material = material;
    y.style.background = HEX[col];
    y.style.color = fontCol(col);
    y.className = "colourfill";
    y.addEventListener("focus", createColourPicker, false)
    x.appendChild(z);
    x.appendChild(y);

}

/* Create Colour Picker */
function createColourPicker() {
    removeNode("ColourPicker", document);
    // can change this to remove colour nodes, and only if different
    if (!this.classList.contains("colourfill")) {
        return
    }
    var IL = document.getElementById("fields[" + ACTIVE + "]").getElementsByClassName("chosen");
    while (IL.length) {
        IL[0].classList.remove("chosen")
    }
    this.classList.add("chosen");
    var materialcolour = (!this.material) ? ColourHex : this.material;
    var x = document.createElement("ul");
    x.id = "ColourPicker";
    x.addEventListener("click", colourPicked);
    for (var i in materialcolour) {
        var y = document.createElement("li");
        y.id = HEX[materialcolour[i]];
        y.title = materialcolour[i];
        y.style.background = HEX[materialcolour[i]];
        x.appendChild(y);
    }
    this.parentNode.appendChild(x);
    document.getElementById("ColourPicker").focus();
}

function colourPicked(e) {
    target = e.target;
    if (target == e.currentTarget) {
        return
    }
    var CI = target.parentNode.parentNode.getElementsByTagName("input")[0];
    CI.value = target.title;
    createCookie(CI.id, CI.value, 3);
    colour.call(CI);
    var CID = (CI.id.indexOf("[") != -1) ? CI.id.slice(0, CI.id.indexOf("[")) : CI.id;
    var N = (CI.id.indexOf("[") != -1) ? CI.id.slice(CI.id.indexOf("[") + 1, CI.id.length - 1) : null;
    if (N == 1) {
        defcols[CID] = target.title
    }
    if (BRANDONCOL == CID) {
        // colourBranding();
    }
}

function colourBranding() {
    if (!document.getElementById("S-BallColour[" + ACTIVE + "]")) {
        addColour("S-BallColour[" + ACTIVE + "]");
        console.log("Added Colour in Colour Branding")
    }
    var SB = document.getElementById("S-BallColour[" + ACTIVE + "]");
    SB.value = (fontCol(document.getElementById(BRANDONCOL + "[" + ACTIVE + "]").value) == "#FFF") ? "White" : "Black";
    colour.call(SB);
}

/*================== End Color Functions =======================*/

/*================== LIBRARY FUNCTIONS ==================*/
function removeNode(name, scope) {
    if (scope == null) {
        return;
    }
    console.log(name)
    if (scope.getElementById(name)) {
        scope.getElementById(name).parentNode.removeChild(scope.getElementById(name))
    }
}

function fontCol(h) {
    h = HEX[h];
    h = h.replace("#", "");
    var R = parseInt(h.substring(0, 2), 16) / 255;
    var G = parseInt(h.substring(2, 4), 16) / 255;
    var B = parseInt(h.substring(4, 6), 16) / 255;
    var L = 0.2126 * R + 0.7152 * G + 0.0722 * B;
    var c = (L < .5) ? "#FFF" : "#000";
    return c;
}

/*=================== Cookie Functions start here ===================*/
// Create Cookie
function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString()
    } else {
        var expires = ""
    }
    if (storageAvailable('localStorage')) {
        localStorage.setItem(name, value)
    } else {
        document.cookie = name + "=" + value + expires + "; path=/";
    }
}

// Remove Cookie
function removeCookie(name) {
    if (storageAvailable('localStorage')) {
        localStorage.removeItem(name)
    }
    createCookie(name, "", -1)
}

// Read Cookie
function readCookie(name) {
    if (localStorage.getItem(name)) {
        return localStorage.getItem(name)
    } else {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0)
                return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}
/*==================== End of Cookie Functions =====================*/

function unCamelCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/([a-zA-Z])([0-9])/g, '$1 $2').replace(/([0-9])([a-zA-Z])/g, '$1 $2').replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3').replace(/^./, function(str) {
        return str.toUpperCase()
    })
}

function HFS() {
    var f = this.files[0];
    var FW = this.parentNode.getElementsByClassName("filewarn");
    while (FW.length) {
        FW[0].parentNode.removeChild(FW[0])
    }
    var allowedExtensions = ["doc", "docx", "odt", "ppt", "pdf", "svg", "cdr", "ai", "eps", "jpg", "jpeg", "gif", "png", "emb", "dst", "xls", "xlsx", "ods", "csv"];
    if (allowedExtensions.indexOf(f.name.slice(f.name.lastIndexOf(".") + 1)) == -1) {
        this.setCustomValidity("Invalid File Type");
        var p = document.createElement("p");
        p.textContent = "Invalid File Type";
        p.className = "filewarn";
        this.parentNode.appendChild(p);
        return;

    } else {
        this.setCustomValidity("");
    }

    if (f.type.match('image.*')) {
        var position = this.parentNode.parentNode.id;
        var position = (position.indexOf("[") != -1) ? position.slice(0, position.indexOf("[")) : position;
        var reader = new FileReader();
        reader.onload = (function(theFile) {
            return function(e) {
                drawLogo(position, e.target.result);
                if (CYCLE == true) {
                    DLCount--;
                    if (DLCount == 0) {
                        generateImages()
                    }
                }
            }
        }
        )(f);
        reader.readAsDataURL(f)

    } else {
        var FW = this.parentNode.getElementsByClassName("filewarn");
        while (FW.length) {
            this.parentNode.removeChild(FW[0])
        }
        var p = document.createElement("p");
        p.textContent = "File not viewable in browser, but will be submitted";
        p.className = "filewarn";
        this.parentNode.appendChild(p);
    }
    //callback to wait until files are loaded before generating image for booklet
}

function drawLogo(position, logo) {
    if (!LOGO.hasOwnProperty(position)) {
        return
    }
    if (document.getElementById("DYOSVG") == null) {
        console.log("aborting draw");
        return
    }
    S = document.getElementById("DYOSVG").contentDocument;
    if (!S || !S.documentElement || S.documentElement.nodeName != "svg") {
        console.log("Draw Logo function didn't find a valid svg to draw");
        return
    }
    removeNode(position, S);
    if (logo == "sball") {
        var Z = document.createElementNS(SVG_NS, "use");
        if (!document.getElementById("S-BallColour[" + ACTIVE + "]")) {
            // addColour("S-BallColour[" + ACTIVE + "]");
            console.log("Added Colour in Draw Logo")
        }
        Z.setAttributeNS(XLink_NS, 'xlink:href', '#sball');
        Z.setAttributeNS(null, 'class', 'S-BallColour fill');
        Z.setAttributeNS(null, 'fill', '#fff');
        // Z.setAttributeNS(null, 'fill', HEX[document.getElementById("S-BallColour[" + ACTIVE + "]").value])
    } else if (logo == "numbers") {
        if (!S.getElementById("Number")) {
            drawNumber();
            console.log("Drawing Number Symbols in Draw Logo")
        }
        var Z = document.createElementNS(SVG_NS, "use");
        Z.setAttributeNS(XLink_NS, 'xlink:href', '#Number');
        var NSTYL = document.getElementById("NumberStyle[" + ACTIVE + "]");
        var N3 = S.getElementById("NumberOutline");
        // N3.style.stroke = HEX[document.getElementById("NumberOutline[" + ACTIVE + "]").value];
        var N2 = S.getElementById("NumberColour1");
        // N2.style.stroke = HEX[document.getElementById("Colour1[" + ACTIVE + "]").value];
        var N1 = S.getElementById("NumberFill");
        // N1.style.fill = HEX[document.getElementById("Number[" + ACTIVE + "]").value];
        if (NSTYL.value == "StandardNumber") {
            N3.style.visibility = "hidden";
            N2.style.visibility = "hidden";
            N1.style.visibility = "inherit"
        } else if (NSTYL.value == "OutlineNumber") {
            N3.style.visibility = "inherit";
            N2.style.visibility = "inherit";
            N1.style.visibility = "inherit"
        } else {
            N3.style.visibility = "hidden";
            N2.style.visibility = "hidden";
            N1.style.visibility = "hidden"
        }
    } else {
        var Z = document.createElementNS(SVG_NS, "image");
        Z.setAttributeNS(XLink_NS, 'xlink:href', logo)
    }
    Z.id = position;
    X = {};
    for (var i in LOGO[position]) {
        X[i] = LOGO[position][i]
    }
    if (position == "RightSleeve" && document.getElementById("View").value == "Back") {
        X.x = LOGO["LeftSleeve"].x;
        X.y = LOGO["LeftSleeve"].y;
        if (LOGO["LeftSleeve"].hasOwnProperty("rotate")) {
            X.rotate = LOGO["LeftSleeve"].rotate
        }
    } else if (position == "LeftSleeve" && document.getElementById("View").value == "Back") {
        X.x = LOGO["RightSleeve"].x;
        X.y = LOGO["RightSleeve"].y;
        if (LOGO["RightSleeve"].hasOwnProperty("rotate")) {
            X.rotate = LOGO["RightSleeve"].rotate
        }
    }
    for (var i in X) {
        if (i == "rotate") {
            var CX = X['x'] + X['width'] / 2;
            var CY = X['y'] + X['height'] / 2;
            Z.setAttributeNS(null, "transform", "rotate(" + X[i] + "," + CX + "," + CY + ")")
        } else if (i != "clip") {
            Z.setAttributeNS(null, i, X[i])
        }
    }
    if (X['clip']) {
        if (S.getElementById(X['clip'])) {
            S.getElementById(X['clip']).insertBefore(Z, S.getElementById(X['clip']).firstChild)
        }
    } else if (S.getElementById("Content")) {
        S.getElementById("Content").insertBefore(Z, S.getElementById("Content").firstChild)
    } else {
        S.documentElement.appendChild(Z)
    }
}

function addText() {
    var position = this.parentNode.parentNode.id;
    position = (position.indexOf("[") != -1) ? position.slice(0, position.indexOf("[")) : position;
    if (!LOGO.hasOwnProperty(position)) {
        return
    }
    S = document.getElementById("DYOSVG").contentDocument;
    removeNode(position, S);
    var g=document.createElementNS(SVG_NS,"g");
    g.id=position;
    var t = document.createElementNS(SVG_NS, "text");
    t.id = position;
    var PTC = document.getElementById(position + "TextColour[" + ACTIVE + "]");
    createCookie(PTC.id, PTC.value, 3);
    // lines out of order?
    t.setAttributeNS(null, 'fill', HEX[PTC.value]);
    var tlb = this.value.split(/\r\n|\r|\n/g);
    var tvw = 1;
    for (var i in tlb) {
        if (tlb[i].length > tvw) {
            tvw = tlb[i].length
        }
    }
    tvh = tlb.length * 1.1;
    var A = {};
    for (var i in LOGO[position]) {
        A[i] = LOGO[position][i]
    }
    if (position == "RightSleeve" && document.getElementById("View").value == "Back") {
        A.x = LOGO["LeftSleeve"].x;
        A.y = LOGO["LeftSleeve"].y;
        if (LOGO["LeftSleeve"].hasOwnProperty("rotate")) {
            A.rotate = LOGO["LeftSleeve"].rotate
        }
    } else if (position == "LeftSleeve" && document.getElementById("View").value == "Back") {
        A.x = LOGO["RightSleeve"].x;
        A.y = LOGO["RightSleeve"].y;
        if (LOGO["RightSleeve"].hasOwnProperty("rotate")) {
            A.rotate = LOGO["RightSleeve"].rotate
        }
    }
    var fw = A['width'] / tvw;
    var fh = A['height'] / tvh;
    var fs = (fw < fh) ? fw : fh;
    var tratio = ((1 - (fw / fh)) / 2) * A['height'];
    var tyam = (tratio > 0) ? tratio : 0;
    var x = A['x'] + A['width'] * .5;
    var y = A['y'] + tyam;
    t.setAttributeNS(null, 'class', position + ' fill');
    t.setAttributeNS(null, 'x', x);
    t.setAttributeNS(null, 'y', y);
    t.setAttributeNS(null, 'font-size', fs);
    t.setAttributeNS(null, 'text-anchor', 'middle');
    if (A['rotate']) {
        var CX = A['x'] + A['width'] / 2;
        var CY = A['y'] + A['height'] / 2;
        t.setAttributeNS(null, "transform", "rotate(" + A['rotate'] + "," + CX + "," + CY + ")")
    }
    for (var i in tlb) {
        var ts = document.createElementNS(SVG_NS, "tspan");
        ts.setAttributeNS(null, 'x', x);
        //var nf=(i==0)?0:fs*1.1; Changing this due to IE not supporting dominant baseline.
        ts.setAttributeNS(null, 'dy', '1.1em');
        //ts.setAttributeNS(null,'dominant-baseline','hanging'); Changing this due to IE not supporting dominant baseline.
        var tn = document.createTextNode(tlb[i]);
        ts.appendChild(tn);
        t.appendChild(ts);
    }
    //Text Outline
    // var to=t.cloneNode(true);
    // to.setAttributeNS(null,'class',position+'OutlinedText stroke');
    // to.id=position+"OutlinedText";
    // var PTOC=document.getElementById(position+"OutlinedTextColour["+ACTIVE+"]");
    // createCookie(PTOC.id,PTOC.value,3);
    // to.setAttributeNS(null,'fill','none');
    // to.setAttributeNS(null,'stroke',HEX[PTOC.value]);
    // to.setAttributeNS(null,'stroke-width',"0.05em",'letter-spacing',"0.3em");
    // g.appendChild(to);
    // g.appendChild(t);
    if (A['clip'] && S.getElementById(A['clip'])) {
        S.getElementById(A['clip']).insertBefore(t, S.getElementById(A['clip']).firstChild)
    } else if (S.getElementById("Content")) {
        S.getElementById("Content").insertBefore(t, S.getElementById("Content").firstChild)
    } else {
        S.documentElement.appendChild(t)
    }
    // Scaling Section, add Checkboxes and code for adjusting text alignment, text colour, fonts etc
    var td = t.getBBox();
    var tsw = A['width'] / td.width;
    var tsh = A['height'] / td.height;
    if (tsw >= 1 && tsh >= 1) {
        var tso = (tsw < tsh) ? tsw : tsh;
        fs = fs * tso;
        t.setAttributeNS(null, 'font-size', fs);
        var tss = t.getElementsByTagNameNS(SVG_NS, "tspan");
        for (i = 0; i < tss.length; i++) {
            tss[i].setAttributeNS(null, 'dy', '1.1em')
        }
        var tratio = ((1 - (tsw / tsh)) / 2) * A['height'];
        var tyam = (tratio > 0) ? tratio : 0;
        var y = A['y'] + tyam;
        t.setAttributeNS(null, 'y', y);
    }
}

function drawSBall(){
    //var product=BOOKLET.Active;
    var sball = "M545.79,105.25L277.46,420.48V105.25h80.71l41.45-49.09H277.46V0.25h236.69l-89.44,105H545.79z M324.36,284.13l105.8-123.25 h-105.8V284.13z M265.46,0.25v420.23l-49.09-58.9V159.79h-105.8l62.17,71.99v80.71L0.27,107.43l115.75-1.09L29.85,0.25h62.17 l91.63,105h33.81v-105H265.46z";
    var stext = "M131.38,439.35c0.13,0.02,0.19,0.08,0.19,0.19v5.91c0,0.13-0.06,0.19-0.19,0.19h-27.75v4.69h27.75 c0.13,0.02,0.19,0.08,0.19,0.19v14.25c-0.48,1.88-1.42,2.81-2.81,2.81H97.45c-0.13,0-0.19-0.06-0.19-0.19v-5.91 c0.02-0.13,0.08-0.19,0.19-0.19h27.75v-4.69H97.45c-0.13,0-0.19-0.06-0.19-0.19v-14.16c0-1.33,0.88-2.3,2.63-2.91H131.38z M134.92,439.35h33.94c0.13,0.02,0.19,0.08,0.19,0.19v14.25c-0.48,1.88-1.42,2.81-2.81,2.81h-5.63v0.09l-8.81-0.09h-10.78v10.78 c0,0.13-0.06,0.19-0.19,0.19h-5.91c-0.13,0-0.19-0.06-0.19-0.19v-27.84C134.75,439.41,134.81,439.35,134.92,439.35z M141.02,445.63 v4.69h21.66v-4.69H141.02z M206.22,439.35c0.13,0.02,0.19,0.08,0.19,0.19v25.22c-0.48,1.88-1.42,2.81-2.81,2.81h-31.31 c-0.13,0-0.19-0.06-0.19-0.19v-25.13c0-1.33,0.88-2.3,2.63-2.91H206.22z M178.47,445.63v15.66h21.56v-15.66H178.47z M209.99,439.35 h33.94c0.13,0.02,0.19,0.08,0.19,0.19v14.25c-0.48,1.88-1.42,2.81-2.81,2.81h-5.63v0.09c5.56,7.09,8.34,10.72,8.34,10.88h-8.44 c-0.13-0.06-3.03-3.72-8.72-10.97h-10.78v10.78c0,0.13-0.06,0.19-0.19,0.19h-5.91c-0.13,0-0.19-0.06-0.19-0.19v-27.84 C209.82,439.41,209.88,439.35,209.99,439.35z M216.09,445.63v4.69h21.66v-4.69H216.09z M247.35,438.6h33.94 c0.13,0.02,0.19,0.08,0.19,0.19v5.91c0,0.13-0.06,0.19-0.19,0.19h-14.44v22.5c0,0.13-0.06,0.19-0.19,0.19h-6 c-0.13,0-0.19-0.06-0.19-0.19v-22.5h-13.13c-0.13,0-0.19-0.06-0.19-0.19v-5.91C247.18,438.66,247.24,438.6,247.35,438.6z M318.77,439.35c0.13,0.02,0.19,0.08,0.19,0.19v5.91c0,0.13-0.06,0.19-0.19,0.19h-27.75v4.69h27.75c0.13,0.02,0.19,0.08,0.19,0.19 v14.25c-0.48,1.88-1.42,2.81-2.81,2.81h-31.31c-0.13,0-0.19-0.06-0.19-0.19v-5.91c0.02-0.13,0.08-0.19,0.19-0.19h27.75v-4.69h-27.75 c-0.13,0-0.19-0.06-0.19-0.19v-14.16c0-1.33,0.88-2.3,2.63-2.91H318.77z M322.31,467.57c-0.13-0.02-0.19-0.08-0.19-0.19v-27.84 c0-0.13,0.06-0.19,0.19-0.19h6c0.13,0,0.19,0.06,0.19,0.19v21.75h7.69v-21.75c0-0.13,0.06-0.19,0.19-0.19h5.91 c0.13,0,0.19,0.06,0.19,0.19v21.75h7.69v-21.75c0-0.13,0.06-0.19,0.19-0.19h5.91c0.13,0,0.19,0.06,0.19,0.19v25.13 c0,1.33-0.88,2.3-2.63,2.91H322.31z M393.72,439.35c0.13,0.02,0.19,0.08,0.19,0.19v10.59c0,0.13-0.06,0.19-0.19,0.19h-6 c-0.13,0-0.19-0.06-0.19-0.19v-4.5h-21.56v4.69h13.69c0.13,0.02,0.19,0.08,0.19,0.19v5.91c0,0.13-0.06,0.19-0.19,0.19h-13.69v4.69 h27.75c0.13,0.02,0.19,0.08,0.19,0.19v5.91c0,0.13-0.06,0.19-0.19,0.19h-33.94c-0.13,0-0.19-0.06-0.19-0.19v-25.13 c0-1.33,0.88-2.3,2.63-2.91H393.72z M431.08,439.35c0.13,0.02,0.19,0.08,0.19,0.19v27.84c0,0.13-0.06,0.19-0.19,0.19h-5.91 c-0.13,0-0.19-0.06-0.19-0.19V456.6h-21.66v10.78c0,0.13-0.06,0.19-0.19,0.19h-6c-0.13,0-0.19-0.06-0.19-0.19v-25.13 c0-1.33,0.88-2.3,2.63-2.91H431.08z M403.33,445.63v4.69h21.66v-4.69H403.33z M434.5,439.35h33.94c0.13,0.02,0.19,0.08,0.19,0.19 v14.25c-0.48,1.88-1.42,2.81-2.81,2.81h-5.63v0.09c5.56,7.09,8.34,10.72,8.34,10.88h-8.44c-0.13-0.06-3.03-3.72-8.72-10.97h-10.78 v10.78c0,0.13-0.06,0.19-0.19,0.19h-5.91c-0.13,0-0.19-0.06-0.19-0.19v-27.84C434.33,439.41,434.39,439.35,434.5,439.35z M440.59,445.63v4.69h21.66v-4.69H440.59z";
    var PRODTYPE = document.getElementById("ProductType[" + ACTIVE + "]");
    var PRODSTYLE = document.getElementById("ProductStyle[" + ACTIVE + "]");
    var p1 = document.createElementNS(SVG_NS, "path");
    p1.setAttributeNS(null, 'd', sball);
    var p2 = document.createElementNS(SVG_NS, "path");
    p2.setAttributeNS(null, 'd', stext);
    var p3 = document.createElementNS(SVG_NS, "path");
    p3.setAttributeNS(null, 'd', stext);
    //y.setAttributeNS(null,'stroke',"#808080");
    //y.setAttributeNS(null,'stroke-opacity',".5");
    //y.setAttributeNS(null,'stroke-width',"5000");
    //y.setAttributeNS(null,'paint-order',"stroke");
    var x = document.createElementNS(SVG_NS, "symbol");
    x.id = "sball";
    x.setAttributeNS(null, 'viewBox', '0 0 546 476');
    if (PRODTYPE.value == "Socks" && PRODSTYLE.value == "Elite") {
        x.appendChild(p1);
    } else {
        x.appendChild(p1);
        x.appendChild(p2);
    }
    S.documentElement.appendChild(x);

    var z = document.createElementNS(SVG_NS, "symbol");
    z.id = "stext";
    z.setAttributeNS(null, 'viewBox', '0 0 546 476');
    z.appendChild(p3);
    S.documentElement.appendChild(z);

    var PO = S.createElementNS(SVG_NS, "style");
    PO.textContent = ".S-BallColour{stroke-width:50}@supports(paint-order:stroke){.S-BallColour{paint-order:stroke;stroke-width:1000}";
    S.documentElement.appendChild(PO);

}

function drawNumber() {
    var num = "M56.0291 74.8105V56.4695L64.3659 49.4665H85.0413L93.7116 56.4695V84.8147L85.0413 91.8177H25.6829L0.338949 117.162V233.211H149.402V158.512H93.7116V183.856H56.0291V148.508L64.6994 141.505H123.724L149.402 116.161V25.4564L123.724 0.112393H26.0164L0.338949 25.7899V74.8105H56.0291ZM201.538 0.112393L176.194 25.4564V207.867L201.538 233.211H299.579L325.257 207.533V25.7899L299.579 0.112393H201.538ZM269.567 183.856H231.884V49.4665H269.567V183.856Z";
    var n3 = document.createElementNS(SVG_NS, "use");
    n3.id = "NumberOutline";
    n3.setAttributeNS(XLink_NS, 'xlink:href', '#NumberFill');
    n3.setAttributeNS(null, 'stroke-width', '20');
    n3.setAttributeNS(null, "class", "NumberOutline stroke");
    n3.setAttributeNS(null, 'style', 'stroke-width:20 !important')
    var n2 = document.createElementNS(SVG_NS, "use");
    n2.id = "NumberColour1";
    n2.setAttributeNS(XLink_NS, 'xlink:href', '#NumberFill');
    n2.setAttributeNS(null, 'stroke-width', '10');
    n2.setAttributeNS(null, "class", "Colour1 stroke");
    n2.setAttributeNS(null, 'style', 'stroke-width:10 !important')
    var n1 = document.createElementNS(SVG_NS, "path");
    n1.id = "NumberFill";
    n1.setAttributeNS(null, 'd', num);
    n1.setAttributeNS(null, "class", "Number fill");
    var n = document.createElementNS(SVG_NS, "symbol");
    n.id = "Number";
    n.setAttributeNS(null, 'viewBox', '0 -10 330 370');
    n.appendChild(n3);
    n.appendChild(n2);
    n.appendChild(n1);
    S.documentElement.appendChild(n);
}

function SBall() {
    var X = document.getElementById("SBALL[" + ACTIVE + "]");
    var B = document.getElementById(X.value + "[" + ACTIVE + "]").children[0].children[1];
    while (B.options.length) {
        B.remove(0)
    }
    var V = document.createElement("option");
    V.textContent = "KBS Logo";
    V.value = "S-Ball";
    B.add(V);
    embellish.call(B);
    drawLogo(X.value, "sball");
    DS = document.getElementById("logos[" + ACTIVE + "]").getElementsByClassName("uploadselect");
    for (i = 0; i < DS.length; i++) {
        var position = (DS[i].parentNode.parentNode.id.indexOf("[") != -1) ? DS[i].parentNode.parentNode.id.slice(0, DS[i].parentNode.parentNode.id.indexOf("[")) : DS[i].parentNode.parentNode.id;
        if (DS[i].options[0].value == "S-Ball" && position != X.value) {
            removeNode(position, S);
            DS[i].remove(0);
            //DS[i].parentNode.parentNode.style.display=(!LOGO[DS[i].parentNode.parentNode.id])?"none":"inherit";
            if (LOGO[position] && LOGO[position].branding == 2) {
                var VALS = ["None"];
                DS[i].parentNode.parentNode.style.display = "none"
            } else if (position == "RightChest" && document.getElementById("ProductType[" + ACTIVE + "]").value == "Jersey") {
                var VALS = ["None", "Logo", "Text", "TFA Logo", "QRL Logo", "CRL Logo", "NRL-VIC Logo", "NRL-WA Logo"];
                DS[i].parentNode.parentNode.style.display = ""
            }// add Senior Jersey options
            else if (position == "Default") {
                var VALS = ["None"];
                DS[i].parentNode.parentNode.style.display = "none"
            } else {
                var VALS = ["None", "Logo", "Text"];
                DS[i].parentNode.parentNode.style.display = ""
            }
            for (j in VALS) {
                var V = document.createElement("option");
                V.textContent = V.value = VALS[j];
                DS[i].add(V);
            }
        }
    }
}

function embellish() {
    var P = this.parentNode.parentNode;
    var position = (P.id.indexOf("[") != -1) ? P.id.slice(0, P.id.indexOf("[")) : P.id;
    S = document.getElementById("DYOSVG").contentDocument;
    if (this.selectedIndex == 0 && this.value == "None") {
        removeNode(position, S)
    }
    for (var i = 1; i <= 2; i++) {
        if (typeof (P.children[i]) !== "undefined") {
            if (this.selectedIndex == i) {
                P.children[i].removeAttribute("style")
            } else {
                P.children[i].style.display = "none";
                P.children[i].children[1].value = ""
            }
        }
    }

    if (this.selectedIndex == 2) {
        addColour(position + "TextColour[" + ACTIVE + "]");
        // addColour(position+"OutlinedTextColour["+ACTIVE+"]");
    } else {
        var R = position + "TextColour[" + ACTIVE + "]";
        if (document.getElementById(R)) {
            document.getElementById(R).parentNode.parentNode.removeChild(document.getElementById(R).parentNode)
        }
        // var R=position+"OutlinedTextColour["+ACTIVE+"]";
        // if(document.getElementById(R)){
        //     document.getElementById(R).parentNode.parentNode.removeChild(document.getElementById(R).parentNode)
        // }
    }
    if (this.value == "Numbers") {
        drawLogo(position, "numbers")
    }
    if (this.value == "QRL Logo") {}
    if (this.value == "CRL Logo") {}
    if (this.value == "NRL-VIC Logo") {}
    if (this.value == "NRL-WA Logo") {}
    if (this.value == "TFA Logo") {}
}

function addtobooklet() {
    DLCount = 0;
    // S.documentElement.cloneNode(true);
    //var FCB=document.getElementById("View["+ACTIVE+"]").value=="Back"){S.getElementById("Content").style.visibility="block"}
    var PRODTYPE = document.getElementById("ProductType[" + ACTIVE + "]");
    var PRODSTYLE = document.getElementById("ProductStyle[" + ACTIVE + "]");

    removeNode("BookletProduct[" + ACTIVE + "]", document);
    var BKLT = document.getElementById("BookletDesigns").getElementsByClassName("bookactive");
    while (BKLT.length) {
        BKLT[0].classList.remove("bookactive")
    }
    var FG = document.createElement("figure");
    FG.id = "BookletProduct[" + ACTIVE + "]";
    FG.classList.add("Product[" + ACTIVE + "]");
    FG.classList.add("bookactive");
    var FC = document.createElement("figcaption");
    FC.textContent = "PRODUCT:" + " " + document.getElementById("ProdH3").textContent + " " + document.getElementById("ProdS1").innerHTML + " " + document.getElementById("ProdS2").innerHTML;
    FG.appendChild(FC);
    document.getElementById("BookletDesigns").appendChild(FG);
    var Colours = document.getElementById("fields[" + ACTIVE + "]").getElementsByClassName("colourfill");

    var FGC = document.createElement("ul");
    FGC.id = "BookletColours[" + ACTIVE + "]";
    FG.appendChild(FGC);
    for (var i = 0; i < Colours.length; i++) {
        if (Colours[i].parentNode.style.display != "none") {
            var FGCLRS = document.createElement("li");
            var FCSU = document.createElementNS(SVG_NS, "svg");
            FCSU.setAttributeNS(null, 'width', "30px");
            FCSU.setAttributeNS(null, 'height', "30px");
            FCSU.setAttributeNS(null, 'viewBox', "0 0 2 2");
            var FCSC = document.createElementNS(SVG_NS, "circle");
            FCSC.setAttributeNS(null, 'cx', "1");
            FCSC.setAttributeNS(null, 'cy', "1");
            FCSC.setAttributeNS(null, 'r', ".9");
            FCSC.setAttributeNS(null, 'stroke', "#333");
            FCSC.setAttributeNS(null, 'stroke-width', ".1");
            FCSU.appendChild(FCSC);
            FGCLRS.appendChild(FCSU);
            FGCLRS.style.color = Colours[i].style.backgroundColor;
            var FGCLRSN = document.createElement("span");
            FGCLRSN.textContent = Colours[i].value;
            FCSC.setAttributeNS(null, 'fill', Colours[i].style.backgroundColor);
            FGC.appendChild(FGCLRS);
            //FGCLRS.textContent="●";
            FGC.appendChild(FGCLRSN);
            //FGCLRS.textContent="●";
        }

    }

    VIEWS = (PRODTYPE.value == "Shorts" && PRODSTYLE.value == "Training" || PRODTYPE.value == "Cap") ? ["Front", "Back", "Left", "Right"] : ["Front", "Back"];
    CYCLE = true;
    ViewSelect.call(document.getElementById("Front"));

    BookletSlider();
}

function BookletSlider(counter) {
    var BD = document.getElementById("BookletDesigns");
    var BN = document.getElementById("nextdesign");
    var BP = document.getElementById("lastdesign");
    var CBTN = document.getElementById("cart-items-count");
    if (!BD.children || !BD.children.length) {
        document.getElementById("clicks").textContent = "0";
        CBTN.style.visibility = "hidden";
        return;
    } else {
        document.getElementById("clicks").textContent = BD.children.length;
        CBTN.style.visibility = "visible";
    }
    if (BD.children.length > 1) {
        BN.style.visibility = BP.style.visibility = "visible"
    } else {
        BN.style.visibility = BP.style.visibility = "hidden";
        if (!BD.children.length) {
            console.log("no products in booklet");
            return
        }
    }
    if (!BD.getElementsByClassName("bookactive").length) {
        BD.children[0].classList.add("bookactive")
    }
    var BKLTACTIVE = BD.getElementsByClassName("bookactive")[0];
    if (typeof (counter) == "undefined") {
        BSS = BKLTACTIVE
    } else if (counter == "next") {
        var BSS = BKLTACTIVE.nextElementSibling;
        if (!BSS) {
            BSS = BD.children[0]
        }
    } else if (counter == "previous") {
        var BSS = BKLTACTIVE.previousElementSibling;
        if (!BSS) {
            BSS = BD.children[BD.children.length - 1]
        }
    }
    var BKLT = document.getElementById("BookletDesigns").getElementsByClassName("bookactive");
    while (BKLT.length) {
        BKLT[0].classList.remove("bookactive")
    }
    BSS.classList.add("bookactive");
}

function storageAvailable(type) {
    try {
        var storage = window[type]
          , x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true
    } catch (e) {
        return false
    }
}

window.onload = function() {
    document.forms[0].style.display = "";

    if (typeof pageController == 'function') {
        pageController();
    }
    
}


function initFromSave(savedObject) {
    /* add stuff so that it can load from AJAX call later, but using GET for now to inject JSON directly */
    PRODTYPE = document.getElementById("ProductType[" + ACTIVE + "]");
    PRODSTYLE = document.getElementById("ProductStyle[" + ACTIVE + "]");
    PRODDESIGN = document.getElementById("ProductDesign[" + ACTIVE + "]");
    var uri = window.location.toString();
    var QT;
    var QS;
    var i;
    var clean_uri = uri.substring(0, uri.indexOf("?"));
    window.history.replaceState({}, document.title, clean_uri);
    for (key in savedObject) {
        if (storageAvailable('localStorage')) {
            localStorage.setItem(key, savedObject[key])
        } else {
            document.cookie = key + "=" + savedObject[key] + expires + "; path=/"
        }
    }
    if (typeof (GARMENTS) == "object" && savedObject.ProductType) {
        for (i = 0; i < GARMENTS.length; i++) {
            if (GARMENTS[i] == savedObject.ProductType) {
                QT = PRODTYPE.value = GARMENTS[i];
                ProductSelect.call(document.getElementById(QT));
                break
            }
        }
    }
    if (QT && typeof (STYLE[QT]) == "object") {
        for (i = 0; i < STYLE[QT].length; i++) {
            if (STYLE[QT][i] == savedObject.ProductStyle) {
                QS = PRODSTYLE.value = STYLE[QT][i];
                StyleSelect.call(document.getElementById(QS));
                break
            }
        }
    }
}

// Yet another Fix for Internet Explorer - .matches polyfill
if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

CS = document.getElementById("CollarSel").getElementsByTagName("a");
for (i = 0; i < CS.length; i++) {
    CS[i].addEventListener("click", function() {
        CollarSelect(this.id)
    })
}
document.getElementById("CollarStyle").addEventListener("change", CollarSelect);
document.getElementById("NumberStyle").addEventListener("change", NumberSelect);

function NumberSelectED(e) {
    var target = e.target;
    if (target.tagName == "IMG") {
        target = target.parentNode
    } else if (target.tagName == "LI") {
        target = target.children[0]
    } else if (target == e.currentTarget) {
        return
    } else if (target.tagName != "A") {
        target = this
    }
    NumberSelect.call(target);
}
document.getElementById("NumberSel").addEventListener("click", NumberSelectED);

function ProductSelectED(e) {
    var target = e.target;
    if (target.tagName == "IMG") {
        target = target.parentNode
    } else if (target.tagName == "LI") {
        target = target.children[0]
    } else if (target == e.currentTarget) {
        return
    } else if (target.tagName != "A") {
        target = this
    }
    ProductSelect.call(target);
}
document.getElementById("GarSel").addEventListener("click", ProductSelectED);
function BibSelectED(e) {
    var target = e.target;
    if (target.tagName == "IMG") {
        target = target.parentNode
    } else if (target.tagName == "LI") {
        target = target.children[0]
    } else if (target == e.currentTarget) {
        return
    } else if (target.tagName != "A") {
        target = this
    }
    BibSelect.call(target);
}
document.getElementById("BibSel").addEventListener("click", BibSelectED);

function SeniorSelectED(e) {
    var target = e.target;
    if (target.tagName == "IMG") {
        target = target.parentNode
    } else if (target.tagName == "LI") {
        target = target.children[0]
    } else if (target == e.currentTarget) {
        return
    } else if (target.tagName != "A") {
        target = this
    }
    SeniorSelect.call(target);
}
document.getElementById("SeniorSel").addEventListener("click", SeniorSelectED);

DNL = document.getElementById("PRODNAV").getElementsByTagName("a");
for (i = 0; i < DNL.length; i++) {
    DNL[i].addEventListener("click", function() {
        changeNav(this.id)
    })
}
function DesignSelectED(e) {
    target = e.target;
    if (target.tagName == "IMG") {
        target = target.parentNode
    } else if (target.tagName == "LI") {
        target = target.children[0]
    } else if (target == e.currentTarget) {
        return
    } else if (target.tagName != "A") {
        target = this
    }
    var IL = document.getElementById("DesignSel").getElementsByClassName("chosen");
    while (IL.length) {
        IL[0].classList.remove("chosen")
    }
    target.classList.add("chosen");
    //var product=BOOKLET.Active;
    PRODDESIGN = document.getElementById("ProductDesign[" + ACTIVE + "]");
    PRODDESIGN.value = target.id;
    design();
    changeNav("Customise");
    RHSInfo();
}
document.getElementById("DesignSel").addEventListener("click", DesignSelectED);
document.getElementById("Previous").addEventListener("click", function() {
    changeNav(this.id)
});
document.getElementById("Next").addEventListener("click", function() {
    changeNav(this.id)
})
//document.getElementById("Cart").addEventListener("click",function(){changeNav("SubmitOrder")})
//document.getElementById("add-another-product").addEventListener("click",function(){changeNav("Garment")})
document.getElementById("cart-items-count").addEventListener("click", function() {
    changeNav("SubmitOrder")
})

document.getElementById("AnotherDesign").addEventListener("click", function() {
    changeNav("Design")
})
function viewzoom() {
    BDY = document.body;
    if (BDY.classList.contains("mobmenu")) {
        BDY.classList.remove("mobmenu")
    }
    BDY.classList.contains("viewzoom") ? BDY.classList.remove("viewzoom") : BDY.classList.add("viewzoom");
}
document.getElementById("ViewZoom").addEventListener("click", viewzoom);
function viewswap() {
    var VIEW = document.getElementById("View");
    VIEW.value = (VIEW.value == "Front") ? "Back" : "Front";
    var IL = document.getElementById("ViewSel").getElementsByClassName("chosen");
    while (IL.length) {
        IL[0].classList.remove("chosen")
    }
    document.getElementById(VIEW.value).classList.add("chosen");
    design();
}
document.getElementById("ViewSwap").addEventListener("click", viewswap);

function openNav() {
    document.getElementById("myNav").style.width = "100%"
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%"
}
function OptionClickED(e) {
    if (e.target.matches("#OptionSel>li>span")) {
        var LI = e.target.parentNode;
        var LIA = LI.classList.contains("active")
        var OSA = document.getElementById("OptionSel").getElementsByClassName("active");
        while (OSA.length) {
            OSA[0].classList.remove("active")
        }
        if (!LIA) {
            LI.classList.add("active")
        }
    }
}
document.getElementById("OptionSel").addEventListener("click", OptionClickED);

function LogoChangeED(e) {
    var target = e.target;
    if (target.classList.contains("logoupload") && e.type == "change") {
        console.log("HFS");
        HFS.call(target);
    } else if (target.classList.contains("addtext") && e.type == "input") {
        console.log("addText");
        addText.call(target)
    } else if (target.classList.contains("uploadselect") && e.type == "change") {
        console.log("embellish");
        embellish.call(target)
    }//		else if(target.classList.contains("uploaddiv") && e.type=="click"){console.log("uploaddiv");var IL=document.getElementById("logodiv").getElementsByClassName("chosen");while(IL.length){IL[0].classList.remove("chosen")};target.classList.add("chosen")}
    else if (target.classList.contains("brandselect") && e.type == "change") {
        console.log("SBall");
        SBall()
    } else if (target.classList.contains("shortsbrand") && e.type == "change") {
        console.log("shortsbrand");
        design()
    } else if (target.classList.contains("sockembroidery") && e.type == "change") {
        console.log("socknameposition");
        design()
    } else if (target.classList.contains("socktext") && e.type == "input") {
        console.log("socktext");
        design()
    } else if (e.target.matches("#logodiv>fieldset>div>div:first-child>label") && e.type == "click") {
        var IL = document.getElementById("logodiv").getElementsByClassName("active");
        var IsActive = target.parentNode.parentNode.classList.contains("active")
        while (IL.length) {
            IL[0].classList.remove("active")
        }
        ;if (!IsActive) {
            target.parentNode.parentNode.classList.add("active")
        }
        //			e.target.parentNode.parentNode.classList.toggle("active")
    } else if (e.target.matches("#logodiv>span") && e.type == "click") {
        removeNode("ColourPicker", document);
    }
}
document.getElementById("logodiv").addEventListener("change", LogoChangeED);
document.getElementById("logodiv").addEventListener("input", LogoChangeED);
document.getElementById("logodiv").addEventListener("click", LogoChangeED);
document.getElementById("Cart").addEventListener("click", addtobooklet);

//	document.getElementById("Edit").addEventListener("click",editProduct);	

function BookletMenuED(e) {
    var target = e.target;
    if (e.target.matches("#nextdesign")) {
        console.log("next booklet product");
        BookletSlider("next");
    } else if (e.target.matches("#lastdesign")) {
        console.log("previous booklet product");
        BookletSlider("previous");
    } else if (target.matches("#Edit")) {
        var BA = document.getElementById("BookletDesigns").getElementsByClassName("bookactive")[0];
        var M = (BA.id.indexOf("[") != -1) ? BA.id.slice(BA.id.indexOf("[") + 1, BA.id.length - 1) : BA.id;
        editProduct(M)
    } else if (target.matches("#Delete")) {
        var BA = document.getElementById("BookletDesigns").getElementsByClassName("bookactive")[0];
        var M = (BA.id.indexOf("[") != -1) ? BA.id.slice(BA.id.indexOf("[") + 1, BA.id.length - 1) : BA.id;
        deleteProduct(M)
    } else if (target.matches("#add-another-product")) {
        newProduct();

    }
}
document.getElementById("BookletOverview").addEventListener("click", BookletMenuED);

function print_current_page() {
    var prtContent = document.getElementById("BookletDesigns");
    //var WinPrint = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
    //WinPrint.document.write(prtContent.innerHTML+"<style>li{display:inline-block;list-style-type:none}@media print{@page {size:A4 portrait;margin:10px}figure img{margin:8px}figure{width:inherit;height:822px;margin:0;flex-direction:column;display:flex;align-items:center;page-break-after:always;page-break-inside:avoid;break-after:page;break-inside:avoid}ul{padding:0}}</style>");
    //WinPrint.document.close();
    //WinPrint.focus();
    window.print();
    //WinPrint.close();
    setTimeout(WinPrint, 1000);

}

function exportdiv() {

    var pdf = new jsPDF("p","pt","a4");
    pdf.addHTML($('#BookletDesigns'), 15, 15, function() {

        pdf.save('div.pdf');
    });
}
function minicart() {
    document.getElementById("mini-cart").style.visibility = "visible";
    var mini = document.getElementById("BookletDesigns").createElementByTag("td");
    mini.style.visibility = "visible";
}

function msgalert() {
    var alerted = localStorage.getItem('alerted', 1);
    if (alerted != 'yes') {
        alert("Please print and save your booklet before submitting. Once you press submit you will not be able to save or go back");
        localStorage.setItem('alerted', 'yes');

    }
}
// 

/*function minicarthidden(){
        document.getElementById("mini-cart").style.visibility="hidden";
    }*/
