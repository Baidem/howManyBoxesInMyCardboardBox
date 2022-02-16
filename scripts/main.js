// _,;:!!:;,_ VARIABLES PART _,;:!!:;,_

// INTERIOR DIMENSIONS OF CARDBOARD BOX
// CardboardInteriorSpaceOfDimension* X|Y|Z __value
const cardboardInteriorSpaceDimensionX = document.querySelector('#inner_x');
const cardboardInteriorSpaceDimensionY = document.querySelector('#inner_y');
const cardboardInteriorSpaceDimensionZ = document.querySelector('#inner_z');

// DIMENSIONS OF THE BOXES TO BE LOADED
// box*Dimention* A|B|C  __value
const boxSideWidthDimensionA= document.querySelector('#box_a');
const boxFrontWidthDimensionB = document.querySelector('#box_b');
const boxHeightDimensionC = document.querySelector('#box_c');

// Rules check boxes - à renommer
// checkboxRule....  __checked
const rule1 = document.querySelector('#rule_1');
const rule2 = document.querySelector('#rule_2');
const rule3 = document.querySelector('#rule_3');
const rule4 = document.querySelector('#rule_4');
const rule5 = document.querySelector('#rule_5');

// ACTION BUTTON FOR RUN CALCUL
const calculateButton = document.querySelector('#calculate_button');
// const senses_information = document.querySelector(".senses_information");

// image senses info
// const imageSwitch = document.createElement(".image_switch");


// COORDINATES OF THE CELLS OF THE RESULTS TABLE - à remommer
// id=solution_table
const centerGroupQuantity = document.querySelector('#center_group_quantity');
const centerGroupWay = document.querySelector('#center_group_way');
const frontGroupQuantity = document.querySelector('#front_group_quantity');
const frontGroupWay = document.querySelector('#front_group_way');
const sideGroupQuantity = document.querySelector('#side_group_quantity');
const sideGroupWay = document.querySelector('#side_group_way');
const topGroupQuantity = document.querySelector('#top_group_quantity');
const topGroupWay = document.querySelector('#top_group_way');
const totalQuantity = document.querySelector('#total_quantity');
const volumePercent = document.querySelector('#volume_percent');

// THE BOARD - calcul data board
// Load and unload all the informations for calculate a result
var TheBoard = {};

 // _,;:!!:;,_ CONTROLE CHECKING BOXES _,;:!!:;,_
rule1.addEventListener('change', () =>{ // Check on the rule1
    if (rule1.checked){ 
        rule2.checked = false;
        rule3.checked = false;
        rule4.checked = false;
        rule5.checked = false;
    } else {
        rule1.checked = true;
    }   
})
rule2.addEventListener('change', () =>{ // Check on the rule2
    if (rule2.checked){ 
        rule1.checked = false;
        rule3.checked = false;
        rule4.checked = false;
        rule5.checked = false;
    } else {
        rule1.checked = true;
    }   
})
rule3.addEventListener('change', () =>{ // Check on the rule3
    if (rule3.checked){
        rule1.checked = false;
        rule2.checked = false;
        rule4.checked = false;
        rule5.checked = false;

    } else {
        rule1.checked = true;
    }   
})
rule4.addEventListener('change', () =>{ // Check on the rule4
    if (rule4.checked){ 
        rule1.checked = false;
        rule2.checked = false;
        rule3.checked = false;
        rule5.checked = false;
    } else {
        rule1.checked = true;
    }   
})
rule5.addEventListener('change', () =>{ // Check on the rule5
    if (rule5.checked){
        rule1.checked = false;
        rule2.checked = false;
        rule3.checked = false;
        rule4.checked = false;
    } else {
        rule1.checked = true;
    }   
})

// _,;:!!:;,_ CLASS PART _,;:!!:;,_ 
class   Container { // Class for a container box (cardboard box)
    constructor(name,dimensionX,dimensionY,dimensionZ){
        this.name = name;
        this.dimensionX = +dimensionX;
        this.dimensionY = +dimensionY;
        this.dimensionZ = +dimensionZ;
        this.volume = dimensionX * dimensionY * dimensionZ;
    }
    //method
}
class   Inner { // Class for an inner box
    constructor(name,dimensionA,dimensionB,dimensionC){
        this.name = name;
        this.dimensionA = +dimensionA;
        this.dimensionB = +dimensionB;
        this.dimensionC = +dimensionC;
        this.volume = dimensionA * dimensionB * dimensionC;
        this.way1 = {
            name : 'way1',
            dimensionX : this.dimensionA,
            dimensionY : this.dimensionB,
            dimensionZ : this.dimensionC,
            volume : this.volume
        };
        this.way2 = {
            name : 'way2',
            dimensionX : this.dimensionB,
            dimensionY : this.dimensionA,
            dimensionZ : this.dimensionC,
            volume : this.volume
        };
        this.way3 = {
            name : 'way3',
            dimensionX : this.dimensionA,
            dimensionY : this.dimensionC,
            dimensionZ : this.dimensionB,
            volume : this.volume
        };
        this.way4 = {
            name : 'way4',
            dimensionX : this.dimensionC,
            dimensionY : this.dimensionA,
            dimensionZ : this.dimensionB,
            volume : this.volume
        };
        this.way5 = {
            name : 'way5',
            dimensionX : this.dimensionC,
            dimensionY : this.dimensionB,
            dimensionZ : this.dimensionA,
            volume : this.volume
        };
        this.way6 = {
            name : 'way6',
            dimensionX : this.dimensionB,
            dimensionY : this.dimensionC,
            dimensionZ : this.dimensionA,
            volume : this.volume
        }
    }
    //method
}
class   TheBoardToPrint { // Class of the board of result - method for print the result
    constructor(quantityInCenter,senseInCenter,  quantityInFront,senseInFront,  quantityInSide,senseInSide,  quantityInTop,senseInTop,  totalOfQuantities,totalVolumePercent){
        //line 1 : group in the center
        this.quantityInCenter = quantityInCenter;
        this.senseInCenter = senseInCenter;
        //line 2 : group in the front
        this.quantityInFront = quantityInFront;
        this.senseInFront = senseInFront;
        //line 3 : group in the side
        this.quantityInSide = quantityInSide;
        this.senseInSide = senseInSide;
        //line 4 : group on the top
        this.quantityInTop = quantityInTop;
        this.senseInTop = senseInTop;
        //line 5 : the total quantity and the volume percent
        this.totalOfQuantities = totalOfQuantities;
        this.totalVolumePercent = totalVolumePercent;
    }
    letsPrint() { // Method for print the result
        centerGroupQuantity.innerText = this.quantityInCenter;
        centerGroupWay.innerText = this.senseInCenter;

        frontGroupQuantity.innerText = this.quantityInFront;
        frontGroupWay.innerText = this.senseInFront;

        sideGroupQuantity.innerText = this.quantityInSide;
        sideGroupWay.innerText = this.senseInSide;

        topGroupQuantity.innerText = this.quantityInTop;
        topGroupWay.innerText = this.senseInTop;

        totalQuantity.innerText = this.totalOfQuantities;
        volumePercent.innerText = this.totalVolumePercent;
    }
}
// _,;:!!:;,_ PROGRAM _,;:!!:;,_

calculateButton.addEventListener('click', () => { // Start the process
    Calculator.valueZeroAndSmaller()
    TheCardboardBox = new Container('TheCardboardBox', cardboardInteriorSpaceDimensionX.value, cardboardInteriorSpaceDimensionY.value, cardboardInteriorSpaceDimensionZ.value);
    TheBox = new Inner('TheBox', boxSideWidthDimensionA.value, boxFrontWidthDimensionB.value, boxHeightDimensionC.value);
    if (rule1.checked) { // "Boxes stacked in the initial sense" : Test way1.
        Calculator.calculForRule1();
    } else
    if (rule2.checked) { // "Boxes upright, stacked in the same direction" : Test way1, way2.
        Calculator.calculForRule2();
    } else 
    if (rule3.checked) { // "Boxes upright, fill all the spaces with boxes in the next way" : Test way1++, way2++.
        Calculator.calculForRule3();   
    }
    if (rule4.checked) { // "All the possibilities, stacked in the same direction" : Test way1, way2, way3, way5, way6.
        Calculator.calculForRule4();   
    }
    if (rule5.checked) { // "All the possibilities, fill all the spaces with boxes in any direction" : Test way1++, way2++, way3++, way5++, way6++.
        Calculator.calculForRule5();   
    }
});

const Calculator = { // Call a calcul function
    calculForRule1 : function() {
        resultRule1 = loadResultRule1(Calculator.calculBoard(TheCardboardBox,TheBox.way1));
        resultRule1.letsPrint();

        function loadResultRule1(theBoardToPrint) {
            this.theBoardToPrint = theBoardToPrint;
            let quantityInCenter = this.theBoardToPrint.totalQuantity;
            let senseInCenter = this.theBoardToPrint.reference.substr(this.theBoardToPrint.reference.length - 4);
            let quantityInFront = 0;
            let senseInFront = "__";
            let quantityInSide = 0;
            let senseInSide = "__";
            let quantityInTop = 0;
            let senseInTop = "__"; 
            let totalOfQuantities = quantityInCenter;
            let totalVolumePercent =  +(((Math.ceil((this.theBoardToPrint.volumeFilling/this.theBoardToPrint.volumeContainer)*10000))/100).toFixed(2)) + "%";
            return new TheBoardToPrint (quantityInCenter,senseInCenter,  quantityInFront,senseInFront,  quantityInSide,senseInSide,  quantityInTop,senseInTop,  totalOfQuantities,totalVolumePercent);
        } 
    },
    calculForRule2 : function() {
        let selectList = [];
        selectList.push(Calculator.calculBoard(TheCardboardBox,TheBox.way1));
        selectList.push(Calculator.calculBoard(TheCardboardBox,TheBox.way2));
        if (selectList[0].totalQuantity >= selectList[1].totalQuantity) { // choose way1
            resultRule2 = loadResultRule2(selectList[0]); 
        } else { // choose way2
            resultRule2 = loadResultRule2(selectList[1]);
        }
        resultRule2.letsPrint();
    
        function loadResultRule2(theBoardToPrint) {
            this.theBoardToPrint = theBoardToPrint;
            let quantityInCenter = this.theBoardToPrint.totalQuantity;
            let senseInCenter = this.theBoardToPrint.reference.substr(this.theBoardToPrint.reference.length - 4);
            let quantityInFront = 0;
            let senseInFront = "__";
            let quantityInSide = 0;
            let senseInSide = "__";
            let quantityInTop = 0;
            let senseInTop = "__"; 
            let totalOfQuantities = quantityInCenter;
            let totalVolumePercent =  +(((Math.ceil((this.theBoardToPrint.volumeFilling/this.theBoardToPrint.volumeContainer)*10000))/100).toFixed(2)) + "%";
            return new TheBoardToPrint (quantityInCenter,senseInCenter,  quantityInFront,senseInFront,  quantityInSide,senseInSide,  quantityInTop,senseInTop,  totalOfQuantities,totalVolumePercent);
        }
    },
    calculForRule3 : function() {
        let selectList = [];
        let waysList = [TheBox.way1,TheBox.way2];
        waysList.forEach(way => {
            let theBoardRule3 = Calculator.calculBoard(TheCardboardBox,way);
            selectList.push(Calculator.fillingTournement(theBoardRule3, "rule3"))
        });
        //model
        let biggestList = [];
        selectList.forEach(element => {
            biggestList.push(element[0].totalQuantity + element[1].totalQuantity + element[2].totalQuantity + element[3].totalQuantity);
        });
        let theBiggestQuantity = Math.max(...biggestList);
        let result;
        for (let index = selectList.length-1; index >= 0; index--) {
            const element = selectList[index];
                if ((element[0].totalQuantity + element[1].totalQuantity + element[2].totalQuantity + element[3].totalQuantity) == theBiggestQuantity) {
                result = element;
            }
        };
        resultRule3 = loadResultRule3(result);
        resultRule3.letsPrint();
    
        function loadResultRule3(result) {
            this.result = result;
            let quantityInCenter = this.result[0].totalQuantity;
            let senseInCenter = this.result[0].reference.substr(this.result[0].reference.length - 4);
            let quantityInFront = this.result[1].totalQuantity;
            let senseInFront = this.result[1].reference.substr(this.result[1].reference.length - 4);
            if (quantityInFront == 0) {senseInFront = "__";}
            let quantityInSide = this.result[2].totalQuantity;
            let senseInSide = this.result[2].reference.substr(this.result[2].reference.length - 4);
            if (quantityInSide == 0) {senseInSide = "__";}
            let quantityInTop = this.result[3].totalQuantity;
            let senseInTop = this.result[3].reference.substr(this.result[3].reference.length - 4);
            if (quantityInTop == 0) {senseInTop = "__";}
            let totalOfQuantities = quantityInCenter + quantityInFront + quantityInSide + quantityInTop;
            let totalVolumePercent =  +(((Math.ceil(((this.result[0].volumeFilling + this.result[1].volumeFilling + this.result[2].volumeFilling + this.result[3].volumeFilling)/this.result[0].volumeContainer)*10000))/100).toFixed(2)) + "%";
            return new TheBoardToPrint (quantityInCenter,senseInCenter,  quantityInFront,senseInFront,  quantityInSide,senseInSide,  quantityInTop,senseInTop,  totalOfQuantities,totalVolumePercent);
        }
    },
    calculForRule4 : function() {
        let selectList = [];
        let waysList = [TheBox.way1,TheBox.way2,TheBox.way3,TheBox.way4,TheBox.way5,TheBox.way6];
        waysList.forEach(way => {
            let theBoardRule4 = Calculator.calculBoard(TheCardboardBox,way);
            selectList.push(theBoardRule4)
        });
        let biggestList = [];
        selectList.forEach(element => {
            biggestList.push(element.totalQuantity);
        });
        let theBiggestQuantity = Math.max(...biggestList);
        let result;
        for (let index = selectList.length-1; index >= 0; index--) {
            const element = selectList[index];
                if (element.totalQuantity == theBiggestQuantity) {
                result = element;
            }
        };
        resultRule4 = loadResultRule4(result);
        resultRule4.letsPrint();
    
        function loadResultRule4(theBoardToPrint) {
            this.theBoardToPrint = theBoardToPrint;
            let quantityInCenter = this.theBoardToPrint.totalQuantity;
            let senseInCenter = this.theBoardToPrint.reference.substr(this.theBoardToPrint.reference.length - 4);
            let quantityInFront = 0;
            let senseInFront = "__";
            let quantityInSide = 0;
            let senseInSide = "__";
            let quantityInTop = 0;
            let senseInTop = "__"; 
            let totalOfQuantities = quantityInCenter;
            let totalVolumePercent =  +(((Math.ceil((this.theBoardToPrint.volumeFilling/this.theBoardToPrint.volumeContainer)*10000))/100).toFixed(2)) + "%";
            return new TheBoardToPrint (quantityInCenter,senseInCenter,  quantityInFront,senseInFront,  quantityInSide,senseInSide,  quantityInTop,senseInTop,  totalOfQuantities,totalVolumePercent);
        }
    },
    calculForRule5 : function() {
        let selectList = [];
        let waysList = [TheBox.way1,TheBox.way2,TheBox.way3,TheBox.way4,TheBox.way5,TheBox.way6];
        waysList.forEach(way => {
            let theBoardRule5 = Calculator.calculBoard(TheCardboardBox,way);
            selectList.push(Calculator.fillingTournement(theBoardRule5, "rule5"))
        });
        let biggestList = [];
        selectList.forEach(element => {
            biggestList.push(element[0].totalQuantity + element[1].totalQuantity + element[2].totalQuantity + element[3].totalQuantity);
        });
        let theBiggestQuantity = Math.max(...biggestList);
        let result;
        for (let index = selectList.length-1; index >= 0; index--) {
            const element = selectList[index];
                if ((element[0].totalQuantity + element[1].totalQuantity + element[2].totalQuantity + element[3].totalQuantity) == theBiggestQuantity) {
                result = element;
            }
        };
        resultRule5 = loadResultRule5(result);
        resultRule5.letsPrint();
    
        function loadResultRule5(result) {
            this.result = result;
            let quantityInCenter = this.result[0].totalQuantity;
            let senseInCenter = this.result[0].reference.substr(this.result[0].reference.length - 4);
            let quantityInFront = this.result[1].totalQuantity;
            let senseInFront = this.result[1].reference.substr(this.result[1].reference.length - 4);
            if (quantityInFront == 0) {senseInFront = "__";}
            let quantityInSide = this.result[2].totalQuantity;
            let senseInSide = this.result[2].reference.substr(this.result[2].reference.length - 4);
            if (quantityInSide == 0) {senseInSide = "__";}
            let quantityInTop = this.result[3].totalQuantity;
            let senseInTop = this.result[3].reference.substr(this.result[3].reference.length - 4);
            if (quantityInTop == 0) {senseInTop = "__";}
            let totalOfQuantities = quantityInCenter + quantityInFront + quantityInSide + quantityInTop;
            let totalVolumePercent =  +(((Math.ceil(((this.result[0].volumeFilling + this.result[1].volumeFilling + this.result[2].volumeFilling + this.result[3].volumeFilling)/this.result[0].volumeContainer)*10000))/100).toFixed(2)) + "%";
            return new TheBoardToPrint (quantityInCenter,senseInCenter,  quantityInFront,senseInFront,  quantityInSide,senseInSide,  quantityInTop,senseInTop,  totalOfQuantities,totalVolumePercent);
        }
    },
    valueZeroAndSmaller : function () { // Function : exclude values smaller than or equal to 0 and replace them with 0.001.
        if (cardboardInteriorSpaceDimensionX.value <= 0 || cardboardInteriorSpaceDimensionX.value == undefined) {
            cardboardInteriorSpaceDimensionX.value = 0.001; 
        }
        if (cardboardInteriorSpaceDimensionY.value <= 0 || cardboardInteriorSpaceDimensionY.value == undefined) {
            cardboardInteriorSpaceDimensionY.value = 0.001; 
        }
        if (cardboardInteriorSpaceDimensionZ.value <= 0 || cardboardInteriorSpaceDimensionZ.value == undefined) {
            cardboardInteriorSpaceDimensionZ.value = 0.001; 
        }
        if (boxSideWidthDimensionA.value <= 0 || boxSideWidthDimensionA.value == undefined) {
            boxSideWidthDimensionA.value = 0.001; 
        }
        if (boxFrontWidthDimensionB.value <= 0 || boxFrontWidthDimensionB.value == undefined) {
            boxFrontWidthDimensionB.value = 0.001; 
        }
        if (boxHeightDimensionC.value <= 0 || boxHeightDimensionC.value == undefined) {
            boxHeightDimensionC.value = 0.001; 
        }
    },
    calculBoard : function (theContainer,theInnerBox) { // Load TheBoard
        this.theContainer = theContainer;
        this.theInnerBox = theInnerBox;
        if (this.theContainer.dimensionX < this.theInnerBox.dimensionX || this.theContainer.dimensionY < this.theInnerBox.dimensionY || this.theContainer.dimensionZ < this.theInnerBox.dimensionZ) {
            // Fail Calcul Board
            TheBoard = {};
            TheBoard.reference = this.theContainer.name + " - " + this.theInnerBox.name;
            TheBoard.quantityOFlawX = 0;
            TheBoard.quantityOFlawY = 0;
            TheBoard.quantityOFlawZ = 0;
            TheBoard.totalQuantity = 0;
            TheBoard.containerSpace = {
                name : "containerSpace",
                dimensionX : this.theContainer.dimensionX,
                dimensionY : this.theContainer.dimensionY,
                dimensionZ : this.theContainer.dimensionZ,
                volume : this.theContainer.volume        
            };
            TheBoard.fillSpace = {
                name : 'fillSpace',
                    dimensionX : 0,
                    dimensionY : 0,
                    dimensionZ : 0,
                    volume : 0
            };
            TheBoard.freeSpace = {
                name : 'freeSpace',
                    dimensionX : 0,
                    dimensionY : 0,
                    dimensionZ : 0,
                    volume : 0
            };
            TheBoard.volumeContainer = this.theContainer.volume;
            TheBoard.volumeFilling = 0;
            TheBoard.percentageOfVolumeFilling = 0;
        } else { // Calcul Board
            let reference = this.theContainer.name + " - " + this.theInnerBox.name;
            let quantityOFlawX = Math.floor (this.theContainer.dimensionX / this.theInnerBox.dimensionX);
            let quantityOFlawY = Math.floor (this.theContainer.dimensionY / this.theInnerBox.dimensionY);
            let quantityOFlawZ = Math.floor (this.theContainer.dimensionZ / this.theInnerBox.dimensionZ);
            let totalQuantity = quantityOFlawX * quantityOFlawY * quantityOFlawZ;
            let fillSpace = {
                name : 'fillSpace',
                    dimensionX : this.theInnerBox.dimensionX * quantityOFlawX,
                    dimensionY : this.theInnerBox.dimensionY * quantityOFlawY,
                    dimensionZ : this.theInnerBox.dimensionZ * quantityOFlawZ,
                    volume : (this.theInnerBox.dimensionX * quantityOFlawX)*(this.theInnerBox.dimensionY * quantityOFlawY)*(this.theInnerBox.dimensionZ * quantityOFlawZ)
            };
            let freeSpace = {
                name : 'freeSpace',
                    dimensionX : this.theContainer.dimensionX - fillSpace.dimensionX,
                    dimensionY : this.theContainer.dimensionY - fillSpace.dimensionY,
                    dimensionZ : this.theContainer.dimensionZ - fillSpace.dimensionZ,
                    volume : (this.theContainer.dimensionX - fillSpace.dimensionX) * (this.theContainer.dimensionY - fillSpace.dimensionY) * (this.theContainer.dimensionZ - fillSpace.dimensionZ)
            };
            let volumeFilling = this.theInnerBox.volume * totalQuantity;
            let percentageOfVolumeFilling = +(((Math.ceil(((this.theInnerBox.volume * totalQuantity)/this.theContainer.volume)*10000))/100).toFixed(2));
    
            TheBoard = {};
            TheBoard.reference = reference,
            TheBoard.quantityOFlawX = quantityOFlawX,
            TheBoard.quantityOFlawY = quantityOFlawY,
            TheBoard.quantityOFlawZ = quantityOFlawZ,
            TheBoard.totalQuantity = totalQuantity,
            TheBoard.containerSpace = {
                name : "containerSpace",
                dimensionX : this.theContainer.dimensionX,
                dimensionY : this.theContainer.dimensionY,
                dimensionZ : this.theContainer.dimensionZ,
                volume : this.theContainer.volume        
            };
            TheBoard.fillSpace = fillSpace,
            TheBoard.freeSpace = freeSpace
            TheBoard.volumeContainer = this.theContainer.volume;
            TheBoard.volumeFilling = volumeFilling;
            TheBoard.percentageOfVolumeFilling = percentageOfVolumeFilling;
        }
        return TheBoard;
    },
    fillingTournement : function (theBoard, rule) { // try all posibility to stack a group of boxes in a container 
        this.theBoard = theBoard;
        this.rule = rule;
        let containerSpace = this.theBoard.containerSpace;
        let fillSpace = this.theBoard.fillSpace;
        let freeSpace = this.theBoard.freeSpace;
        
        let containersList;
        let waysList;
        let listOfChooses = [];
        if (this.rule == "rule3") { // define the containersList and the waysList for the rule3
            containersList = [
                firstFaceSideTop = { // FST
                    name : 'firstFaceSideTop',
                    faceFreeSpace : {
                        name : "faceFreeSpace",
                        dimensionX : freeSpace.dimensionX,
                        dimensionY : containerSpace.dimensionY,
                        dimensionZ : containerSpace.dimensionZ,
                        volume : freeSpace.dimensionX * containerSpace.dimensionY*containerSpace.dimensionZ
                    },
                    sideFreeSpace : {
                        name : "sideFreeSpace",
                        dimensionX : fillSpace.dimensionX,
                        dimensionY : freeSpace.dimensionY,
                        dimensionZ : containerSpace.dimensionZ,
                        volume : fillSpace.dimensionX*freeSpace.dimensionY*containerSpace.dimensionZ
                    },
                    topFreeSpace : {
                        name : "topFreeSpace",
                        dimensionX : fillSpace.dimensionX,
                        dimensionY : fillSpace.dimensionY,
                        dimensionZ : freeSpace.dimensionZ,
                        volume : fillSpace.dimensionX*fillSpace.dimensionY*freeSpace.dimensionZ
                    }
                },
                firstSideFaceTop = { // SFT
                    name : 'firstSideFaceTop',
                    faceFreeSpace : {
                        name : 'faceFreeSpace',
                        dimensionX : freeSpace.dimensionX,
                        dimensionY : fillSpace.dimensionY,
                        dimensionZ : containerSpace.dimensionZ,
                        volume : freeSpace.dimensionX*fillSpace.dimensionY*containerSpace.dimensionZ
                    },
                    sideFreeSpace : {
                        name : 'sideFreeSpace',
                        dimensionX : containerSpace.dimensionX,
                        dimensionY : freeSpace.dimensionY,
                        dimensionZ : containerSpace.dimensionZ,
                        volume : containerSpace.dimensionX*freeSpace.dimensionY*containerSpace.dimensionZ
                    },
                    topFreeSpace : {
                        name : 'topFreeSpace',
                        dimensionX : fillSpace.dimensionX,
                        dimensionY : fillSpace.dimensionY,
                        dimensionZ : freeSpace.dimensionZ,
                        volume : fillSpace.dimensionX*fillSpace.dimensionY*freeSpace.dimensionZ
                    }
                }
            ];
            waysList = [
                TheBox.way1,
                TheBox.way2
            ];
        }
        if (this.rule == "rule5") { // define the containersList and the waysList for the rule5
            containersList = [
                firstFaceSideTop = { // FST
                    name : 'firstFaceSideTop',
                    faceFreeSpace : {
                        name : "faceFreeSpace",
                        dimensionX : freeSpace.dimensionX,
                        dimensionY : containerSpace.dimensionY,
                        dimensionZ : containerSpace.dimensionZ,
                        volume : freeSpace.dimensionX*containerSpace.dimensionY*containerSpace.dimensionZ
                    },
                    sideFreeSpace : {
                        name : "sideFreeSpace",
                        dimensionX : fillSpace.dimensionX,
                        dimensionY : freeSpace.dimensionY,
                        dimensionZ : containerSpace.dimensionZ,
                        volume : fillSpace.dimensionX*freeSpace.dimensionY*containerSpace.dimensionZ
                    },
                    topFreeSpace : {
                        name : "topFreeSpace",
                        dimensionX : fillSpace.dimensionX,
                        dimensionY : fillSpace.dimensionY,
                        dimensionZ : freeSpace.dimensionZ,
                        volume : fillSpace.dimensionX*fillSpace.dimensionY*freeSpace.dimensionZ
                    }
                },
                firstFaceTopSide = { // FTS
                    name : 'firstFaceTopSide',
                    faceFreeSpace : {
                        name : "faceFreeSpace",
                        dimensionX : freeSpace.dimensionX,
                        dimensionY : containerSpace.dimensionY,
                        dimensionZ : containerSpace.dimensionZ,
                        volume : freeSpace.dimensionX*containerSpace.dimensionY*containerSpace.dimensionZ
                    },
                    sideFreeSpace : {
                        name : 'sideFreeSpace',
                        dimensionX : fillSpace.dimensionX,
                        dimensionY : freeSpace.dimensionY,
                        dimensionZ : fillSpace.dimensionZ,
                        volume : fillSpace.dimensionX*freeSpace.dimensionY*fillSpace.dimensionZ
                    },
                    topFreeSpace : {
                        name : 'topFreeSpace',
                        dimensionX : fillSpace.dimensionX,
                        dimensionY : containerSpace.dimensionY,
                        dimensionZ : freeSpace.dimensionZ,
                        volume : fillSpace.dimensionX*containerSpace.dimensionY*freeSpace.dimensionZ
                    }
                },
                firstSideFaceTop = { // SFT
                    name : 'firstSideFaceTop',
                    faceFreeSpace : {
                        name : 'faceFreeSpace',
                        dimensionX : freeSpace.dimensionX,
                        dimensionY : fillSpace.dimensionY,
                        dimensionZ : containerSpace.dimensionZ,
                        volume : freeSpace.dimensionX*fillSpace.dimensionY*containerSpace.dimensionZ
                    },
                    sideFreeSpace : {
                        name : 'sideFreeSpace',
                        dimensionX : containerSpace.dimensionX,
                        dimensionY : freeSpace.dimensionY,
                        dimensionZ : containerSpace.dimensionZ,
                        volume : containerSpace.dimensionX*freeSpace.dimensionY*containerSpace.dimensionZ
                    },
                    topFreeSpace : {
                        name : 'topFreeSpace',
                        dimensionX : fillSpace.dimensionX,
                        dimensionY : fillSpace.dimensionY,
                        dimensionZ : freeSpace.dimensionZ,
                        volume : fillSpace.dimensionX*fillSpace.dimensionY*freeSpace.dimensionZ
                    }
                },
                firstSideTopFace = { // STF
                    name : 'firsSideFaceTop',
                    faceFreeSpace : {
                        name : 'faceFreeSpace',
                        dimensionX : freeSpace.dimensionX,
                        dimensionY : fillSpace.dimensionY,
                        dimensionZ : fillSpace.dimensionZ,
                        volume : freeSpace.dimensionX*fillSpace.dimensionY*fillSpace.dimensionZ
                    },
                    sideFreeSpace : {
                        name : 'sideFreeSpace',
                        dimensionX : containerSpace.dimensionX,
                        dimensionY : freeSpace.dimensionY,
                        dimensionZ : containerSpace.dimensionZ,
                        volume : containerSpace.dimensionX*freeSpace.dimensionY*containerSpace.dimensionZ
                    },
                    topFreeSpace : {
                        name : 'topFreeSpace',
                        dimensionX : containerSpace.dimensionX,
                        dimensionY : fillSpace.dimensionY,
                        dimensionZ : freeSpace.dimensionZ,
                        volume : containerSpace.dimensionX*fillSpace.dimensionY*freeSpace.dimensionZ
                    }
                },
                firstTopFaceSide = { // TFS
                    name : 'firstTopFaceSide',
                    faceFreeSpace : {
                        name : 'faceFreeSpace',
                        dimensionX : freeSpace.dimensionX,
                        dimensionY : containerSpace.dimensionY,
                        dimensionZ : fillSpace.dimensionZ,
                        volume : freeSpace.dimensionX*containerSpace.dimensionY*fillSpace.dimensionZ
                    },
                    sideFreeSpace : {
                        name : 'sideFreeSpace',
                        dimensionX : fillSpace.dimensionX,
                        dimensionY : freeSpace.dimensionY,
                        dimensionZ : fillSpace.dimensionZ,
                        volume : fillSpace.dimensionX*freeSpace.dimensionY*fillSpace.dimensionZ
                    },
                    topFreeSpace : {
                        name : 'topFreeSpace',
                        dimensionX : containerSpace.dimensionX,
                        dimensionY : containerSpace.dimensionY,
                        dimensionZ : freeSpace.dimensionZ,
                        volume : containerSpace.dimensionX*containerSpace.dimensionY*freeSpace.dimensionZ
                    }
                },
                firstTopSideFace = { // TSF
                    name : 'firstTopSideFace',
                    faceFreeSpace : {
                        name : 'faceFreeSpace',
                        dimensionX : freeSpace.dimensionX,
                        dimensionY : containerSpace.dimensionY,
                        dimensionZ : fillSpace.dimensionZ,
                        volume : freeSpace.dimensionX*containerSpace.dimensionY*fillSpace.dimensionZ
                    },
                    sideFreeSpace : {
                        name : 'sideFreeSpace',
                        dimensionX : fillSpace.dimensionX,
                        dimensionY : freeSpace.dimensionY,
                        dimensionZ : fillSpace.dimensionZ,
                        volume : fillSpace.dimensionX*freeSpace.dimensionY*fillSpace.dimensionZ
                    },
                    topFreeSpace : {
                        name : 'topFreeSpace',
                        dimensionX : containerSpace.dimensionX,
                        dimensionY : containerSpace.dimensionY,
                        dimensionZ : freeSpace.dimensionZ,
                        volume : containerSpace.dimensionX*containerSpace.dimensionY*freeSpace.dimensionZ
                    }
                }
            ];
            waysList = [
                TheBox.way1,
                TheBox.way2,
                TheBox.way3,
                TheBox.way4,
                TheBox.way5,
                TheBox.way6
            ];
        }
        containersList.forEach(container => {
            let faceSpace = Calculator.tryWaysListTournement(Calculator.tryWaysList(container.faceFreeSpace,waysList));
            let sideSpace = Calculator.tryWaysListTournement(Calculator.tryWaysList(container.sideFreeSpace,waysList));
            let topSpace = Calculator.tryWaysListTournement(Calculator.tryWaysList(container.topFreeSpace,waysList));
            listOfChooses.push([this.theBoard,faceSpace,sideSpace,topSpace]);
        });
        let biggestList = [];
        listOfChooses.forEach(element => {
            biggestList.push(element[0].totalQuantity + element[1].totalQuantity + element[2].totalQuantity + element[3].totalQuantity);
        });
        let theBiggestQuantity = Math.max(...biggestList);
        let result;
        for (let index = listOfChooses.length-1; index >= 0; index--) {
            const element = listOfChooses[index];
                if ((element[0].totalQuantity + element[1].totalQuantity + element[2].totalQuantity + element[3].totalQuantity) == theBiggestQuantity) {
                result = element;
            }
        };
        return result;
    },
    tryWaysList : function (theContainer,waysList) { // in theContainer try the all the ways of the waysList
        this.theContainer = theContainer;
        this.waysList = waysList;
        let tryWayListResult = [];
        this.waysList.forEach(elementWaysList => {
            tryWayListResult.push(Calculator.calculBoard(this.theContainer,elementWaysList));           
        });
        return tryWayListResult;
    },
    tryWaysListTournement : function (list) { // find the best score in the list
        this.list = list;
        let listOfTotalQuantity = [];
        let biggestTotalQuantity;
        let result;
        this.list.forEach(element => {listOfTotalQuantity.push(element.totalQuantity);});
        biggestTotalQuantity = Math.max(...listOfTotalQuantity);
        for (let index = this.list.length-1; index >= 0; index--) {
            const element = this.list[index].totalQuantity;
            if (element == biggestTotalQuantity) {
                result = this.list[index];
            }
        }
        return result;
    }
}