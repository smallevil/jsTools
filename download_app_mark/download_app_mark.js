document.write('<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/gh/smallevil/jsTools@0.3/download_app_mark/mark.css" />');
document.write('<div id="download-app-mark-tip" class="download-app-mark-tip"><p><img src="//cdn.jsdelivr.net/gh/smallevil/jsTools@0.3/download_app_mark/mark.png" alt=""/></p></div>');
document.write("<script type='text/javascript' src='//cdn.jsdelivr.net/gh/smallevil/jsTools@0.3/browser.js'></script>");

function showDownloadAppMarkTip()
{
    var markDiv = document.getElementById("download-app-mark-tip");
    markDiv.style.display = "block";
}