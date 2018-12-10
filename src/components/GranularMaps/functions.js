module.exports = {
    createMarker : (google,map,coord,icon,onClick)=>{
        console.log('creating a marker');
        let {lat , lng} = coord;
        console.log('lat long is', coord);
        icon = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
        let tempMarker = new google.maps.Marker({
          position: {lat : lat, lng : lng},
          map,
          icon
        });
        tempMarker.addListener('click', function() {
            map.setZoom(15);
            map.setCenter(tempMarker.getPosition());
            onClick();
        });
        
    },
    createMap : (google,options,cb)=>{
        let {coord, zoom , id} = options;
        let {lat ,lng } = coord;
        console.log(zoom);
        let map =  new google.maps.Map(document.getElementById('map'), {
            center: {lat, lng},
            zoom: zoom,
            disableDefaultUI: true,

            styles: [
                {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
                {
                  featureType: 'administrative.locality',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#d59563'}]
                },
                {
                  featureType: 'poi',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#d59563'}]
                },
                {
                  featureType: 'poi.park',
                  elementType: 'geometry',
                  stylers: [{color: '#263c3f'}]
                },
                {
                  featureType: 'poi.park',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#6b9a76'}]
                },
                {
                  featureType: 'road',
                  elementType: 'geometry',
                  stylers: [{color: '#38414e'}]
                },
                {
                  featureType: 'road',
                  elementType: 'geometry.stroke',
                  stylers: [{color: '#212a37'}]
                },
                {
                  featureType: 'road',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#9ca5b3'}]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'geometry',
                  stylers: [{color: '#746855'}]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'geometry.stroke',
                  stylers: [{color: '#1f2835'}]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#f3d19c'}]
                },
                {
                  featureType: 'transit',
                  elementType: 'geometry',
                  stylers: [{color: '#2f3948'}]
                },
                {
                  featureType: 'transit.station',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#d59563'}]
                },
                {
                  featureType: 'water',
                  elementType: 'geometry',
                  stylers: [{color: '#17263c'}]
                },
                {
                  featureType: 'water',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#515c6d'}]
                },
                {
                  featureType: 'water',
                  elementType: 'labels.text.stroke',
                  stylers: [{color: '#17263c'}]
                }
              ]

        });
        var drawingManager = new google.maps.drawing.DrawingManager({
            drawingMode: google.maps.drawing.OverlayType.MARKER,
            drawingControl: true,
            drawingControlOptions: {
              position: google.maps.ControlPosition.TOP_CENTER,
              drawingModes: ['polygon','circle' , 'polyline'],
              position : google.maps.ControlPosition.BOTTOM
            },
            markerOptions: {icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'},
            circleOptions: {
              fillColor: 'black',
              fillOpacity: .5,
              strokeWeight: 5,
              clickable: false,
              editable: true,
              zIndex: 1
            }
          });
        drawingManager.setMap(map);
        google.maps.event.addListener(drawingManager, 'overlaycomplete', function(event) {
            if (event.type == 'circle') {
              var radius = event.overlay.getRadius();
              let center = event.overlay.center.lat();
              console.log(event);
              console.log(radius);
              console.log(center);
            }
          });
        cb(map)
    },
    mapControls : (google,map)=>{
        var drawingManager = new google.maps.drawing.DrawingManager({
            drawingMode: google.maps.drawing.OverlayType.MARKER,
            drawingControl: true,
            drawingControlOptions: {
              position: google.maps.ControlPosition.TOP_CENTER,
              drawingModes: ['polygon', 'polyline'],
              position : google.maps.ControlPosition.BOTTOM
            },
            markerOptions: {icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'},
            circleOptions: {
              fillColor: 'black',
              fillOpacity: .5,
              strokeWeight: 5,
              clickable: false,
              editable: true,
              zIndex: 1
            }
          });
        drawingManager.setMap(map);
    }
}