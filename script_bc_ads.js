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
    // document.getElementsByName("targetElement")[0].value = script.substring(script.indexOf('querySelector("') + 15, script.indexOf('")'));
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
    for (let i = 0; i < document.querySelectorAll(".num").length; i++) {
        console.log(document.querySelectorAll(".num")[i]);
    }
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
    // let targetEl = document.getElementsByName("targetElement")[0].value === "" ? document.getElementsByName("targetElement")[0].placeholder : document.getElementsByName("targetElement")[0].value;
    let getWidth = document.getElementsByName("width")[0].value === "" ? document.getElementsByName("width")[0].placeholder : document.getElementsByName("width")[0].value;
    let getHeight = document.getElementsByName("width")[0].value === "" ? document.getElementsByName("height")[0].placeholder : document.getElementsByName("height")[0].value;
    var bcAdsOutput = 'data = {\n' +
        'positioning: [{\n' +
        'value: 0,\n' +
        'pn: function () {\n' +
        document.getElementsByName("parentNode")[0].value + '\n' +
        // 'var parentNode = document.querySelector("' + targetEl + '")[0];\n' +
        // 'return parentNode;\n' +
        '},\n' +
        'cn: function () {\n' +
        // 'var node = document.createElement("div");\n' +
        // 'return node;\n' +
        document.getElementsByName("childNode")[0].value + '\n' +
        '},\n' +
        'imageStyle: "height: ' + getHeight + '; width: ' + getWidth + ';"\n' +
        '}],\n' +
        'settings: {\n' +
        'cookieLifeTime: ' + document.getElementsByName("frequencyCap")[0].value + ',\n' +
        'infiniteCarousel: ' + document.getElementsByName("infiniteCarousel")[0].checked + ',\n' +
        'stayOnLastPartner: ' + document.getElementsByName("stayOnLastPartner")[0].checked + ',\n' +
        'refreshDelay: ' + document.getElementsByName("refreshDelay")[0].value + ',\n' +
        'nodePosition: "' + document.getElementsByName("nodePosition")[0].options[document.getElementsByName("nodePosition")[0].selectedIndex].text.toLowerCase() + '",\n' +
        'devices: [' + devices + '],\n' +
        '},\n' +
        'partners: [' + partners + ']}\n';
    document.getElementById("translate").value = bcAdsOutput;
    var copyText = document.getElementById("translate");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    document.getElementsByClassName('generate')[0].innerHTML = "Script copied!"
}