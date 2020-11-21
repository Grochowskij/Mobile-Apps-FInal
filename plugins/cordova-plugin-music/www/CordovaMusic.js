/*global cordova, module*/
// window.appleMusicPluginPlaying = (function(){})
// window.appleMusicPluginSeeked = (function(){})
// window.appleMusicPluginStopped = (function(){})

// module.exports = {
//   init: function (successCallback, errorCallback) {
//     cordova.exec(successCallback, errorCallback, "CordovaMusic", "init", []);
//   },
//   requestAuthorization: function (successCallback, errorCallback) {
//     cordova.exec(successCallback, errorCallback, "CordovaMusic", "requestAuthorization", []);
//   },
//   getAlbums: function (successCallback, errorCallback) {
//     cordova.exec(successCallback, errorCallback, "CordovaMusic", "getAlbums", []);
//   }
//     // getCountryCode: function (successCallback, errorCallback) {
//     //     cordova.exec(successCallback, errorCallback, "AppleMusic", "getCountryCode", []);
//     // },
//     // getDuration: function (successCallback, errorCallback) {
//     //     cordova.exec(successCallback, errorCallback, "AppleMusic", "getDuration", []);
//     // },
//     // getPosition: function (successCallback, errorCallback) {
//     //     cordova.exec(successCallback, errorCallback, "AppleMusic", "getPosition", []);
//     // },
//     // getStatus: function (successCallback, errorCallback) {
//     //     cordova.exec(successCallback, errorCallback, "AppleMusic", "getStatus", []);
//     // },
    
//     // onPlay: function(f) {
//     //     window.appleMusicPluginPlaying = f
//     // },
//     // onSeek: function(f) {
//     //     window.appleMusicPluginSeeked = f
//     // },
//     // onStop: function(f) {
//     //     window.appleMusicPluginStopped = f
//     // },
//     // pause: function (successCallback, errorCallback) {
//     //     cordova.exec(successCallback, errorCallback, "AppleMusic", "pause", []);
//     // },
//     // playTrack: function (trackId, successCallback, errorCallback) {
//     //     cordova.exec(successCallback, errorCallback, "AppleMusic", "playTrack", [trackId]);
//     // },
    
//     // resume: function (successCallback, errorCallback) {
//     //     cordova.exec(successCallback, errorCallback, "AppleMusic", "resume", []);
//     // },
//     // seek: function (seconds, successCallback, errorCallback) {
//     //     cordova.exec(successCallback, errorCallback, "AppleMusic", "seek", [seconds]);
//     // },
//     // stop: function (successCallback, errorCallback) {
//     //     cordova.exec(successCallback, errorCallback, "AppleMusic", "stop", []);
//     // }
// };

var argscheck = require('cordova/argscheck'),
    channel = require('cordova/channel'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec'),
    cordova = require('cordova');

channel.createSticky('onCordovaInfoReady');
channel.waitForInitialization('onCordovaInfoReady');

function CordovaMusic() {
    // this.available = false;
    // this.platform = null;
    // this.version = null;
    // this.uuid = null;
    // this.cordova = null;
    // this.model = null;
    // this.manufacturer = null;
    // this.isVirtual = null;
    // this.serial = null;

    var me = this;

    // channel.onCordovaReady.subscribe(function() {
    //   me.getAlbums(function(info) {
    //     //ignoring info.cordova returning from native, we should use value from cordova.version defined in cordova.js
    //     //TODO: CB-5105 native implementations should not return info.cordova
    //     var buildLabel = cordova.version;
    //     me.available = true;
    //     me.platform = info.platform;
    //     me.version = info.version;
    //     me.uuid = info.uuid;
    //     me.cordova = buildLabel;
    //     me.model = info.model;
    //     me.isVirtual = info.isVirtual;
    //     me.manufacturer = info.manufacturer || 'unknown';
    //     me.serial = info.serial || 'unknown';
    //     channel.onCordovaInfoReady.fire();
    //   },function(e) {
    //     me.available = false;
    //     utils.alert("[ERROR] Error initializing Cordova: " + e);
    //   });
    // });
}

CordovaMusic.prototype.getAlbums = function(successCallback, errorCallback) {
    // argscheck.checkArgs('fF', 'Device.getInfo', arguments);
    exec(successCallback, errorCallback,"CordovaMusic", "getAlbums", []);
};

module.exports = new CordovaMusic();