{
    init: function(elevators, floors) {
////////////////////////////////////////
///////Elevator Idle Functions//////////
////////////////////////////////////////        
        var elevator1 = elevators[0];
        elevator1.on("idle", function() {
            elevator1.goToFloor(0);
        });
        var elevator2 = elevators[1];
        elevator2.on("idle", function() {
            elevator2.goToFloor(0);
        });
/////////////////////////////////////////
///////Elevator Button Functions/////////
/////////////////////////////////////////        
        elevator1.on("floor_button_pressed", function(floorNum){
            elevator1.goToFloor(floorNum);
        });

        elevator2.on("floor_button_pressed", function(floorNum){
            elevator2.goToFloor(floorNum);
        });
/////////////////////////////////////////
///////Floor Button Functions////////////
/////////////////////////////////////////
		//↑↑↑UP↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
		var nextele = 0;
		var floor1 = floors[1];
		floor1.on("up_button_pressed", function(event){
			if (elevator2.goingUpIndicator() && elevator2.currentFloor() < floor1.floorNum() && elevator2.loadFactor() == 0) {
				elevator2.goToFloor(floor1.floorNum());
			};
		});
		
		var floor2 = floors[2];
		floor2.on("up_button_pressed", function(event){
			if (elevator2.goingUpIndicator() && elevator2.currentFloor() < floor2.floorNum() && elevator2.loadFactor() == 0) {
				elevator2.goToFloor(floor2.floorNum());
			};
			
		});
		
		var floor3 = floors[3];
		floor3.on("up_button_pressed", function(event){
			if (elevator2.goingUpIndicator() && elevator2.currentFloor() < floor3.floorNum() && elevator2.loadFactor() == 0) {
				elevator2.goToFloor(floor3.floorNum());
			};
		});
		
		//↓↓↓DOWN↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
		floor1.on("down_button_pressed", function(event){
			if (elevator2.goingUpIndicator() && elevator2.currentFloor() < floor1.floorNum() && elevator2.loadFactor() == 0) {
				elevator2.goToFloor(floor1.floorNum());
			};
		});
		
		floor2.on("down_button_pressed", function(event){
			if (elevator2.goingUpIndicator() && elevator2.currentFloor() < floor1.floorNum() && elevator2.loadFactor() == 0) {
				elevator2.goToFloor(floor2.floorNum());
			};
		});
		
		floor3.on("down_button_pressed", function(event){
			if (elevator2.goingUpIndicator() && elevator2.currentFloor() < floor1.floorNum() && elevator2.loadFactor() == 0) {
				elevator2.goToFloor(floor3.floorNum());
			};
		});
    },
	
    update: function(dt, elevators, floors) {

    }
}