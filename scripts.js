(function() {

const cube = [document.querySelector(".cube"), document.querySelector(".cube2")];
const rollButton = document.querySelector('.rollButton');
const endGame = document.querySelector('.endGame');
const buy = document.querySelector('.buy');
    
let roll = [0, 0];
let money = [1500, 1500, 1500];

let destyny;
let ratio = 1;
let location = [0, 0, 0];
let jail = [0, 0, 0];

const player1 = document.querySelector(".player1");
player1.textContent = money[0];
    
const player2 = document.querySelector(".player2");
player2.textContent = money[1];
    
const player3 = document.querySelector(".player3");
player3.textContent = money[2];
    
const oatput1 = document.querySelector('.oatput1'),
    oatput2 = document.querySelector('.oatput2'),
    oatput3 = document.querySelector('.oatput3'),
    oatput4 = document.querySelector('.oatput4'),
    oatput5 = document.querySelector('.oatput5'),
    oatput6 = document.querySelector('.oatput6'),
    oatput7 = document.querySelector('.oatput7'),
    oatput8 = document.querySelector('.oatput8'),
    oatput9 = document.querySelector('.oatput9'),
    oatput10 = document.querySelector('.oatput10'),
    oatput11 = document.querySelector('.oatput11'),
    oatput12 = document.querySelector('.oatput12'),
    oatput13 = document.querySelector('.oatput13'),
    oatput14 = document.querySelector('.oatput14'),
    oatput15 = document.querySelector('.oatput15'),
    oatput16 = document.querySelector('.oatput16');

const card1 = document.querySelector('.card1'),
    card2 = document.querySelector('.card2'),
    card3 = document.querySelector('.card3'),
    card4 = document.querySelector('.card4'),
    card5 = document.querySelector('.card5'),
    card6 = document.querySelector('.card6'),
    card7 = document.querySelector('.card7'),
    card8 = document.querySelector('.card8'),
    card9 = document.querySelector('.card9'),
    card10 = document.querySelector('.card10'),
    card11 = document.querySelector('.card11'),
    card12 = document.querySelector('.card12'),
    card13 = document.querySelector('.card13'),
    card14 = document.querySelector('.card14'),
    card15 = document.querySelector('.card15'),
    card16 = document.querySelector('.card16');
    card17 = document.querySelector('.card17');

const magnification = document.querySelector(".magnification");
  
const consol = document.querySelector('.consol');
let logs = []; let num = 0;

function Write(text, color) {
    logs[num] = document.createElement('p');
    consol.appendChild(logs[num]);
    logs[num].textContent = text;
    if (color == 0){
        logs[num].classList.add('green');
    }
    if (color == 1){
        logs[num].classList.add('red2');
    }
    if (color == 2){
        logs[num].classList.add('blue3');
    }
    logs[num].scrollIntoView();
    num = num + 1;
}

//// fields
let fields = [
    {
        player: document.querySelector(".play1")
    },
    {
        player: document.querySelector(".play2"),
        style: document.querySelector(".field2"),
        ownerstyle: document.querySelector(".owner2"),
        houseStyle1: document.querySelector(".house1p2"),
        houseStyle2: document.querySelector(".house2p2"),
        houseStyle3: document.querySelector(".house3p2"),
        houseStyle4: document.querySelector(".house4p2"),
        buyStyle: document.querySelector(".buyhouse2"),
        mortgageStyle: document.querySelector(".mortgage2"),
        price: 60,
        
        rent: 2,
        rentAll: 4,
        rent1house: 10,
        rent2house: 30,
        rent3house: 90,
        rent4house: 160,
        rentHotel: 250,

        priceHome: 50,
        priceHotel: 50,

        mortgage: 30,
        mortgageRepayment: 33,

        owner: -1,
        hotel: 0,
        house: 0,
        mortgageStatus: 0,
    },
    {
        player: document.querySelector(".play3")
    },
    {   
        player: document.querySelector(".play4"),
        style: document.querySelector(".field4"),
        ownerstyle: document.querySelector(".owner4"),
        houseStyle1: document.querySelector(".house1p4"),
        houseStyle2: document.querySelector(".house2p4"),
        houseStyle3: document.querySelector(".house3p4"),
        houseStyle4: document.querySelector(".house4p4"),
        buyStyle: document.querySelector(".buyhouse4"),
        mortgageStyle: document.querySelector(".mortgage4"),
        price: 60,
        
        rent: 4,
        rentAll: 8,
        rent1house: 20,
        rent2house: 60,
        rent3house: 180,
        rent4house: 320,
        rentHotel: 450,

        priceHome: 50,
        priceHotel: 50,

        mortgage: 30,
        mortgageRepayment: 33,

        owner: -1,
        hotel: 0,
        house: 0,
        mortgageStatus: 0,
    },
    {
        player: document.querySelector(".play5")
    },
    {
        player: document.querySelector(".play6"),
        style: document.querySelector(".field6"),
        ownerstyle: document.querySelector(".owner6"),
        mortgageStyle: document.querySelector(".mortgage6"),
        price: 200,
        
        rent: 25,
        rent2: 50,
        rent3: 100,
        rent4: 200,

        mortgage: 100,
        mortgageRepayment: 110,

        owner: -1,
        mortgageStatus: 0,
    },
    {
        player: document.querySelector(".play7"),
        style: document.querySelector(".field7"),
        ownerstyle: document.querySelector(".owner7"),
        houseStyle1: document.querySelector(".house1p7"),
        houseStyle2: document.querySelector(".house2p7"),
        houseStyle3: document.querySelector(".house3p7"),
        houseStyle4: document.querySelector(".house4p7"),
        buyStyle: document.querySelector(".buyhouse7"),
        mortgageStyle: document.querySelector(".mortgage7"),
        price: 100,
        
        rent: 6,
        rentAll: 12,
        rent1house: 30,
        rent2house: 90,
        rent3house: 270,
        rent4house: 400,
        rentHotel: 550,

        priceHome: 50,
        priceHotel: 50,

        mortgage: 50,
        mortgageRepayment: 55,

        owner: -1,
        hotel: 0,
        house: 0,
        mortgageStatus: 0,
    },
    {
        player: document.querySelector(".play8")
    },
    {
        player: document.querySelector(".play9"),
        style: document.querySelector(".field9"),
        ownerstyle: document.querySelector(".owner9"),
        houseStyle1: document.querySelector(".house1p9"),
        houseStyle2: document.querySelector(".house2p9"),
        houseStyle3: document.querySelector(".house3p9"),
        houseStyle4: document.querySelector(".house4p9"),
        buyStyle: document.querySelector(".buyhouse9"),
        mortgageStyle: document.querySelector(".mortgage9"),
        price: 100,
        
        rent: 6,
        rentAll: 12,
        rent1house: 30,
        rent2house: 90,
        rent3house: 270,
        rent4house: 400,
        rentHotel: 550,

        priceHome: 50,
        priceHotel: 50,

        mortgage: 50,
        mortgageRepayment: 55,

        owner: -1,
        hotel: 0,
        house: 0,
        mortgageStatus: 0,
    },
    {
        player: document.querySelector(".play10"),
        style: document.querySelector(".field10"),
        ownerstyle: document.querySelector(".owner10"),
        houseStyle1: document.querySelector(".house1p10"),
        houseStyle2: document.querySelector(".house2p10"),
        houseStyle3: document.querySelector(".house3p10"),
        houseStyle4: document.querySelector(".house4p10"),
        buyStyle: document.querySelector(".buyhouse10"),
        mortgageStyle: document.querySelector(".mortgage10"),
        price: 120,
        
        rent: 8,
        rentAll: 16,
        rent1house: 40,
        rent2house: 100,
        rent3house: 300,
        rent4house: 450,
        rentHotel: 600,

        priceHome: 50,
        priceHotel: 50,

        mortgage: 60,
        mortgageRepayment: 66,

        owner: -1,
        hotel: 0,
        house: 0,
        mortgageStatus: 0,
    },
    {
        player: document.querySelector(".play11")
    },
    {
        player: document.querySelector(".play12"),
        style: document.querySelector(".field12"),
        ownerstyle: document.querySelector(".owner12"),
        houseStyle1: document.querySelector(".house1p12"),
        houseStyle2: document.querySelector(".house2p12"),
        houseStyle3: document.querySelector(".house3p12"),
        houseStyle4: document.querySelector(".house4p12"),
        buyStyle: document.querySelector(".buyhouse12"),
        mortgageStyle: document.querySelector(".mortgage12"),
        price: 140,
        
        rent: 10,
        rentAll: 20,
        rent1house: 50,
        rent2house: 150,
        rent3house: 450,
        rent4house: 625,
        rentHotel: 750,

        priceHome: 100,
        priceHotel: 100,

        mortgage: 70,
        mortgageRepayment: 77,

        owner: -1,
        hotel: 0,
        house: 0,
        mortgageStatus: 0,
    },
    {
        player: document.querySelector(".play13"),
        style: document.querySelector(".field13"),
        ownerstyle: document.querySelector(".owner13"),
        mortgageStyle: document.querySelector(".mortgage13"),
        price: 150,
        
        mortgage: 75,
        mortgageRepayment: 83,

        owner: -1,
        mortgageStatus: 0,
    },
    {
        player: document.querySelector(".play14"),
        style: document.querySelector(".field14"),
        ownerstyle: document.querySelector(".owner14"),
        houseStyle1: document.querySelector(".house1p14"),
        houseStyle2: document.querySelector(".house2p14"),
        houseStyle3: document.querySelector(".house3p14"),
        houseStyle4: document.querySelector(".house4p14"),
        buyStyle: document.querySelector(".buyhouse14"),
        mortgageStyle: document.querySelector(".mortgage14"),
        price: 140,
        
        rent: 10,
        rentAll: 20,
        rent1house: 50,
        rent2house: 150,
        rent3house: 450,
        rent4house: 625,
        rentHotel: 750,

        priceHome: 100,
        priceHotel: 100,

        mortgage: 70,
        mortgageRepayment: 77,

        owner: -1,
        hotel: 0,
        house: 0,
        mortgageStatus: 0,
    },   
    {
        player: document.querySelector(".play15"),
        style: document.querySelector(".field15"),
        ownerstyle: document.querySelector(".owner15"),
        houseStyle1: document.querySelector(".house1p15"),
        houseStyle2: document.querySelector(".house2p15"),
        houseStyle3: document.querySelector(".house3p15"),
        houseStyle4: document.querySelector(".house4p15"),
        buyStyle: document.querySelector(".buyhouse15"),
        mortgageStyle: document.querySelector(".mortgage15"),
        price: 160,
        
        rent: 12,
        rentAll: 24,
        rent1house: 60,
        rent2house: 180,
        rent3house: 500,
        rent4house: 700,
        rentHotel: 900,

        priceHome: 100,
        priceHotel: 100,

        mortgage: 80,
        mortgageRepayment: 88,

        owner: -1,
        hotel: 0,
        house: 0,
        mortgageStatus: 0,
    },
    {
        player: document.querySelector(".play16"),
        style: document.querySelector(".field16"),
        ownerstyle: document.querySelector(".owner16"),
        mortgageStyle: document.querySelector(".mortgage16"),
        price: 200,
        
        rent: 25,
        rent2: 50,
        rent3: 100,
        rent4: 200,

        mortgage: 100,
        mortgageRepayment: 110,

        owner: -1,
        mortgageStatus: 0,
    },
    {   
        player: document.querySelector(".play17"),
        style: document.querySelector(".field17"),
        ownerstyle: document.querySelector(".owner17"),
        houseStyle1: document.querySelector(".house1p17"),
        houseStyle2: document.querySelector(".house2p17"),
        houseStyle3: document.querySelector(".house3p17"),
        houseStyle4: document.querySelector(".house4p17"),
        buyStyle: document.querySelector(".buyhouse17"),
        mortgageStyle: document.querySelector(".mortgage17"),
        price: 180,
        
        rent: 14,
        rentAll: 28,
        rent1house: 70,
        rent2house: 200,
        rent3house: 550,
        rent4house: 750,
        rentHotel: 950,

        priceHome: 100,
        priceHotel: 100,

        mortgage: 90,
        mortgageRepayment: 99,

        owner: -1,
        hotel: 0,
        house: 0,
        mortgageStatus: 0,
    },
    {
        player: document.querySelector(".play18")
    },   
    {
        player: document.querySelector(".play19"),
        style: document.querySelector(".field19"),
        ownerstyle: document.querySelector(".owner19"),
        houseStyle1: document.querySelector(".house1p19"),
        houseStyle2: document.querySelector(".house2p19"),
        houseStyle3: document.querySelector(".house3p19"),
        houseStyle4: document.querySelector(".house4p19"),
        buyStyle: document.querySelector(".buyhouse19"),
        mortgageStyle: document.querySelector(".mortgage19"),
        price: 180,
        
        rent: 14,
        rentAll: 28,
        rent1house: 70,
        rent2house: 200,
        rent3house: 550,
        rent4house: 750,
        rentHotel: 950,

        priceHome: 100,
        priceHotel: 100,

        mortgage: 90,
        mortgageRepayment: 99,

        owner: -1,
        hotel: 0,
        house: 0,
        mortgageStatus: 0,
    },  
    {
        player: document.querySelector(".play20"),
        style: document.querySelector(".field20"),
        ownerstyle: document.querySelector(".owner20"),
        houseStyle1: document.querySelector(".house1p20"),
        houseStyle2: document.querySelector(".house2p20"),
        houseStyle3: document.querySelector(".house3p20"),
        houseStyle4: document.querySelector(".house4p20"),
        buyStyle: document.querySelector(".buyhouse20"),
        mortgageStyle: document.querySelector(".mortgage20"),
        price: 200,
        
        rent: 16,
        rentAll: 32,
        rent1house: 80,
        rent2house: 220,
        rent3house: 600,
        rent4house: 800,
        rentHotel: 1000,

        priceHome: 100,
        priceHotel: 100,

        mortgage: 100,
        mortgageRepayment: 110,

        owner: -1,
        hotel: 0,
        house: 0,
        mortgageStatus: 0,
    },
    {
        player: document.querySelector(".play21")
    },
    {
        player: document.querySelector(".play22"),
        style: document.querySelector(".field22"),
        ownerstyle: document.querySelector(".owner22"),
        houseStyle1: document.querySelector(".house1p22"),
        houseStyle2: document.querySelector(".house2p22"),
        houseStyle3: document.querySelector(".house3p22"),
        houseStyle4: document.querySelector(".house4p22"),
        buyStyle: document.querySelector(".buyhouse22"),
        mortgageStyle: document.querySelector(".mortgage22"),
        price: 220,
        
        rent: 18,
        rentAll: 36,
        rent1house: 90,
        rent2house: 250,
        rent3house: 700,
        rent4house: 875,
        rentHotel: 1050,

        priceHome: 150,
        priceHotel: 150,

        mortgage: 110,
        mortgageRepayment: 121,

        owner: -1,
        hotel: 0,
        house: 0,
        mortgageStatus: 0,
    },
    {
        player: document.querySelector(".play23")
    },
    {
        player: document.querySelector(".play24"),
        style: document.querySelector(".field24"),
        ownerstyle: document.querySelector(".owner24"),
        houseStyle1: document.querySelector(".house1p24"),
        houseStyle2: document.querySelector(".house2p24"),
        houseStyle3: document.querySelector(".house3p24"),
        houseStyle4: document.querySelector(".house4p24"),
        buyStyle: document.querySelector(".buyhouse24"),
        mortgageStyle: document.querySelector(".mortgage24"),
        price: 220,
        
        rent: 18,
        rentAll: 36,
        rent1house: 90,
        rent2house: 250,
        rent3house: 700,
        rent4house: 875,
        rentHotel: 1050,

        priceHome: 150,
        priceHotel: 150,

        mortgage: 110,
        mortgageRepayment: 121,

        owner: -1,
        hotel: 0,
        house: 0,
        mortgageStatus: 0,
    },
    {
        player: document.querySelector(".play25"),
        style: document.querySelector(".field25"),
        ownerstyle: document.querySelector(".owner25"),
        houseStyle1: document.querySelector(".house1p25"),
        houseStyle2: document.querySelector(".house2p25"),
        houseStyle3: document.querySelector(".house3p25"),
        houseStyle4: document.querySelector(".house4p25"),
        buyStyle: document.querySelector(".buyhouse25"),
        mortgageStyle: document.querySelector(".mortgage25"),
        price: 240,
        
        rent: 20,
        rentAll: 40,
        rent1house: 100,
        rent2house: 300,
        rent3house: 750,
        rent4house: 925,
        rentHotel: 1100,

        priceHome: 150,
        priceHotel: 150,

        mortgage: 120,
        mortgageRepayment: 132,

        owner: -1,
        hotel: 0,
        house: 0,
        mortgageStatus: 0,
    },
    {
        player: document.querySelector(".play26"),
        style: document.querySelector(".field26"),
        ownerstyle: document.querySelector(".owner26"),
        mortgageStyle: document.querySelector(".mortgage26"),
        price: 200,
        
        rent: 25,
        rent2: 50,
        rent3: 100,
        rent4: 200,

        mortgage: 100,
        mortgageRepayment: 110,

        owner: -1,
        mortgageStatus: 0,
    },
    {
        player: document.querySelector(".play27"),
        style: document.querySelector(".field27"),
        ownerstyle: document.querySelector(".owner27"),
        houseStyle1: document.querySelector(".house1p27"),
        houseStyle2: document.querySelector(".house2p27"),
        houseStyle3: document.querySelector(".house3p27"),
        houseStyle4: document.querySelector(".house4p27"),
        buyStyle: document.querySelector(".buyhouse27"),
        mortgageStyle: document.querySelector(".mortgage27"),
        price: 260,
        
        rent: 22,
        rentAll: 44,
        rent1house: 110,
        rent2house: 330,
        rent3house: 800,
        rent4house: 975,
        rentHotel: 1150,

        priceHome: 150,
        priceHotel: 150,

        mortgage: 130,
        mortgageRepayment: 143,

        owner: -1,
        hotel: 0,
        house: 0,
        mortgageStatus: 0,
    },
    {
        player: document.querySelector(".play28"),
        style: document.querySelector(".field28"),
        ownerstyle: document.querySelector(".owner28"),
        houseStyle1: document.querySelector(".house1p28"),
        houseStyle2: document.querySelector(".house2p28"),
        houseStyle3: document.querySelector(".house3p28"),
        houseStyle4: document.querySelector(".house4p28"),
        buyStyle: document.querySelector(".buyhouse28"),
        mortgageStyle: document.querySelector(".mortgage28"),
        price: 260,
        
        rent: 22,
        rentAll: 44,
        rent1house: 110,
        rent2house: 330,
        rent3house: 800,
        rent4house: 975,
        rentHotel: 1150,

        priceHome: 150,
        priceHotel: 150,

        mortgage: 130,
        mortgageRepayment: 143,

        owner: -1,
        hotel: 0,
        house: 0,
        mortgageStatus: 0,
    },
    {
        player: document.querySelector(".play29"),
        style: document.querySelector(".field29"),
        ownerstyle: document.querySelector(".owner29"),
        mortgageStyle: document.querySelector(".mortgage29"),
        price: 150,
        
        mortgage: 75,
        mortgageRepayment: 83,

        owner: -1,
        mortgageStatus: 0,
    },
    {
        player: document.querySelector(".play30"),
        style: document.querySelector(".field30"),
        ownerstyle: document.querySelector(".owner30"),
        houseStyle1: document.querySelector(".house1p30"),
        houseStyle2: document.querySelector(".house2p30"),
        houseStyle3: document.querySelector(".house3p30"),
        houseStyle4: document.querySelector(".house4p30"),
        buyStyle: document.querySelector(".buyhouse30"),
        mortgageStyle: document.querySelector(".mortgage30"),
        price: 280,
        
        rent: 24,
        rentAll: 48,
        rent1house: 120,
        rent2house: 360,
        rent3house: 850,
        rent4house: 1025,
        rentHotel: 1200,

        priceHome: 150,
        priceHotel: 150,

        mortgage: 140,
        mortgageRepayment: 154,

        owner: -1,
        hotel: 0,
        house: 0,
        mortgageStatus: 0,
    },
    {
        player: document.querySelector(".play31")
    },
    {
        player: document.querySelector(".play32"),
        style: document.querySelector(".field32"),
        ownerstyle: document.querySelector(".owner32"),
        houseStyle1: document.querySelector(".house1p32"),
        houseStyle2: document.querySelector(".house2p32"),
        houseStyle3: document.querySelector(".house3p32"),
        houseStyle4: document.querySelector(".house4p32"),
        buyStyle: document.querySelector(".buyhouse32"),
        mortgageStyle: document.querySelector(".mortgage32"),
        price: 300,
        
        rent: 26,
        rentAll: 52,
        rent1house: 130,
        rent2house: 390,
        rent3house: 900,
        rent4house: 1100,
        rentHotel: 1275,

        priceHome: 200,
        priceHotel: 200,

        mortgage: 150,
        mortgageRepayment: 165,

        owner: -1,
        hotel: 0,
        house: 0,
        mortgageStatus: 0,
    },
    {
        player: document.querySelector(".play33"),
        style: document.querySelector(".field33"),
        ownerstyle: document.querySelector(".owner33"),
        houseStyle1: document.querySelector(".house1p33"),
        houseStyle2: document.querySelector(".house2p33"),
        houseStyle3: document.querySelector(".house3p33"),
        houseStyle4: document.querySelector(".house4p33"),
        buyStyle: document.querySelector(".buyhouse33"),
        mortgageStyle: document.querySelector(".mortgage33"),
        price: 300,
        
        rent: 26,
        rentAll: 52,
        rent1house: 130,
        rent2house: 390,
        rent3house: 900,
        rent4house: 1100,
        rentHotel: 1275,

        priceHome: 200,
        priceHotel: 200,

        mortgage: 150,
        mortgageRepayment: 165,

        owner: -1,
        hotel: 0,
        house: 0,
        mortgageStatus: 0,
    },
    {
        player: document.querySelector(".play34")
    },
    {
        player: document.querySelector(".play35"),
        style: document.querySelector(".field35"),
        ownerstyle: document.querySelector(".owner35"),
        houseStyle1: document.querySelector(".house1p35"),
        houseStyle2: document.querySelector(".house2p35"),
        houseStyle3: document.querySelector(".house3p35"),
        houseStyle4: document.querySelector(".house4p35"),
        buyStyle: document.querySelector(".buyhouse35"),
        mortgageStyle: document.querySelector(".mortgage35"),
        price: 320,
        
        rent: 28,
        rentAll: 56,
        rent1house: 150,
        rent2house: 450,
        rent3house: 1000,
        rent4house: 1200,
        rentHotel: 1400,

        priceHome: 200,
        priceHotel: 200,

        mortgage: 160,
        mortgageRepayment: 176,

        owner: -1,
        hotel: 0,
        house: 0,
        mortgageStatus: 0,
    },
    {
        player: document.querySelector(".play36"),
        style: document.querySelector(".field36"),
        ownerstyle: document.querySelector(".owner36"),
        mortgageStyle: document.querySelector(".mortgage36"),
        price: 200,
        
        rent: 25,
        rent2: 50,
        rent3: 100,
        rent4: 200,

        mortgage: 100,
        mortgageRepayment: 110,

        owner: -1,
        mortgageStatus: 0,
    },
    {
        player: document.querySelector(".play37")
    },
    {
        player: document.querySelector(".play38"),
        style: document.querySelector(".field38"),
        ownerstyle: document.querySelector(".owner38"),
        houseStyle1: document.querySelector(".house1p38"),
        houseStyle2: document.querySelector(".house2p38"),
        houseStyle3: document.querySelector(".house3p38"),
        houseStyle4: document.querySelector(".house4p38"),
        buyStyle: document.querySelector(".buyhouse38"),
        mortgageStyle: document.querySelector(".mortgage38"),
        price: 350,
        
        rent: 35,
        rentAll: 70,
        rent1house: 175,
        rent2house: 500,
        rent3house: 1100,
        rent4house: 1300,
        rentHotel: 1500,

        priceHome: 200,
        priceHotel: 200,

        mortgage: 175,
        mortgageRepayment: 193,

        owner: -1,
        hotel: 0,
        house: 0,
        mortgageStatus: 0,
    },
    {
        player: document.querySelector(".play39")
    },
    {
        player: document.querySelector(".play40"),
        style: document.querySelector(".field40"),
        ownerstyle: document.querySelector(".owner40"),
        houseStyle1: document.querySelector(".house1p40"),
        houseStyle2: document.querySelector(".house2p40"),
        houseStyle3: document.querySelector(".house3p40"),
        houseStyle4: document.querySelector(".house4p40"),
        buyStyle: document.querySelector(".buyhouse40"),
        mortgageStyle: document.querySelector(".mortgage40"),
        price: 400,
        
        rent: 50,
        rentAll: 100,
        rent1house: 200,
        rent2house: 600,
        rent3house: 1400,
        rent4house: 1700,
        rentHotel: 2000,

        priceHome: 200,
        priceHotel: 200,

        mortgage: 200,
        mortgageRepayment: 220,

        owner: -1,
        hotel: 0,
        house: 0,
        mortgageStatus: 0,
    },
];

document.addEventListener("mouseout", function(e) { 
    magnification.classList.add('hide');
},false);    


for (let i=0; i<fields.length; i++) {
    if(i != 0 && i != 2 && i != 4 && i != 7 && i!= 10 && i != 17 && i != 20 && i != 22 && i != 30 && i != 33 && i != 36 && i != 38) {
        fields[i].style.addEventListener("mouseover", function(e) {
            magnification.classList.remove('bigfield2', 'bigfield4', 'bigfield7', 'bigfield9', 'bigfield10', 'bigfield12', 'bigfield14', 'bigfield15', 'bigfield17','bigfield19', 'bigfield20', 'bigfield22', 'bigfield24', 'bigfield25', 'bigfield27', 'bigfield28', 'bigfield30', 'bigfield32', 'bigfield33', 'bigfield35', 'bigfield38', 'bigfield40', 'bigfield6', 'bigfield16', 'bigfield26', 'bigfield36', 'bigfield13', 'bigfield29');
            magnification.classList.remove('hide');
            card14.classList.add('hide');
            card15.classList.add('hide');
            card16.classList.add('hide');
            oatput14.classList.add('hide');
            oatput15.classList.add('hide');
            oatput16.classList.add('hide');
            card17.classList.add('hide');

            oatput3.classList.remove('hide');
            card3.classList.remove('hide');
            card4.classList.remove('hide');
            card5.classList.remove('hide');
            card6.classList.remove('hide');
            card7.classList.remove('hide');
            card8.classList.remove('hide');
            card9.classList.remove('hide');
            card10.classList.remove('hide');
            card11.classList.remove('hide');
            oatput4.classList.remove('hide');
            oatput5.classList.remove('hide');
            oatput6.classList.remove('hide');
            oatput7.classList.remove('hide');
            oatput8.classList.remove('hide');
            oatput9.classList.remove('hide');
            oatput10.classList.remove('hide');
            oatput11.classList.remove('hide');

            if(i == 1){ magnification.classList.add('bigfield2'); }
            if(i == 3){ magnification.classList.add('bigfield4'); }
            if(i == 5){ magnification.classList.add('bigfield6'); }
            if(i == 6){ magnification.classList.add('bigfield7'); }
            if(i == 8){ magnification.classList.add('bigfield9'); }
            if(i == 9){ magnification.classList.add('bigfield10'); }
            if(i == 11){ magnification.classList.add('bigfield12'); }
            if(i == 12){ magnification.classList.add('bigfield13'); }
            if(i == 13){ magnification.classList.add('bigfield14'); }
            if(i == 14){ magnification.classList.add('bigfield15'); }
            if(i == 15){ magnification.classList.add('bigfield16'); }
            if(i == 16){ magnification.classList.add('bigfield17'); }
            if(i == 18){ magnification.classList.add('bigfield19'); }
            if(i == 19){ magnification.classList.add('bigfield20'); }
            if(i == 21){ magnification.classList.add('bigfield22'); }
            if(i == 23){ magnification.classList.add('bigfield24'); }
            if(i == 24){ magnification.classList.add('bigfield25'); }
            if(i == 25){ magnification.classList.add('bigfield26'); }
            if(i == 26){ magnification.classList.add('bigfield27'); }
            if(i == 27){ magnification.classList.add('bigfield28'); }
            if(i == 28){ magnification.classList.add('bigfield29'); }
            if(i == 29){ magnification.classList.add('bigfield30'); }
            if(i == 31){ magnification.classList.add('bigfield32'); }
            if(i == 32){ magnification.classList.add('bigfield33'); }
            if(i == 34){ magnification.classList.add('bigfield35'); }
            if(i == 35){ magnification.classList.add('bigfield36'); }
            if(i == 37){ magnification.classList.add('bigfield38'); }
            if(i == 39){ magnification.classList.add('bigfield40'); }

            if(i == 5 || i == 15 || i == 25 || i == 35) {
                card4.classList.add('hide');
                card5.classList.add('hide');
                card6.classList.add('hide');
                card7.classList.add('hide');
                card8.classList.add('hide');
                card9.classList.add('hide');
                card10.classList.add('hide');
                card11.classList.add('hide');
                oatput4.classList.add('hide');
                oatput5.classList.add('hide');
                oatput6.classList.add('hide');
                oatput7.classList.add('hide');
                oatput8.classList.add('hide');
                oatput9.classList.add('hide');
                oatput10.classList.add('hide');
                oatput11.classList.add('hide');
                
                card14.classList.remove('hide');
                card15.classList.remove('hide');
                card16.classList.remove('hide');
                oatput14.classList.remove('hide');
                oatput15.classList.remove('hide');
                oatput16.classList.remove('hide');
                oatput3.classList.remove('hide');
                card3.classList.remove('hide');
            }

            if(i == 12 || i == 28) {
                card14.classList.add('hide');
                card15.classList.add('hide');
                card16.classList.add('hide');
                oatput14.classList.add('hide');
                oatput15.classList.add('hide');
                oatput16.classList.add('hide');
                oatput3.classList.add('hide');
                card3.classList.add('hide');
                card4.classList.add('hide');
                card5.classList.add('hide');
                card6.classList.add('hide');
                card7.classList.add('hide');
                card8.classList.add('hide');
                card9.classList.add('hide');
                card10.classList.add('hide');
                card11.classList.add('hide');
                oatput4.classList.add('hide');
                oatput5.classList.add('hide');
                oatput6.classList.add('hide');
                oatput7.classList.add('hide');
                oatput8.classList.add('hide');
                oatput9.classList.add('hide');
                oatput10.classList.add('hide');
                oatput11.classList.add('hide');

                card17.classList.remove('hide');
            }

            oatput1.textContent = fields[i].price;
            oatput3.textContent = fields[i].rent;
            oatput4.textContent = fields[i].rentAll;
            oatput5.textContent = fields[i].rent1house;
            oatput6.textContent = fields[i].rent2house;
            oatput7.textContent = fields[i].rent3house;
            oatput8.textContent = fields[i].rent4house;
            oatput9.textContent = fields[i].rentHotel;
            oatput10.textContent = fields[i].priceHome;
            oatput11.textContent = fields[i].priceHotel;
            oatput12.textContent = fields[i].mortgage;
            oatput13.textContent = fields[i].mortgageRepayment;
            oatput14.textContent = fields[i].rent2;
            oatput15.textContent = fields[i].rent3;
            oatput16.textContent = fields[i].rent4;

            if(fields[i].owner == 0){
                oatput2.textContent = 'Gracz 1';
                oatput2.classList.add('green');
            } else if (fields[i].owner == 1){
                oatput2.textContent = 'Gracz 2';
                oatput2.classList.add('red2');
            } else if (fields[i].owner == 2){
                oatput2.textContent = 'Gracz 3';
                oatput2.classList.add('blue3');
            } else if (fields[i].owner == -1){
                oatput2.textContent = 'Brak';
                oatput2.classList.remove('green');
                oatput2.classList.remove('red2');
                oatput2.classList.remove('blue3');
            }
        },false);
    }
};

// roll dice
function lottery(dice) {
    roll[dice] = Math.random() * 5 + 1 ;
    roll[dice] = Math.round(roll[dice]);

    if (roll[dice] == 1) {
        cube[dice].classList.add('show-one');
        cube[dice].classList.remove('show-two');
        cube[dice].classList.remove('show-three');
        cube[dice].classList.remove('show-four');
        cube[dice].classList.remove('show-five');
        cube[dice].classList.remove('show-six');
        }
         else if (roll[dice]  == 2) {
        cube[dice].classList.add('show-two');
        cube[dice].classList.remove('show-one');
        cube[dice].classList.remove('show-three');
        cube[dice].classList.remove('show-four');
        cube[dice].classList.remove('show-five');
        cube[dice].classList.remove('show-six');
        }
        else if (roll[dice]  == 3) {
        cube[dice].classList.add('show-three');
        cube[dice].classList.remove('show-two');
        cube[dice].classList.remove('show-one');
        cube[dice].classList.remove('show-four');
        cube[dice].classList.remove('show-five');
        cube[dice].classList.remove('show-six');
        }
        else if (roll[dice]  == 4) {
        cube[dice].classList.add('show-four');
        cube[dice].classList.remove('show-two');
        cube[dice].classList.remove('show-three');
        cube[dice].classList.remove('show-one');
        cube[dice].classList.remove('show-five');
        cube[dice].classList.remove('show-six');
        }
        else if (roll[dice]  == 5) {
        cube[dice].classList.add('show-five');
        cube[dice].classList.remove('show-two');
        cube[dice].classList.remove('show-three');
        cube[dice].classList.remove('show-four');
        cube[dice].classList.remove('show-one');
        cube[dice].classList.remove('show-six');
        }
        else if (roll[dice]  == 6) {
        cube[dice].classList.add('show-six');
        cube[dice].classList.remove('show-two');
        cube[dice].classList.remove('show-three');
        cube[dice].classList.remove('show-four');
        cube[dice].classList.remove('show-five');
        cube[dice].classList.remove('show-one');
        }
}

function move(who) {
    location[who] = location[who] + destyny;

    if(location[who] > 39) {
        location[who] = location[who] - 39;
        money[who] = money[who] + 200;
        Write('START- pensja 200$!', who);
    }
    if (who == 0 && jail[who] == 0) {
        Write('Lądujesz na polu: ' + (location[who] + 1) + ".", who);
    }
    if (who != 0 && jail[who] == 0) {
        Write('Gracz ' + (who + 1 ) + ' ląduje na polu: ' + (location[who] + 1) + ".", who);
    }

    for (let i=0; i<fields.length; i++) {
        if(who == 0 && location[who] == i) {
            fields[i].player.classList.add('p1');
        }
        if(who == 1 && location[who] == i) {
            fields[i].player.classList.add('p2');
        }
        if(who == 2 && location[who] == i) {
            fields[i].player.classList.add('p3');
        }
    }

    if(location[who] == 4 && who == 0) {
        Write('Podatek dochodowy. Płacisz 200$', who);
        money[who] = money[who] - 200;
    }
    if(location[who] == 4 && who != 0) {
        Write('Podatek dochodowy. Gracz ' + (who + 1 ) + ' płaci 200$', who);
        money[who] = money[who] - 200;
    }


    if(location[who] == 38 && who == 0) {
        Write('Podatek dochodowy. Płacisz 100$', who);
        money[who] = money[who] - 200;
    }
    if(location[who] == 38 && who != 0) {
        Write('Podatek dochodowy. Gracz ' + (who + 1 ) + ' płaci 100$', who);
        money[who] = money[who] - 200;
    }

    if(location[who] == 30 && who == 0){
        Write('Idziesz do więzienia!!!', who);
        jail[who] = 4;
        destyny = 0;
        location[who] = 10;
        pClean(who);
        move(who);
    }
    if(location[who] == 30 && who != 0){
        Write('Gracz ' + (who + 1 ) + ' idzie do więzienia!!!', who);
        jail[who] = 4;
        destyny = 0;
        location[who] = 10;
        pClean(who);
        move(who);
    }

    player1.textContent = money[0];
    player2.textContent = money[1];
    player3.textContent = money[2];   
}

function pClean(who) {
    if(who == 0){
        for (let i=0; i<fields.length; i++) {
            fields[i].player.classList.remove('p1');
        }
    }
    if(who == 1){
        for (let i=0; i<fields.length; i++) {
            fields[i].player.classList.remove('p2');
        }
    }
    if(who == 2){
        for (let i=0; i<fields.length; i++) {
            fields[i].player.classList.remove('p3');
        }
    }
}
function redQuestion(who) {
    if(location[who] == 7 || location[who] == 22 || location[who] == 36){
        Write('KARTA CZERWONA:', who);
        let draw;
        draw = Math.random() * 15 + 1 ;
        draw = Math.round(draw);

        if(draw == 1){
            Write('"Otrzymujesz spłatę kredytu budowlanego. Pobierz 150$"', who);
            money[who] = money[who] + 150;
        } else if(draw == 2 || draw == 3){
            Write('"Idz na najbliższe pole DWORZEC KOLEJOWY. Jeżeli pole ma właściciela zapłać mu dwukrotną wysokość czynszu."', who);
            if(location[who] == 7){
                destyny = 0;
                location[who] = 5;
            }
            if(location[who] == 22){
                destyny = 0;
                location[who] = 25;
            }
            if(location[who] == 36){
                destyny = 0;
                location[who] = 35;
            }
            pClean(who);
            move(who);
            ratio = 2;
            payRent(who);
        } else if(draw == 4){
            lottery(0);
            lottery(1);
            destyny = roll[0] + roll[1];
            Write('"Idz na najbliższe pole ELEKTROWNIA lub WODICIĄGI. Jeżeli pole ma właściciela, zapłać jego właścicielowi równowartość 10x suma wyrzuconych oczek (wypadło ' +  destyny + ')."', who);
            if(location[who] == 7){
                destyny = 0;
                location[who] = 12;
            }
            if(location[who] == 22){
                destyny = 0;
                location[who] = 28;
            }
            if(location[who] == 36){
                destyny = 0;
                location[who] = 28;
            }
            pClean(who);
            move(who);
            ratio = 10;
            payRent(who);
        } else if(draw == 5){
            Write('"Mandat za przekroczenie prędkości 15$."', who);
            money[who] = money[who] - 15;
        } else if(draw == 6){
            Write('"WYJDŹ BEZPŁATIE Z WIĘZIENIA. Kartę możesz zachować i wykorzystać w razie potrzeby lub odsprzedać innemu graczowi."', who);
        } else if(draw == 7){
            Write('"Cofnij się o trzy pola."', who);
            destyny = -3;
            pClean(who);
            move(who);
            payRent(who);
        } else if(draw == 8){
            Write('"Idz na pole 24. Jeżeli mijasz start, pobierz 200$."', who);
            if(location[who] == 36){
                money[who] = money[who] + 200;
            }
            destyny = 0;
            location[who] = 23;
            pClean(who);
            move(who);
            payRent(who);
        } else if(draw == 9){
            Write('"Wybrano cię prezesem zarządu. Zapłać każdemu graczowi $50."', who);
            if(who == 0) {money[0] - money[0] - 100; money[1] = money[1] + 50; money[2] = money[2] + 50;}
            if(who == 1) {money[1] - money[1] - 100; money[2] = money[2] + 50; money[0] = money[0] + 50;}
            if(who == 2) {money[2] - money[2] - 100; money[1] = money[1] + 50; money[0] = money[0] + 50;}
        } else if(draw == 10){
            Write('"Idź na pole DWORZEC ZACHÓD. Jeżeli mijasz pole start, pobierz 200$."', who);
            if(location[who] == 22 || location[who] == 36){
                money[who] = money[who] + 200;
            }
            destyny = 0;
            location[who] = 15;
            pClean(who);
            move(who);
            payRent(who);
        } else if(draw == 11){
            Write('"Idź na pole 40."', who);
            destyny = 0;
            location[who] = 39;
            pClean(who);
            move(who);
            payRent(who);
        } else if(draw == 12){
            Write('"Przeprowadzasz generalny remont wszystkich nieruchomości: za każdy dom płacisz 25$, za każdy hotel płacisz 100$."', who);
            let sumHouse = 0;
            let sumHotel = 0;
            for (let i=0; i<fields.length; i++) {
                if(i == 1 || i == 3 || i == 6 || i == 8 || i == 9 || i == 11 || i == 13 || i == 14 || i == 16 || i == 18 || i == 19 || i == 21 || i == 23 || i == 24 || i == 26 || i == 27 || i == 29 || i == 31 || i == 32 ||i == 34 || i == 37 || i == 39){
                    if(fields[i].owner == who && fields[i].hotel == 1){
                        sumHotel = sumHotel + fields[i].hotel;
                    }else if (fields[i].owner == who && fields[i].house != 0){
                        sumHouse = sumHouse + fields[i].house;
                    }
                }
            }
            money[who] = money[who] - ((sumHouse * 25) + (sumHotel * 100));
            Write('Masz ' + sumHotel + ' hoteli i ' + sumHouse +  ' domów. Płacisz ' + ((sumHouse * 25) + (sumHotel * 100)) + '$.', who);
        } else if(draw == 13){
            Write('"Idz na pole 12. Jeżeli mijasz start, pobierz 200$."', who);
            if(location[who] == 22 || location[who] == 36){
                money[who] = money[who] + 200;
            }
            destyny = 0;
            location[who] = 11;
            pClean(who);
            move(who);
            payRent(who);
        } else if(draw == 14){
            Write('"Bank wypłaca ci dywidendę w kwocie 50$."', who);
            money[who] = money[who] + 50;
        } else if(draw == 15){
            Write('"Idż na pole START. (Pobierz 200$)."', who);
            money[who] = money[who] + 200;
            destyny = 0;
            location[who] = 0;
            pClean(who);
            move(who);
        } else if(draw == 16){
            Write('"Idź do więzienia. Idziesz bezpośrednio do więziena, nie mijasz pola start, nie pobierasz 200$."', who);
                jail[who] = 4;
                destyny = 0;
                location[who] = 10;
                pClean(who);
                move(who);
        }
    }
    ratio = 1;
    player1.textContent = money[0];
    player2.textContent = money[1];
    player3.textContent = money[2];
}

function blueQuestion(who) {
    if(location[who] == 2 || location[who] == 17 || location[who] == 33){
        Write('KARTA NIEBIESKA:', who);
        let draw;
        draw = Math.random() * 15 + 1 ;
        draw = Math.round(draw);

        if(draw == 1){
            Write('"Idż na pole START. (Pobierz 200$)."', who);
            money[who] = money[who] + 200;
            destyny = 0;
            location[who] = 0;
            pClean(who);
            move(who);
        } else if(draw == 2){
            Write('"Pomyłka banku na twoją korzyść. Pobierz 200$."', who);
            money[who] = money[who] + 200;
        } else if(draw == 3){
            Write('"Sprzedajesz akcje z zyskiem. Pobierz 50$."', who);
            money[who] = money[who] + 50;
        } else if(draw == 4){
            Write('"Dziedziczysz spadek w wysokości 100$."', who);
            money[who] = money[who] + 100;
        } else if(draw == 5){
            Write('"Dziś są twoje urodziny pobierz 10$ od każdego z graczy."', who);
            if(who == 0) {money[0] - money[0] - 20; money[1] = money[1] + 10; money[2] = money[2] + 10;}
            if(who == 1) {money[1] - money[1] - 20; money[2] = money[2] + 10; money[0] = money[0] + 10;}
            if(who == 2) {money[2] - money[2] - 20; money[1] = money[1] + 10; money[0] = money[0] + 10;}
        } else if(draw == 6){
            Write('"Pobierz 25$ za usługę konsultingową."', who);
            money[who] = money[who] + 25;
        } else if(draw == 7){
            Write('"Idź do więzienia. Idziesz bezpośrednio do więziena, nie mijasz pola start, nie pobierasz 200$."', who);
            jail[who] = 4;
            destyny = 0;
            location[who] = 10;
            pClean(who);
            move(who);
        } else if(draw == 8){
            Write('"Otrzymujesz wypłatę z funduszu wakacyjnego. Pobierz 100$."', who);
            money[who] = money[who] + 100;
        } else if(draw == 9){
            Write('"Opłata za konsultację lekarską. Zapłać 50$."', who);
            money[who] = money[who] - 50;
        } else if(draw == 10){
            Write('"Opłata za czesne. Zapłać 50$."', who);
            money[who] = money[who] - 50;
        } else if(draw == 11){
            Write('"Otrzymujesz wypłatę z ubezpieczeniea na życie. Pobierz 100$."', who);
            money[who] = money[who] + 100;
        } else if(draw == 12){
            Write('"Zwrot podatku dochodowego. Pobierz 20$."', who);
            money[who] = money[who] + 20;
        } else if(draw == 13){
            Write('"Opłata za pobyt w szpitalu. Zapłać 100$."', who);
            money[who] = money[who] - 100;
        } else if(draw == 14){
            Write('"WYJDŹ BEZPŁATIE Z WIĘZIENIA. Kartę możesz zachować i wykorzystać w razie potrzeby lub odsprzedać innemu graczowi."', who);
        } else if(draw == 15){
            Write('"Zajmuejsz drugie miejsce w konkursie piękności. Pobierz 10$."', who);
            money[who] = money[who] + 10;
        } else if(draw == 16){
            Write('"Obliczono koszt napraw komunalnych twoich nieruchomości: zapłać 40$ za każdy dom 115$ za każdy hotel, jaki posiadasz."', who);
            let sumHouse = 0;
            let sumHotel = 0;
            for (let i=0; i<fields.length; i++) {
                if(i == 1 || i == 3 || i == 6 || i == 8 || i == 9 || i == 11 || i == 13 || i == 14 || i == 16 || i == 18 || i == 19 || i == 21 || i == 23 || i == 24 || i == 26 || i == 27 || i == 29 || i == 31 || i == 32 ||i == 34 || i == 37 || i == 39){
                    if(fields[i].owner == who && fields[i].hotel == 1){
                        sumHotel = sumHotel + fields[i].hotel;
                    }else if (fields[i].owner == who && fields[i].house != 0){
                        sumHouse = sumHouse + fields[i].house;
                    }
                }
            }
            money[who] = money[who] - ((sumHouse * 40) + (sumHotel * 115));
            Write('Masz ' + sumHotel + ' hoteli i ' + sumHouse +  ' domów. Płacisz ' + ((sumHouse * 40) + (sumHotel * 115)) + '$.', who);
        }
    }
    player1.textContent = money[0];
    player2.textContent = money[1];
    player3.textContent = money[2];
}

function canIBuy() {
    for (let i=0; i<fields.length; i++) {
        if(location[0] == i && fields[i].owner == -1){
            buy.classList.remove('hide');
        }
    }
}
function whoOwn() {
    for (let i=0; i<fields.length; i++) {
        if(fields[i].owner == -1){
            fields[i].mortgageStyle.classList.add('hide');
        }
        if(fields[i].owner == 0){
            fields[i].ownerstyle.classList.add('ownerp1');
            fields[i].mortgageStyle.classList.remove('hide');
        }
        if(fields[i].owner == 1){
            fields[i].ownerstyle.classList.add('ownerp2');
            fields[i].mortgageStyle.classList.add('hide');
        }
        if(fields[i].owner == 2){
            fields[i].ownerstyle.classList.add('ownerp3');
            fields[i].mortgageStyle.classList.add('hide');
        }
    }
}  
function houses(){
    for (let i=0; i<fields.length; i++) {
        if(fields[i].house >= 1){
            fields[i].houseStyle1.classList.add('house');
        }
        if(fields[i].house >= 2){
            fields[i].houseStyle2.classList.add('house');
        }
        if(fields[i].house >= 3){
            fields[i].houseStyle3.classList.add('house');
        }
        if(fields[i].house >= 4){
            fields[i].houseStyle4.classList.add('house');
        }
        if(fields[i].hotel == 1){
            fields[i].houseStyle1.classList.remove('house');
            fields[i].houseStyle2.classList.remove('house');
            fields[i].houseStyle3.classList.remove('house');
            fields[i].houseStyle4.classList.remove('house');
            fields[i].houseStyle1.classList.add('hotel');
        }
        if(fields[i].house == 4){
            fields[i].buyStyle.classList.add('buyHotel');
        }
        if(i == 1 || i == 3 || i == 6 || i == 8 || i == 9 || i == 11 || i == 13 || i == 14 || i == 16 || i == 18 || i == 19 || i == 21 || i == 23 || i == 24 || i == 26 || i == 27 || i == 29 || i == 31 || i == 32 ||i == 34 || i == 37 || i == 39){
            fields[i].buyStyle.classList.add('hide');
        }
    }
    if(fields[1].owner == 0 && fields[3].owner == 0 ){
        fields[1].buyStyle.classList.remove('hide');
        fields[3].buyStyle.classList.remove('hide');
    }
    if(fields[6].owner == 0 && fields[8].owner == 0 && fields[9].owner == 0 ){
        fields[6].buyStyle.classList.remove('hide');
        fields[8].buyStyle.classList.remove('hide');
        fields[9].buyStyle.classList.remove('hide');
    }
    if(fields[11].owner == 0 && fields[13].owner == 0 && fields[14].owner == 0 ){
        fields[11].buyStyle.classList.remove('hide');
        fields[13].buyStyle.classList.remove('hide');
        fields[14].buyStyle.classList.remove('hide');
    }
    if(fields[16].owner == 0 && fields[18].owner == 0 && fields[19].owner == 0 ){
        fields[16].buyStyle.classList.remove('hide');
        fields[18].buyStyle.classList.remove('hide');
        fields[19].buyStyle.classList.remove('hide');
    }
    if(fields[21].owner == 0 && fields[23].owner == 0 && fields[24].owner == 0 ){
        fields[21].buyStyle.classList.remove('hide');
        fields[23].buyStyle.classList.remove('hide');
        fields[24].buyStyle.classList.remove('hide');
    }
    if(fields[26].owner == 0 && fields[27].owner == 0 && fields[29].owner == 0 ){
        fields[26].buyStyle.classList.remove('hide');
        fields[27].buyStyle.classList.remove('hide');
        fields[29].buyStyle.classList.remove('hide');
    }
    if(fields[31].owner == 0 && fields[32].owner == 0 && fields[34].owner == 0 ){
        fields[31].buyStyle.classList.remove('hide');
        fields[32].buyStyle.classList.remove('hide');
        fields[34].buyStyle.classList.remove('hide');
    }
    if(fields[37].owner == 0 && fields[39].owner == 0){
        fields[37].buyStyle.classList.remove('hide');
        fields[39].buyStyle.classList.remove('hide');
    }
    if(fields[1].house > fields[3].house){
        fields[1].buyStyle.classList.add('hide');
    }
    if(fields[3].house > fields[1].house){
        fields[3].buyStyle.classList.add('hide');
    }
    if(fields[6].house > fields[8].house || fields[6].house > fields[9].house){
        fields[6].buyStyle.classList.add('hide');
    }
    if(fields[8].house > fields[6].house || fields[8].house > fields[9].house){
        fields[8].buyStyle.classList.add('hide');
    }
    if(fields[9].house > fields[6].house || fields[9].house > fields[8].house){
        fields[9].buyStyle.classList.add('hide');
    }
    if(fields[11].house > fields[13].house || fields[11].house > fields[14].house){
        fields[11].buyStyle.classList.add('hide');
    }
    if(fields[13].house > fields[11].house || fields[13].house > fields[14].house){
        fields[13].buyStyle.classList.add('hide');
    }
    if(fields[14].house > fields[11].house || fields[14].house > fields[13].house){
        fields[14].buyStyle.classList.add('hide');
    }
    if(fields[16].house > fields[18].house || fields[16].house > fields[19].house){
        fields[16].buyStyle.classList.add('hide');
    }
    if(fields[18].house > fields[16].house || fields[18].house > fields[19].house){
        fields[18].buyStyle.classList.add('hide');
    }
    if(fields[19].house > fields[16].house || fields[19].house > fields[18].house){
        fields[19].buyStyle.classList.add('hide');
    }
    if(fields[21].house > fields[23].house || fields[21].house > fields[24].house){
        fields[21].buyStyle.classList.add('hide');
    }
    if(fields[21].house > fields[23].house || fields[21].house > fields[24].house){
        fields[21].buyStyle.classList.add('hide');
    }
    if(fields[23].house > fields[21].house || fields[23].house > fields[24].house){
        fields[23].buyStyle.classList.add('hide');
    }
    if(fields[24].house > fields[21].house || fields[24].house > fields[23].house){
        fields[24].buyStyle.classList.add('hide');
    }
    if(fields[26].house > fields[27].house || fields[26].house > fields[29].house){
        fields[26].buyStyle.classList.add('hide');
    }
    if(fields[27].house > fields[26].house || fields[27].house > fields[29].house){
        fields[27].buyStyle.classList.add('hide');
    }
    if(fields[29].house > fields[26].house || fields[29].house > fields[27].house){
        fields[29].buyStyle.classList.add('hide');
    }
    if(fields[31].house > fields[32].house || fields[31].house > fields[34].house){
        fields[31].buyStyle.classList.add('hide');
    }
    if(fields[32].house > fields[31].house || fields[32].house > fields[34].house){
        fields[32].buyStyle.classList.add('hide');
    }
    if(fields[34].house > fields[31].house || fields[34].house > fields[32].house){
        fields[34].buyStyle.classList.add('hide');
    }
    if(fields[37].house > fields[39].house){
        fields[37].buyStyle.classList.add('hide');
    }
    if(fields[39].house > fields[37].house){
        fields[39].buyStyle.classList.add('hide');
    }
    for (let i=0; i<fields.length; i++) {
        if(i == 1 || i == 3 || i == 6 || i == 8 || i == 9 || i == 11 || i == 13 || i == 14 || i == 16 || i == 18 || i == 19 || i == 21 || i == 23 || i == 24 || i == 26 || i == 27 || i == 29 || i == 31 || i == 32 ||i == 34 || i == 37 || i == 39){
            if(fields[i].hotel == 1){
                fields[i].buyStyle.classList.add('hide');
            }
        }
    }
}
function payRent(who){
    for (let i=0; i<fields.length; i++) {
        if(fields[i].mortgageStatus == 0){
            if (location[who] == i && fields[i].owner != who &&  fields[i].owner != -1 && location[who] != 0 && location[who] != 2 && location[who] != 4 && location[who] != 7 && location[who] != 10 && location[who] != 17 && location[who] != 20 && location[who] != 22 && location[who] != 30 && location[who] != 33 && location[who] != 36 && location[who] != 38) {
                if(fields[i].hotel == 1){
                    money[who] = money[who] - (fields[i].rentHotel * ratio);
                    money[fields[i].owner] = money[fields[i].owner] + (fields[i].rentHotel * ratio);
                    if(who == 0){
                        Write('Płacisz czynasz dla gracza ' + (fields[i].owner + 1) + ' w wysokości ' +  (fields[i].rentHotel * ratio) + '$.', who);
                    } else {
                        Write('Gracz ' + (who + 1) + ' płaci czynasz dla gracza ' + (fields[i].owner + 1) + ' w wysokości ' +  (fields[i].rentHotel * ratio) + '$.', who);
                    }
                }else if(fields[i].house == 4){
                    money[who] = money[who] - (fields[i].rent4house * ratio);
                    money[fields[i].owner] = money[fields[i].owner] + (fields[i].rent4house * ratio);
                    if(who == 0){
                        Write('Płacisz czynasz dla gracza ' + (fields[i].owner + 1) + ' w wysokości ' +  (fields[i].rent4house * ratio) + '$.', who);
                    } else {
                        Write('Gracz ' + (who + 1) + ' płaci czynasz dla gracza ' + (fields[i].owner + 1) + ' w wysokości ' +  (fields[i].rent4house * ratio) + '$.', who);
                    }
                }else if(fields[i].house == 3){
                    money[who] = money[who] - (fields[i].rent3house * ratio);
                    money[fields[i].owner] = money[fields[i].owner] + (fields[i].rent3house * ratio);
                    if(who == 0){
                        Write('Płacisz czynasz dla gracza ' + (fields[i].owner + 1) + ' w wysokości ' +  (fields[i].rent3house * ratio) + '$.', who);
                    } else {
                        Write('Gracz ' + (who + 1) + ' płaci czynasz dla gracza ' + (fields[i].owner + 1) + ' w wysokości ' +  (fields[i].rent3house * ratio) + '$.', who);
                    }
                }else if(fields[i].house == 2){
                    money[who] = money[who] - (fields[i].rent2house * ratio);
                    money[fields[i].owner] = money[fields[i].owner] + (fields[i].rent2house * ratio);
                    if(who == 0){
                        Write('Płacisz czynasz dla gracza ' + (fields[i].owner + 1) + ' w wysokości ' +  (fields[i].rent2house * ratio) + '$.', who);
                    } else {
                        Write('Gracz ' + (who + 1) + ' płaci czynasz dla gracza ' + (fields[i].owner + 1) + ' w wysokości ' +  (fields[i].rent2house * ratio) + '$.', who);
                    }
                }else if(fields[i].house == 1){
                    money[who] = money[who] - (fields[i].rent1house * ratio);
                    money[fields[i].owner] = money[fields[i].owner] + (fields[i].rent1house * ratio);
                        if(who == 0){
                        Write('Płacisz czynasz dla gracza ' + (fields[i].owner + 1) + ' w wysokości ' +  (fields[i].rent1house * ratio) + '$.', who);
                    } else {
                        Write('Gracz ' + (who + 1) + ' płaci czynasz dla gracza ' + (fields[i].owner + 1) + ' w wysokości ' +  (fields[i].rent1house * ratio) + '$.', who);
                    }
                }else if(
                    i == 1 && fields[1].owner == fields[3].owner || 
                    i == 3 && fields[1].owner == fields[3].owner || 
                    i == 6 && fields[6].owner == fields[8].owner && fields[8].owner == fields[9].owner || 
                    i == 8 && fields[6].owner == fields[8].owner && fields[8].owner == fields[9].owner || 
                    i == 9 && fields[6].owner == fields[8].owner && fields[8].owner == fields[9].owner ||
                    i == 11 && fields[11].owner == fields[13].owner && fields[13].owner == fields[14].owner ||
                    i == 13 && fields[11].owner == fields[13].owner && fields[13].owner == fields[14].owner ||
                    i == 14 && fields[11].owner == fields[13].owner && fields[13].owner == fields[14].owner ||
                    i == 16 && fields[16].owner == fields[18].owner && fields[18].owner == fields[19].owner || 
                    i == 18 && fields[16].owner == fields[18].owner && fields[18].owner == fields[19].owner || 
                    i == 19 && fields[16].owner == fields[18].owner && fields[18].owner == fields[19].owner || 
                    i == 21 && fields[21].owner == fields[23].owner && fields[23].owner == fields[24].owner || 
                    i == 23 && fields[21].owner == fields[23].owner && fields[23].owner == fields[24].owner || 
                    i == 24 && fields[21].owner == fields[23].owner && fields[23].owner == fields[24].owner || 
                    i == 26 && fields[26].owner == fields[27].owner && fields[27].owner == fields[29].owner || 
                    i == 27 && fields[26].owner == fields[27].owner && fields[27].owner == fields[29].owner || 
                    i == 29 && fields[26].owner == fields[27].owner && fields[27].owner == fields[29].owner || 
                    i == 31 && fields[31].owner == fields[32].owner && fields[32].owner == fields[34].owner || 
                    i == 32 && fields[31].owner == fields[32].owner && fields[32].owner == fields[34].owner || 
                    i == 34 && fields[31].owner == fields[32].owner && fields[32].owner == fields[34].owner || 
                    i == 37 && fields[37].owner == fields[39].owner || 
                    i == 39 && fields[37].owner == fields[39].owner){
                    money[who] = money[who] - (fields[i].rentAll * ratio);
                    money[fields[i].owner] = money[fields[i].owner] + (fields[i].rentAll * ratio);
                    if(who == 0){
                        Write('Płacisz czynasz dla gracza ' + (fields[i].owner + 1) + ' w wysokości ' +  (fields[i].rentAll * ratio) + '$.', who);
                    } else {
                        Write('Gracz ' + (who + 1) + ' płaci czynasz dla gracza ' + (fields[i].owner + 1) + ' w wysokości ' +  (fields[i].rentAll * ratio) + '$.', who);
                    }
                }else if(i == 12 && fields[12].owner == fields[28].owner || i == 28 && fields[12].owner == fields[28].owner){
                    if(ratio == 10){
                        money[who] = money[who] - (ratio * destyny);
                        money[fields[i].owner] = money[fields[i].owner] + (ratio * destyny);
                        if(who == 0){
                            Write('Płacisz czynasz dla gracza ' + (fields[i].owner + 1) + ' w wysokości ' +  (ratio * destyny) + '$.', who);
                        } else {
                            Write('Gracz ' + (who + 1) + ' płaci czynasz dla gracza ' + (fields[i].owner + 1) + ' w wysokości ' +  (ratio * destyny) + '$.', who);
                        }
                    }else{
                        money[who] = money[who] - (9 * destyny);
                        money[fields[i].owner] = money[fields[i].owner] + (9 * destyny);
                        if(who == 0){
                            Write('Płacisz czynasz dla gracza ' + (fields[i].owner + 1) + ' w wysokości ' +  (9 * destyny) + '$.', who);
                        } else {
                            Write('Gracz ' + (who + 1) + ' płaci czynasz dla gracza ' + (fields[i].owner + 1) + ' w wysokości ' +  (9 * destyny) + '$.', who);
                        }
                    }
                }else if(i == 12 || i == 28){
                    if(ratio == 10){
                        money[who] = money[who] - (ratio * destyny);
                        money[fields[i].owner] = money[fields[i].owner] + (ratio * destyny);
                        if(who == 0){
                            Write('Płacisz czynasz dla gracza ' + (fields[i].owner + 1) + ' w wysokości ' +  (ratio * destyny) + '$.', who);
                        } else {
                            Write('Gracz ' + (who + 1) + ' płaci czynasz dla gracza ' + (fields[i].owner + 1) + ' w wysokości ' +  (ratio * destyny) + '$.', who);
                        }
                    }else {
                        money[who] = money[who] - (4 * destyny);
                        money[fields[i].owner] = money[fields[i].owner] + (4 * destyny);
                        if(who == 0){
                            Write('Płacisz czynasz dla gracza ' + (fields[i].owner + 1) + ' w wysokości ' +  (4 * destyny) + '$.', who);
                        } else {
                            Write('Gracz ' + (who + 1) + ' płaci czynasz dla gracza ' + (fields[i].owner + 1) + ' w wysokości ' +  (4 * destyny) + '$.', who);
                        }
                    }
                }else if(i == 5 && fields[5].owner == fields[15].owner && fields[5].owner == fields[25].owner && fields[5].owner == fields[35].owner ||
                    i == 15 && fields[15].owner == fields[5].owner && fields[15].owner == fields[25].owner && fields[15].owner == fields[35].owner ||
                    i == 25 && fields[25].owner == fields[15].owner && fields[25].owner == fields[5].owner && fields[25].owner == fields[35].owner ||
                    i == 35 && fields[35].owner == fields[15].owner && fields[35].owner == fields[25].owner && fields[35].owner == fields[5].owner){
                    money[who] = money[who] - (fields[i].rent4 * ratio);
                    money[fields[i].owner] = money[fields[i].owner] + (fields[i].rent4 * ratio);
                    if(who == 0){
                        Write('Płacisz czynasz dla gracza ' + (fields[i].owner + 1) + ' w wysokości ' +  (fields[i].rent4 * ratio) + '$.', who);
                    } else {
                        Write('Gracz ' + (who + 1) + ' płaci czynasz dla gracza ' + (fields[i].owner + 1) + ' w wysokości ' +  (fields[i].rent4 * ratio) + '$.', who);
                    }
                }else if(i == 5 && fields[5].owner == fields[15].owner && fields[5].owner == fields[25].owner|| 
                    i == 5 && fields[5].owner == fields[15].owner && fields[5].owner == fields[35].owner||
                    i == 5 && fields[5].owner == fields[25].owner && fields[5].owner == fields[35].owner||
                    i == 15 && fields[15].owner == fields[5].owner && fields[15].owner == fields[25].owner|| 
                    i == 15 && fields[15].owner == fields[5].owner && fields[15].owner == fields[35].owner||
                    i == 15 && fields[15].owner == fields[25].owner && fields[15].owner == fields[35].owner||
                    i == 25 && fields[25].owner == fields[5].owner && fields[25].owner == fields[15].owner|| 
                    i == 25 && fields[25].owner == fields[5].owner && fields[25].owner == fields[35].owner||
                    i == 25 && fields[25].owner == fields[15].owner && fields[25].owner == fields[35].owner||
                    i == 35 && fields[35].owner == fields[5].owner && fields[35].owner == fields[15].owner|| 
                    i == 35 && fields[35].owner == fields[5].owner && fields[35].owner == fields[25].owner||
                    i == 35 && fields[35].owner == fields[15].owner && fields[35].owner == fields[25].owner){
                    money[who] = money[who] - (fields[i].rent3 * ratio);
                    money[fields[i].owner] = money[fields[i].owner] + (fields[i].rent3 * ratio);
                    if(who == 0){
                        Write('Płacisz czynasz dla gracza ' + (fields[i].owner + 1) + ' w wysokości ' +  (fields[i].rent3 * ratio) + '$.', who);
                    } else {
                        Write('Gracz ' + (who + 1) + ' płaci czynasz dla gracza ' + (fields[i].owner + 1) + ' w wysokości ' +  (fields[i].rent3 * ratio) + '$.', who);
                    }
                }else if(i == 5 && fields[5].owner == fields[15].owner || i == 5 && fields[5].owner == fields[25].owner || i == 5 && fields[5].owner == fields[35].owner || 
                    i == 15 && fields[15].owner == fields[5].owner || i == 15 && fields[15].owner == fields[25].owner || i == 15 && fields[15].owner == fields[35].owner ||
                    i == 25 && fields[25].owner == fields[5].owner || i == 25 && fields[25].owner == fields[15].owner || i == 25 && fields[25].owner == fields[35].owner ||
                    i == 35 && fields[35].owner == fields[5].owner || i == 35 && fields[35].owner == fields[15].owner || i == 35 && fields[35].owner == fields[25].owner){
                    money[who] = money[who] - (fields[i].rent2 * ratio);
                    money[fields[i].owner] = money[fields[i].owner] + (fields[i].rent2 * ratio);
                    if(who == 0){
                        Write('Płacisz czynasz dla gracza ' + (fields[i].owner + 1) + ' w wysokości ' +  (fields[i].rent2 * ratio) + '$.', who);
                    } else {
                        Write('Gracz ' + (who + 1) + ' płaci czynasz dla gracza ' + (fields[i].owner + 1) + ' w wysokości ' +  (fields[i].rent2 * ratio) + '$.', who);
                    }
                }else{
                    money[who] = money[who] - (fields[i].rent * ratio);
                    money[fields[i].owner] = money[fields[i].owner] + (fields[i].rent * ratio);
                    if(who == 0){
                        Write('Płacisz czynasz dla gracza ' + (fields[i].owner + 1) + ' w wysokości ' +  fields[i].rent + '$.', who);
                    } else {
                        Write('Gracz ' + (who + 1) + ' płaci czynasz dla gracza ' + (fields[i].owner + 1) + ' w wysokości ' +  fields[i].rent + '$.', who);
                    }
                }
            }
        }
    }
}
function goToJail(who){
    if(jail[who] > 0){
        jail[who] = jail[who] - 1;
        if(roll[0] == roll[1] && jail[who] > 0){
            Write('Rzut kostką: Wypadł DUBLET- koniec kary.', who);
            jail[who] = 0;
        } else if(roll[0] != roll[1] && jail[who] > 0){
            Write('Rzut kostką: bez dubletu.', who);
        }
        if(jail[who] > 0){
            destyny = 0;
            location[who] = 10;
            Write('WIĘZIENIE pozostało tur: ' + jail[who] + ' .', who);
        }
    }
}

destyny = 0;
move(0);
move(1);
move(2);
houses();
whoOwn();

Write('START GRY.');
Write('TWOJA TURA.', 0);

rollButton.addEventListener("click", function(e) {
    endGame.classList.remove('hide');
    pClean(0);
    lottery(0);
    lottery(1);
    destyny = roll[0] + roll[1];
    if(jail[0] <= 1) {
        Write('Rzut kostką. Wypadło: ' + destyny + '.', 0);
    }
    goToJail(0);
    move(0);
    payRent(0);
    redQuestion(0);
    blueQuestion(0);
    canIBuy();
    
    player1.textContent = money[0];
    player2.textContent = money[1];
    player3.textContent = money[2];
},false);

buy.addEventListener("click", function(e) {
    for (let i=0; i<fields.length; i++) {
        if(location[0] == i && fields[i].owner == -1 && money[0] >= fields[i].price){
            buy.classList.add('hide');
            money[0] = money[0] - fields[i].price;
            fields[i].owner = 0;
            Write('Kupujesz pole ' + (i + 1) + ' za ' + fields[i].price + '$.', 0)
        } else if (location[0] == i && fields[i].owner == -1 && money[0] < fields[i].price) {
            Write('ZA MAŁO GOTÓWKI. Potrzeba ' + fields[i].price + '$.')
        }
    }
    whoOwn();
    houses();
    player1.textContent = money[0];
},false);

endGame.addEventListener("click", function(e) {
    endGame.classList.toggle('hide');
    buy.classList.add('hide'); 
    
    Write('TURA GRACZA 2.', 1);
    pClean(1);
    lottery(0);
    lottery(1);
    destyny = roll[0] + roll[1];

    if(jail[1] <= 1) {
        Write('Rzut kostką. Wypadło: ' + destyny + '.', 1);
    }
    goToJail(1);
    move(1);
    payRent(1);
    redQuestion(1);
    blueQuestion(1);
    
    Write('TURA GRACZA 3.', 2);
    pClean(2);
    lottery(0);
    lottery(1);
    destyny = roll[0] + roll[1];
    if(jail[2] <= 1) {
        Write('Rzut kostką. Wypadło: ' + destyny + '.', 2);
    }
    goToJail(2);
    move(2);
    payRent(2);
    redQuestion(2);
    blueQuestion(2);

    whoOwn();
    Write('TWOJA TURA', 0);

    player1.textContent = money[0];
    player2.textContent = money[1];
    player3.textContent = money[2];
},false);

for (let i=0; i<fields.length; i++) {
    if(i == 1 || i == 3 || i == 6 || i == 8 || i == 9 || i == 11 || i == 13 || i == 14 || i == 16 || i == 18 || i == 19 || i == 21 || i == 23 || i == 24 || i == 26 || i == 27 || i == 29 || i == 31 || i == 32 ||i == 34 || i == 37 || i == 39){
        fields[i].buyStyle.addEventListener("click", function(e) {
            if(fields[i].hotel != 1 && fields[i].house < 4 && money[0] >= fields[i].priceHome){
                fields[i].house = fields[i].house + 1;
                money[0] = money[0] - fields[i].priceHome;
                Write('Kupujesz dom na polu ' + (i + 1) + ' za ' + fields[i].priceHome + '$.', 0)
            }else if(fields[i].hotel != 1 && fields[i].house < 4 && money[0] < fields[i].priceHome){
                Write('ZA MAŁO GOTÓWKI. Potrzeba ' + fields[i].priceHome+ '$.', 0)
            }else if(fields[i].house == 4 && money[0] >= fields[i].priceHotel){
                fields[i].hotel = 1;
                money[0] = money[0] - fields[i].priceHotel;
                Write('Kupujesz hotel na polu ' + (i + 1) + ' za ' + fields[i].priceHotel + '$.', 0)
            }else if(fields[i].house == 4 && money[0] < fields[i].priceHotel){
                Write('ZA MAŁO GOTÓWKI. Potrzeba ' + fields[i].priceHotel+ '$.', 0)
            }
            player1.textContent = money[0];
            houses();
        },false);
    }
}

for (let i=0; i<fields.length; i++) {
    if(i == 1 || i == 3 || i == 5 || i == 6 || i == 8 || i == 9 || i == 11 || i == 12 || i == 13 || i == 14 || i == 15 || i == 16 || i == 18 || i == 19 || i == 21 || i == 23 || i == 24 || i == 25 || i == 26 || i == 27 || i == 28 || i == 29 || i == 31 || i == 32 ||i == 34 || i == 35 || i == 37 || i == 39){
        fields[i].mortgageStyle.addEventListener("click", function(e) {
            if(fields[i].mortgageStatus == 0){
                fields[i].mortgageStatus = 1;
                money[0] = money[0] + fields[i].mortgage;
                fields[i].style.classList.add('mortgageField');

                Write('Zastawiasz polę ' + (i + 1) + ' za ' + fields[i].mortgage + '.', 0);
                player1.textContent = money[0];

            } else if (fields[i].mortgageStatus == 1){
                fields[i].mortgageStatus = 0;
                money[0] = money[0] - fields[i].mortgageRepayment;
                fields[i].style.classList.remove('mortgageField');

                Write('Wykupujesz polę ' + (i + 1) + ' za ' + fields[i].mortgageRepayment + '.', 0);
                player1.textContent = money[0];
            }
        },false);
    }
}

})();