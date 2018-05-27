ready = function () {
    try {
        /*
         var _run = function () {
         window.plugins.Shortcuts.supportsDynamic(function (supported) {
         if (supported)
         window.alert('Dynamic shortcuts are supported');
         else
         window.alert('Dynamic shortcuts are NOT supported');
         }, function (error) {
         window.alert('Error: ' + error);
         })
         
         window.plugins.intent.setNewIntentHandler(function (intent) {
         //alert("setNewIntentHandler:" + JSON.stringify(intent));
         document.wrtie(JSON.stringify(intent));
         });
         
         // 這好像是預設值
         //window.plugins.intent.getCordovaIntent(function (intent) {
         //    alert("getCordovaIntent:" + JSON.stringify(intent));
         //});
         
         window.plugins.Shortcut.CreateShortcut("Text to show 1");
         window.plugins.Shortcut.CreateShortcut({
         text: "Text to show 2",
         extraSubject: 'YOUR_DATA'
         }, function () {
         alert("ok");
         }, function () {
         alert("error");
         });
         };
         
         
         var Permission = window.plugins.Permission
         
         var permission = 'com.android.launcher.permission.INSTALL_SHORTCUT';
         
         Permission.has(permission, function (results) {
         if (!results[permission]) {
         Permission.request(permission, function (results) {
         if (results[permission]) {
         // permission is granted
         _run();
         }
         }, function (e) {
         alert("Error: " + e);
         })
         }
         },  function (e) {
         alert("Error: " + e);
         })
         */

        window.plugins.webintent.startActivity({
            action: window.plugins.intent.ACTION_EDIT,
            type: "vnd.android.cursor.item/event"
        },
                function () {
                    alert("ok");
                },
                function () {
                    alert('Failed to open URL via Android Intent');
                }
        );
    } catch (e) {
        alert("fail: " + e);
    }
};