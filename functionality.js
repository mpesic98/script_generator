var BCAdsFunctionality = `var showBCAds = function (operator, settings) {\n` +
    `var nodeEl, parentNodeEl, imageStyle, placementIndex = 0;\n` +
    `data.positioning.forEach(function (item, index) {\n` +
    `if (window.innerWidth >= item.value) {\n` +
    `placementIndex = index;\n` +
    `}\n` +
    `});\n` +
    `nodeEl = data.positioning[placementIndex].cn();\n` +
    `parentNodeEl = data.positioning[placementIndex].pn();\n` +
    `\n` +
    `imageStyle = data.positioning[placementIndex].imageStyle;\n` +
    `imageSrc = operator.logoImg;\n` +
    `imgType = operator.imgType === "iframe" ? "iframe" : "img";\n` +
    `var content = "",\n` +
    `apsFly = false,\n` +
    `impsFly = false,\n` +
    `switchIfr = false,\n` +
    `numPartners = 2,\n` +
    `padding, displayProp, imgTypeEnd = imgType === "iframe" ? "</iframe>" : "";\n` +
    `navigator.userAgent.toLowerCase().indexOf("android") > -1 ? apsFly = "operator.androidlink" : navigator.userAgent.toLowerCase().indexOf("iphone") > -1 || navigator.userAgent.toLowerCase().indexOf("ipad") > -1 ? apsFly = "operator.ioslink" : false;\n` +
    `if (data.settings.hasOwnProperty("multiplePartners")) {\n` +
    `data.settings.multiplePartners.nextToEachOther && device === "desktop" ? (displayProp = "flex", padding = "left") : padding = "top";\n` +
    `while (prefix[0].hasOwnProperty("link" + numPartners)) numPartners++;\n` +
    `for (let i = 1; i < numPartners; i++) {\n` +
    `switchIfr = false;\n` +
    `var ad, ifr, imgs, aFly, existIfr;\n` +
    `if (i === 1) {\n` +
    `ad = "operator.link"\n` +
    `ifr = "operator.iframe"\n` +
    `imgs = "operator.logoImg";\n` +
    `aFly = apsFly;\n` +
    `brand = "operator.brand";\n` +
    `if (eval(ifr) === undefined) {\n` +
    `ifr = eval(ad)\n` +
    `existIfr = false;\n` +
    `} else {\n` +
    `ifr = eval(ifr);\n` +
    `existIfr = true;\n` +
    `}\n` +
    `} else {\n` +
    `navigator.userAgent.toLowerCase().indexOf("android") > -1 ? apsFly = "operator.androidlink" + i : navigator.userAgent.toLowerCase().indexOf("iphone") > -1 || navigator.userAgent.toLowerCase().indexOf("ipad") > -1 ? apsFly = "operator.ioslink" + i : false;\n` +
    `ad = "operator.link" + i\n` +
    `ifr = "operator.iframe" + i\n` +
    `imgs = "operator.logoImg" + i;\n` +
    `brand = "operator.brand" + i;\n` +
    `aFly = apsFly\n` +
    `if (eval(ifr) === undefined) {\n` +
    `ifr = eval(ad)\n` +
    `existIfr = false;\n` +
    `} else {\n` +
    `ifr = eval(ifr);\n` +
    `existIfr = true;\n` +
    `}\n` +
    `}\n` +
    `if (ifr.includes("bet365") || ifr.includes("288sb") || ifr.includes("allsport365")) {\n` +
    `switchIfr = true;\n` +
    `}\n` +
    `switchIfr ? ifr = switchIframe(ifr) : !existIfr ? ifr = eval(ad) : false;\n` +
    `var switchLink;\n` +
    `switchLink = apsFly && operator.hasOwnProperty(apsFly.toLowerCase().slice(9)) ? eval(aFly) : eval(ad);\n` +
    `var p = '<div id="bc_ads" style="display:' + displayProp + '; padding-' + padding + ':2px;">' + '<div style="position: relative;">' + '<a href="' + switchLink + '" target="_blank">' + '<' + imgType + '  scrolling="no" frameborder="0" src="' + eval(imgs) + '" style="' + imageStyle + '">' + imgTypeEnd + '</a></div>' + '';\n` +
    `content += p;\n` +
    `createIframe(ifr, eval(brand), data.positioning[placementIndex], true);\n` +
    `apsFly && operator.hasOwnProperty(aFly.replace("operator.", "")) ? createIframe(eval(aFly), operator.brand, data.positioning[placementIndex]) : "";\n` +
    `}\n` +
    `} else {\n` +
    `if (operator.iframe === undefined) {\n` +
    `operator.iframe = operator.link;\n` +
    `if (operator.iframe.includes("bet365") || operator.iframe.includes("288sb") || operator.iframe.includes("allsport365")) {\n` +
    `switchIfr = true;\n` +
    `}\n` +
    `}\n` +
    `switchIfr ? operator.iframe = switchIframe(operator.link) : false;\n` +
    `apsFly && operator[apsFly.slice(9)] !== undefined ? operator.link = operator[apsFly.slice(9)] : false;\n` +
    `content = '<div id="bc_ads" style="position: relative; display:inline-block">' + '<a href="' + operator.link + '" target="_blank">' + '<' + imgType + ' scrolling = "no" frameborder="0" src="' + imageSrc + '" style="' + imageStyle + '">' + imgTypeEnd + '</a></div>';\n` +
    `if (!operator.noIframe) {\n` +
    `if (operator.iframe !== "") {\n` +
    `operator.brand === undefined ? operator.brand = false : false;\n` +
    `createIframe(operator.iframe, operator.brand, data.positioning[placementIndex], true);\n` +
    `}\n` +
    `apsFly && operator.hasOwnProperty(apsFly.replace("operator.", "").toLowerCase()) ? createIframe(operator[apsFly.replace("operator.", "").toLowerCase()], operator.brand, data.positioning[placementIndex]) : "";\n` +
    `}\n` +
    `}\n` +
    `nodeEl.innerHTML = content;\n` +
    `nodeEl.classList.add("ia-container-block-js");\n` +
    `nodeEl.onclick = function () {\n` +
    `createIframe(operator.iframe, operator.brand, data.positioning[placementIndex], false, "click");\n` +
    `}\n` +
    `if (settings.positioning[placementIndex].nodePosition === "above") {\n` +
    `parentNodeEl.prepend(nodeEl);\n` +
    `} else {\n` +
    `parentNodeEl.appendChild(nodeEl);\n` +
    `}\n` +
    `return;\n` +
    `};\n` +
    `var osCheck = function () {\n` +
    `const userAgent = navigator.userAgent.toLowerCase();\n` +
    `\n` +
    `if (userAgent.indexOf('android') > -1) {\n` +
    `return 'Android';\n` +
    `}\n` +
    `\n` +
    `if (/ipad|iphone|ipod/.test(userAgent) && !window.MSStream) {\n` +
    `return "iOS";\n` +
    `}\n` +
    `\n` +
    `if (userAgent.indexOf('linux') > -1) {\n` +
    `return 'Linux';\n` +
    `}\n` +
    `\n` +
    `if (userAgent.indexOf('windows') > -1) {\n` +
    `return 'Windows';\n` +
    `}\n` +
    `\n` +
    `if (userAgent.indexOf('mac os') > -1) {\n` +
    `return 'MacOS';\n` +
    `}\n` +
    `\n` +
    `return null;\n` +
    `}\n` +
    `var createIframe = function (iframes, brand, positioning, serve, event = "impression") {\n` +
    `var iframeNode = document.createElement("iframe");\n` +
    `iframeNode.className = "_ia_if_";\n` +
    `iframeNode.setAttribute("src", iframes);\n` +
    `iframeNode.setAttribute("sandbox", "allow-scripts")\n` +
    `iframeNode.style.height = "1px";\n` +
    `iframeNode.style.visibility = "hidden";\n` +
    `iframeNode.style.width = "1px";\n` +
    `serve ? document.getElementsByTagName("body").item(0).appendChild(iframeNode) : false;\n` +
    `if (data.settings.clearConsole) {\n` +
    `setTimeout(function () {\n` +
    `console.clear();\n` +
    `}, data.settings.refreshDelay * 1000)\n` +
    `}\n` +
    `setTimeout(function () {\n` +
    `document.getElementsByClassName("_ia_if_").item(0).remove();\n` +
    `}, 30000);\n` +
    `if (brand !== false) {\n` +
    `var region = getCookie("_ia_loc_c") === "US" || getCookie("_ia_loc_c") === "CA" || getCookie("_ia_loc_c") === "IN" ? getCookie("_ia_loc_c") + "-" + getCookie("_ia_loc_r") : getCookie("_ia_loc_c");\n` +
    `var pos = String(positioning.pn)\n` +
    `pos = pos.split("document.").pop();\n` +
    `pos = pos.split(".item")[0];\n` +
    `tracker.seen(\n` +
    `new manualBcAdsUserActivityModel(\n` +
    `iframes,\n` +
    `region,\n` +
    `osCheck(),\n` +
    `null,\n` +
    `device,\n` +
    `brand,\n` +
    `event,\n` +
    `pos\n` +
    `)\n` +
    `);\n` +
    `}\n` +
    `}\n` +
    `var switchIframe = function (iframe) {\n` +
    `if (device === "mobile") {\n` +
    `return "https://mobile." + iframe.slice(12).substring(0, iframe.slice(12).indexOf("/")) + "/Members/Helpers/DefaultAff.aspx?forcelp=1&affiliate=" + iframe.substring(iframe.indexOf("affiliate=") + 10, iframe.length)\n` +
    `} else {\n` +
    `return "https://members." + iframe.slice(12).substring(0, iframe.slice(12).indexOf("/")) + "/Members/Helpers/DefaultAff.aspx?forcelp=1&affiliate=" + iframe.substring(iframe.indexOf("affiliate=") + 10, iframe.length)\n` +
    `}\n` +
    `}\n` +
    `var mobileCheck = function () {\n` +
    `var check = false;\n` +
    `(function (a) {\n` +
    `if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))\n` +
    `check = true;\n` +
    `})(navigator.userAgent || navigator.vendor || window.opera);\n` +
    `return check;\n` +
    `};\n` +
    `var device = mobileCheck() ? "mobile" : "desktop";\n` +
    `var removeIA = function () {\n` +
    `var elements = document.getElementsByClassName("ia-container-block-js");\n` +
    `while (elements.length > 0) {\n` +
    `elements[0].parentNode.removeChild(elements[0]);\n` +
    `}\n` +
    `return;\n` +
    `};\n` +
    `var getCookie = function (name, jsonFormat) {\n` +
    `var matches = document.cookie.match(new RegExp("(?:^|; )" +\n` +
    `name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));\n` +
    `if (!matches) {\n` +
    `return false;\n` +
    `} else {\n` +
    `return matches[1];\n` +
    `}\n` +
    `};\n` +
    `var setCookie = function (name, value, hours) {\n` +
    `var expires = "";\n` +
    `if (hours) {\n` +
    `var date = new Date();\n` +
    `date.setTime(date.getTime() + hours * 60 * 60 * 1000);\n` +
    `expires = "; expires=" + date.toUTCString();\n` +
    `}\n` +
    `document.cookie = name + "=" + (value || "") + expires + "; path=/";\n` +
    `};\n` +
    `class manualUserActivitiesTracking {\n` +
    `constructor(logger) {\n` +
    `this.logger = logger;\n` +
    `}\n` +
    `\n` +
    `seen(impressionData) {\n` +
    `this.logger.log(impressionData);\n` +
    `}\n` +
    `}\n` +
    `class manualUserActivityLogger {\n` +
    `constructor(apiUrl, method, authenticationKey, authenticationValue) {\n` +
    `this.url = apiUrl;\n` +
    `this.method = method;\n` +
    `this.authenticationKey = authenticationKey;\n` +
    `this.authenticationValue = authenticationValue;\n` +
    `}\n` +
    `\n` +
    `log(impressionModel) {\n` +
    `var req = new XMLHttpRequest();\n` +
    `req.onerror = function (e) {\n` +
    `console.log(e);\n` +
    `};\n` +
    `req.open(this.method, this.url, true);\n` +
    `if (this.authenticationKey && this.authenticationValue) {\n` +
    `req.setRequestHeader(this.authenticationKey, this.authenticationValue);\n` +
    `}\n` +
    `\n` +
    `req.send(JSON.stringify(impressionModel));\n` +
    `}\n` +
    `}\n` +
    `class manualBcAdsUserActivityModel {\n` +
    `constructor(\n` +
    `url,\n` +
    `market,\n` +
    `os,\n` +
    `triggers,\n` +
    `device,\n` +
    `brand,\n` +
    `event,\n` +
    `position\n` +
    `) {\n` +
    `this.dateTime = new Date();\n` +
    `this.publisher = window.location.href;\n` +
    `this.url = url;\n` +
    `this.market = market;\n` +
    `this.brand = brand;\n` +
    `this.type = 'BC Ads';\n` +
    `this.event = event;\n` +
    `this.details = {\n` +
    `device: device,\n` +
    `os: os,\n` +
    `position: position,\n` +
    `trigger: triggers\n` +
    `}\n` +
    `}\n` +
    `}\n` +
    `var tracker = new manualUserActivitiesTracking(new manualUserActivityLogger(\n` +
    `'https:\/\/acdc.bettercollective.rocks\/index.php',\n` +
    `'POST',\n` +
    `'apikey',\n` +
    `'#%"TU[XRh+k0<XvOaZsD;JR6?0a/rb=05z#n8quv=,3xY9Tj)BXHA^AfGe6t~8a'\n` +
    `));\n` +
    `var isInPath = function (path) {\n` +
    `var currentPath = window.location.pathname;\n` +
    `var queryPathLocation = window.location.search.search(path)\n` +
    `var queryPath = window.location.search.substring(queryPathLocation, queryPathLocation + path.length);\n` +
    `if (path.substr(path.length - 1) === "*") {\n` +
    `path = path.slice(0, -1);\n` +
    `if (currentPath.search(path) > -1) {\n` +
    `return true;\n` +
    `}\n` +
    `} else {\n` +
    `if (currentPath.search(path) > -1 || queryPath === path) {\n` +
    `return true;\n` +
    `}\n` +
    `}\n` +
    `return false;\n` +
    `};\n` +
    `var count = 0,\n` +
    `trigger = true,\n` +
    `prefix,\n` +
    `regionIndex,\n` +
    `value;\n` +
    `var run = function (callback, interval, x) {\n` +
    `if (data.settings.cookieLifeTime > 0) {\n` +
    `if (!getCookie("bc_ads")) {\n` +
    `setCookie("bc_ads", "served", data.settings.cookieLifeTime + 1)\n` +
    `for (var i = 0; i < x; i++) {\n` +
    `setTimeout(callback, i * interval);\n` +
    `}\n` +
    `}\n` +
    `} else {\n` +
    `\n` +
    `for (var i = 0; i < x; i++) {\n` +
    `setTimeout(callback, i * interval);\n` +
    `}\n` +
    `}\n` +
    `\n` +
    `}\n` +
    `runBCAds = setInterval(() => {\n` +
    `if (typeof data !== 'undefined') {\n` +
    `if (data.settings.targetedVars && data.settings.targetedVars.length > 0) {\n` +
    `for (var i = 0; i < data.settings.targetedVars.length; i++) {\n` +
    `trigger = isInPath(data.settings.targetedVars[i])\n` +
    `}\n` +
    `}\n` +
    `if (data.settings.excludedVars && data.settings.excludedVars.length > 0) {\n` +
    `for (var i = 0; i < data.settings.excludedVars.length; i++) {\n` +
    `isInPath(data.settings.excludedVars[i]) ? trigger = false : "";\n` +
    `}\n` +
    `}\n` +
    `if (data.settings.devices.includes(device) && trigger) {\n` +
    `if (data.settings.unitedStates) {\n` +
    `regionIndex = getCookie("_ia_loc_c") + "-" + getCookie("_ia_loc_r");\n` +
    `prefix = data.partners[regionIndex]\n` +
    `} else {\n` +
    `prefix = data.partners\n` +
    `}\n` +
    `run(function () {\n` +
    `if (data.settings.stayOnLastPartner) {\n` +
    `count < prefix.length ? removeIA() : "";\n` +
    `} else {\n` +
    `removeIA()\n` +
    `}\n` +
    `if (count <= prefix.length - 1) {\n` +
    `showBCAds(prefix[count], data.settings)\n` +
    `count++;\n` +
    `}\n` +
    `}, data.settings.refreshDelay * 1000, prefix.length + 1)\n` +
    `}\n` +
    `var impsFly = false;\n` +
    `navigator.userAgent.toLowerCase().indexOf("android") > -1 ? impsFly = "androidimpression" : navigator.userAgent.toLowerCase().indexOf("iphone") > -1 || navigator.userAgent.toLowerCase().indexOf("ipad") > -1 ? impsFly = "iosimpression" : false;\n` +
    `if (impsFly && data[impsFly] !== undefined) {\n` +
    `for (var i = 0; i < data[impsFly].length; i++) {\n` +
    `createIframe(data[impsFly][i], false, false, true)\n` +
    `}\n` +
    `}\n` +
    `// clearInterval(runBCAds);\n` +
    `}\n` +
    `}, 500);\n`;

var divPos = ` <label for="" id="lab" style="margin-bottom: 25px;">Breakpoint: </label><input type="number" placeholder="1024" id="breakpoint" style="width:80px;"></input>` +
`<div id="devPos">`+
`<div id="desktopPos">` +
`<label id="tital">Desktop positioning:</label>` +
`<div id="pos">` +
`<div for="" id="lab" class="parentNode">Parent node: <textarea placeholder="var parentNode = document.getElementsByTagName('body')[0];\n` +
`return parentNode;" name="parentNode" id="parentNode"></textarea></div>` +
`<div for="" id="lab" class="childNode">Child node: <textarea placeholder="var node = document.createElement('div');\n` +
`\tnode.style.position = 'absolute';\n` +
`\tnode.style.top = '0';\n` +
`\tnode.style.left = '0';\n` +
`\tnode.style.zIndex = 999999;\n` +
`return node;" name="childNode" id="childNode"></textarea></div>` +
`</div>` +
`<label for="" id="lap" title="With px, % or use auto">Width: </label><input title="With px, % or use auto"` +
`type="textbox" name="width" placeholder="auto"></input>` +
`<label for="" id="lap" title="With px, % or use auto">Height: </label><input title="With px, % or use auto"` +
`type="textbox" name="height" placeholder="auto"></input>` +
`<label for="" id="lab" style="margin-left: 300px;" title="Place ads above or below the element">Node position: </label>` +
`<select name="nodePosition" id="scriptType" title="Place ads above or below the element">` +
`<option value="above">above</option>` +
`<option value="below">below</option>` +
`</select><br>` +
`</div></div>`;