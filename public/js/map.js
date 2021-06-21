

function chuyendoi(){
    var latd;
    var longd;
    if($('#latlong').length>0){
        latd=$('#latlong').data('lat')
        longd=$('#latlong').data('long')
    }
    else{
        latd=20.865139;
        longd=106.68383;
    }
    
    
           
    $('.map-list-item').on('click',function(){
            const toado = { lat: $(this).data('lat'), lng: $(this).data('long') };
            const map = new google.maps.Map(document.getElementById("map-nd"), {
              zoom: 17,
              center: toado,
            });
            const marker = new google.maps.Marker({
              position: toado,
              map: map,
            });
          
    })
    const toado = { lat: latd, lng: longd };
    const map = new google.maps.Map(document.getElementById("map-nd"), {
      zoom: 17,
      center: toado,
    });
    const marker = new google.maps.Marker({
      position: toado,
      map: map,
    });
}



