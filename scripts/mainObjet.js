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
const lienInfo = document.querySelector(".lien_info");

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
var theBoard = {};

 // _,;:!!:;,_ CONTROLE CHECKING BOXES _,;:!!:;,_
 rule1.addEventListener('change', () =>{
    if (rule1.checked){ rule2.checked = false;
                        rule3.checked = false;
                        rule4.checked = false;
                        rule5.checked = false;  }
    else {              rule1.checked = true;   }   
})
rule2.addEventListener('change', () =>{
    if (rule2.checked){ rule1.checked = false;
                        rule3.checked = false;
                        rule4.checked = false;
                        rule5.checked = false;  }
    else {              rule1.checked = true;   }   
})
rule3.addEventListener('change', () =>{
    if (rule3.checked){ rule1.checked = false;
                        rule2.checked = false;
                        rule4.checked = false;
                        rule5.checked = false;  }
    else {              rule1.checked = true;   }   
})
rule4.addEventListener('change', () =>{
    if (rule4.checked){ rule1.checked = false;
                        rule2.checked = false;
                        rule3.checked = false;
                        rule5.checked = false;  }
    else {              rule1.checked = true;   }   
})
rule5.addEventListener('change', () =>{
    if (rule5.checked){ rule1.checked = false;
                        rule2.checked = false;
                        rule3.checked = false;
                        rule4.checked = false;  }
    else {              rule1.checked = true;   }   
})

// _,;:!!:;,_ CLASS PART _,;:!!:;,_ 
// Représente un contenant à remplir
class   Container {
    constructor(name,dimensionX,dimensionY,dimensionZ){
        this.name = name;
        this.dimensionX = +dimensionX;
        this.dimensionY = +dimensionY;
        this.dimensionZ = +dimensionZ;
        this.volume = dimensionX * dimensionY * dimensionZ;
    }
    //method
}
// Représente les objets qui remplissent le contenant
class   Inner {
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
// le But final : the goal
class   TheBoardToPrint {
    constructor(quantityInCenter,senseInCenter,  quantityInFront,senseInFront,  quantityInSide,senseInSide,  quantityInTop,senseInTop,  totalOfQuantities,totalVolumePercent){
        //ligne1
        this.quantityInCenter = quantityInCenter;
        this.senseInCenter = senseInCenter;
        //ligne2
        this.quantityInFront = quantityInFront;
        this.senseInFront = senseInFront;
        //ligne3
        this.quantityInSide = quantityInSide;
        this.senseInSide = senseInSide;
        //ligne4
        this.quantityInTop = quantityInTop;
        this.senseInTop = senseInTop;
        //ligne5
        this.totalOfQuantities = totalOfQuantities;
        this.totalVolumePercent = totalVolumePercent;
    }
    //method
    letsPrint() {
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


// _,;:!!:;,_ FUNCTIONS _,;:!!:;,_

// calculBoard
// calculer une quantité  de boites dans un volume donné
function calculBoard(theContainer,theInnerBox) {
    if (theContainer.dimensionX < theInnerBox.dimensionX || theContainer.dimensionY < theInnerBox.dimensionY || theContainer.dimensionZ < theInnerBox.dimensionZ) {
        // Fail Calcul Board
        theBoard = {};
        theBoard.reference = theContainer.name + " - " + theInnerBox.name;
        theBoard.quantityOFlawX = 0;
        theBoard.quantityOFlawY = 0;
        theBoard.quantityOFlawZ = 0;
        theBoard.totalQuantity = 0;
        theBoard.containerSpace = {
            name : "containerSpace",
            dimensionX : theContainer.dimensionX,
            dimensionY : theContainer.dimensionY,
            dimensionZ : theContainer.dimensionZ,
            volume : theContainer.volume        
        };
        theBoard.fillSpace = {
            name : 'fillSpace',
                dimensionX : 0,
                dimensionY : 0,
                dimensionZ : 0,
                volume : 0
        };
        theBoard.freeSpace = {
            name : 'freeSpace',
                dimensionX : 0,
                dimensionY : 0,
                dimensionZ : 0,
                volume : 0
        };
        theBoard.volumeContainer = theContainer.volume;
        theBoard.volumeFilling = 0;
        theBoard.percentageOfVolumeFilling = 0;
    } else { // Calcul Board
        let reference = theContainer.name + " - " + theInnerBox.name;
        let quantityOFlawX = Math.floor (theContainer.dimensionX / theInnerBox.dimensionX);
        let quantityOFlawY = Math.floor (theContainer.dimensionY / theInnerBox.dimensionY);
        let quantityOFlawZ = Math.floor (theContainer.dimensionZ / theInnerBox.dimensionZ);
        let totalQuantity = quantityOFlawX * quantityOFlawY * quantityOFlawZ;
        let fillSpace = {
            name : 'fillSpace',
                dimensionX : theInnerBox.dimensionX * quantityOFlawX,
                dimensionY : theInnerBox.dimensionY * quantityOFlawY,
                dimensionZ : theInnerBox.dimensionZ * quantityOFlawZ,
                volume : (theInnerBox.dimensionX * quantityOFlawX)*(theInnerBox.dimensionY * quantityOFlawY)*(theInnerBox.dimensionZ * quantityOFlawZ)
        };
        let freeSpace = {
            name : 'freeSpace',
                dimensionX : theContainer.dimensionX - fillSpace.dimensionX,
                dimensionY : theContainer.dimensionY - fillSpace.dimensionY,
                dimensionZ : theContainer.dimensionZ - fillSpace.dimensionZ,
                volume : (theContainer.dimensionX - fillSpace.dimensionX) * (theContainer.dimensionY - fillSpace.dimensionY) * (theContainer.dimensionZ - fillSpace.dimensionZ)
        };
        let volumeFilling = theInnerBox.volume * totalQuantity;
        let percentageOfVolumeFilling = +(((Math.ceil(((theInnerBox.volume * totalQuantity)/theContainer.volume)*10000))/100).toFixed(2));

        theBoard = {};
        theBoard.reference = reference,
        theBoard.quantityOFlawX = quantityOFlawX,
        theBoard.quantityOFlawY = quantityOFlawY,
        theBoard.quantityOFlawZ = quantityOFlawZ,
        theBoard.totalQuantity = totalQuantity,
        theBoard.containerSpace = {
            name : "containerSpace",
            dimensionX : theContainer.dimensionX,
            dimensionY : theContainer.dimensionY,
            dimensionZ : theContainer.dimensionZ,
            volume : theContainer.volume        
        };
        theBoard.fillSpace = fillSpace,
        theBoard.freeSpace = freeSpace
        theBoard.volumeContainer = theContainer.volume;
        theBoard.volumeFilling = volumeFilling;
        theBoard.percentageOfVolumeFilling = percentageOfVolumeFilling;
    }
    return theBoard;
}
function printSolution(theBoardToPrint) {
    console.log("theBoardToPrint", theBoardToPrint);

    let centerSpaceTotalQuantity; 
    if (theBoardToPrint.totalQuantity === undefined) {centerSpaceTotalQuantity = 0;} else {centerSpaceTotalQuantity = theBoardToPrint.totalQuantity}
    centerGroupQuantity.innerText = centerSpaceTotalQuantity;
    if (theBoardToPrint.reference == undefined) {centerGroupWay.innerText = "__";}else {centerGroupWay.innerText = theBoardToPrint.reference.substr(theBoardToPrint.reference.length - 4);}

    let frontSpaceTotalQuantity;
    if (theBoardToPrint.frontSpace == undefined) {frontSpaceTotalQuantity = 0;}else {frontSpaceTotalQuantity = theBoardToPrint.frontSpace.totalQuantity;}
    frontGroupQuantity.innerText = frontSpaceTotalQuantity;
    if (theBoardToPrint.frontSpace == undefined) {frontGroupWay.innerText = "__";}else {frontGroupWay.innerText = theBoardToPrint.frontSpace.reference.substr(theBoardToPrint.frontSpace.reference.length - 4);}

    let sideSpaceTotalQuantity;
    if (theBoardToPrint.sideSpace == undefined) {sideSpaceTotalQuantity = 0;}else {sideSpaceTotalQuantity = theBoardToPrint.sideSpace.totalQuantity;}
    sideGroupQuantity.innerText = sideSpaceTotalQuantity;
    if (theBoardToPrint.sideSpace == undefined) {sideGroupWay.innerText = "__";}else {sideGroupWay.innerText = theBoardToPrint.sideSpace.reference.substr(theBoardToPrint.sideSpace.reference.length - 4);}

    let topSpaceTotalQuantity;
    if (theBoardToPrint.topSpace == undefined) {topSpaceTotalQuantity = 0;}else {topSpaceTotalQuantity = theBoardToPrint.topSpace.totalQuantity;}
    topGroupQuantity.innerText = topSpaceTotalQuantity;
    if (theBoardToPrint.topSpace == undefined) {topGroupWay.innerText = "__";}else {topGroupWay.innerText = theBoardToPrint.topSpace.reference.substr(theBoardToPrint.topSpace.reference.length - 4);}

    let totalSum = centerSpaceTotalQuantity + frontSpaceTotalQuantity + topSpaceTotalQuantity; 
    totalQuantity.innerText = totalSum;

    let totalVolumeFillingPercent;
    let centerVolumeFilling;
    if (theBoardToPrint.volumeFilling == undefined) {centerVolumeFilling = 0} else {centerVolumeFilling = theBoardToPrint.volumeFilling}
    let frontVolumeFilling;
    if (theBoardToPrint.frontSpace == undefined) {frontVolumeFilling = 0} else {frontVolumeFilling = theBoardToPrint.frontSpace.volumeFilling}
    let sideVolumeFilling;
    if (theBoardToPrint.sideSpace == undefined) {sideVolumeFilling = 0} else {sideVolumeFilling = theBoardToPrint.sideSpace.volumeFilling}
    let topVolumeFilling;
    if (theBoardToPrint.topSpace == undefined) {topVolumeFilling = 0} else {topVolumeFilling = theBoardToPrint.topSpace.volumeFilling}
    totalVolumeFillingPercent = +(((Math.ceil(((centerVolumeFilling + frontVolumeFilling + sideVolumeFilling + topVolumeFilling)/theBoardToPrint.volumeContainer)*10000))/100).toFixed(2));
    volumePercent.innerText = totalVolumeFillingPercent + "%";
}

function calculRule1() {
    /* ___,;:! calculRule1 !:;,___
    *   Appel calculBoard pour charger la table des calculs => theBoard {...}
    *   Converti la table des calculs pour l'affichage des résultats => resultRule1 {...}
    *             * fait appel à la fonction "loadResultRule1" qui charge les paramètres du nouvel objet "resultRule1"
    *   Affiche les résultats sur le tableau HTML avec la methode de l'objet => resultRule1.letsPrint()
     */
    console.log("calculRule1");
        resultRule1 = loadResultRule1(calculBoard(theCardboardBox,theBox.way1));
        resultRule1.letsPrint();

    function loadResultRule1(theBoardToPrint) {
        let quantityInCenter = theBoardToPrint.totalQuantity;
        let senseInCenter = theBoardToPrint.reference.substr(theBoardToPrint.reference.length - 4);
        let quantityInFront = 0;
        let senseInFront = "__";
        let quantityInSide = 0;
        let senseInSide = "__";
        let quantityInTop = 0;
        let senseInTop = "__"; 
        let totalOfQuantities = quantityInCenter;
        let totalVolumePercent =  +(((Math.ceil((theBoardToPrint.volumeFilling/theBoardToPrint.volumeContainer)*10000))/100).toFixed(2)) + "%";
        return new TheBoardToPrint (quantityInCenter,senseInCenter,  quantityInFront,senseInFront,  quantityInSide,senseInSide,  quantityInTop,senseInTop,  totalOfQuantities,totalVolumePercent);
    }
}
function calculRule2() {
    /* ___,;:! calculRule2 !:;,___
    *   Appel calculBoard pour charger la table des calculs  avec les sens de rangement "debout"=> theBoard {...}
                * charge les tables dans la liste => selectList
    *   Choisi la bonne solution dans selectList
    *   Converti la table des calculs choisie pour l'affichage des résultats => resultRule1 {...}
    *           * fait appel à la fonction "loadResultRule2" qui charge les paramètres du nouvel objet "resultRule1"
    *   Affiche les résultats sur le tableau HTML avec la methode de l'objet => resultRule2.letsPrint()
    */
    console.log("calculRule2");
    let selectList = [];
    selectList.push(calculBoard(theCardboardBox,theBox.way1));
    selectList.push(calculBoard(theCardboardBox,theBox.way2));
    // console.log("selectList",selectList);
    if (selectList[0].totalQuantity >= selectList[1].totalQuantity) { // choose way1
        resultRule2 = loadResultRule2(selectList[0]); 
    } else { // choose way2
        resultRule2 = loadResultRule2(selectList[1]);
    }
    resultRule2.letsPrint();

    function loadResultRule2(theBoardToPrint) {
        let quantityInCenter = theBoardToPrint.totalQuantity;
        let senseInCenter = theBoardToPrint.reference.substr(theBoardToPrint.reference.length - 4);
        let quantityInFront = 0;
        let senseInFront = "__";
        let quantityInSide = 0;
        let senseInSide = "__";
        let quantityInTop = 0;
        let senseInTop = "__"; 
        let totalOfQuantities = quantityInCenter;
        let totalVolumePercent =  +(((Math.ceil((theBoardToPrint.volumeFilling/theBoardToPrint.volumeContainer)*10000))/100).toFixed(2)) + "%";
        return new TheBoardToPrint (quantityInCenter,senseInCenter,  quantityInFront,senseInFront,  quantityInSide,senseInSide,  quantityInTop,senseInTop,  totalOfQuantities,totalVolumePercent);
    }
}
function calculRule3 () {
    console.log("RUN calculRule3");
    let selectList = [];
    let waysList = [theBox.way1,theBox.way2];
    waysList.forEach(way => {
        let theBoardRule3 = calculBoard(theCardboardBox,way);
        selectList.push(fillingTournementV2(theBoardRule3, "rule3"))
    });
    console.log("selectList", selectList);
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
    console.log("result", result);
    resultRule3 = loadResultRule3(result);
    resultRule3.letsPrint();

    function loadResultRule3(result) {
        let quantityInCenter = result[0].totalQuantity;
        let senseInCenter = result[0].reference.substr(result[0].reference.length - 4);
        let quantityInFront = result[1].totalQuantity;
        let senseInFront = result[1].reference.substr(result[1].reference.length - 4);
        if (quantityInFront == 0) {senseInFront = "__";}
        let quantityInSide = result[2].totalQuantity;
        let senseInSide = result[2].reference.substr(result[2].reference.length - 4);
        if (quantityInSide == 0) {senseInSide = "__";}
        let quantityInTop = result[3].totalQuantity;
        let senseInTop = result[3].reference.substr(result[3].reference.length - 4);
        if (quantityInTop == 0) {senseInTop = "__";}
        let totalOfQuantities = quantityInCenter + quantityInFront + quantityInSide + quantityInTop;
        let totalVolumePercent =  +(((Math.ceil(((result[0].volumeFilling + result[1].volumeFilling + result[2].volumeFilling + result[3].volumeFilling)/result[0].volumeContainer)*10000))/100).toFixed(2)) + "%";
        return new TheBoardToPrint (quantityInCenter,senseInCenter,  quantityInFront,senseInFront,  quantityInSide,senseInSide,  quantityInTop,senseInTop,  totalOfQuantities,totalVolumePercent);
    }
}
function calculRule4() {
    /* ___,;:! calculRule4 !:;,___
    *   comment here!!!!!!
    */
    console.log("calculRule4");
    let selectList = [];
    let waysList = [theBox.way1,theBox.way2,theBox.way3,theBox.way4,theBox.way5,theBox.way6];
    waysList.forEach(way => {
        let theBoardRule4 = calculBoard(theCardboardBox,way);
        selectList.push(theBoardRule4)
    });
    console.log("selectList",selectList);
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
        let quantityInCenter = theBoardToPrint.totalQuantity;
        let senseInCenter = theBoardToPrint.reference.substr(theBoardToPrint.reference.length - 4);
        let quantityInFront = 0;
        let senseInFront = "__";
        let quantityInSide = 0;
        let senseInSide = "__";
        let quantityInTop = 0;
        let senseInTop = "__"; 
        let totalOfQuantities = quantityInCenter;
        let totalVolumePercent =  +(((Math.ceil((theBoardToPrint.volumeFilling/theBoardToPrint.volumeContainer)*10000))/100).toFixed(2)) + "%";
        return new TheBoardToPrint (quantityInCenter,senseInCenter,  quantityInFront,senseInFront,  quantityInSide,senseInSide,  quantityInTop,senseInTop,  totalOfQuantities,totalVolumePercent);
    }
}
function calculRule5 () {
    console.log("RUN calculRule5");
    let selectList = [];
    let waysList = [theBox.way1,theBox.way2,theBox.way3,theBox.way4,theBox.way5,theBox.way6];
    waysList.forEach(way => {
        let theBoardRule5 = calculBoard(theCardboardBox,way);
        selectList.push(fillingTournementV2(theBoardRule5, "rule5"))
    });
    console.log("selectList", selectList);
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
    console.log("result", result);
    resultRule5 = loadResultRule5(result);
    resultRule5.letsPrint();

    function loadResultRule5(result) {
        let quantityInCenter = result[0].totalQuantity;
        let senseInCenter = result[0].reference.substr(result[0].reference.length - 4);
        let quantityInFront = result[1].totalQuantity;
        let senseInFront = result[1].reference.substr(result[1].reference.length - 4);
        if (quantityInFront == 0) {senseInFront = "__";}
        let quantityInSide = result[2].totalQuantity;
        let senseInSide = result[2].reference.substr(result[2].reference.length - 4);
        if (quantityInSide == 0) {senseInSide = "__";}
        let quantityInTop = result[3].totalQuantity;
        let senseInTop = result[3].reference.substr(result[3].reference.length - 4);
        if (quantityInTop == 0) {senseInTop = "__";}
        let totalOfQuantities = quantityInCenter + quantityInFront + quantityInSide + quantityInTop;
        let totalVolumePercent =  +(((Math.ceil(((result[0].volumeFilling + result[1].volumeFilling + result[2].volumeFilling + result[3].volumeFilling)/result[0].volumeContainer)*10000))/100).toFixed(2)) + "%";
        return new TheBoardToPrint (quantityInCenter,senseInCenter,  quantityInFront,senseInFront,  quantityInSide,senseInSide,  quantityInTop,senseInTop,  totalOfQuantities,totalVolumePercent);
    }
}

function fillingTournementV2(theBoard, rule) {
    console.log("RUN fillingTournement");
    console.log("theBoard",theBoard,"rule :",rule);
    let containerSpace = theBoard.containerSpace;
    let fillSpace = theBoard.fillSpace;
    let freeSpace = theBoard.freeSpace;
    
    let containersList;
    let waysList;
    let listOfChooses = [];
    if (rule == "rule3") { // définir containersList et waysList
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
            theBox.way1,
            theBox.way2
        ];
    }
    if (rule == "rule5") { // définir containersList et waysList
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
            theBox.way1,
            theBox.way2,
            theBox.way3,
            theBox.way4,
            theBox.way5,
            theBox.way6
        ];
    }
    containersList.forEach(container => {
        let faceSpace = tryWaysListTournement(tryWaysList(container.faceFreeSpace,waysList));
        let sideSpace = tryWaysListTournement(tryWaysList(container.sideFreeSpace,waysList));
        let topSpace = tryWaysListTournement(tryWaysList(container.topFreeSpace,waysList));
        listOfChooses.push([theBoard,faceSpace,sideSpace,topSpace]);
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
}
function tryWaysList(theContainer,waysList) {
    console.log("RUN tryWaysList");
    let tryWayListResult = [];
    waysList.forEach(elementWaysList => {
        tryWayListResult.push(calculBoard(theContainer,elementWaysList));           
    });
    console.log("RETURN", tryWayListResult);
    return tryWayListResult;
}
function tryWaysListTournement(list) {
    console.log("hello tryWaysListTournement");
    // console.log("list 527", list);
    let listOfTotalQuantity = [];
    let biggestTotalQuantity;
    let result;
    list.forEach(element => {listOfTotalQuantity.push(element.totalQuantity);});
    biggestTotalQuantity = Math.max(...listOfTotalQuantity);
    // console.log("listOfTotalQuantity 532", listOfTotalQuantity);
    // console.log("biggestTotalQuantity 533", biggestTotalQuantity);
    for (let index = list.length-1; index >= 0; index--) {
        const element = list[index].totalQuantity;
        // console.log("element 537", element, "index 537", index ,"list[index]" , list[index]);
        if (element == biggestTotalQuantity) {
            result = list[index];
        }
    }
    // console.log("result 541", result);
    return result;
}

//             let firstFaceSideTop = ['firstFaceSideTop',['faceSpace',dimVacXYZ[1],dimSpaceXYZ[2],dimSpaceXYZ[3]],['sideSpace',dimGroupXYZ[1],dimVacXYZ[2],dimSpaceXYZ[3]],['topSpace',dimGroupXYZ[1],dimGroupXYZ[2],dimVacXYZ[3]]];
//             let firstSideFaceTop = ['firstSideFaceTop',['faceSpace',dimVacXYZ[1],dimGroupXYZ[2],dimSpaceXYZ[3]],['sideSpace',dimSpaceXYZ[1],dimVacXYZ[2],dimSpaceXYZ[3]],['topSpace',dimGroupXYZ[1],dimGroupXYZ[2],dimVacXYZ[3]]];


// _,;:!!:;,_ PROGRAMMING _,;:!!:;,_

// calculateButton - => faire un débug des valeurs à 0 ou undefined
calculateButton.addEventListener('click', () => 
{   console.log("RUN caculateButton");
    theCardboardBox = new Container('theCardboardBox', cardboardInteriorSpaceDimensionX.value, cardboardInteriorSpaceDimensionY.value, cardboardInteriorSpaceDimensionZ.value);
    theBox = new Inner('theBox', boxSideWidthDimensionA.value, boxFrontWidthDimensionB.value, boxHeightDimensionC.value);
    console.log('theCardboardBox',theCardboardBox,'theBox',theBox);
    calculator();
    console.log("THE END caculateButton");
});
lienInfo.addEventListener('click', () => 
{   console.log("RUN lienInfo");
    
});

function calculator() {
    if (rule1.checked) { // "Boxes stacked in the initial sense" : Test way1.
        console.log("RUN calculator.rule1.checked");
        calculRule1()
    } else
    if (rule2.checked) { // "Boxes upright, stacked in the same direction" : Test way1, way2.
        console.log("RUN calculator.rule2.checked");
        calculRule2()
    } else 
    if (rule3.checked) { // "Boxes upright, fill all the spaces with boxes in the next way" : Test way1++, way2++.
        console.log("RUN calculator.rule3.checked");
        calculRule3();   
    }
    if (rule4.checked) { // "All the possibilities, stacked in the same direction" : Test way1, way2, way3, way5, way6.
        console.log("RUN calculator.rule4.checked");
        calculRule4();   
    }
    if (rule5.checked) { // "All the possibilities, fill all the spaces with boxes in any direction" : Test way1++, way2++, way3++, way5++, way6++.
        console.log("RUN calculator.rule5.checked");
        calculRule5();   
    }
}





// window.alert("error");
