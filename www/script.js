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
        /*
         window.plugins.webintent.sendBroadcast({
         action: 'com.dummybroadcast.action.triggerthing',
         extras: {option: true}
         }, function (a) {
         alert("sendBroadcast a: " + a);
         }, function (a) {
         alert("sendBroadcast b: " + a);
         });
         */
        /*
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
         
         window.plugins.webintent.hasExtra(WebIntent.EXTRA_TEXT,
         function (has) {
         alert("hasExtra a: " + has);
         // `has` is true iff app invoked with specified extra
         }, function (b) {
         alert("hasExtra b: " + b);
         // `hasExtra` check failed
         });
         
         window.plugins.webintent.getExtra(WebIntent.EXTRA_TEXT,
         function (url) {
         alert("getExtra a: " + url);
         // `has` is true iff app invoked with specified extra
         }, function (b) {
         alert("getExtra b: " + b);
         // `hasExtra` check failed
         });
         */
        window.plugins.intent.setNewIntentHandler(function (intent) {
            //alert("setNewIntentHandler:" + JSON.stringify(intent));
            document.wrtie(JSON.stringify(intent));
        });

        // 這好像是預設值
        //window.plugins.intent.getCordovaIntent(function (intent) {
        //    alert("getCordovaIntent:" + JSON.stringify(intent));
        //});
        window.plugins.Shortcut.CreateShortcut({
            text: "Text to show",
            extraSubject: 'YOUR_DATA'
        }, function () {
            alert("ok");
        }, function () {
            alert("error");
        });
    } catch (e) {
        alert("fail: " + e);
    }
};