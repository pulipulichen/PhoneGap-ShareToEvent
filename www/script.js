ready = function () {
    try {
        /*
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
         */
        alert(1);
        /*
        window.plugins.webintent.startActivity({
            action: window.plugins.webintent.ACTION_VIEW,
            url: 'geo:0,0?q='
        },
                function () {
                    alert("work");
                },
                function () {
                    alert('Failed to open URL via Android Intent')
                }
        );
        */
       window.plugins.webintent.sendBroadcast({
            action: 'com.dummybroadcast.action.triggerthing',
            extras: {option: true}
        }, function () {
        }, function () {
        });
        
        window.plugins.webintent.onNewIntent(function (uri) {
            if (uri !== '') {
                alert(uri);
            }
        });
    } catch (e) {
        alert("fail: " + e);
    }
};