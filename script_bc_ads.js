var partners = "",
    count = 1,
    append,
    pNum,
    cNum = 0,
    addOptions = false,
    s, e, presets = {
        brand: [],
        img: [],
        link: [],
    };

function addSize() {
    var adSize = document.createElement("div");
    adSize.innerHTML = divPos;
    document.getElementById("positioning").appendChild(adSize);
    document.getElementsByClassName("addSize")[0].remove()
    document.getElementById("tital").innerHTML = "Mobile positioning:"
}

function addOption(i) {
    if (!addOptions) {
        document.getElementsByClassName("optionsImg")[i - 1].classList = "optionsImg expanded"
        document.querySelectorAll(".iframeNode")[i - 1].style.display = "block";
        addOptions = true;
    } else {
        document.getElementsByClassName("optionsImg")[i - 1].classList = "optionsImg"
        document.querySelectorAll(".iframeNode")[i - 1].style.display = "none";
        addOptions = false;
    }
}

function copyFunctionality() {
    navigator.clipboard.writeText(BCAdsFunctionality);
    document.getElementsByClassName('side')[0].innerHTML = "Functionality copied!";
    setTimeout(() => {
        document.getElementsByClassName('side')[0].innerHTML = "Functionality";
    }, 5000);
}

function getPosition(string, subString, index) {
    return string.split(subString, index).join(subString).length;
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
        partners.partners[i].iframe !== undefined || partners.partners[i].noIframe || partners.partners[i].imgType === "iframe" ? document.querySelectorAll(".iframeNode")[i].style.display = "block" : false;
        partners.partners[i].iframe !== undefined ? document.getElementsByClassName("iframe")[i].value = partners.partners[i].iframe : false;
        partners.partners[i].noIframe ? document.getElementsByName("noIframe")[i].checked = true : false;
        partners.partners[i].imgType === "iframe" ? document.getElementsByName("imgType")[i].value = "iframe" : false;
    }
    let he = partners.positioning[0].imageStyle.split(";")
    document.getElementsByName("frequencyCap")[0].value = partners.settings.cookieLifeTime;
    document.getElementsByName("refreshDelay")[0].value = partners.settings.refreshDelay;
    document.getElementsByName("width")[0].value = he[0].slice(7);
    document.getElementsByName("height")[0].value = he[1].slice(7);
    document.getElementsByName("nodePosition")[0].value = partners.positioning[0].nodePosition;
    document.getElementsByName("devicesMobile")[0].checked = partners.settings.devices.indexOf("mobile") > -1 ? true : false;
    document.getElementsByName("devicesDesktop")[0].checked = partners.settings.devices.indexOf("desktop") > -1 ? true : false;
    document.getElementsByName("stayOnLastPartner")[0].checked = partners.settings.stayOnLastPartner ? true : false;
    document.getElementsByName("infiniteCarousel")[0].checked = partners.settings.infiniteCarousel ? true : false;
    document.getElementsByName("parentNode")[0].value = script.substring(getPosition(script, 'var parentNode', 1), getPosition(script, 'return parentNode;', 1) + 18);
    document.getElementsByName("childNode")[0].value = script.substring(getPosition(script, 'var node', 1), getPosition(script, 'return node;', 1) + 17)
    if (partners.positioning.length > 1) {
        document.getElementsByName("nodePosition")[1] === undefined ? addSize() : false;
        document.getElementsByName("nodePosition")[1].value = partners.positioning[1].nodePosition;
        document.getElementById("breakpoint").value = partners.positioning[1].value;
        document.getElementsByName("parentNode")[1].value = script.substring(getPosition(script, 'var parentNode', 2), getPosition(script, 'return parentNode;', 2) + 18);
        document.getElementsByName("childNode")[1].value = script.substring(getPosition(script, 'var node', 2), getPosition(script, 'return node;', 2) + 17)
        he = partners.positioning[1].imageStyle.split(";")
        document.getElementsByName("width")[1].value = he[0].slice(7);
        document.getElementsByName("height")[1].value = he[1].slice(7);
    }
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
            '<label for="">Link:</label><input type="textbox" name="link' + i + '" class="link"></input>' +
            '<label for=""> Image:</label><input type="textbox" name="img' + i + '" class="logoImg"></input>' +
            '<span style="user-select: none;" onclick="addOption(' + i + ')" class="addOption' + i + '" id="addOption">Options<img class="optionsImg" src="https://modals.igaming-service.io/wp-content/uploads/2023/04/down-filled-triangular-arrow-removebg-preview.png"></span>' +
            '<img onclick="removeBtn(' + i + ')" class="removeBtn' + i + '" id="removeBtn" src="https://modals.igaming-service.io/wp-content/uploads/2023/03/remove.png"><br>' +
            '<div class="iframeNode" style="display:none;"><label for=""> Iframe:\t</label><input type="textbox" name="iframe' + i + '" class="iframe"></input></span>' +
            '<label for="" id="lab"  title="Type of image">Image type: </label>' +
            '<select name="imgType" id="imgType" title="Type of image">' +
            '<option value="image">image</option>' +
            '<option value="iframe">iframe</option></select>' +
            '<label for="" id="lab">No iframe: </label><input type="checkbox" name="noIframe"></input>';
        document.getElementsByClassName("num").item(count - 1).innerHTML += append
    }
    cNum += pNum
    document.getElementsByClassName("partners")[0].innerHTML += '<hr style="position:absolute; width:850px;">'
    count++;
    document.getElementsByClassName("generate")[0].style.display = "block";
    for (let i = 0; i < document.querySelectorAll(".num").length - 1; i++) {
        document.getElementsByClassName("brand")[i].value = presets.brand[i];
        document.getElementsByClassName("logoImg")[i].value = presets.img[i];
        document.getElementsByClassName("link")[i].value = presets.link[i];
    }
}

function generateScript() {
    partners = "";
    let iframes = "",
        imgType = "",
        noIframe = "";
    for (let i = 1; i < count; i++) {
        var inputCount = document.getElementsByClassName("num").item(i - 1).getElementsByTagName('input').length / 3;
        for (let j = 1; j <= inputCount; j++) {
            j === inputCount ? e = "\n}" : e = "";
            j === 1 ? s = "{" : s = "";
            if (j === 1) {
                if (addOptions) {
                    document.getElementsByName("iframe" + i)[0].value !== "" ? iframes = '\n\tiframe:"' + document.getElementsByName("iframe" + i)[0].value + '",' : false;
                    document.getElementsByName("imgType")[i - 1].value !== "image" ? imgType = '\n\timgType:"' + document.getElementsByName("imgType")[i - 1].value + '",' : false;
                    document.getElementsByName("noIframe")[i - 1].checked ? noIframe = '\n\tnoIframe:true,' : false;
                }
                partners += s + noIframe + imgType + '\n\tbrand: "' + document.getElementsByName("brand" + i)[0].value + '",' + iframes + '\n\tlogoImg: "' + document.getElementsByName("img" + i)[0].value + '", \n\tlink: "' + document.getElementsByName("link" + i)[0].value + '"' + e + ' ,\n},'
            } else {
                if (addOptions) {
                    document.getElementsByName("iframe" + i)[0].value !== "" ? iframes = '\n\tiframe' + j + ':"' + document.getElementsByName("iframe" + i)[0].value + '",' : false;
                    document.getElementsByName("imgType")[i - 1].value !== "image" ? imgType = '\n\timgType:"' + document.getElementsByName("imgType")[i-1].value + '",' : false;
                    document.getElementsByName("noIframe")[i - 1].checked ? noIframe = '\n\tnoIframe:true,' : false;
                }
                partners += s + noIframe + imgType + '\n\tbrand' + j + ': "' + document.getElementsByName("brand" + i)[0].value + '",' + iframes + ' \n\tlogoImg' + j + ': "' + document.getElementsByName("img" + i)[0].value + '", \n\tlink' + j + ': "' + document.getElementsByName("link" + i)[0].value + '"' + e + ' ,\n}'
            }
        }
    }
    let breakpoint = 0;
    var devices = "";
    devices = document.getElementsByName("devicesMobile")[0].checked ? '"mobile",' : "";
    devices += document.getElementsByName("devicesDesktop")[0].checked ? '"desktop"' : "";
    let rDel = document.getElementsByName("refreshDelay")[0].value === "" ? document.getElementsByName("refreshDelay")[0].placeholder : document.getElementsByName("refreshDelay")[0].value;
    let fCap = document.getElementsByName("frequencyCap")[0].value === "" ? document.getElementsByName("frequencyCap")[0].placeholder : document.getElementsByName("frequencyCap")[0].value;
    let fullPos = "";
    for (let i = 0; i < document.querySelectorAll('#childNode').length; i++) {
        let getWidth = document.getElementsByName("width")[i].value === "" ? document.getElementsByName("width")[i].placeholder : document.getElementsByName("width")[i].value;
        let getHeight = document.getElementsByName("width")[i].value === "" ? document.getElementsByName("height")[i].placeholder : document.getElementsByName("height")[i].value;
        let childNode = document.getElementsByName("childNode")[i].value === "" ? document.getElementsByName("childNode")[i].placeholder : document.getElementsByName("childNode")[i].value;
        let parentNode = document.getElementsByName("parentNode")[i].value === "" ? document.getElementsByName("parentNode")[i].placeholder : document.getElementsByName("parentNode")[i].value;
        if (i === 1) {
            breakpoint = document.getElementById('breakpoint').value === "" ? document.getElementById('breakpoint').placeholder : document.getElementById('breakpoint').value;
        }
        fullPos += '{\n' +
            'value: ' + breakpoint + ',\n' +
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