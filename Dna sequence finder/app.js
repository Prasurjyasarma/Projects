var btn = document.querySelector("button");
var body = document.querySelector("body");

btn.addEventListener("click", function findSequences() {
  var dna = document.getElementById("sequenceInput").value.toUpperCase();
  var sequenceToFind = document
    .getElementById("sequenceToFindInput")
    .value.toUpperCase();

  //g=allow all the matches to find rather dn stopping in one and
  //i= non case sensative search
  var regex = new RegExp(sequenceToFind, "gi"); //RegExp is a build in constructor to find sequence in strings
  var matches = [];
  var match;
  //exec=is a build in method in RegExp that searches a given string for patters
  while ((match = regex.exec(dna)) !== null) {
    matches.push({ sequence: match[0], location: match.index });
  }
  console.log("Total =", matches.length);
  var resultContainer = document.getElementById("resultContainer");
  var totalEl = document.getElementById("totalEl");
  resultContainer.innerHTML = "";
  totalEl.innerHTML = "";

  if (matches.length > 0) {
    var total = document.createElement("div");
    total.className = "totalel";
    total.innerHTML = `Total sequences found ${matches.length}`;
    totalEl.appendChild(total);
    matches.forEach(function (match) {
      var card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `<strong>Sequence:</strong> ${match.sequence}<br><strong>Location:</strong> ${match.location}`;
      resultContainer.appendChild(card);
    });
  } else {
    var noMatchMessage = document.createElement("p");
    noMatchMessage.textContent = "No matches found.";
    resultContainer.appendChild(noMatchMessage);
  }
});
