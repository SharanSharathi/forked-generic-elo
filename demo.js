// Default Singles Configuration, no modifiers
const CONFIG1 = {
    SCALE_FACTOR: 400,
    K_FACTOR: 32,
};

// Default Doubles Configuration, no modifiers
const CONFIG2 = {
	SCALE_FACTOR: 400,
    K_FACTOR: 64,
};

// Global Player Map
// Will be searched during CSV Load
// TODO: Make hashvalue for map and mutate only if the hash matches
const PlayerMap = new Map();

// PSVM of function
document.addEventListener("DOMContentLoaded", function() {
    // console.log(PlayerMap);
	
    // console.log(rating_change(1000, 400, 0));

    new FoosballMatch("4638499000000592018","Suresh R", "Vasanth Kandasamy" ,10, "Sharan Sharathi", "Megavarshini S",7).modify_ratings()
    new FoosballMatch("4638499000000592010","Selvamurugan Rathnasamy", "Suresh R",6, "Sanjana Prakash", "Vasanth Kandasamy" ,10).modify_ratings()
    new FoosballMatch("4638499000000587003","Sharan Sharathi", "Vasanth Kandasamy" ,10, "Suresh R", "Megavarshini S",5).modify_ratings()
    new FoosballMatch("4638499000000586017","Suresh R", "Sanjana Prakash",6, "Sharan Sharathi", "Megavarshini S",10).modify_ratings()
    new FoosballMatch("4638499000000583006","Mariya Dilip", "Balamurugan K E",10, "Sharan Sharathi", "Vasanth Kandasamy" ,6).modify_ratings()
    new FoosballMatch("4638499000000578008","Sowkhya P", "Suresh R",10, "Selvamurugan Rathnasamy", "Balamurugan K E",7).modify_ratings()
    new FoosballMatch("4638499000000574015","Mariya Dilip", "Megavarshini S",8, "Suresh R", "Balamurugan K E",10).modify_ratings()
    new FoosballMatch("4638499000000571003","Mariya Dilip", "Megavarshini S",6, "Sharan Sharathi", "Vasanth Kandasamy" ,10).modify_ratings()
    new FoosballMatch("4638499000000550032","Mariya Dilip", "Balamurugan K E",7, "Balaji The Boss", "Sanjana Prakash",10).modify_ratings()
    new FoosballMatch("4638499000000549032","Sanjana Prakash", "Vasanth Kandasamy" ,10, "Sowkhya P", "Megavarshini S",4).modify_ratings()
    new FoosballMatch("4638499000000548032","Suresh R", "Vasanth Kandasamy" ,10, "Mariya Dilip", "Balamurugan K E",4).modify_ratings()
    new FoosballMatch("4638499000000548025","Mariya Dilip", "Sanjana Prakash",4, "Suresh R", "Srikesh B",10).modify_ratings()
    new FoosballMatch("4638499000000546053","Suresh R", "Mariya Dilip",7, "Sanjana Prakash", "Srikesh B",10).modify_ratings()
    new FoosballMatch("4638499000000545020","Sowkhya P", "Suresh R",10, "Rohini L", "Sharan Sharathi",3).modify_ratings()
    new FoosballMatch("4638499000000545003","Sowkhya P", "Vasanth Kandasamy" ,10, "Balaji The Boss", "Rohini L",7).modify_ratings()
    new FoosballMatch("4638499000000543012","Balaji The Boss", "Sharan Sharathi",10, "Rohini L", "Vasanth Kandasamy" ,5).modify_ratings()
    new FoosballMatch("4638499000000538013","Sharan Sharathi", "Vasanth Kandasamy" ,9, "Balaji The Boss", "Balamurugan K E",10).modify_ratings()
    new FoosballMatch("4638499000000537038","Sharan Sharathi", "Megavarshini S",10, "Suresh R", "Balamurugan K E",4).modify_ratings()
    new FoosballMatch("4638499000000537003","Sharan Sharathi", "Megavarshini S",5, "Suresh R", "Balamurugan K E",10).modify_ratings()
    new FoosballMatch("4638499000000536028","Suresh R", "Sanjana Prakash",5, "Sharan Sharathi", "Balamurugan K E",10).modify_ratings()
    new FoosballMatch("4638499000000536021","Rohini L", "Vasanth Kandasamy" ,3, "Sharan Sharathi", "Balamurugan K E",10).modify_ratings()
    new FoosballMatch("4638499000000527008","Balaji The Boss", "Megavarshini S",10, "Srikesh B", "Sanjana Prakash",3).modify_ratings()
    new FoosballMatch("4638499000000526005","Sanjana Prakash", "Megavarshini S",1, "Balaji The Boss", "Mariya Dilip",10).modify_ratings()
    new FoosballMatch("4638499000000523012","Mariya Dilip", "Megavarshini S",10, "Sanjana Prakash", "Srikesh B",6).modify_ratings()
    new FoosballMatch("4638499000000515003","Mariya Dilip", "Sanjana Prakash",9, "Suresh R", "Balamurugan K E",10).modify_ratings()
    new FoosballMatch("4638499000000503009","Sanjana Prakash", "Vasanth Kandasamy" ,10, "Sharan Sharathi", "Megavarshini S",7).modify_ratings()
    new FoosballMatch("4638499000000496005","Vasanth Kandasamy" , "Sanjana Prakash",10, "Suresh R", "Megavarshini S",6).modify_ratings()
    new FoosballMatch("4638499000000483013","Sowkhya P", "Balamurugan K E",10, "Rohini L", "Megavarshini S",4).modify_ratings()
    new FoosballMatch("4638499000000479017","Balaji The Boss", "Mariya Dilip",2, "Suresh R", "Srikesh B",10).modify_ratings()
    new FoosballMatch("4638499000000477044","Sowkhya P", "Balamurugan K E",8, "Suresh R", "Rohini L",10).modify_ratings()
    new FoosballMatch("4638499000000477023","Rohini L", "Balamurugan K E",3, "Suresh R", "Megavarshini S",10).modify_ratings()
    new FoosballMatch("4638499000000475022","Rohini L", "Suresh R",8, "Sowkhya P", "Megavarshini S",10).modify_ratings()
    new FoosballMatch("4638499000000474020","Balaji The Boss", "Srikesh B",6, "Mariya Dilip", "Balamurugan K E",10).modify_ratings()
    new FoosballMatch("4638499000000474005","Balaji The Boss", "Balamurugan K E",8, "Suresh R", "Mariya Dilip",10).modify_ratings()
    new FoosballMatch("4638499000000473003","Rohini L", "Vasanth Kandasamy" ,6, "Mariya Dilip", "Megavarshini S",10).modify_ratings()
    new FoosballMatch("4638499000000470006","Balaji The Boss", "Mariya Dilip",3, "Suresh R", "Balamurugan K E",10).modify_ratings()
    new FoosballMatch("4638499000000467009","Balaji The Boss", "Rohini L",9, "Sowkhya P", "Srikesh B",10).modify_ratings()
    new FoosballMatch("4638499000000466028","Suresh R", "Sanjana Prakash",10, "Sowkhya P", "Vasanth Kandasamy" ,7).modify_ratings()
    new FoosballMatch("4638499000000463023","Suresh R", "Vasanth Kandasamy" ,5, "Mariya Dilip", "Sanjana Prakash",10).modify_ratings()
    new FoosballMatch("4638499000000463003","Rohini L", "Sanjana Prakash",10, "Sowkhya P", "Megavarshini S",9).modify_ratings()
    new FoosballMatch("4638499000000455006","Suresh R", "Sanjana Prakash",7, "Mariya Dilip", "Megavarshini S",10).modify_ratings()
    new FoosballMatch("4638499000000451006","Suresh R", "Balamurugan K E",7, "Mariya Dilip", "Sanjana Prakash",10).modify_ratings()
    new FoosballMatch("4638499000000447003","Suresh R", "Megavarshini S",6, "Mariya Dilip", "Sanjana Prakash",10).modify_ratings()
    new FoosballMatch("4638499000000440003","Suresh R", "Sanjana Prakash",10, "Mariya Dilip", "Balamurugan K E",3).modify_ratings()
    new FoosballMatch("4638499000000425009","Balaji The Boss", "Megavarshini S",10, "Srikesh B", "Vasanth Kandasamy" ,6).modify_ratings()
    new FoosballMatch("4638499000000419020","Vasanth Kandasamy" , "Srikesh B",10, "Balaji The Boss", "Megavarshini S",4).modify_ratings()
    new FoosballMatch("4638499000000418008","Mariya Dilip", "Vasanth Kandasamy" ,10, "Sowkhya P", "Balamurugan K E",1).modify_ratings()
    new FoosballMatch("4638499000000417018","Sowkhya P", "Suresh R",6, "Sanjana Prakash", "Mariya Dilip",10).modify_ratings()
    new FoosballMatch("4638499000000416011","Suresh R", "Sanjana Prakash",10, "Mariya Dilip", "Balamurugan K E",9).modify_ratings()
    new FoosballMatch("4638499000000413003","Balaji The Boss", "Sanjana Prakash",10, "Suresh R", "Megavarshini S",3).modify_ratings()
    new FoosballMatch("4638499000000407014","Suresh R", "Balamurugan K E",10, "Mariya Dilip", "Megavarshini S",9).modify_ratings()
    new FoosballMatch("4638499000000407003","Mariya Dilip", "Balamurugan K E",10, "Balaji The Boss", "Megavarshini S",7).modify_ratings()
    new FoosballMatch("4638499000000399019","Balaji The Boss", "Srikesh B",10, "Suresh R", "Vasanth Kandasamy" ,8).modify_ratings()
    new FoosballMatch("4638499000000396034","Balaji The Boss", "Vasanth Kandasamy" ,6, "Suresh R", "Srikesh B",10).modify_ratings()
    new FoosballMatch("4638499000000396003","Suresh R", "Srikesh B",10, "Mariya Dilip", "Vasanth Kandasamy" ,8).modify_ratings()
    new FoosballMatch("4638499000000386008","Mariya Dilip", "Vasanth Kandasamy" ,3, "Balaji The Boss", "Srikesh B",10).modify_ratings()
    new FoosballMatch("4638499000000383003","Balaji The Boss", "Vasanth Kandasamy" ,10, "Mariya Dilip", "Megavarshini S",6).modify_ratings()
    new FoosballMatch("4638499000000373013","Balaji The Boss", "Megavarshini S",5, "Sowkhya P", "Srikesh B",10).modify_ratings()
    new FoosballMatch("4638499000000373003","Suresh R", "Megavarshini S",2, "Sharan Sharathi", "Srikesh B",10).modify_ratings()
    new FoosballMatch("4638499000000370014","Sowkhya P", "Vasanth Kandasamy" ,10, "Sanjana Prakash", "Sharan Sharathi",6).modify_ratings()
    new FoosballMatch("4638499000000367006","Sowkhya P", "Sanjana Prakash",7, "Sharan Sharathi", "Megavarshini S",10).modify_ratings()
    new FoosballMatch("4638499000000364009","Suresh R", "Balamurugan K E",7, "Mariya Dilip", "Srikesh B",10).modify_ratings()
    new FoosballMatch("4638499000000359003","Mariya Dilip", "Balamurugan K E",7, "Suresh R", "Vasanth Kandasamy" ,10).modify_ratings()
    new FoosballMatch("4638499000000338028","Sharan Sharathi", "Megavarshini S",10, "Balaji The Boss", "Mariya Dilip",2).modify_ratings()
    new FoosballMatch("4638499000000337027","Mariya Dilip", "Megavarshini S",5, "Balaji The Boss", "Srikesh B",10).modify_ratings()
    new FoosballMatch("4638499000000335040","Suresh R", "Srikesh B",10, "Sharan Sharathi", "Vasanth Kandasamy" ,8).modify_ratings()
    new FoosballMatch("4638499000000334020","Balaji The Boss", "Rohini L",10, "Balamurugan K E", "Megavarshini S",9).modify_ratings()
    new FoosballMatch("4638499000000334008","Rohini L", "Balamurugan K E",10, "Sowkhya P", "Balaji The Boss",9).modify_ratings()
    new FoosballMatch("4638499000000330038","Rohini L", "Suresh R",5, "Sharan Sharathi", "Vasanth Kandasamy" ,10).modify_ratings()
    new FoosballMatch("4638499000000329003","Suresh R", "Vasanth Kandasamy" ,10, "Mariya Dilip", "Megavarshini S",4).modify_ratings()
    new FoosballMatch("4638499000000328033","Rohini L", "Vasanth Kandasamy" ,9, "Mariya Dilip", "Suresh R",10).modify_ratings()
    new FoosballMatch("4638499000000323008","Suresh R", "Srikesh B",10, "Balaji The Boss", "Megavarshini S",7).modify_ratings()
    new FoosballMatch("4638499000000314026","Mariya Dilip", "Vasanth Kandasamy" ,10, "Sharan Sharathi", "Balamurugan K E",4).modify_ratings()
    new FoosballMatch("4638499000000310033","Suresh R", "Megavarshini S",8, "Balamurugan K E", "Srikesh B",10).modify_ratings()
    new FoosballMatch("4638499000000310005","Balaji The Boss", "Srikesh B",10, "Sharan Sharathi", "Sanjana Prakash",4).modify_ratings()
    new FoosballMatch("4638499000000309003","Suresh R", "Vasanth Kandasamy" ,7, "Mariya Dilip", "Balamurugan K E",10).modify_ratings()
    new FoosballMatch("4638499000000300037","Balaji The Boss", "Vasanth Kandasamy" ,4, "Mariya Dilip", "Srikesh B",10).modify_ratings()
    new FoosballMatch("4638499000000297031","Sowkhya P", "Megavarshini S",6, "Sharan Sharathi", "Balamurugan K E",10).modify_ratings()
    new FoosballMatch("4638499000000297019","Balaji The Boss", "Suresh R",9, "Mariya Dilip", "Sanjana Prakash",10).modify_ratings()
    new FoosballMatch("4638499000000295015","Sharan Sharathi", "Srikesh B",10, "Balaji The Boss", "Vasanth Kandasamy" ,5).modify_ratings()
    new FoosballMatch("4638499000000294033","Mariya Dilip", "Balamurugan K E",10, "Rohini L", "Sanjana Prakash",6).modify_ratings()
    new FoosballMatch("4638499000000293013","Sowkhya P", "Sharan Sharathi",4, "Rohini L", "Vasanth Kandasamy" ,10).modify_ratings()
    new FoosballMatch("4638499000000292021","Rohini L", "Vasanth Kandasamy" ,8, "Suresh R", "Megavarshini S",10).modify_ratings()
    new FoosballMatch("4638499000000291033","Rohini L", "Vasanth Kandasamy" ,8, "Balaji The Boss", "Mariya Dilip",10).modify_ratings()
    new FoosballMatch("4638499000000291005","Rohini L", "Vasanth Kandasamy" ,3, "Balaji The Boss", "Sanjana Prakash",10).modify_ratings()
    new FoosballMatch("4638499000000290015","Balaji The Boss", "Balamurugan K E",4, "Mariya Dilip", "Sanjana Prakash",10).modify_ratings()
    new FoosballMatch("4638499000000290007","Sowkhya P", "Balamurugan K E",5, "Mariya Dilip", "Sharan Sharathi",10).modify_ratings()
    new FoosballMatch("4638499000000289027","Suresh R", "Balamurugan K E",9, "Sharan Sharathi", "Megavarshini S",10).modify_ratings()
    new FoosballMatch("4638499000000285037","Sowkhya P", "Vasanth Kandasamy" ,5, "Sharan Sharathi", "Mariya Dilip",10).modify_ratings()
    new FoosballMatch("4638499000000284005","Mariya Dilip", "Srikesh B",6, "Balaji The Boss", "Sharan Sharathi",10).modify_ratings()
    new FoosballMatch("4638499000000276011","Mariya Dilip", "Megavarshini S",6, "Balaji The Boss", "Vasanth Kandasamy" ,10).modify_ratings()
    new FoosballMatch("4638499000000273011","Sowkhya P", "Srikesh B",10, "Sharan Sharathi", "Mariya Dilip",9).modify_ratings()
    new FoosballMatch("4638499000000270005","Srikesh B", "Vasanth Kandasamy" ,6, "Balaji The Boss", "Megavarshini S",10).modify_ratings()
    new FoosballMatch("4638499000000265017","Sharan Sharathi", "Megavarshini S",10, "Balaji The Boss", "Balamurugan K E",7).modify_ratings()
    new FoosballMatch("4638499000000264011","Sharan Sharathi", "Rohini L",10, "Sanjana Prakash", "Suresh R",8).modify_ratings()
    new FoosballMatch("4638499000000263007","Mariya Dilip", "Balamurugan K E",6, "Balaji The Boss", "Vasanth Kandasamy" ,10).modify_ratings()
    new FoosballMatch("4638499000000259021","Sowkhya P", "Suresh R",10, "Sanjana Prakash", "Mariya Dilip",7).modify_ratings()
    new FoosballMatch("4638499000000259011","Sharan Sharathi", "Balamurugan K E",10, "Suresh R", "Megavarshini S",7).modify_ratings()
    new FoosballMatch("4638499000000258017","Sharan Sharathi", "Sanjana Prakash",8, "Balaji The Boss", "Megavarshini S",10).modify_ratings()
    new FoosballMatch("4638499000000258007","Rohini L", "Megavarshini S",10, "Sowkhya P", "Sanjana Prakash",5).modify_ratings()
    new FoosballMatch("4638499000000256023","Suresh R", "Vasanth Kandasamy" ,5, "Mariya Dilip", "Srikesh B",10).modify_ratings()
    new FoosballMatch("4638499000000254003","Suresh R", "Megavarshini S",7, "Balaji The Boss", "Sanjana Prakash",10).modify_ratings()
    new FoosballMatch("4638499000000253029","Srikesh B", "Sanjana Prakash",4, "Balaji The Boss", "Vasanth Kandasamy" ,10).modify_ratings()
    new FoosballMatch("4638499000000253003","Mariya Dilip", "Balamurugan K E",10, "Rohini L", "Vasanth Kandasamy" ,5).modify_ratings()
    new FoosballMatch("4638499000000243009","Rohini L", "Vasanth Kandasamy" ,3, "Mariya Dilip", "Sanjana Prakash",10).modify_ratings()
    new FoosballMatch("4638499000000242013","Balaji The Boss", "Sanjana Prakash",6, "Mariya Dilip", "Vasanth Kandasamy" ,10).modify_ratings()
    new FoosballMatch("4638499000000241019","Sharan Sharathi", "Megavarshini S",10, "Rohini L", "Balamurugan K E",2).modify_ratings()
    new FoosballMatch("4638499000000241015","Mariya Dilip", "Balamurugan K E",10, "Sanjana Prakash", "Vasanth Kandasamy" ,8).modify_ratings()
    new FoosballMatch("4638499000000238009","Sharan Sharathi", "Megavarshini S",6, "Balaji The Boss", "Suresh R",10).modify_ratings()
    new FoosballMatch("4638499000000234005","Sharan Sharathi", "Balamurugan K E",8, "Suresh R", "Megavarshini S",10).modify_ratings()
    new FoosballMatch("4638499000000231131","Sanjana Prakash", "Balamurugan K E",10, "Mariya Dilip", "Rohini L",8).modify_ratings()
    new FoosballMatch("4638499000000231089","Mariya Dilip", "Balamurugan K E",10, "Rohini L", "Sanjana Prakash",7).modify_ratings()
    new FoosballMatch("4638499000000222011","Sharan Sharathi", "Sanjana Prakash",10, "Mariya Dilip", "Megavarshini S",4).modify_ratings()
    new FoosballMatch("4638499000000216011","Rohini L", "Balamurugan K E",3, "Mariya Dilip", "Megavarshini S",10).modify_ratings()
    new FoosballMatch("4638499000000202017","Sharan Sharathi", "Balamurugan K E",10, "Rohini L", "Megavarshini S",8).modify_ratings()

    console.log(PlayerMap);


    // Example usage
    const map = new Map();
    map.set(1, { name: "Alice", rating1: 1200, rating2: 1250 });
    map.set(2, { name: "Bob", rating1: 1100, rating2: 1180 });
    map.set(3, { name: "Charlie", rating1: 1300, rating2: 1350 });

    const table = createTableFromMap(PlayerMap);
    // Append the table to the body (or any other container)
    document.body.appendChild(table);

    // p1 = new FoosballPlayer("Joseph")
    // p2 = new FoosballPlayer("Bala K E")
    // p3 = new FoosballPlayer("Suresh R")
    // p4 = new FoosballPlayer("Sharan")
    // console.log(p1.stringer())

    // m1 = new FoosballMatch(1, "Joseph", "Bala K E", "Suresh R", "Sharan", 10, 9)
    // console.log(m1.stringer())

    // m1.modify_ratings()

    // m2 = new FoosballMatch(1, "Joseph", "Bala K E", "Suresh R", "Sharan", 9, 10)
    // m2.modify_ratings()

    // console.log(p1.stringer())

    // console.log(PlayerMap);
    // console.log(PlayerMap.get("Joseph").stringer());
});


function createTableFromMap(map) {
    // Create a table element
    const table = document.createElement("table");

    // Add some styling (optional)
    table.style.borderCollapse = "collapse";
    table.style.width = "100%";
    table.style.border = "1px solid #ddd";
    table.style.textAlign = "left";

    // Create a header row
    const headerRow = document.createElement("tr");
    const headers = ["Name", "Defense Rating", "Attack Rating"];
    headers.forEach((header) => {
        const th = document.createElement("th");
        th.textContent = header;
        th.style.border = "1px solid #ddd";
        th.style.padding = "8px";
        th.style.backgroundColor = "#f2f2f2";
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Iterate over the map and create rows
    map.forEach((value) => {
        const row = document.createElement("tr");

        // Create cells for name, rating1, and rating2
        const nameCell = document.createElement("td");
        nameCell.textContent = value.name;
        nameCell.style.border = "1px solid #ddd";
        nameCell.style.padding = "8px";

        const rating1Cell = document.createElement("td");
        rating1Cell.textContent = Math.ceil(value.def_rat);
        rating1Cell.style.border = "1px solid #ddd";
        rating1Cell.style.padding = "8px";

        const rating2Cell = document.createElement("td");
        rating2Cell.textContent = Math.ceil(value.att_rat);
        rating2Cell.style.border = "1px solid #ddd";
        rating2Cell.style.padding = "8px";

        // Append cells to the row
        row.appendChild(nameCell);
        row.appendChild(rating1Cell);
        row.appendChild(rating2Cell);

        // Append the row to the table
        table.appendChild(row);
    });

    // Return the table element
    return table;
}


function expected_win_prob(rat_a, rat_b) {
	return 1 / (1 + 10 ** ((rat_b - rat_a) / CONFIG2.SCALE_FACTOR))
} 

function rating_change(rat_a, rat_b, outcome) {
	// 1 means a won, 0 means b won
    a_win_prob = expected_win_prob(rat_a, rat_b)
    b_win_prob = expected_win_prob(rat_b, rat_a)
    // console.log("a_win_prob: " + a_win_prob)
    // console.log("b_win_prob: " + b_win_prob)
    new_a = rat_a + CONFIG2.K_FACTOR * (outcome - a_win_prob)
    new_b = rat_b + CONFIG2.K_FACTOR * ((1 - outcome) - b_win_prob)
    return {new_a, new_b}
    // console.log("new_a: " + new_a)
    // console.log("new_b: " + new_b)
}

class FoosballPlayer {
    constructor(name, def_rat = 1000, att_rat = 1000) {
        this.name = name;
        this.def_rat = def_rat;
        this.att_rat = att_rat;
        PlayerMap.set(this.name, this);
    }

    stringer() {
        return `
            Name: ${this.name}
            Attack Rating: ${this.att_rat}
            Defense Rating: ${this.def_rat}
        `;
    }
}

class FoosballMatch {
    constructor(match_id, t1_def_name, t1_att_name, t1_score, t2_def_name, t2_att_name, t2_score) {
        this.match_id = match_id
        this.t1_def_name = t1_def_name      
        this.t1_att_name = t1_att_name
        this.t1_score = t1_score
        this.t2_def_name = t2_def_name
        this.t2_att_name = t2_att_name
        this.t2_score = t2_score

        if (PlayerMap.has(this.t1_def_name)) {
            this.t1_def = PlayerMap.get(this.t1_def_name)
        } else {
            this.t1_def = new FoosballPlayer(this.t1_def_name)
        }

        if (PlayerMap.has(this.t1_att_name)) {
            this.t1_att = PlayerMap.get(this.t1_att_name)
        } else {
            this.t1_att = new FoosballPlayer(this.t1_att_name)
        }        

        if (PlayerMap.has(this.t2_def_name)) {
            this.t2_def = PlayerMap.get(this.t2_def_name)
        } else {
            this.t2_def = new FoosballPlayer(this.t2_def_name)
        }

        if (PlayerMap.has(this.t2_att_name)) {
            this.t2_att = PlayerMap.get(this.t2_att_name)
        } else {
            this.t2_att = new FoosballPlayer(this.t2_att_name)
        }
    }

    modify_ratings() {
        var t1_combo_rat = (this.t1_att.att_rat + this.t1_def.def_rat) / 2
        var t2_combo_rat = (this.t2_att.att_rat + this.t2_def.def_rat) / 2
        var outcome;
        if (this.t1_score > this.t2_score) {outcome = 1} else {outcome = 0}
        // console.log(`outcome: ${outcome}`)

        var mod_info = rating_change(t1_combo_rat, t2_combo_rat, outcome)
        var t1_delta = mod_info.new_a - t1_combo_rat
        var t2_delta = mod_info.new_b - t2_combo_rat
        
        // console.log(`${this.t1_att.name}'s Old Att Rating: ${this.t1_att.att_rat}`)
        this.t1_att.att_rat = this.t1_att.att_rat + t1_delta / 2
        // console.log(`${this.t1_att.name}'s New Att Rating: ${this.t1_att.att_rat}`)

        // console.log(`${this.t1_def.name}'s Old Def Rating: ${this.t1_def.def_rat}`)
        this.t1_def.def_rat = this.t1_def.def_rat + t1_delta / 2
        // console.log(`${this.t1_def.name}'s New Def Rating: ${this.t1_def.def_rat}`)

        // console.log(`${this.t2_att.name}'s Old Att Rating: ${this.t2_att.att_rat}`)
        this.t2_att.att_rat = this.t2_att.att_rat + t2_delta / 2
        // console.log(`${this.t2_att.name}'s New Att Rating: ${this.t2_att.att_rat}`)

        // console.log(`${this.t2_def.name}'s Old Def Rating: ${this.t2_def.def_rat}`)
        this.t2_def.def_rat = this.t2_def.def_rat + t2_delta / 2
        // console.log(`${this.t2_def.name}'s New Def Rating: ${this.t2_def.def_rat}`)
    }

    stringer() {
        return `
            ${this.t1_att.name} & ${this.t1_def.name} ${this.t1_score} : ${this.t2_score} ${this.t2_att.name} & ${this.t2_def.name}
        `
    }
}