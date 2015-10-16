//Author: Erin Lehmkuhl
//Date: October 1, 2015
//This is a neighborhood map created for Udacity to show off the use of Model View ViewModel (knockout.js)
//icons provided by: Maps Icons Collection https://mapicons.mapsmarker.com - color swatch (70, 40 20)


var mapMarkers = {
	"obstructions": [
		{"name": "Submerged Tree", "center": {lat: 38.1025, lng: -121.5625}, "url": "http://www.vesselassistsanfrancisco.com/", "img": "images/vesAssist.jpg", "icon": "/images/mapIcons/pirates_brown.png"},
		{"name": "Embedded Log", "center": {lat: 38.1200, lng: -121.5855}, "url": "http://www.vesselassistsanfrancisco.com/", "img": "images/vesAssist.jpg", "icon": "/images/mapIcons/pirates_brown.png"}
	],
	"anchorages": [
		{"name": "The Meadows", "center": {lat: 38.2509717, lng: -121.497613}, "url": "http://www.parks.ca.gov/?page_id=492", "img": "http://www.parks.ca.gov/pages/492/images/DeltaMeadowsProp_S0006502_npg.jpg", "icon": "/images/mapIcons/harbor_brown.png"},
		{"name": "Mandeville Tip", "center": {lat: 38.0618274, lng: -121.5345715}, "url": "http://dbw.parks.ca.gov/maps/facilityinfo.asp?facilityID=1217", "img": "images/mandeville.jpg", "icon": "/images/mapIcons/harbor_brown.png"},
		{"name": "The Bedrooms", "center": {lat: 38.0841627, lng: -121.538574}, "url": "https://www.google.com/search?q=potato+slough+california+delta&biw=1013&bih=637&source=lnms&tbm=isch&sa=X&ved=0CAcQ_AUoAmoVChMIvvu29NmXyAIVypWICh2iOQmF", "img": "images/genericDelta.jpg", "icon": "/images/mapIcons/harbor_brown.png"}
	],
	"restaurants": [
		{"name": "Korth's Pirates' Lair", "center": {lat: 38.0977543, lng: -121.5680157}, "fb": "https://www.facebook.com/Korths-Pirates-Lair-Marina-348297131692/timeline/"},
		{"name": "Lighthouse", "center": {lat: 38.1057531, lng: -121.5707022}, "fb": "https://www.facebook.com/Lighthouse-Marina-Restaurant-and-Resort-151574161575567/timeline/", "icon": "/images/mapIcons/burger_brown.png"},
		{"name": "Moore's Riverboat", "center": {lat: 38.1007412, lng: -121.5658718}, "url": "https://www.facebook.com/pages/Moores-Riverboat-Isleton/128136840571906?fref=ts", "img": "images/moores.jpg", "icon": "/images/mapIcons/burger_brown.png"},
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
		{"name": "Lost Isle", "center": {lat: 37.9989336, lng: -121.4498872}, "url": "https://www.facebook.com/groups/327403865799/", "img": "images/lostisle.jpg", "icon": "/images/mapIcons/bar_brown.png"},
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

var viewModel = {

	//------------- Initialize HTML, Google and FB --------------//

	searchCategories: Object.keys(mapMarkers),// a variable for the search category buttons

	//load the category buttons from the JSON into the HTML at page load
	init: function() {
		var buttonBar = document.getElementById('buttonBar');
		for (var i = 0; i < viewModel.searchCategories.length; i++) {
			var iconButton = document.createElement('BUTTON');
			iconButton.innerHTML = viewModel.searchCategories[i];
			//firefox can't bind to window.event: TODO - get rid of knockout
			//iconButton.setAttribute("data-bind", "click: $root.func.bind($root)");
			//iconButton.setAttribute("data-bind", "click: function(data, event){ $parent.expandRow($data, event) }");
			iconButton.setAttribute("data-bind", "click: categoryClick");
			iconButton.setAttribute("class", "catButton");
			buttonBar.appendChild(iconButton);
		}
		viewModel.noaaRequest();
		viewModel.initFacebook();
	},

	//compare delta loop map center with collected user location
	compareLocations: function(lat, lon) {
		var deltaLat = 38.103;
		var deltaLon = -121.572;
		var dif = .1;//acceptable range to use gelocation
		var closeInLat = false;
		if (lat - deltaLat < dif) {
			var latDif = lat - deltaLat;
			if (lat + deltaLat < dif) {
				var latDif = lat + deltaLat < dif;
				if (latDif > 0 && latDif < dif) {
					closeInLat = true;
				}
			}
		}
		var closeInLon = false;
		if (lon - deltaLon < dif) {
			var latDif = lon - deltaLon;
			if (lon + deltaLon < dif) {
				var lonDif = lon + deltaLon < dif;
				if (lonDif > 0 && lonDif < dif) {
					closeInLon = true;
				}
			}
		}
		if (closeInLat && closeInLon == true) {
			return true;
		}
	},


	//find user location so the map can re-center to user if they are in appropriate range
	userLocation: function(map) {
		// Try HTML5 geolocation.
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
				var pos = {lat: position.coords.latitude, lng: position.coords.longitude};
				if (viewModel.compareLocations(position.coords.latitude, position.coords.longitude) == true){
					map.setCenter(pos);
				}			
			})
		} else {
			// Browser doesn't support Geolocation
			console.log("continuing on to delta loop map");
		}
	},

	//Google's API. Initialized from the HTML as a callback to the API function
	initMap: function() {
		//timeout for error handling
		var googleMapTimeout = setTimeout(function(){
			$(".errorText").text("google maps failed to load");
		}, 8000);

		//draw map
		var mapDiv = document.getElementById('map');
		var mapOptions = {
		    center: {lat: 38.103, lng: -121.572}, 
		    zoom: 12,
		    mapTypeId: google.maps.MapTypeId.HYBRID,
			};
		var map = new google.maps.Map(mapDiv, mapOptions);

		// check for user location to set map
		viewModel.userLocation(map);


		// draw the known obstruction markers on the map
		for (var i = 0; i < mapMarkers.obstructions.length; i++) {
			new google.maps.Circle({
				strokeColor: '#FF0000',
				strokeOpacity: 0.8,
				strokeWeight: 2,
				fillColor: '#FF0000',
				fillOpacity: 0.35,
				map: map,
				center: mapMarkers.obstructions[i].center,
				radius: 30,
				draggable:true,
			})
		}
		
		//init popup information once to be used in clickMarker() later
		var infowindow = new google.maps.InfoWindow({
			map: map
			});
		this.infowindow = infowindow;
		infowindow.close();

		//variable for later use throughout
		this.map = map;

		//error handling
		clearTimeout(googleMapTimeout);
	},

	//Facebook API: aside from the appID, this is cut/pasted from FB
	//no error handling needed: hardcoded URL to still function without FB connection
	initFacebook: function() {
      window.fbAsyncInit = function() {
        FB.init({
        appId      : '887545611339686',
        xfbml      : true,
        version    : 'v2.4'
        });
      };

      (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
	},




	//------------- Map Markers --------------//

	markers: [],

	//set markers and bounds based on json information
	addMarkers: function(listOfMarkers) {
		var loopLength = listOfMarkers.length;
		var bounds = new google.maps.LatLngBounds();
		for (i = 0; i < loopLength; i++) {
			var lat = listOfMarkers[i].center.lat;
			var lng =  listOfMarkers[i].center.lng;
			var location = listOfMarkers[i]['center'];
			if (listOfMarkers[i].icon) {
				var icon = listOfMarkers[i].icon;
			} else {
				var icon = '/images/mapIcons/marina_brown.png'; //marina brown icon
			}
			
			viewModel.markers.push(new google.maps.Marker({
				position: location,
				map: this.map,
				animation: google.maps.Animation.DROP,
				id: listOfMarkers[i].name,
				icon: icon,
			}));
			viewModel.markers[i].addListener('click', viewModel.clickMarker);
	    	bounds.extend(new google.maps.LatLng(lat, lng));
		}
		this.map.fitBounds(bounds);
		this.map.panBy(-60, 0);//account for the left side overlay
	},


	mapPopUp: function(self) {
		this.infowindow.close();//close all infoWindows

		var fbs = viewModel.retrieveJsonArray("fb");
		var urls = viewModel.retrieveJsonArray("url");
		var names = viewModel.retrieveJsonArray("name");
		var imgs = viewModel.retrieveJsonArray("img");
		for (var i = 0; i < names.length; i++){
			if (self.id == names[i]){//the clicked marker matches one in the json
				var fbTag = fbs[i];
				var urlTag = urls[i];
				var img = imgs[i];

				if (fbTag != undefined) {
					var contentString = '<div id="fb-root"></div><div class="fb-page" data-href="' + fbTag + 
					'" data-small-header="true" data-adapt-container-width="false" data-hide-cover="false"' +
					' data-show-facepile="false" data-show-posts="false"><div class="fb-xfbml-parse-ignore"><blockquote cite="' + 
					fbTag + '"><a href="' + fbTag + '" target="_blank">click me</a></blockquote></div></div>';
				} else {
					var contentString = '<div><a href= "' + urlTag + '" target="_blank"><h3>' + 
					self.id + '</h3><img class="infoWindowImg" src="' + img + 
					'" alt="scenic image"></div><div></a></div>';
				}

				this.infowindow.setContent(contentString);
				this.infowindow.open(self.map, self);
			}
		}FB.XFBML.parse();
	},

	//when you click the marker on the map, toggle corresponding side bar word red/black
	clickMarker: function() {
		var list = document.getElementsByClassName("sideBarElems");
		var self = this;

		viewModel.resetMarkerColor();

		for (var i = 0; i < viewModel.markers.length; i++) {//check id's of all markers on map
			var indivAppearance = list[i].id;
			if (indivAppearance == "highlight") {//if a sidebarTerm is alread red
				list[i].setAttribute("id", "null");//set it to black

			}else {
				if (list[i].innerHTML == this.id){ //if the marker id matches the sidebar name
					viewModel.mapPopUp(self);//pop up infowindow
					list[i].setAttribute("id", "highlight");//make sideBar term red
					
					//highlight marker			
					var iconTemp = this.icon;
					iconTemp = iconTemp.replace("brown", "white");
					this.icon = iconTemp;
					this.map.panTo(this.getPosition());
					this.setMap(this.map);
					this.setZIndex(1);
				}
			}
		}
	},	


	clearMarkers: function() {
  		for (var i = 0; i < viewModel.markers.length; i++) {
    		viewModel.markers[i].setMap(null);
  		}
  		viewModel.markers = [];
	},




	//------------- Side Bar  --------------//

	//populates side bar
	categoryClick: function() {
		this.category = event.target.innerHTML;
		viewModel.resetSideBar();
		viewModel.clearMarkers();
		viewModel.addSideBarInfo();
		viewModel.addMarkers(mapMarkers[this.category]);
	},

	sideBarArray: ko.observableArray(),

	searchTerm: ko.observable(),// the input box on HTML form
	ph: ko.observable("search all locations"),

	//creates sideBar that is affected by a json search
	searchButton: function() {
		viewModel.clearSearch();

		var markerList = [];
		var regexInput = new RegExp(viewModel.searchTerm(), "i");//properly formats the regex from the userInput
		
		$.each(viewModel.searchCategories, function(i, val){//return all json categories
			var category = val;	
			$.each(mapMarkers[category], function(i, val){
				var name = mapMarkers[category][i]["name"];//return all json location names
				var nameStr = name.toString();
				var center = mapMarkers[category][i];//return all json location lat/long
				
				var regexResult = regexInput.test(nameStr);//test if name = userInput from search
				
				if (regexResult == false) {//if the word in the list above doesn't match the search bar
					name = "notSearchedFor"; //label it so it get's thrown out
				}

				for (var i = 0; i < viewModel.sideBarArray().length; i++) {//as the knockoutArray fills, it checks what's in it
					if (name == viewModel.sideBarArray()[i]){//if there is a duplicate
						name = "duplicate";//mark it to be thrown out
					}
				}
				
				if (name != "duplicate" && name != "notSearchedFor"){//avoid these names
					viewModel.sideBarArray.push(name);//now add the accepted names one by one
					markerList.push(center);
					viewModel.sideBarArray.sort();
				}
			})
		})
		viewModel.addMarkers(markerList);//add to knockout array
		viewModel.searchTerm("");//to clear the memory of the search bar
	},

	//to get the sidebar out of the way while using the map & infoWindows
	toggleSideBar: ko.observable(false),
	closeButton: ko.observable(true),
	openButton: ko.observable(false),

	//reveals sideBar either for first time (categoryClick) or upon click of openButton
	showSideBarFunc: function() {
		viewModel.toggleSideBar(true);
		if ($('#sideBar').hasClass('minSideBar')) {
			$('#sideBar').removeClass('minSideBar');
		}
		viewModel.openButton(false);
		viewModel.closeButton(true);
	},

	//minimize sidebar
	minSideBarFunc: function() {
		$('#sideBar').addClass('minSideBar');
		viewModel.openButton(true);
		viewModel.closeButton(false);
	},

	//populates names in side bar
	addSideBarInfo: function(){
		for (marker in mapMarkers[this.category]){
			this.sideBarArray.push(mapMarkers[this.category][marker]['name']);
		}
		this.sideBarArray.sort();
		viewModel.showSideBarFunc();
	},


	resetMarkerColor: function() {
		for (var i = 0; i < viewModel.markers.length; i++) {//set all markers to orig icon
			var genMarker = viewModel.markers[i];
			var iconTemp = genMarker.icon;
			iconTemp = iconTemp.replace("white", "brown");
			genMarker.icon = iconTemp;
			genMarker.setMap(genMarker.map);
			genMarker.setZIndex(0);
		}
	},


	//when you click a name in the sidebar
	clickSideBar: function() {
		viewModel.resetMarkerColor();
		for (var i = 0; i < viewModel.markers.length; i++) {//set this marker to special icon
			var indMarker = viewModel.markers[i];
			if (indMarker.id == this) {
				var iconTemp = indMarker.icon;
				iconTemp = iconTemp.replace("brown", "white");
				indMarker.icon = iconTemp;
				indMarker.map.panTo(indMarker.getPosition());
				indMarker.setMap(indMarker.map);
				indMarker.id = this.toString();
				indMarker.setZIndex(1);

				viewModel.mapPopUp(indMarker);//pop up infowindow

				//if any term is already red, make them all black upon click
				var list = document.getElementsByClassName("sideBarElems");
				for (var i = 0; i < list.length; i++){
					list[i].setAttribute("id", "null");//set all list items to black
				}
			}
		}
	},

	resetSideBar: function() {
		this.sideBarArray([]);
	},


	clearSearch: function() {
		viewModel.clearMarkers();
		viewModel.resetSideBar();
		document.getElementById('searchForm').reset();
	},

	retrieveJsonArray: function (whatToSearchFor) {//can only be: "name", "center", "fb" or "icon"
		var myList = [];
		$.each(viewModel.searchCategories, function(i, val){//return all json categories
			var category = val;			
			$.each(mapMarkers[category], function(i, val){//return all json location names
				var name = mapMarkers[category][i][whatToSearchFor]; 
				myList.push(name);
			})
		})
		return myList;
	},



	
	//------------- NOAA API for weather at top of page  --------------//

	//error handling for NOAA API: hardcoded information - "not available" below
	statWind: ko.observable("Wind Speed: not available"),
	statWater: ko.observable("Water Temperature: not available"),
	statAir: ko.observable("Air Temperature: not available"),

	noaaRequest: function(data) {
		var noaaFunctions = [viewModel.statWind, viewModel.statWater, viewModel.statAir];
		var highWinds = document.getElementsByClassName

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
    },

};
viewModel.init();
ko.applyBindings(viewModel);


