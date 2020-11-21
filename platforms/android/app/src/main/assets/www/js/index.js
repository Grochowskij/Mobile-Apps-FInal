let app = {
    track: {
        src: 'file:///android_asset/www/inn.mp3',
        title: 'Fight Club Rules',
        volume: 0.5,
        setSrc: function(newSrc){
            app.track.src = newSrc;
        }
    },
    media:null,
    status:{
        '0':'MEDIA_NONE',
        '1':'MEDIA_STARTING',
        '2':'MEDIA_RUNNING',
        '3':'MEDIA_PAUSED',
        '4':'MEDIA_STOPPED'
    },
    err:{
        '1':'MEDIA_ERR_ABORTED',
        '2':'MEDIA_ERR_NETWORK',
        '3':'MEDIA_ERR_DECODE',
        '4':'MEDIA_ERR_NONE_SUPPORTED'
    },
    init: function() {
        document.addEventListener('deviceready', app.ready, false);
    },
    ready: function() {
        app.addListeners();
        let src = app.track.src;
        app.media = new Media(src, app.ftw, app.wtf, app.statusChange);
    },
    ftw: function(){
        //success creating the media object and playing, stopping, or recording
        console.log('success doing something');
    },
    wtf: function(err){
        //failure of playback of media object
        console.warn('failure');
        console.error(err);
    },
    statusChange: function(status){
        console.log('media status is now ' + app.status[status] );
    },
    addListeners: function(){
        document.querySelector("#submit").addEventListener("click", app.switchSong);
        document.querySelector('#play-btn').addEventListener('click', app.play);
        document.querySelector('#pause-btn').addEventListener('click', app.pause);
        document.querySelector('#up-btn').addEventListener('click', app.volumeUp);
        document.querySelector('#down-btn').addEventListener('click', app.volumeDown);
        document.querySelector('#stop-btn').addEventListener('click', app.stop);
//        document.querySelector('#stopAudio').addEventListener('click', app.stop());
        
    },
    play: function(){
        app.media.play();
        app.status = 2;
    },
    pause: function(){
        app.media.pause();
        app.status = 3;
    },
    
    stop: function(){
        app.media.pause();
        app.status = 4;
    },
    volumeUp: function(){
        vol = parseFloat(app.track.volume);
        console.log('current volume', vol);
        vol += 0.1;
        if(vol > 1){
            vol = 1.0;
        }
        console.log(vol);
        app.media.setVolume(vol);
        app.track.volume = vol;
    },
    volumeDown: function(){
        vol = app.track.volume;
        console.log('current volume', vol);
        vol -= 0.1;
        if(vol < 0){
            vol = 0;
        }
        console.log(vol);
        app.media.setVolume(vol);
        app.track.volume = vol;
    },
    
    switchSong: function(){
        app.media.stop();
        
        var ele = document.getElementsByName('music');
        for(i = 0; i < ele.length; i++) { 
            if(ele[i].checked) {
                app.track.setSrc("file:///android_asset/www/" + ele[i].value + ".mp3");
            }
        }
        
        app.media = new Media(app.track.src, app.ftw, app.wtf, app.statusChange);
        
    }
    
    
};

app.init();