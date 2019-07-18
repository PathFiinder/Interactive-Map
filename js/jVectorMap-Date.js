let jvmCountries = ([
   {code : "AF" ,name: "Afghanistan", coords: [33, 65], continent: ""},
   {code : "AL" ,name: "Albania", coords: [41, 20], continent: ""},
   {code : "DZ" ,name: "Algeria", coords: [28, 3], continent: ""},
   {code : "AO" ,name: "Angola", coords: [-12.5, 18.5], continent: ""},
   {code : "AR" ,name: "Argentina", coords: [-34, -64], continent: ""},
   {code : "AM" ,name: "Armenia", coords: [40, 45], continent: ""},
   {code : "AU" ,name: "Australia", coords: [-27, 133], continent: ""},
   {code : "AT" ,name: "Austria", coords: [47.3333, 13.3333], continent: ""},
   {code : "AZ" ,name: "Azerbaijan", coords: [40.5, 47.5], continent: ""},
   {code : "BS" ,name: "Bahamas", coords: [24.25, -76], continent: ""},
   {code : "BD" ,name: "Bangladesh", coords: [24, 90], continent: ""},
   {code : "BY" ,name: "Belarus", coords: [53, 28], continent: ""},
   {code : "BE" ,name: "Belgium", coords: [50.8333, 4], continent: ""},
   {code : "BZ" ,name: "Belize", coords: [17.25, -88.75], continent: ""},
   {code : "BJ" ,name: "Benin", coords: [9.5, 2.25], continent: ""},
   {code : "BT" ,name: "Bhutan", coords: [27.5, 90.5], continent: ""},
   {code : "BO" ,name: "Bolivia", coords: [-17, -65], continent: ""},
   {code : "BA" ,name: "Bosnia and Herz.", coords: [44, 18], continent: ""},
   {code : "BW" ,name: "Botswana", coords: [-22, 24], continent: ""},
   {code : "BR" ,name: "Brazil", coords: [-10, -55], continent: ""},
   {code : "BN" ,name: "Brunei", coords: [4.5, 114.6667], continent: ""},
   {code : "BG" ,name: "Bulgaria", coords: [43, 25], continent: ""},
   {code : "BF" ,name: "Burkina Faso", coords: [13, -2], continent: ""},
   {code : "BI" ,name: "Burundi", coords: [-3.5, 30], continent: ""},
   {code : "KH" ,name: "Cambodia", coords: [13, 105], continent: ""},
   {code : "CM" ,name: "Cameroon", coords: [6, 12], continent: ""},
   {code : "CA" ,name: "Canada", coords: [60, -95], continent: ""},
   {code : "CF" ,name: "Central African Rep.", coords: [7, 21], continent: ""},
   {code : "TD" ,name: "Chad", coords: [15, 19], continent: ""},
   {code : "CL" ,name: "Chile", coords: [-30, -71], continent: ""},
   {code : "CN" ,name: "China", coords: [35, 105], continent: ""},
   {code : "CO" ,name: "Colombia", coords: [4, -72], continent: ""},
   {code : "CG" ,name: "Congo", coords: [-1, 15], continent: ""},
   {code : "CR" ,name: "Costa Rica", coords: [10, -84], continent: ""},
   {code : "HR" ,name: "Croatia", coords: [45.1667, 15.5], continent: ""},
   {code : "CU" ,name: "Cuba", coords: [21.5, -80], continent: ""},
   {code : "CY" ,name: "Cyprus", coords: [35, 33], continent: ""},
   {code : "CZ" ,name: "Czech Rep.", coords: [49.75, 15.5], continent: ""},
   {code : "CI" ,name: "Côte d'Ivoire", coords: [8, -5], continent: ""},
   {code : "CD" ,name: "Dem. Rep. Congo", coords: [0, 25], continent: "Africa"},
   {code : "KP" ,name: "Dem. Rep. Korea", coords: [40, 127], continent: ""},
   {code : "DK" ,name: "Denmark", coords: [56, 10], continent: ""},
   {code : "DJ" ,name: "Djibouti", coords: [11.5, 43], continent: ""},
   {code : "DO" ,name: "Dominican Rep.", coords: [19, -70.6667], continent: ""},
   {code : "EC" ,name: "Ecuador", coords: [-2, -77.5], continent: ""},
   {code : "EG" ,name: "Egypt", coords: [27, 30], continent: ""},
   {code : "SV" ,name: "El Salvador", coords: [13.8333, -88.9167], continent: ""},
   {code : "GQ" ,name: "Eq. Guinea", coords: [2, 10], continent: ""},
   {code : "ER" ,name: "Eritrea", coords: [15, 39], continent: ""},
   {code : "EE" ,name: "Estonia", coords: [59, 26], continent: ""},
   {code : "ET" ,name: "Ethiopia", coords: [8, 38], continent: ""},
   {code : "FK" ,name: "Falkland Is.", coords: [-51.75, -59], continent: ""},
   {code : "FJ" ,name: "Fiji", coords: [-18, 175], continent: ""},
   {code : "FI" ,name: "Finland", coords: [64, 26], continent: ""},
   {code : "TF" ,name: "Fr. S. Antarctic Lands", coords: [-43, 67], continent: "Americas"},
   {code : "FR" ,name: "France", coords: [46, 2], continent: ""},
   {code : "GA" ,name: "Gabon", coords: [-1, 11.75], continent: ""},
   {code : "GM" ,name: "Gambia", coords: [13.4667, -16.5667], continent: ""},
   {code : "GE" ,name: "Georgia", coords: [42, 43.5], continent: ""},
   {code : "DE" ,name: "Germany", coords: [51, 9], continent: ""},
   {code : "GH" ,name: "Ghana", coords: [8, -2], continent: ""},
   {code : "GR" ,name: "Greece", coords: [39, 22], continent: ""},
   {code : "GL" ,name: "Greenland", coords: [72, -40], continent: ""},
   {code : "GT" ,name: "Guatemala", coords: [15.5, -90.25], continent: ""},
   {code : "GN" ,name: "Guinea", coords: [11, -10], continent: ""},
   {code : "GW" ,name: "Guinea-Bissau", coords: [12, -15], continent: ""},
   {code : "GY" ,name: "Guyana", coords: [5, -59], continent: ""},
   {code : "HT" ,name: "Haiti", coords: [19, -72.4167], continent: ""},
   {code : "HN" ,name: "Honduras", coords: [15, -86.5], continent: ""},
   {code : "HU" ,name: "Hungary", coords: [47, 20], continent: ""},
   {code : "IS" ,name: "Iceland", coords: [65, -18], continent: ""},
   {code : "IN" ,name: "India", coords: [20, 77], continent: ""},
   {code : "ID" ,name: "Indonesia", coords: [-5, 120], continent: ""},
   {code : "IR" ,name: "Iran", coords: [32, 53], continent: ""},
   {code : "IQ" ,name: "Iraq", coords: [33, 44], continent: ""},
   {code : "IE" ,name: "Ireland", coords: [53, -8], continent: ""},
   {code : "IL" ,name: "Israel", coords: [31.5, 34.75], continent: ""},
   {code : "IT" ,name: "Italy", coords: [42.8333, 12.8333], continent: ""},
   {code : "JM" ,name: "Jamaica", coords: [18.25, -77.5], continent: ""},
   {code : "JP" ,name: "Japan", coords: [36, 138], continent: ""},
   {code : "JO" ,name: "Jordan", coords: [31, 36], continent: ""},
   {code : "KZ" ,name: "Kazakhstan", coords: [48, 68], continent: ""},
   {code : "KE" ,name: "Kenya", coords: [1, 38], continent: ""},
   {code : "KR" ,name: "Korea", coords: [37, 127.5], continent: ""},
   {code : "KW" ,name: "Kuwait", coords: [29.3375, 47.6581], continent: ""},
   {code : "KG" ,name: "Kyrgyzstan", coords: [41, 75], continent: ""},
   {code : "LA" ,name: "Lao PDR", coords: [18, 105], continent: ""},
   {code : "LV" ,name: "Latvia", coords: [57, 25], continent: ""},
   {code : "LB" ,name: "Lebanon", coords: [33.8333, 35.8333], continent: ""},
   {code : "LS" ,name: "Lesotho", coords: [-29.5, 28.5], continent: ""},
   {code : "LR" ,name: "Liberia", coords: [6.5, -9.5], continent: ""},
   {code : "LY" ,name: "Libya", coords: [25, 17], continent: ""},
   {code : "LT" ,name: "Lithuania", coords: [56, 24], continent: ""},
   {code : "LU" ,name: "Luxembourg", coords: [49.75, 6.1667], continent: ""},
   {code : "MK" ,name: "Macedonia", coords: [41.8333, 22], continent: ""},
   {code : "MG" ,name: "Madagascar", coords: [-20, 47], continent: ""},
   {code : "MW" ,name: "Malawi", coords: [-13.5, 34], continent: ""},
   {code : "MY" ,name: "Malaysia", coords: [2.5, 112.5], continent: ""},
   {code : "ML" ,name: "Mali", coords: [17, -4], continent: ""},
   {code : "MR" ,name: "Mauritania", coords: [20, -12], continent: ""},
   {code : "MX" ,name: "Mexico", coords: [23, -102], continent: ""},
   {code : "MD" ,name: "Moldova", coords: [47, 29], continent: ""},
   {code : "MN" ,name: "Mongolia", coords: [46, 105], continent: ""},
   {code : "ME" ,name: "Montenegro", coords: [42, 19], continent: ""},
   {code : "MA" ,name: "Morocco", coords: [32, -5], continent: ""},
   {code : "MZ" ,name: "Mozamb", coords: [-18.25, 35], continent: ""},
   {code : "MM" ,name: "Myanmar", coords: [22, 98], continent: ""},
   {code : "NA" ,name: "Namibia", coords: [-22, 17], continent: ""},
   {code : "NP" ,name: "Nepal", coords: [28, 84], continent: ""},
   {code : "NL" ,name: "Netherlands", coords: [52.5, 5.75], continent: ""},
   {code : "NC" ,name: "New Caledonia", coords: [-21.5, 165.5], continent: ""},
   {code : "NZ" ,name: "New Zealand", coords: [-41, 174], continent: ""},
   {code : "NI" ,name: "Nicaragua", coords: [13, -85], continent: ""},
   {code : "NE" ,name: "Niger", coords: [16, 8], continent: ""},
   {code : "NG" ,name: "Nigeria", coords: [10, 8], continent: ""},
   {code : "NO" ,name: "Norway", coords: [62, 10], continent: ""},
   {code : "OM" ,name: "Oman", coords: [21, 57], continent: ""},
   {code : "PK" ,name: "Pakistan", coords: [30, 70], continent: ""},
   {code : "PS" ,name: "Palestine", coords: [32, 35.25], continent: ""},
   {code : "PA" ,name: "Panama", coords: [9, -80], continent: ""},
   {code : "PG" ,name: "Papua New Guinea", coords: [-6, 147], continent: ""},
   {code : "PY" ,name: "Paraguay", coords: [-23, -58], continent: ""},
   {code : "PE" ,name: "Peru", coords: [-10, -76], continent: ""},
   {code : "PH" ,name: "Philippines", coords: [13, 122], continent: ""},
   {code : "PL" ,name: "Poland", coords: [52, 20], continent: ""},
   {code : "PT" ,name: "Portugal", coords: [39.5, -8], continent: ""},
   {code : "PR" ,name: "Puerto Rico", coords: [18.25, -66.5], continent: ""},
   {code : "QA" ,name: "Qatar", coords: [25.5, 51.25], continent: ""},
   {code : "RO" ,name: "Romania", coords: [46, 25], continent: ""},
   {code : "RU" ,name: "Russia", coords: [60, 100], continent: ""},
   {code : "RW" ,name: "Rwanda", coords: [-2, 30], continent: ""},
   {code : "SS" ,name: "S. Sudan",coords: [0,0], continent: ""},
   {code : "SA" ,name: "Saudi Arabia", coords: [25, 45], continent: ""},
   {code : "SN" ,name: "Senegal", coords: [14, -14], continent: ""},
   {code : "RS" ,name: "Serbia", coords: [44, 21], continent: "Europe"},
   {code : "SL" ,name: "Sierra Leone", coords: [8.5, -11.5], continent: ""},
   {code : "SK" ,name: "Slovakia", coords: [48.6667, 19.5], continent: ""},
   {code : "SI" ,name: "Slovenia", coords: [46, 15], continent: ""},
   {code : "SB" ,name: "Solomon Is.", coords: [-8, 159], continent: ""},
   {code : "SO" ,name: "Somalia", coords: [10, 49], continent: ""},
   {code : "ZA" ,name: "South Africa", coords: [-29, 24], continent: ""},
   {code : "ES" ,name: "Spain", coords: [40, -4], continent: ""},
   {code : "LK" ,name: "Sri Lanka", coords: [7, 81], continent: ""},
   {code : "SD" ,name: "Sudan", coords: [15, 30], continent: "Africa"},
   {code : "SR" ,name: "Suriname", coords: [4, -56], continent: ""},
   {code : "SZ" ,name: "Swaziland", coords: [-26.5, 31.5], continent: ""},
   {code : "SE" ,name: "Sweden", coords: [62, 15], continent: ""},
   {code : "CH" ,name: "Switzerland", coords: [47, 8], continent: ""},
   {code : "SY" ,name: "Syria", coords: [35, 38], continent: ""},
   {code : "TW" ,name: "Taiwan", coords: [23.5, 121], continent: ""},
   {code : "TJ" ,name: "Tajikistan", coords: [39, 71], continent: ""},
   {code : "TZ" ,name: "Tanzania", coords: [-6, 35], continent: ""},
   {code : "TH" ,name: "Thailand", coords: [15, 100], continent: ""},
   {code : "TL" ,name: "Timor-Leste", coords: [0,0], continent: "Oceania"},
   {code : "TG" ,name: "Togo", coords: [8, 1.1667], continent: ""},
   {code : "TT" ,name: "Trinidad and Tobago", coords: [11, -61], continent: ""},
   {code : "TN" ,name: "Tunisia", coords: [34, 9], continent: ""},
   {code : "TR" ,name: "Turkey", coords: [39, 35], continent: ""},
   {code : "TM" ,name: "Turkmenistan", coords: [40, 60], continent: ""},
   {code : "UG" ,name: "Uganda", coords: [1, 32], continent: ""},
   {code : "UA" ,name: "Ukraine", coords: [49, 32], continent: ""},
   {code : "AE" ,name: "United Arab Emirates", coords: [24, 54], continent: ""},
   {code : "GB" ,name: "United Kingdom", coords: [54, -2], continent: ""},
   {code : "US" ,name: "United States", coords: [38, -97], continent: ""},
   {code : "UY" ,name: "Uruguay", coords: [-33, -56], continent: ""},
   {code : "UZ" ,name: "Uzbekistan", coords: [41, 64], continent: ""},
   {code : "VU" ,name: "Vanuatu", coords: [-16, 167], continent: ""},
   {code : "VE" ,name: "Venezuela", coords: [8, -66], continent: ""},
   {code : "VN" ,name: "Vietnam", coords: [16, 106], continent: ""},
   {code : "EH" ,name: "W. Sahara", coords: [24.5, -13], continent: "Africa"},
   {code : "YE" ,name: "Yemen", coords: [15, 48], continent: ""},
   {code : "ZM" ,name: "Zambia", coords: [-15, 30], continent: ""},
   {code : "ZW" ,name: "Zimbabwe", coords: [-20, 30]}
]);
export default jvmCountries;

/*  {code : let jvCounries = ,
   {code : "AF" ,name: "Afghanistan", coords: [33, 65], continent: ""},
   {code : "AL" ,name: "Albania", coords: [41, 20], continent: ""},
   {code : "DZ" ,name: "Algeria", coords: [28, 3], continent: ""},
   {code : "AO" ,name: "Angola", coords: [-12.5, 18.5], continent: ""},
   {code : "AR" ,name: "Argentina", coords: [-34, -64], continent: ""},
   {code : "AM" ,name: "Armenia", coords: [40, 45], continent: ""},
   {code : "AU" ,name: "Australia", coords: [-27, 133], continent: ""},
   {code : "AT" ,name: "Austria", coords: [47.3333, 13.3333], continent: ""},
   {code : "AZ" ,name: "Azerbaijan", coords: [40.5, 47.5], continent: ""},
   {code : "BS" ,name: "Bahamas", coords: [24.25, -76], continent: ""},
   {code : "BD" ,name: "Bangladesh", coords: [24, 90], continent: ""},
   {code : "BY" ,name: "Belarus", coords: [53, 28], continent: ""},
   {code : "BE" ,name: "Belgium", coords: [50.8333, 4], continent: ""},
   {code : "BZ" ,name: "Belize", coords: [17.25, -88.75], continent: ""},
   {code : "BJ" ,name: "Benin", coords: [9.5, 2.25], continent: ""},
   {code : "BT" ,name: "Bhutan", coords: [27.5, 90.5], continent: ""},
   {code : "BO" ,name: "Bolivia", coords: [-17, -65], continent: ""},
   {code : "BA" ,name: "Bosnia and Herz.", coords: [44, 18], continent: ""},
   {code : "BW" ,name: "Botswana", coords: [-22, 24], continent: ""},
   {code : "BR" ,name: "Brazil", coords: [-10, -55], continent: ""},
   {code : "BN" ,name: "Brunei", coords: [4.5, 114.6667], continent: ""},
   {code : "BG" ,name: "Bulgaria", coords: [43, 25], continent: ""},
   {code : "BF" ,name: "Burkina Faso", coords: [13, -2], continent: ""},
   {code : "BI" ,name: "Burundi", coords: [-3.5, 30], continent: ""},
   {code : "KH" ,name: "Cambodia", coords: [13, 105], continent: ""},
   {code : "CM" ,name: "Cameroon", coords: [6, 12], continent: ""},
   {code : "CA" ,name: "Canada", coords: [60, -95], continent: ""},
   {code : "CF" ,name: "Central African Rep.", coords: [7, 21], continent: ""},
   {code : "TD" ,name: "Chad", coords: [15, 19], continent: ""},
   {code : "CL" ,name: "Chile", coords: [-30, -71], continent: ""},
   {code : "CN" ,name: "China", coords: [35, 105], continent: ""},
   {code : "CO" ,name: "Colombia", coords: [4, -72], continent: ""},
   {code : "CG" ,name: "Congo", coords: [-1, 15], continent: ""},
   {code : "CR" ,name: "Costa Rica", coords: [10, -84], continent: ""},
   {code : "HR" ,name: "Croatia", coords: [45.1667, 15.5], continent: ""},
   {code : "CU" ,name: "Cuba", coords: [21.5, -80], continent: ""},
   {code : "CY" ,name: "Cyprus", coords: [35, 33], continent: ""},
   {code : "CZ" ,name: "Czech Rep.", coords: [49.75, 15.5], continent: ""},
   {code : "CI" ,name: "Côte d'Ivoire", coords: [8, -5], continent: ""},
   {code : "CD" ,name: "Dem. Rep. Congo", coords: [0, 25], continent: "Africa"},
   {code : "KP" ,name: "Dem. Rep. Korea", coords: [40, 127], continent: ""},
   {code : "DK" ,name: "Denmark", coords: [56, 10], continent: ""},
   {code : "DJ" ,name: "Djibouti", coords: [11.5, 43], continent: ""},
   {code : "DO" ,name: "Dominican Rep.", coords: [19, -70.6667], continent: ""},
   {code : "EC" ,name: "Ecuador", coords: [-2, -77.5], continent: ""},
   {code : "EG" ,name: "Egypt", coords: [27, 30], continent: ""},
   {code : "SV" ,name: "El Salvador", coords: [13.8333, -88.9167], continent: ""},
   {code : "GQ" ,name: "Eq. Guinea", coords: [2, 10], continent: ""},
   {code : "ER" ,name: "Eritrea", coords: [15, 39], continent: ""},
   {code : "EE" ,name: "Estonia", coords: [59, 26], continent: ""},
   {code : "ET" ,name: "Ethiopia", coords: [8, 38], continent: ""},
   {code : "FK" ,name: "Falkland Is.", coords: [-51.75, -59], continent: ""},
   {code : "FJ" ,name: "Fiji", coords: [-18, 175], continent: ""},
   {code : "FI" ,name: "Finland", coords: [64, 26], continent: ""},
   {code : "TF" ,name: "Fr. S. Antarctic Lands", coords: [-43, 67], continent: "Americas"},
   {code : "FR" ,name: "France", coords: [46, 2], continent: ""},
   {code : "GA" ,name: "Gabon", coords: [-1, 11.75], continent: ""},
   {code : "GM" ,name: "Gambia", coords: [13.4667, -16.5667], continent: ""},
   {code : "GE" ,name: "Georgia", coords: [42, 43.5], continent: ""},
   {code : "DE" ,name: "Germany", coords: [51, 9], continent: ""},
   {code : "GH" ,name: "Ghana", coords: [8, -2], continent: ""},
   {code : "GR" ,name: "Greece", coords: [39, 22], continent: ""},
   {code : "GL" ,name: "Greenland", coords: [72, -40], continent: ""},
   {code : "GT" ,name: "Guatemala", coords: [15.5, -90.25], continent: ""},
   {code : "GN" ,name: "Guinea", coords: [11, -10], continent: ""},
   {code : "GW" ,name: "Guinea-Bissau", coords: [12, -15], continent: ""},
   {code : "GY" ,name: "Guyana", coords: [5, -59], continent: ""},
   {code : "HT" ,name: "Haiti", coords: [19, -72.4167], continent: ""},
   {code : "HN" ,name: "Honduras", coords: [15, -86.5], continent: ""},
   {code : "HU" ,name: "Hungary", coords: [47, 20], continent: ""},
   {code : "IS" ,name: "Iceland", coords: [65, -18], continent: ""},
   {code : "IN" ,name: "India", coords: [20, 77], continent: ""},
   {code : "ID" ,name: "Indonesia", coords: [-5, 120], continent: ""},
   {code : "IR" ,name: "Iran", coords: [32, 53], continent: ""},
   {code : "IQ" ,name: "Iraq", coords: [33, 44], continent: ""},
   {code : "IE" ,name: "Ireland", coords: [53, -8], continent: ""},
   {code : "IL" ,name: "Israel", coords: [31.5, 34.75], continent: ""},
   {code : "IT" ,name: "Italy", coords: [42.8333, 12.8333], continent: ""},
   {code : "JM" ,name: "Jamaica", coords: [18.25, -77.5], continent: ""},
   {code : "JP" ,name: "Japan", coords: [36, 138], continent: ""},
   {code : "JO" ,name: "Jordan", coords: [31, 36], continent: ""},
   {code : "KZ" ,name: "Kazakhstan", coords: [48, 68], continent: ""},
   {code : "KE" ,name: "Kenya", coords: [1, 38], continent: ""},
   {code : "KR" ,name: "Korea", coords: [37, 127.5], continent: ""},
   {code : "KW" ,name: "Kuwait", coords: [29.3375, 47.6581], continent: ""},
   {code : "KG" ,name: "Kyrgyzstan", coords: [41, 75], continent: ""},
   {code : "LA" ,name: "Lao PDR", coords: [18, 105], continent: ""},
   {code : "LV" ,name: "Latvia", coords: [57, 25], continent: ""},
   {code : "LB" ,name: "Lebanon", coords: [33.8333, 35.8333], continent: ""},
   {code : "LS" ,name: "Lesotho", coords: [-29.5, 28.5], continent: ""},
   {code : "LR" ,name: "Liberia", coords: [6.5, -9.5], continent: ""},
   {code : "LY" ,name: "Libya", coords: [25, 17], continent: ""},
   {code : "LT" ,name: "Lithuania", coords: [56, 24], continent: ""},
   {code : "LU" ,name: "Luxembourg", coords: [49.75, 6.1667], continent: ""},
   {code : "MK" ,name: "Macedonia", coords: [41.8333, 22], continent: ""},
   {code : "MG" ,name: "Madagascar", coords: [-20, 47], continent: ""},
   {code : "MW" ,name: "Malawi", coords: [-13.5, 34], continent: ""},
   {code : "MY" ,name: "Malaysia", coords: [2.5, 112.5], continent: ""},
   {code : "ML" ,name: "Mali", coords: [17, -4], continent: ""},
   {code : "MR" ,name: "Mauritania", coords: [20, -12], continent: ""},
   {code : "MX" ,name: "Mexico", coords: [23, -102], continent: ""},
   {code : "MD" ,name: "Moldova", coords: [47, 29], continent: ""},
   {code : "MN" ,name: "Mongolia", coords: [46, 105], continent: ""},
   {code : "ME" ,name: "Montenegro", coords: [42, 19], continent: ""},
   {code : "MA" ,name: "Morocco", coords: [32, -5], continent: ""},
   {code : "MZ" ,name: "Mozamb", coords: [-18.25, 35], continent: ""},
   {code : "MM" ,name: "Myanmar", coords: [22, 98], continent: ""},
   {code : "NA" ,name: "Namibia", coords: [-22, 17], continent: ""},
   {code : "NP" ,name: "Nepal", coords: [28, 84], continent: ""},
   {code : "NL" ,name: "Netherlands", coords: [52.5, 5.75], continent: ""},
   {code : "NC" ,name: "New Caledonia", coords: [-21.5, 165.5], continent: ""},
   {code : "NZ" ,name: "New Zealand", coords: [-41, 174], continent: ""},
   {code : "NI" ,name: "Nicaragua", coords: [13, -85], continent: ""},
   {code : "NE" ,name: "Niger", coords: [16, 8], continent: ""},
   {code : "NG" ,name: "Nigeria", coords: [10, 8], continent: ""},
   {code : "NO" ,name: "Norway", coords: [62, 10], continent: ""},
   {code : "OM" ,name: "Oman", coords: [21, 57], continent: ""},
   {code : "PK" ,name: "Pakistan", coords: [30, 70], continent: ""},
   {code : "PS" ,name: "Palestine", coords: [32, 35.25], continent: ""},
   {code : "PA" ,name: "Panama", coords: [9, -80], continent: ""},
   {code : "PG" ,name: "Papua New Guinea", coords: [-6, 147], continent: ""},
   {code : "PY" ,name: "Paraguay", coords: [-23, -58], continent: ""},
   {code : "PE" ,name: "Peru", coords: [-10, -76], continent: ""},
   {code : "PH" ,name: "Philippines", coords: [13, 122], continent: ""},
   {code : "PL" ,name: "Poland", coords: [52, 20], continent: ""},
   {code : "PT" ,name: "Portugal", coords: [39.5, -8], continent: ""},
   {code : "PR" ,name: "Puerto Rico", coords: [18.25, -66.5], continent: ""},
   {code : "QA" ,name: "Qatar", coords: [25.5, 51.25], continent: ""},
   {code : "RO" ,name: "Romania", coords: [46, 25], continent: ""},
   {code : "RU" ,name: "Russia", coords: [60, 100], continent: ""},
   {code : "RW" ,name: "Rwanda", coords: [-2, 30], continent: ""},
   {code : "SS" ,name: "S. Sudan",coords: [0,0], continent: ""},
   {code : "SA" ,name: "Saudi Arabia", coords: [25, 45], continent: ""},
   {code : "SN" ,name: "Senegal", coords: [14, -14], continent: ""},
   {code : "RS" ,name: "Serbia", coords: [44, 21], continent: "Europe"},
   {code : "SL" ,name: "Sierra Leone", coords: [8.5, -11.5], continent: ""},
   {code : "SK" ,name: "Slovakia", coords: [48.6667, 19.5], continent: ""},
   {code : "SI" ,name: "Slovenia", coords: [46, 15], continent: ""},
   {code : "SB" ,name: "Solomon Is.", coords: [-8, 159], continent: ""},
   {code : "SO" ,name: "Somalia", coords: [10, 49], continent: ""},
   {code : "ZA" ,name: "South Africa", coords: [-29, 24], continent: ""},
   {code : "ES" ,name: "Spain", coords: [40, -4], continent: ""},
   {code : "LK" ,name: "Sri Lanka", coords: [7, 81], continent: ""},
   {code : "SD" ,name: "Sudan", coords: [15, 30], continent: "Africa"},
   {code : "SR" ,name: "Suriname", coords: [4, -56], continent: ""},
   {code : "SZ" ,name: "Swaziland", coords: [-26.5, 31.5], continent: ""},
   {code : "SE" ,name: "Sweden", coords: [62, 15], continent: ""},
   {code : "CH" ,name: "Switzerland", coords: [47, 8], continent: ""},
   {code : "SY" ,name: "Syria", coords: [35, 38], continent: ""},
   {code : "TW" ,name: "Taiwan", coords: [23.5, 121], continent: ""},
   {code : "TJ" ,name: "Tajikistan", coords: [39, 71], continent: ""},
   {code : "TZ" ,name: "Tanzania", coords: [-6, 35], continent: ""},
   {code : "TH" ,name: "Thailand", coords: [15, 100], continent: ""},
   {code : "TL" ,name: "Timor-Leste", coords: [0,0], continent: "Oceania"},
   {code : "TG" ,name: "Togo", coords: [8, 1.1667], continent: ""},
   {code : "TT" ,name: "Trinidad and Tobago", coords: [11, -61], continent: ""},
   {code : "TN" ,name: "Tunisia", coords: [34, 9], continent: ""},
   {code : "TR" ,name: "Turkey", coords: [39, 35], continent: ""},
   {code : "TM" ,name: "Turkmenistan", coords: [40, 60], continent: ""},
   {code : "UG" ,name: "Uganda", coords: [1, 32], continent: ""},
   {code : "UA" ,name: "Ukraine", coords: [49, 32], continent: ""},
   {code : "AE" ,name: "United Arab Emirates", coords: [24, 54], continent: ""},
   {code : "GB" ,name: "United Kingdom", coords: [54, -2], continent: ""},
   {code : "US" ,name: "United States", coords: [38, -97], continent: ""},
   {code : "UY" ,name: "Uruguay", coords: [-33, -56], continent: ""},
   {code : "UZ" ,name: "Uzbekistan", coords: [41, 64], continent: ""},
   {code : "VU" ,name: "Vanuatu", coords: [-16, 167], continent: ""},
   {code : "VE" ,name: "Venezuela", coords: [8, -66], continent: ""},
   {code : "VN" ,name: "Vietnam", coords: [16, 106], continent: ""},
   {code : "EH" ,name: "W. Sahara", coords: [24.5, -13], continent: "Africa"},
   {code : "YE" ,name: "Yemen", coords: [15, 48], continent: ""},
   {code : "ZM" ,name: "Zambia", coords: [-15, 30], continent: ""},
   {code : "ZW" ,name: "Zimbabwe", coords: [-20, 30]}
}
export default jvmCountries;*/