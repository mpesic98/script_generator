var partners = "",
    count = 1,
    append,
    pNum,
    cNum = 0,
    s, e, presets = {
        brand: [],
        img: [],
        link: [],
    };

function addSize() {
    var test = document.createElement("div");
    test.innerHTML = divPos;
    document.getElementById("positioning").appendChild(test);
    document.getElementsByClassName("addSize")[0].remove()
    document.getElementById("tital").innerHTML = "Mobile positioning:"
}

function copyFunctionality() {
    navigator.clipboard.writeText(BCAdsFunctionality);
    document.getElementsByClassName('side')[0].innerHTML = "Functionality copied!";
    setTimeout(() => {
        document.getElementsByClassName('side')[0].innerHTML = "Functionality";
    }, 5000);
}

function inputScript() {
    var script = document.getElementById("translate").value
    var partners = eval(script)
    for (let i = 0; i < partners.partners.length; i++) {
        addPartner();
    }
    for (let i = 0; i < partners.partners.length; i++) {
        document.getElementsByClassName("brand")[i].value = partners.partners[i].brand;
        document.getElementsByClassName("link")[i].value = partners.partners[i].link;
        document.getElementsByClassName("logoImg")[i].value = partners.partners[i].logoImg;
    }
    let he = partners.positioning[0].imageStyle.split(";")
    document.getElementsByName("frequencyCap")[0].value = partners.settings.cookieLifeTime;
    document.getElementsByName("refreshDelay")[0].value = partners.settings.refreshDelay;
    document.getElementsByName("width")[0].value = he[0].slice(7);
    document.getElementsByName("height")[0].value = he[1].slice(7);
    document.getElementsByName("nodePosition")[0].value = partners.settings.nodePosition;
    document.getElementsByName("devicesMobile")[0].checked = partners.settings.devices.indexOf("mobile") > -1 ? true : false;
    document.getElementsByName("devicesDesktop")[0].checked = partners.settings.devices.indexOf("desktop") > -1 ? true : false;
    document.getElementsByName("stayOnLastPartner")[0].checked = partners.settings.stayOnLastPartner ? true : false;
    document.getElementsByName("infiniteCarousel")[0].checked = partners.settings.infiniteCarousel ? true : false;
}

function removeBtn(partner) {
    document.getElementsByClassName("num")[partner - 1].remove();
    document.getElementsByTagName("hr")[partner].remove();
    count--;
    cNum--;
    for (let i = 0; i < document.querySelectorAll(".stepC").length; i++) {
        let sel = document.querySelectorAll(".num")[i];
        document.querySelectorAll(".stepC")[i].innerHTML = "Step " + (i + 1) + " :";
        sel.getElementsByClassName("brand")[0].setAttribute("name", "brand" + (i + 1));
        sel.getElementsByClassName("link")[0].setAttribute("name", "link" + (i + 1));
        sel.getElementsByClassName("logoImg")[0].setAttribute("name", "img" + (i + 1));
    }
}

function addPartner() {
    for (let i = 0; i < document.querySelectorAll(".num").length; i++) {
        presets.brand[i] = document.getElementsByClassName("brand")[i].value
        presets.img[i] = document.getElementsByClassName("logoImg")[i].value
        presets.link[i] = document.getElementsByClassName("link")[i].value
    }

    pNum = parseInt(document.getElementsByName("pNum")[0].value);
    document.getElementsByClassName("partners")[0].innerHTML += '<div class="num"><p class="stepC" style="margin: 20px;">Step ' + count + ' :</p></div>'
    for (let i = 1 + cNum; i <= pNum + cNum; i++) {
        append = '<label for=""> Brand:</label><input type="textbox" name="brand' + i + '" class="brand"></input>' +
            '<label for="">Link:</label><input type="textbox" name="link' + i + '" class="link"></input><label for=""> Image:</label>' +
            '<input type="textbox" name="img' + i + '" class="logoImg"></input>' +
            '<img onclick="removeBtn(' + i + ')" class="removeBtn' + i + '" id="removeBtn" src="https://modals.igaming-service.io/wp-content/uploads/2023/03/remove.png"><br>';
        document.getElementsByClassName("num").item(count - 1).innerHTML += append
    }
    cNum += pNum
    document.getElementsByClassName("partners")[0].innerHTML += '<hr style="position:absolute; width:850px;">'
    count++;
    document.getElementsByClassName("generate")[0].style.display = "unset";
    for (let i = 0; i < document.querySelectorAll(".num").length - 1; i++) {
        document.getElementsByClassName("brand")[i].value = presets.brand[i];
        document.getElementsByClassName("logoImg")[i].value = presets.img[i];
        document.getElementsByClassName("link")[i].value = presets.link[i];
    }
}

function generateScript() {
    partners = "";
    for (let i = 1; i < count; i++) {
        var inputCount = document.getElementsByClassName("num").item(i - 1).getElementsByTagName('input').length / 3;
        for (let j = 1; j <= inputCount; j++) {
            j === inputCount ? e = "\n}" : e = "";
            j === 1 ? s = "{" : s = "";
            if (j === 1) {
                partners += s + '\n\tbrand: "' + document.getElementsByName("brand" + i)[0].value + '", \n\tlogoImg: "' + document.getElementsByName("img" + i)[0].value + '", \n\tlink: "' + document.getElementsByName("link" + i)[0].value + '"' + e + ' ,\n'
            } else {
                partners += s + '\n\tbrand' + j + ': "' + document.getElementsByName("brand" + i)[0].value + '", \n\tlogoImg' + j + ': "' + document.getElementsByName("img" + i)[0].value + '", \n\tlink' + j + ': "' + document.getElementsByName("link" + i)[0].value + '"' + e + ' ,\n'
            }
        }
    }
    var devices = "";
    devices = document.getElementsByName("devicesMobile")[0].checked ? '"mobile",' : "";
    devices += document.getElementsByName("devicesDesktop")[0].checked ? '"desktop"' : "";
    let rDel = document.getElementsByName("refreshDelay")[0].value === "" ? document.getElementsByName("refreshDelay")[0].placeholder : document.getElementsByName("refreshDelay")[0].value;
    let fCap = document.getElementsByName("frequencyCap")[0].value === "" ? document.getElementsByName("frequencyCap")[0].placeholder : document.getElementsByName("frequencyCap")[0].value;
    let fullPos="";
    for (let i = 0; i < document.querySelectorAll('#childNode').length; i++) {
        let getWidth = document.getElementsByName("width")[i].value === "" ? document.getElementsByName("width")[i].placeholder : document.getElementsByName("width")[i].value;
        let getHeight = document.getElementsByName("width")[i].value === "" ? document.getElementsByName("height")[i].placeholder : document.getElementsByName("height")[i].value;
        let childNode = document.getElementsByName("childNode")[i].value === "" ? document.getElementsByName("childNode")[i].placeholder : document.getElementsByName("childNode")[i].value;
        let parentNode = document.getElementsByName("parentNode")[i].value === "" ? document.getElementsByName("parentNode")[i].placeholder : document.getElementsByName("parentNode")[i].value;    
        fullPos += '{\n' +
            'value: 0,\n' +
            'pn: function () {\n' +
            parentNode + '\n' +
            '},\n' +
            'cn: function () {\n' +
            childNode + '\n' +
            '},\n' +
            'nodePosition: "' + document.getElementsByName("nodePosition")[i].options[document.getElementsByName("nodePosition")[i].selectedIndex].text.toLowerCase() + '",\n' +
            'imageStyle: "height: ' + getHeight + '; width: ' + getWidth + ';"\n' +
            '},';
    }
console.log(fullPos);
    var bcAdsOutput = 'data = {\n' +
        'positioning: [\n' + fullPos + '],\n' +
        'settings: {\n' +
        'cookieLifeTime: ' + fCap + ',\n' +
        'infiniteCarousel: ' + document.getElementsByName("infiniteCarousel")[0].checked + ',\n' +
        'stayOnLastPartner: ' + document.getElementsByName("stayOnLastPartner")[0].checked + ',\n' +
        'refreshDelay: ' + rDel + ',\n' +
        'devices: [' + devices + '],\n' +
        '},\n' +
        'partners: [' + partners + ']}\n';
    document.getElementById("translate").value = bcAdsOutput;
    let copyText = document.getElementById("translate");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    document.getElementsByClassName('generate')[0].innerHTML = "Script copied!"
    setTimeout(() => {
        document.getElementsByClassName('generate')[0].innerHTML = "Generate script!"
    }, 5000);
}