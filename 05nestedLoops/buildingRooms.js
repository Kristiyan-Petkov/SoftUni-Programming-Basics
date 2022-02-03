function buildingRooms(input) {
    let floors = Number(input[0]);
    let roomsPerFloor = Number(input[1]);
    let currentFloor = floors;
    let currentApartment = 0;
    let roomName = ""

    for (let i = floors; i > 0; i--) {
        for (let j = 1; j <= roomsPerFloor; j++) {
            if (currentFloor === floors) {
                roomName += `L${floors}${currentApartment} `;
                currentApartment++;
            } else if (currentFloor % 2 !== 0){
                roomName += `A${currentFloor}${currentApartment} `;
                currentApartment++;
            } else if (currentFloor % 2 === 0){
            roomName += `O${currentFloor}${currentApartment} `;
            currentApartment++;
            }
        }
        console.log(roomName);
        currentApartment = 0;
        roomName = "";
        currentFloor--;
    }

}
buildingRooms(["6", "4"])