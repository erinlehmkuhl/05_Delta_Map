
//Author: Erin Lehmkuhl
//Date: October 1, 2015
//This is a neighborhood map created for Udacity to show off the use of Model View ViewModel (knockout.js)
//icons provided by: Maps Icons Collection https://mapicons.mapsmarker.com - color swatch (70, 40 20)


var mapMarkers = {
  "obstructions": [
    {"name": "Submerged Tree", "center": {lat: 38.1025, lng: -121.5625}, "url": "http://www.vesselassistsanfrancisco.com/", "img": "images/vesAssist.jpg", "icon": "/images/mapIcons/pirates_red.png"},
    {"name": "Embedded Log", "center": {lat: 38.1200, lng: -121.5855}, "url": "http://www.vesselassistsanfrancisco.com/", "img": "images/vesAssist.jpg", "icon": "/images/mapIcons/pirates_red.png"}
  ],
  "anchorages": [
    {"name": "The Meadows", "center": {lat: 38.2509717, lng: -121.497613}, "url": "http://www.parks.ca.gov/?page_id=492", "img": "http://www.parks.ca.gov/pages/492/images/DeltaMeadowsProp_S0006502_npg.jpg", "icon": "/images/mapIcons/harbor_brown.png"},
    {"name": "Mandeville Tip", "center": {lat: 38.0618274, lng: -121.5345715}, "url": "http://dbw.parks.ca.gov/maps/facilityinfo.asp?facilityID=1217", "img": "images/mandeville.jpg", "icon": "/images/mapIcons/harbor_brown.png"},
    {"name": "The Bedrooms", "center": {lat: 38.0841627, lng: -121.538574}, "url": "https://www.google.com/search?q=potato+slough+california+delta&biw=1013&bih=637&source=lnms&tbm=isch&sa=X&ved=0CAcQ_AUoAmoVChMIvvu29NmXyAIVypWICh2iOQmF", "img": "images/genericDelta.jpg", "icon": "/images/mapIcons/harbor_brown.png"}
  ],
  "restaurants": [
    {"name": "Korth's Pirates' Lair", "center": {lat: 38.0977543, lng: -121.5680157}, "fb": "https://www.facebook.com/Korths-Pirates-Lair-Marina-348297131692/timeline/"},
    {"name": "Lighthouse", "center": {lat: 38.1057531, lng: -121.5707022}, "fb": "https://www.facebook.com/Lighthouse-Marina-Restaurant-and-Resort-151574161575567/timeline/", "icon": "/images/mapIcons/burger_brown.png"},
    {"name": "Moore's Riverboat", "center": {lat: 38.1007412, lng: -121.5658718}, "url": "https://www.facebook.com/pages/Moores-Riverboat-Isleton/128136840571906?fref=ts", "img": "images/moores.png", "icon": "/images/mapIcons/burger_brown.png"},
    {"name": "Rosa's", "center": {lat: 38.1101495, lng: -121.4983044}, "fb": "https://www.facebook.com/Rosasattowerpark", "icon": "/images/mapIcons/burger_brown.png"},
    {"name": "Giusti's Place", "center": {lat: 38.2242578, lng: -121.5071795}, "fb": "https://www.facebook.com/Giustis-341683185695/timeline/", "icon": "/images/mapIcons/burger_brown.png"},
    {"name": "Windmill Cove", "center": {lat: 37.9910241, lng: -121.4074522}, "fb": "https://www.facebook.com/Windmill-Cove-Bar-and-Grill-158184030912668/timeline/"},
    {"name": "The Point", "center": {lat: 38.1487831, lng: -121.6909701}, "fb": "https://www.facebook.com/ThePointRestaurantRioVista", "icon": "/images/mapIcons/burger_brown.png"},
    {"name": "Boardwalk Grill", "center": {lat: 37.9056747, lng: -121.5869824}, "fb": "https://www.facebook.com/Boardwalk-Grill-285018528287/timeline/", "icon": "/images/mapIcons/burger_brown.png"},
    {"name": "Wimpy's", "center": {lat: 38.2264718, lng: -121.490745}, "fb": "https://www.facebook.com/Wimpys-Marina-405286399555382/timeline/", "icon": "/images/mapIcons/burger_brown.png"},
    {"name": "Orwood", "center": {lat: 37.9388633, lng: -121.6123867}, "fb": "https://www.facebook.com/orwoodresort"},
    {"name": "Rusty Porthole", "center": {lat: 38.0347238, lng: -121.6230485}, "fb": "https://www.facebook.com/Rusty-Porthole-217097898307326/timeline/", "icon": "/images/mapIcons/burger_brown.png"}
  ],
  "bars": [
    {"name": "Windmill Cove", "center": {lat: 37.9910241, lng: -121.4074522}, "fb": "https://www.facebook.com/Windmill-Cove-Bar-and-Grill-158184030912668/timeline/", "icon": "/images/mapIcons/bar_brown.png"},
    {"name": "Lost Isle", "center": {lat: 37.9989336, lng: -121.4498872}, "url": "https://www.facebook.com/groups/327403865799/", "img": "images/lostisle.png", "icon": "/images/mapIcons/bar_brown.png"},
    {"name": "Sugar Barge", "center": {lat: 38.0280595, lng: -121.6116769}, "url": "https://www.facebook.com/sugar.barge?fref=ts", "img": "images/sugarbarge.jpg", "icon": "/images/mapIcons/burger_brown.png"},
    {"name": "Spindrift", "center": {lat: 38.1077053, lng: -121.5981793}, "url": "http://www.thespindrift.com/", "img": "images/spindrift.jpg", "icon": "/images/mapIcons/bar_brown.png"}
  ],
  "repairs": [
    {"name": "Delta Boat Works", "center": {lat: 38.0997402, lng: -121.5669706}, "url": "http://deltaboatworks.com/", "img": "images/boatWorks.jpg", "icon": "/images/mapIcons/repair_brown.png"},
    {"name": "Perry's", "center": {lat: 38.1255365, lng: -121.5820935}, "url": "http://www.perrysboatharbor.com/", "img": "images/perrys.jpg"},
    {"name": "Tower Park Marina", "center": {lat: 38.1101495, lng: -121.4983044}, "url": "https://www.facebook.com/pages/Tower-Park-Marina-And-Resort/150871971609324", "img": "images/towerpark.jpg"}
  ],
  "gas": [
    {"name": "Willow Berm", "center": {lat: 38.1038469, lng: -121.5677196}, "fb": "https://www.facebook.com/willowberm?fref=ts"},
    {"name": "Paradise Point", "center": {lat: 38.0464052, lng: -121.4182412}, "fb": "https://www.facebook.com/ParadisePointMarina"},
    {"name": "Tower Park Marina", "center": {lat: 38.1101495, lng: -121.4983044}, "url": "https://www.facebook.com/pages/Tower-Park-Marina-And-Resort/150871971609324", "img": "images/towerpark.jpg"},
    {"name": "Windmill Cove", "center": {lat: 37.9910241, lng: -121.4074522}, "fb": "https://www.facebook.com/Windmill-Cove-Bar-and-Grill-158184030912668/timeline/", "icon": "/images/mapIcons/burger_brown.png"},
    {"name": "B and W", "center": {lat: 38.1285623, lng: -121.5801002}, "fb": "https://www.facebook.com/B-W-Resort-Marina-118918581453710/timeline/"}
  ],
  "berthing": [
    {"name": "Discovery Bay", "center": {lat: 37.9056747, lng: -121.5869824}, "fb": "https://www.facebook.com/Discovery-Bay-Yacht-Harbor-134771066597263/timeline/"},
    {"name": "Whiskey Slough", "center": {lat: 37.9357669, lng: -121.4326344}, "fb": "https://www.facebook.com/Whiskey-Slough-Marina-Indoor-Boat-Storage-Bar-and-Grill-149733071729373/timeline/"},
    {"name": "Tower Park Marina", "center": {lat: 38.1101495, lng: -121.4983044}, "url": "https://www.facebook.com/pages/Tower-Park-Marina-And-Resort/150871971609324", "img": "images/towerpark.jpg"},
    {"name": "Willow Berm", "center": {lat: 38.1038469, lng: -121.5677196}, "fb": "https://www.facebook.com/willowberm?fref=ts"},
    {"name": "Paradise Point", "center": {lat: 38.0464052, lng: -121.4182412}, "fb": "https://www.facebook.com/ParadisePointMarina"},
    {"name": "B and W", "center": {lat: 38.1285623, lng: -121.5801002}, "fb": "https://www.facebook.com/B-W-Resort-Marina-118918581453710/timeline/"},
    {"name": "Perry's", "center": {lat: 38.1255365, lng: -121.5820935}, "url": "http://www.perrysboatharbor.com/", "img": "images/perrys.jpg"},
    {"name": "Spindrift", "center": {lat: 38.1077053, lng: -121.5981793}, "url": "http://www.spindriftmarina.com/", "img": "images/spindrift.jpg", "icon": "/images/mapIcons/bar_brown.png"},
    {"name": "Owl Harbor", "center": {lat: 38.1162493, lng: -121.6257876}, "fb": "https://www.facebook.com/Owl-Harbor-Marina-117030248315538/timeline/"}
  ],
  "rentals": [
    {"name": "Tower Park Marina", "center": {lat: 38.1101495, lng: -121.4983044}, "url": "https://www.facebook.com/pages/Tower-Park-Marina-And-Resort/150871971609324", "img": "images/towerpark.jpg"},
    {"name": "Lighthouse", "center": {lat: 38.1057531, lng: -121.5707022}, "fb": "https://www.facebook.com/Lighthouse-Marina-Restaurant-and-Resort-151574161575567/timeline/"},
    {"name": "Paradise Point", "center": {lat: 38.0464052, lng: -121.4182412}, "fb": "https://www.facebook.com/ParadisePointMarina"}
  ],
  "lodging": [
    {"name": "Stockton Delta KOA", "center": {lat: 38.1101495, lng: -121.4983044}, "fb": "https://www.facebook.com/StocktonKOA"},
    {"name": "B and W", "center": {lat: 38.1285623, lng: -121.5801002}, "fb": "https://www.facebook.com/B-W-Resort-Marina-118918581453710/timeline/"},
    {"name": "Whiskey Slough", "center": {lat: 37.9357669, lng: -121.4326344}, "fb": "https://www.facebook.com/Whiskey-Slough-Marina-Indoor-Boat-Storage-Bar-and-Grill-149733071729373/timeline/"}
  ],
  "launches": [
    {"name": "Orwood", "center": {lat: 37.9388633, lng: -121.6123867}, "fb": "https://www.facebook.com/orwoodresort"},
    {"name": "Whiskey Slough", "center": {lat: 37.9357669, lng: -121.4326344}, "fb": "https://www.facebook.com/Whiskey-Slough-Marina-Indoor-Boat-Storage-Bar-and-Grill-149733071729373/timeline/"},
    {"name": "Paradise Point", "center": {lat: 38.0464052,lng:  -121.4182412}, "fb": "https://www.facebook.com/ParadisePointMarina"},
    {"name": "B and W", "center": {lat: 38.1285623, lng: -121.5801002}, "fb": "https://www.facebook.com/B-W-Resort-Marina-118918581453710/timeline/"},
    {"name": "Discovery Bay", "center": {lat: 37.9056747, lng: -121.5869824}, "fb": "https://www.facebook.com/Discovery-Bay-Yacht-Harbor-134771066597263/timeline/"}
  ],
  "stores": [
    {"name": "B and W", "center": {lat: 38.1285623, lng: -121.5801002}, "fb": "https://www.facebook.com/B-W-Resort-Marina-118918581453710/timeline/"},
    {"name": "Paradise Point", "center": {lat: 38.0464052, lng: -121.4182412}, "fb": "https://www.facebook.com/ParadisePointMarina"},
    {"name": "Tower Park Marina", "center": {lat: 38.1101495, lng: -121.4983044}, "url": "https://www.facebook.com/pages/Tower-Park-Marina-And-Resort/150871971609324", "img": "images/towerpark.jpg"},
  ]
};


var noaaData = {
  "urls": [
  windURL = "http://tidesandcurrents.noaa.gov/api/datagetter?date=latest"
    +"&station=9415144&product=wind&units=english&time_zone=gmt&application=weather&format=json",
  waterURL = "http://tidesandcurrents.noaa.gov/api/datagetter?date=latest"
    +"&station=9415144&product=water_temperature&units=english&time_zone=gmt&application=weather&format=json",
  airURL = "http://tidesandcurrents.noaa.gov/api/datagetter?date=latest"
    +"&station=9415144&product=air_temperature&units=english&time_zone=gmt&application=weather&format=json"
  ],
  "labels": ["Wind Speed: ", "Water Temp: ", "Air Temp: "],
  "attrs": ["s", "v", "v"],
  "suffixes": ["knots", "degrees", "degrees"],
};

var viewModel_onLoad = {

  //------------- Initialize HTML, Google and FB --------------//

  searchCategories: Object.keys(mapMarkers),// a variable for the search category buttons

  //load the category buttons from the JSON into the HTML at page load
  init: function() {
    var buttonBar = document.getElementById('buttonBar');
    for (var i = 0; i < viewModel_onLoad.searchCategories.length; i++) {
      var iconButton = document.createElement('BUTTON');
      iconButton.innerHTML = viewModel_onLoad.searchCategories[i];
      iconButton.setAttribute("data-bind", "click: categoryClick");
      iconButton.setAttribute("class", "catButton");
      buttonBar.appendChild(iconButton);
    }
    viewModel_onLoad.noaaRequest();
    //viewModel.initFacebook();
    console.log("this from above the fold ", this);
  },

	categoryClick: function() {
		viewModel.category = event.target.innerHTML;
		viewModel.resetSideBar();
		viewModel.clearMarkers();
		viewModel.addSideBarInfo();
		viewModel.addMarkers(mapMarkers[viewModel.category]);
	},

  //------------- NOAA API for weather at top of page  --------------//

  statWind: ko.observable("Wind Speed: not available"),
  statWater: ko.observable("Water Temperature: not available"),
  statAir: ko.observable("Air Temperature: not available"),

  noaaRequest: function(data) {
    var noaaFunctions = [viewModel_onLoad.statWind, viewModel_onLoad.statWater, viewModel_onLoad.statAir];
    $.each(noaaData.urls, function (i) {
      //format url for Yahoo proxy
      var yql = 'https://query.yahooapis.com/v1/public/yql?'
            + 'q=' + encodeURIComponent('select * from json where url=@url')
            + '&url=' + encodeURIComponent(noaaData.urls[i])
            + '&format=json&callback=?';

          //parse data from each URL and push it to HTML through knockout.js
      $.getJSON(yql,
        function (data) {
          var noaaLabel = noaaData.labels[i];
          var noaaSuffix = noaaData.suffixes[i];
          var noaaAttr = noaaData.attrs[i];
          var noaaValue = data.query.results.json.data[noaaAttr];
          var noaaFunction = noaaFunctions[i];

          noaaFunction(noaaLabel + " " + noaaValue + " " + noaaSuffix);
      });

    })
    }

};
viewModel_onLoad.init();
ko.applyBindings(viewModel_onLoad, document.getElementById("noaaWind"));
ko.applyBindings(viewModel_onLoad, document.getElementById("noaaAir"));
ko.applyBindings(viewModel_onLoad, document.getElementById("noaaWater"));
ko.applyBindings(viewModel_onLoad, document.getElementById("buttonBar"));


