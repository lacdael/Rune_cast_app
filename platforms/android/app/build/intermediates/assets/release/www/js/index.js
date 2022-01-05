/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
	// Application Constructor
initialize: function() {
		    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
	    },

	    // deviceready Event Handler
	    //
	    // Bind any cordova events here. Common events are:
	    // 'pause', 'resume', etc.
onDeviceReady: function() {
		       this.viewDefault();
			$("#canvas").on("swiperight",this.viewDefault.bind(this));
		       $("#canvas").on("swipeleft",this.viewDefault.bind(this));
			$("#btn").on("click",this.viewCast.bind(this));
	       		$("#canvas").on("click",".rune",this.modal.bind(this));
			$("#canvas").on("click",".modal",function(e){$(e.target).closest('.modal').remove()});
		},
	       // Update DOM on a Received Event
receivedEvent: function(id) {
		       switch('deviceready'){
			       case 'deviceready':
				       break;
		       }
	       },
modal: function(e) {
	var rune = this.runes[$(e.target).attr("id")];
	var tr = $(e.target).css("-moz-transform") || $(e.target).css("-ms-transform") || $(e.target).css("-o-transform") || $(e.target).css("transform");
	if (tr !== "none"){
		var values = tr.split('(')[1];
		values = values.split(')')[0];
		values = values.split(',');
		var angle = Math.round( Math.atan2(values[1],values[0]) * (180/Math.PI));
	} else var angle = 0;
	console.log(angle);
	if (typeof rune.reversed == "undefined") var reversed = false;
	else if (angle < -90 || angle > 90) var reversed = true;	
       	else var reversed = false;
	$("<div class=\"modal\">").html('<div id="txt"><h1>'+rune.name+'</h1>'+(reversed? '<h3>(reversed)</h3>' : '')+'<p>'+(reversed ? rune.reversed : rune.meaning)+'</p></div>').appendTo("#canvas");
    },
viewCast : function(){
	$("#canvas").empty();
	if ($('#background').length == 0) {
			$("#canvas").off("swiperight");
		       $("#canvas").off("swipeleft");
	
 $('.app').append('<img id="background" src="img/valknut.svg"/>');
}

		var width = $(window).width();
		var height = $(window).height();
		var clearWidth = width*0.2;
		var clearHeight = height*0.2;
		for(var i = 0; i < this.runes.length; i++) $('<img class="rune" id="'+i+'" src="'+this.runes[i].img+'"/>').appendTo('#canvas');
		$(".rune").each(function(i){
			var rotation = "rotate("+Math.round((Math.random()*360)+1)+"deg)";
			var posx = Math.round(Math.random() * width - clearWidth);
			var posy = Math.round(Math.random() * height - clearHeight);
			if (posx < clearWidth/2) posx = Math.round(posx + clearWidth);
			if (posx >= width - clearWidth) posx = Math.round(posx - clearWidth);
			if (posy < clearHeight/2) posy = Math.round(posy + clearHeight);
			if (posy >= height - clearHeight) posy = Math.round(posy - clearHeight);
			$(this).css("transform",rotation).css("-ms-transform",rotation).css("-webkit-transform",rotation);
			$(this).animate({"top":posy+"px","left":posx+"px"},500);
		});
	},
		viewDefault : function(){
			  var canvas = document.getElementById('canvas');
			  var rune = this.runes[Math.floor(Math.random()*this.runes.length)];
			  if (typeof rune.reversed == "undefined") var reversed = false;
			  else var reversed = Math.random() >= 0.5;
			  canvas.innerHTML = '<div id="rune"><img '+(reversed ? 'class="reversed"' : '')+' src="'+rune.img+'"/><div id="txt"><h1>'
				  +rune.name+'</h1>'+(reversed ? '<h3>(reversed)</h3>' : '')+'<p>'+(reversed ? rune.reversed : rune.meaning)+'</p></div></div>';
		  },
		  //Data
runes : [
		{
			"name" : "Feoh",
			"img" : "img/runes-f.svg",
			"meaning" : "Money, wealth, luck, abundance.",
			"reversed" : "Travel, relocation, dance of life."
		},
		{
			"name" : "Ur",
			"img" : "img/runes-u.svg",
			"meaning" : "Ox, strength, power, courage.",
			"reversed" : "Frailty, rashness, violence, lust."
		},
		{
			"name" : "Thorn",
			"img" : "img/runes-th.svg",
			"meaning" : "Thorn, change, catharsis.",
			"reversed" : "Compulsion, Evil, Violence, Lust."
	    	},
		{
			"name" : "Os",
			"img" : "img/runes-o.svg",
			"meaning" : "Mouth, creativity, ",
			"reversed" : ""
	    	},
		{
			"name" : "Rad",
			"img" : "img/runes-r.svg",
			"meaning" : "Wagaon, travel, journey, destiny.",
			"reversed" : "Crisis, rigidity, injustice, death."
		},
		{
			"name" : "Cen",
			"img" : "img/runes-c.svg",
			"meaning" : "Torch, Revelation, knowledge, creativity, inspiration.",
			"reversed" : "False hope, No creativity."
		},
		{
			"name" : "Gyfu",
			"img" : "img/runes-g.svg",
			"meaning" : "Gift, love, generosity, marriage, partnership."
		},
		{
			"name" : "Wynn",
			"img" : "img/runes-w.svg",
			"meaning" : "Joy, sucess, peace, pleasure, self defence.",
			"reversed" : "Sorrow, strife, intoxication, frenzy."
		},
		    
		{
			"name" : "Haegl",
			"img" : "img/runes-h.svg",
			"meaning" : "Hailstrom, loss, destruction, change.",
			"reversed" : "Catastrophe, loss, sickness, hardship, pain."
		},
		{
			"name" : "Nyd",
			"img" : "img/runes-n.svg",
			"meaning" : "Need, necessity, hardship, delays.",
			"reversed" : "Need, drusgery, laxity, restlessness."
		},
		{
			"name" : "Is",
			"img" : "img/runes-i.svg",
			"meaning" : "Ice, standstill, block, challenge."
		},
		{
		        "name" : "Jer",
		        "img" : "img/runes-j.svg",
		        "meaning" : "Year, harvest, peace, rewards."
		},
		{
			"name" : "Eeoh",
			"img" : "img/runes-eo.svg",
			"meaning" : "Yew tree, stability, strength, reliability, enlightenment."
		},
		{
			"name" : "Peorth",
			"img" : "img/runes-p.svg",
			"meaning" : "Pawn, magic, mystery, feminine.",
			"reversed" : "Addiction, loneliness, malaise."
		},
		{
			"name" : "Eolh",
			"img" : "img/runes-x.svg",
			"meaning" : "Elk, protection, shield, self defence.",
			"reversed" : "Hidden danger, taboo, warning."
		},
		{
			"name" : "Sigel",
			"img" : "img/runes-s.svg",
			"meaning" : "Sun, strength, energy, health, success.",
		},
		{
			"name" : "Tyr",
			"img" : "img/runes-t.svg",
			"meaning" : "Tyr, honor, justice, leadership, authority.",
			"reversed" : "Strife, war, stupidity, dullness."
		},
		{
			"name" : "Beorc",
			"img" : "img/runes-b.svg",
			"meaning" : "Birch, birth, beginnings, personal growth, liberation.",
			"reversed" : "Anxiety, deceit, abandon, loss of control."
		},
		{
			"name" : "Eoh",
			"img" : "img/runes-e.svg",
			"meaning" : "Horse, transportation, partnership.",
			"reversed" : "Reckless, haste, disharmony, mistrust, betrayal."
		},
		{
			"name" : "Mann",
			"img" : "img/runes-m.svg",
			"meaning" : "Man, self, mankind, culture, friends.",
			"reversed" : "Depression, slyness, mortality, manipulation."
		},
		{
			"name" : "Lagu",
			"img" : "img/runes-l.svg",
			"meaning" : "Lake, water, sea, flow, renewal",
			"reversed" : "Confusion, dispair, perversity, madness."
		},
		{
			"name" : "Ing",
			"img" : "img/runes-ng.svg",
			"meaning" : "Fertility, growth, harmony."
		},
		{
			"name" : "Oedel",
			"img" : "img/runes-oe.svg",
			"meaning" : "Estate, property, plenty.",
			"reversed" : "Slavery, bad karma, homelessness."
		},
		{
			"name" : "Daeg",
			"img" : "img/runes-d.svg",
			"meaning" : "Day, daen, break-through, awareness."
		}/*,
		{
			"name" : "Ac",
			"img" : "img/runes-a.svg",
			"meaning" : "Oak, potential, growth, strengthening.",
			"reviersed" : "Stagnation, rut, at an impass"
		},
		{
			"name" : "Aesc",
			"img" : "img/runes-ae.svg",
			"meaning" : "Ash, communication, insight, truth, wisdom.",
			"reversed" : ""
		},
		{
			"name" : "Yr",
			"img" : "img/runes-y.svg",
			"meaning" : "Bow, prepared, survival, turning point.",
			"reversed" : "?"
		},
		{
			    "name" : "Ear",
			    "img" : "img/runes-ea.svg",
			    "meaning" : "Earth",
			    "reversed" : ""
		    },
		    {
			    "name" : "Ior",
			    "img" : "img/runes-ia.svg",
			    "meaning" : "Serpent",
		    },
		    {
			    "name" : "Kale",
			    "img" : "img/runes-k.svg",
			    "meaning" : "Chalice",
		    },
		   {
			    "name" : "Kale",
			    "img" : "img/runes-k2.svg",
			    "meaning" : "Chalice",
		    },
		    {
			    "name" : "Gar",
			    "img" : "img/runes-g2.svg",
			    "meaning" : "Spear",
		    },
		    {
			    "name" : "Cpeorth",
			    "img" : "img/runes-q.svg",
			    "meaning" : "Fire",
			    "reversed" : ""
		    },
		    {
			    "name" : "Stan",
			    "img" : "img/runes-st.svg",
			    "meaning" : "Stone",
		    }*/

	    ]
};

app.initialize();
