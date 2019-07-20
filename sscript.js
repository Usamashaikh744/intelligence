function myIntelligence() {

    let intelligenceLevels = [
        "smart",
        "cool",
        "awesome",
        "marvellous",
        "excellent",
        "intelligent",
        "einstien",
    ]

    let name = document.querySelector("input").value;
    let randomIndex = parseInt(Math.random() * intelligenceLevels.length);
    
    alert (name +" hay "+ intelligenceLevels[randomIndex])
}
//     if (name == false) {
//         alert("Please Enter a name");
//     } else {
//         if (name.charAt(0).toLowerCase() == "a") {
//             intelligence = intelligenceLevels[6];
//             alert(intelligence);
//         } else if (name.charAt(0).toLowerCase() == "b") {
//             intelligence = intelligenceLevels[6];
//             alert(intelligence);

//         } else if (name.charAt(0).toLowerCase() == "c") {
//             intelligence = intelligenceLevels[6];
//             alert(intelligence);
//         } else if (name.charAt(0).toLowerCase() == "d") {
//             intelligence = intelligenceLevels[6];
//             alert(intelligence);
//         } else if (name.charAt(0).toLowerCase() == "e") {
//             intelligence = intelligenceLevels[6];
//             alert(intelligence);
//         } else if (name.charAt(0).toLowerCase() == "f") {
//             intelligence = intelligenceLevels[6];
//             alert(intelligence);
//         } else if (name.charAt(0).toLowerCase() == "g") {
//             intelligence = intelligenceLevels[6];
//             alert(intelligence);
//         } else if (name.charAt(0).toLowerCase() == "h") {
//             intelligence = intelligenceLevels[6];
//             alert(intelligence);
//         } else if (name.charAt(0).toLowerCase() == "i") {
//             intelligence = intelligenceLevels[6];
//             alert(intelligence);
//         } else if (name.charAt(0).toLowerCase() == "j") {
//             intelligence = intelligenceLevels[6];
//             alert(intelligence);        
//         }  else if (name.charAt(0).toLowerCase() == "k") {
//             intelligence = intelligenceLevels[6];
//             alert(intelligence);        
//         }  else if (name.charAt(0).toLowerCase() == "l") {
//             intelligence = intelligenceLevels[6];
//             alert(intelligence);        
//         }  else if (name.charAt(0).toLowerCase() == "m") {
//             intelligence = intelligenceLevels[6];
//             alert(intelligence);        
//         }  else if (name.charAt(0).toLowerCase() == "n") {
//             intelligence = intelligenceLevels[6];
//             alert(intelligence);        
//         } 
//     }
// 