ready = function () {
    try {
    window.plugins.webintent.startActivity({
        action: window.plugins.webintent.ACTION_VIEW,
        url: theFile.toURL(),
        type: 'application/vnd.android.package-archive'
    },
            function () {},
            function () {
                alert('Failed to open URL via Android Intent.');
                console.log("Failed to open URL via Android Intent. URL: " + theFile.fullPath)
            }
    );
    }
    catch (e) {
        alert("fail: " + e);
    }
};