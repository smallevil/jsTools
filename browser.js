clientUserAgent = navigator.userAgent.toLowerCase();

function isWeixinApp()
{
    if(clientUserAgent.indexOf('micromessenger') > -1)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function isQQApp()
{
    if(clientUserAgent.indexOf('qq/') > -1)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function isIphoneDevice()
{
    if(clientUserAgent.indexOf('iphone') > -1)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function isIpadDevice()
{
    if(clientUserAgent.indexOf('ipad') > -1)
    {
        return true;
    }
    else
    {
        if(clientUserAgent.indexOf('macintosh') > -1 && ('ontouchend' in document))
        {
            //新版ipad
            return true;
        }
        else
        {
            return false;
        }
    }
}

function isAndroidDevice()
{
    if(clientUserAgent.indexOf('android') > -1)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function getUrlQueryKey(variable)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++)
    {
        var pair = vars[i].split("=");
        if(pair[0] == variable)
        {
            return pair[1];
        }
    }

    return '';
}
