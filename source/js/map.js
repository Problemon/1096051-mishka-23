ymaps.ready(init);
function init() {
  let myMap = new ymaps.Map("map", {
    center: [59.938635, 30.323118],
    zoom: 18,
  });

  let myPlacemark = new ymaps.Placemark([59.938635, 30.323118], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map/marker.svg',
    iconImageSize: [67, 100],
    iconImageOffset: [-33.5, -100]
  });

  myMap.geoObjects.add(myPlacemark);
}
