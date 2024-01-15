init()

var dateMap = {};
var dom_date = document.getElementById("datepicker");
var dom_tithi = document.getElementById("tithi");
var tithis = {
    0: "Aunsi",
    1: "Prathama",
    2: "Dwitiya",
    3: "Tritiya",
    4: "Chaturthi",
    5: "Panchami",
    6: "Sasthi",
    7: "Saptami",
    8: "Ashtami",
    9: "Nawami",
    10: "Dashami",
    11: "Ekadashi",
    12: "Duadashi",
    13: "Trayodashi",
    14: "Chaturdashi",
    15: "Purnima"
};

function loadcsv() {
    Papa.parse("/tithi.csv", {
	download: true,
	step: function(row) {
		// console.log("Row:", row.data);
        let dateKey = row.data[0] + "-" + row.data[1] + "-" + row.data[2];
        dateMap[dateKey] = row.data[3];
	},
	complete: function() {
		console.log("Done loading CSV!");
        // console.log("Date Object for 2025-1-1: ", dateMap["2025-1-1"]);
	}
});
}

function formatTithi(tithival) {
    let paksha="", tithi, color;

    if (tithival == 0) {
        tithi = "Purnima";
        color = "LightBlue";
    } else if (tithival == 15) {
        tithi = "Aunsi";
        color = "Pink";
    } else {
        tithi = tithis[tithival % 15]
        if (tithival >= 15) {
            paksha="Shukla Paksha";
            color = "LightBlue";
        } else {
            paksha="Krishna Paksha";
            color = "Pink";
        }
    }

    let formattedTithi = `<div style="color: ${color};"><B>${tithi} ${paksha}</B></div>`;
    return formattedTithi;
}

function dateChange() {
    dom_tithi.innerHTML = formatTithi(dateMap[dom_date.value]);
}

function init() {
    loadcsv();
    toggleDarkMode();
}

function toggleDarkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  element.classList.toggle("light-mode");
}
