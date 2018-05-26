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
        var shortcut = {
            id: 'my_shortcut_1',
            shortLabel: 'Short description',
            longLabel: 'Longer string describing the shortcut',
            //iconBitmap: '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',
            intent: {
                action: 'android.intent.action.RUN',
                categories: [
                    'android.intent.category.TEST', // Built-in Android category
                    'MY_CATEGORY' // Custom categories are also supported
                ],
                flags: 67108864, // FLAG_ACTIVITY_CLEAR_TOP
                data: 'myapp://path/to/launch?param=value', // Must be a well-formed URI
                extras: {
                    'android.intent.extra.SUBJECT': 'Hello world!', // Built-in Android extra (string)
                    'MY_BOOLEAN': true, // Custom extras are also supported (boolean, number and string only)
                }
            }
        }
        window.plugins.Shortcuts.setDynamic([shortcut], function () {
            window.alert('Shortcuts were applied successfully');
        }, function (error) {
            window.alert('Error: ' + error);
        })
    } catch (e) {
        alert("fail: " + e);
    }
};