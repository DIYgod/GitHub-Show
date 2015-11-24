(function () {
    function getURLPara(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var match = location.search.substr(1).match(reg);
        return match ? decodeURI(match[2]) : null;
    }

    var apiURL = 'https://api.github.com/users/' + getURLPara('user');
    $.getJSON(apiURL, function (data) {
        console.log(data);
    });
})();