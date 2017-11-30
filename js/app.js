var app = angular.module('selector',[]);

app.controller('selectorController', function(){
	this.tab = 0;
	this.item = '';
	this.list = items;
	this.currentTab = function(value){
		this.tab = value;
	};

	this.isTabSelected = function(para){
		return this.tab === para;
	};

	this.addItem = function(){
		this.list.push({body: this.item});
		this.item = '';
	}

	this.hasItem = function(){
		return this.item.length > 1;
	}
	
	this.deleteItem = function(item){
		this.list.pop(item);
	}

});


items = [
{
	body:"Save the world"
},
{
	body:"Kill some nazis"
},

];

