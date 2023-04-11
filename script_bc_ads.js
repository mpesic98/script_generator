var partners = "",
    count = 1,
    append,
    pNum,
    cNum = 0,
    addOptions = false,
    s, e, presets = {
        brand: [],
        iframe: [],
        img: [],
        link: [],
        ioslink: [],
        androidlink: [],
        iosimpression: [],
        androidimpression: [],
        noIframe: [],
        imgType: []
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
        partners.partners[i].noIframe ? document.getElementsByName("noIframe" + (i + 1))[i].checked = true : false;
        partners.partners[i].imgType === "iframe" ? document.getElementsByName("imgType" + (i + 1))[i].value = "iframe" : false;
        partners.partners[i].ioslink !== undefined ? document.getElementsByClassName("ioslink")[i].value = partners.partners[i].ioslink : false;
        partners.partners[i].androidlink !== undefined ? document.getElementsByClassName("androidlink")[i].value = partners.partners[i].androidlink : false;
        partners.partners[i].iosimpression !== undefined ? document.getElementsByClassName("iosimpression")[i].value = partners.partners[i].iosimpression : false;
        partners.partners[i].androidimpression !== undefined ? document.getElementsByClassName("androidimpression")[i].value = partners.partners[i].androidimpression : false;
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
    document.getElementsByName("childNode")[0].value = script.substring(getPosition(script, 'var node', 1), getPosition(script, 'return node;', 1) + 12)
    if (partners.positioning.length > 1) {
        document.getElementsByName("nodePosition")[1] === undefined ? addSize() : false;
        document.getElementsByName("nodePosition")[1].value = partners.positioning[1].nodePosition;
        document.getElementById("breakpoint").value = partners.positioning[1].value;
        document.getElementsByName("parentNode")[1].value = script.substring(getPosition(script, 'var parentNode', 2), getPosition(script, 'return parentNode;', 2) + 18);
        document.getElementsByName("childNode")[1].value = script.substring(getPosition(script, 'var node', 2), getPosition(script, 'return node;', 2) + 12)
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
        presets.brand[i] = document.getElementsByClassName("brand")[i].value;
        presets.img[i] = document.getElementsByClassName("logoImg")[i].value;
        presets.link[i] = document.getElementsByClassName("link")[i].value;
        presets.iframe[i] = document.getElementsByClassName("iframe")[i].value;
        presets.ioslink[i] = document.getElementsByClassName("ioslink")[i].value;
        presets.androidlink[i] = document.getElementsByClassName("androidlink")[i].value;
        presets.iosimpression[i] = document.getElementsByClassName("iosimpression")[i].value;
        presets.androidimpression[i] = document.getElementsByClassName("androidimpression")[i].value;
        presets.imgType[i] = document.getElementsByName("imgType" + (i + 1))[i].value;
        presets.noIframe[i] = document.getElementsByName("noIframe" + (i + 1))[i].checked;
    }

    pNum = parseInt(document.getElementsByName("pNum")[0].value);
    document.getElementsByClassName("partners")[0].innerHTML += '<div class="num"><p class="stepC" style="margin: 20px;">Step ' + count + ' :</p></div>'
    for (let i = 1 + cNum; i <= pNum + cNum; i++) {
        append = '<label for=""> Brand:</label><input type="textbox" name="brand' + i + '" class="brand"></input>' +
            '<label for="">Link:</label><input type="textbox" name="link' + i + '" class="link"></input>' +
            '<label for=""> Image:</label><input type="textbox" name="img' + i + '" class="logoImg"></input>' +
            '<span style="user-select: none;" onclick="addOption(' + i + ')" class="addOption' + i + '" id="addOption">More<img class="optionsImg" src="https://modals.igaming-service.io/wp-content/uploads/2023/04/down-filled-triangular-arrow-removebg-preview.png"></span>' +
            '<img onclick="removeBtn(' + i + ')" class="removeBtn' + i + '" id="removeBtn" src="https://modals.igaming-service.io/wp-content/uploads/2023/03/remove.png"><br>' +
            '<div class="iframeNode" style="display:none;"><label for=""> Iframe:\t</label><input style="margin-left: 39px;" type="textbox" name="iframe' + i + '" class="iframe"></input></span>' +
            '<label for="" id="lab"  title="Type of image">Image type: </label>' +
            '<select name="imgType' + i + '" id="imgType" title="Type of image">' +
            '<option value="image">image</option>' +
            '<option value="iframe">iframe</option></select>' +
            '<label style="margin-left: 50px;" for="" id="lab">No iframe: </label><input type="checkbox" name="noIframe' + i + '"></input><br>' +
            '<label for=""><img src="https://modals.igaming-service.io/wp-content/uploads/2023/04/ios_logo-1.png" style="width:20px; position:relative; bottom:4px;"> iOS link:</label><input style="margin-left: 31px;" type="textbox" name="ioslink' + i + '" class="ioslink link"></input>' +
            '<label for=""><img src="https://modals.igaming-service.io/wp-content/uploads/2023/04/ios_logo-1.png" style="width:20px; position:relative; bottom:4px;"> iOS impression:</label><input style="margin-left: 31px;" type="textbox" name="iosimpression' + i + '" class="iosimpression link"></input><br>' +
            '<label for=""><img src="https://modals.igaming-service.io/wp-content/uploads/2023/04/android_logo.png" style="width:20px; position:relative; bottom:4px;"> Android link:</label><input type="textbox" name="androidlink' + i + '" class="androidlink link"></input>' +
            '<label for=""><img src="https://modals.igaming-service.io/wp-content/uploads/2023/04/android_logo.png" style="width:20px; position:relative; bottom:4px;"> Android impression:</label><input type="textbox" name="androidimpression' + i + '" class="androidimpression link"></input>';
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
        document.getElementsByClassName("iframe")[i].value = presets.iframe[i];
        document.getElementsByClassName("ioslink")[i].value = presets.ioslink[i];
        document.getElementsByClassName("androidlink")[i].value = presets.androidlink[i];
        document.getElementsByClassName("iosimpression")[i].value = presets.iosimpression[i];
        document.getElementsByClassName("androidimpression")[i].value = presets.androidimpression[i];
        document.getElementsByName("imgType" + (i + 1))[i].value = presets.imgType[i];
        document.getElementsByName("noIframe" + (i + 1))[i].checked = presets.noIframe[i];
    }
}

function generateScript() {
    partners = "";
    let iframes = "",
        imgType = "",
        noIframe = "",
        ioslink = "",
        iosimpression = "",
        androidlink = "",
        androidimpression = "";
    for (let i = 1; i < count; i++) {
        var inputCount = document.getElementsByClassName("num").item(i - 1).getElementsByTagName('input').length / 7;
        for (let j = 1; j <= inputCount; j++) {
            j === inputCount ? e = "\n}" : e = "";
            j === 1 ? s = "{" : s = "";
            if (j === 1) {
                document.getElementsByName("iframe" + i)[0].value !== "" ? iframes = '\n\tiframe:"' + document.getElementsByName("iframe" + i)[0].value + '",' : false;
                document.getElementsByName("imgType" + i)[0].value !== "image" ? imgType = '\n\timgType:"' + document.getElementsByName("imgType" + i)[0].value + '",' : false;
                document.getElementsByName("noIframe" + i)[0].checked ? noIframe = '\n\tnoIframe:true,' : false;
                document.getElementsByName("ioslink" + i)[0].value !== "" ? ioslink = '\n\tioslink:"' + document.getElementsByName("ioslink" + i)[0].value + '",' : false;
                document.getElementsByName("iosimpression" + i)[0].value !== "" ? iosimpression = '\n\tiosimpression:"' + document.getElementsByName("iosimpression" + i)[0].value + '",' : false;
                document.getElementsByName("androidlink" + i)[0].value !== "" ? androidlink = '\n\tandroidlink:"' + document.getElementsByName("androidlink" + i)[0].value + '",' : false;
                document.getElementsByName("androidimpression" + i)[0].value !== "" ? androidimpression = '\n\tandroidimpression:"' + document.getElementsByName("androidimpression" + i)[0].value + '",' : false;
                partners += s + noIframe + imgType + '\n\tbrand: "' + document.getElementsByName("brand" + i)[0].value + '",' + iosimpression + androidimpression + ioslink + androidlink + iframes + '\n\tlogoImg: "' + document.getElementsByName("img" + i)[0].value + '", \n\tlink: "' + document.getElementsByName("link" + i)[0].value + '"' + e + ' ,\n},'
                imgType = "";
            } else {
                document.getElementsByName("iframe" + i)[0].value !== "" ? iframes = '\n\tiframe' + j + ':"' + document.getElementsByName("iframe" + i)[0].value + '",' : false;
                document.getElementsByName("imgType" + i)[0].value !== "image" ? imgType = '\n\timgType:"' + document.getElementsByName("imgType" + i)[0].value + '",' : false;
                document.getElementsByName("noIframe" + i)[0].checked ? noIframe = '\n\tnoIframe:true,' : false;
                document.getElementsByName("ioslink" + i)[0].value !== "" ? ioslink = '\n\tioslink="' + document.getElementsByName("ioslink" + i)[0].value + '",' : false;
                document.getElementsByName("iosimpression" + i)[0].value !== "" ? iosimpression = '\n\tiosimpression="' + document.getElementsByName("iosimpression" + i)[0].value + '",' : false;
                document.getElementsByName("androidlink" + i)[0].value !== "" ? androidlink = '\n\tandroidlink="' + document.getElementsByName("androidlink" + i)[0].value + '",' : false;
                document.getElementsByName("androidimpression" + i)[0].value !== "" ? androidimpression = '\n\tandroidimpression="' + document.getElementsByName("androidimpression" + i)[0].value + '",' : false;
                partners += s + noIframe + imgType + '\n\tbrand' + j + ': "' + document.getElementsByName("brand" + i)[0].value + '",' + iosimpression + androidimpression + ioslink + androidlink + iframes + ' \n\tlogoImg' + j + ': "' + document.getElementsByName("img" + i)[0].value + '", \n\tlink' + j + ': "' + document.getElementsByName("link" + i)[0].value + '"' + e + ' ,\n}'
                imgType = "";
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