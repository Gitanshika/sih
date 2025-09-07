let map;

    // Food Data (with sample coordinates)
    const foods = [
      {name: "Thekua", desc: "A traditional deep-fried sweet, popular during festivals like Chhath Puja", locations: [ {lat:23.371574648381465,lng:85.3294121236865},{lat:23.371661621364716, lng:85.32917394477005},
{lat:23.375663356856823, lng:85.33362221594939},
{lat:23.372074297030125,lng:85.33853412638231}, 
{lat:23.379252233967943,lng:85.32533116809869}]},
      {name: "Handia", desc: "The traditional rice beer popular in Jharkhand,", locations: [{lat:23.3324 ,lng:85.3808},{lat:23.3330,lng:85.3790},{lat: 23.3315 ,lng:85.3815}]},
      {name: "Chilika Curry", desc: "A hearty curry made from split chickpeas cooked with spices, served with rice ", locations:[{lat: 23.39780, lng: 85.381},{lat: 23.297450290666053, lng: 85.27854222671743},{lat: 23.395423799419063, lng: 85.31552315160828}]},
      {name: "Chhilka Roti", desc: "A traditional Jharkhandi dish made with rice flour, served with chutney or curry.", locations: [  {lat:23.401599363623895, lng:85.374517},{lat:23.376389461574533, lng:85.32779107221168},{lat:23.368510672457255, lng:85.32761941083814},{lat: 23.33834106324448,  lng: 85.30671581877779}]},
      { name: "Tilkut",desc: "Traditional sweet of Jharkhand made from sesame seeds and jaggery.",locations: [{ lat: 23.354824729520036, lng: 85.34205433681987 },{ lat: 23.360040946536255, lng: 85.3267250906116 },{ lat: 23.375065552465795, lng: 85.31661551282279 },{ lat: 23.377783653219083, lng: 85.32052080907121 },{ lat: 23.37553826964403, lng: 85.32558481959119 }]},
      {
  name: "Litti Chokha",
  desc: "Traditional Bihari-Jharkhandi dish made of roasted wheat balls stuffed with sattu, served with mashed vegetables.",
  locations: [
    { name: "Litti Maharaj Sadhu Ji (Jhanda Chowk, Doranda)", lat: 23.3561, lng: 85.3548 },
    { name: "Bhola Litti (Doranda – Tulsi Chowk)", lat: 23.3561, lng: 85.3548 },
    { name: "Sunil Litti Shop (Doranda - Nivaranpur)", lat: 23.3561, lng: 85.3548 },
    { name: "Dhamaal Litti (Bazaar Mandir, Doranda Bazaar)", lat: 23.3561, lng: 85.3548 },
    { name: "Bhola Litti (Gandhi Nagar, Kanke Road)", lat: 23.4333, lng: 85.3167 },
    { name: "Sadabahar Litti Shop (Namkum)", lat: 23.33235, lng: 85.38079 } ]},
    {name: "Dhuska",desc: "A popular deep-fried dish from Jharkhand, made with rice and lentil batter, often served with spicy chutney or curry.",locations: [{ name: "Dhuska Stall 1", lat: 23.373611195145543, lng: 85.32009530242401 },{ name: "Dhuska Stall 2", lat: 23.38101698517552, lng: 85.33262658269375 },{ name: "Dhuska Stall 3", lat: 23.393260947331047, lng: 85.32907303715804 }
  ]},
  {name: "Bamboo Shoot Curry",
  desc: "A traditional dish of Jharkhand made with tender bamboo shoots cooked in spices, offering a unique earthy flavor.",
  locations: [
    { name: "Bamboo Curry Spot 1", lat: 23.344817628454628, lng: 85.32532421034749 },
    { name: "Bamboo Curry Spot 2", lat: 23.33157784542342, lng: 85.31708446441671 },
    { name: "Bamboo Curry Spot 3", lat: 23.36467482725793, lng: 85.32635417858884 },
    { name: "Bamboo Curry Spot 4", lat: 23.372238692613536, lng: 85.33322063353116 },
    { name: "Bamboo Curry Spot 5", lat: 23.376650748138655, lng: 85.34077373396771 }
  ]},
  {
  name: "Malpua",
  desc: "A sweet dish made from flour, milk, and sugar, deep-fried and soaked in syrup. A festive delicacy of Jharkhand.",
  locations: [
    { name: "Malpua Spot 1", lat: 23.366205162280412, lng: 85.3236957443628 },
    { name: "Malpua Spot 2", lat: 23.3559388455066, lng: 85.24128547596473 },
    { name: "Malpua Spot 3", lat: 23.38778266111697, lng: 85.32522751821814 },
    { name: "Malpua Spot 4", lat: 23.377473170982057, lng: 85.35279675392212 },
    { name: "Malpua Spot 5", lat: 23.38934463510168, lng: 85.31910102139504 }
  ]},
  {
  name: "Koinar Saag Curry",
  desc: "A traditional Jharkhand dish made from tender Koinar (Bauhinia variegata) leaves, cooked with spices for a rich earthy flavor.",
  locations: [
    { name: "Koinar Saag Spot 1", lat: 23.40040052146158, lng: 85.3892660275725 },
    { name: "Koinar Saag Spot 2", lat: 23.376451889945024, lng: 85.35287381637819 },
    { name: "Koinar Saag Spot 3", lat: 23.36163938586926, lng: 85.31648160450486 },
    { name: "Koinar Saag Spot 4", lat: 23.388111632679138, lng: 85.32575131867698 },
    { name: "Koinar Saag Spot 5", lat: 23.3263348378347, lng: 85.30137540363175 }
  ]},
];
  

    // Initialize Main Map
    function initMap() {
      let locations = {lat:23.346270738545847,lng:85.30483015828166}; 
      map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: locations,
      });
      new google.maps.Marker({position: locations, map: map, title: "Starting Point"});
    }

    // Load Food Cards
    window.onload = () => {
      const foodSection = document.getElementById("food-section");
      foods.forEach((food, index) => {
        let card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<h3>${food.name}</h3><p>${food.desc}</p>
                          <button onclick="openModal(${index})">View Locations</button>`;
        foodSection.appendChild(card);
      });
    };

    // Modal Functions
    function openModal(index) {
      let food = foods[index];
      document.getElementById("foodTitle").innerText = food.name;
      document.getElementById("foodDesc").innerText = food.desc;

      let modal = document.getElementById("foodModal");
      modal.style.display = "flex";

      // Init food-specific map
      let foodMap = new google.maps.Map(document.getElementById("foodMap"), {
        zoom: 12,
        center: food.locations[0],
      });
      food.locations.forEach(loc => {
        new google.maps.Marker({position: loc, map: foodMap});
      });
    }

    function closeModal() {
      document.getElementById("foodModal").style.display = "none";
    }