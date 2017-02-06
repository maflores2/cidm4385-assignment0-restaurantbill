var restaurantCalculator = angular.module("RestaurantCalculator", []);

/* conversion rates and UI idea from: http://convert.french-property.co.uk/ */

restaurantCalculator.controller('RestaurantCalculatorConverter', [
	'$scope', function($scope){
	    
	    var rcc = this;
                    
                    rcc.cost = 0.0;
                    rcc.add_tax = true;
                    rcc.total_bill = true;
                    
                    function update(){
                        rcc.tax = rcc.add_tax ? rcc.cost * 0.15 : 0.0;    
                        rcc.total = parseFloat(rcc.cost) + rcc.tax;
                        rcc.tippingTotal = parseFloat(rcc.total) * rcc.tipping.amount;
                    }
                    
                    //used to detect when cost changes
                    $scope.$watch('rcc.cost', update);
                    $scope.$watch('rcc.add_tax', update);
                    $scope.$watch('rcc.tipping', update);
                    $scope.$watch('rcc.cost + rcc.tax', update);
                    
                    //final bill
                    rcc.final_bill = 0.0;
                    rcc.add = function add(){
                        rcc.final_bill += (rcc.total + rcc.tippingTotal);   
                    };
                    
                    //shipping options
                    rcc.tipping_options = [
                        {amount:0.10, name:"10%"},
                        {amount:0.15, name:"15%"},
                        {amount:0.30, name:"20%"}
                    ];
                    
                    rcc.tipping = rcc.tipping_options[0];
	    
	    
	    
	}]);
	