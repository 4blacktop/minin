	alert('start');
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	alert('onDeviceReady');
	initPushwoosh();
	// var ref = window.open('http://miracas.com/push', '_blank', 'location=no,zoom=no');
	var ref = window.open('http://27podarkov.ru', '_blank', 'location=no,zoom=no');
	ref.addEventListener('loadstart', inAppBrowserbLoadStart);
	ref.addEventListener('loadstop', inAppBrowserbLoadStop);
	ref.addEventListener('loaderror', inAppBrowserbLoadError);
	ref.addEventListener('exit', function() {
		navigator.app.exitApp();
	});
	
   function inAppBrowserbLoadStart(event) {
	    window.plugins.spinnerDialog.show(null, null, true);
    }

    function inAppBrowserbLoadStop(event) {
		window.plugins.spinnerDialog.hide();
    }

    function inAppBrowserbLoadError(event) {
		window.plugins.spinnerDialog.hide();
	}	
}

				
document.addEventListener('push-notification', function(event) {
    //event.notification is a JSON push notifications payload
    var title = event.notification.title;
 
    //example of obtaining custom data from push notification
    var userData = event.notification.userdata;
 
    console.warn('user data: ' + JSON.stringify(userData));
 
    //we might want to display an alert with push notifications title
    //alert(title);
});
	

	/* 		
function initPushwoosh()
{
    var pushNotification = cordova.require("pushwoosh-cordova-plugin.PushNotification");
 
    //set push notifications handler
    document.addEventListener('push-notification', function(event) {
        var title = event.notification.title;
        var userData = event.notification.userdata;
                                 
        if(typeof(userData) != "undefined") {
            console.warn('user data: ' + JSON.stringify(userData));
        }
                                     
        //alert(title);
    });
 
    //initialize Pushwoosh with projectid: "GOOGLE_PROJECT_ID", pw_appid : "PUSHWOOSH_APP_ID". This will trigger all pending push notifications on start.
	pushwoosh.onDeviceReady({
		appid: "3B25F-AAA89",
		projectid: "979133330228",
		serviceName: ""
	});
 
    //register for pushes
    pushNotification.registerDevice(
        function(status) {
            var pushToken = status;
            // console.warn('push token: ' + pushToken);
            alert('push token: ' + pushToken);
        },
        function(status) {
            // console.warn(JSON.stringify(['failed to register ', status]));
            alert(JSON.stringify(['failed to register ', status]));
        }
    );
}	
 */

function initPushwoosh()
{
	alert('initPushwoosh');
    var pushNotification = cordova.require("com.pushwoosh.plugins.pushwoosh.PushNotification");
 
    //set push notifications handler
    document.addEventListener('push-notification', function(event) {
        var title = event.notification.title;
        var userData = event.notification.userdata;
                                 
        if(typeof(userData) != "undefined") {
            console.warn('user data: ' + JSON.stringify(userData));
        }
                                     
        alert(title);
    });
 
    //initialize Pushwoosh with projectid: "GOOGLE_PROJECT_ID", pw_appid : "PUSHWOOSH_APP_ID". This will trigger all pending push notifications on start.
    pushNotification.onDeviceReady({ projectid: "979133330228", pw_appid : "3B25F-AAA89" });
 
    //register for pushes
    pushNotification.registerDevice(
        alert('registerDevice');
        function(status) {
            var pushToken = status;
            // console.warn('push token: ' + pushToken);
        alert('push token: ' + pushToken);
        },
        function(status) {
            // console.warn(JSON.stringify(['failed to register ', status]));
            alert(JSON.stringify(['failed to register ', status]));
        }
    );
}	