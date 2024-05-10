const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
  ];
  
//   console.log(indianStates);
const districts = {
    'Gujarat':[
        "Ahmedabad",
        "Amreli",
        "Anand",
        "Aravalli",
        "Banaskantha",
        "Bharuch",
        "Bhavnagar",
        "Botad",
        "Chhota Udaipur",
        "Dahod",
        "Dang",
        "Devbhoomi Dwarka",
        "Gandhinagar",
        "Gir Somnath",
        "Jamnagar",
        "Junagadh",
        "Kheda",
        "Kutch",
        "Mahisagar",
        "Mehsana",
        "Morbi",
        "Narmada",
        "Navsari",
        "Panchmahal",
        "Patan",
        "Porbandar",
        "Rajkot",
        "Sabarkantha",
        "Surat",
        "Surendranagar",
        "Tapi",
        "Vadodara",
        "Valsad"
      ],
    'AndhraPradesh':[
        "Anantapur",
        "Chittoor",
        "East Godavari",
        "Alluri Sitarama Raju",
        "Anakapalli",
        "Annamaya",
        "Bapatla",
        "Eluru",
        "Guntur",
        "Kadapa",
        "Kakinada",
        "Konaseema",
        "Krishna",
        "Kurnool",
        "Manyam N T Rama Rao",
        "Nandyal",
        "Nellore",
        "Palnadu",
        "Prakasam",
        "Sri Balaji",
        "Sri Satya Sai",
        "Srikakulam",
        "Visakhapatnam",
        "Vizianagaram",
        "West Godavari"
    ],
    'arunachalPradesh':[
        "Anjaw",
        "Bichom",
        "Siang",
        "Changlang",
        "Dibang Valley",
        "East Kameng",
        "East Siang",
        "Kamle",
        "Keyi Panyor",
        "Kra Daadi",
        "Kurung Kumey",
        "Lepa Rada",
        "Lohit",
        "Longding",
        "Lower Dibang Valley",
        "Lower Siang",
        "Lower Subansiri",
        "Namsai",
        "Pakke Kessang",
        "Papum Pare",
        "Shi Yomi",
        "Tawang",
        "Tirap",
        "Upper Siang",
        "Upper Subansiri",
        "West Kameng",
        "West Siang"
    ],
    'assam':[
        "Baksa",
        "Barpeta",
        "Bongaigaon",
        "Cachar",
        "Charaideo",
        "Chirang",
        "Darrang",
        "Dhemaji",
        "Dhubri",
        "Dibrugarh",
        "Dima Hasao",
        "Goalpara",
        "Golaghat",
        "Jorhat",
        "Kamrup Metropolitan",
        "Kamrup",
        "Karbi Anglong",
        "Karimganj",
        "Kokrajhar",
        "Lakhimpur",
        "Majuli",
        "Morigaon",
        "Nagaon",
        "Nalbari",
        "Sivasagar",
        "Sonitpur",
        "South Salmara-Mankachar",
        "Tinsukia",
        "Udalguri",
        "West Karbi Anglong",
        "Biswanath",
        "Hojai",
        "Bjali",
        "Tamulpur",
        "Hailakandi"
    ],
    'bihar':[
        "Araria",
        "Arwal",
        "Aurangabad",
        "Banka",
        "Begusarai",
        "Bhagalpur",
        "Bhojpur",
        "Buxar",
        "Darbhanga",
        "East Champaran",
        "Gaya",
        "Gopalganj",
        "Jamui",
        "Jehanabad",
        "Kaimur",
        "Katihar",
        "Khagaria",
        "Kishanganj",
        "Lakhisarai",
        "Madhepura",
        "Madhubani",
        "Munger",
        "Muzaffarpur",
        "Nalanda",
        "Nawada",
        "Patna",
        "Purnia",
        "Rohtas",
        "Saharsa",
        "Samastipur",
        "Saran",
        "Sheikhpura",
        "Sheohar",
        "Sitamarhi",
        "Siwan",
        "Supaul",
        "Vaishali",
        "West Champaran"
    ],   
    'chhattisgarh':[
        "Balod",
        "Baloda Bazar",
        "Balrampur",
        "Bastar",
        "Bemetara",
        "Bijapur",
        "Bilaspur",
        "Dantewada",
        "Dhamtari",
        "Durg",
        "Gariaband",
        "Janjgir-Champa",
        "Jashpur",
        "Kanker",
        "Kawardha",
        "Kondagaon",
        "Korba",
        "Koriya",
        "Mahasamund",
        "Mungeli",
        "Narayanpur",
        "Raigarh",
        "Raipur",
        "Rajnandgaon",
        "Sukma",
        "Surajpur",
        "Surguja"
    ],
    'goa':[
        "North Goa",
        "South Goa"
    ],
    'haryana':[
        "Ambala",
        "Bhiwani",
        "Charkhi Dadri",
        "Faridabad",
        "Fatehabad",
        "Gurugram (Gurgaon)",
        "Hisar",
        "Jhajjar",
        "Jind",
        "Kaithal",
        "Karnal",
        "Kurukshetra",
        "Mahendragarh",
        "Nuh",
        "Palwal",
        "Panchkula",
        "Panipat",
        "Rewari",
        "Rohtak",
        "Sirsa",
        "Sonipat",
        "Yamunanagar"
    ],
    'himachalPradesh':[
        "Bilaspur",
        "Chamba",
        "Hamirpur",
        "Kangra",
        "Kinnaur",
        "Kullu",
        "Lahaul and Spiti",
        "Mandi",
        "Shimla",
        "Sirmaur",
        "Solan",
        "Una"
    ],
    'jharkhand':[
        "Bokaro",
        "Chatra",
        "Deoghar",
        "Dhanbad",
        "Dumka",
        "East Singhbhum",
        "Garhwa",
        "Giridih",
        "Godda",
        "Gumla",
        "Hazaribagh",
        "Jamtara",
        "Khunti",
        "Kodarma",
        "Latehar",
        "Lohardaga",
        "Pakur",
        "Palamu",
        "Ramgarh",
        "Ranchi",
        "Sahibganj",
        "Saraikela-Kharsawan",
        "Simdega",
        "West Singhbhum"
    ],
    'karnataka':[
        "Bagalkot",
        "Ballari (Bellary)",
        "Belagavi (Belgaum)",
        "Bengaluru (Bangalore) Rural",
        "Bengaluru (Bangalore) Urban",
        "Bidar",
        "Chamarajanagar",
        "Chikkaballapur",
        "Chikkamagaluru (Chikmagalur)",
        "Chitradurga",
        "Dakshina Kannada",
        "Davanagere",
        "Dharwad",
        "Gadag",
        "Hassan",
        "Haveri",
        "Kalaburagi (Gulbarga)",
        "Kodagu (Coorg)",
        "Kolar",
        "Koppal",
        "Mandya",
        "Mysuru (Mysore)",
        "Raichur",
        "Ramanagara",
        "Shivamogga (Shimoga)",
        "Tumakuru (Tumkur)",
        "Udupi",
        "Uttara Kannada (Karwar)",
        "Vijayapura (Bijapur)",
        "Yadgir"
    ],
    'kerala':[
        "Thiruvananthapuram",
        "Kollam",
        "Pathanamthitta",
        "Alappuzha",
        "Kottayam",
        "Idukki",
        "Ernakulam",
        "Thrissur",
        "Palakkad",
        "Malappuram",
        "Kozhikode",
        "Wayanad",
        "Kannur",
        "Kasaragod"
    ],
    'madhyaPradesh':[
        "Bhopal",
        "Raisen",
        "Rajgarh",
        "Sehore",
        "Vidisha",
        "Morena",
        "Sheopur",
        "Bhind",
        "Gwalior",
        "Ashoknagar",
        "Shivpuri",
        "Datia",
        "Guna",
        "Alirajpur",
        "Barwani",
        "Burhanpur",
        "Indore",
        "Dhar",
        "Jhabua",
        "Khandwa",
        "Khargone",
        "Balaghat",
        "Chhindwara",
        "Jabalpur",
        "Katni",
        "Mandla",
        "Narsinghpur",
        "Seoni",
        "Dindori",
        "Pandhurna",
        "Betul",
        "Harda",
        "Narmadapuram",
        "Rewa",
        "Satna",
        "Sidhi",
        "Singrauli",
        "Mauganj",
        "Maihar",
        "Chhatarpur",
        "Damoh",
        "Panna",
        "Sagar",
        "Tikamgarh",
        "Niwari",
        "Anuppur",
        "Shahdol",
        "Umaria",
        "Agar Malwa",
        "Dewas",
        "Mandsaur",
        "Neemuch",
        "Ratlam",
        "Shajapur",
        "Ujjain"
    ],
    'maharashtra':[
        "Ahmednagar",
        "Akola",
        "Amravati",
        "Aurangabad",
        "Beed",
        "Bhandara",
        "Buldhana",
        "Chandrapur",
        "Dhule",
        "Gadchiroli",
        "Gondia",
        "Hingoli",
        "Jalgaon",
        "Jalna",
        "Kolhapur",
        "Latur",
        "Mumbai City",
        "Mumbai Suburban",
        "Nagpur",
        "Nanded",
        "Nandurbar",
        "Nashik",
        "Osmanabad",
        "Palghar",
        "Parbhani",
        "Pune",
        "Raigad",
        "Ratnagiri",
        "Sangli",
        "Satara",
        "Sindhudurg",
        "Solapur",
        "Thane",
        "Wardha",
        "Washim",
        "Yavatmal"
    ],
    'manipur':[
        "Bishnupur",
        "Chandel",
        "Churachandpur",
        "Imphal East",
        "Imphal West",
        "Jiribam",
        "Kakching",
        "Kamjong",
        "Kangpokpi",
        "Noney",
        "Pherzawl",
        "Senapati",
        "Tamenglong",
        "Tengnoupal",
        "Thoubal",
        "Ukhrul"
    ],
    'meghalaya':[
        "East Khasi Hills",
        "West Khasi Hills",
        "South West Khasi Hills",
        "Ri-Bhoi",
        "East Jaintia Hills",
        "West Jaintia Hills",
        "East Garo Hills",
        "West Garo Hills",
        "South Garo Hills",
        "North Garo Hills",
        "South West Garo Hills"
    ],
    'mizoram':[
        "Aizawl",
        "Champhai",
        "Kolasib",
        "Lawngtlai",
        "Lunglei",
        "Mamit",
        "Saiha",
        "Serchhip"
    ],
    'nagaland':[
        "Dimapur",
        "Kiphire",
        "Kohima",
        "Longleng",
        "Mokokchung",
        "Mon",
        "Peren",
        "Phek",
        "Tuensang",
        "Wokha",
        "Zunheboto"
    ],
    'odisha':[
        "Angul",
        "Balangir",
        "Balasore (Baleswar)",
        "Bargarh",
        "Bhadrak",
        "Boudh (Bauda)",
        "Cuttack",
        "Deogarh",
        "Dhenkanal",
        "Gajapati",
        "Ganjam",
        "Jagatsinghpur",
        "Jajpur",
        "Jharsuguda",
        "Kalahandi",
        "Kandhamal",
        "Kendrapara",
        "Kendujhar (Keonjhar)",
        "Khordha",
        "Koraput",
        "Malkangiri",
        "Mayurbhanj",
        "Nabarangpur",
        "Nayagarh",
        "Nuapada",
        "Puri",
        "Rayagada",
        "Sambalpur",
        "Subarnapur (Sonepur)",
        "Sundargarh"
    ],
    'punjab':[
        "Amritsar",
        "Barnala",
        "Bathinda",
        "Faridkot",
        "Fatehgarh Sahib",
        "Fazilka",
        "Ferozepur",
        "Gurdaspur",
        "Hoshiarpur",
        "Jalandhar",
        "Kapurthala",
        "Ludhiana",
        "Mansa",
        "Moga",
        "Muktsar",
        "Nawanshahr (Shahid Bhagat Singh Nagar)",
        "Pathankot",
        "Patiala",
        "Rupnagar",
        "Sangrur",
        "Tarn Taran"
    ],
    'rajasthan':[
        "Ajmer",
        "Alwar",
        "Banswara",
        "Baran",
        "Barmer",
        "Bharatpur",
        "Bhilwara",
        "Bikaner",
        "Bundi",
        "Chittorgarh",
        "Churu",
        "Dausa",
        "Dholpur",
        "Dungarpur",
        "Hanumangarh",
        "Jaipur",
        "Jaisalmer",
        "Jalore",
        "Jhalawar",
        "Jhunjhunu",
        "Jodhpur",
        "Karauli",
        "Kota",
        "Nagaur",
        "Pali",
        "Pratapgarh",
        "Rajsamand",
        "Sawai Madhopur",
        "Sikar",
        "Sirohi",
        "Sri Ganganagar",
        "Tonk",
        "Udaipur"
    ],
    'sikkim':[
        "East Sikkim",
        "North Sikkim",
        "South Sikkim",
        "West Sikkim"
    ],
    'tamilNadu':[
        "Ariyalur",
        "Chengalpattu",
        "Chennai",
        "Coimbatore",
        "Cuddalore",
        "Dharmapuri",
        "Dindigul",
        "Erode",
        "Kallakurichi",
        "Kanchipuram",
        "Kanyakumari",
        "Karur",
        "Krishnagiri",
        "Madurai",
        "Nagapattinam",
        "Namakkal",
        "Nilgiris",
        "Perambalur",
        "Pudukkottai",
        "Ramanathapuram",
        "Ranipet",
        "Salem",
        "Sivaganga",
        "Tenkasi",
        "Thanjavur",
        "Theni",
        "Thoothukudi",
        "Tiruchirappalli",
        "Tirunelveli",
        "Tirupathur",
        "Tiruppur",
        "Tiruvallur",
        "Tiruvannamalai",
        "Tiruvarur",
        "Vellore",
        "Viluppuram",
        "Virudhunagar"
    ],
    'telangana':[
        "Adilabad",
        "Kumuram Bheem Asifabad",
        "Mancherial",
        "Nirmal",
        "Nizamabad",
        "Jagtial",
        "Peddapalli",
        "Kamareddy",
        "Rajanna Sircilla",
        "Karimnagar",
        "Mahabubabad",
        "Medak",
        "Medchal-Malkajgiri",
        "Mulugu",
        "Nagarkurnool",
        "Nalgonda",
        "Narayanpet",
        "Suryapet",
        "Vikarabad",
        "Wanaparthy",
        "Warangal",
        "Yadadri Bhuvanagiri",
        // Hyderabad is also a district and the capital city
        "Hyderabad"
    ],
    'tripura':[
        "Dhalai",
        "North Tripura",
        "South Tripura",
        "West Tripura",
        "Unakoti",
        "Khowai",
        "Sipahijila",
        "Gomati"
    ],
    'uttarPradesh':[
        "Agra",
        "Aligarh",
        "Ambedkar Nagar",
        "Ayodhya",
        "Amethi",
        "Amroha",
        "Auraiya",
        "Azamgarh",
        "Badaun",
        "Bagpat",
        "Bahraich",
        "Ballia",
        "Balrampur",
        "Banda",
        "Barabanki",
        "Bareilly",
        "Basti",
        "Bijnor",
        "Bulandshahr",
        "Chandauli",
        "Chitrakoot",
        "Deoria",
        "Etah",
        "Etawah",
        "Farrukhabad",
        "Fatehpur",
        "Firozabad",
        "Gautam Buddha Nagar",
        "Ghaziabad",
        "Ghazipur",
        "Gonda",
        "Gorakhpur",
        "Hamirpur",
        "Hapur",
        "Hardoi",
        "Hathras",
        "Jalaun",
        "Jaunpur",
        "Jhansi",
        "Kannauj",
        "Kanpur Dehat",
        // ... and more districts
    ],
    'uttarakhand':[
        "Almora",
        "Bageshwar",
        "Chamoli",
        "Champawat",
        "Dehradun",
        "Haridwar",
        "Nainital",
        "Pauri Garhwal",
        "Pithoragarh",
        "Rudraprayag",
        "Tehri Garhwal",
        "Udham Singh Nagar",
        "Uttarkashi"
    ],
    'westBengal':[
        "Alipurduar",
        "Bankura",
        "Birbhum",
        "Cooch Behar",
        "Dakshin Dinajpur",
        "Darjeeling",
        "Hooghly",
        "Howrah",
        "Jalpaiguri",
        "Jhargram",
        "Kalimpong",
        "Kolkata",
        "Malda",
        "Murshidabad",
        "Nadia",
        "North 24 Parganas",
        "Paschim Bardhaman",
        "Purba Bardhaman",
        "Purulia",
        "South 24 Parganas",
        "Uttar Dinajpur"
    ]
}
  
const state = document.getElementById('state');
indianStates.forEach(s => {
    const el = document.createElement("option");
    el.value = s;
    el.innerHTML = s;
    state.appendChild(el);
})

state.addEventListener('change',()=>{
    const district = document.getElementById('district');
    console.log(districts)
    districts[state.value].forEach(d => {
        const el = document.createElement("option");
        el.value = d;
        el.innerHTML = d;
        district.appendChild(el);
    })
})

function validateForm(event) {
    const middleName = document.getElementById("middleName").value.trim();
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const mobileNumber = document.getElementById("mobileNumber").value.trim();
    const email = document.getElementById("email").value.trim();
    const state = document.getElementById("state").value.trim();
    const district = document.getElementById("district").value.trim();
    const fromNumber = document.getElementById("fromNumber").value.trim();
    const bankAccount = document.getElementById("bankAccount").value.trim();
    const ifscCode = document.getElementById("ifscCode").value.trim();
    const pdfProof = document.getElementById("pdfProof").value.trim();
    const adharCard = document.getElementById("adharCard").value.trim();

    // Validating first name
    if (firstName === "") {
        alert("Please enter your first name.");
        event.preventDefault();
        return false;
    }

    // Validating last name
    if (lastName === "") {
        alert("Please enter your last name.");
        event.preventDefault();
        return false;
    }

    // Validating mobile number
    if (mobileNumber === "") {
        alert("Please enter your mobile number.");
        event.preventDefault();
        return false;
    }

    // Validating email
    if (email === "") { 
        alert("Please enter your email address.");
        event.preventDefault();
        return false;
    }

    // Validating state
    if (state === "") {
        alert("Please enter your state.");
        event.preventDefault();
        return false;
    }

    // Validating district
    if (district === "") {
        alert("Please enter your district.");
        event.preventDefault();
        return false;
    }

    // Validating from number
    if (fromNumber === "") {
        alert("Please enter your 7/12 From No.");
        event.preventDefault();
        return false;
    }

    // Validating bank account
    if (bankAccount === "") {
        alert("Please enter your bank account number.");
        event.preventDefault();
        return false;
    }

    // Validating IFSC code
    if (ifscCode === "") {
        alert("Please enter your IFSC code.");
        event.preventDefault();
        return false;
    }

    // Validating pdf proof
    if (pdfProof === "") {
        alert("Please upload PDF proof.");
        event.preventDefault();
        return false;
    }

    // Validating adhar card
    if (adharCard === "") {
        alert("Please upload Aadhar card.");
        event.preventDefault();
        return false;
    }

    // Validating first name
    if (firstName === "" || !/^[a-zA-Z]+$/.test(firstName)) {
        alert("Please enter a valid first name without digits.");
        return false;
    }

    // Validating middle name
    if (!/^[a-zA-Z]*$/.test(middleName)) {
        alert("Middle name should not contain digits.");
        return false;
    }

    // Validating last name
    if (lastName === "" || !/^[a-zA-Z]+$/.test(lastName)) {
        alert("Please enter a valid last name without digits.");
        return false;
    }

    // Validating mobile number
    if (mobileNumber === "" || !/^\d{10}$/.test(mobileNumber)) {
        alert("Please enter a valid 10-digit mobile number.");
        return false;
    }

    // Validating email
    if (email === "" || !/^\S+@\S+\.\S+$/.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validating ifsc Code
    if (ifscCode === "" || !/^[A-Z]{4}0[A-Z0-9]{6}$/.test(ifscCode)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validation passed
    return true;
}