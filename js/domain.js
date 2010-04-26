/*

    Try to set the document.domain to the top level domain so cross-domain
    permissions are taken care of.
*/

(function() {
    var host = location.host;
    if (host && host.indexOf('.') > -1) {
        var tld = host.substr(host.indexOf('.') + 1, host.length);
        try {
            document.domain = tld;
        } catch (e) {
        }
    }
})();    

