#import <Cordova/CDV.h>

@interface CordovaMusic : CDVPlugin

- (void) init:(CDVInvokedUrlCommand*)command;
- (void) requestAuthorization:(CDVInvokedUrlCommand*)command;
- (void) getAlbums:(CDVInvokedUrlCommand*)command;
// - (void) getCountryCode:(CDVInvokedUrlCommand*)command;
// - (void) getDuration:(CDVInvokedUrlCommand*)command;
// - (void) getPosition:(CDVInvokedUrlCommand*)command;
// - (void) getStatus:(CDVInvokedUrlCommand*)command;
// - (void) playTrack:(CDVInvokedUrlCommand*)command;
// - (void) pause:(CDVInvokedUrlCommand*)command;
// - (void) resume:(CDVInvokedUrlCommand*)command;
// - (void) seek:(CDVInvokedUrlCommand*)command;
// - (void) stop:(CDVInvokedUrlCommand*)command;

@end