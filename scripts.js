(function() {

const cube = [document.querySelector(".cube"), document.querySelector(".cube2")];
const rollButton = document.querySelector('.rollButton');
const endGame = document.querySelector('.endGame');
    
let roll = [0, 0], draw;
let money = [1500, 1500, 1500];

let destyny;
let location = [0, 0, 0]

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
        player: document.querySelector(".play3")
    },
    {   
        player: document.querySelector(".play4"),
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
        player: document.querySelector(".play5")
    },
    {
        player: document.querySelector(".play6"),
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
        player: document.querySelector(".play7"),
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
        player: document.querySelector(".play8")
    },
    {
        player: document.querySelector(".play9"),
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
        player: document.querySelector(".play10"),
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
        player: document.querySelector(".play11")
    },
    {
        player: document.querySelector(".play12"),
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
        player: document.querySelector(".play13"),
        style: document.querySelector(".field13"),
        ownerstyle: document.querySelector(".owner13"),
        price: 150,
        
        mortgage: 75,
        mortgageRepayment: 83,

        owner: 0
    },
    {
        player: document.querySelector(".play14"),
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
        player: document.querySelector(".play15"),
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
        player: document.querySelector(".play16"),
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
        player: document.querySelector(".play17"),
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
        player: document.querySelector(".play18")
    },   
    {
        player: document.querySelector(".play19"),
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
        player: document.querySelector(".play20"),
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
        player: document.querySelector(".play21")
    },
    {
        player: document.querySelector(".play22"),
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
        player: document.querySelector(".play23")
    },
    {
        player: document.querySelector(".play24"),
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
        player: document.querySelector(".play25"),
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
        player: document.querySelector(".play26"),
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
        player: document.querySelector(".play27"),
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
        player: document.querySelector(".play28"),
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
        player: document.querySelector(".play29"),
        style: document.querySelector(".field29"),
        ownerstyle: document.querySelector(".owner29"),
        price: 150,
        
        mortgage: 75,
        mortgageRepayment: 83,

        owner: 0
    },
    {
        player: document.querySelector(".play30"),
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
        player: document.querySelector(".play31")
    },
    {
        player: document.querySelector(".play32"),
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
        player: document.querySelector(".play33"),
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
        player: document.querySelector(".play34")
    },
    {
        player: document.querySelector(".play35"),
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
        player: document.querySelector(".play36"),
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
    {
        player: document.querySelector(".play37")
    },
    {
        player: document.querySelector(".play38"),
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
        player: document.querySelector(".play39")
    },
    {
        player: document.querySelector(".play40"),
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

            if(fields[i].owner == 1){
                oatput2.textContent = 'Gracz 1';
                oatput2.classList.add('green');
            } else if (fields[i].owner == 2){
                oatput2.textContent = 'Gracz 2';
                oatput2.classList.add('red2');
            } else if (fields[i].owner == 3){
                oatput2.textContent = 'Gracz 3';
                oatput2.classList.add('blue3');
            } else if (fields[i].owner == 0){
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

    if(location[who] > 40) {
        location[who] = location[who] - 40;
        money[who] = money[who] + 200;
        Write('START- otrzymujesz pensję 200$.', who);
    }
    if (who == 0) {
        Write('Lądujesz na polu: ' + (location[who] + 1) + ".", who);
    }
    if (who == 1) {
        Write('Gracz 2 ląduje na polu: ' + (location[who] + 1) + ".", who);
    }
    if (who == 2) {
        Write('Gracz 3 ląduje na polu: ' + (location[who] + 1) + ".", who);
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
    if(location[who] == 4 && who == 1) {
        Write('Podatek dochodowy. Gracz 2 płaci 200$', who);
        money[who] = money[who] - 200;
    }
    if(location[who] == 4 && who == 2) {
        Write('Podatek dochodowy. Gracz 3 płaci 200$', who);
        money[who] = money[who] - 200;
    }


    if(location[who] == 38 && who == 0) {
        Write('Podatek dochodowy. Płacisz 100$', who);
        money[who] = money[who] - 200;
    }
    if(location[who] == 38 && who == 1) {
        Write('Podatek dochodowy. Gracz 2 płaci 100$', who);
        money[who] = money[who] - 200;
    }
    if(location[who] == 38 && who == 2) {
        Write('Podatek dochodowy. Gracz 3 płaci 100$', who);
        money[who] = money[who] - 200;
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
        draw = Math.random() * 15 + 1 ;
        draw = Math.round(draw);
        if(draw == 1){
            Write('Otrzymujesz spłatę kredytu budowlanego. Pobierz 150$', who);
            money[who] = money[who] + 150;
        } else if(draw == 2 || draw == 3){
            Write('Idz na najbliższe pole DWORZEC KOLEJOWY. Jeżeli pole ma właściciela zapłać mu dwukrotną wysokość czynszu.', who);
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
        } else if(draw == 4){
            lottery(0);
            lottery(1);
            destyny = roll[0] + roll[1];
            Write('Idz na najbliższe pole ELEKTROWNIA lub WODICIĄGI. Jeżeli pole ma właściciela, zapłać jego właścicielowi równowartość 10x suma wyrzuconych oczek (wypadło ' +  destyny + ').', who);
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
        } else if(draw == 5){
            Write('Mandat za przekroczenie prędkości 15$.', who);
            money[who] = money[who] - 15;
        } else if(draw == 6){
            Write('WYJDŹ BEZPŁATIE Z WIĘZIENIA. Kartę możesz zachować i wykorzystać w razie potrzeby lub odsprzedać innemu graczowi.', who);
        } else if(draw == 7){
            Write('Cofnij się o trzy pola.', who);
            destyny = -3;
            pClean(who);
            move(who);
        } else if(draw == 8){
            Write('Idz na pole 24. Jeżeli mijasz start, pobierz 200$.', who);
            if(location[who] == 36){
                money[who] = money[who] + 200;
            }
            destyny = 0;
            location[who] = 23;
            pClean(who);
            move(who);
        } else if(draw == 9){
            Write('Wybrano cię prezesem zarządu. Zapłać każdemu graczowi $50.', who);
            if(who == 1) {money[0] - money[0] - 100; money[1] = money[1] + 50; money[2] = money[2] + 50;}
            if(who == 2) {money[1] - money[1] - 100; money[2] = money[2] + 50; money[0] = money[0] + 50;}
            if(who == 3) {money[2] - money[2] - 100; money[1] = money[1] + 50; money[0] = money[0] + 50;}
        } else if(draw == 10){
            Write('Idź na pole DWORZEC ZACHÓD. Jeżeli mijasz pole start, pobierz 200$.', who);
            if(location[who] == 22 || location[who] == 36){
                money[who] = money[who] + 200;
            }
            destyny = 0;
            location[who] = 15;
            pClean(who);
            move(who);
        } else if(draw == 11){
            Write('Idź na pole 40.', who);
            destyny = 0;
            location[who] = 40;
            pClean(who);
            move(who);
        } else if(draw == 12){
            Write('Przeprowadzasz generalny remont wszystkich nieruchomości: za każdy dom płacisz 25$, za każdy hotel płacisz 100$.', who);
        } else if(draw == 13){
            Write('Idz na pole 12. Jeżeli mijasz start, pobierz 200$.', who);
            if(location[who] == 22 || location[who] == 36){
                money[who] = money[who] + 200;
            }
            destyny = 0;
            location[who] = 11;
            pClean(who);
            move(who);
        } else if(draw == 14){
            Write('Bank wypłaca ci dywidendę w kwocie 50$.', who);
            money[who] = money[who] + 50;
        } else if(draw == 15){
            Write('Idż na pole START. (Pobierz 200$).', who);
            money[who] = money[who] + 200;
            destyny = 0;
            location[who] = 0;
            pClean(who);
            move(who);
        } else if(draw == 16){
            Write('Idź do więzienia. Idziesz bezpośrednio do więziena, nie mijasz pola start, nie pobierasz 200$.', who);
        }
    }
    player1.textContent = money[0];
    player2.textContent = money[1];
    player3.textContent = money[2];
}

function blueQuestion(who) {
    if(location[who] == 2 || location[who] == 17 || location[who] == 33){
        Write('KARTA NIEBIESKA:', who);
        draw = Math.random() * 15 + 1 ;
        draw = Math.round(draw);

        if(draw == 1){
            Write('Idż na pole START. (Pobierz 200$).', who);
            money[who] = money[who] + 200;
            destyny = 0;
            location[who] = 0;
            pClean(who);
            move(who);
        } else if(draw == 2){
            Write('Pomyłka banku na twoją korzyść. Pobierz 200$.', who);
            money[who] = money[who] + 200;
        } else if(draw == 3){
            Write('Sprzedajesz akcje z zyskiem. Pobierz 50$.', who);
            document.querySelector('.questionOatput').textContent = "Sprzedajesz akcje z zyskiem. Pobierz 50$.";
            money[who] = money[who] + 50;
        } else if(draw == 4){
            Write('Dziedziczysz spadek w wysokości 100$.', who);
            money[who] = money[who] + 100;
        } else if(draw == 5){
            Write('Dziś są twoje urodziny pobierz 10$ od każdego z graczy.', who);
            if(who == 1) {money[0] - money[0] - 20; money[1] = money[1] + 10; money[2] = money[2] + 10;}
            if(who == 2) {money[1] - money[1] - 20; money[2] = money[2] + 10; money[0] = money[0] + 10;}
            if(who == 3) {money[2] - money[2] - 20; money[1] = money[1] + 10; money[0] = money[0] + 10;}
        } else if(draw == 6){
            Write('Pobierz 25$ za usługę konsultingową.', who);
            money[who] = money[who] + 25;
        } else if(draw == 7){
            Write('Idź do więzienia. Idziesz bezpośrednio do więziena, nie mijasz pola start, nie pobierasz 200$.', who);
        } else if(draw == 8){
            Write('Otrzymujesz wypłatę z funduszu wakacyjnego. Pobierz 100$.', who);
            money[who] = money[who] + 100;
        } else if(draw == 9){
            Write('Opłata za konsultację lekarską. Zapłać 50$.', who);
            money[who] = money[who] - 50;
        } else if(draw == 10){
            Write('Opłata za czesne. Zapłać 50$.', who);
            money[who] = money[who] - 50;
        } else if(draw == 11){
            Write('Otrzymujesz wypłatę z ubezpieczeniea na życie. Pobierz 100$.', who);
            money[who] = money[who] + 100;
        } else if(draw == 12){
            Write('Zwrot podatku dochodowego. Pobierz 20$.', who);
            money[who] = money[who] + 20;
        } else if(draw == 13){
            Write('Opłata za pobyt w szpitalu. Zapłać 100$.', who);
            money[who] = money[who] - 100;
        } else if(draw == 14){
            Write('WYJDŹ BEZPŁATIE Z WIĘZIENIA. Kartę możesz zachować i wykorzystać w razie potrzeby lub odsprzedać innemu graczowi.', who);
        } else if(draw == 15){
            Write('Zajmuejsz drugie miejsce w konkursie piękności. Pobierz 10$.', who);
            money[who] = money[who] + 10;
        } else if(draw == 16){
            Write('Obliczono koszt napraw komunalnych twoich nieruchomości: zapłać 40$ za każdy dom 115$ za każdy hotel, jaki posiadasz.', who);
        }
    }
    player1.textContent = money[0];
    player2.textContent = money[1];
    player3.textContent = money[2];
}

const buy = document.querySelector('.buy');
function canIBuy() {
    for (let i=0; i<fields.length; i++) {
        if(location[0] == i && fields[i].owner == 0){
            buy.classList.remove('hide');
        }
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


destyny = 0;
move(0);
move(1);
move(2);

Write('START GRY.', 3);
Write('TWOJA TURA.', 0);

rollButton.addEventListener("click", function(e) {
    endGame.classList.remove('hide'); 
    pClean(0);

    lottery(0);
    lottery(1);
    destyny = roll[0] + roll[1];
    Write('Rzut kostką. Wypadło: ' + destyny + '.', 0)

    move(0);
    blueQuestion(0);
    redQuestion(0);
    canIBuy();
    
    player1.textContent = money[0];
    player2.textContent = money[1];
    player3.textContent = money[2];
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
    
    pClean(1);
    Write('TURA GRACZA 2.', 1);
    lottery(0);
    lottery(1);
    destyny = roll[0] + roll[1];

    Write('Rzut kostką. Wypadło: ' + destyny + '.', 1);

    move(1);
    blueQuestion(1);
    redQuestion(1);

    pClean(2);
    Write('TURA GRACZA 3.', 2);

    lottery(0);
    lottery(1);
    destyny = roll[0] + roll[1];
    Write('Rzut kostką. Wypadło: ' + destyny + '.', 2);

    move(2);
    blueQuestion(2);
    redQuestion(2);

    whoOwn();
    Write('TWOJA TURA', 0);

    player1.textContent = money[0];
    player2.textContent = money[1];
    player3.textContent = money[2];
},false);

})();