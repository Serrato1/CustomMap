module.exports = function(authKey,initMap){
    let script = document.createElement('script');
    window.initMap = initMap
    script.src = `https://maps.googleapis.com/maps/api/js?key=${authKey.authKey}&callback=initMap&libraries=drawing`;
    script.async = true;
    document.body.appendChild(script);
    console.log('initialized map')
}