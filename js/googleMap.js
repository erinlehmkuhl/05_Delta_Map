mapMarkers = {
	"obstacles": [
		{"name": "Tree", "center": {lat: 38.1025, lng: -121.5625}}, 
		{"name": "Tree", "center": {lat: 38.1200, lng: -121.5855}}
	],
	"anchorages": [
		{"name": "The Meadows", "center": {lat: 38.2509717, lng: -121.497613}},
		{"name": "Mandaville Tip", "center": {lat: 38.0618274, lng: -121.5345715}},
		{"name": "The Bedrooms in Potato Slough", "center": {lat: 38.0841627, lng: -121.538574}}
	],
	"restaurants": [
		{"name": "Korth's Pirates' Lair", "center": {lat: 38.0977543, lng: -121.5680157}},
		{"name": "Lighthouse", "center": {lat: 38.1057531, lng: -121.5707022}},
		{"name": "Moore's Riverboat", "center": {lat: 38.1007412, lng: -121.5658718}},
		{"name": "Rosa's", "center": {lat: 38.1101495, lng: -121.4983044}},
		{"name": "Giusti's Place", "center": {lat: 38.2242578, lng: -121.5071795}},
		{"name": "Windmill Cove", "center": {lat: 37.9910241, lng: -121.4074522}},
		{"name": "The Point", "center": {lat: 38.1487831, lng: -121.6909701}},
		{"name": "Boardwalk Grill", "center": {lat: 37.9056747, lng: -121.5869824}},
		{"name": "Wimpy's", "center": {lat: 38.2264718, lng: -121.490745}},
		{"name": "Orwood", "center": {lat: 37.9388633, lng: -121.6123867}},
		{"name": "Rusty Porthole", "center": {lat: 38.0347238, lng: -121.6230485}}
	],
	"bars": [
		{"name": "Windmill Cove", "center": {lat: 37.9910241, lng: -121.4074522}},
		{"name": "Lost Isle", "center": {lat: 37.9989336, lng: -121.4498872}},
		{"name": "Sugar Barge", "center": {lat: 38.0280595, lng: -121.6116769}},
		{"name": "Spindrift", "center": {lat: 38.1077053, lng: -121.5981793}}
	],
	"repairs": [
		{"name": "Delta Boat Works", "center": {lat: 38.0997402, lng: -121.5669706}},
		{"name": "Perry's", "center": {lat: 38.1255365, lng: -121.5820935}},
		{"name": "Tower Park Marina Resort", "center": {lat: 38.1101495, lng: -121.4983044}}
	],
	"gas": [
		{"name": "Willow Berm", "center": {lat: 38.1038469, lng: -121.5677196}},
		{"name": "Paradise Point", "center": {lat: 38.0464052, lng: -121.4182412}},
		{"name": "Tower Park Marina Resort", "center": {lat: 38.1101495, lng: -121.4983044}},
		{"name": "Windmill Cove", "center": {lat: 37.9910241, lng: -121.4074522}},
		{"name": "B & W", "center": {lat: 38.1285623, lng: -121.5801002}}
	],
	"berthing": [
		{"name": "Discovery Bay", "center": {lat: 37.9056747, lng: -121.5869824}},
		{"name": "Whiskey Slough", "center": {lat: 37.9357669, lng: -121.4326344}},
		{"name": "Tower Park Marina Resort", "center": {lat: 38.1101495, lng: -121.4983044}},
		{"name": "Willow Berm", "center": {lat: 38.1038469, lng: -121.5677196}},
		{"name": "Paradise Point", "center": {lat: 38.0464052, lng: -121.4182412}},
		{"name": "B & W", "center": {lat: 38.1285623, lng: -121.5801002}},
		{"name": "Perry's", "center": {lat: 38.1255365, lng: -121.5820935}},
		{"name": "Spindrift", "center": {lat: 38.1077053, lng: -121.5981793}},
		{"name": "Owl Harbor", "center": {lat: 38.1162493, lng: -121.6257876}}
	],
	"rentals": [
		{"name": "Tower Park Marina Resort", "center": {lat: 38.1101495, lng: -121.4983044}},
		{"name": "Lighthouse", "center": {lat: 38.1057531, lng: -121.5707022}},
		{"name": "Paradise Point", "center": {lat: 38.0464052, lng: -121.4182412}}
	],
	"lodging": [
		{"name": "Stockton Delta KOA", "center": {lat: 38.1101495, lng: -121.4983044}},
		{"name": "B & W", "center": {lat: 38.1285623, lng: -121.5801002}},
		{"name": "Whiskey Slough", "center": {lat: 37.9357669, lng: -121.4326344}}
	],
	"launches": [
		{"name": "Orwood", "center": {lat: 37.9388633, lng: -121.6123867}},
		{"name": "Whiskey Slough", "center": {lat: 37.9357669, lng: -121.4326344}},
		{"name": "Paradise Point", "center": {lat: 38.0464052,lng:  -121.4182412}},
		{"name": "B & W", "center": {lat: 38.1285623, lng: -121.5801002}},
		{"name": "Discovery Bay", "center": {lat: 37.9056747, lng: -121.5869824}}
	],
	"stores": [
		{"name": "B & W", "center": {lat: 38.1285623, lng: -121.5801002}},
		{"name": "Paradise Point", "center": {lat: 38.0464052, lng: -121.4182412}},
		{"name": "Tower Park Marina Resort", "center": {lat: 38.1101495, lng: -121.4983044}}
	]
};




var viewModel = {

	searchCategories: Object.keys(mapMarkers),

	//initialize page with menu bar, map and underwater 
	//obstruction map markers 
	init: function() {
		var menuBar = document.getElementById('menuBar');
		for (var i = 0; i < viewModel.searchCategories.length; i++) {
			var iconButton = document.createElement('BUTTON');
			iconButton.innerHTML = viewModel.searchCategories[i];
			iconButton.setAttribute("data-bind", "click: onClick");
			menuBar.appendChild(iconButton);
		}
	},

	initMap: function() {
		var map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: 38.103, lng: -121.572}, 
		    zoom: 12,
		    mapTypeId: google.maps.MapTypeId.HYBRID,
			});

		//draw the obstruction markers on the map
		for (var i = 0; i < mapMarkers.obstacles.length; i++) {
			new google.maps.Circle({
				strokeColor: '#FF0000',
				strokeOpacity: 0.8,
				strokeWeight: 2,
				fillColor: '#FF0000',
				fillOpacity: 0.35,
				map: map,
				center: mapMarkers.obstacles[i].center,
				radius: 30,
				draggable:true,
			})
		}
	},


	//draw items of interest on the map
	addMarkers: function() {
		var map = new google.maps.Map(document.getElementById('map'), {
	    center: {lat: 38.103, lng: -121.572}, 
	    zoom: 12,
	    mapTypeId: google.maps.MapTypeId.HYBRID,
		});
		var loopLength = mapMarkers[this.category].length;
		for (i = 0; i < loopLength; i++) {	
			var location = mapMarkers[this.category][i]['center'];
	    	new google.maps.Circle({
				strokeColor: '#FFF000',
				strokeOpacity: 0.8,
				strokeWeight: 2,
				fillColor: '#FF0000',
				fillOpacity: 0.35,
				map: map,
				center: location,
				radius: 350,
				draggable:true,
	    	})
		}
	},


	//populates names in side bar
	addSideBarInfo: function(){
		var sideBarArea = document.getElementById('sideBarArea');
		for (marker in mapMarkers[this.category]){
			var sideBarElem = document.createElement('P');
			sideBarElem.innerHTML = mapMarkers[this.category][marker]['name'];
			sideBarArea.appendChild(sideBarElem);
		}
	},

	
	onClick: function() {
		this.category = event.target.innerHTML;
		viewModel.addSideBarInfo();
		viewModel.addMarkers();
	}

};
viewModel.init();
ko.applyBindings(viewModel);

