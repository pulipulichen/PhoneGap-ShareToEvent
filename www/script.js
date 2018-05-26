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
        //alert(1);
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
        }, function (a) {
            alert("sendBroadcast a: " + a);
        }, function (a) {
            alert("sendBroadcast b: " + a);
        });
        
        window.plugins.webintent.onNewIntent(function (uri) {
            if (uri !== '') {
                alert("onNewIntent: " + uri);
            }
        });
        
        window.plugins.webintent.getUri(function (uri) {
            if (uri !== '') {
                // `uri` is the uri the intent was launched with.
                //
                // If this is the first run after the app was installed via a link with an install referrer
                // (e.g. https://play.google.com/store/apps/details?id=com.example.app&referrer=referrer.com)
                // then the Play Store will have fired an INSTALL_REFERRER intent that this plugin handles,
                // and `uri` will contain the referrer value ("referrer.com" in the example above).
                // ref: https://help.tune.com/marketing-console/how-google-play-install-referrer-works/
                
                alert("getUri: " + uri);
            }
        });
        
    } catch (e) {
        alert("fail: " + e);
    }
};