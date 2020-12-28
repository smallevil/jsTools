document.write('<link rel="stylesheet" type="text/css" href="./mark.css" />');
document.write('<div id="download-app-mark-tip" class="download-app-mark-tip"><p><img src="./mark.png" alt=""/></p></div>');
document.write("<script type='text/javascript' src='../browser.js'></script>");

function showDownloadAppMarkTip()
{
    var markDiv = document.getElementById("download-app-mark-tip");
    markDiv.style.display = "block";
}