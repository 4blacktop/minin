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
				navigator.app.exitApp();

/* 		function onConfirm(buttonIndex) {// alert('You selected button ' + buttonIndex);
			if (results.buttonIndex == 2) {// alert( 'You choose Exit' );
				navigator.app.exitApp();
			} else {// alert( 'You choose Stay' ); 
				var ref = cordova.InAppBrowser.open('https://google.com', '_blank', 'location=no,zoom=no');
			}
		}

		navigator.notification.confirm(
			'Do you want to exit?', // message
			 onConfirm,            // callback to invoke with index of button pressed
			'App Title',           // title
			['Stay','Exit']     // buttonLabels
		);

 */
	});	
	
	// https://www.npmjs.com/package/admob	
	("admob banner ID","admob interstitial ID");//admob id format ca-app-pub-xxxxxxxxxxxxxxxxxxx/xxxxxxxxxx
		
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
	
	
	navigator.globalization.getPreferredLanguage(
		function (language) {alert('language: ' + language.value + '\n');},
		function () {alert('Error getting language\n');}
	);
	

	alert("device.cordova: " + device.cordova);
	alert("device.model: " + device.model);
	alert("device.platform: " + device.platform);
	alert("device.uuid: " + device.uuid);
	alert("device.version: " + device.version);
	alert("device.manufacturer: " + device.manufacturer);
	alert("device.isVirtual: " + device.isVirtual);
	alert("device.serial: " + device.serial);
	
	function alertDismissed() {// alert("alertDismissed");
		
	}

	navigator.notification.alert(
		"device.cordova: " + device.cordova,  // message
		alertDismissed,         // callback
		'Native notification Example',            // title
		'Done'                  // buttonName
	);
	
	

	initPushwoosh();
	alert('initPushwoosh deviceready');
}











function initPushwoosh() {
	alert('initPushwoosh');
  var pushwoosh = cordova.require("pushwoosh-cordova-plugin.PushNotification");

  // Should be called before pushwoosh.onDeviceReady
  document.addEventListener('push-notification', function(event) {
    var notification = event.notification;
    // handle push open here
  });
  

  

  
  // Initialize Pushwoosh. This will trigger all pending push notifications on start.
  pushwoosh.onDeviceReady({
    appid: "3B25F-AAA89",
    projectid: "979133330228"
  });
    // serviceName: "MPNS_SERVICE_NAME"
	
	
	  alert('bp1');
pushwoosh.registerDevice(
// alert('bp2');
  function(status) {
    var pushToken = status.pushToken;
      // handle successful registration here
	  alert('pushwoosh.registerDevice successful registration: ' + pushToken );
  },
  function(status) {
    // handle registration error here
	  alert('pushwoosh.registerDevice registration error: ' + status );
  }
);
alert('bp3');
}
























window.setTimeout( function() {
   alert('ad1');
   // window.AdMob.showInterstitial();
}, 10000);


window.setTimeout( function() {
   alert('ad2');
}, 15000);


window.setTimeout( function() {
   alert('ad3');
}, 20000);


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
}	 

http://stackoverflow.com/questions/31095303/show-interstitial-ad-via-admob-in-ionic-every-2-minutes










*/