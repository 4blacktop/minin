// alert('start');
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	// alert('onDeviceReady');
	// initPushwoosh();
	
	// var ref = window.open('http://miracas.com/push', '_blank', 'location=no,zoom=no');
	// var ref = cordova.InAppBrowser.open('http://27podarkov.ru', '_blank', 'location=no,zoom=no');
	var ref = cordova.InAppBrowser.open('https://google.com', '_blank', 'location=no,zoom=no');
	ref.addEventListener('loadstart', inAppBrowserbLoadStart);
	ref.addEventListener('loadstop', inAppBrowserbLoadStop);
	ref.addEventListener('loaderror', inAppBrowserbLoadError);
	ref.addEventListener('exit', function() {
		
		
	function onPrompt(results) {
			alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
			
			if (results.buttonIndex == 2) {
			  // alert( 'You choose Exit' );
			navigator.app.exitApp();
			} else {
			  // alert( 'You choose Stay' ); 
			}
			
		}

		navigator.notification.prompt(
			'Do you want to exit?',  // message
			onPrompt,                  // callback to invoke
			'Title',            // title
			['Stay','Exit']            // buttonLabels
		);
	});
	

   function inAppBrowserbLoadStart(event) {
	    // window.plugins.spinnerDialog.show(null, null, true);
    }

    function inAppBrowserbLoadStop(event) {
		// window.plugins.spinnerDialog.hide();
    }

    function inAppBrowserbLoadError(event) {
		// window.plugins.spinnerDialog.hide();
		alert('inAppBrowserbLoadError');
	}	
	
	alert(
	"device.cordova: " + device.cordova + "\n"
	"device.model: " + device.model + "\n"
	"device.platform: " + device.platform + "\n"
	"device.uuid: " + device.uuid + "\n"
	"device.version: " + device.version + "\n"
	"device.manufacturer: " + device.manufacturer + "\n"
	"device.isVirtual: " + device.isVirtual + "\n"
	"device.serial: " + device.serial + "\n"
	);
	
	
	// alert("device.model: " + device.model);
	// alert("device.platform: " + device.platform);
	// alert("device.uuid: " + device.uuid);
	// alert("device.version: " + device.version);
	// alert("device.manufacturer: " + device.manufacturer);
	// alert("device.isVirtual: " + device.isVirtual);
	// alert("device.serial: " + device.serial);
	
	
	
	
	function alertDismissed() {
		// do something
		// alert("alertDismissed");
	}

	navigator.notification.alert(
		"device.cordova: " + device.cordova,  // message
		alertDismissed,         // callback
		'Native notification',            // title
		'Done'                  // buttonName
	);


	
	
	navigator.globalization.getPreferredLanguage(
    function (language) {alert('language: ' + language.value + '\n');},
    function () {alert('Error getting language\n');}
	);
	// alert("getPreferredLanguage: " + navigator.globalization.getPreferredLanguage);
	// alert("getLocaleName: " + navigator.globalization.getLocaleName);
	// alert("dateToString: " + navigator.globalization.dateToString);
	// alert("stringToDate: " + navigator.globalization.stringToDate);
	// alert("getDatePattern: " + navigator.globalization.getDatePattern);
	// alert("getDateNames: " + navigator.globalization.getDateNames);
	// alert("isDayLightSavingsTime: " + navigator.globalization.isDayLightSavingsTime);
	// alert("getFirstDayOfWeek: " + navigator.globalization.getFirstDayOfWeek);
	// alert("numberToString: " + navigator.globalization.numberToString);
	// alert("stringToNumber: " + navigator.globalization.stringToNumber);
	// alert("getNumberPattern: " + navigator.globalization.getNumberPattern);
	// alert("getCurrencyPattern: " + navigator.globalization.getCurrencyPattern);
	// alert("getPreferredLanguage: " + navigator.globalization.getPreferredLanguage);
	// alert("getPreferredLanguage: " + navigator.globalization.getPreferredLanguage);
	// alert("getPreferredLanguage: " + navigator.globalization.getPreferredLanguage);
	// alert("getPreferredLanguage: " + navigator.globalization.getPreferredLanguage);


	
/* 	
	 */
}

document.addEventListener("offline", onOffline, false);
 
function onOffline() {// Handle the offline event 
	alert('offline');
    
}

document.addEventListener("online", onOnline, false);
 
function onOnline() {// Handle the online event 
	// alert('online');
    
}

/* 				
document.addEventListener('push-notification', function(event) {
    //event.notification is a JSON push notifications payload
    var title = event.notification.title;
 
    //example of obtaining custom data from push notification
    var userData = event.notification.userdata;
 
    console.warn('user data: ' + JSON.stringify(userData));
 
    //we might want to display an alert with push notifications title
    //alert(title);
});
 */	

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
/* 
function initPushwoosh()
{
	alert('initPushwoosh');
    var pushNotification = cordova.require("com.pushwoosh.plugins.pushwoosh.PushNotification");
 
    //set push notifications handler
    document.addEventListener('push-notification', function(event) {
        var title = event.notification.title;
        var userData = event.notification.userdata;
                                 
        if(typeof(userData) != "undefined") {
            // console.warn('user data: ' + JSON.stringify(userData));
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
            // alert(JSON.stringify(['failed to register ', status]));
        }
    );
}	 */