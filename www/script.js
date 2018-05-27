ready = function () {
    try {
        //alert("1002");
        //alert(window.plugins.intent.ACTION_EDIT)
        //alert(window.plugins.webintent.ACTION_VIEW)
        
        /*
        window.plugins.webintent.startActivity({
            action: "android.intent.action.EDIT",
            //url: "content://calendar/",
            type: "vnd.android.cursor.item/event",
            extras: {
                title: "TITLE",
                description: "DESCRIPTION"
            }
        },
                function () {
                    navigator.app.exitApp();
                },
                function () {
                    alert('Failed to open URL via Android Intent');
                    navigator.app.exitApp();
                }
        );
        */
        alert("go");
        window.plugins.intent.setNewIntentHandler(function (intent) {
            try {
                //alert("setNewIntentHandler:" + JSON.stringify(intent));
                //document.write(JSON.stringify(intent));
                intent_handler(intent);
                
            }
            catch (e) {
                alert(e);
                navigator.app.exitApp();
            }
        }, function (e) {
            alert("setNewIntentHandler error: " + e);
        });
        window.plugins.intent.getCordovaIntent(function (intent) {
            alert("getCordovaIntent:" + JSON.stringify(intent));
        });
        
    } catch (e) {
        alert("ready fail: " + e);
    }
};