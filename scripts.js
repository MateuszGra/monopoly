(function() {

const cube = [document.querySelector(".cube"), document.querySelector(".cube2")];
const rollButton = document.querySelector('.rollButton');
const endGame = document.querySelector('.endGame');
    
let roll = [0, 0], draw;
let p1money = 1500,
    p2money = 1500,
    p3money = 1500;

let destyny,
    p1loc,
    p2loc,
    p3loc;

const player1 = document.querySelector(".player1");
player1.textContent = p1money;
    
const player2 = document.querySelector(".player2");
player2.textContent = p2money;
    
const player3 = document.querySelector(".player3");
player3.textContent = p3money;
    
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

const play = [
    document.querySelector(".play1"),
    document.querySelector(".play2"),
    document.querySelector(".play3"),
    document.querySelector(".play4"),
    document.querySelector(".play5"),
    document.querySelector(".play6"),
    document.querySelector(".play7"),
    document.querySelector(".play8"),
    document.querySelector(".play9"),
    document.querySelector(".play10"),
    document.querySelector(".play11"),
    document.querySelector(".play12"),
    document.querySelector(".play13"),
    document.querySelector(".play14"),
    document.querySelector(".play15"),
    document.querySelector(".play16"),
    document.querySelector(".play17"),
    document.querySelector(".play18"),
    document.querySelector(".play19"),
    document.querySelector(".play20"),
    document.querySelector(".play21"),
    document.querySelector(".play22"),
    document.querySelector(".play23"),
    document.querySelector(".play24"),
    document.querySelector(".play25"),
    document.querySelector(".play26"),
    document.querySelector(".play27"),
    document.querySelector(".play28"),
    document.querySelector(".play29"),
    document.querySelector(".play30"),
    document.querySelector(".play31"),
    document.querySelector(".play32"),
    document.querySelector(".play33"),
    document.querySelector(".play34"),
    document.querySelector(".play35"),
    document.querySelector(".play36"),
    document.querySelector(".play37"),
    document.querySelector(".play38"),
    document.querySelector(".play39"),
    document.querySelector(".play40")
];
  
const consol = document.querySelector('.consol');
let logs = [];

function Write(text, color) {
    logs[0] = document.createElement('p');
    consol.appendChild(logs[0]);
    logs[0].textContent = text;
    if (color == 1){
        logs[0].classList.add('green');
    }
    if (color == 2){
        logs[0].classList.add('red2');
    }
    if (color == 3){
        logs[0].classList.add('blue3');
    }
}

//// fields
let fields = [
    {
        style: document.querySelector(".field2"),
        ownerstyle: document.querySelector(".owner2"),
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

        owner: 0,
        hotel: 0,
        house: 0
    },
    {
        style: document.querySelector(".field4"),
        ownerstyle: document.querySelector(".owner4"),
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

        owner: 0,
        hotel: 0,
        house: 0
    },
    {
        style: document.querySelector(".field7"),
        ownerstyle: document.querySelector(".owner7"),
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

        owner: 0,
        hotel: 0,
        house: 0
    },
    {
        style: document.querySelector(".field9"),
        ownerstyle: document.querySelector(".owner9"),
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

        owner: 0,
        hotel: 0,
        house: 0
    },
    {
        style: document.querySelector(".field10"),
        ownerstyle: document.querySelector(".owner10"),
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

        owner10: 0,
        hotel: 0,
        house: 0
    },
    {
        style: document.querySelector(".field12"),
        ownerstyle: document.querySelector(".owner12"),
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

        owner: 0,
        hotel: 0,
        house: 0
    },
    {
        style: document.querySelector(".field14"),
        ownerstyle: document.querySelector(".owner14"),
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

        owner: 0,
        hotel: 0,
        house: 0
    },   
    {
        style: document.querySelector(".field15"),
        ownerstyle: document.querySelector(".owner15"),
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

        owner: 0,
        hotel: 0,
        house: 0
    },  
    {
        style: document.querySelector(".field17"),
        ownerstyle: document.querySelector(".owner17"),
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

        owner: 0,
        hotel: 0,
        house: 0
    },   
    {
        style: document.querySelector(".field19"),
        ownerstyle: document.querySelector(".owner19"),
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

        owner: 0,
        hotel: 0,
        house: 0
    },  
    {
        style: document.querySelector(".field20"),
        ownerstyle: document.querySelector(".owner20"),
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

        owner: 0,
        hotel: 0,
        house: 0
    },
    {
        style: document.querySelector(".field22"),
        ownerstyle: document.querySelector(".owner22"),
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

        owner: 0,
        hotel: 0,
        house: 0
    },
    {
        style: document.querySelector(".field24"),
        ownerstyle: document.querySelector(".owner24"),
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

        owner: 0,
        hotel: 0,
        house: 0
    },
    {
        style: document.querySelector(".field25"),
        ownerstyle: document.querySelector(".owner25"),
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

        owner: 0,
        hotel: 0,
        house: 0
    },
    {
        style: document.querySelector(".field27"),
        ownerstyle: document.querySelector(".owner27"),
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

        owner: 0,
        hotel: 0,
        house: 0
    },
    {
        style: document.querySelector(".field28"),
        ownerstyle: document.querySelector(".owner28"),
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

        owner: 0,
        hotel: 0,
        house: 0
    },
    {
        style: document.querySelector(".field30"),
        ownerstyle: document.querySelector(".owner30"),
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

        owner: 0,
        hotel: 0,
        house: 0
    },
    {
        style: document.querySelector(".field32"),
        ownerstyle: document.querySelector(".owner32"),
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

        owner: 0,
        hotel: 0,
        house: 0
    },
    {
        style: document.querySelector(".field33"),
        ownerstyle: document.querySelector(".owner33"),
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

        owner: 0,
        hotel: 0,
        house: 0
    },
    {
        style: document.querySelector(".field35"),
        ownerstyle: document.querySelector(".owner35"),
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

        owner: 0,
        hotel: 0,
        house: 0
    },
    {
        style: document.querySelector(".field38"),
        ownerstyle: document.querySelector(".owner38"),
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

        owner: 0,
        hotel: 0,
        house: 0
    },
    {
        style: document.querySelector(".field40"),
        ownerstyle: document.querySelector(".owner40"),
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

        owner: 0,
        hotel: 0,
        house: 0
    },
    // trains
    {
        style: document.querySelector(".field6"),
        ownerstyle: document.querySelector(".owner6"),
        price: 200,
        
        rent: 25,
        rent2: 50,
        rent3: 100,
        rent4: 200,

        mortgage: 100,
        mortgageRepayment: 110,

        owner: 0
    },
    {
        style: document.querySelector(".field16"),
        ownerstyle: document.querySelector(".owner16"),
        price: 200,
        
        rent: 25,
        rent2: 50,
        rent3: 100,
        rent4: 200,

        mortgage: 100,
        mortgageRepayment: 110,

        owner: 0
    },
    {
        style: document.querySelector(".field26"),
        ownerstyle: document.querySelector(".owner26"),
        price: 200,
        
        rent: 25,
        rent2: 50,
        rent3: 100,
        rent4: 200,

        mortgage: 100,
        mortgageRepayment: 110,

        owner: 0
    },
    {
        style: document.querySelector(".field36"),
        ownerstyle: document.querySelector(".owner36"),
        price: 200,
        
        rent: 25,
        rent2: 50,
        rent3: 100,
        rent4: 200,

        mortgage: 100,
        mortgageRepayment: 110,

        owner: 0
    },
    //special
    {
        style: document.querySelector(".field13"),
        ownerstyle: document.querySelector(".owner13"),
        price: 150,
        
        mortgage: 75,
        mortgageRepayment: 83,

        owner: 0
    },
    {
        style: document.querySelector(".field29"),
        ownerstyle: document.querySelector(".owner29"),
        price: 150,
        
        mortgage: 75,
        mortgageRepayment: 83,

        owner: 0
    }
];

document.addEventListener("mouseout", function(e) { 
    magnification.classList.add('hide');
},false);    


for (let i=0; i<fields.length; i++) {
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

        if(i == 0){ magnification.classList.add('bigfield2'); }
        if(i == 1){ magnification.classList.add('bigfield4'); }
        if(i == 2){ magnification.classList.add('bigfield7'); }
        if(i == 3){ magnification.classList.add('bigfield9'); }
        if(i == 4){ magnification.classList.add('bigfield10'); }
        if(i == 5){ magnification.classList.add('bigfield12'); }
        if(i == 6){ magnification.classList.add('bigfield14'); }
        if(i == 7){ magnification.classList.add('bigfield15'); }
        if(i == 8){ magnification.classList.add('bigfield17'); }
        if(i == 9){ magnification.classList.add('bigfield19'); }
        if(i == 10){ magnification.classList.add('bigfield20'); }
        if(i == 11){ magnification.classList.add('bigfield22'); }
        if(i == 12){ magnification.classList.add('bigfield24'); }
        if(i == 13){ magnification.classList.add('bigfield25'); }
        if(i == 14){ magnification.classList.add('bigfield27'); }
        if(i == 15){ magnification.classList.add('bigfield28'); }
        if(i == 16){ magnification.classList.add('bigfield30'); }
        if(i == 17){ magnification.classList.add('bigfield32'); }
        if(i == 18){ magnification.classList.add('bigfield33'); }
        if(i == 19){ magnification.classList.add('bigfield35'); }
        if(i == 20){ magnification.classList.add('bigfield38'); }
        if(i == 21){ magnification.classList.add('bigfield40'); }
        if(i == 22){ magnification.classList.add('bigfield6'); }
        if(i == 23){ magnification.classList.add('bigfield16'); }
        if(i == 24){ magnification.classList.add('bigfield26'); }
        if(i == 25){ magnification.classList.add('bigfield36'); }
        if(i == 26){ magnification.classList.add('bigfield13'); }
        if(i == 27){ magnification.classList.add('bigfield29'); }

        if(i == 22 || i == 23 || i == 24 || i == 25) {
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

        if(i == 26 || i == 27) {
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

        if(fields[i].owner == 1){
            document.querySelector('.oatput2').textContent = 'Gracz 1';
            oatput2.classList.add('green');
        } else if (fields[i].owner == 2){
            document.querySelector('.oatput2').textContent = 'Gracz 2';
             oatput2.classList.add('red2');
         } else if (fields[i].owner == 3){
            document.querySelector('.oatput2').textContent = 'Gracz 3';
            oatput2.classList.add('blue3');
        } else if (fields[i].owner == 0){
            document.querySelector('.oatput2').textContent = 'Brak';
            oatput2.classList.remove('green');
            oatput2.classList.remove('red2');
            oatput2.classList.remove('blue3');
        }
    },false);
};

function drawCard() {
    draw = Math.random() * 15 + 1 ;
    draw = Math.round(draw);
}
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

function move(variable, who) {
    variable = variable + destyny;

    if(variable > 40) {
        variable = variable - 40;
        if (who == 1) {
            Write('START- otrzymujesz pensję 200$.', 1);
            p1money = p1money + 200;
        }
        if (who == 2) {
            Write('START- Gracz 2 otrzymuje pensję 200$.', 2);
            p2money = p2money + 200;
        }
        if (who == 3) {
            Write('START- Gracz 3 otrzymuje pensję 200$.', 3);
            p3money = p3money + 200;
        }
    }
    if (who == 1) {
        Write('Lądujesz na polu: ' + (variable + 1) + ".", 1);
        p1loc = variable;
    }
    if (who == 2) {
        Write('Gracz 2 ląduje na polu: ' + (variable + 1) + ".", 2);
        p2loc = variable;
    }
    if (who == 3) {
        Write('Gracz 3 ląduje na polu: ' + (variable + 1) + ".", 3);
        p3loc = variable;
    }

    for (let i=0; i<play.length; i++) {
        if(who == 1 && variable == i) {
            play[i].classList.add('p1');
        }
        if(who == 2 && variable == i) {
            play[i].classList.add('p2');
        }
        if(who == 3 && variable == i) {
            play[i].classList.add('p3');
        }
    }

    if(variable == 4 && who == 1) {
        Write('Podatek dochodowy. Płacisz 200$', 1);
        p1money = p1money - 200;
    }
    if(variable == 4 && who == 2) {
        Write('Podatek dochodowy. Gracz 2 płaci 200$', 2);
        p2money = p2money - 200;
    }
    if(variable == 4 && who == 3) {
        Write('Podatek dochodowy. Gracz 3 płaci 200$', 3);
        p3money = p3money - 200;
    }


    if(variable == 38 && who == 1) {
        Write('Podatek dochodowy. Płacisz 100$', 1);
        p1money = p1money - 100;
    }
    if(variable == 38 && who == 2) {
        Write('Podatek dochodowy. Gracz 2 płaci 100$', 2);
        p2money = p2money - 100;
    }
    if(variable == 38 && who == 3) {
        Write('Podatek dochodowy. Gracz 3 płaci 100$', 3);
        p3money = p3money - 100;
    }
    
    player1.textContent = p1money;
    player2.textContent = p2money;
    player3.textContent = p3money;   
}

function pClean(who) {
    if(who == 1){
        for (let i=0; i<play.length; i++) {
            play[i].classList.remove('p1')
        }
    }
    if(who == 2){
        for (let i=0; i<play.length; i++) {
            play[i].classList.remove('p2')
        }
    }
    if(who == 3){
        for (let i=0; i<play.length; i++) {
            play[i].classList.remove('p3')
        }
    }
}

const question = document.querySelector('.question'),
    questionText = document.querySelector('.questionText'),
    questionOatput = document.querySelector('.questionOatput'),
    ok = document.querySelector(".ok");

function redQuestion() {
    if(p1loc == 8 || p1loc == 23 || p1loc == 37){
        question.classList.remove('hide');
        questionText.classList.remove('hide');
        questionText.classList.remove('blue');
        questionText.classList.add('red');
        ok.classList.remove('blueok');
        ok.classList.add('redok');
        
        drawCard();

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Losuję kartę czerwoną. Wypadło: ' + draw + '.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);

        if(draw == 1){
            document.querySelector('.questionOatput').textContent = "Otrzymujesz spłatę kredytu budowlanego. Pobierz 150$.";
            p1money = p1money + 150;
        } else if(draw == 2 || draw == 3){
            document.querySelector('.questionOatput').textContent = "Idz na najbliższe pole DWORZEC KOLEJOWY. Jeżeli pole ma właściciela zapłać mu dwukrotną wysokość czynszu.";
            if(p1loc == 8){
                destyny = 0;
                p1loc = 6;
            }
            if(p1loc == 23){
                destyny = 0;
                p1loc = 26;
            }
            if(p1loc == 37){
                destyny = 0;
                p1loc = 36;
            }
            pClean(1);
            move(p1loc, 1);
        } else if(draw == 4){
            lottery(0);
            lottery(1);
            destyny = roll[0] + roll[1];
            document.querySelector('.questionOatput').textContent = "Idz na najbliższe pole ELEKTROWNIA lub WODICIĄGI. Jeżeli pole ma właściciela, zapłać jego właścicielowi równowartość 10x suma wyrzuconych oczek (wypadło '" +  destyny + "')." ;
            if(p1loc == 8){
                destyny = 0;
                p1loc = 13;
            }
            if(p1loc == 23){
                destyny = 0;
                p1loc = 29;
            }
            if(p1loc == 37){
                destyny = 0;
                p1loc = 29;
            }
            pClean(1);
            move(p1loc, 1);
        } else if(draw == 5){
            document.querySelector('.questionOatput').textContent = "Mandat za przekroczenie prędkości 15$.";
            p1money = p1money - 15;
        } else if(draw == 6){
            document.querySelector('.questionOatput').textContent = "WYJDŹ BEZPŁATIE Z WIĘZIENIA. Kartę możesz zachować i wykorzystać w razie potrzeby lub odsprzedać innemu graczowi.";

        } else if(draw == 7){
            document.querySelector('.questionOatput').textContent = "Cofnij się o trzy pola.";
            destyny = -3;
            pClean(1);
            move(p1loc, 1);
        } else if(draw == 8){
            document.querySelector('.questionOatput').textContent = "Idz na pole 24. Jeżeli mijasz start, pobierz 200$.";
            if(p1loc == 37){
                p1money = p1money + 200;
            }
            destyny = 0;
            p1loc = 24;
            pClean(1);
            move(p1loc, 1);
        } else if(draw == 9){
            document.querySelector('.questionOatput').textContent = "Wybrano cię prezesem zarządu. Zapłać każdemu graczowi $50.";
            if(p2money > 0){
                p2money = p2money + 50;
                p1money = p1money - 50;
                }
            if(p3money > 0){
                p3money = p3money + 50;
                p1money = p1money - 50;
                }
        } else if(draw == 10){
            document.querySelector('.questionOatput').textContent = "Idź na pole DWORZEC ZACHÓD. Jeżeli mijasz pole start, pobierz 200$.";
            if(p1loc == 23 || p1loc == 37){
                p1money = p1money + 200;
            }
            destyny = 0;
            p1loc = 16;
            pClean(1);
            move(p1loc, 1);

        } else if(draw == 11){
            document.querySelector('.questionOatput').textContent = "Idź na pole 40.";
            destyny = 0;
            p1loc = 40;
            pClean(1);
            move(p1loc, 1);
        } else if(draw == 12){
            document.querySelector('.questionOatput').textContent = "Przeprowadzasz generalny remont wszystkich nieruchomości: za każdy dom płacisz 25$, za każdy hotel płacisz 100$.";
        } else if(draw == 13){
            document.querySelector('.questionOatput').textContent = "Idz na pole 12. Jeżeli mijasz start, pobierz 200$.";
           if(p1loc == 23 || p1loc == 37){
                p1money = p1money +200;
           }
            destyny = 0;
            p1loc = 12;
            pClean(1);
            move(p1loc, 1);
        } else if(draw == 14){
            document.querySelector('.questionOatput').textContent = "Bank wypłaca ci dywidendę w kwocie 50$.";
            p1money = p1money +50;
        } else if(draw == 15){
            document.querySelector('.questionOatput').textContent = "Idż na pole START. (Pobierz 200$).";
            p1money = p1money + 200;
            destyny = 0;
            p1loc = 1;
            pClean(1);
            move(p1loc, 1);
        } else if(draw == 16){
            document.querySelector('.questionOatput').textContent = "Idź do więzienia. Idziesz bezpośrednio do więziena, nie mijasz pola start, nie pobierasz 200$.";
        }
    }
    document.querySelector('.player1').textContent = p1money;
    document.querySelector('.player2').textContent = p2money;
    document.querySelector('.player3').textContent = p3money;
}
function redQuestion2() {
    if(p2loc == 8 || p2loc == 23 || p2loc == 37){

        drawCard();

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Losuję kartę czerwoną. Wypadło: ' + draw + '.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);

        if(draw == 1){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Otrzymujesz spłatę kredytu budowlanego. Pobierz 150$"."';
            log.classList.add('red2');
            consol.scrollTo(0, 10000000000);

            p2money = p2money + 150;
        } else if(draw == 2 || draw == 3){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Idz na najbliższe pole DWORZEC KOLEJOWY. Jeżeli pole ma właściciela zapłać mu dwukrotną wysokość czynszu."';
            log.classList.add('red2');
            consol.scrollTo(0, 10000000000);

            if(p2loc == 8){
                destyny = 0;
                p2loc = 6;
            }
            if(p2loc == 23){
                destyny = 0;
                p2loc = 26;
            }
            if(p2loc == 37){
                destyny = 0;
                p2loc = 36;
            }
            pClean(2);
            move(p2loc, 2);
        } else if(draw == 4){
            lottery(0);
            lottery(1);
            destyny = roll[0] + roll[1];

            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Idz na najbliższe pole ELEKTROWNIA lub WODICIĄGI. Jeżeli pole ma właściciela, zapłać jego właścicielowi równowartość 10x suma wyrzuconych oczek (wypadło ' +  destyny + ')."';
            log.classList.add('red2');
            consol.scrollTo(0, 10000000000);

            if(p2loc == 8){
                destyny = 0;
                p2loc = 13;
            }
            if(p2loc == 23){
                destyny = 0;
                p2loc = 29;
            }
            if(p2loc == 37){
                destyny = 0;
                p2loc = 29;
            }
            pClean(2);
            move(p2loc, 2);
        } else if(draw == 5){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Mandat za przekroczenie prędkości 15$."';
            log.classList.add('red2');
            consol.scrollTo(0, 10000000000);

            p2money = p2money - 15;
        } else if(draw == 6){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"WYJDŹ BEZPŁATIE Z WIĘZIENIA. Kartę możesz zachować i wykorzystać w razie potrzeby lub odsprzedać innemu graczowi."';
            log.classList.add('red2');
            consol.scrollTo(0, 10000000000);

        } else if(draw == 7){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Cofnij się o trzy pola."';
            log.classList.add('red2');
            consol.scrollTo(0, 10000000000);

            destyny = -3;
            pClean(2);
            move(p2loc, 2);
        } else if(draw == 8){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Idz na pole 24. Jeżeli mijasz start, pobierz 200$."';
            log.classList.add('red2');
            consol.scrollTo(0, 10000000000);

            if(p2loc == 37){
                p2money = p2money + 200;
            }
            destyny = 0;
            p2loc = 24;
            pClean(2);
            move(p2loc, 2);
        } else if(draw == 9){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Wybrano cię prezesem zarządu. Zapłać każdemu graczowi $50."';
            log.classList.add('red2');
            consol.scrollTo(0, 10000000000);

            if(p1money > 0){
                p1money = p1money + 50;
                p2money = p2money - 50;
                }
            if(p3money > 0){
                p3money = p3money + 50;
                p2money = p2money - 50;
                }
        } else if(draw == 10){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Idź na pole DWORZEC ZACHÓD. Jeżeli mijasz pole start, pobierz 200$."';
            log.classList.add('red2');
            consol.scrollTo(0, 10000000000);

            if(p2loc == 23 || p2loc == 37){
                p2money = p2money + 200;
            }
            destyny = 0;
            p2loc = 16;
            pClean(2);
            move(p2loc, 2);

        } else if(draw == 11){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Idź na pole 40."';
            log.classList.add('red2');
            consol.scrollTo(0, 10000000000);

            destyny = 0;
            p2loc = 40;
            pClean(2);
            move(p2loc, 2);
        } else if(draw == 12){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Przeprowadzasz generalny remont wszystkich nieruchomości: za każdy dom płacisz 25$, za każdy hotel płacisz 100$."';
            log.classList.add('red2');
            consol.scrollTo(0, 10000000000);

        } else if(draw == 13){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Idz na pole 12. Jeżeli mijasz start, pobierz 200$."';
            log.classList.add('red2');
            consol.scrollTo(0, 10000000000);

           if(p2loc == 23 || p2loc == 37){
                p2money = p2money +200;
           }
            destyny = 0;
            p2loc = 12;
            pClean(2);
            move(p2loc, 2);
        } else if(draw == 14){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Bank wypłaca ci dywidendę w kwocie 50$."';
            log.classList.add('red2');
            consol.scrollTo(0, 10000000000);

            p2money = p2money +50;
        } else if(draw == 15){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Idż na pole START. (Pobierz 200$)."';
            log.classList.add('red2');
            consol.scrollTo(0, 10000000000);

            p2money = p2money + 200;
            destyny = 0;
            p2loc = 1;
            pClean(2);
            move(p2loc, 2);
        } else if(draw == 16){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Idź do więzienia. Idziesz bezpośrednio do więziena, nie mijasz pola start, nie pobierasz 200$."';
            log.classList.add('red2');
            consol.scrollTo(0, 10000000000);
            
        }
    }
    document.querySelector('.player1').textContent = p1money;
    document.querySelector('.player2').textContent = p2money;
    document.querySelector('.player3').textContent = p3money;
}
function redQuestion3() {
    if(p3loc == 8 || p3loc == 23 || p3loc == 37){
        
        drawCard();

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Losuję kartę czerwoną. Wypadło: ' + draw + '.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);

        if(draw == 1){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Otrzymujesz spłatę kredytu budowlanego. Pobierz 150$"."';
            log.classList.add('blue3');
            consol.scrollTo(0, 10000000000);

            p3money = p3money + 150;
        } else if(draw == 2 || draw == 3){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Idz na najbliższe pole DWORZEC KOLEJOWY. Jeżeli pole ma właściciela zapłać mu dwukrotną wysokość czynszu."';
            log.classList.add('blue3');
            consol.scrollTo(0, 10000000000);

            if(p3loc == 8){
                destyny = 0;
                p3loc = 6;
            }
            if(p3loc == 23){
                destyny = 0;
                p3loc = 26;
            }
            if(p3loc == 37){
                destyny = 0;
                p3loc = 36;
            }
            pClean(3);
            move(p3loc, 3);
        } else if(draw == 4){
            lottery(0);
            lottery(1);
            destyny = roll[0] + roll[1];

            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Idz na najbliższe pole ELEKTROWNIA lub WODICIĄGI. Jeżeli pole ma właściciela, zapłać jego właścicielowi równowartość 10x suma wyrzuconych oczek (wypadło ' +  destyny + ')."';
            log.classList.add('blue3');
            consol.scrollTo(0, 10000000000);

            if(p3loc == 8){
                destyny = 0;
                p3loc = 13;
            }
            if(p3loc == 23){
                destyny = 0;
                p3loc = 29;
            }
            if(p3loc == 37){
                destyny = 0;
                p3loc = 29;
            }
            pClean(3);
            move(p3loc, 3);
        } else if(draw == 5){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Mandat za przekroczenie prędkości 15$."';
            log.classList.add('blue3');
            consol.scrollTo(0, 10000000000);

            p3money = p3money - 15;
        } else if(draw == 6){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"WYJDŹ BEZPŁATIE Z WIĘZIENIA. Kartę możesz zachować i wykorzystać w razie potrzeby lub odsprzedać innemu graczowi."';
            log.classList.add('blue3');
            consol.scrollTo(0, 10000000000);

        } else if(draw == 7){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Cofnij się o trzy pola."';
            log.classList.add('blue3');
            consol.scrollTo(0, 10000000000);

            destyny = -3;
            pClean(3);
            move(p3loc, 3);
        } else if(draw == 8){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Idz na pole 24. Jeżeli mijasz start, pobierz 200$."';
            log.classList.add('blue3');
            consol.scrollTo(0, 10000000000);

            if(p3loc == 37){
                p3money = p3money + 200;
            }
            destyny = 0;
            p3loc = 24;
            pClean(3);
            move(p3loc, 3);
        } else if(draw == 9){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Wybrano cię prezesem zarządu. Zapłać każdemu graczowi $50."';
            log.classList.add('blue3');
            consol.scrollTo(0, 10000000000);

            if(p1money > 0){
                p1money = p1money + 50;
                p3money = p3money - 50;
                }
            if(p2money > 0){
                p2money = p2money + 50;
                p3money = p3money - 50;
                }
        } else if(draw == 10){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Idź na pole DWORZEC ZACHÓD. Jeżeli mijasz pole start, pobierz 200$."';
            log.classList.add('blue3');
            consol.scrollTo(0, 10000000000);

            if(p3loc == 23 || p3loc == 37){
                p3money = p3money + 200;
            }
            destyny = 0;
            p3loc = 16;
            pClean(3);
            move(p3loc, 3);

        } else if(draw == 11){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Idź na pole 40."';
            log.classList.add('blue3');
            consol.scrollTo(0, 10000000000);

            destyny = 0;
            p3loc = 40;
            pClean(3);
            move(p3loc, 3);
        } else if(draw == 12){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Przeprowadzasz generalny remont wszystkich nieruchomości: za każdy dom płacisz 25$, za każdy hotel płacisz 100$."';
            log.classList.add('blue3');
            consol.scrollTo(0, 10000000000);

        } else if(draw == 13){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Idz na pole 12. Jeżeli mijasz start, pobierz 200$."';
            log.classList.add('blue3');
            consol.scrollTo(0, 10000000000);

           if(p3loc == 23 || p3loc == 37){
                p3money = p3money +200;
           }
            destyny = 0;
            p3loc = 12;
            pClean(3);
            move(p3loc, 3);
        } else if(draw == 14){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Bank wypłaca ci dywidendę w kwocie 50$."';
            log.classList.add('blue3');
            consol.scrollTo(0, 10000000000);

            p3money = p3money +50;
        } else if(draw == 15){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Idż na pole START. (Pobierz 200$)."';
            log.classList.add('blue3');
            consol.scrollTo(0, 10000000000);

            p3money = p3money + 200;
            destyny = 0;
            p3loc = 1;
            pClean(3);
            move(p3loc, 3);
        } else if(draw == 16){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Idź do więzienia. Idziesz bezpośrednio do więziena, nie mijasz pola start, nie pobierasz 200$."';
            log.classList.add('blue3');
            consol.scrollTo(0, 10000000000);
            
        }
    }
    document.querySelector('.player1').textContent = p1money;
    document.querySelector('.player2').textContent = p2money;
    document.querySelector('.player3').textContent = p3money;
}
function blueQuestion() {
    if(p1loc == 3 || p1loc == 18 || p1loc == 34){
        question.classList.remove('hide');
        questionText.classList.remove('hide');
        questionText.classList.remove('red');
        questionText.classList.add('blue');
        ok.classList.remove('redok');
        ok.classList.add('blueok');
       
        drawCard();

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Losuję kartę niebieską. Wypadło: ' + draw + '.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);

        if(draw == 1){
            document.querySelector('.questionOatput').textContent = "Idż na pole START. (Pobierz 200$).";
            p1money = p1money + 200;
            destyny = 0;
            p1loc = 1;
            pClean(1);
            move(p1loc, 1);
        } else if(draw == 2){
            document.querySelector('.questionOatput').textContent = "Pomyłka banku na twoją korzyść. Pobierz 200$.";
            p1money = p1money + 200;
        } else if(draw == 3){
            document.querySelector('.questionOatput').textContent = "Sprzedajesz akcje z zyskiem. Pobierz 50$.";
            p1money = p1money + 50;
        } else if(draw == 4){
            document.querySelector('.questionOatput').textContent = "Dziedziczysz spadek w wysokości 100$.";
            p1money = p1money + 100;
        } else if(draw == 5){
            document.querySelector('.questionOatput').textContent = "Dziś są twoje urodziny pobierz 10$ od każdego z graczy.";
            if(p2money >= 10){
                p2money = p2money - 10;
                p1money = p1money + 10;
                }
            if(p3money >= 10){
                p3money = p3money - 10;
                p1money = p1money + 10;
                }
        } else if(draw == 6){
            document.querySelector('.questionOatput').textContent = "Pobierz 25$ za usługę konsultingową.";
            p1money = p1money + 25;
        } else if(draw == 7){
            document.querySelector('.questionOatput').textContent = "Idź do więzienia. Idziesz bezpośrednio do więziena, nie mijasz pola start, nie pobierasz 200$.";
        } else if(draw == 8){
            document.querySelector('.questionOatput').textContent = "Otrzymujesz wypłatę z funduszu wakacyjnego. Pobierz 100$.";
            p1money = p1money + 100;
        } else if(draw == 9){
            document.querySelector('.questionOatput').textContent = "Opłata za konsultację lekarską. Zapłać 50$.";
            p1money = p1money - 50;
        } else if(draw == 10){
            document.querySelector('.questionOatput').textContent = "Opłata za czesne. Zapłać 50$.";
            p1money = p1money - 50;
        } else if(draw == 11){
            document.querySelector('.questionOatput').textContent = "Otrzymujesz wypłatę z ubezpieczeniea na życie. Pobierz 100$.";
            p1money = p1money + 100;
        } else if(draw == 12){
            document.querySelector('.questionOatput').textContent = "Zwrot podatku dochodowego. Pobierz 20$.";
            p1money = p1money + 20;
        } else if(draw == 13){
            document.querySelector('.questionOatput').textContent = "Opłata za pobyt w szpitalu. Zapłać 100$.";
            p1money = p1money - 100;
        } else if(draw == 14){
            document.querySelector('.questionOatput').textContent = "WYJDŹ BEZPŁATIE Z WIĘZIENIA. Kartę możesz zachować i wykorzystać w razie potrzeby lub odsprzedać innemu graczowi.";
        } else if(draw == 15){
            document.querySelector('.questionOatput').textContent = "Zajmuejsz drugie miejsce w konkursie piękności. Pobierz 10$.";
            p1money = p1money + 10;
        } else if(draw == 16){
            document.querySelector('.questionOatput').textContent = "Obliczono koszt napraw komunalnych twoich nieruchomości: zapłać 40$ za każdy dom 115$ za każdy hotel, jaki posiadasz.";
        }
    }
    document.querySelector('.player1').textContent = p1money;
    document.querySelector('.player2').textContent = p2money;
    document.querySelector('.player3').textContent = p3money;
}
function blueQuestion2() {
    if(p2loc == 3 || p2loc == 18 || p2loc == 34){
        
        drawCard();

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Losuję kartę niebieską. Wypadło: ' + draw + '.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);

        if(draw == 1){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Idż na pole START. (Pobierz 200$)."';
            log.classList.add('red2');
            consol.scrollTo(0, 10000000000);

            p2money = p2money + 200;
            destyny = 0;
            p2loc = 1;
            pClean(2);
            move(p2loc, 2);
        } else if(draw == 2){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Pomyłka banku na twoją korzyść. Pobierz 200$."';
            log.classList.add('red2');
            consol.scrollTo(0, 10000000000);

            p2money = p2money + 200;
        } else if(draw == 3){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Sprzedajesz akcje z zyskiem. Pobierz 50$."';
            log.classList.add('red2');
            consol.scrollTo(0, 10000000000);

            p2money = p2money + 50;
        } else if(draw == 4){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Dziedziczysz spadek w wysokości 100$."';
            log.classList.add('red2');
            consol.scrollTo(0, 10000000000);

            p2money = p2money + 100;
        } else if(draw == 5){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Dziś są twoje urodziny pobierz 10$ od każdego z graczy."';
            log.classList.add('red2');
            consol.scrollTo(0, 10000000000);

            if(p1money >= 10){
                p1money = p1money - 10;
                p2money = p2money + 10;
                }
            if(p3money >= 10){
                p3money = p3money - 10;
                p2money = p2money + 10;
                }
        } else if(draw == 6){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Pobierz 25$ za usługę konsultingową."';
            log.classList.add('red2');
            consol.scrollTo(0, 10000000000);

            p2money = p2money + 25;
        } else if(draw == 7){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Idź do więzienia. Idziesz bezpośrednio do więziena, nie mijasz pola start, nie pobierasz 200$."';
            log.classList.add('red2');
            consol.scrollTo(0, 10000000000);

        } else if(draw == 8){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Otrzymujesz wypłatę z funduszu wakacyjnego. Pobierz 100$."';
            log.classList.add('red2');
            consol.scrollTo(0, 10000000000);

            p2money = p2money + 100;
        } else if(draw == 9){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Opłata za konsultację lekarską. Zapłać 50$."';
            log.classList.add('red2');
            consol.scrollTo(0, 10000000000);

            p2money = p2money - 50;
        } else if(draw == 10){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Opłata za czesne. Zapłać 50$."';
            log.classList.add('red2');
            consol.scrollTo(0, 10000000000);

            p2money = p2money - 50;
        } else if(draw == 11){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Otrzymujesz wypłatę z ubezpieczeniea na życie. Pobierz 100$."';
            log.classList.add('red2');
            consol.scrollTo(0, 10000000000);

            p2money = p2money + 100;
        } else if(draw == 12){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Zwrot podatku dochodowego. Pobierz 20$."';
            log.classList.add('red2');
            consol.scrollTo(0, 10000000000);

            p2money = p2money + 20;
        } else if(draw == 13){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Opłata za pobyt w szpitalu. Zapłać 100$."';
            log.classList.add('red2');
            consol.scrollTo(0, 10000000000);

            p2money = p2money - 100;
        } else if(draw == 14){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"WYJDŹ BEZPŁATIE Z WIĘZIENIA. Kartę możesz zachować i wykorzystać w razie potrzeby lub odsprzedać innemu graczowi."';
            log.classList.add('red2');
            consol.scrollTo(0, 10000000000);

        } else if(draw == 15){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Zajmuejsz drugie miejsce w konkursie piękności. Pobierz 10$."';
            log.classList.add('red2');
            consol.scrollTo(0, 10000000000);

            p2money = p2money + 10;
        } else if(draw == 16){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Obliczono koszt napraw komunalnych twoich nieruchomości: zapłać 40$ za każdy dom 115$ za każdy hotel, jaki posiadasz."';
            log.classList.add('red2');
            consol.scrollTo(0, 10000000000);
        }
    }
    document.querySelector('.player1').textContent = p1money;
    document.querySelector('.player2').textContent = p2money;
    document.querySelector('.player3').textContent = p3money;
}
function blueQuestion3() {
    if(p3loc == 3 || p3loc == 18 || p3loc == 34){

        drawCard();

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Losuję kartę niebieską. Wypadło: ' + draw + '.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);

        if(draw == 1){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Idż na pole START. (Pobierz 200$)."';
            log.classList.add('blue3');
            consol.scrollTo(0, 10000000000);

            p3money = p3money + 200;
            destyny = 0;
            p3loc = 1;
            pClean(3);
            move(p3loc, 3);
        } else if(draw == 2){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Pomyłka banku na twoją korzyść. Pobierz 200$."';
            log.classList.add('blue3');
            consol.scrollTo(0, 10000000000);

            p3money = p3money + 200;
        } else if(draw == 3){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Sprzedajesz akcje z zyskiem. Pobierz 50$."';
            log.classList.add('blue3');
            consol.scrollTo(0, 10000000000);

            p3money = p3money + 50;
        } else if(draw == 4){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Dziedziczysz spadek w wysokości 100$."';
            log.classList.add('blue3');
            consol.scrollTo(0, 10000000000);

            p3money = p3money + 100;
        } else if(draw == 5){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Dziś są twoje urodziny pobierz 10$ od każdego z graczy."';
            log.classList.add('blue3');
            consol.scrollTo(0, 10000000000);

            if(p1money >= 10){
                p1money = p1money - 10;
                p3money = p3money + 10;
                }
            if(p2money >= 10){
                p2money = p2money - 10;
                p3money = p3money + 10;
                }
        } else if(draw == 6){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Pobierz 25$ za usługę konsultingową."';
            log.classList.add('blue3');
            consol.scrollTo(0, 10000000000);

            p3money = p3money + 25;
        } else if(draw == 7){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Idź do więzienia. Idziesz bezpośrednio do więziena, nie mijasz pola start, nie pobierasz 200$."';
            log.classList.add('blue3');
            consol.scrollTo(0, 10000000000);

        } else if(draw == 8){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Otrzymujesz wypłatę z funduszu wakacyjnego. Pobierz 100$."';
            log.classList.add('blue3');
            consol.scrollTo(0, 10000000000);

            p3money = p3money + 100;
        } else if(draw == 9){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Opłata za konsultację lekarską. Zapłać 50$."';
            log.classList.add('blue3');
            consol.scrollTo(0, 10000000000);

            p3money = p3money - 50;
        } else if(draw == 10){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Opłata za czesne. Zapłać 50$."';
            log.classList.add('blue3');
            consol.scrollTo(0, 10000000000);

            p3money = p3money - 50;
        } else if(draw == 11){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Otrzymujesz wypłatę z ubezpieczeniea na życie. Pobierz 100$."';
            log.classList.add('blue3');
            consol.scrollTo(0, 10000000000);

            p3money = p3money + 100;
        } else if(draw == 12){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Zwrot podatku dochodowego. Pobierz 20$."';
            log.classList.add('blue3');
            consol.scrollTo(0, 10000000000);

            p3money = p3money + 20;
        } else if(draw == 13){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Opłata za pobyt w szpitalu. Zapłać 100$."';
            log.classList.add('blue3');
            consol.scrollTo(0, 10000000000);

            p3money = p3money - 100;
        } else if(draw == 14){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"WYJDŹ BEZPŁATIE Z WIĘZIENIA. Kartę możesz zachować i wykorzystać w razie potrzeby lub odsprzedać innemu graczowi."';
            log.classList.add('blue3');
            consol.scrollTo(0, 10000000000);

        } else if(draw == 15){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Zajmuejsz drugie miejsce w konkursie piękności. Pobierz 10$."';
            log.classList.add('blue3');
            consol.scrollTo(0, 10000000000);

            p3money = p3money + 10;
        } else if(draw == 16){
            var log = document.createElement('p');
            consol.appendChild(log);
            log.textContent = '"Obliczono koszt napraw komunalnych twoich nieruchomości: zapłać 40$ za każdy dom 115$ za każdy hotel, jaki posiadasz."';
            log.classList.add('blue3');
            consol.scrollTo(0, 10000000000);
        }
    }
    document.querySelector('.player1').textContent = p1money;
    document.querySelector('.player2').textContent = p2money;
    document.querySelector('.player3').textContent = p3money;
}
ok.addEventListener("click", function(e) { 
    question.classList.add('hide');
    questionText.classList.add('hide');
},false);

const buy = document.querySelector('.buy');
function CanIBuy() {
    if(p1loc == 2 && fields[0].owner == 0){
        buy.classList.remove('hide');
    } else if(p1loc == 4 && fields[1].owner == 0){
        buy.classList.remove('hide');
    } else if(p1loc == 6 && fields[23].owner == 0){
        buy.classList.remove('hide');
    } else if(p1loc == 7 && fields[2].owner == 0){
        buy.classList.remove('hide');
    } else if(p1loc == 9 && fields[3].owner == 0){
        buy.classList.remove('hide');
    } else if(p1loc == 10 && fields[4].owner == 0){
        buy.classList.remove('hide');
    } else if(p1loc == 12 && fields[5].owner == 0){
        buy.classList.remove('hide');
    } else if(p1loc == 13 && fields[27].owner == 0){
        buy.classList.remove('hide');
    } else if(p1loc == 14 && fields[7].owner == 0){
        buy.classList.remove('hide');
    } else if(p1loc == 15 && fields[8].owner == 0){
        buy.classList.remove('hide');
    } else if(p1loc == 16 && fields[24].owner == 0){
        buy.classList.remove('hide');
    } else if(p1loc == 17 && fields[9].owner == 0){
        buy.classList.remove('hide');
    } else if(p1loc == 19 && fields[10].owner == 0){
        buy.classList.remove('hide');
    } else if(p1loc == 20 && fields[11].owner == 0){
        buy.classList.remove('hide');
    } else if(p1loc == 22 && fields[12].owner == 0){
        buy.classList.remove('hide');
    } else if(p1loc == 24 && fields[13].owner == 0){
        buy.classList.remove('hide');
    } else if(p1loc == 25 && fields[14].owner == 0){
        buy.classList.remove('hide');
    } else if(p1loc == 26 && fields[25].owner == 0){
        buy.classList.remove('hide');
    } else if(p1loc == 27 && fields[15].owner == 0){
        buy.classList.remove('hide');
    } else if(p1loc == 28 && fields[16].owner == 0){
        buy.classList.remove('hide');
    } else if(p1loc == 29 && fields[28].owner == 0){
        buy.classList.remove('hide');
    } else if(p1loc == 30 && fields[17].owner == 0){
        buy.classList.remove('hide');
    } else if(p1loc == 32 && fields[18].owner == 0){
        buy.classList.remove('hide');
    } else if(p1loc == 33 && fields[19].owner == 0){
        buy.classList.remove('hide');
    } else if(p1loc == 35 && fields[20].owner == 0){
        buy.classList.remove('hide');
    } else if(p1loc == 36 && fields[26].owner == 0){
        buy.classList.remove('hide');
    } else if(p1loc == 38 && fields[21].owner == 0){
        buy.classList.remove('hide');
    } else if(p1loc == 40 && fields[22].owner == 0){
        buy.classList.remove('hide');
    }
}
function whoOwn() {
    for (let i=0; i<fields.length; i++) {
        if(fields[i].owner == 1){
            fields[i].ownerstyle.classList.add('ownerp1');
        }
        if(fields[i].owner == 2){
            fields[i].ownerstyle.classList.add('ownerp2');
        }
        if(fields[i].owner == 3){
            fields[i].ownerstyle.classList.add('ownerp3');
        }
    }
}  
function Pay1player() {
    if(p1loc == 2 && f2.owner == 2 && f2.hotel == 1){
        p1money = p1money - f2.rentHotel;
        p2money = p2money + f2.rentHotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + f2.rentHotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 2 && f2.owner == 2 && dom2 == 4){
        p1money = p1money - f2.rent4house;
        p2money = p2money + f2.rent4house;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + f2.rent4house + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 2 && f2.owner == 2 && dom2 == 3){
        p1money = p1money - f2.rent3house;
        p2money = p2money + f2.rent3house;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + f2.rent3house + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 2 && f2.owner == 2 && dom2 == 2){
        p1money = p1money - f2.rent2house;
        p2money = p2money + f2.rent2house;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + f2.rent2house + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 2 && f2.owner == 2 && dom2 == 1){
        p1money = p1money - f2.rent1house;
        p2money = p2money + f2.rent1house;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + f2.rent1house + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 2 && f2.owner == 2 && owner4 == 2){
        p1money = p1money - rentAll;
        p2money = p2money + rentAll;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + rentAll + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 2 && f2.owner == 2){
        p1money = p1money - czynsz2;
        p2money = p2money + czynsz2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }


    if(p1loc == 4 && owner4 == 2 && hotel4 == 1){
        p1money = p1money - czynsz4hotel;
        p2money = p2money + czynsz4hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz4hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 4 && owner4 == 2 && dom4 == 4){
        p1money = p1money - czynsz4dom4;
        p2money = p2money + czynsz4dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz4dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 4 && owner4 == 2 && dom4 == 3){
        p1money = p1money - czynsz4dom3;
        p2money = p2money + czynsz4dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz4dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 4 && owner4 == 2 && dom4 == 2){
        p1money = p1money - czynsz4dom2;
        p2money = p2money + czynsz4dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz4dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 4 && owner4 == 2 && dom4 == 1){
        p1money = p1money - czynsz4dom1;
        p2money = p2money + czynsz4dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz4dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 4 && owner4 == 2 && f2.owner == 2){
        p1money = p1money - czynsz4all;
        p2money = p2money + czynsz4all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz4all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 4 && owner4 == 2){
        p1money = p1money - czynsz4;
        p2money = p2money + czynsz4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }
    
    if(p1loc == 7 && owner7 == 2 && hotel7 == 1){
        p1money = p1money - czynsz7hotel;
        p2money = p2money + czynsz7hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz7hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 7 && owner7 == 2 && dom7 == 4){
        p1money = p1money - czynsz7dom4;
        p2money = p2money + czynsz7dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz7dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 7 && owner7 == 2 && dom7 == 3){
        p1money = p1money - czynsz7dom3;
        p2money = p2money + czynsz7dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz7dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 7 && owner7 == 2 && dom7 == 2){
        p1money = p1money - czynsz7dom2;
        p2money = p2money + czynsz7dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz7dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 7 && owner7 == 2 && dom7 == 1){
        p1money = p1money - czynsz7dom1;
        p2money = p2money + czynsz7dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz7dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 7 && owner7 == 2 && owner9 == 2 && owner10 == 2){
        p1money = p1money - czynsz7all;
        p2money = p2money + czynsz7all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz7all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 7 && owner7 == 2){
        p1money = p1money - czynsz7;
        p2money = p2money + czynsz7;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz7 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }

    if(p1loc == 9 && owner9 == 2 && hotel9 == 1){
        p1money = p1money - czynsz9hotel;
        p2money = p2money + czynsz9hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz9hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 9 && owner9 == 2 && dom9 == 4){
        p1money = p1money - czynsz9dom4;
        p2money = p2money + czynsz9dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz9dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 9 && owner9 == 2 && dom9 == 3){
        p1money = p1money - czynsz9dom3;
        p2money = p2money + czynsz9dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz9dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 9 && owner9 == 2 && dom9 == 2){
        p1money = p1money - czynsz9dom2;
        p2money = p2money + czynsz9dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz9dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 9 && owner9 == 2 && dom9 == 1){
        p1money = p1money - czynsz9dom1;
        p2money = p2money + czynsz9dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz9dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 9 && owner9 == 2 && owner7 == 2 && owner10 == 2){
        p1money = p1money - czynsz9all;
        p2money = p2money + czynsz9all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz9all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 9 && owner9 == 2){
        p1money = p1money - czynsz9;
        p2money = p2money + czynsz9;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz9 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }

    if(p1loc == 10 && owner10 == 2 && hotel10 == 1){
        p1money = p1money - czynsz10hotel;
        p2money = p2money + czynsz10hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz10hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 10 && owner10 == 2 && dom10 == 4){
        p1money = p1money - czynsz10dom4;
        p2money = p2money + czynsz10dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz10dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 10 && owner10 == 2 && dom10 == 3){
        p1money = p1money - czynsz10dom3;
        p2money = p2money + czynsz10dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz10dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 10 && owner10 == 2 && dom10 == 2){
        p1money = p1money - czynsz10dom2;
        p2money = p2money + czynsz10dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz10dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 10 && owner10 == 2 && dom10 == 1){
        p1money = p1money - czynsz10dom1;
        p2money = p2money + czynsz10dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz10dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 10 && owner10 == 2 && owner9 == 2 && owner7 == 2){
        p1money = p1money - czynsz10all;
        p2money = p2money + czynsz10all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz10all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 10 && owner10 == 2){
        p1money = p1money - czynsz10;
        p2money = p2money + czynsz10;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz10 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }

    if(p1loc == 12 && owner12 == 2 && hotel12 == 1){
        p1money = p1money - czynsz12hotel;
        p2money = p2money + czynsz12hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz12hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 12 && owner12 == 2 && dom12 == 4){
        p1money = p1money - czynsz12dom4;
        p2money = p2money + czynsz12dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz12dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 12 && owner12 == 2 && dom12 == 3){
        p1money = p1money - czynsz12dom3;
        p2money = p2money + czynsz12dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz12dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 12 && owner12 == 2 && dom12 == 2){
        p1money = p1money - czynsz12dom2;
        p2money = p2money + czynsz12dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz12dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 12 && owner12 == 2 && dom12 == 1){
        p1money = p1money - czynsz12dom1;
        p2money = p2money + czynsz12dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz12dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 12 && owner12 == 2 && owner14 == 2 && owner15 == 2){
        p1money = p1money - czynsz12all;
        p2money = p2money + czynsz12all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz12all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 12 && owner12 == 2){
        p1money = p1money - czynsz12;
        p2money = p2money + czynsz12;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz12 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }


    if(p1loc == 14 && owner14 == 2 && hotel14 == 1){
        p1money = p1money - czynsz14hotel;
        p2money = p2money + czynsz14hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz14hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 14 && owner14 == 2 && dom14 == 4){
        p1money = p1money - czynsz14dom4;
        p2money = p2money + czynsz14dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz14dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 14 && owner14 == 2 && dom14 == 3){
        p1money = p1money - czynsz14dom3;
        p2money = p2money + czynsz14dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz14dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 14 && owner14 == 2 && dom14 == 2){
        p1money = p1money - czynsz14dom2;
        p2money = p2money + czynsz14dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz14dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 14 && owner14 == 2 && dom14 == 1){
        p1money = p1money - czynsz14dom1;
        p2money = p2money + czynsz14dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz14dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 14 && owner14 == 2 && owner15 == 2 && owner12 == 2){
        p1money = p1money - czynsz14all;
        p2money = p2money + czynsz14all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz14all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 14 && owner14 == 2){
        p1money = p1money - czynsz14;
        p2money = p2money + czynsz14;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz14 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }
    if(p1loc == 15 && owner15 == 2 && hotel15 == 1){
        p1money = p1money - czynsz15hotel;
        p2money = p2money + czynsz15hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz15hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 15 && owner15 == 2 && dom15 == 4){
        p1money = p1money - czynsz15dom4;
        p2money = p2money + czynsz15dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz15dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 15 && owner15 == 2 && dom15 == 3){
        p1money = p1money - czynsz15dom3;
        p2money = p2money + czynsz15dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz15dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 15 && owner15 == 2 && dom15 == 2){
        p1money = p1money - czynsz15dom2;
        p2money = p2money + czynsz15dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz15dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 15 && owner15 == 2 && dom15 == 1){
        p1money = p1money - czynsz15dom1;
        p2money = p2money + czynsz15dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz15dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 15 && owner15 == 2 && owner14 == 2 && owner12 == 2){
        p1money = p1money - czynsz15all;
        p2money = p2money + czynsz15all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz15all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 15 && owner15 == 2){
        p1money = p1money - czynsz15;
        p2money = p2money + czynsz15;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz15 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }

    if(p1loc == 17 && owner17 == 2 && hotel17 == 1){
        p1money = p1money - czynsz17hotel;
        p2money = p2money + czynsz17hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz17hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 17 && owner17 == 2 && dom17 == 4){
        p1money = p1money - czynsz17dom4;
        p2money = p2money + czynsz17dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz17dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 17 && owner17 == 2 && dom17 == 3){
        p1money = p1money - czynsz17dom3;
        p2money = p2money + czynsz17dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz17dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 17 && owner17 == 2 && dom17 == 2){
        p1money = p1money - czynsz17dom2;
        p2money = p2money + czynsz17dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz17dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 17 && owner17 == 2 && dom17 == 1){
        p1money = p1money - czynsz17dom1;
        p2money = p2money + czynsz17dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz17dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 17 && owner17 == 2 && owner19 == 2 && f2.owner0 == 2){
        p1money = p1money - czynsz17all;
        p2money = p2money + czynsz17all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz17all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 17 && owner17 == 2){
        p1money = p1money - czynsz17;
        p2money = p2money + czynsz17;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz17 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }

    if(p1loc == 19 && owner19 == 2 && hotel19 == 1){
        p1money = p1money - czynsz19hotel;
        p2money = p2money + czynsz19hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz19hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 19 && owner19 == 2 && dom19 == 4){
        p1money = p1money - czynsz19dom4;
        p2money = p2money + czynsz19dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz19dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 19 && owner19 == 2 && dom19 == 3){
        p1money = p1money - czynsz19dom3;
        p2money = p2money + czynsz19dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz19dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 19 && owner19 == 2 && dom19 == 2){
        p1money = p1money - czynsz19dom2;
        p2money = p2money + czynsz19dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz19dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 19 && owner19 == 2 && dom19 == 1){
        p1money = p1money - czynsz19dom1;
        p2money = p2money + czynsz19dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz19dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 19 && owner19 == 2 && owner17 == 2 && f2.owner0 == 2){
        p1money = p1money - czynsz19all;
        p2money = p2money + czynsz19all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz19all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 19 && owner19 == 2){
        p1money = p1money - czynsz19;
        p2money = p2money + czynsz19;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz19 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }

    if(p1loc == 20 && f2.owner0 == 2 && f2.hotel0 == 1){
        p1money = p1money - czynsz20hotel;
        p2money = p2money + czynsz20hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz20hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 20 && f2.owner0 == 2 && dom20 == 4){
        p1money = p1money - czynsz20dom4;
        p2money = p2money + czynsz20dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz20dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 20 && f2.owner0 == 2 && dom20 == 3){
        p1money = p1money - czynsz20dom3;
        p2money = p2money + czynsz20dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz20dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 20 && f2.owner0 == 2 && dom20 == 2){
        p1money = p1money - czynsz20dom2;
        p2money = p2money + czynsz20dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz20dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 20 && f2.owner0 == 2 && dom20 == 1){
        p1money = p1money - czynsz20dom1;
        p2money = p2money + czynsz20dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz20dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 20 && f2.owner0 == 2 && owner19 == 2 && owner17 == 2){
        p1money = p1money - czynsz20all;
        p2money = p2money + czynsz20all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz20all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 20 && f2.owner0 == 2){
        p1money = p1money - czynsz20;
        p2money = p2money + czynsz20;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz20 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }

    if(p1loc == 22 && f2.owner2 == 2 && f2.hotel2 == 1){
        p1money = p1money - czynsz22hotel;
        p2money = p2money + czynsz22hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz22hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 22 && f2.owner2 == 2 && dom22 == 4){
        p1money = p1money - czynsz22dom4;
        p2money = p2money + czynsz22dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz22dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 22 && f2.owner2 == 2 && dom22 == 3){
        p1money = p1money - czynsz22dom3;
        p2money = p2money + czynsz22dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz22dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 22 && f2.owner2 == 2 && dom22 == 2){
        p1money = p1money - czynsz22dom2;
        p2money = p2money + czynsz22dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz22dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 22 && f2.owner2 == 2 && dom22 == 1){
        p1money = p1money - czynsz22dom1;
        p2money = p2money + czynsz22dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz22dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 22 && f2.owner2 == 2 && f2.owner4 == 2 && f2.owner5 == 2){
        p1money = p1money - czynsz22all;
        p2money = p2money + czynsz22all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz22all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 22 && f2.owner2 == 2){
        p1money = p1money - czynsz22;
        p2money = p2money + czynsz22;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz22 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }

    if(p1loc == 24 && f2.owner4 == 2 && f2.hotel4 == 1){
        p1money = p1money - czynsz24hotel;
        p2money = p2money + czynsz24hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz24hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 24 && f2.owner4 == 2 && dom24 == 4){
        p1money = p1money - czynsz24dom4;
        p2money = p2money + czynsz24dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz24dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 24 && f2.owner4 == 2 && dom24 == 3){
        p1money = p1money - czynsz24dom3;
        p2money = p2money + czynsz24dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz24dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 24 && f2.owner4 == 2 && dom24 == 2){
        p1money = p1money - czynsz24dom2;
        p2money = p2money + czynsz24dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz24dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 24 && f2.owner4 == 2 && dom24 == 1){
        p1money = p1money - czynsz24dom1;
        p2money = p2money + czynsz24dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz24dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 24 && f2.owner4 == 2 && f2.owner2 == 2 && f2.owner5 == 2){
        p1money = p1money - czynsz24all;
        p2money = p2money + czynsz24all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz24all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 24 && f2.owner4 == 2){
        p1money = p1money - czynsz24;
        p2money = p2money + czynsz24;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz24 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }

    if(p1loc == 25 && f2.owner5 == 2 && f2.hotel5 == 1){
        p1money = p1money - czynsz25hotel;
        p2money = p2money + czynsz25hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz25hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 25 && f2.owner5 == 2 && dom25 == 4){
        p1money = p1money - czynsz25dom4;
        p2money = p2money + czynsz25dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz25dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 25 && f2.owner5 == 2 && dom25 == 3){
        p1money = p1money - czynsz25dom3;
        p2money = p2money + czynsz25dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz25dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 25 && f2.owner5 == 2 && dom25 == 2){
        p1money = p1money - czynsz25dom2;
        p2money = p2money + czynsz25dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz25dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 25 && f2.owner5 == 2 && dom25 == 1){
        p1money = p1money - czynsz25dom1;
        p2money = p2money + czynsz25dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz25dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 25 && f2.owner5 == 2 && f2.owner4 == 2 && f2.owner2 == 2){
        p1money = p1money - czynsz25all;
        p2money = p2money + czynsz25all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz25all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 25 && f2.owner5 == 2){
        p1money = p1money - czynsz25;
        p2money = p2money + czynsz25;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz25 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }
    if(p1loc == 27 && f2.owner7 == 2 && f2.hotel7 == 1){
        p1money = p1money - czynsz27hotel;
        p2money = p2money + czynsz27hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz27hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 27 && f2.owner7 == 2 && dom27 == 4){
        p1money = p1money - czynsz27dom4;
        p2money = p2money + czynsz27dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz27dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 27 && f2.owner7 == 2 && dom27 == 3){
        p1money = p1money - czynsz27dom3;
        p2money = p2money + czynsz27dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz27dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 27 && f2.owner7 == 2 && dom27 == 2){
        p1money = p1money - czynsz27dom2;
        p2money = p2money + czynsz27dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz27dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 27 && f2.owner7 == 2 && dom27 == 1){
        p1money = p1money - czynsz27dom1;
        p2money = p2money + czynsz27dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz27dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 27 && f2.owner7 == 2 && f2.owner8 == 2 && owner30 == 2){
        p1money = p1money - czynsz27all;
        p2money = p2money + czynsz27all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz27all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 27 && f2.owner7 == 2){
        p1money = p1money - czynsz27;
        p2money = p2money + czynsz27;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz27 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }

    if(p1loc == 28 && f2.owner8 == 2 && f2.hotel8 == 1){
        p1money = p1money - czynsz28hotel;
        p2money = p2money + czynsz28hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz28hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 25 && f2.owner8 == 2 && dom28 == 4){
        p1money = p1money - czynsz28dom4;
        p2money = p2money + czynsz28dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz28dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 28 && f2.owner8 == 2 && dom28 == 3){
        p1money = p1money - czynsz28dom3;
        p2money = p2money + czynsz28dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz28dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 28 && f2.owner8 == 2 && dom28 == 2){
        p1money = p1money - czynsz28dom2;
        p2money = p2money + czynsz28dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz28dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 28 && f2.owner8 == 2 && dom28 == 1){
        p1money = p1money - czynsz28dom1;
        p2money = p2money + czynsz28dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz28dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 28 && f2.owner8 == 2 && f2.owner7 == 2 && owner30 == 2){
        p1money = p1money - czynsz28all;
        p2money = p2money + czynsz28all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz28all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 28 && f2.owner8 == 2){
        p1money = p1money - czynsz28;
        p2money = p2money + czynsz28;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz28 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }

    if(p1loc == 30 && owner30 == 2 && hotel30 == 1){
        p1money = p1money - czynsz30hotel;
        p2money = p2money + czynsz30hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz30hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 30 && owner30 == 2 && dom30 == 4){
        p1money = p1money - czynsz30dom4;
        p2money = p2money + czynsz30dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz30dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 30 && owner30 == 2 && dom30 == 3){
        p1money = p1money - czynsz30dom3;
        p2money = p2money + czynsz30dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz30dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 30 && owner30 == 2 && dom30 == 2){
        p1money = p1money - czynsz30dom2;
        p2money = p2money + czynsz30dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz30dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 30 && owner30 == 2 && dom30 == 1){
        p1money = p1money - czynsz30dom1;
        p2money = p2money + czynsz30dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz30dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 30 && owner30 == 2 && f2.owner8 == 2 && f2.owner7 == 2){
        p1money = p1money - czynsz30all;
        p2money = p2money + czynsz30all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz30all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 30 && owner30 == 2){
        p1money = p1money - czynsz30;
        p2money = p2money + czynsz30;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz30 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }

    if(p1loc == 32 && owner32 == 2 && hotel32 == 1){
        p1money = p1money - czynsz32hotel;
        p2money = p2money + czynsz32hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz32hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 32 && owner32 == 2 && dom32 == 4){
        p1money = p1money - czynsz32dom4;
        p2money = p2money + czynsz32dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz32dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 32 && owner32 == 2 && dom32 == 3){
        p1money = p1money - czynsz32dom3;
        p2money = p2money + czynsz32dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz32dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 32 && owner32 == 2 && dom32 == 2){
        p1money = p1money - czynsz32dom2;
        p2money = p2money + czynsz32dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz32dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 32 && owner32 == 2 && dom32 == 1){
        p1money = p1money - czynsz32dom1;
        p2money = p2money + czynsz32dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz32dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 32 && owner32 == 2 && owner33 == 2 && owner35 == 2){
        p1money = p1money - czynsz32all;
        p2money = p2money + czynsz32all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz32all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 32 && owner32 == 2){
        p1money = p1money - czynsz32;
        p2money = p2money + czynsz32;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz32 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }

    if(p1loc == 33 && owner33 == 2 && hotel33 == 1){
        p1money = p1money - czynsz33hotel;
        p2money = p2money + czynsz33hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz33hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 33 && owner33 == 2 && dom33 == 4){
        p1money = p1money - czynsz33dom4;
        p2money = p2money + czynsz33dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz33dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 33 && owner33 == 2 && dom33 == 3){
        p1money = p1money - czynsz33dom3;
        p2money = p2money + czynsz33dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz33dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 33 && owner33 == 2 && dom33 == 2){
        p1money = p1money - czynsz33dom2;
        p2money = p2money + czynsz33dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz33dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 33 && owner33 == 2 && dom33 == 1){
        p1money = p1money - czynsz33dom1;
        p2money = p2money + czynsz33dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz33dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 33 && owner33 == 2 && owner32 == 2 && owner35 == 2){
        p1money = p1money - czynsz33all;
        p2money = p2money + czynsz33all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz33all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 33 && owner33 == 2){
        p1money = p1money - czynsz33;
        p2money = p2money + czynsz33;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz33 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }

    if(p1loc == 35 && owner35 == 2 && hotel35 == 1){
        p1money = p1money - czynsz35hotel;
        p2money = p2money + czynsz35hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz35hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 35 && owner35 == 2 && dom35 == 4){
        p1money = p1money - czynsz35dom4;
        p2money = p2money + czynsz35dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz35dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 35 && owner35 == 2 && dom35 == 3){
        p1money = p1money - czynsz35dom3;
        p2money = p2money + czynsz35dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz35dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 35 && owner35 == 2 && dom35 == 2){
        p1money = p1money - czynsz35dom2;
        p2money = p2money + czynsz35dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz35dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 35 && owner35 == 2 && dom35 == 1){
        p1money = p1money - czynsz35dom1;
        p2money = p2money + czynsz35dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz35dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 35 && owner35 == 2 && owner33 == 2 && owner32 == 2){
        p1money = p1money - czynsz35all;
        p2money = p2money + czynsz35all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz35all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 35 && owner35 == 2){
        p1money = p1money - czynsz35;
        p2money = p2money + czynsz35;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz35 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }

    if(p1loc == 38 && owner38 == 2 && hotel38 == 1){
        p1money = p1money - czynsz38hotel;
        p2money = p2money + czynsz38hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz38hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 38 && owner38 == 2 && dom38 == 4){
        p1money = p1money - czynsz38dom4;
        p2money = p2money + czynsz38dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz38dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 38 && owner38 == 2 && dom38 == 3){
        p1money = p1money - czynsz38dom3;
        p2money = p2money + czynsz38dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz38dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 38 && owner38 == 2 && dom38 == 2){
        p1money = p1money - czynsz38dom2;
        p2money = p2money + czynsz38dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz38dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 38 && owner38 == 2 && dom38 == 1){
        p1money = p1money - czynsz38dom1;
        p2money = p2money + czynsz38dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz38dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 38 && owner38 == 2 && owner40 == 2){
        p1money = p1money - czynsz38all;
        p2money = p2money + czynsz38all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz38all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 38 && owner38 == 2){
        p1money = p1money - czynsz38;
        p2money = p2money + czynsz38;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz38 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }

    if(p1loc == 40 && owner40 == 2 && hotel40 == 1){
        p1money = p1money - czynsz40hotel;
        p2money = p2money + czynsz40hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz40hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 40 && owner40 == 2 && dom40 == 4){
        p1money = p1money - czynsz40dom4;
        p2money = p2money + czynsz40dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz40dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 40 && owner40 == 2 && dom40 == 3){
        p1money = p1money - czynsz40dom3;
        p2money = p2money + czynsz40dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz40dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 40 && owner40 == 2 && dom40 == 2){
        p1money = p1money - czynsz40dom2;
        p2money = p2money + czynsz40dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz40dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 40 && owner40 == 2 && dom40 == 1){
        p1money = p1money - czynsz40dom1;
        p2money = p2money + czynsz40dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz40dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 40 && owner40 == 2 && owner38 == 2){
        p1money = p1money - czynsz40all;
        p2money = p2money + czynsz40all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz40all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 40 && owner40 == 2){
        p1money = p1money - czynsz40;
        p2money = p2money + czynsz40;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz40 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }

    if(p1loc == 6 && owner6 == 2 && owner16 == 2 && f2.owner6 == 2 && owner36 == 2){
        p1money = p1money - stacje46;
        p2money = p2money + stacje46;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + stacje46 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 6 && owner6 == 2 && owner16 == 2 && f2.owner6 == 2){
        p1money = p1money - stacje36;
        p2money = p2money + stacje36;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + stacje36 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 6 && owner6 == 2 && owner16 == 2 && owner36 == 2){
        p1money = p1money - stacje36;
        p2money = p2money + stacje36;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + stacje36 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 6 && owner6 == 2 && f2.owner6 == 2 && owner36 == 2){
        p1money = p1money - stacje36;
        p2money = p2money + stacje36;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + stacje36 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 6 && owner6 == 2 && owner16 == 2){
        p1money = p1money - stacje26;
        p2money = p2money + stacje26;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + stacje26 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 6 && owner6 == 2 && f2.owner6 == 2){
        p1money = p1money - stacje26;
        p2money = p2money + stacje26;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + stacje26 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 6 && owner6 == 2 && owner36 == 2){
        p1money = p1money - stacje26;
        p2money = p2money + stacje26;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + stacje26 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 6 && owner6 == 2){
        p1money = p1money - czynsz6;
        p2money = p2money + czynsz6;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz6 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    }

    if(p1loc == 16 && owner16 == 2 && f2.owner6 == 2 && owner36 == 2 && owner6 == 2){
        p1money = p1money - stacje416;
        p2money = p2money + stacje416;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + stacje416 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 16 && owner16 == 2 && owner6 == 2 && owner36 == 2){
        p1money = p1money - stacje316;
        p2money = p2money + stacje316;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + stacje316 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 16 && owner16 == 2 && f2.owner6 == 2 && owner36 == 2){
        p1money = p1money - stacje316;
        p2money = p2money + stacje316;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + stacje316 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 16 && owner16 == 2 && owner6 == 2 && f2.owner6 == 2){
        p1money = p1money - stacje316;
        p2money = p2money + stacje316;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + stacje316 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 16 && owner16 == 2 && owner6 == 2){
        p1money = p1money - stacje216;
        p2money = p2money + stacje216;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + stacje216 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 16 && owner16 == 2 && f2.owner6 == 2){
        p1money = p1money - stacje216;
        p2money = p2money + stacje216;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + stacje216 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 16 && owner16 == 2 && owner36 == 2){
        p1money = p1money - stacje216;
        p2money = p2money + stacje216;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + stacje216 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 16 && owner16 == 2){
        p1money = p1money - czynsz16;
        p2money = p2money + czynsz16;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz16 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    }

    if(p1loc == 26 && f2.owner6 == 2 && owner6 == 2 && owner16 == 2 && owner36 == 2){
        p1money = p1money - stacje426;
        p2money = p2money + stacje426;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + stacje426 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 26 && f2.owner6 == 2 && owner16 == 2 && owner36 == 2){
        p1money = p1money - stacje326;
        p2money = p2money + stacje326;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + stacje326 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 26 && f2.owner6 == 2 && owner16 == 2 && owner6 == 2){
        p1money = p1money - stacje326;
        p2money = p2money + stacje326;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + stacje326 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 26 && f2.owner6 == 2 && owner6 == 2 && owner36 == 2){
        p1money = p1money - stacje326;
        p2money = p2money + stacje326;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + stacje326 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 26 && f2.owner6 == 2 && owner6 == 2){
        p1money = p1money - stacje226;
        p2money = p2money + stacje226;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + stacje226 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 26 && f2.owner6 == 2 && owner16 == 2){
        p1money = p1money - stacje226;
        p2money = p2money + stacje226;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + stacje226 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 26 && f2.owner6 == 2 && owner36 == 2){
        p1money = p1money - stacje226;
        p2money = p2money + stacje226;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + stacje226 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 26 && f2.owner6 == 2){
        p1money = p1money - czynsz26;
        p2money = p2money + czynsz26;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz26 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    }

    if(p1loc == 36 && owner36 == 2 && owner6 == 2 && owner16 == 2 && f2.owner6 == 2){
        p1money = p1money - stacje436;
        p2money = p2money + stacje436;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + stacje436 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 36 && owner36 == 2 && owner16 == 2 && f2.owner6 == 2){
        p1money = p1money - stacje336;
        p2money = p2money + stacje336;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + stacje336 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 36 && owner36 == 2 && owner16 == 2 && owner6 == 2){
        p1money = p1money - stacje336;
        p2money = p2money + stacje336;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + stacje336 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 36 && owner36 == 2 && owner6 == 2 && f2.owner6 == 2){
        p1money = p1money - stacje336;
        p2money = p2money + stacje336;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + stacje336 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 36 && owner36 == 2 && owner6 == 2){
        p1money = p1money - stacje236;
        p2money = p2money + stacje236;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + stacje236 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 36 && owner36 == 2 && owner16 == 2){
        p1money = p1money - stacje236;
        p2money = p2money + stacje236;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + stacje236 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 36 && owner36 == 2 && f2.owner6 == 2){
        p1money = p1money - stacje236;
        p2money = p2money + stacje236;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + stacje236 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 36 && owner36 == 2){
        p1money = p1money - czynsz36;
        p2money = p2money + czynsz36;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz36 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    }

    if(p1loc == 13 && owner13 == 2 && f2.owner9 == 2){
        p1mony = p1money - destyny * 10;
        p2money = p2money + destyny * 10;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + destyny * 10 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);  
    } else if(p1loc == 13 && owner13 == 2){
        p1mony = p1money - destyny * 4;
        p2money = p2money + destyny * 4;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + destyny * 4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);  
    }

    if(p1loc == 29 && f2.owner9 == 2 && owner13 == 2){
        p1mony = p1money - destyny * 10;
        p2money = p2money + destyny * 10;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + destyny * 10 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);  
    } else if(p1loc == 29 && f2.owner9 == 2){
        p1mony = p1money - destyny * 4;
        p2money = p2money + destyny * 4;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + destyny * 4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);  
    }

    if(p1loc == 2 && f2.owner == 3 && f2.hotel == 1){
        p1money = p1money - f2.rentHotel;
        p3money = p3money + f2.rentHotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + f2.rentHotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 2 && f2.owner == 3 && dom2 == 4){
        p1money = p1money - f2.rent4house;
        p3money = p3money + f2.rent4house;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + f2.rent4house + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 2 && f2.owner == 3 && dom2 == 3){
        p1money = p1money - f2.rent3house;
        p3money = p3money + f2.rent3house;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + f2.rent3house + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 2 && f2.owner == 3 && dom2 == 2){
        p1money = p1money - f2.rent2house;
        p3money = p3money + f2.rent2house;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + f2.rent2house + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 2 && f2.owner == 3 && dom2 == 1){
        p1money = p1money - f2.rent1house;
        p3money = p3money + f2.rent1house;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + f2.rent1house + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 2 && f2.owner == 3 && owner4 == 3){
        p1money = p1money - rentAll;
        p3money = p3money + rentAll;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + rentAll + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 2 && f2.owner == 3){
        p1money = p1money - czynsz2;
        p3money = p3money + czynsz2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }


    if(p1loc == 4 && owner4 == 3 && hotel4 == 1){
        p1money = p1money - czynsz4hotel;
        p3money = p3money + czynsz4hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz4hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 4 && owner4 == 3 && dom4 == 4){
        p1money = p1money - czynsz4dom4;
        p3money = p3money + czynsz4dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz4dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 4 && owner4 == 3 && dom4 == 3){
        p1money = p1money - czynsz4dom3;
        p3money = p3money + czynsz4dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz4dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 4 && owner4 == 3 && dom4 == 2){
        p1money = p1money - czynsz4dom2;
        p3money = p3money + czynsz4dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz4dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 4 && owner4 == 3 && dom4 == 1){
        p1money = p1money - czynsz4dom1;
        p3money = p3money + czynsz4dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 2: ' + czynsz4dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 4 && owner4 == 3 && f2.owner == 3){
        p1money = p1money - czynsz4all;
        p3money = p3money + czynsz4all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz4all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 4 && owner4 == 3){
        p1money = p1money - czynsz4;
        p3money = p3money + czynsz4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }
    
    if(p1loc == 7 && owner7 == 3 && hotel7 == 1){
        p1money = p1money - czynsz7hotel;
        p3money = p3money + czynsz7hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz7hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 7 && owner7 == 3 && dom7 == 4){
        p1money = p1money - czynsz7dom4;
        p3money = p3money + czynsz7dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz7dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 7 && owner7 == 3 && dom7 == 3){
        p1money = p1money - czynsz7dom3;
        p3money = p3money + czynsz7dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz7dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 7 && owner7 == 3 && dom7 == 2){
        p1money = p1money - czynsz7dom2;
        p3money = p3money + czynsz7dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz7dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 7 && owner7 == 3 && dom7 == 1){
        p1money = p1money - czynsz7dom1;
        p3money = p3money + czynsz7dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz7dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 7 && owner7 == 3 && owner9 == 3 && owner10 == 3){
        p1money = p1money - czynsz7all;
        p3money = p3money + czynsz7all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz7all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 7 && owner7 == 3){
        p1money = p1money - czynsz7;
        p3money = p3money + czynsz7;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz7 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }

    if(p1loc == 9 && owner9 == 3 && hotel9 == 1){
        p1money = p1money - czynsz9hotel;
        p3money = p3money + czynsz9hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz9hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 9 && owner9 == 3 && dom9 == 4){
        p1money = p1money - czynsz9dom4;
        p3money = p3money + czynsz9dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz9dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 9 && owner9 == 3 && dom9 == 3){
        p1money = p1money - czynsz9dom3;
        p3money = p3money + czynsz9dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz9dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 9 && owner9 == 3 && dom9 == 2){
        p1money = p1money - czynsz9dom2;
        p3money = p3money + czynsz9dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz9dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 9 && owner9 == 3 && dom9 == 1){
        p1money = p1money - czynsz9dom1;
        p3money = p3money + czynsz9dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz9dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 9 && owner9 == 3 && owner7 == 3 && owner10 == 3){
        p1money = p1money - czynsz9all;
        p3money = p3money + czynsz9all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz9all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 9 && owner9 == 3){
        p1money = p1money - czynsz9;
        p3money = p3money + czynsz9;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz9 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }

    if(p1loc == 10 && owner10 == 3 && hotel10 == 1){
        p1money = p1money - czynsz10hotel;
        p3money = p3money + czynsz10hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz10hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 10 && owner10 == 3 && dom10 == 4){
        p1money = p1money - czynsz10dom4;
        p3money = p3money + czynsz10dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz10dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 10 && owner10 == 3 && dom10 == 3){
        p1money = p1money - czynsz10dom3;
        p3money = p3money + czynsz10dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz10dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 10 && owner10 == 3 && dom10 == 2){
        p1money = p1money - czynsz10dom2;
        p3money = p3money + czynsz10dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz10dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 10 && owner10 == 3 && dom10 == 1){
        p1money = p1money - czynsz10dom1;
        p3money = p3money + czynsz10dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz10dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 10 && owner10 == 3 && owner9 == 3 && owner7 == 3){
        p1money = p1money - czynsz10all;
        p3money = p3money + czynsz10all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz10all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 10 && owner10 == 3){
        p1money = p1money - czynsz10;
        p3money = p3money + czynsz10;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz10 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }

    if(p1loc == 12 && owner12 == 3 && hotel12 == 1){
        p1money = p1money - czynsz12hotel;
        p3money = p3money + czynsz12hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz12hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 12 && owner12 == 3 && dom12 == 4){
        p1money = p1money - czynsz12dom4;
        p3money = p3money + czynsz12dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz12dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 12 && owner12 == 3 && dom12 == 3){
        p1money = p1money - czynsz12dom3;
        p3money = p3money + czynsz12dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz12dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 12 && owner12 == 3 && dom12 == 2){
        p1money = p1money - czynsz12dom2;
        p3money = p3money + czynsz12dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz12dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 12 && owner12 == 3 && dom12 == 1){
        p1money = p1money - czynsz12dom1;
        p3money = p3money + czynsz12dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz12dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 12 && owner12 == 3 && owner14 == 3 && owner15 == 3){
        p1money = p1money - czynsz12all;
        p3money = p3money + czynsz12all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz12all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 12 && owner12 == 3){
        p1money = p1money - czynsz12;
        p3money = p3money + czynsz12;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz12 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }


    if(p1loc == 14 && owner14 == 3 && hotel14 == 1){
        p1money = p1money - czynsz14hotel;
        p3money = p3money + czynsz14hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz14hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 14 && owner14 == 3 && dom14 == 4){
        p1money = p1money - czynsz14dom4;
        p3money = p3money + czynsz14dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3 ' + czynsz14dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 14 && owner14 == 3 && dom14 == 3){
        p1money = p1money - czynsz14dom3;
        p3money = p3money + czynsz14dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz14dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 14 && owner14 == 3 && dom14 == 2){
        p1money = p1money - czynsz14dom2;
        p3money = p3money + czynsz14dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz14dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 14 && owner14 == 3 && dom14 == 1){
        p1money = p1money - czynsz14dom1;
        p3money = p3money + czynsz14dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz14dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 14 && owner14 == 3 && owner15 == 3 && owner12 == 3){
        p1money = p1money - czynsz14all;
        p3money = p3money + czynsz14all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz14all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 14 && owner14 == 3){
        p1money = p1money - czynsz14;
        p3money = p3money + czynsz14;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz14 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }
    if(p1loc == 15 && owner15 == 3 && hotel15 == 1){
        p1money = p1money - czynsz15hotel;
        p3money = p3money + czynsz15hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz15hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 15 && owner15 == 3 && dom15 == 4){
        p1money = p1money - czynsz15dom4;
        p3money = p3money + czynsz15dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz15dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 15 && owner15 == 3 && dom15 == 3){
        p1money = p1money - czynsz15dom3;
        p3money = p3money + czynsz15dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz15dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 15 && owner15 == 3 && dom15 == 2){
        p1money = p1money - czynsz15dom2;
        p3money = p3money + czynsz15dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz15dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 15 && owner15 == 3 && dom15 == 1){
        p1money = p1money - czynsz15dom1;
        p3money = p3money + czynsz15dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz15dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 15 && owner15 == 3 && owner14 == 3 && owner12 == 3){
        p1money = p1money - czynsz15all;
        p3money = p3money + czynsz15all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz15all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 15 && owner15 == 3){
        p1money = p1money - czynsz15;
        p3money = p3money + czynsz15;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz15 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }

    if(p1loc == 17 && owner17 == 3 && hotel17 == 1){
        p1money = p1money - czynsz17hotel;
        p3money = p3money + czynsz17hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz17hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 17 && owner17 == 3 && dom17 == 4){
        p1money = p1money - czynsz17dom4;
        p3money = p3money + czynsz17dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz17dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 17 && owner17 == 3 && dom17 == 3){
        p1money = p1money - czynsz17dom3;
        p3money = p3money + czynsz17dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz17dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 17 && owner17 == 3 && dom17 == 2){
        p1money = p1money - czynsz17dom2;
        p3money = p3money + czynsz17dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz17dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 17 && owner17 == 3 && dom17 == 1){
        p1money = p1money - czynsz17dom1;
        p3money = p3money + czynsz17dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz17dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 17 && owner17 == 3 && owner19 == 3 && f2.owner0 == 3){
        p1money = p1money - czynsz17all;
        p3money = p3money + czynsz17all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz17all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 17 && owner17 == 3){
        p1money = p1money - czynsz17;
        p3money = p3money + czynsz17;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz17 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }

    if(p1loc == 19 && owner19 == 3 && hotel19 == 1){
        p1money = p1money - czynsz19hotel;
        p3money = p3money + czynsz19hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz19hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 19 && owner19 == 3 && dom19 == 4){
        p1money = p1money - czynsz19dom4;
        p3money = p3money + czynsz19dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz19dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 19 && owner19 == 3 && dom19 == 3){
        p1money = p1money - czynsz19dom3;
        p3money = p3money + czynsz19dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz19dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 19 && owner19 == 3 && dom19 == 2){
        p1money = p1money - czynsz19dom2;
        p3money = p3money + czynsz19dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz19dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 19 && owner19 == 3 && dom19 == 1){
        p1money = p1money - czynsz19dom1;
        p3money = p3money + czynsz19dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz19dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 19 && owner19 == 3 && owner17 == 3 && f2.owner0 == 3){
        p1money = p1money - czynsz19all;
        p3money = p3money + czynsz19all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz19all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 19 && owner19 == 3){
        p1money = p1money - czynsz19;
        p3money = p3money + czynsz19;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz19 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }

    if(p1loc == 20 && f2.owner0 == 3 && f2.hotel0 == 1){
        p1money = p1money - czynsz20hotel;
        p3money = p3money + czynsz20hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz20hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 20 && f2.owner0 == 3 && dom20 == 4){
        p1money = p1money - czynsz20dom4;
        p3money = p3money + czynsz20dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz20dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 20 && f2.owner0 == 3 && dom20 == 3){
        p1money = p1money - czynsz20dom3;
        p3money = p3money + czynsz20dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz20dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 20 && f2.owner0 == 3 && dom20 == 2){
        p1money = p1money - czynsz20dom2;
        p3money = p3money + czynsz20dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz20dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 20 && f2.owner0 == 3 && dom20 == 1){
        p1money = p1money - czynsz20dom1;
        p3money = p3money + czynsz20dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz20dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 20 && f2.owner0 == 3 && owner19 == 3 && owner17 == 3){
        p1money = p1money - czynsz20all;
        p3money = p3money + czynsz20all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz20all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 20 && f2.owner0 == 3){
        p1money = p1money - czynsz20;
        p3money = p3money + czynsz20;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz20 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }

    if(p1loc == 22 && f2.owner2 == 3 && f2.hotel2 == 1){
        p1money = p1money - czynsz22hotel;
        p3money = p3money + czynsz22hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz22hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 22 && f2.owner2 == 3 && dom22 == 4){
        p1money = p1money - czynsz22dom4;
        p3money = p3money + czynsz22dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz22dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 22 && f2.owner2 == 3 && dom22 == 3){
        p1money = p1money - czynsz22dom3;
        p3money = p3money + czynsz22dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz22dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 22 && f2.owner2 == 3 && dom22 == 2){
        p1money = p1money - czynsz22dom2;
        p3money = p3money + czynsz22dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz22dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 22 && f2.owner2 == 3 && dom22 == 1){
        p1money = p1money - czynsz22dom1;
        p3money = p3money + czynsz22dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz22dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 22 && f2.owner2 == 3 && f2.owner4 == 3 && f2.owner5 == 3){
        p1money = p1money - czynsz22all;
        p3money = p3money + czynsz22all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz22all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 22 && f2.owner2 == 3){
        p1money = p1money - czynsz22;
        p3money = p3money + czynsz22;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz22 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }

    if(p1loc == 24 && f2.owner4 == 3 && f2.hotel4 == 1){
        p1money = p1money - czynsz24hotel;
        p3money = p3money + czynsz24hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz24hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 24 && f2.owner4 == 3 && dom24 == 4){
        p1money = p1money - czynsz24dom4;
        p3money = p3money + czynsz24dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz24dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 24 && f2.owner4 == 3 && dom24 == 3){
        p1money = p1money - czynsz24dom3;
        p3money = p3money + czynsz24dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz24dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 24 && f2.owner4 == 3 && dom24 == 2){
        p1money = p1money - czynsz24dom2;
        p3money = p3money + czynsz24dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz24dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 24 && f2.owner4 == 3 && dom24 == 1){
        p1money = p1money - czynsz24dom1;
        p3money = p3money + czynsz24dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz24dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 24 && f2.owner4 == 3 && f2.owner2 == 3 && f2.owner5 == 3){
        p1money = p1money - czynsz24all;
        p3money = p3money + czynsz24all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz24all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 24 && f2.owner4 == 3){
        p1money = p1money - czynsz24;
        p3money = p3money + czynsz24;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz24 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }

    if(p1loc == 25 && f2.owner5 == 3 && f2.hotel5 == 1){
        p1money = p1money - czynsz25hotel;
        p3money = p3money + czynsz25hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz25hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 25 && f2.owner5 == 3 && dom25 == 4){
        p1money = p1money - czynsz25dom4;
        p3money = p3money + czynsz25dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz25dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 25 && f2.owner5 == 3 && dom25 == 3){
        p1money = p1money - czynsz25dom3;
        p3money = p3money + czynsz25dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz25dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 25 && f2.owner5 == 3 && dom25 == 2){
        p1money = p1money - czynsz25dom2;
        p3money = p3money + czynsz25dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz25dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 25 && f2.owner5 == 3 && dom25 == 1){
        p1money = p1money - czynsz25dom1;
        p3money = p3money + czynsz25dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz25dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 25 && f2.owner5 == 3 && f2.owner4 == 3 && f2.owner2 == 3){
        p1money = p1money - czynsz25all;
        p3money = p3money + czynsz25all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz25all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 25 && f2.owner5 == 3){
        p1money = p1money - czynsz25;
        p3money = p3money + czynsz25;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz25 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }
    if(p1loc == 27 && f2.owner7 == 3 && f2.hotel7 == 1){
        p1money = p1money - czynsz27hotel;
        p3money = p3money + czynsz27hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz27hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 27 && f2.owner7 == 3 && dom27 == 4){
        p1money = p1money - czynsz27dom4;
        p3money = p3money + czynsz27dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz27dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 27 && f2.owner7 == 3 && dom27 == 3){
        p1money = p1money - czynsz27dom3;
        p3money = p3money + czynsz27dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz27dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 27 && f2.owner7 == 3 && dom27 == 2){
        p1money = p1money - czynsz27dom2;
        p3money = p3money + czynsz27dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz27dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 27 && f2.owner7 == 3 && dom27 == 1){
        p1money = p1money - czynsz27dom1;
        p3money = p3money + czynsz27dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz27dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 27 && f2.owner7 == 3 && f2.owner8 == 3 && owner30 == 3){
        p1money = p1money - czynsz27all;
        p3money = p3money + czynsz27all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz27all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 27 && f2.owner7 == 3){
        p1money = p1money - czynsz27;
        p3money = p3money + czynsz27;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz27 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }

    if(p1loc == 28 && f2.owner8 == 3 && f2.hotel8 == 1){
        p1money = p1money - czynsz28hotel;
        p3money = p3money + czynsz28hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz28hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 25 && f2.owner8 == 3 && dom28 == 4){
        p1money = p1money - czynsz28dom4;
        p3money = p3money + czynsz28dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz28dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 28 && f2.owner8 == 3 && dom28 == 3){
        p1money = p1money - czynsz28dom3;
        p3money = p3money + czynsz28dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz28dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 28 && f2.owner8 == 3 && dom28 == 2){
        p1money = p1money - czynsz28dom2;
        p3money = p3money + czynsz28dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz28dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 28 && f2.owner8 == 3 && dom28 == 1){
        p1money = p1money - czynsz28dom1;
        p3money = p3money + czynsz28dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz28dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 28 && f2.owner8 == 3 && f2.owner7 == 3 && owner30 == 3){
        p1money = p1money - czynsz28all;
        p3money = p3money + czynsz28all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz28all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 28 && f2.owner8 == 3){
        p1money = p1money - czynsz28;
        p3money = p3money + czynsz28;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz28 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }

    if(p1loc == 30 && owner30 == 3 && hotel30 == 1){
        p1money = p1money - czynsz30hotel;
        p3money = p3money + czynsz30hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz30hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 30 && owner30 == 3 && dom30 == 4){
        p1money = p1money - czynsz30dom4;
        p3money = p3money + czynsz30dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz30dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 30 && owner30 == 3 && dom30 == 3){
        p1money = p1money - czynsz30dom3;
        p3money = p3money + czynsz30dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz30dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 30 && owner30 == 3 && dom30 == 2){
        p1money = p1money - czynsz30dom2;
        p3money = p3money + czynsz30dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz30dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 30 && owner30 == 3 && dom30 == 1){
        p1money = p1money - czynsz30dom1;
        p3money = p3money + czynsz30dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz30dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 30 && owner30 == 3 && f2.owner8 == 3 && f2.owner7 == 3){
        p1money = p1money - czynsz30all;
        p3money = p3money + czynsz30all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz30all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 30 && owner30 == 3){
        p1money = p1money - czynsz30;
        p3money = p3money + czynsz30;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz30 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }

    if(p1loc == 32 && owner32 == 3 && hotel32 == 1){
        p1money = p1money - czynsz32hotel;
        p3money = p3money + czynsz32hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz32hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 32 && owner32 == 3 && dom32 == 4){
        p1money = p1money - czynsz32dom4;
        p3money = p3money + czynsz32dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz32dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 32 && owner32 == 3 && dom32 == 3){
        p1money = p1money - czynsz32dom3;
        p3money = p3money + czynsz32dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz32dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 32 && owner32 == 3 && dom32 == 2){
        p1money = p1money - czynsz32dom2;
        p3money = p3money + czynsz32dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz32dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 32 && owner32 == 3 && dom32 == 1){
        p1money = p1money - czynsz32dom1;
        p3money = p3money + czynsz32dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz32dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 32 && owner32 == 3 && owner33 == 3 && owner35 == 3){
        p1money = p1money - czynsz32all;
        p3money = p3money + czynsz32all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz32all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 32 && owner32 == 3){
        p1money = p1money - czynsz32;
        p3money = p3money + czynsz32;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz32 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }

    if(p1loc == 33 && owner33 == 3 && hotel33 == 1){
        p1money = p1money - czynsz33hotel;
        p3money = p3money + czynsz33hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz33hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 33 && owner33 == 3 && dom33 == 4){
        p1money = p1money - czynsz33dom4;
        p3money = p3money + czynsz33dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz33dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 33 && owner33 == 3 && dom33 == 3){
        p1money = p1money - czynsz33dom3;
        p3money = p3money + czynsz33dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz33dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 33 && owner33 == 3 && dom33 == 2){
        p1money = p1money - czynsz33dom2;
        p3money = p3money + czynsz33dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz33dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 33 && owner33 == 3 && dom33 == 1){
        p1money = p1money - czynsz33dom1;
        p3money = p3money + czynsz33dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz33dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 33 && owner33 == 3 && owner32 == 3 && owner35 == 3){
        p1money = p1money - czynsz33all;
        p3money = p3money + czynsz33all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz33all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 33 && owner33 == 3){
        p1money = p1money - czynsz33;
        p3money = p3money + czynsz33;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz33 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }

    if(p1loc == 35 && owner35 == 3 && hotel35 == 1){
        p1money = p1money - czynsz35hotel;
        p3money = p3money + czynsz35hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz35hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 35 && owner35 == 3 && dom35 == 4){
        p1money = p1money - czynsz35dom4;
        p3money = p3money + czynsz35dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz35dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 35 && owner35 == 3 && dom35 == 3){
        p1money = p1money - czynsz35dom3;
        p3money = p3money + czynsz35dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz35dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 35 && owner35 == 3 && dom35 == 2){
        p1money = p1money - czynsz35dom2;
        p3money = p3money + czynsz35dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz35dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 35 && owner35 == 3 && dom35 == 1){
        p1money = p1money - czynsz35dom1;
        p3money = p3money + czynsz35dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz35dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 35 && owner35 == 3 && owner33 == 3 && owner32 == 3){
        p1money = p1money - czynsz35all;
        p3money = p3money + czynsz35all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz35all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 35 && owner35 == 3){
        p1money = p1money - czynsz35;
        p3money = p3money + czynsz35;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz35 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }

    if(p1loc == 38 && owner38 == 3 && hotel38 == 1){
        p1money = p1money - czynsz38hotel;
        p3money = p3money + czynsz38hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz38hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 38 && owner38 == 3 && dom38 == 4){
        p1money = p1money - czynsz38dom4;
        p3money = p3money + czynsz38dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz38dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 38 && owner38 == 3 && dom38 == 3){
        p1money = p1money - czynsz38dom3;
        p3money = p3money + czynsz38dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz38dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 38 && owner38 == 3 && dom38 == 2){
        p1money = p1money - czynsz38dom2;
        p3money = p3money + czynsz38dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz38dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 38 && owner38 == 3 && dom38 == 1){
        p1money = p1money - czynsz38dom1;
        p3money = p3money + czynsz38dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz38dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 38 && owner38 == 3 && owner40 == 3){
        p1money = p1money - czynsz38all;
        p3money = p3money + czynsz38all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz38all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 38 && owner38 == 3){
        p1money = p1money - czynsz38;
        p3money = p3money + czynsz38;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz38 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }

    if(p1loc == 40 && owner40 == 3 && hotel40 == 1){
        p1money = p1money - czynsz40hotel;
        p3money = p3money + czynsz40hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz40hotel + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 40 && owner40 == 3 && dom40 == 4){
        p1money = p1money - czynsz40dom4;
        p3money = p3money + czynsz40dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz40dom4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 40 && owner40 == 3 && dom40 == 3){
        p1money = p1money - czynsz40dom3;
        p3money = p3money + czynsz40dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz40dom3 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 40 && owner40 == 3 && dom40 == 2){
        p1money = p1money - czynsz40dom2;
        p3money = p3money + czynsz40dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz40dom2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 40 && owner40 == 3 && dom40 == 1){
        p1money = p1money - czynsz40dom1;
        p3money = p3money + czynsz40dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz40dom1 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 40 && owner40 == 3 && owner38 == 3){
        p1money = p1money - czynsz40all;
        p3money = p3money + czynsz40all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz40all + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    } else if(p1loc == 40 && owner40 == 3){
        p1money = p1money - czynsz40;
        p3money = p3money + czynsz40;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz40 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);   
    }

    if(p1loc == 6 && owner6 == 3 && owner16 == 3 && f2.owner6 == 3 && owner36 == 3){
        p1money = p1money - stacje46;
        p3money = p3money + stacje46;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + stacje46 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 6 && owner6 == 3 && owner16 == 3 && f2.owner6 == 3){
        p1money = p1money - stacje36;
        p3money = p3money + stacje36;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + stacje36 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 6 && owner6 == 3 && owner16 == 3 && owner36 == 3){
        p1money = p1money - stacje36;
        p3money = p3money + stacje36;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + stacje36 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 6 && owner6 == 3 && f2.owner6 == 3 && owner36 == 3){
        p1money = p1money - stacje36;
        p3money = p3money + stacje36;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + stacje36 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 6 && owner6 == 3 && owner16 == 3){
        p1money = p1money - stacje26;
        p3money = p3money + stacje26;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + stacje26 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 6 && owner6 == 3 && f2.owner6 == 3){
        p1money = p1money - stacje26;
        p3money = p3money + stacje26;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + stacje26 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 6 && owner6 == 3 && owner36 == 3){
        p1money = p1money - stacje26;
        p3money = p3money + stacje26;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + stacje26 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 6 && owner6 == 3){
        p1money = p1money - czynsz6;
        p3money = p3money + czynsz6;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz6 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    }

    if(p1loc == 16 && owner16 == 3 && f2.owner6 == 3 && owner36 == 3 && owner6 == 3){
        p1money = p1money - stacje416;
        p3money = p3money + stacje416;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + stacje416 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 16 && owner16 == 3 && owner6 == 3 && owner36 == 3){
        p1money = p1money - stacje316;
        p3money = p3money + stacje316;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + stacje316 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 16 && owner16 == 3 && f2.owner6 == 3 && owner36 == 3){
        p1money = p1money - stacje316;
        p3money = p3money + stacje316;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + stacje316 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 16 && owner16 == 3 && owner6 == 3 && f2.owner6 == 3){
        p1money = p1money - stacje316;
        p3money = p3money + stacje316;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + stacje316 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 16 && owner16 == 3 && owner6 == 3){
        p1money = p1money - stacje216;
        p3money = p3money + stacje216;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + stacje216 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 16 && owner16 == 3 && f2.owner6 == 3){
        p1money = p1money - stacje216;
        p3money = p3money + stacje216;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + stacje216 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 16 && owner16 == 3 && owner36 == 3){
        p1money = p1money - stacje216;
        p3money = p3money + stacje216;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + stacje216 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 16 && owner16 == 3){
        p1money = p1money - czynsz16;
        p3money = p3money + czynsz16;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz16 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    }

    if(p1loc == 26 && f2.owner6 == 3 && owner6 == 3 && owner16 == 3 && owner36 == 3){
        p1money = p1money - stacje426;
        p3money = p3money + stacje426;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + stacje426 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 26 && f2.owner6 == 3 && owner16 == 3 && owner36 == 3){
        p1money = p1money - stacje326;
        p3money = p3money + stacje326;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + stacje326 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 26 && f2.owner6 == 3 && owner16 == 3 && owner6 == 3){
        p1money = p1money - stacje326;
        p3money = p3money + stacje326;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + stacje326 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 26 && f2.owner6 == 3 && owner6 == 3 && owner36 == 3){
        p1money = p1money - stacje326;
        p3money = p3money + stacje326;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + stacje326 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 26 && f2.owner6 == 3 && owner6 == 3){
        p1money = p1money - stacje226;
        p3money = p3money + stacje226;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + stacje226 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 26 && f2.owner6 == 3 && owner16 == 3){
        p1money = p1money - stacje226;
        p3money = p3money + stacje226;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + stacje226 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 26 && f2.owner6 == 3 && owner36 == 3){
        p1money = p1money - stacje226;
        p3money = p3money + stacje226;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + stacje226 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 26 && f2.owner6 == 3){
        p1money = p1money - czynsz26;
        p3money = p3money + czynsz26;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz26 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    }

    if(p1loc == 36 && owner36 == 3 && owner6 == 3 && owner16 == 3 && f2.owner6 == 3){
        p1money = p1money - stacje436;
        p3money = p3money + stacje436;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + stacje436 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 36 && owner36 == 3 && owner16 == 3 && f2.owner6 == 3){
        p1money = p1money - stacje336;
        p3money = p3money + stacje336;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + stacje336 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 36 && owner36 == 3 && owner16 == 3 && owner6 == 3){
        p1money = p1money - stacje336;
        p3money = p3money + stacje336;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + stacje336 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 36 && owner36 == 3 && owner6 == 3 && f2.owner6 == 3){
        p1money = p1money - stacje336;
        p3money = p3money + stacje336;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + stacje336 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 36 && owner36 == 3 && owner6 == 3){
        p1money = p1money - stacje236;
        p3money = p3money + stacje236;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + stacje236 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 36 && owner36 == 3 && owner16 == 3){
        p1money = p1money - stacje236;
        p3money = p3money + stacje236;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + stacje236 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 36 && owner36 == 3 && f2.owner6 == 3){
        p1money = p1money - stacje236;
        p3money = p3money + stacje236;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + stacje236 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    } else if(p1loc == 36 && owner36 == 3){
        p1money = p1money - czynsz36;
        p3money = p3money + czynsz36;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + czynsz36 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);    
    }

    if(p1loc == 13 && owner13 == 3 && f2.owner9 == 3){
        p1mony = p1money - destyny * 10;
        p3money = p3money + destyny * 10;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + destyny * 10 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);  
    } else if(p1loc == 13 && owner13 == 3){
        p1mony = p1money - destyny * 4;
        p3money = p3money + destyny * 4;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + destyny * 4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);  
    }

    if(p1loc == 29 && f2.owner9 == 3 && owner13 == 3){
        p1mony = p1money - destyny * 10;
        p3money = p3money + destyny * 10;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + destyny * 10 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);  
    } else if(p1loc == 29 && f2.owner9 == 3){
        p1mony = p1money - destyny * 4;
        p3money = p3money + destyny * 4;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Płacisz czynsz dla gracza 3: ' + destyny * 4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);  
    }


}
function Pay2player() {
    if(p2loc == 2 && f2.owner == 1 && f2.hotel == 1){
        p2money = p2money - f2.rentHotel;
        p1money = p1money + f2.rentHotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + f2.rentHotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 2 && f2.owner == 1 && dom2 == 4){
        p2money = p2money - f2.rent4house;
        p1money = p1money + f2.rent4house;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + f2.rent4house + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 2 && f2.owner == 1 && dom2 == 3){
        p2money = p2money - f2.rent3house;
        p1money = p1money + f2.rent3house;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + f2.rent3house + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 2 && f2.owner == 1 && dom2 == 2){
        p2money = p2money - f2.rent2house;
        p1money = p1money + f2.rent2house;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + f2.rent2house + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 2 && f2.owner == 1 && dom2 == 1){
        p2money = p2money - f2.rent1house;
        p1money = p1money + f2.rent1house;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + f2.rent1house + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 2 && f2.owner == 1 && owner4 == 1){
        p2money = p2money - rentAll;
        p1money = p1money + rentAll;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + rentAll + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 2 && f2.owner == 1){
        p2money = p2money - czynsz2;
        p1money = p1money + czynsz2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }


    if(p2loc == 4 && owner4 == 1 && hotel4 == 1){
        p2money = p2money - czynsz4hotel;
        p1money = p1money + czynsz4hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz4hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 4 && owner4 == 1 && dom4 == 4){
        p2money = p2money - czynsz4dom4;
        p1money = p1money + czynsz4dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz4dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 4 && owner4 == 1 && dom4 == 3){
        p2money = p2money - czynsz4dom3;
        p1money = p1money + czynsz4dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz4dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 4 && owner4 == 1 && dom4 == 2){
        p2money = p2money - czynsz4dom2;
        p1money = p1money + czynsz4dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz4dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 4 && owner4 == 1 && dom4 == 1){
        p2money = p2money - czynsz4dom1;
        p1money = p1money + czynsz4dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz4dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 4 && owner4 == 1 && f2.owner == 1){
        p2money = p2money - czynsz4all;
        p1money = p1money + czynsz4all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz4all + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 4 && owner4 == 1){
        p2money = p2money - czynsz4;
        p1money = p1money + czynsz4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }
    
    if(p2loc == 7 && owner7 == 1 && hotel7 == 1){
        p2money = p2money - czynsz7hotel;
        p1money = p1money + czynsz7hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz7hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 7 && owner7 == 1 && dom7 == 4){
        p2money = p2money - czynsz7dom4;
        p1money = p1money + czynsz7dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz7dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 7 && owner7 == 1 && dom7 == 3){
        p2money = p2money - czynsz7dom3;
        p1money = p1money + czynsz7dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz7dom3 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 7 && owner7 == 1 && dom7 == 2){
        p2money = p2money - czynsz7dom2;
        p1money = p1money + czynsz7dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz7dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 7 && owner7 == 1 && dom7 == 1){
        p2money = p2money - czynsz7dom1;
        p1money = p1money + czynsz7dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz7dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 7 && owner7 == 1 && owner9 == 1 && owner10 == 1){
        p2money = p2money - czynsz7all;
        p1money = p1money + czynsz7all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz7all + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 7 && owner7 == 1){
        p2money = p2money - czynsz7;
        p1money = p1money + czynsz7;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz7 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }

    if(p2loc == 9 && owner9 == 1 && hotel9 == 1){
        p2money = p2money - czynsz9hotel;
        p1money = p1money + czynsz9hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz9hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 9 && owner9 == 1 && dom9 == 4){
        p1money = p1money - czynsz9dom4;
        p2money = p2money + czynsz9dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz9dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 9 && owner9 == 1 && dom9 == 3){
        p2money = p2money - czynsz9dom3;
        p1money = p1money + czynsz9dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz9dom3 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 9 && owner9 == 1 && dom9 == 2){
        p2money = p2money - czynsz9dom2;
        p1money = p1money + czynsz9dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz9dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 9 && owner9 == 1 && dom9 == 1){
        p2money = p2money - czynsz9dom1;
        p1money = p1money + czynsz9dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz9dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 9 && owner9 == 1 && owner7 == 1 && owner10 == 1){
        p2money = p2money - czynsz9all;
        p1money = p1money + czynsz9all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz9all + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 9 && owner9 == 1){
        p2money = p2money - czynsz9;
        p1money = p1money + czynsz9;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz9 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }

    if(p2loc == 10 && owner10 == 1 && hotel10 == 1){
        p2money = p2money - czynsz10hotel;
        p1money = p1money + czynsz10hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz10hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 10 && owner10 == 1 && dom10 == 4){
        p2money = p2money - czynsz10dom4;
        p1money = p1money + czynsz10dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz10dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 10 && owner10 == 1 && dom10 == 3){
        p2money = p2money - czynsz10dom3;
        p1money = p1money + czynsz10dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz10dom3 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 10 && owner10 == 1 && dom10 == 2){
        p2money = p2money - czynsz10dom2;
        p1money = p1money + czynsz10dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz10dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 10 && owner10 == 1 && dom10 == 1){
        p2money = p2money - czynsz10dom1;
        p1money = p1money + czynsz10dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz10dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 10 && owner10 == 1 && owner9 == 1 && owner7 == 1){
        p2money = p2money - czynsz10all;
        p1money = p1money + czynsz10all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz10all + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 10 && owner10 == 1){
        p2money = p2money - czynsz10;
        p1money = p1money + czynsz10;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz10 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }

    if(p2loc == 12 && owner12 == 1 && hotel12 == 1){
        p2money = p2money - czynsz12hotel;
        p1money = p1money + czynsz12hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz12hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 12 && owner12 == 1 && dom12 == 4){
        p2money = p2money - czynsz12dom4;
        p1money = p1money + czynsz12dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz12dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 12 && owner12 == 1 && dom12 == 3){
        p2money = p2money - czynsz12dom3;
        p1money = p1money + czynsz12dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz12dom3 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 12 && owner12 == 1 && dom12 == 2){
        p2money = p2money - czynsz12dom2;
        p1money = p1money + czynsz12dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz12dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 12 && owner12 == 1 && dom12 == 1){
        p2money = p2money - czynsz12dom1;
        p1money = p1money + czynsz12dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz12dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 12 && owner12 == 1 && owner14 == 1 && owner15 == 1){
        p2money = p2money - czynsz12all;
        p1money = p1money + czynsz12all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz12all + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 12 && owner12 == 1){
        p2money = p2money - czynsz12;
        p1money = p1money + czynsz12;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz12 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }

    if(p2loc == 14 && owner14 == 1 && hotel14 == 1){
        p2money = p2money - czynsz14hotel;
        p1money = p1money + czynsz14hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz14hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 14 && owner14 == 1 && dom14 == 4){
        p2money = p2money - czynsz14dom4;
        p1money = p1money + czynsz14dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz14dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 14 && owner14 == 1 && dom14 == 3){
        p2money = p2money - czynsz14dom3;
        p1money = p1money + czynsz14dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz14dom3 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 14 && owner14 == 1 && dom14 == 2){
        p2money = p2money - czynsz14dom2;
        p1money = p1money + czynsz14dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz14dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 14 && owner14 == 1 && dom14 == 1){
        p2money = p2money - czynsz14dom1;
        p1money = p1money + czynsz14dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz14dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 14 && owner14 == 1 && owner15 == 1 && owner12 == 1){
        p2money = p2money - czynsz14all;
        p1money = p1money + czynsz14all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz14all + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 14 && owner14 == 1){
        p2money = p2money - czynsz14;
        p1money = p1money + czynsz14;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz14 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }
    if(p2loc == 15 && owner15 == 1 && hotel15 == 1){
        p2money = p2money - czynsz15hotel;
        p1money = p1money + czynsz15hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz15hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 15 && owner15 == 1 && dom15 == 4){
        p2money = p2money - czynsz15dom4;
        p1money = p1money + czynsz15dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz15dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 15 && owner15 == 1 && dom15 == 3){
        p2money = p2money - czynsz15dom3;
        p1money = p1money + czynsz15dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz15dom3 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 15 && owner15 == 1 && dom15 == 1){
        p2money = p2money - czynsz15dom2;
        p1money = p1money + czynsz15dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz15dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 15 && owner15 == 1 && dom15 == 1){
        p2money = p2money - czynsz15dom1;
        p1money = p1money + czynsz15dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz15dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 15 && owner15 == 1 && owner14 == 1 && owner12 == 1){
        p2money = p2money - czynsz15all;
        p1money = p1money + czynsz15all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz15all + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 15 && owner15 == 1){
        p2money = p2money - czynsz15;
        p1money = p1money + czynsz15;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz15 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }

    if(p2loc == 17 && owner17 == 1 && hotel17 == 1){
        p2money = p2money - czynsz17hotel;
        p1money = p1money + czynsz17hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz17hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 17 && owner17 == 1 && dom17 == 4){
        p2money = p2money - czynsz17dom4;
        p1money = p1money + czynsz17dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz17dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 17 && owner17 == 1 && dom17 == 3){
        p2money = p2money - v;
        p1money = p1money + czynsz17dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz17dom3 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 17 && owner17 == 1 && dom17 == 2){
        p2money = p2money - czynsz17dom2;
        p1money = p1money + czynsz17dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz17dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 17 && owner17 == 1 && dom17 == 1){
        p2money = p2money - czynsz17dom1;
        p1money = p1money + czynsz17dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz17dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 17 && owner17 == 1 && owner19 == 1 && f2.owner0 == 1){
        p2money = p2money - czynsz17all;
        p1money = p1money + czynsz17all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz17all + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 17 && owner17 == 1){
        p2money = p2money - czynsz17;
        p1money = p1money + czynsz17;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz17 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }

    if(p2loc == 19 && owner19 == 1 && hotel19 == 1){
        p2money = p2money - czynsz19hotel;
        p1money = p1money + czynsz19hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz19hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 19 && owner19 == 1 && dom19 == 4){
        p2money = p2money - czynsz19dom4;
        p1money = p1money + czynsz19dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz19dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 19 && owner19 == 1 && dom19 == 3){
        p2money = p2money - czynsz19dom3;
        p1money = p1money + czynsz19dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz19dom3 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 19 && owner19 == 1 && dom19 == 1){
        p2money = p2money - czynsz19dom2;
        p1money = p1money + czynsz19dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz19dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 19 && owner19 == 1 && dom19 == 1){
        p2money = p2money - czynsz19dom1;
        p1money = p1money + czynsz19dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz19dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 19 && owner19 == 1 && owner17 == 1 && f2.owner0 == 1){
        p2money = p2money - czynsz19all;
        p1money = p1money + czynsz19all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz19all + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 19 && owner19 == 1){
        p2money = p2money - czynsz19;
        p1money = p1money + czynsz19;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz19 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }

    if(p2loc == 20 && f2.owner0 == 1 && f2.hotel0 == 1){
        p2money = p2money - czynsz20hotel;
        p1money = p1money + czynsz20hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz20hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 20 && f2.owner0 == 1 && dom20 == 4){
        p2money = p2money - czynsz20dom4;
        p1money = p1money + czynsz20dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz20dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 20 && f2.owner0 == 1 && dom20 == 3){
        p2money = p2money - czynsz20dom3;
        p1money = p1money + czynsz20dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz20dom3 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 20 && f2.owner0 == 1 && dom20 == 2){
        p2money = p2money - czynsz20dom2;
        p1money = p1money + czynsz20dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz20dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 20 && f2.owner0 == 1 && dom20 == 1){
        p2money = p2money - czynsz20dom1;
        p1money = p1money + czynsz20dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz20dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 20 && f2.owner0 == 1 && owner19 == 1 && owner17 == 1){
        p2money = p2money - czynsz20all;
        p1money = p1money + czynsz20all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz20all + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 20 && f2.owner0 == 1){
        p2money = p2money - czynsz20;
        p1money = p1money + czynsz20;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz20 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }

    if(p2loc == 22 && f2.owner2 == 1 && f2.hotel2 == 1){
        p2money = p2money - czynsz22hotel;
        p1money = p1money + czynsz22hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz22hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 22 && f2.owner2 == 1 && dom22 == 4){
        p2money = p2money - czynsz22dom4;
        p1money = p1money + czynsz22dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz22dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 22 && f2.owner2 == 1 && dom22 == 3){
        p2money = p2money - czynsz22dom3;
        p1money = p1money + czynsz22dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz22dom3 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 22 && f2.owner2 == 1 && dom22 == 2){
        p2money = p2money - czynsz22dom2;
        p1money = p1money + czynsz22dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz22dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 22 && f2.owner2 == 1 && dom22 == 1){
        p2money = p2money - czynsz22dom1;
        p1money = p1money + czynsz22dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz22dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 22 && f2.owner2 == 1 && f2.owner4 == 1 && f2.owner5 == 1){
        p2money = p2money - czynsz22all;
        p1money = p1money + czynsz22all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz22all + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 22 && f2.owner2 == 1){
        p2money = p2money - czynsz22;
        p1money = p1money + czynsz22;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz22 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }

    if(p2loc == 24 && f2.owner4 == 1 && f2.hotel4 == 1){
        p2money = p2money - czynsz24hotel;
        p1money = p1money + czynsz24hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz24hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 24 && f2.owner4 == 1 && dom24 == 4){
        p2money = p2money - czynsz24dom4;
        p1money = p1money + czynsz24dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz24hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 24 && f2.owner4 == 1 && dom24 == 3){
        p2money = p2money - czynsz24dom3;
        p1money = p1money + czynsz24dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz24dom3 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 24 && f2.owner4 == 1 && dom24 == 2){
        p2money = p2money - czynsz24dom2;
        p1money = p1money + czynsz24dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz24dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 24 && f2.owner4 == 1 && dom24 == 1){
        p2money = p2money - czynsz24dom1;
        p1money = p1money + czynsz24dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz24dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 24 && f2.owner4 == 1 && f2.owner2 == 1 && f2.owner5 == 1){
        p2money = p2money - czynsz24all;
        p1money = p1money + czynsz24all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz24all + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 24 && f2.owner4 == 1){
        p2money = p2money - czynsz24;
        p1money = p1money + czynsz24;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz24 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }

    if(p2loc == 25 && f2.owner5 == 1 && f2.hotel5 == 1){
        p2money = p2money - czynsz25hotel;
        p1money = p1money + czynsz25hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz25hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 25 && f2.owner5 == 1 && dom25 == 4){
        p2money = p2money - czynsz25dom4;
        p1money = p1money + czynsz25dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz25dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 25 && f2.owner5 == 1 && dom25 == 3){
        p2money = p2money - czynsz25dom3;
        p1money = p1money + czynsz25dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz25dom3 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 25 && f2.owner5 == 1 && dom25 == 2){
        p2money = p2money - czynsz25dom2;
        p1money = p1money + czynsz25dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz25dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 25 && f2.owner5 == 1 && dom25 == 1){
        p2money = p2money - czynsz25dom1;
        p1money = p1money + czynsz25dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz25dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 25 && f2.owner5 == 1 && f2.owner4 == 1 && f2.owner2 == 1){
        p2money = p2money - czynsz25all;
        p1money = p1money + czynsz25all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz25all + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 25 && f2.owner5 == 1){
        p2money = p2money - czynsz25;
        p1money = p1money + czynsz25;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz25 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }
    if(p2loc == 27 && f2.owner7 == 1 && f2.hotel7 == 1){
        p2money = p2money - czynsz27hotel;
        p1money = p1money + czynsz27hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz27hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 27 && f2.owner7 == 1 && dom27 == 4){
        p2money = p2money - czynsz27dom4;
        p1money = p1money + czynsz27dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz27dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 27 && f2.owner7 == 1 && dom27 == 3){
        p2money = p2money - czynsz27dom3;
        p1money = p1money + czynsz27dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz27dom3 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 27 && f2.owner7 == 1 && dom27 == 2){
        p2money = p2money - czynsz27dom2;
        p1money = p1money + czynsz27dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz27dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 27 && f2.owner7 == 1 && dom27 == 1){
        p2money = p2money - czynsz27dom1;
        p1money = p1money + czynsz27dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz27dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 27 && f2.owner7 == 1 && f2.owner8 == 1 && owner30 == 1){
        p2money = p2money - czynsz27all;
        p1money = p1money + czynsz27all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz27all + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 27 && f2.owner7 == 1){
        p2money = p2money - czynsz27;
        p1money = p1money + czynsz27;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz27 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }

    if(p2loc == 28 && f2.owner8 == 1 && f2.hotel8 == 1){
        p2money = p2money - czynsz28hotel;
        p1money = p1money + czynsz28hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz28hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 25 && f2.owner8 == 1 && dom28 == 4){
        p2money = p2money - czynsz28dom4;
        p1money = p1money + czynsz28dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz28dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 28 && f2.owner8 == 1 && dom28 == 3){
        p2money = p2money - czynsz28dom3;
        p1money = p1money + czynsz28dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz28dom3 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 28 && f2.owner8 == 1 && dom28 == 2){
        p2money = p2money - czynsz28dom2;
        p1money = p1money + czynsz28dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz28dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 28 && f2.owner8 == 1 && dom28 == 1){
        p2money = p2money - czynsz28dom1;
        p1money = p1money + czynsz28dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz28dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 28 && f2.owner8 == 1 && f2.owner7 == 1 && owner30 == 1){
        p2money = p2money - czynsz28all;
        p1money = p1money + czynsz28all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz28all + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 28 && f2.owner8 == 1){
        p2money = p2money - czynsz28;
        p1money = p1money + czynsz28;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz28 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }

    if(p2loc == 30 && owner30 == 1 && hotel30 == 1){
        p2money = p2money - czynsz30hotel;
        p1money = p1money + czynsz30hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz30hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 30 && owner30 == 1 && dom30 == 4){
        p2money = p2money - czynsz30dom4;
        p1money = p1money + czynsz30dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz30dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 30 && owner30 == 1 && dom30 == 3){
        p2money = p2money - czynsz30dom3;
        p1money = p1money + czynsz30dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz30dom3 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 30 && owner30 == 1 && dom30 == 2){
        p2money = p2money - czynsz30dom2;
        p1money = p1money + czynsz30dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz30dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 30 && owner30 == 1 && dom30 == 1){
        p2money = p2money - czynsz30dom1;
        p1money = p1money + czynsz30dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz30dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 30 && owner30 == 1 && f2.owner8 == 1 && f2.owner7 == 1){
        p2money = p2money - czynsz30all;
        p1money = p1money + czynsz30all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz30all + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 30 && owner30 == 1){
        p2money = p2money - czynsz30;
        p1money = p1money + czynsz30;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz30 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }

    if(p2loc == 32 && owner32 == 1 && hotel32 == 1){
        p2money = p2money - czynsz32hotel;
        p1money = p1money + czynsz32hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz32hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 32 && owner32 == 1 && dom32 == 4){
        p2money = p2money - czynsz32dom4;
        p1money = p1money + czynsz32dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz32dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 32 && owner32 == 1 && dom32 == 3){
        p2money = p2money - czynsz32dom3;
        p1money = p1money + czynsz32dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz32dom3 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 32 && owner32 == 1 && dom32 == 2){
        p2money = p2money - czynsz32dom2;
        p1money = p1money + czynsz32dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz32dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 32 && owner32 == 1 && dom32 == 1){
        p2money = p2money - czynsz32dom1;
        p1money = p1money + czynsz32dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz32dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 32 && owner32 == 1 && owner33 == 1 && owner35 == 1){
        p2money = p2money - czynsz32all;
        p1money = p1money + czynsz32all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz32all + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 32 && owner32 == 1){
        p2money = p2money - czynsz32;
        p1money = p1money + czynsz32;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz32 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }

    if(p2loc == 33 && owner33 == 1 && hotel33 == 1){
        p2money = p2money - czynsz33hotel;
        p1money = p1money + czynsz33hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz33hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 33 && owner33 == 1 && dom33 == 4){
        p2money = p2money - czynsz33dom4;
        p1money = p1money + czynsz33dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz33dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 33 && owner33 == 1 && dom33 == 3){
        p2money = p2money - czynsz33dom3;
        p1money = p1money + czynsz33dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz33dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 33 && owner33 == 1 && dom33 == 2){
        p2money = p2money - czynsz33dom2;
        p1money = p1money + czynsz33dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz33dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 33 && owner33 == 1 && dom33 == 1){
        p2money = p2money - czynsz33dom1;
        p1money = p1money + czynsz33dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz33dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 33 && owner33 == 1 && owner32 == 1 && owner35 == 1){
        p2money = p2money - czynsz33all;
        p1money = p1money + czynsz33all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz33all + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 33 && owner33 == 1){
        p2money = p2money - czynsz33;
        p1money = p1money + czynsz33;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz33 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }

    if(p2loc == 35 && owner35 == 1 && hotel35 == 1){
        p2money = p2money - czynsz35hotel;
        p1money = p1money + czynsz35hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz35hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 35 && owner35 == 1 && dom35 == 4){
        p2money = p2money - czynsz35dom4;
        p1money = p1money + czynsz35dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz35dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 35 && owner35 == 1 && dom35 == 3){
        p2money = p2money - czynsz35dom3;
        p1money = p1money + czynsz35dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz35dom3 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 35 && owner35 == 1 && dom35 == 2){
        p2money = p2money - czynsz35dom2;
        p1money = p1money + czynsz35dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz35dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 35 && owner35 == 1 && dom35 == 1){
        p2money = p2money - czynsz35dom1;
        p1money = p1money + czynsz35dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz35dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 35 && owner35 == 1 && owner33 == 1 && owner32 == 1){
        p2money = p2money - czynsz35all;
        p1money = p1money + czynsz35all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz35all + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 35 && owner35 == 1){
        p2money = p2money - czynsz35;
        p1money = p1money + czynsz35;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz35 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }

    if(p2loc == 38 && owner38 == 1 && hotel38 == 1){
        p2money = p2money - czynsz38hotel;
        p1money = p1money + czynsz38hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz38hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 38 && owner38 == 1 && dom38 == 4){
        p2money = p2money - czynsz38dom4;
        p1money = p1money + czynsz38dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz38dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 38 && owner38 == 1 && dom38 == 3){
        p2money = p2money - czynsz38dom3;
        p1money = p1money + czynsz38dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz38dom3 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 38 && owner38 == 1 && dom38 == 2){
        p2money = p2money - czynsz38dom2;
        p1money = p1money + czynsz38dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz38dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 38 && owner38 == 1 && dom38 == 1){
        p2money = p2money - czynsz38dom1;
        p1money = p1money + czynsz38dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz38dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 38 && owner38 == 1 && owner40 == 1){
        p2money = p2money - czynsz38all;
        p1money = p1money + czynsz38all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz38all + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 38 && owner38 == 1){
        p2money = p2money - czynsz38;
        p1money = p1money + czynsz38;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz38 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }

    if(p2loc == 40 && owner40 == 1 && hotel40 == 1){
        p2money = p2money - czynsz40hotel;
        p1money = p1money + czynsz40hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz40hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 40 && owner40 == 1 && dom40 == 4){
        p2money = p2money - czynsz40dom4;
        p1money = p1money + czynsz40dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz40dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 40 && owner40 == 1 && dom40 == 3){
        p2money = p2money - czynsz40dom3;
        p1money = p1money + czynsz40dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz40dom3 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 40 && owner40 == 1 && dom40 == 2){
        p2money = p2money - czynsz40dom2;
        p1money = p1money + czynsz40dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz40dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 40 && owner40 == 1 && dom40 == 1){
        p2money = p2money - czynsz40dom1;
        p1money = p1money + czynsz40dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz40dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 40 && owner40 == 1 && owner38 == 1){
        p2money = p2money - czynsz40all;
        p1money = p1money + czynsz40all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz40all + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 40 && owner40 == 1){
        p2money = p2money - czynsz40;
        p1money = p1money + czynsz40;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz40 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }

    if(p2loc == 6 && owner6 == 1 && owner16 == 1 && f2.owner6 == 1 && owner36 == 1){
        p2money = p2money - stacje46;
        p1money = p1money + stacje46;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + stacje46 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 6 && owner6 == 1 && owner16 == 1 && f2.owner6 == 1){
        p2money = p2money - stacje36;
        p1money = p1money + stacje36;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + stacje36 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 6 && owner6 == 1 && owner16 == 1 && owner36 == 1){
        p2money = p2money - stacje36;
        p1money = p1money + stacje36;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + stacje36 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 6 && owner6 == 1 && f2.owner6 == 1 && owner36 == 1){
        p2money = p2money - stacje36;
        p1money = p1money + stacje36;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + stacje36 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 6 && owner6 == 1 && owner16 == 1){
        p2money = p2money - stacje26;
        p1money = p1money + stacje26;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + stacje26 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 6 && owner6 == 1 && f2.owner6 == 1){
        p2money = p2money - stacje26;
        p1money = p1money + stacje26;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + stacje26 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 6 && owner6 == 1 && owner36 == 1){
        p2money = p2money - stacje26;
        p1money = p1money + stacje26;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + stacje26 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 6 && owner6 == 1){
        p2money = p2money - czynsz6;
        p1money = p1money + czynsz6;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz6 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    }

    if(p2loc == 16 && owner16 == 1 && f2.owner6 == 1 && owner36 == 1 && owner6 == 1){
        p2money = p2money - stacje416;
        p1money = p1money + stacje416;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + stacje416 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 16 && owner16 == 1 && owner6 == 1 && owner36 == 1){
        p2money = p2money - stacje316;
        p1money = p1money + stacje316;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + stacje316 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 16 && owner16 == 1 && f2.owner6 == 1 && owner36 == 1){
        p2money = p2money - stacje316;
        p1money = p1money + stacje316;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + stacje316 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 16 && owner16 == 1 && owner6 == 1 && f2.owner6 == 1){
        p2money = p2money - stacje316;
        p1money = p1money + stacje316;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + stacje316 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 16 && owner16 == 1 && owner6 == 1){
        p2money = p2money - stacje216;
        p1money = p1money + stacje216;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + stacje216 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 16 && owner16 == 1 && f2.owner6 == 1){
        p2money = p2money - stacje216;
        p1money = p1money + stacje216;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + stacje216 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 16 && owner16 == 1 && owner36 == 1){
        p2money = p2money - stacje216;
        p1money = p1money + stacje216;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + stacje216 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 16 && owner16 == 1){
        p2money = p2money - czynsz16;
        p1money = p1money + czynsz16;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz16 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    }

    if(p2loc == 26 && f2.owner6 == 1 && owner6 == 1 && owner16 == 1 && owner36 == 1){
        p2money = p2money - stacje426;
        p1money = p1money + stacje426;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + stacje426 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 26 && f2.owner6 == 1 && owner16 == 1 && owner36 == 1){
        p2money = p2money - stacje326;
        p1money = p1money + stacje326;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + stacje326 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 26 && f2.owner6 == 1 && owner16 == 1 && owner6 == 1){
        p2money = p2money - stacje326;
        p1money = p1money + stacje326;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + stacje326 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 26 && f2.owner6 == 1 && owner6 == 1 && owner36 == 1){
        p2money = p2money - stacje326;
        p1money = p1money + stacje326;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + stacje326 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 26 && f2.owner6 == 1 && owner6 == 1){
        p2money = p2money - stacje226;
        p1money = p1money + stacje226;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + stacje226 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 26 && f2.owner6 == 1 && owner16 == 1){
        p2money = p2money - stacje226;
        p1money = p1money + stacje226;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + stacje226 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 26 && f2.owner6 == 1 && owner36 == 1){
        p2money = p2money - stacje226;
        p1money = p1money + stacje226;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + stacje226 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 26 && f2.owner6 == 1){
        p2money = p2money - czynsz26;
        p1money = p1money + czynsz26;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + czynsz26 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    }

    if(p2loc == 36 && owner36 == 1 && owner6 == 1 && owner16 == 1 && f2.owner6 == 1){
        p2money = p2money - stacje436;
        p1money = p1money + stacje436;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + stacje436 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 36 && owner36 == 1 && owner16 == 1 && f2.owner6 == 1){
        p2money = p2money - stacje336;
        p1money = p1money + stacje336;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + stacje336 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 36 && owner36 == 1 && owner16 == 1 && owner6 == 1){
        p2money = p2money - stacje336;
        p1money = p1money + stacje336;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + stacje336 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 36 && owner36 == 1 && owner6 == 1 && f2.owner6 == 1){
        p2money = p2money - stacje336;
        p1money = p1money + stacje336;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + stacje336 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 36 && owner36 == 1 && owner6 == 1){
        p2money = p2money - stacje236;
        p1money = p1money + stacje236;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + stacje236 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 36 && owner36 == 1 && owner16 == 1){
        p2money = p2money - stacje236;
        p1money = p1money + stacje236;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + stacje236 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 36 && owner36 == 1 && f2.owner6 == 1){
        p2money = p2money - stacje236;
        p1money = p1money + stacje236;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + stacje236 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 36 && owner36 == 1){
        p2money = p2money - czynsz36;
        p1money = p1money + owner36;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + owner36 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    }

    if(p2loc == 13 && owner13 == 1 && f2.owner9 == 1){
        p2mony = p2money - destyny * 10;
        p1money = p1money + destyny * 10;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + destyny * 10 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);  
    } else if(p2loc == 13 && owner13 == 1){
        p2mony = p2money - destyny * 4;
        p1money = p1money + destyny * 4;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + destyny * 4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);  
    }

    if(p2loc == 29 && f2.owner9 == 1 && owner13 == 1){
        p2mony = p2money - destyny * 10;
        p1money = p1money + destyny * 10;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + destyny * 10 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);  
    } else if(p2loc == 29 && f2.owner9 == 1){
        p2mony = p2money - destyny * 4;
        p1money = p1money + destyny * 4;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci ci czynsz: ' + destyny * 4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);  
    }

    if(p2loc == 2 && f2.owner == 3 && f2.hotel == 1){
        p2money = p2money - f2.rentHotel;
        p3money = p3money + f2.rentHotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + f2.rentHotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 2 && f2.owner == 3 && dom2 == 4){
        p2money = p2money - f2.rent4house;
        p3money = p3money + f2.rent4house;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + f2.rent4house + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 2 && f2.owner == 3 && dom2 == 3){
        p2money = p2money - f2.rent3house;
        p3money = p3money + f2.rent3house;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + f2.rent3house + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 2 && f2.owner == 3 && dom2 == 3){
        p2money = p2money - f2.rent2house;
        p3money = p3money + f2.rent2house;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + f2.rent2house + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 2 && f2.owner == 3 && dom2 == 1){
        p2money = p2money - f2.rent1house;
        p3money = p3money + f2.rent1house;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + f2.rent1house + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 2 && f2.owner == 3 && owner4 == 3){
        p2money = p2money - rentAll;
        p3money = p3money + rentAll;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + rentAll + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 2 && f2.owner == 3){
        p2money = p2money - czynsz2;
        p3money = p3money + czynsz2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }

    if(p2loc == 4 && owner4 == 3 && hotel4 == 1){
        p2money = p2money - czynsz4hotel;
        p3money = p3money + czynsz4hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz4hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 4 && owner4 == 3 && dom4 == 4){
        p2money = p2money - czynsz4dom4;
        p3money = p3money + czynsz4dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz4dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 4 && owner4 == 3 && dom4 == 3){
        p2money = p2money - czynsz4dom3;
        p3money = p3money + czynsz4dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz4dom3 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 4 && owner4 == 3 && dom4 == 2){
        p2money = p2money - czynsz4dom2;
        p3money = p3money + czynsz4dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz4dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 4 && owner4 == 3 && dom4 == 1){
        p2money = p2money - czynsz4dom1;
        p3money = p3money + czynsz4dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz4dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 4 && owner4 == 3 && f2.owner == 3){
        p2money = p2money - czynsz4all;
        p3money = p3money + czynsz4all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz4dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 4 && owner4 == 3){
        p2money = p2money - czynsz4;
        p3money = p3money + czynsz4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }
    
    if(p2loc == 7 && owner7 == 3 && hotel7 == 1){
        p2money = p2money - czynsz7hotel;
        p3money = p3money + czynsz7hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz7hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 7 && owner7 == 3 && dom7 == 4){
        p2money = p2money - czynsz7dom4;
        p3money = p3money + czynsz7dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz7dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 7 && owner7 == 3 && dom7 == 3){
        p2money = p2money - czynsz7dom3;
        p3money = p3money + czynsz7dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz7dom3 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 7 && owner7 == 3 && dom7 == 2){
        p2money = p2money - czynsz7dom2;
        p3money = p3money + czynsz7dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz7dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 7 && owner7 == 3 && dom7 == 1){
        p2money = p2money - czynsz7dom1;
        p3money = p3money + czynsz7dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz7dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 7 && owner7 == 3 && owner9 == 3 && owner10 == 3){
        p2money = p2money - czynsz7all;
        p3money = p3money + czynsz7all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz7all + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 7 && owner7 == 3){
        p2money = p2money - czynsz7;
        p3money = p3money + czynsz7;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz7 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }

    if(p2loc == 9 && owner9 == 3 && hotel9 == 1){
        p2money = p2money - czynsz9hotel;
        p3money = p3money + czynsz9hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz9hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 9 && owner9 == 3 && dom9 == 4){
        p2money = p2money - czynsz9dom4;
        p3money = p3money + czynsz9dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz9dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 9 && owner9 == 3 && dom9 == 3){
        p2money = p2money - czynsz9dom3;
        p3money = p3money + czynsz9dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz9dom3 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 9 && owner9 == 3 && dom9 == 2){
        p2money = p2money - czynsz9dom2;
        p3money = p3money + czynsz9dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz9dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 9 && owner9 == 3 && dom9 == 1){
        p2money = p2money - czynsz9dom1;
        p3money = p3money + czynsz9dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz9dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 9 && owner9 == 3 && owner7 == 3 && owner10 == 3){
        p2money = p2money - czynsz9all;
        p3money = p3money + czynsz9all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz9all + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 9 && owner9 == 3){
        p2money = p2money - czynsz9;
        p3money = p3money + czynsz9;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz9 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }

    if(p2loc == 10 && owner10 == 3 && hotel10 == 1){
        p2money = p2money - czynsz10hotel;
        p3money = p3money + czynsz10hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz10hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 10 && owner10 == 3 && dom10 == 4){
        p2money = p2money - czynsz10dom4;
        p3money = p3money + czynsz10dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz10dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 10 && owner10 == 3 && dom10 == 3){
        p2money = p2money - czynsz10dom3;
        p3money = p3money + czynsz10dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz10dom3 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 10 && owner10 == 3 && dom10 == 2){
        p2money = p2money - czynsz10dom2;
        p3money = p3money + czynsz10dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz10dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 10 && owner10 == 3 && dom10 == 1){
        p2money = p2money - czynsz10dom1;
        p3money = p3money + czynsz10dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz10dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 10 && owner10 == 3 && owner9 == 3 && owner7 == 3){
        p2money = p2money - czynsz10all;
        p3money = p3money + czynsz10all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz10all + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 10 && owner10 == 3){
        p2money = p2money - czynsz10;
        p3money = p3money + czynsz10;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz10 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }

    if(p2loc == 12 && owner12 == 3 && hotel12 == 1){
        p2money = p2money - czynsz12hotel;
        p3money = p3money + czynsz12hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz12hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 12 && owner12 == 3 && dom12 == 4){
        p2money = p2money - czynsz12dom4;
        p3money = p3money + czynsz12dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz12dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 12 && owner12 == 3 && dom12 == 3){
        p2money = p2money - czynsz12dom3;
        p3money = p3money + czynsz12dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz12dom3 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 12 && owner12 == 3 && dom12 == 2){
        p2money = p2money - czynsz12dom2;
        p3money = p3money + czynsz12dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz12dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 12 && owner12 == 3 && dom12 == 1){
        p2money = p2money - czynsz12dom1;
        p3money = p3money + czynsz12dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz12dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 12 && owner12 == 3 && owner14 == 3 && owner15 == 3){
        p2money = p2money - czynsz12all;
        p3money = p3money + czynsz12all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz12dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 12 && owner12 == 3){
        p2money = p2money - czynsz12;
        p3money = p3money + czynsz12;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz12 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }


    if(p2loc == 14 && owner14 == 3 && hotel14 == 1){
        p2money = p2money - czynsz14hotel;
        p3money = p3money + czynsz14hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz14hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 14 && owner14 == 3 && dom14 == 4){
        p2money = p2money - czynsz14dom4;
        p3money = p3money + czynsz14dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz14dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 14 && owner14 == 3 && dom14 == 3){
        p2money = p2money - czynsz14dom3;
        p3money = p3money + czynsz14dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz14dom3 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 14 && owner14 == 3 && dom14 == 2){
        p2money = p2money - czynsz14dom2;
        p3money = p3money + czynsz14dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz14dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 14 && owner14 == 3 && dom14 == 1){
        p2money = p2money - czynsz14dom1;
        p3money = p3money + czynsz14dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz14dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 14 && owner14 == 3 && owner15 == 3 && owner12 == 3){
        p2money = p2money - czynsz14all;
        p3money = p3money + czynsz14all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz14all + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 14 && owner14 == 3){
        p2money = p2money - czynsz14;
        p3money = p3money + czynsz14;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz14 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }
    if(p2loc == 15 && owner15 == 3 && hotel15 == 1){
        p2money = p2money - czynsz15hotel;
        p3money = p3money + czynsz15hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz15hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 15 && owner15 == 3 && dom15 == 4){
        p2money = p2money - czynsz15dom4;
        p3money = p3money + czynsz15dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz15dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 15 && owner15 == 3 && dom15 == 3){
        p2money = p2money - czynsz15dom3;
        p3money = p3money + czynsz15dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz15dom3 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 15 && owner15 == 3 && dom15 == 2){
        p2money = p2money - czynsz15dom2;
        p3money = p3money + czynsz15dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz15dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 15 && owner15 == 3 && dom15 == 1){
        p2money = p2money - czynsz15dom1;
        p3money = p3money + czynsz15dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz15dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 15 && owner15 == 3 && owner14 == 3 && owner12 == 3){
        p2money = p2money - czynsz15all;
        p3money = p3money + czynsz15all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz15all + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 15 && owner15 == 3){
        p2money = p2money - czynsz15;
        p3money = p3money + czynsz15;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz15all + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }

    if(p2loc == 17 && owner17 == 3 && hotel17 == 1){
        p2money = p2money - czynsz17hotel;
        p3money = p3money + czynsz17hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz17hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 17 && owner17 == 3 && dom17 == 4){
        p2money = p2money - czynsz17dom4;
        p3money = p3money + czynsz17dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz17dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 17 && owner17 == 3 && dom17 == 3){
        p2money = p2money - czynsz17dom3;
        p3money = p3money + czynsz17dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz17dom3 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 17 && owner17 == 3 && dom17 == 2){
        p2money = p2money - czynsz17dom2;
        p3money = p3money + czynsz17dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz17dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 17 && owner17 == 3 && dom17 == 1){
        p2money = p2money - czynsz17dom1;
        p3money = p3money + czynsz17dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz17dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 17 && owner17 == 3 && owner19 == 3 && f2.owner0 == 3){
        p2money = p2money - czynsz17all;
        p3money = p3money + czynsz17all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz17all + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 17 && owner17 == 3){
        p2money = p2money - czynsz17;
        p3money = p3money + czynsz17;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz17 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }

    if(p2loc == 19 && owner19 == 3 && hotel19 == 1){
        p2money = p2money - czynsz19hotel;
        p3money = p3money + czynsz19hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz19hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 19 && owner19 == 3 && dom19 == 4){
        p2money = p2money - czynsz19dom4;
        p3money = p3money + czynsz19dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz19dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 19 && owner19 == 3 && dom19 == 3){
        p2money = p2money - czynsz19dom3;
        p3money = p3money + czynsz19dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz19dom3 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 19 && owner19 == 3 && dom19 == 2){
        p2money = p2money - czynsz19dom2;
        p3money = p3money + czynsz19dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz19dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 19 && owner19 == 3 && dom19 == 1){
        p2money = p2money - czynsz19dom1;
        p3money = p3money + czynsz19dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz19dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 19 && owner19 == 3 && owner17 == 3 && f2.owner0 == 3){
        p2money = p2money - czynsz19all;
        p3money = p3money + czynsz19all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz19all + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 19 && owner19 == 3){
        p2money = p2money - czynsz19;
        p3money = p3money + czynsz19;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz19 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }

    if(p2loc == 20 && f2.owner0 == 3 && f2.hotel0 == 1){
        p2money = p2money - czynsz20hotel;
        p3money = p3money + czynsz20hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz20hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 20 && f2.owner0 == 3 && dom20 == 4){
        p2money = p2money - czynsz20dom4;
        p3money = p3money + czynsz20dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz20dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 20 && f2.owner0 == 3 && dom20 == 3){
        p2money = p2money - czynsz20dom3;
        p3money = p3money + czynsz20dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz20dom3 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 20 && f2.owner0 == 3 && dom20 == 2){
        p2money = p2money - czynsz20dom2;
        p3money = p3money + czynsz20dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz20dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 20 && f2.owner0 == 3 && dom20 == 1){
        p2money = p2money - czynsz20dom1;
        p3money = p3money + czynsz20dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz20dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 20 && f2.owner0 == 3 && owner19 == 3 && owner17 == 3){
        p2money = p2money - czynsz20all;
        p2money = p2money + czynsz20all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz20all + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 20 && f2.owner0 == 3){
        p2money = p2money - czynsz20;
        p3money = p3money + czynsz20;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz20 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }

    if(p2loc == 22 && f2.owner2 == 3 && f2.hotel2 == 1){
        p2money = p2money - czynsz22hotel;
        p3money = p3money + czynsz22hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz22hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 22 && f2.owner2 == 3 && dom22 == 4){
        p2money = p2money - czynsz22dom4;
        p3money = p3money + czynsz22dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz22dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 22 && f2.owner2 == 3 && dom22 == 3){
        p2money = p2money - czynsz22dom3;
        p3money = p3money + czynsz22dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz22dom3 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 22 && f2.owner2 == 3 && dom22 == 2){
        p2money = p2money - czynsz22dom2;
        p3money = p3money + czynsz22dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz22dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 22 && f2.owner2 == 3 && dom22 == 1){
        p2money = p2money - czynsz22dom1;
        p3money = p3money + czynsz22dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz22dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 22 && f2.owner2 == 3 && f2.owner4 == 3 && f2.owner5 == 3){
        p2money = p2money - czynsz22all;
        p3money = p3money + czynsz22all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz22all + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 22 && f2.owner2 == 3){
        p2money = p2money - czynsz22;
        p3money = p3money + czynsz22;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz22 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }

    if(p2loc == 24 && f2.owner4 == 3 && f2.hotel4 == 1){
        p2money = p2money - czynsz24hotel;
        p3money = p3money + czynsz24hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz24hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 24 && f2.owner4 == 3 && dom24 == 4){
        p2money = p2money - czynsz24dom4;
        p3money = p3money + czynsz24dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz24dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 24 && f2.owner4 == 3 && dom24 == 3){
        p2money = p2money - czynsz24dom3;
        p3money = p3money + czynsz24dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz24dom3 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 24 && f2.owner4 == 3 && dom24 == 2){
        p2money = p2money - czynsz24dom2;
        p3money = p3money + czynsz24dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz24dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 24 && f2.owner4 == 3 && dom24 == 1){
        p2money = p2money - czynsz24dom1;
        p3money = p3money + czynsz24dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz24dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 24 && f2.owner4 == 3 && f2.owner2 == 3 && f2.owner5 == 3){
        p1money = p1money - czynsz24all;
        p3money = p3money + czynsz24all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz24all + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 24 && f2.owner4 == 3){
        p2money = p2money - czynsz24;
        p3money = p3money + czynsz24;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz24 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }

    if(p2loc == 25 && f2.owner5 == 3 && f2.hotel5 == 1){
        p2money = p2money - czynsz25hotel;
        p3money = p3money + czynsz25hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz25hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 25 && f2.owner5 == 3 && dom25 == 4){
        p2money = p2money - czynsz25dom4;
        p3money = p3money + czynsz25dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz25dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 25 && f2.owner5 == 3 && dom25 == 3){
        p2money = p2money - czynsz25dom3;
        p3money = p3money + czynsz25dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz25dom3 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 25 && f2.owner5 == 3 && dom25 == 2){
        p2money = p2money - czynsz25dom2;
        p3money = p3money + czynsz25dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz25dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 25 && f2.owner5 == 3 && dom25 == 1){
        p2money = p2money - czynsz25dom1;
        p3money = p3money + czynsz25dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz25dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 25 && f2.owner5 == 3 && f2.owner4 == 3 && f2.owner2 == 3){
        p2money = p2money - czynsz25all;
        p3money = p3money + czynsz25all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz25all + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 25 && f2.owner5 == 3){
        p2money = p2money - czynsz25;
        p3money = p3money + czynsz25;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz25 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }
    if(p2loc == 27 && f2.owner7 == 3 && f2.hotel7 == 1){
        p2money = p2money - czynsz27hotel;
        p3money = p3money + czynsz27hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz27hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 27 && f2.owner7 == 3 && dom27 == 4){
        p2money = p2money - czynsz27dom4;
        p3money = p3money + czynsz27dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz27dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 27 && f2.owner7 == 3 && dom27 == 3){
        p2money = p2money - czynsz27dom3;
        p3money = p3money + czynsz27dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz27dom3 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 27 && f2.owner7 == 3 && dom27 == 2){
        p2money = p2money - czynsz27dom2;
        p3money = p3money + czynsz27dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz27dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 27 && f2.owner7 == 3 && dom27 == 1){
        p2money = p2money - czynsz27dom1;
        p3money = p3money + czynsz27dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz27dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 27 && f2.owner7 == 3 && f2.owner8 == 3 && owner30 == 3){
        p2money = p2money - czynsz27all;
        p3money = p3money + czynsz27all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz27all + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 27 && f2.owner7 == 3){
        p2money = p2money - czynsz27;
        p3money = p3money + czynsz27;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz27 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }

    if(p2loc == 28 && f2.owner8 == 3 && f2.hotel8 == 1){
        p2money = p2money - czynsz28hotel;
        p3money = p3money + czynsz28hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz28hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 25 && f2.owner8 == 3 && dom28 == 4){
        p2money = p2money - czynsz28dom4;
        p3money = p3money + czynsz28dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz28dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 28 && f2.owner8 == 3 && dom28 == 3){
        p2money = p2money - czynsz28dom3;
        p3money = p3money + czynsz28dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz28dom3 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 28 && f2.owner8 == 3 && dom28 == 2){
        p2money = p2money - czynsz28dom2;
        p3money = p3money + czynsz28dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz28dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 28 && f2.owner8 == 3 && dom28 == 1){
        p2money = p2money - czynsz28dom1;
        p3money = p3money + czynsz28dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz28dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 28 && f2.owner8 == 3 && f2.owner7 == 3 && owner30 == 3){
        p2money = p2money - czynsz28all;
        p3money = p3money + czynsz28all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz28all + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 28 && f2.owner8 == 3){
        p2money = p2money - czynsz28;
        p3money = p3money + czynsz28;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz28 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }

    if(p2loc == 30 && owner30 == 3 && hotel30 == 1){
        p2money = p2money - czynsz30hotel;
        p3money = p3money + czynsz30hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz30hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 30 && owner30 == 3 && dom30 == 4){
        p2money = p2money - czynsz30dom4;
        p3money = p3money + czynsz30dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz30dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 30 && owner30 == 3 && dom30 == 3){
        p2money = p2money - czynsz30dom3;
        p3money = p3money + czynsz30dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz30dom3 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 30 && owner30 == 3 && dom30 == 2){
        p2money = p2money - czynsz30dom2;
        p3money = p3money + czynsz30dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz30dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 30 && owner30 == 3 && dom30 == 1){
        p2money = p2money - czynsz30dom1;
        p3money = p3money + czynsz30dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz30dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 30 && owner30 == 3 && f2.owner8 == 3 && f2.owner7 == 3){
        p2money = p2money - czynsz30all;
        p3money = p3money + czynsz30all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz30all + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 30 && owner30 == 3){
        p2money = p2money - czynsz30;
        p3money = p3money + czynsz30;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz30 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }

    if(p2loc == 32 && owner32 == 3 && hotel32 == 1){
        p2money = p2money - czynsz32hotel;
        p3money = p3money + czynsz32hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz32hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 32 && owner32 == 3 && dom32 == 4){
        p2money = p2money - czynsz32dom4;
        p3money = p3money + czynsz32dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz32dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 32 && owner32 == 3 && dom32 == 3){
        p2money = p2money - czynsz32dom3;
        p3money = p3money + czynsz32dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz32dom3 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 32 && owner32 == 3 && dom32 == 2){
        p2money = p2money - czynsz32dom2;
        p3money = p3money + czynsz32dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz32dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 32 && owner32 == 3 && dom32 == 1){
        p2money = p2money - czynsz32dom1;
        p3money = p3money + czynsz32dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz32dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 32 && owner32 == 3 && owner33 == 3 && owner35 == 3){
        p2money = p2money - czynsz32all;
        p3money = p3money + czynsz32all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz32all + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 32 && owner32 == 3){
        p2money = p2money - czynsz32;
        p3money = p3money + czynsz32;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz32 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }

    if(p2loc == 33 && owner33 == 3 && hotel33 == 1){
        p2money = p2money - czynsz33hotel;
        p3money = p3money + czynsz33hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz33hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 33 && owner33 == 3 && dom33 == 4){
        p2money = p2money - czynsz33dom4;
        p3money = p3money + czynsz33dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz33dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 33 && owner33 == 3 && dom33 == 3){
        p2money = p2money - czynsz33dom3;
        p3money = p3money + czynsz33dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz33dom3 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 33 && owner33 == 3 && dom33 == 2){
        p2money = p2money - czynsz33dom2;
        p3money = p3money + czynsz33dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz33dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 33 && owner33 == 3 && dom33 == 1){
        p2money = p2money - czynsz33dom1;
        p3money = p3money + czynsz33dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz33dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 33 && owner33 == 3 && owner32 == 3 && owner35 == 3){
        p2money = p2money - czynsz33all;
        p3money = p3money + czynsz33all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz33all + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 33 && owner33 == 3){
        p2money = p2money - czynsz33;
        p3money = p3money + czynsz33;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz33 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }

    if(p2loc == 35 && owner35 == 3 && hotel35 == 1){
        p2money = p2money - czynsz35hotel;
        p3money = p3money + czynsz35hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz35hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 35 && owner35 == 3 && dom35 == 4){
        p2money = p2money - czynsz35dom4;
        p3money = p3money + czynsz35dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz35dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 35 && owner35 == 3 && dom35 == 3){
        p2money = p2money - czynsz35dom3;
        p3money = p3money + czynsz35dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz35dom3 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 35 && owner35 == 3 && dom35 == 2){
        p2money = p2money - czynsz35dom2;
        p3money = p3money + czynsz35dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz35dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 35 && owner35 == 3 && dom35 == 1){
        p2money = p2money - czynsz35dom1;
        p3money = p3money + czynsz35dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz35dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 35 && owner35 == 3 && owner33 == 3 && owner32 == 3){
        p2money = p2money - czynsz35all;
        p3money = p3money + czynsz35all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz35all + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 35 && owner35 == 3){
        p2money = p2money - czynsz35;
        p3money = p3money + czynsz35;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz35 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }

    if(p2loc == 38 && owner38 == 3 && hotel38 == 1){
        p2money = p2money - czynsz38hotel;
        p3money = p3money + czynsz38hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz38hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 38 && owner38 == 3 && dom38 == 4){
        p2money = p2money - czynsz38dom4;
        p3money = p3money + czynsz38dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz38dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 38 && owner38 == 3 && dom38 == 3){
        p2money = p2money - czynsz38dom3;
        p3money = p3money + czynsz38dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz38dom3 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 38 && owner38 == 3 && dom38 == 2){
        p2money = p2money - czynsz38dom2;
        p3money = p3money + czynsz38dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz38dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 38 && owner38 == 3 && dom38 == 1){
        p2money = p2money - czynsz38dom1;
        p3money = p3money + czynsz38dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz38dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 38 && owner38 == 3 && owner40 == 3){
        p2money = p2money - czynsz38all;
        p3money = p3money + czynsz38all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz38all + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 38 && owner38 == 3){
        p2money = p2money - czynsz38;
        p3money = p3money + czynsz38;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz38 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }

    if(p2loc == 40 && owner40 == 3 && hotel40 == 1){
        p2money = p2money - czynsz40hotel;
        p3money = p3money + czynsz40hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz40hotel + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 40 && owner40 == 3 && dom40 == 4){
        p2money = p2money - czynsz40dom4;
        p3money = p3money + czynsz40dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz40dom4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 40 && owner40 == 3 && dom40 == 3){
        p2money = p2money - czynsz40dom3;
        p3money = p3money + czynsz40dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz40dom3 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 40 && owner40 == 3 && dom40 == 2){
        p2money = p2money - czynsz40dom2;
        p3money = p3money + czynsz40dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz40dom2 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 40 && owner40 == 3 && dom40 == 1){
        p2money = p2money - czynsz40dom1;
        p3money = p3money + czynsz40dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz40dom1 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 40 && owner40 == 3 && owner38 == 3){
        p2money = p2money - czynsz40all;
        p3money = p3money + czynsz40all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz40all + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 40 && owner40 == 3){
        p2money = p2money - czynsz40;
        p3money = p3money + czynsz40;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz40 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);   
    }

    if(p2loc == 6 && owner6 == 3 && owner16 == 3 && f2.owner6 == 3 && owner36 == 3){
        p2money = p2money - stacje46;
        p3money = p3money + stacje46;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + stacje46 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 6 && owner6 == 3 && owner16 == 3 && f2.owner6 == 3){
        p2money = p2money - stacje36;
        p3money = p3money + stacje36;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + stacje36 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 6 && owner6 == 3 && owner16 == 3 && owner36 == 3){
        p2money = p2money - stacje36;
        p3money = p3money + stacje36;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + stacje36 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 6 && owner6 == 3 && f2.owner6 == 3 && owner36 == 3){
        p2money = p2money - stacje36;
        p3money = p3money + stacje36;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + stacje36 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 6 && owner6 == 3 && owner16 == 3){
        p2money = p2money - stacje26;
        p2money = p2money + stacje26;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + stacje26 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 6 && owner6 == 3 && f2.owner6 == 3){
        p2money = p2money - stacje26;
        p3money = p3money + stacje26;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + stacje26 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 6 && owner6 == 3 && owner36 == 3){
        p2money = p2money - stacje26;
        p3money = p3money + stacje26;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + stacje26 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 6 && owner6 == 3){
        p2money = p2money - czynsz6;
        p3money = p3money + czynsz6;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz6 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    }

    if(p2loc == 16 && owner16 == 3 && f2.owner6 == 3 && owner36 == 3 && owner6 == 3){
        p2money = p2money - stacje416;
        p3money = p3money + stacje416;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + stacje416 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 16 && owner16 == 3 && owner6 == 3 && owner36 == 3){
        p2money = p2money - stacje316;
        p3money = p3money + stacje316;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + stacje316 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 16 && owner16 == 3 && f2.owner6 == 3 && owner36 == 3){
        p2money = p2money - stacje316;
        p3money = p3money + stacje316;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + stacje316 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 16 && owner16 == 3 && owner6 == 3 && f2.owner6 == 3){
        p2money = p2money - stacje316;
        p3money = p3money + stacje316;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + stacje316 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 16 && owner16 == 3 && owner6 == 3){
        p2money = p2money - stacje216;
        p3money = p3money + stacje216;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + stacje216 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 16 && owner16 == 3 && f2.owner6 == 3){
        p2money = p2money - stacje216;
        p3money = p3money + stacje216;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + stacje216 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 16 && owner16 == 3 && owner36 == 3){
        p2money = p2money - stacje216;
        p3money = p3money + stacje216;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + stacje216 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 16 && owner16 == 3){
        p2money = p2money - czynsz16;
        p3money = p3money + czynsz16;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz16 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    }

    if(p2loc == 26 && f2.owner6 == 3 && owner6 == 3 && owner16 == 3 && owner36 == 3){
        p2money = p2money - stacje426;
        p3money = p3money + stacje426;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + stacje426 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 26 && f2.owner6 == 3 && owner16 == 3 && owner36 == 3){
        p2money = p2money - stacje326;
        p3money = p3money + stacje326;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + stacje326 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 26 && f2.owner6 == 3 && owner16 == 3 && owner6 == 3){
        p2money = p2money - stacje326;
        p3money = p3money + stacje326;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + stacje326 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 26 && f2.owner6 == 3 && owner6 == 3 && owner36 == 3){
        p2money = p2money - stacje326;
        p3money = p3money + stacje326;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + stacje326 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 26 && f2.owner6 == 3 && owner6 == 3){
        p2money = p2money - stacje226;
        p3money = p3money + stacje226;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + stacje226 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 26 && f2.owner6 == 3 && owner16 == 3){
        p2money = p2money - stacje226;
        p3money = p3money + stacje226;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + stacje226 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 26 && f2.owner6 == 3 && owner36 == 3){
        p2money = p2money - stacje226;
        p3money = p3money + stacje226;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + stacje226 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 26 && f2.owner6 == 3){
        p2money = p2money - czynsz26;
        p3money = p3money + czynsz26;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz26 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    }

    if(p2loc == 36 && owner36 == 3 && owner6 == 3 && owner16 == 3 && f2.owner6 == 3){
        p2money = p2money - stacje436;
        p3money = p3money + stacje436;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + stacje436 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 36 && owner36 == 3 && owner16 == 3 && f2.owner6 == 3){
        p2money = p2money - stacje336;
        p3money = p3money + stacje336;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + stacje336 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 36 && owner36 == 3 && owner16 == 3 && owner6 == 3){
        p2money = p2money - stacje336;
        p3money = p3money + stacje336;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + stacje336 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 36 && owner36 == 3 && owner6 == 3 && f2.owner6 == 3){
        p2money = p2money - stacje336;
        p3money = p3money + stacje336;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + stacje336 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 36 && owner36 == 3 && owner6 == 3){
        p2money = p2money - stacje236;
        p3money = p3money + stacje236;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + stacje236 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 36 && owner36 == 3 && owner16 == 3){
        p2money = p2money - stacje236;
        p3money = p3money + stacje236;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + stacje236 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 36 && owner36 == 3 && f2.owner6 == 3){
        p2money = p2money - stacje236;
        p3money = p3money + stacje236;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + stacje236 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    } else if(p2loc == 36 && owner36 == 3){
        p2money = p2money - czynsz36;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + czynsz36 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);    
    }

    if(p2loc == 13 && owner13 == 3 && f2.owner9 == 3){
        p2mony = p2money - destyny * 10;
        p3money = p3money + destyny * 10;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + destyny * 10 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);  
    } else if(p2loc == 13 && owner13 == 3){
        p2mony = p2money - destyny * 4;
        p3money = p3money + destyny * 4;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + destyny * 4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);  
    }

    if(p2loc == 29 && f2.owner9 == 3 && owner13 == 3){
        p2mony = p2money - destyny * 10;
        p3money = p3money + destyny * 10;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + destyny * 10 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);  
    } else if(p2loc == 29 && f2.owner9 == 3){
        p2mony = p2money - destyny * 4;
        p3money = p3money + destyny * 4;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 2 płaci czynsz dla gracza 3: ' + destyny * 4 + '$.';
        log.classList.add('red2');
        consol.scrollTo(0, 10000000000);  
    }
}

function Pay3player() {
    if(p3loc == 2 && f2.owner == 1 && f2.hotel == 1){
        p3money = p3money - f2.rentHotel;
        p1money = p1money + f2.rentHotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + f2.rentHotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 2 && f2.owner == 1 && dom2 == 4){
        p3money = p3money - f2.rent4house;
        p1money = p1money + f2.rent4house;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + f2.rent4house + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 2 && f2.owner == 1 && dom2 == 3){
        p3money = p3money - f2.rent3house;
        p1money = p1money + f2.rent3house;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + f2.rent3house + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 2 && f2.owner == 1 && dom2 == 2){
        p3money = p3money - f2.rent2house;
        p1money = p1money + f2.rent2house;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + f2.rent2house + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 2 && f2.owner == 1 && dom2 == 1){
        p3money = p3money - f2.rent1house;
        p1money = p1money + f2.rent1house;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + f2.rent1house + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 2 && f2.owner == 1 && owner4 == 1){
        p3money = p3money - rentAll;
        p1money = p1money + rentAll;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + rentAll + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 2 && f2.owner == 1){
        p3money = p3money - czynsz2;
        p1money = p1money + czynsz2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }


    if(p3loc == 4 && owner4 == 1 && hotel4 == 1){
        p3money = p3money - czynsz4hotel;
        p1money = p1money + czynsz4hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz4hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 4 && owner4 == 1 && dom4 == 4){
        p3money = p3money - czynsz4dom4;
        p1money = p1money + czynsz4dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz4dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 4 && owner4 == 1 && dom4 == 3){
        p3money = p3money - czynsz4dom3;
        p1money = p1money + czynsz4dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz4dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 4 && owner4 == 1 && dom4 == 2){
        p3money = p3money - czynsz4dom2;
        p1money = p1money + czynsz4dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz4dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 4 && owner4 == 1 && dom4 == 1){
        p2money = p2money - czynsz4dom1;
        p3money = p3money + czynsz4dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz4dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 4 && owner4 == 1 && f2.owner == 1){
        p3money = p3money - czynsz4all;
        p1money = p1money + czynsz4all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz4all + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 4 && owner4 == 1){
        p3money = p3money - czynsz4;
        p1money = p1money + czynsz4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }
    
    if(p3loc == 7 && owner7 == 1 && hotel7 == 1){
        p3money = p3money - czynsz7hotel;
        p1money = p1money + czynsz7hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz7hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 7 && owner7 == 1 && dom7 == 4){
        p3money = p3money - czynsz7dom4;
        p1money = p1money + czynsz7dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz7dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 7 && owner7 == 1 && dom7 == 3){
        p3money = p3money - czynsz7dom3;
        p1money = p1money + czynsz7dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz7dom3 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 7 && owner7 == 1 && dom7 == 2){
        p3money = p3money - czynsz7dom2;
        p1money = p1money + czynsz7dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz7dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 7 && owner7 == 1 && dom7 == 1){
        p3money = p3money - czynsz7dom1;
        p1money = p1money + czynsz7dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz7dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 7 && owner7 == 1 && owner9 == 1 && owner10 == 1){
        p3money = p3money - czynsz7all;
        p1money = p1money + czynsz7all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz7all + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 7 && owner7 == 1){
        p3money = p3money - czynsz7;
        p1money = p1money + czynsz7;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz7 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }

    if(p3loc == 9 && owner9 == 1 && hotel9 == 1){
        p3money = p3money - czynsz9hotel;
        p1money = p1money + czynsz9hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz9hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 9 && owner9 == 1 && dom9 == 4){
        p3money = p3money - czynsz9dom4;
        p2money = p2money + czynsz9dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz9dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 9 && owner9 == 1 && dom9 == 3){
        p3money = p3money - czynsz9dom3;
        p1money = p1money + czynsz9dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz9dom3 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 9 && owner9 == 1 && dom9 == 2){
        p3money = p3money - czynsz9dom2;
        p1money = p1money + czynsz9dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz9dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 9 && owner9 == 1 && dom9 == 1){
        p3money = p3money - czynsz9dom1;
        p1money = p1money + czynsz9dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz9dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 9 && owner9 == 1 && owner7 == 1 && owner10 == 1){
        p3money = p3money - czynsz9all;
        p1money = p1money + czynsz9all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz9all + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 9 && owner9 == 1){
        p3money = p3money - czynsz9;
        p1money = p1money + czynsz9;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz9 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }

    if(p3loc == 10 && owner10 == 1 && hotel10 == 1){
        p3money = p3money - czynsz10hotel;
        p1money = p1money + czynsz10hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz10hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 10 && owner10 == 1 && dom10 == 4){
        p3money = p3money - czynsz10dom4;
        p1money = p1money + czynsz10dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz10dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 10 && owner10 == 1 && dom10 == 3){
        p3money = p3money - czynsz10dom3;
        p1money = p1money + czynsz10dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz10dom3 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 10 && owner10 == 1 && dom10 == 2){
        p3money = p3money - czynsz10dom2;
        p1money = p1money + czynsz10dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz10dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 10 && owner10 == 1 && dom10 == 1){
        p3money = p3money - czynsz10dom1;
        p1money = p1money + czynsz10dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz10dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 10 && owner10 == 1 && owner9 == 1 && owner7 == 1){
        p3money = p3money - czynsz10all;
        p1money = p1money + czynsz10all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz10all + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 10 && owner10 == 1){
        p3money = p3money - czynsz10;
        p1money = p1money + czynsz10;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz10 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }

    if(p3loc == 12 && owner12 == 1 && hotel12 == 1){
        p3money = p3money - czynsz12hotel;
        p1money = p1money + czynsz12hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz12hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 12 && owner12 == 1 && dom12 == 4){
        p3money = p3money - czynsz12dom4;
        p1money = p1money + czynsz12dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz12dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 12 && owner12 == 1 && dom12 == 3){
        p3money = p3money - czynsz12dom3;
        p1money = p1money + czynsz12dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz12dom3 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 12 && owner12 == 1 && dom12 == 2){
        p3money = p3money - czynsz12dom2;
        p1money = p1money + czynsz12dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz12dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 12 && owner12 == 1 && dom12 == 1){
        p3money = p3money - czynsz12dom1;
        p1money = p1money + czynsz12dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz12dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 12 && owner12 == 1 && owner14 == 1 && owner15 == 1){
        p3money = p3money - czynsz12all;
        p1money = p1money + czynsz12all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz12all + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 12 && owner12 == 1){
        p3money = p3money - czynsz12;
        p1money = p1money + czynsz12;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz12 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }

    if(p3loc == 14 && owner14 == 1 && hotel14 == 1){
        p3money = p3money - czynsz14hotel;
        p1money = p1money + czynsz14hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz14hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 14 && owner14 == 1 && dom14 == 4){
        p3money = p3money - czynsz14dom4;
        p1money = p1money + czynsz14dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz14dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 14 && owner14 == 1 && dom14 == 3){
        p3money = p3money - czynsz14dom3;
        p1money = p1money + czynsz14dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz14dom3 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 14 && owner14 == 1 && dom14 == 2){
        p3money = p3money - czynsz14dom2;
        p1money = p1money + czynsz14dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz14dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 14 && owner14 == 1 && dom14 == 1){
        p3money = p3money - czynsz14dom1;
        p1money = p1money + czynsz14dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz14dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 14 && owner14 == 1 && owner15 == 1 && owner12 == 1){
        p3money = p3money - czynsz14all;
        p1money = p1money + czynsz14all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz14all + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 14 && owner14 == 1){
        p3money = p3money - czynsz14;
        p1money = p1money + czynsz14;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz14 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }
    if(p3loc == 15 && owner15 == 1 && hotel15 == 1){
        p3money = p3money - czynsz15hotel;
        p1money = p1money + czynsz15hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz15hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 15 && owner15 == 1 && dom15 == 4){
        p3money = p3money - czynsz15dom4;
        p1money = p1money + czynsz15dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz15dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 15 && owner15 == 1 && dom15 == 3){
        p3money = p3money - czynsz15dom3;
        p1money = p1money + czynsz15dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz15dom3 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 15 && owner15 == 1 && dom15 == 1){
        p3money = p3money - czynsz15dom2;
        p1money = p1money + czynsz15dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz15dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 15 && owner15 == 1 && dom15 == 1){
        p3money = p3money - czynsz15dom1;
        p1money = p1money + czynsz15dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz15dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 15 && owner15 == 1 && owner14 == 1 && owner12 == 1){
        p3money = p3money - czynsz15all;
        p1money = p1money + czynsz15all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz15all + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 15 && owner15 == 1){
        p3money = p3money - czynsz15;
        p1money = p1money + czynsz15;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz15 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }

    if(p3loc == 17 && owner17 == 1 && hotel17 == 1){
        p3money = p3money - czynsz17hotel;
        p1money = p1money + czynsz17hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz17hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 17 && owner17 == 1 && dom17 == 4){
        p3money = p3money - czynsz17dom4;
        p1money = p1money + czynsz17dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz17dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 17 && owner17 == 1 && dom17 == 3){
        p3money = p3money - v;
        p1money = p1money + czynsz17dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz17dom3 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 17 && owner17 == 1 && dom17 == 2){
        p3money = p3money - czynsz17dom2;
        p1money = p1money + czynsz17dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz17dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 17 && owner17 == 1 && dom17 == 1){
        p3money = p3money - czynsz17dom1;
        p1money = p1money + czynsz17dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz17dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 17 && owner17 == 1 && owner19 == 1 && f2.owner0 == 1){
        p3money = p3money - czynsz17all;
        p1money = p1money + czynsz17all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz17all + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 17 && owner17 == 1){
        p2money = p2money - czynsz17;
        p3money = p3money + czynsz17;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz17 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }

    if(p3loc == 19 && owner19 == 1 && hotel19 == 1){
        p3money = p3money - czynsz19hotel;
        p1money = p1money + czynsz19hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz19hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 19 && owner19 == 1 && dom19 == 4){
        p3money = p3money - czynsz19dom4;
        p1money = p1money + czynsz19dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz19dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 19 && owner19 == 1 && dom19 == 3){
        p3money = p3money - czynsz19dom3;
        p1money = p1money + czynsz19dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz19dom3 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 19 && owner19 == 1 && dom19 == 1){
        p3money = p3money - czynsz19dom2;
        p1money = p1money + czynsz19dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz19dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 19 && owner19 == 1 && dom19 == 1){
        p3money = p3money - czynsz19dom1;
        p1money = p1money + czynsz19dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz19dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 19 && owner19 == 1 && owner17 == 1 && f2.owner0 == 1){
        p3money = p3money - czynsz19all;
        p1money = p1money + czynsz19all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz19all + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 19 && owner19 == 1){
        p3money = p3money - czynsz19;
        p1money = p1money + czynsz19;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz19 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }

    if(p3loc == 20 && f2.owner0 == 1 && f2.hotel0 == 1){
        p3money = p3money - czynsz20hotel;
        p1money = p1money + czynsz20hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz20hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 20 && f2.owner0 == 1 && dom20 == 4){
        p3money = p3money - czynsz20dom4;
        p1money = p1money + czynsz20dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz20dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 20 && f2.owner0 == 1 && dom20 == 3){
        p3money = p3money - czynsz20dom3;
        p1money = p1money + czynsz20dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz20dom3 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 20 && f2.owner0 == 1 && dom20 == 2){
        p3money = p3money - czynsz20dom2;
        p1money = p1money + czynsz20dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz20dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 20 && f2.owner0 == 1 && dom20 == 1){
        p3money = p3money - czynsz20dom1;
        p1money = p1money + czynsz20dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz20dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 20 && f2.owner0 == 1 && owner19 == 1 && owner17 == 1){
        p3money = p3money - czynsz20all;
        p1money = p1money + czynsz20all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz20all + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 20 && f2.owner0 == 1){
        p3money = p3money - czynsz20;
        p1money = p1money + czynsz20;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz20 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }

    if(p3loc == 22 && f2.owner2 == 1 && f2.hotel2 == 1){
        p3money = p3money - czynsz22hotel;
        p1money = p1money + czynsz22hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz22hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 22 && f2.owner2 == 1 && dom22 == 4){
        p3money = p3money - czynsz22dom4;
        p1money = p1money + czynsz22dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz22dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 22 && f2.owner2 == 1 && dom22 == 3){
        p3money = p3money - czynsz22dom3;
        p1money = p1money + czynsz22dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz22dom3 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 22 && f2.owner2 == 1 && dom22 == 2){
        p3money = p3money - czynsz22dom2;
        p1money = p1money + czynsz22dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz22dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 22 && f2.owner2 == 1 && dom22 == 1){
        p3money = p3money - czynsz22dom1;
        p1money = p1money + czynsz22dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz22dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 22 && f2.owner2 == 1 && f2.owner4 == 1 && f2.owner5 == 1){
        p3money = p3money - czynsz22all;
        p1money = p1money + czynsz22all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz22all + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 22 && f2.owner2 == 1){
        p3money = p3money - czynsz22;
        p1money = p1money + czynsz22;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz22 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }

    if(p3loc == 24 && f2.owner4 == 1 && f2.hotel4 == 1){
        p3money = p3money - czynsz24hotel;
        p1money = p1money + czynsz24hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz24hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 24 && f2.owner4 == 1 && dom24 == 4){
        p3money = p3money - czynsz24dom4;
        p1money = p1money + czynsz24dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz24hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 24 && f2.owner4 == 1 && dom24 == 3){
        p3money = p3money - czynsz24dom3;
        p1money = p1money + czynsz24dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz24dom3 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 24 && f2.owner4 == 1 && dom24 == 2){
        p3money = p3money - czynsz24dom2;
        p1money = p1money + czynsz24dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz24dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 24 && f2.owner4 == 1 && dom24 == 1){
        p3money = p3money - czynsz24dom1;
        p1money = p1money + czynsz24dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz24dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 24 && f2.owner4 == 1 && f2.owner2 == 1 && f2.owner5 == 1){
        p3money = p3money - czynsz24all;
        p1money = p1money + czynsz24all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz24all + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 24 && f2.owner4 == 1){
        p3money = p3money - czynsz24;
        p1money = p1money + czynsz24;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz24 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }

    if(p3loc == 25 && f2.owner5 == 1 && f2.hotel5 == 1){
        p3money = p3money - czynsz25hotel;
        p1money = p1money + czynsz25hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz25hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 25 && f2.owner5 == 1 && dom25 == 4){
        p3money = p3money - czynsz25dom4;
        p1money = p1money + czynsz25dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz25dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 25 && f2.owner5 == 1 && dom25 == 3){
        p3money = p3money - czynsz25dom3;
        p1money = p1money + czynsz25dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz25dom3 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 25 && f2.owner5 == 1 && dom25 == 2){
        p3money = p3money - czynsz25dom2;
        p1money = p1money + czynsz25dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz25dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 25 && f2.owner5 == 1 && dom25 == 1){
        p3money = p3money - czynsz25dom1;
        p1money = p1money + czynsz25dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz25dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 25 && f2.owner5 == 1 && f2.owner4 == 1 && f2.owner2 == 1){
        p3money = p3money - czynsz25all;
        p1money = p1money + czynsz25all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz25all + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 25 && f2.owner5 == 1){
        p3money = p3money - czynsz25;
        p1money = p1money + czynsz25;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz25 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }
    if(p3loc == 27 && f2.owner7 == 1 && f2.hotel7 == 1){
        p3money = p2money - czynsz27hotel;
        p1money = p1money + czynsz27hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz27hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 27 && f2.owner7 == 1 && dom27 == 4){
        p3money = p3money - czynsz27dom4;
        p1money = p1money + czynsz27dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz27dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 27 && f2.owner7 == 1 && dom27 == 3){
        p3money = p3money - czynsz27dom3;
        p1money = p1money + czynsz27dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz27dom3 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 27 && f2.owner7 == 1 && dom27 == 2){
        p3money = p3money - czynsz27dom2;
        p1money = p1money + czynsz27dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz27dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 27 && f2.owner7 == 1 && dom27 == 1){
        p3money = p3money - czynsz27dom1;
        p1money = p1money + czynsz27dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz27dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 27 && f2.owner7 == 1 && f2.owner8 == 1 && owner30 == 1){
        p3money = p3money - czynsz27all;
        p1money = p1money + czynsz27all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz27all + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 27 && f2.owner7 == 1){
        p3money = p3money - czynsz27;
        p1money = p1money + czynsz27;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz27 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }

    if(p3loc == 28 && f2.owner8 == 1 && f2.hotel8 == 1){
        p3money = p3money - czynsz28hotel;
        p1money = p1money + czynsz28hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz28hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 25 && f2.owner8 == 1 && dom28 == 4){
        p3money = p3money - czynsz28dom4;
        p1money = p1money + czynsz28dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz28dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 28 && f2.owner8 == 1 && dom28 == 3){
        p3money = p3money - czynsz28dom3;
        p1money = p1money + czynsz28dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz28dom3 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 28 && f2.owner8 == 1 && dom28 == 2){
        p3money = p3money - czynsz28dom2;
        p1money = p1money + czynsz28dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz28dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 28 && f2.owner8 == 1 && dom28 == 1){
        p3money = p3money - czynsz28dom1;
        p1money = p1money + czynsz28dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz28dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 28 && f2.owner8 == 1 && f2.owner7 == 1 && owner30 == 1){
        p3money = p3money - czynsz28all;
        p1money = p1money + czynsz28all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz28all + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 28 && f2.owner8 == 1){
        p3money = p3money - czynsz28;
        p1money = p1money + czynsz28;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz28 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }

    if(p3loc == 30 && owner30 == 1 && hotel30 == 1){
        p3money = p3money - czynsz30hotel;
        p1money = p1money + czynsz30hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz30hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 30 && owner30 == 1 && dom30 == 4){
        p3money = p3money - czynsz30dom4;
        p1money = p1money + czynsz30dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz30dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 30 && owner30 == 1 && dom30 == 3){
        p3money = p3money - czynsz30dom3;
        p1money = p1money + czynsz30dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz30dom3 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 30 && owner30 == 1 && dom30 == 2){
        p3money = p3money - czynsz30dom2;
        p1money = p1money + czynsz30dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz30dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 30 && owner30 == 1 && dom30 == 1){
        p3money = p3money - czynsz30dom1;
        p1money = p1money + czynsz30dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz30dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 30 && owner30 == 1 && f2.owner8 == 1 && f2.owner7 == 1){
        p3money = p3money - czynsz30all;
        p1money = p1money + czynsz30all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz30all + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 30 && owner30 == 1){
        p3money = p3money - czynsz30;
        p1money = p1money + czynsz30;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz30 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }

    if(p3loc == 32 && owner32 == 1 && hotel32 == 1){
        p3money = p3money - czynsz32hotel;
        p1money = p1money + czynsz32hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz32hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 32 && owner32 == 1 && dom32 == 4){
        p3money = p3money - czynsz32dom4;
        p1money = p1money + czynsz32dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz32dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 32 && owner32 == 1 && dom32 == 3){
        p3money = p3money - czynsz32dom3;
        p1money = p1money + czynsz32dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz32dom3 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 32 && owner32 == 1 && dom32 == 2){
        p3money = p3money - czynsz32dom2;
        p1money = p1money + czynsz32dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz32dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 32 && owner32 == 1 && dom32 == 1){
        p3money = p3money - czynsz32dom1;
        p1money = p1money + czynsz32dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz32dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 32 && owner32 == 1 && owner33 == 1 && owner35 == 1){
        p3money = p3money - czynsz32all;
        p1money = p1money + czynsz32all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz32all + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 32 && owner32 == 1){
        p3money = p3money - czynsz32;
        p1money = p1money + czynsz32;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz32 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }

    if(p3loc == 33 && owner33 == 1 && hotel33 == 1){
        p3money = p3money - czynsz33hotel;
        p1money = p1money + czynsz33hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz33hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 33 && owner33 == 1 && dom33 == 4){
        p3money = p3money - czynsz33dom4;
        p1money = p1money + czynsz33dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz33dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 33 && owner33 == 1 && dom33 == 3){
        p3money = p3money - czynsz33dom3;
        p1money = p1money + czynsz33dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz33dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 33 && owner33 == 1 && dom33 == 2){
        p3money = p3money - czynsz33dom2;
        p1money = p1money + czynsz33dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz33dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 33 && owner33 == 1 && dom33 == 1){
        p3money = p3money - czynsz33dom1;
        p1money = p1money + czynsz33dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz33dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 33 && owner33 == 1 && owner32 == 1 && owner35 == 1){
        p3money = p3money - czynsz33all;
        p1money = p1money + czynsz33all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz33all + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 33 && owner33 == 1){
        p3money = p3money - czynsz33;
        p1money = p1money + czynsz33;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz33 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }

    if(p3loc == 35 && owner35 == 1 && hotel35 == 1){
        p3money = p3money - czynsz35hotel;
        p1money = p1money + czynsz35hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz35hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 35 && owner35 == 1 && dom35 == 4){
        p3money = p3money - czynsz35dom4;
        p1money = p1money + czynsz35dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz35dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 35 && owner35 == 1 && dom35 == 3){
        p3money = p3money - czynsz35dom3;
        p1money = p1money + czynsz35dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz35dom3 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 35 && owner35 == 1 && dom35 == 2){
        p3money = p3money - czynsz35dom2;
        p1money = p1money + czynsz35dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz35dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 35 && owner35 == 1 && dom35 == 1){
        p3money = p3money - czynsz35dom1;
        p1money = p1money + czynsz35dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz35dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 35 && owner35 == 1 && owner33 == 1 && owner32 == 1){
        p3money = p3money - czynsz35all;
        p1money = p1money + czynsz35all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz35all + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 35 && owner35 == 1){
        p3money = p3money - czynsz35;
        p1money = p1money + czynsz35;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz35 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }

    if(p3loc == 38 && owner38 == 1 && hotel38 == 1){
        p3money = p3money - czynsz38hotel;
        p1money = p1money + czynsz38hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz38hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 38 && owner38 == 1 && dom38 == 4){
        p3money = p3money - czynsz38dom4;
        p1money = p1money + czynsz38dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz38dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 38 && owner38 == 1 && dom38 == 3){
        p3money = p3money - czynsz38dom3;
        p1money = p1money + czynsz38dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz38dom3 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 38 && owner38 == 1 && dom38 == 2){
        p3money = p3money - czynsz38dom2;
        p1money = p1money + czynsz38dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz38dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 38 && owner38 == 1 && dom38 == 1){
        p3money = p3money - czynsz38dom1;
        p1money = p1money + czynsz38dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz38dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 38 && owner38 == 1 && owner40 == 1){
        p3money = p3money - czynsz38all;
        p1money = p1money + czynsz38all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz38all + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 38 && owner38 == 1){
        p3money = p3money - czynsz38;
        p1money = p1money + czynsz38;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz38 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }

    if(p3loc == 40 && owner40 == 1 && hotel40 == 1){
        p3money = p3money - czynsz40hotel;
        p1money = p1money + czynsz40hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz40hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 40 && owner40 == 1 && dom40 == 4){
        p3money = p3money - czynsz40dom4;
        p1money = p1money + czynsz40dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz40dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 40 && owner40 == 1 && dom40 == 3){
        p3money = p3money - czynsz40dom3;
        p1money = p1money + czynsz40dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz40dom3 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 40 && owner40 == 1 && dom40 == 2){
        p3money = p3money - czynsz40dom2;
        p1money = p1money + czynsz40dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz40dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 40 && owner40 == 1 && dom40 == 1){
        p3money = p3money - czynsz40dom1;
        p1money = p1money + czynsz40dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz40dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 40 && owner40 == 1 && owner38 == 1){
        p3money = p3money - czynsz40all;
        p1money = p1money + czynsz40all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz40all + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 40 && owner40 == 1){
        p3money = p3money - czynsz40;
        p1money = p1money + czynsz40;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz40 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }

    if(p3loc == 6 && owner6 == 1 && owner16 == 1 && f2.owner6 == 1 && owner36 == 1){
        p3money = p3money - stacje46;
        p1money = p1money + stacje46;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + stacje46 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 6 && owner6 == 1 && owner16 == 1 && f2.owner6 == 1){
        p3money = p3money - stacje36;
        p1money = p1money + stacje36;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + stacje36 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 6 && owner6 == 1 && owner16 == 1 && owner36 == 1){
        p3money = p3money - stacje36;
        p1money = p1money + stacje36;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + stacje36 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 6 && owner6 == 1 && f2.owner6 == 1 && owner36 == 1){
        p3money = p3money - stacje36;
        p1money = p1money + stacje36;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + stacje36 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 6 && owner6 == 1 && owner16 == 1){
        p3money = p3money - stacje26;
        p1money = p1money + stacje26;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + stacje26 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 6 && owner6 == 1 && f2.owner6 == 1){
        p3money = p3money - stacje26;
        p1money = p1money + stacje26;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + stacje26 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 6 && owner6 == 1 && owner36 == 1){
        p3money = p3money - stacje26;
        p1money = p1money + stacje26;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + stacje26 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 6 && owner6 == 1){
        p3money = p3money - czynsz6;
        p1money = p1money + czynsz6;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz6 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    }

    if(p3loc == 16 && owner16 == 1 && f2.owner6 == 1 && owner36 == 1 && owner6 == 1){
        p3money = p3money - stacje416;
        p1money = p1money + stacje416;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + stacje416 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 16 && owner16 == 1 && owner6 == 1 && owner36 == 1){
        p3money = p3money - stacje316;
        p1money = p1money + stacje316;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + stacje316 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 16 && owner16 == 1 && f2.owner6 == 1 && owner36 == 1){
        p3money = p3money - stacje316;
        p1money = p1money + stacje316;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + stacje316 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 16 && owner16 == 1 && owner6 == 1 && f2.owner6 == 1){
        p3money = p3money - stacje316;
        p1money = p1money + stacje316;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + stacje316 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 16 && owner16 == 1 && owner6 == 1){
        p3money = p3money - stacje216;
        p1money = p1money + stacje216;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + stacje216 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 16 && owner16 == 1 && f2.owner6 == 1){
        p3money = p3money - stacje216;
        p1money = p1money + stacje216;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + stacje216 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 16 && owner16 == 1 && owner36 == 1){
        p3money = p3money - stacje216;
        p1money = p1money + stacje216;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + stacje216 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 16 && owner16 == 1){
        p3money = p3money - czynsz16;
        p1money = p1money + czynsz16;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz16 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    }

    if(p3loc == 26 && f2.owner6 == 1 && owner6 == 1 && owner16 == 1 && owner36 == 1){
        p3money = p3money - stacje426;
        p1money = p1money + stacje426;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + stacje426 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 26 && f2.owner6 == 1 && owner16 == 1 && owner36 == 1){
        p3money = p3money - stacje326;
        p1money = p1money + stacje326;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + stacje326 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 26 && f2.owner6 == 1 && owner16 == 1 && owner6 == 1){
        p3money = p3money - stacje326;
        p1money = p1money + stacje326;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + stacje326 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 26 && f2.owner6 == 1 && owner6 == 1 && owner36 == 1){
        p3money = p3money - stacje326;
        p1money = p1money + stacje326;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + stacje326 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 26 && f2.owner6 == 1 && owner6 == 1){
        p3money = p3money - stacje226;
        p1money = p1money + stacje226;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + stacje226 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 26 && f2.owner6 == 1 && owner16 == 1){
        p3money = p3money - stacje226;
        p1money = p1money + stacje226;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + stacje226 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 26 && f2.owner6 == 1 && owner36 == 1){
        p3money = p3money - stacje226;
        p1money = p1money + stacje226;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + stacje226 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 26 && f2.owner6 == 1){
        p3money = p3money - czynsz26;
        p1money = p1money + czynsz26;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + czynsz26 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    }

    if(p3loc == 36 && owner36 == 1 && owner6 == 1 && owner16 == 1 && f2.owner6 == 1){
        p3money = p3money - stacje436;
        p1money = p1money + stacje436;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + stacje436 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 36 && owner36 == 1 && owner16 == 1 && f2.owner6 == 1){
        p3money = p3money - stacje336;
        p1money = p1money + stacje336;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + stacje336 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 36 && owner36 == 1 && owner16 == 1 && owner6 == 1){
        p3money = p3money - stacje336;
        p1money = p1money + stacje336;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + stacje336 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 36 && owner36 == 1 && owner6 == 1 && f2.owner6 == 1){
        p3money = p3money - stacje336;
        p1money = p1money + stacje336;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + stacje336 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 36 && owner36 == 1 && owner6 == 1){
        p3money = p3money - stacje236;
        p1money = p1money + stacje236;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + stacje236 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 36 && owner36 == 1 && owner16 == 1){
        p3money = p3money - stacje236;
        p1money = p1money + stacje236;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + stacje236 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 36 && owner36 == 1 && f2.owner6 == 1){
        p3money = p3money - stacje236;
        p1money = p1money + stacje236;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + stacje236 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 36 && owner36 == 1){
        p3money = p3money - czynsz36;
        p1money = p1money + owner36;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + owner36 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    }

    if(p3loc == 13 && owner13 == 1 && f2.owner9 == 1){
        p3mony = p3money - destyny * 10;
        p1money = p1money + destyny * 10;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + destyny * 10 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);  
    } else if(p3loc == 13 && owner13 == 1){
        p3mony = p3money - destyny * 4;
        p1money = p1money + destyny * 4;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + destyny * 4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);  
    }

    if(p3loc == 29 && f2.owner9 == 1 && owner13 == 1){
        p3mony = p3money - destyny * 10;
        p1money = p1money + destyny * 10;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + destyny * 10 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);  
    } else if(p3loc == 29 && f2.owner9 == 1){
        p3mony = p3money - destyny * 4;
        p1money = p1money + destyny * 4;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci ci czynsz: ' + destyny * 4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);  
    }

    if(p3loc == 2 && f2.owner == 2 && f2.hotel == 1){
        p3money = p3money - f2.rentHotel;
        p2money = p2money + f2.rentHotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + f2.rentHotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 2 && f2.owner == 2 && dom2 == 4){
        p3money = p3money - f2.rent4house;
        p2money = p2money + f2.rent4house;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + f2.rent4house + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 2 && f2.owner == 2 && dom2 == 3){
        p3money = p3money - f2.rent3house;
        p2money = p2money + f2.rent3house;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + f2.rent3house + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 2 && f2.owner == 2 && dom2 == 3){
        p3money = p3money- f2.rent2house;
        p2money = p2money + f2.rent2house;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + f2.rent2house + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 2 && f2.owner == 2 && dom2 == 1){
        p3money = p3money - f2.rent1house;
        p2money = p2money + f2.rent1house;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + f2.rent1house + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 2 && f2.owner == 2 && owner4 == 2){
        p3money = p3money - rentAll;
        p2money = p2money + rentAll;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + rentAll + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 2 && f2.owner == 2){
        p3money = p3money- czynsz2;
        p2money = p2money + czynsz2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }

    if(p3loc == 4 && owner4 == 2 && hotel4 == 1){
        p3money = p3money - czynsz4hotel;
        p2money = p2money + czynsz4hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz4hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 4 && owner4 == 2 && dom4 == 4){
        p3money = p3money - czynsz4dom4;
        p2money = p2money + czynsz4dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz4dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 4 && owner4 == 2 && dom4 == 3){
        p3money = p3money - czynsz4dom3;
        p2money = p2money + czynsz4dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz4dom3 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 4 && owner4 == 2 && dom4 == 2){
        p3money = p3money - czynsz4dom2;
        p2money = p2money + czynsz4dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz4dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 4 && owner4 == 2 && dom4 == 1){
        p3money = p3money - czynsz4dom1;
        p2money = p2money + czynsz4dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz4dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 4 && owner4 == 2 && f2.owner == 3){
        p3money = p3money - czynsz4all;
        p2money = p2money + czynsz4all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz4dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 4 && owner4 == 2){
        p3money = p3money - czynsz4;
        p2money = p2money + czynsz4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }
    
    if(p3loc == 7 && owner7 == 2 && hotel7 == 1){
        p3money = p3money - czynsz7hotel;
        p2money = p2money + czynsz7hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz7hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 7 && owner7 == 2 && dom7 == 4){
        p3money = p3money - czynsz7dom4;
        p2money = p2money+ czynsz7dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz7dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 7 && owner7 == 2 && dom7 == 3){
        p3money = p3money - czynsz7dom3;
        p2money = p2money + czynsz7dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz7dom3 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 7 && owner7 == 2 && dom7 == 2){
        p3money = p3money - czynsz7dom2;
        p2money = p2money + czynsz7dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz7dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 7 && owner7 == 2 && dom7 == 1){
        p3money = p3money - czynsz7dom1;
        p2money = p2money + czynsz7dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz7dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 7 && owner7 == 2 && owner9 == 2 && owner10 == 2){
        p3money = p3money - czynsz7all;
        p2money = p2money + czynsz7all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz7all + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 7 && owner7 == 2){
        p3money = p3money - czynsz7;
        p2money = p2money + czynsz7;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz7 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }

    if(p3loc == 9 && owner9 == 2 && hotel9 == 1){
        p3money = p3money - czynsz9hotel;
        p2money = p2money + czynsz9hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz9hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 9 && owner9 == 2 && dom9 == 4){
        p3money = p3money - czynsz9dom4;
        p2money = p2money + czynsz9dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz9dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 9 && owner9 == 2 && dom9 == 3){
        p3money = p3money - czynsz9dom3;
        p2money = p2money + czynsz9dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz9dom3 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 9 && owner9 == 2 && dom9 == 2){
        p3money = p3money - czynsz9dom2;
        p2money = p2money + czynsz9dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz9dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 9 && owner9 == 2 && dom9 == 1){
        p3money = p3money - czynsz9dom1;
        p2money = p2money + czynsz9dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz9dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 9 && owner9 == 2 && owner7 == 2 && owner10 == 2){
        p3money = p3money - czynsz9all;
        p2money = p2money + czynsz9all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz9all + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 9 && f2.owner == 3){
        p3money = p3money - czynsz9;
        p2money = p2money + czynsz9;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz9 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }

    if(p3loc == 10 && owner10 == 2 && hotel10 == 1){
        p3money = p3money - czynsz10hotel;
        p2money = p2money + czynsz10hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz10hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 10 && owner10 == 2 && dom10 == 4){
        p3money = p3money - czynsz10dom4;
        p2money = p2money + czynsz10dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz10dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 10 && owner10 == 2 && dom10 == 3){
        p3money = p3money - czynsz10dom3;
        p2money = p2money + czynsz10dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz10dom3 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 10 && owner10 == 2 && dom10 == 2){
        p3money = p3money - czynsz10dom2;
        p2money = p2money + czynsz10dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz10dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 10 && owner10 == 2 && dom10 == 1){
        p3money = p3money - czynsz10dom1;
        p2money = p2money + czynsz10dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz10dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 10 && owner10 == 2 && owner9 == 2 && owner7 == 2){
        p3money = p3money - czynsz10all;
        p2money = p2money + czynsz10all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz10all + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 10 && owner10 == 2){
        p3money = p3money - czynsz10;
        p2money = p2money + czynsz10;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz10 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }

    if(p3loc == 12 && owner12 == 2 && hotel12 == 1){
        p3money = p3money - czynsz12hotel;
        p2money = p2money + czynsz12hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz12hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 12 && owner12 == 2 && dom12 == 4){
        p3money = p3money - czynsz12dom4;
        p2money = p2money + czynsz12dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz12dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 12 && owner12 == 2 && dom12 == 3){
        p3money = p3money - czynsz12dom3;
        p2money = p2money + czynsz12dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz12dom3 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 12 && owner12 == 2 && dom12 == 2){
        p3money = p3money- czynsz12dom2;
        p2money = p2money + czynsz12dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz12dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 12 && owner12 == 2 && dom12 == 1){
        p3money = p3money - czynsz12dom1;
        p2money = p2money + czynsz12dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz12dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 12 && owner12 == 2 && owner14 == 2 && owner15 == 2){
        p3money = p3money - czynsz12all;
        p2money = p2money+ czynsz12all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz12dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 12 && owner12 == 2){
        p3money = p3money - czynsz12;
        p2money = p2money + czynsz12;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz12 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }


    if(p3loc == 14 && owner14 == 2 && hotel14 == 1){
        p3money = p3money - czynsz14hotel;
        p2money = p2money + czynsz14hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz14hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 14 && owner14 == 2 && dom14 == 4){
        p3money = p3money - czynsz14dom4;
        p2money = p2money + czynsz14dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz14dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 14 && owner14 == 2 && dom14 == 3){
        p3money = p3money - czynsz14dom3;
        p2money = p2money + czynsz14dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz14dom3 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 14 && owner14 == 2 && dom14 == 2){
        p3money = p3money - czynsz14dom2;
        p2money = p2money + czynsz14dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz14dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 14 && owner14 == 2 && dom14 == 1){
        p3money = p3money - czynsz14dom1;
        p2money = p2money + czynsz14dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz14dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 14 && owner14 == 2 && owner15 == 2 && owner12 == 2){
        p3money = p3money - czynsz14all;
        p2money = p2money + czynsz14all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz14all + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 14 && owner14 == 2){
        p3money = p3money - czynsz14;
        p2money = p2money + czynsz14;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz14 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }
    
    if(p3loc == 15 && owner15 == 2 && hotel15 == 1){
        p3money = p3money - czynsz15hotel;
        p2money = p2money + czynsz15hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz15hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 15 && owner15 == 2 && dom15 == 4){
        p3money = p3money - czynsz15dom4;
        p2money = p2money + czynsz15dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz15dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 15 && owner15 == 2 && dom15 == 3){
        p3money = p3money - czynsz15dom3;
        p2money = p2money + czynsz15dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz15dom3 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 15 && owner15 == 2 && dom15 == 2){
        p3money = p3money - czynsz15dom2;
        p2money = p2money + czynsz15dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz15dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 15 && owner15 == 2 && dom15 == 1){
        p3money = p3money - czynsz15dom1;
        p2money = p2money + czynsz15dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz15dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 15 && owner15 == 2 && owner14 == 2 && owner12 == 2){
        p3money = p3money - czynsz15all;
        p2money = p2money + czynsz15all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz15all + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 15 && owner15 == 2){
        p3money = p3money - czynsz15;
        p2money = p2money + czynsz15;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz15all + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }

    if(p3loc == 17 && owner17 == 2 && hotel17 == 1){
        p3money = p3money - czynsz17hotel;
        p2money = p2money + czynsz17hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz17hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 17 && owner17 == 2 && dom17 == 4){
        p3money = p3money - czynsz17dom4;
        p2money = p2money + czynsz17dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz17dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 17 && owner17 == 2 && dom17 == 3){
        p3money = p3money - czynsz17dom3;
        p2money = p2money + czynsz17dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz17dom3 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 17 && owner17 == 2 && dom17 == 2){
        p3money = p3money - czynsz17dom2;
        p2money = p2money + czynsz17dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz17dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 17 && owner17 == 2 && dom17 == 1){
        p3money = p3money - czynsz17dom1;
        p2money = p2money + czynsz17dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz17dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 17 && owner17 == 2 && owner19 == 2 && f2.owner0 == 2){
        p3money = p3money - czynsz17all;
        p2money = p2money + czynsz17all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz17all + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 17 && owner17 == 2){
        p3money = p3money - czynsz17;
        p2money = p2money + czynsz17;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz17 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }

    if(p3loc == 19 && owner19 == 2 && hotel19 == 1){
        p3money = p3money - czynsz19hotel;
        p2money = p2money + czynsz19hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz19hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 19 && owner19 == 2 && dom19 == 4){
        p3money = p3money - czynsz19dom4;
        p2money = p2money + czynsz19dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz19dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 19 && owner19 == 2 && dom19 == 3){
        p3money = p3money - czynsz19dom3;
        p2money = p2money + czynsz19dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz19dom3 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 19 && owner19 == 2 && dom19 == 2){
        p3money = p3money - czynsz19dom2;
        p2money = p2money + czynsz19dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz19dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 19 && owner19 == 2 && dom19 == 1){
        p3money = p3money - czynsz19dom1;
        p2money = p2money+ czynsz19dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz19dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 19 && owner19 == 2 && owner17 == 2 && f2.owner0 == 2){
        p3money = p3money - czynsz19all;
        p2money = p2money + czynsz19all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz19all + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 19 && owner19 == 2){
        p3money = p3money - czynsz19;
        p2money = p2money + czynsz19;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz19 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }

    if(p3loc == 20 && f2.owner0 == 2 && f2.hotel0 == 1){
        p3money = p3money - czynsz20hotel;
        p2money = p2money+ czynsz20hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz20hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 20 && f2.owner0 == 2 && dom20 == 4){
        p3money = p3money - czynsz20dom4;
        p2money = p2money + czynsz20dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz20dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 20 && f2.owner0 == 2 && dom20 == 3){
        p3money = p3money - czynsz20dom3;
        p2money = p2money + czynsz20dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz20dom3 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 20 && f2.owner0 == 2 && dom20 == 2){
        p3money = p3money - czynsz20dom2;
        p2money = p2money + czynsz20dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz20dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 20 && f2.owner0 == 2 && dom20 == 1){
        p3money = p3money - czynsz20dom1;
        p2money = p2money + czynsz20dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz20dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 20 && f2.owner0 == 2 && owner19 == 2 && owner17 == 2){
        p3money = p3money - czynsz20all;
        p2money = p2money + czynsz20all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz20all + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 20 && f2.owner0 == 2){
        p3money = p3money - czynsz20;
        p2money = p2money + czynsz20;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz20 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }

    if(p3loc == 22 && f2.owner2 == 2 && f2.hotel2 == 1){
        p3money = p3money - czynsz22hotel;
        p2money = p2money + czynsz22hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz22hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 22 && f2.owner2 == 2 && dom22 == 4){
        p3money = p3money - czynsz22dom4;
        p2money = p2money + czynsz22dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz22dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 22 && f2.owner2 == 2 && dom22 == 3){
        p3money = p3money - czynsz22dom3;
        p2money = p2money + czynsz22dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz22dom3 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 22 && f2.owner2 == 2 && dom22 == 2){
        p3money = p3money - czynsz22dom2;
        p2money = p2money + czynsz22dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz22dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 22 && f2.owner2 == 2 && dom22 == 1){
        p3money = p3money - czynsz22dom1;
        p2money = p2money+ czynsz22dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz22dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 22 && f2.owner2 == 2 && f2.owner4 == 2 && f2.owner5 == 2){
        p3money = p3money - czynsz22all;
        p2money = p2money + czynsz22all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz22all + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 22 && f2.owner2 == 2){
        p3money = p3money - czynsz22;
        p2money = p2money + czynsz22;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz22 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }

    if(p3loc == 24 && f2.owner4 == 2 && f2.hotel4 == 1){
        p3money = p3money - czynsz24hotel;
        p2money = p2money + czynsz24hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz24hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 24 && f2.owner4 == 2 && dom24 == 4){
        p3money = p3money - czynsz24dom4;
        p2money = p2money + czynsz24dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz24dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 24 && f2.owner4 == 2 && dom24 == 3){
        p3money = p3money - czynsz24dom3;
        p2money = p2money + czynsz24dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz24dom3 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 24 && f2.owner4 == 2 && dom24 == 2){
        p3money = p3money - czynsz24dom2;
        p2money = p2money + czynsz24dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz24dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 24 && f2.owner4 == 2 && dom24 == 1){
        p3money = p3money - czynsz24dom1;
        p2money = p2money + czynsz24dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz24dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 24 && f2.owner4 == 2 && f2.owner2 == 2 && f2.owner5 == 2){
        p3money = p3money - czynsz24all;
        p2money = p2money + czynsz24all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz24all + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 24 && f2.owner4 == 2){
        p3money = p3money - czynsz24;
        p2money = p2money + czynsz24;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz24 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }

    if(p3loc == 25 && f2.owner5 == 2 && f2.hotel5 == 1){
        p3money = p3money - czynsz25hotel;
        p2money = p2money + czynsz25hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz25hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 25 && f2.owner5 == 2 && dom25 == 4){
        p3money = p3money - czynsz25dom4;
        p2money = p2money + czynsz25dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz25dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 25 && f2.owner5 == 2 && dom25 == 3){
        p3money = p3money - czynsz25dom3;
        p2money = p2money + czynsz25dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz25dom3 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 25 && f2.owner5 == 2 && dom25 == 2){
        p3money = p3money - czynsz25dom2;
        p2money = p2money + czynsz25dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz25dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 25 && f2.owner5 == 2 && dom25 == 1){
        p3money = p3money - czynsz25dom1;
        p2money = p2money + czynsz25dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz25dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 25 && f2.owner5 == 2 && f2.owner4 == 2 && f2.owner2 == 2){
        p3money = p3money - czynsz25all;
        p2money = p2money + czynsz25all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz25all + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 25 && f2.owner5 == 2){
        p3money = p3money - czynsz25;
        p2money = p2money + czynsz25;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz25 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }
    if(p3loc == 27 && f2.owner7 == 2 && f2.hotel7 == 1){
        p3money = p3money - czynsz27hotel;
        p2money = p2money + czynsz27hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz27hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 27 && f2.owner7 == 2 && dom27 == 4){
        p3money = p3money - czynsz27dom4;
        p2money = p2money + czynsz27dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz27dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 27 && f2.owner7 == 2 && dom27 == 3){
        p3money = p3money - czynsz27dom3;
        p2money = p2money + czynsz27dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz27dom3 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 27 && f2.owner7 == 2 && dom27 == 2){
        p3money = p3money - czynsz27dom2;
        p2money = p2money + czynsz27dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz27dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 27 && f2.owner7 == 2 && dom27 == 1){
        p3money = p3money - czynsz27dom1;
        p2money = p2money + czynsz27dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz27dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 27 && f2.owner7 == 2 && f2.owner8 == 2 && owner30 == 2){
        p3money = p3money - czynsz27all;
        p2money = p2money + czynsz27all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz27all + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 27 && f2.owner7 == 2){
        p3money = p3money - czynsz27;
        p2money = p2money + czynsz27;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz27 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }

    if(p3loc == 28 && f2.owner8 == 2 && f2.hotel8 == 1){
        p3money = p3money - czynsz28hotel;
        p2money = p2money + czynsz28hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz28hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 25 && f2.owner8 == 2 && dom28 == 4){
        p3money = p3money - czynsz28dom4;
        p2money = p2money + czynsz28dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz28dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 28 && f2.owner8 == 2 && dom28 == 3){
        p3money = p3money - czynsz28dom3;
        p2money = p2money + czynsz28dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz28dom3 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 28 && f2.owner8 == 2 && dom28 == 2){
        p3money = p3money - czynsz28dom2;
        p2money = p2money + czynsz28dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz28dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 28 && f2.owner8 == 2 && dom28 == 1){
        p3money = p3money - czynsz28dom1;
        p2money = p2money + czynsz28dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz28dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 28 && f2.owner8 == 2 && f2.owner7 == 2 && owner30 == 2){
        p3money = p3money - czynsz28all;
        p2money = p2money + czynsz28all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz28all + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 28 && f2.owner8 == 2){
        p3money = p3money - czynsz28;
        p2money = p2money + czynsz28;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz28 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }

    if(p3loc == 30 && owner30 == 2 && hotel30 == 1){
        p3money = p3money - czynsz30hotel;
        p2money = p2money + czynsz30hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz30hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 30 && owner30 == 2 && dom30 == 4){
        p3money = p3money - czynsz30dom4;
        p2money = p2money + czynsz30dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz30dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 30 && owner30 == 2 && dom30 == 3){
        p3money = p3money - czynsz30dom3;
        p2money = p2money + czynsz30dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz30dom3 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 30 && owner30 == 2 && dom30 == 2){
        p3money = p3money - czynsz30dom2;
        p2money = p2money + czynsz30dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz30dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 30 && owner30 == 2 && dom30 == 1){
        p3money = p3money - czynsz30dom1;
        p2money = p2money + czynsz30dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz30dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 30 && owner30 == 2 && f2.owner8 == 2 && f2.owner7 == 2){
        p3money = p3money - czynsz30all;
        p2money = p2money + czynsz30all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz30all + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 30 && owner30 == 2){
        p3money = p3money - czynsz30;
        p2money = p2money + czynsz30;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz30 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }

    if(p3loc == 32 && owner32 == 2 && hotel32 == 1){
        p3money = p3money - czynsz32hotel;
        p2money = p2money + czynsz32hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz32hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 32 && owner32 == 2 && dom32 == 4){
        p3money = p3money - czynsz32dom4;
        p2money = p2money + czynsz32dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz32dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 32 && owner32 == 2 && dom32 == 3){
        p3money = p3money - czynsz32dom3;
        p2money = p2money + czynsz32dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz32dom3 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 32 && owner32 == 2 && dom32 == 2){
        p3money = p3money - czynsz32dom2;
        p2money = p2money + czynsz32dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz32dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 32 && owner32 == 2 && dom32 == 1){
        p3money = p3money - czynsz32dom1;
        p2money = p2money + czynsz32dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz32dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 32 && owner32 == 2 && owner33 == 2 && owner35 == 2){
        p3money = p3money - czynsz32all;
        p2money = p2money + czynsz32all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz32all + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 32 && owner32 == 2){
        p3money = p3money - czynsz32;
        p2money = p2money + czynsz32;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz32 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }

    if(p3loc == 33 && owner33 == 2 && hotel33 == 1){
        p3money = p3money - czynsz33hotel;
        p2money = p2money + czynsz33hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz33hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 33 && owner33 == 2 && dom33 == 4){
        p3money = p3money - czynsz33dom4;
        p2money = p2money + czynsz33dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz33dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 33 && owner33 == 2 && dom33 == 3){
        p3money = p3money - czynsz33dom3;
        p2money = p2money + czynsz33dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz33dom3 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 33 && owner33 == 2 && dom33 == 2){
        p3money = p3money - czynsz33dom2;
        p2money = p2money + czynsz33dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz33dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 33 && owner33 == 2 && dom33 == 1){
        p3money = p3money - czynsz33dom1;
        p2money = p2money + czynsz33dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz33dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 33 && owner33 == 2 && owner32 == 2 && owner35 == 2){
        p3money = p3money - czynsz33all;
        p2money = p2money + czynsz33all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz33all + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 33 && owner33 == 2){
        p3money = p3money - czynsz33;
        p2money = p2money + czynsz33;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz33 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }

    if(p3loc == 35 && owner35 == 2 && hotel35 == 1){
        p3money = p3money - czynsz35hotel;
        p2money = p2money + czynsz35hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz35hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 35 && owner35 == 2 && dom35 == 4){
        p3money = p3money - czynsz35dom4;
        p2money = p2money + czynsz35dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz35dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 35 && owner35 == 2 && dom35 == 3){
        p3money = p3money - czynsz35dom3;
        p2money = p2money + czynsz35dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz35dom3 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p2loc == 35 && owner35 == 2 && dom35 == 2){
        p3money = p3money - czynsz35dom2;
        p2money = p2money + czynsz35dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz35dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 35 && owner35 == 2 && dom35 == 1){
        p3money = p3money - czynsz35dom1;
        p2money = p2money + czynsz35dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz35dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 35 && owner35 == 2 && owner33 == 2 && owner32 == 2){
        p3money = p3money - czynsz35all;
        p2money = p2money + czynsz35all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz35all + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 35 && owner35 == 2){
        p3money = p3money - czynsz35;
        p2money = p2money + czynsz35;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz35 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }

    if(p3loc == 38 && owner38 == 2 && hotel38 == 1){
        p3money = p3money - czynsz38hotel;
        p2money = p2money + czynsz38hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz38hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 38 && owner38 == 2 && dom38 == 4){
        p3money = p3money- czynsz38dom4;
        p2money = p2money + czynsz38dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz38dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 38 && owner38 == 2 && dom38 == 3){
        p3money = p3money - czynsz38dom3;
        p2money = p2money + czynsz38dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz38dom3 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 38 && owner38 == 2 && dom38 == 2){
        p3money = p3money - czynsz38dom2;
        p2money = p2money + czynsz38dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz38dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 38 && owner38 == 2 && dom38 == 1){
        p3money = p3money - czynsz38dom1;
        p2money = p2money + czynsz38dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz38dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 38 && owner38 == 2 && owner40 == 2){
        p3money = p3money - czynsz38all;
        p2money = p2money + czynsz38all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz38all + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 38 && owner38 == 2){
        p3money = p3money - czynsz38;
        p2money = p2money + czynsz38;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz38 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }

    if(p3loc == 40 && owner40 == 2 && hotel40 == 1){
        p3money = p3money - czynsz40hotel;
        p2money = p2money + czynsz40hotel;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz40hotel + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 40 && owner40 == 2 && dom40 == 4){
        p3money = p3money - czynsz40dom4;
        p2money = p2money + czynsz40dom4;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz40dom4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 40 && owner40 == 2 && dom40 == 3){
        p3money = p3money - czynsz40dom3;
        p2money = p2money + czynsz40dom3;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz40dom3 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 40 && owner40 == 2 && dom40 == 2){
        p3money = p3money - czynsz40dom2;
        p2money = p2money + czynsz40dom2;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz40dom2 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 40 && owner40 == 2 && dom40 == 1){
        p3money = p3money - czynsz40dom1;
        p2money = p2money + czynsz40dom1;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz40dom1 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 40 && owner40 == 2 && owner38 == 2){
        p3money = p3money - czynsz40all;
        p2money = p2money + czynsz40all;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz40all + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    } else if(p3loc == 40 && owner40 == 2){
        p3money = p3money - czynsz40;
        p2money = p2money + czynsz40;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz40 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);   
    }

    if(p3loc == 6 && owner6 == 2 && owner16 == 2 && f2.owner6 == 2 && owner36 == 2){
        p3money = p3money - stacje46;
        p2money = p2money + stacje46;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + stacje46 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 6 && owner6 == 2 && owner16 == 2 && f2.owner6 == 2){
        p3money = p3money - stacje36;
        p2money = p2money + stacje36;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + stacje36 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 6 && owner6 == 2 && owner16 == 2 && owner36 == 2){
        p3money = p3money - stacje36;
        p2money = p2money + stacje36;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + stacje36 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 6 && owner6 == 2 && f2.owner6 == 2 && owner36 == 2){
        p3money = p3money - stacje36;
        p2money = p2money + stacje36;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + stacje36 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 6 && owner6 == 2 && owner16 == 2){
        p3money = p3money - stacje26;
        p2money = p2money + stacje26;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + stacje26 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 6 && owner6 == 2 && f2.owner6 == 2){
        p3money = p3money - stacje26;
        p2money = p2money + stacje26;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + stacje26 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 6 && owner6 == 2 && owner36 == 2){
        p3money = p3money - stacje26;
        p2money = p2money + stacje26;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + stacje26 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 6 && owner6 == 2){
        p3money = p3money - czynsz6;
        p2money = p2money + czynsz6;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz6 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    }

    if(p3loc == 16 && owner16 == 2 && f2.owner6 == 2 && owner36 == 2 && owner6 == 2){
        p3money = p3money - stacje416;
        p2money = p2money + stacje416;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + stacje416 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 16 && owner16 == 2 && owner6 == 2 && owner36 == 2){
        p3money = p3money - stacje316;
        p2money = p2money + stacje316;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + stacje316 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 16 && owner16 == 2 && f2.owner6 == 2 && owner36 == 2){
        p3money = p3money - stacje316;
        p2money = p2money + stacje316;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + stacje316 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 16 && owner16 == 2 && owner6 == 2 && f2.owner6 == 2){
        p3money = p3money - stacje316;
        p2money = p2money + stacje316;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + stacje316 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 16 && owner16 == 2 && owner6 == 2){
        p3money = p3money - stacje216;
        p2money = p2money + stacje216;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + stacje216 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 16 && owner16 == 2 && f2.owner6 == 2){
        p3money = p3money - stacje216;
        p2money = p2money + stacje216;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + stacje216 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 16 && owner16 == 2 && owner36 == 2){
        p3money = p3money - stacje216;
        p2money = p2money + stacje216;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + stacje216 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 16 && owner16 == 2){
        p3money = p3money - czynsz16;
        p2money = p2money + czynsz16;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz16 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    }

    if(p3loc == 26 && f2.owner6 == 2 && owner6 == 2 && owner16 == 2 && owner36 == 2){
        p3money = p3money - stacje426;
        p2money = p2money + stacje426;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + stacje426 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 26 && f2.owner6 == 2 && owner16 == 2 && owner36 == 2){
        p3money = p3money - stacje326;
        p2money = p2money + stacje326;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + stacje326 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 26 && f2.owner6 == 2 && owner16 == 2 && owner6 == 2){
        p3money = p3money - stacje326;
        p2money = p2money + stacje326;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + stacje326 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 26 && f2.owner6 == 2 && owner6 == 2 && owner36 == 2){
        p3money = p3money - stacje326;
        p2money = p2money + stacje326;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + stacje326 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 26 && f2.owner6 == 2 && owner6 == 2){
        p3money = p3money - stacje226;
        p2money = p2money + stacje226;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + stacje226 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 26 && f2.owner6 == 2 && owner16 == 2){
        p3money = p3money - stacje226;
        p2money = p2money + stacje226;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + stacje226 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 26 && f2.owner6 == 2 && owner36 == 2){
        p3money = p3money - stacje226;
        p2money = p2money + stacje226;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + stacje226 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 26 && f2.owner6 == 2){
        p3money = p3money - czynsz26;
        p2money = p2money + czynsz26;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz26 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    }

    if(p3loc == 36 && owner36 == 2 && owner6 == 2 && owner16 == 2 && f2.owner6 == 2){
        p3money = p3money - stacje436;
        p2money = p2money + stacje436;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + stacje436 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 36 && owner36 == 2 && owner16 == 2 && f2.owner6 == 2){
        p3money = p3money - stacje336;
        p2money = p2money + stacje336;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + stacje336 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 36 && owner36 == 2 && owner16 == 2 && owner6 == 2){
        p3money = p3money - stacje336;
        p2money = p2money + stacje336;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + stacje336 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 36 && owner36 == 2 && owner6 == 2 && f2.owner6 == 2){
        p3money = p3money - stacje336;
        p2money = p2money + stacje336;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + stacje336 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 36 && owner36 == 2 && owner6 == 2){
        p3money = p3money - stacje236;
        p2money = p2money + stacje236;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + stacje236 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 36 && owner36 == 2 && owner16 == 2){
        p3money = p3money - stacje236;
        p2money = p2money + stacje236;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + stacje236 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 36 && owner36 == 2 && f2.owner6 == 2){
        p3money = p3money - stacje236;
        p2money = p2money + stacje236;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + stacje236 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    } else if(p3loc == 36 && owner36 == 2){
        p3money = p3money - czynsz36;
        p2money = p2money + czynsz36;
        
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + czynsz36 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);    
    }

    if(p3loc == 13 && owner13 == 2 && f2.owner9 == 2){
        p3money = p3money - destyny * 10;
        p2money = p2money + destyny * 10;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + destyny * 10 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);  
    } else if(p3loc == 13 && owner13 == 2){
        p3money = p3money - destyny * 4;
        p2money = p2money + destyny * 4;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + destyny * 4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);  
    }

    if(p3loc == 29 && f2.owner9 == 2 && owner13 == 2){
        p3money = p3money - destyny * 10;
        p2money = p2money + destyny * 10;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + destyny * 10 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);  
    } else if(p3loc == 29 && f2.owner9 == 2){
        p3money = p3money - destyny * 4;
        p2money = p2money + destyny * 4;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Gracz 3 płaci czynsz dla gracza 2: ' + destyny * 4 + '$.';
        log.classList.add('blue3');
        consol.scrollTo(0, 10000000000);  
    }


}

destyny = 0;
p1loc = 0;
p2loc = 0;
p3loc = 0;
move(p1loc, 1);
move(p2loc, 2);
move(p3loc, 3);

Write('START GRY.', 0);
Write('TWOJA TURA.', 1);

rollButton.addEventListener("click", function(e) {
    endGame.classList.remove('hide'); 
    pClean(1);

    lottery(0);
    lottery(1);
    destyny = roll[0] + roll[1];
    Write('Rzut kostką. Wypadło: ' + destyny + '.', 1)

    move(p1loc, 1);
    blueQuestion();
    redQuestion();
    CanIBuy();
    Pay1player();
    
    player1.textContent = p1money;
    player2.textContent = p2money;
    player3.textContent = p3money;
},false);
buy.addEventListener("click", function(e) {
    if(p1loc == 2 && f2.owner == 0 && p1money >= f2.price){
        buy.classList.add('hide');
        p1money = p1money - f2.price;
        f2.owner = 1;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Kupujesz pole 2 za ' + f2.price + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);

    } else if(p1loc == 2 && f2.owner == 0 && p1money < f2.price){
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'ZA MAŁO GOTÓWKI. Potrzeba ' + f2.price + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);
    }
    if(p1loc == 4 && owner4 == 0 && p1money >= cena4){
        buy.classList.add('hide');
        p1money = p1money - cena4;
        owner4 = 1;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Kupujesz pole 4 za ' + cena4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);

    } else if(p1loc == 4 && owner4 == 0 && p1money < cena4){
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'ZA MAŁO GOTÓWKI. Potrzeba ' + cena4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);
    }
    if(p1loc == 6 && owner6 == 0 && p1money >= cena6){
        buy.classList.add('hide');
        p1money = p1money - cena6;
        owner6 = 1;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Kupujesz pole 6 za ' + cena6 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);

    } else if(p1loc == 6 && owner6 == 0 && p1money < cena6){
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'ZA MAŁO GOTÓWKI. Potrzeba ' + cena6 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);
    }
    if(p1loc == 7 && owner7 == 0 && p1money >= cena7){
        buy.classList.add('hide');
        p1money = p1money - cena7;
        owner7 = 1;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Kupujesz pole 7 za ' + cena7 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);

    } else if(p1loc == 7 && owner7 == 0 && p1money < cena7){
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'ZA MAŁO GOTÓWKI. Potrzeba ' + cena7 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);
    }
    if(p1loc == 9 && owner9 == 0 && p1money >= cena9){
        buy.classList.add('hide');
        p1money = p1money - cena9;
        owner9 = 1;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Kupujesz pole 9 za ' + cena9 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);

    } else if(p1loc == 9 && owner9 == 0 && p1money < cena9){
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'ZA MAŁO GOTÓWKI. Potrzeba ' + cena9 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);
    }
    if(p1loc == 10 && owner10 == 0 && p1money >= cena10){
        buy.classList.add('hide');
        p1money = p1money - cena10;
        owner10 = 1;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Kupujesz pole 10 za ' + cena10 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);

    } else if(p1loc == 10 && owner10 == 0 && p1money < cena10){
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'ZA MAŁO GOTÓWKI. Potrzeba ' + cena10 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);
    }
    if(p1loc == 12 && owner12 == 0 && p1money >= cena12){
        buy.classList.add('hide');
        p1money = p1money - cena12;
        owner12 = 1;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Kupujesz pole 12 za ' + cena12 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);

    } else if(p1loc == 12 && owner12 == 0 && p1money < cena12){
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'ZA MAŁO GOTÓWKI. Potrzeba ' + cena12 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);
    }
    if(p1loc == 13 && owner13 == 0 && p1money >= cena13){
        buy.classList.add('hide');
        p1money = p1money - cena13;
        owner13 = 1;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Kupujesz pole 13 za ' + cena13 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);

    } else if(p1loc == 13 && owner13 == 0 && p1money < cena13){
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'ZA MAŁO GOTÓWKI. Potrzeba ' + cena13 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);
    }
    if(p1loc == 14 && owner14 == 0 && p1money >= cena14){
        buy.classList.add('hide');
        p1money = p1money - cena14;
        owner14 = 1;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Kupujesz pole 14 za ' + cena14 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);

    } else if(p1loc == 14 && owner14 == 0 && p1money < cena14){
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'ZA MAŁO GOTÓWKI. Potrzeba ' + cena14 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);
    }
    if(p1loc == 15 && owner15 == 0 && p1money >= cena15){
        buy.classList.add('hide');
        p1money = p1money - cena15;
        owner15 = 1;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Kupujesz pole 15 za ' + cena15 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);

    } else if(p1loc == 15 && owner15 == 0 && p1money < cena15){
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'ZA MAŁO GOTÓWKI. Potrzeba ' + cena15 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);
    }
    if(p1loc == 16 && owner16 == 0 && p1money >= cena16){
        buy.classList.add('hide');
        p1money = p1money - cena16;
        owner16 = 1;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Kupujesz pole 16 za ' + cena16 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);

    } else if(p1loc == 16 && owner16 == 0 && p1money < cena16){
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'ZA MAŁO GOTÓWKI. Potrzeba ' + cena16 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);
    }
    if(p1loc == 17 && owner17 == 0 && p1money >= cena17){
        buy.classList.add('hide');
        p1money = p1money - cena17;
        owner17 = 1;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Kupujesz pole 17 za ' + cena17 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);

    } else if(p1loc == 17 && owner17 == 0 && p1money < cena17){
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'ZA MAŁO GOTÓWKI. Potrzeba ' + cena17 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);
    }
    if(p1loc == 19 && owner19 == 0 && p1money >= cena19){
        buy.classList.add('hide');
        p1money = p1money - cena19;
        owner19 = 1;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Kupujesz pole 19 za ' + cena19 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);

    } else if(p1loc == 19 && owner19 == 0 && p1money < cena19){
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'ZA MAŁO GOTÓWKI. Potrzeba ' + cena19 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);
    }
    if(p1loc == 20 && f2.owner0 == 0 && p1money >= f2.price0){
        buy.classList.add('hide');
        p1money = p1money - f2.price0;
        f2.owner0 = 1;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Kupujesz pole 20 za ' + f2.price0 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);

    } else if(p1loc == 20 && f2.owner0 == 0 && p1money < f2.price0){
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'ZA MAŁO GOTÓWKI. Potrzeba ' + f2.price0 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);
    }
    if(p1loc == 22 && f2.owner2 == 0 && p1money >= f2.price2){
        buy.classList.add('hide');
        p1money = p1money - f2.price2;
        f2.owner2 = 1;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Kupujesz pole 22 za ' + f2.price2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);

    } else if(p1loc == 22 && f2.owner2 == 0 && p1money < f2.price2){
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'ZA MAŁO GOTÓWKI. Potrzeba ' + f2.price2 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);
    }
    if(p1loc == 24 && f2.owner4 == 0 && p1money >= f2.price4){
        buy.classList.add('hide');
        p1money = p1money - f2.price4;
        f2.owner4 = 1;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Kupujesz pole 24 za ' + f2.price4 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);

    } else if(p1loc == 24 && f2.owner4 == 0 && p1money < f2.price4){
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'ZA MAŁO GOTÓWKI. Potrzeba ' + f2.price4+ '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);
    }
    if(p1loc == 25 && f2.owner5 == 0 && p1money >= f2.price5){
        buy.classList.add('hide');
        p1money = p1money - f2.price5;
        f2.owner5 = 1;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Kupujesz pole 25 za ' + f2.price5 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);

    } else if(p1loc == 25 && f2.owner5 == 0 && p1money < f2.price5){
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'ZA MAŁO GOTÓWKI. Potrzeba ' + f2.price5 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);
    }
    if(p1loc == 26 && f2.owner6 == 0 && p1money >= f2.price6){
        buy.classList.add('hide');
        p1money = p1money - f2.price6;
        f2.owner6 = 1;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Kupujesz pole 26 za ' + f2.price6 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);

    } else if(p1loc == 26 && f2.owner6 == 0 && p1money < f2.price6){
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'ZA MAŁO GOTÓWKI. Potrzeba ' + f2.price6 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);
    }
    if(p1loc == 27 && f2.owner7 == 0 && p1money >= f2.price7){
        buy.classList.add('hide');
        p1money = p1money - f2.price7;
        f2.owner7 = 1;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Kupujesz pole 27 za ' + f2.price7 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);

    } else if(p1loc == 27 && f2.owner7 == 0 && p1money < f2.price7){
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'ZA MAŁO GOTÓWKI. Potrzeba ' + f2.price7 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);
    }
    if(p1loc == 28 && f2.owner8 == 0 && p1money >= f2.price8){
        buy.classList.add('hide');
        p1money = p1money - f2.price8;
        f2.owner8 = 1;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Kupujesz pole 28 za ' + f2.price8 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);

    } else if(p1loc == 28 && f2.owner8 == 0 && p1money < f2.price8){
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'ZA MAŁO GOTÓWKI. Potrzeba ' + f2.price8 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);
    }
    if(p1loc == 29 && f2.owner9 == 0 && p1money >= f2.price9){
        buy.classList.add('hide');
        p1money = p1money - f2.price9;
        f2.owner9 = 1;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Kupujesz pole 29 za ' + f2.price9 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);

    } else if(p1loc == 29 && f2.owner9 == 0 && p1money < f2.price9){
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'ZA MAŁO GOTÓWKI. Potrzeba ' + f2.price9 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);
    }
    if(p1loc == 30 && owner30 == 0 && p1money >= cena30){
        buy.classList.add('hide');
        p1money = p1money - cena30;
        owner30 = 1;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Kupujesz pole 30 za ' + cena30 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);

    } else if(p1loc == 30 && owner30 == 0 && p1money < cena30){
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'ZA MAŁO GOTÓWKI. Potrzeba ' + cena30 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);
    }
    if(p1loc == 32 && owner32 == 0 && p1money >= cena32){
        buy.classList.add('hide');
        p1money = p1money - cena32;
        owner32 = 1;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Kupujesz pole 32 za ' + cena32 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);

    } else if(p1loc == 32 && owner32 == 0 && p1money < cena32){
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'ZA MAŁO GOTÓWKI. Potrzeba ' + cena32 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);
    }
    if(p1loc == 33 && owner33 == 0 && p1money >= cena33){
        buy.classList.add('hide');
        p1money = p1money - cena33;
        owner33 = 1;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Kupujesz pole 33 za ' + cena33 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);

    } else if(p1loc == 33 && owner33 == 0 && p1money < cena33){
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'ZA MAŁO GOTÓWKI. Potrzeba ' + cena33 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);
    }
    if(p1loc == 35 && owner35 == 0 && p1money >= cena35){
        buy.classList.add('hide');
        p1money = p1money - cena35;
        owner35 = 1;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Kupujesz pole 35 za ' + cena35 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);

    } else if(p1loc == 35 && owner35 == 0 && p1money < cena35){
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'ZA MAŁO GOTÓWKI. Potrzeba ' + cena35 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);
    }
    if(p1loc == 36 && owner36 == 0 && p1money >= cena36){
        buy.classList.add('hide');
        p1money = p1money - cena36;
        owner36 = 1;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Kupujesz pole 36 za ' + cena36 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);

    } else if(p1loc == 36 && owner36 == 0 && p1money < cena36){
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'ZA MAŁO GOTÓWKI. Potrzeba ' + cena36 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);
    }
    if(p1loc == 38 && owner38 == 0 && p1money >= cena38){
        buy.classList.add('hide');
        p1money = p1money - cena38;
        owner38 = 1;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Kupujesz pole 38 za ' + cena38 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);

    } else if(p1loc == 38 && owner38 == 0 && p1money < cena38){
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'ZA MAŁO GOTÓWKI. Potrzeba ' + cena38 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);
    }
    if(p1loc == 40 && owner40 == 0 && p1money >= cena40){
        buy.classList.add('hide');
        p1money = p1money - cena40;
        owner40 = 1;

        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'Kupujesz pole 40 za ' + cena40 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);
    } else if(p1loc == 40 && owner40 == 0 && p1money < cena40){
        var log = document.createElement('p');
        consol.appendChild(log);
        log.textContent = 'ZA MAŁO GOTÓWKI. Potrzeba ' + cena40 + '$.';
        log.classList.add('green');
        consol.scrollTo(0, 10000000000);
    }
    whoOwn();
    document.querySelector('.player1').textContent = p1money;
},false);

endGame.addEventListener("click", function(e) {
    endGame.classList.toggle('hide');
    buy.classList.add('hide'); 
    
    pClean(2);
    Write('TURA GRACZA 2.', 2);
    lottery(0);
    lottery(1);
    destyny = roll[0] + roll[1];

    Write('Rzut kostką. Wypadło: ' + destyny + '.', 2);

    move(p2loc, 2);
    blueQuestion2();
    redQuestion2();
    Pay2player();

    pClean(3);
    Write('TURA GRACZA 2.', 3);

    lottery(0);
    lottery(1);
    destyny = roll[0] + roll[1];
    Write('Rzut kostką. Wypadło: ' + destyny + '.', 3);

    move(p3loc, 3);
    blueQuestion3();
    redQuestion3();
    Pay3player();

    whoOwn();
    Write('TWOJA TURA', 1);

    document.querySelector('.player1').textContent = p1money;
    document.querySelector('.player2').textContent = p2money;
    document.querySelector('.player3').textContent = p3money;
},false);

})();