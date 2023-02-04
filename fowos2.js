// 18 Watchout Situations
let watchouts = [];
let wo1 = {
  name: "wo1",
  number: 1,
  text: "Fire not scouted and sized up.",
  answer: new RegExp(
    /\s*?[Ff][Ii][Rr][Ee]\s*?[Nn][Oo][Tt]\s*?[Ss][Cc][Oo][Uu][Tt][Ee][Dd]\s*?[Aa][Nn][Dd]\s*?[Ss][Ii][Zz][Ee][Dd]\s*?[Uu][Pp][.]?\s*?/
  ),
};
watchouts.push(wo1);
let wo2 = {
  name: "wo2",
  number: 2,
  text: "In country not seen in daylight.",
  answer: new RegExp(
    /\s*?[Ii][Nn]\s*?[Cc][Oo][Uu][Nn][Tt][Rr][Yy]\s*?[Nn][Oo][Tt]\s*?[Ss][Ee][Ee][Nn]\s*?[Ii][Nn]\s*?[Dd][Aa][Yy][Ll][Ii][Gg][Hh][Tt][.]?\s*?/
  ),
};
watchouts.push(wo2);
let wo3 = {
  name: "wo3",
  number: 3,
  text: "Safety zones and escape routes not identified.",
  answer: new RegExp(
    /\s*?[Ss][Aa][Ff][Ee][Tt][Yy]\s*?[Zz][Oo][Nn][Ee][Ss]\s*?[Aa][Nn][Dd]\s*?[Ee][Ss][Cc][Aa][Pp][Ee]\s*?[Rr][Oo][Uu][Tt][Ee][Ss]\s*?[Nn][Oo][Tt]\s*?[Ii][Dd][Ee][Nn][Tt][Ii][Ff][Ii][Ee][Dd][.]?\s*?/
  ),
};
watchouts.push(wo3);
let wo4 = {
  name: "wo4",
  number: 4,
  text: "Unfamiliar with weather and local factors influencing fire behavior.",
  answer: new RegExp(
    /\s*?[Uu][Nn][Ff][Aa][Mm][Ii][Ll][Ii][Aa][Rr]\s*?[Ww][Ii][Tt][Hh]\s*?[Ww][Ee][Aa][Tt][Hh][Ee][Rr]\s*?[Aa][Nn][Dd]\s*?[Ll][Oo][Cc][Aa][Ll]\s*?[Ff][Aa][Cc][Tt][Oo][Rr][Ss]\s*?[Ii][Nn][Ff][Ll][Uu][Ee][Nn][Cc][Ii][Nn][Gg]\s*?[Ff][Ii][Rr][Ee]\s*?[Bb][Ee][Hh][Aa][Vv][Ii][Oo][Rr][.]?\s*?/
  ),
};
watchouts.push(wo4);
let wo5 = {
  name: "wo5",
  number: 5,
  text: "Uninformed on strategy, tactics, and hazards.",
  answer: new RegExp(
    /\s*?[Uu][Nn][Ii][Nn][Ff][Oo][Rr][Mm][Ee][Dd]\s*?[Oo][Nn]\s*?[Ss][Tt][Rr][Aa][Tt][Ee][Gg][Yy][,]?\s*?[Tt][Aa][Cc][Tt][Ii][Cc][Ss][,]?\s*?[Aa][Nn][Dd]\s*?[Hh][Aa][Zz][Aa][Rr][Dd][Ss][.]?\s*?/
  ),
};
watchouts.push(wo5);
let wo6 = {
  name: "wo6",
  number: 6,
  text: "Instructions and assignments not clear.",
  answer: new RegExp(
    /\s*?[Ii][Nn][Ss][Tt][Rr][Uu][Cc][Tt][Ii][Oo][Nn][Ss]\s*?[Aa][Nn][Dd]\s*?[Aa][Ss][Ss][Ii][Gg][Nn][Mm][Ee][Nn][Tt][Ss]\s*?[Nn][Oo][Tt]\s*?[Cc][Ll][Ee][Aa][Rr][.]?\s*?/
  ),
};
watchouts.push(wo6);
let wo7 = {
  name: "wo7",
  number: 7,
  text: "No communication link with crew members or supervisor.",
  answer: new RegExp(
    /\s*?[Nn][Oo]\s*?[Cc][Oo][Mm][Mm][Uu][Nn][Ii][Cc][Aa][Tt][Ii][Oo][Nn]\s*?[Ll][Ii][Nn][Kk]\s*?[Ww]?[Ii]?[Tt]?[Hh]?[Bb]?[Ee]?[Tt]?[Ww]?[Ee]?[Ee]?[Nn]?\s*?[Cc][Rr][Ee][Ww]\s*?[Mm][Ee][Mm][Bb][Ee][Rr][Ss]\s*?[Oo]?[Rr]?[Aa]?[Nn]?[Dd]?\s*?[Ss][Uu][Pp][Ee][Rr][Vv][Ii][Ss][Oo][Rr][Ss]?[.]?\s*?/
  ),
};
watchouts.push(wo7);
let wo8 = {
  name: "wo8",
  number: 8,
  text: "Constructing line without safe anchor point.",
  answer: new RegExp(
    /\s*?[Cc][Oo][Nn][Ss][Tt][Rr][Uu][Cc][Tt][Ii][Nn][Gg]\s*?[Ff]?[Ii]?[Rr]?[Ee]?[Ll][Ii][Nn][Ee]\s*?[Ww][Ii][Tt][Hh][Oo][Uu][Tt]\s*?[Ss][Aa][Ff][Ee]\s*?[Aa][Nn][Cc][Hh][Oo][Rr]\s*?[Pp][Oo][Ii][Nn][Tt][Ss]?[.]?\s*?/
  ),
};
watchouts.push(wo8);
let wo9 = {
  name: "wo9",
  number: 9,
  text: "Building fireline downhill with fire below.",
  answer: new RegExp(
    /\s*?[Cc]?[Oo]?[Nn]?[Ss]?[Tt]?[Rr]?[Uu]?[Cc]?[Tt]?[Ii]?[Nn]?[Gg]?[Bb]?[Uu]?[Ii]?[Ll]?[Dd]?[Ii]?[Nn]?[Gg]?\s*?[Ff]?[Ii]?[Rr]?[Ee]?[Ll][Ii][Nn][Ee]\s*?[Dd][Oo][Ww][Nn][Hh][Ii][Ll][Ll]\s*?[Ww][Ii][Tt][Hh]\s*?[Ff][Ii][Rr][Ee]\s*?[Bb][Ee][Ll][Oo][Ww]\s*?[.]?\s*?/
  ),
};
watchouts.push(wo9);
let wo10 = {
  name: "wo10",
  number: 10,
  text: "Attempting frontal assault on fire.",
  answer: new RegExp(
    /\s*?[Aa][Tt][Tt][Ee][Mm][Pp][Tt][Ii][Nn][Gg]\s*?[Ff][Rr][Oo][Nn][Tt][Aa][Ll]\s*?[Aa][Ss][Ss][Aa][Uu][Ll][Tt]\s*?[Oo][Nn]\s*?[Ff][Ii][Rr][Ee]\s*?[.]?\s*?/
  ),
};
watchouts.push(wo10);
let wo11 = {
  name: "wo11",
  number: 11,
  text: "Unburned fuel between you and fire.",
  answer: new RegExp(
    /\s*?[Uu][Nn][Bb][Uu][Rr][Nn][Ee][Dd]\s*?[Ff][Uu][Ee][Ll]\s*?[Bb][Ee][Tt][Ww][Ee][Ee][Nn]\s*?[Yy][Oo][Uu]\s*?[Aa][Nn][Dd]\s*?[Tt]?[Hh]?[Ee]?\s*?[Ff][Ii][Rr][Ee]\s*?[.]?\s*?/
  ),
};
watchouts.push(wo11);
let wo12 = {
  name: "wo12",
  number: 12,
  text: "Cannot see main fire; not in contact with someone who can.",
  answer: new RegExp(
    /\s*?[Cc][Aa][Nn][Nn][Oo][Tt]\s*?[Ss][Ee][Ee]\s*?[Mm][Aa][Ii][Nn]\s*?[Ff][Ii][Rr][Ee][,;.]?\s*?[Aa]?[Nn]?[Dd]?\s*?[Nn][Oo][Tt]\s*?[Ii][Nn]\s*?[Cc][Oo][Nn][Tt][Aa][Cc][Tt]\s*?[Ww][Ii][Tt][Hh]\s*?[Ss][Oo][Mm][Ee][Oo][Nn][Ee]\s*?[Ww][Hh][Oo]\s*?[Cc][Aa][Nn][.]?\s*?/
  ),
};
watchouts.push(wo12);
let wo13 = {
  name: "wo13",
  number: 13,
  text: "On a hillside where rolling material can ignite fuel below.",
  answer: new RegExp(
    /\s*?[Oo][Nn]\s*?[Aa]\s*?[Hh][Ii][Ll][Ll][Ss]?[Ii]?[Dd]?[Ee]?\s*?[Ww][Hh][Ee][Rr][Ee]\s*?[Rr][Oo][Ll][Ll][Ii][Nn][Gg]\s*?[Mm][Aa][Tt][Ee][Rr][Ii][Aa][Ll][Ss]?\s*?[Cc][Aa][Nn]\s*?[Ii][Gg][Nn][Ii][Tt][Ee]\s*?[Ff][Uu][Ee][Ll][Ss]?\s*?[Bb][Ee][Ll][Oo][Ww][.]?\s*?/
  ),
};
watchouts.push(wo13);
let wo14 = {
  name: "wo14",
  number: 14,
  text: "Weather becoming hotter and drier.",
  answer: new RegExp(
    /\s*?[Ww][Ee][Aa][Tt][Hh][Ee][Rr]\s*?[Bb][Ee][Cc][Oo][Mm][Ii][Nn][Gg]\s*?[Hh][Oo][Tt][Tt][Ee][Rr]\s*?[Aa][Nn][Dd]\s*?[Dd][Rr][Ii][Ee][Rr][.]?\s*?/
  ),
};
watchouts.push(wo14);
let wo15 = {
  name: "wo15",
  number: 15,
  text: "Wind increases and/or changes direction.",
  answer: new RegExp(
    /\s*?[Ww][Ii][Nn][Dd]\s*?[Ii][Nn][Cc][Rr][Ee][Aa][Ss][Ee][Ss]\s*?[Aa][Nn][Dd][\/,]?\s*?[Oo][Rr]\s*?[Cc][Hh][Aa][Nn][Gg][Ee][Ss]\s*?[Dd][Ii][Rr][Ee][Cc][Tt][Ii][Oo][Nn][Ss]?[.]?\s*?/
  ),
};
watchouts.push(wo15);
let wo16 = {
  name: "wo16",
  number: 16,
  text: "Getting frequent spot fires across line.",
  answer: new RegExp(
    /\s*?[Gg][Ee][Tt][Tt][Ii][Nn][Gg]\s*?[Ff][Rr][Ee][Qq][Uu][Ee][Nn][Tt]\s*?[Ss][Pp][Oo][Tt]\s*?[Ff][Ii][Rr][Ee][Ss]\s*?[Aa][Cc][Rr][Oo][Ss][Ss]\s*?[Tt]?[Hh]?[Ee]?\s*?[Ff]?[Ii]?[Rr]?[Ee]?[Ll][Ii][Nn][Ee][.]?\s*?/
  ),
};
watchouts.push(wo16);
let wo17 = {
  name: "wo17",
  number: 17,
  text: "Terrain and fuels make escape to safety zones difficult.",
  answer: new RegExp(
    /\s*?[Tt][Ee][Rr][Rr][Aa][Ii][Nn]\s*?[Aa][Nn][Dd]\s*?[Ff][Uu][Ee][Ll][Ss]?\s*?[Mm][Aa][Kk][Ee][Ss]?\s*?[Ee][Ss][Cc][Aa][Pp][Ee]\s*?[Tt][Oo]\s*?[Ss][Aa][Ff][Ee][Tt][Yy]\s*?[Zz][Oo][Nn][Ee][Ss]\s*?[Dd][Ii][Ff][Ff][Ii][Cc][Uu][Ll][Tt][.]?\s*?/
  ),
};
watchouts.push(wo17);
let wo18 = {
  name: "wo18",
  number: 18,
  text: "Taking a nap near fireline.",
  answer: new RegExp(
    /\s*?[Tt]?[Aa]?[Kk]?[Ii]?[Nn]?[Gg]?\s*?[Aa]?\s*?[Nn]?[Aa]?[Pp]?\s*?[Nn]?[Aa]?[Pp]?[Pp]?[Ii]?[Nn]?[Gg]?\s*?[Nn][Ee][Aa][Rr]\s*?[Aa]?\s*?[Ff]?[Ii]?[Rr]?[Ee]?[Ll][Ii][Nn][Ee][.]?\s*?/
  ),
};
watchouts.push(wo18);
//10 Standard Fire Orders
const fire_orders = [];
let fo1 = {
  name: "fo1",
  number: 1,
  text: "Keep informed on fire weather conditions and forecasts.",
  answer: new RegExp(
    /\s*?[Kk][Ee][Ee][Pp]\s*?[Ii][Nn][Ff][Oo][Rr][Mm][Ee][Dd]\s*?[Oo][NnFf]\s*?[Ff][Ii][Rr][Ee]\s*?[Ww][Ee][Aa][Tt][Hh][Ee][Rr]\s*?[Cc][Oo][Nn][Dd][Ii][Tt][Ii][Oo][Nn][Ss]\s*?[Aa][Nn][Dd]\s*?[Ff][Oo][Rr][Ee][Cc][Aa][Ss][Tt][Ss][.]?\s*?/
  ),
};
fire_orders.push(fo1);
let fo2 = {
  name: "fo2",
  number: 2,
  text: "Know what your fire is doing at all times.",
  answer: new RegExp(
    /\s*?[Kk][Nn][Oo][Ww]\s*?[Ww][Hh][Aa][Tt]\s*?[Yy][Oo][Uu][Rr]\s*?[Ff][Ii][Rr][Ee]\s*?[Ii][Ss]\s*?[Dd][Oo][Ii][Nn][Gg]\s*?[Aa][Tt]\s*?[Aa][Ll][Ll]\s*?[Tt][Ii][Mm][Ee][Ss][.]?\s*?/
  ),
};
fire_orders.push(fo2);
let fo3 = {
  name: "fo3",
  number: 3,
  text: "Base all actions on the current and expected behavior of the fire.",
  answer: new RegExp(
    /\s*?[Bb][Aa][Ss][Ee]\s*?[Aa][Ll][Ll]\s*?[Aa][Cc][Tt][Ii][Oo][Nn][Ss]\s*?[Oo][Nn]\s*?[Tt]?[Hh]?[Ee]?\s*?[Cc][Uu][Rr][Rr][Ee][Nn][Tt]\s*?[Aa][Nn][Dd]\s*?[Ee][Xx][Pp][Ee][Cc][Tt][Ee][Dd]\s*?[Bb][Ee][Hh][Aa][Vv][Ii][Oo][Rr]\s*?[Oo][Ff]\s*?[Tt][Hh][Ee]\s*?[Ff][Ii][Rr][Ee][.]?\s*?/
  ),
};
fire_orders.push(fo3);
let fo4 = {
  name: "fo4",
  number: 4,
  text: "Identify escape routes and safety zones and make them known.",
  answer: new RegExp(
    /\s*?[Ii][Dd][Ee][Nn][Tt][Ii][Ff][Yy]\s*?[Ee][Ss][Cc][Aa][Pp][Ee]\s*?[Rr][Oo][Uu][Tt][Ee][Ss]\s*?[Aa][Nn][Dd]\s*?[Ss][Aa][Ff][Ee][Tt][Yy]\s*?[Zz][Oo][Nn][Ee][Ss]\s*?[Aa][Nn][Dd]\s*?[Mm][Aa][Kk][Ee]\s*?[Tt][Hh][Ee][Mm]\s*?[Kk][Nn][Oo][Ww][Nn][.]?\s*?/
  ),
};
fire_orders.push(fo4);
let fo5 = {
  name: "fo5",
  number: 5,
  text: "Post lookouts when there is possible danger.",
  answer: new RegExp(
    /\s*?[Pp][Oo][Ss][Tt]\s*?[Ll][Oo][Oo][Kk][Oo][Uu][Tt][Ss]\s*?[Ww][Hh][Ee][Nn]\s*?[Tt][Hh][Ee][Rr][Ee]\s*?[Ii][Ss]\s*?[Pp][Oo][Ss][Ss][Ii][Bb][Ll][Ee]\s*?[Dd][Aa][Nn][Gg][Ee][Rr][.]?\s*?/
  ),
};
fire_orders.push(fo5);
let fo6 = {
  name: "fo6",
  number: 6,
  text: "Be alert. Keep calm. Think clearly. Act decisively.",
  answer: new RegExp(
    /\s*?[Bb][Ee]\s*?[Aa][Ll][Ee][Rr][Tt][.,]?\s*?[Kk][Ee][Ee][Pp]\s*?[Cc][Aa][Ll][Mm][,.]?\s*?[Tt][Hh][Ii][Nn][Kk]\s*?[Cc][Ll][Ee][Aa][Rr][Ll][Yy][,.]?\s*?[Aa][Cc][Tt]\s*?[Dd][Ee][Cc][Ii][Ss][Ii][Vv][Ee][Ll][Yy][.]?\s*?/
  ),
};
fire_orders.push(fo6);
let fo7 = {
  name: "fo7",
  number: 7,
  text: "Maintain prompt communications with your forces, your supervisor, and adjoining forces.",
  answer: new RegExp(
    /\s*?[Mm][Aa][Ii][Nn][Tt][Aa][Ii][Nn]\s*?[Pp][Rr][Oo][Mm][Pp][Tt]\s*?[Cc][Oo][Mm][Mm][Uu][Nn][Ii][Cc][Aa][Tt][Ii][Oo][Nn][Ss]?\s*?[Ww][Ii][Tt][Hh]\s*?[Yy][Oo][Uu][Rr]\s*?[Ff][Oo][Rr][Cc][Ee][Ss][,]\s*?[Yy][Oo][Uu][Rr]\s*?[Ss][Uu][Pp][Ee][Rr][Vv][Ii][Ss][Oo][Rr][,]\s*?[Aa][Nn][Dd]\s*?[Aa][Dd][Jj][Oo][Ii][Nn][Ii][Nn][Gg]\s*?[Ff][Oo][Rr][Cc][Ee][Ss][.]?\s*?/
  ),
};
fire_orders.push(fo7);
let fo8 = {
  name: "fo8",
  number: 8,
  text: "Give clear instructions and ensure they are understood.",
  answer: new RegExp(
    /\s*?[Gg][Ii][Vv][Ee]\s*?[Cc][Ll][Ee][Aa][Rr]\s*?[Ii][Nn][Ss][Tt][Rr][Uu][Cc][Tt][Ii][Oo][Nn][Ss]\s*?[Aa][Nn][Dd]\s*?[Ee][Nn][Ss][Uu][Rr][Ee]\s*?[Tt]?[Hh]?[Aa]?[Tt]?\s*?[Tt][Hh][Ee][Yy]\s*?[Aa][Rr][Ee]\s*?[Uu][Nn][Dd][Ee][Rr][Ss][Tt][Oo][Oo][Dd][.]?\s*?/
  ),
};
fire_orders.push(fo8);
let fo9 = {
  name: "fo9",
  number: 9,
  text: "Maintain control of your forces at all times.",
  answer: new RegExp(
    /\s*?[Mm][Aa][Ii][Nn][Tt][Aa][Ii][Nn]\s*?[Cc][Oo][Nn][Tt][Rr][Oo][Ll]\s*?[Oo][Ff]\s*?[Yy][Oo][Uu][Rr]\s*?[Ff][Oo][Rr][Cc][Ee][Ss]\s*?[Aa][Tt]\s*?[Aa][Ll][Ll]\s*?[Tt][Ii][Mm][Ee][Ss][.]?\s*?/
  ),
};
fire_orders.push(fo9);
let fo10 = {
  name: "fo10",
  number: 10,
  text: "Fight fire aggressively, having provided for safety first.",
  answer: new RegExp(
    /\s*?[Ff][Ii][Gg][Hh][Tt]\s*?[Ff][Ii][Rr][Ee]\s*?[Aa][Gg][Gg][Rr][Ee][Ss][Ss][Ii][Vv][Ee][Ll][Yy][,]?\s*?[Hh][Aa][Vv][Ii][Nn][Gg]\s*?[Pp][Rr][Oo][Vv][Ii][Dd][Ee][Dd]\s*?[Ff][Oo][Rr]\s*?[Ss][Aa][Ff][Ee][Tt][Yy]\s*?[Ff][Ii][Rr][Ss][Tt][.]?\s*?/
  ),
};
fire_orders.push(fo10);

//user selects give me a watchout, i'll tell you number
let wo_def_ques = document.getElementById("wo_def_ques");
let wo_def_unused = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
];

function wo_def() {
  document.getElementById("wo_def_input").value = "";
  document.getElementById("body-main").style.backgroundColor = "whitesmoke";
  document.getElementById("wo_def_input").style.backgroundColor = "grey";
  document.getElementById("again").disabled = true;
  if (wo_def_unused.length == 0) {
    document.getElementById("again").disabled = false;
    wo_def_unused = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
    ];
    wo_def_ques.textContent = "That's all 18! Play again?";
  } else {
    let answer = "";
    let random = Math.floor(Math.random() * 18) + 1; //returns a random number from 1 to 18
    //if the number has been used
    if (!wo_def_unused.includes(random)) {
      //while the value is not in unused
      while (!wo_def_unused.includes(random)) {
        //generate a new random number and check if it is in array
        random = Math.floor(Math.random() * 18) + 1;
      }
    }
    let delNum = wo_def_unused.indexOf(random);
    if (delNum !== -1) {
      wo_def_unused.splice(delNum, 1);
    }

    if (random == 1) {
      wo_def_ques.textContent = watchouts[0].text;
      answer = watchouts[0].number;
    } else if (random == 2) {
      wo_def_ques.textContent = watchouts[1].text;
      answer = watchouts[1].number;
    } else if (random == 3) {
      wo_def_ques.textContent = watchouts[2].text;
      answer = watchouts[2].number;
    } else if (random == 4) {
      wo_def_ques.textContent = watchouts[3].text;
      answer = watchouts[3].number;
    } else if (random == 5) {
      wo_def_ques.textContent = watchouts[4].text;
      answer = watchouts[4].number;
    } else if (random == 6) {
      wo_def_ques.textContent = watchouts[5].text;
      answer = watchouts[5].number;
    } else if (random == 7) {
      wo_def_ques.textContent = watchouts[6].text;
      answer = watchouts[6].number;
    } else if (random == 8) {
      wo_def_ques.textContent = watchouts[7].text;
      answer = watchouts[7].number;
    } else if (random == 9) {
      wo_def_ques.textContent = watchouts[8].text;
      answer = watchouts[8].number;
    } else if (random == 10) {
      wo_def_ques.textContent = watchouts[9].text;
      answer = watchouts[9].number;
    } else if (random == 11) {
      wo_def_ques.textContent = watchouts[10].text;
      answer = watchouts[10].number;
    } else if (random == 12) {
      wo_def_ques.textContent = watchouts[11].text;
      answer = watchouts[11].number;
    } else if (random == 13) {
      wo_def_ques.textContent = watchouts[12].text;
      answer = watchouts[12].number;
    } else if (random == 14) {
      wo_def_ques.textContent = watchouts[13].text;
      answer = watchouts[13].number;
    } else if (random == 15) {
      wo_def_ques.textContent = watchouts[14].text;
      answer = watchouts[14].number;
    } else if (random == 16) {
      wo_def_ques.textContent = watchouts[15].text;
      answer = watchouts[15].number;
    } else if (random == 17) {
      wo_def_ques.textContent = watchouts[16].text;
      answer = watchouts[16].number;
    } else if (random == 18) {
      wo_def_ques.textContent = watchouts[17].text;
      answer = watchouts[17].number;
    }

    let bg = document.getElementById("wo_def_input");
    bg.oninput = function test_wo_def() {
      let usr_input = document.getElementById("wo_def_input").value;
      if (usr_input == answer) {
        bg.style.backgroundColor = "#9ABC6B";
        document.getElementById("body-main").style.backgroundColor = "#9ABC6B";
        document.getElementById("again").disabled = false;
      } else {
        bg.style.backgroundColor = "#D6858E";
      }
    };
  }
}

//user selects give me a watchout number
let wo_num_ques = document.getElementById("wo_num_ques");
let wo_num_unused = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
];
function wo_num() {
  document.getElementById("wo_num_input").value = "";
  document.getElementById("body-main").style.backgroundColor = "whitesmoke";
  document.getElementById("wo_num_input").style.backgroundColor = "grey";
  document.getElementById("again").disabled = true;
  if (wo_num_unused.length == 0) {
    document.getElementById("again").disabled = false;
    wo_num_unused = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
    ];
    wo_num_ques.textContent = "That's all 18! Go again?";
  } else {
    let random = Math.floor(Math.random() * 18) + 1; //returns a random number from 1 to 18
    //if the number has been used
    if (!wo_num_unused.includes(random)) {
      //while the value is not in unused
      while (!wo_num_unused.includes(random)) {
        //generate a new random number and check if it is in array
        random = Math.floor(Math.random() * 18) + 1;
      }
    }
    let delNum = wo_num_unused.indexOf(random);
    if (delNum !== -1) {
      wo_num_unused.splice(delNum, 1);
    }
    let regex = "";
    document.getElementById("wo_num_ques").textContent =
      "What is Watchout #" + random + "?";
    if (random == 1) {
      regex = watchouts[0].answer;
    } else if (random == 2) {
      regex = watchouts[1].answer;
    } else if (random == 3) {
      regex = watchouts[2].answer;
    } else if (random == 4) {
      regex = watchouts[3].answer;
    } else if (random == 5) {
      regex = watchouts[4].answer;
    } else if (random == 6) {
      regex = watchouts[5].answer;
    } else if (random == 7) {
      regex = watchouts[6].answer;
    } else if (random == 8) {
      regex = watchouts[7].answer;
    } else if (random == 9) {
      regex = watchouts[8].answer;
    } else if (random == 10) {
      regex = watchouts[9].answer;
    } else if (random == 11) {
      regex = watchouts[10].answer;
    } else if (random == 12) {
      regex = watchouts[11].answer;
    } else if (random == 13) {
      regex = watchouts[12].answer;
    } else if (random == 14) {
      regex = watchouts[13].answer;
    } else if (random == 15) {
      regex = watchouts[14].answer;
    } else if (random == 16) {
      regex = watchouts[15].answer;
    } else if (random == 17) {
      regex = watchouts[16].answer;
    } else if (random == 18) {
      regex = watchouts[17].answer;
    }
    let bg = document.getElementById("wo_num_input");
    bg.oninput = function test_wo_num() {
      let usr_input = document.getElementById("wo_num_input").value;
      if (regex.test(usr_input)) {
        bg.style.backgroundColor = "#9ABC6B";
        document.getElementById("body-main").style.backgroundColor = "#9ABC6B";
        document.getElementById("again").disabled = false;
      } else {
        bg.style.backgroundColor = "#D6858E";
      }
    };
  }
}

//user selects watchout multiple choice
let wo_mc_ques = document.getElementById("wo_mc_ques");
let wo_mc_unused = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
];
function wo_mc() {
  wo_mc_unused = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];
  document.getElementById("body-main").style.backgroundColor = "whitesmoke";
  document.getElementById("again").disabled = true;
  let random = Math.floor(Math.random() * 18) + 1; //returns a random number from 1 to 18
  //take number out of array so it is not used again
  let delNum = wo_mc_unused.indexOf(random);
  if (delNum !== -1) {
    wo_mc_unused.splice(delNum, 1);
  }
  document.getElementById("wo_mc_ques").textContent =
    "What is Watchout #" + random + "?";
  if (random == 1) {
    regex = watchouts[0].answer;
  } else if (random == 2) {
    regex = watchouts[1].answer;
  } else if (random == 3) {
    regex = watchouts[2].answer;
  } else if (random == 4) {
    regex = watchouts[3].answer;
  } else if (random == 5) {
    regex = watchouts[4].answer;
  } else if (random == 6) {
    regex = watchouts[5].answer;
  } else if (random == 7) {
    regex = watchouts[6].answer;
  } else if (random == 8) {
    regex = watchouts[7].answer;
  } else if (random == 9) {
    regex = watchouts[8].answer;
  } else if (random == 10) {
    regex = watchouts[9].answer;
  } else if (random == 11) {
    regex = watchouts[10].answer;
  } else if (random == 12) {
    regex = watchouts[11].answer;
  } else if (random == 13) {
    regex = watchouts[12].answer;
  } else if (random == 14) {
    regex = watchouts[13].answer;
  } else if (random == 15) {
    regex = watchouts[14].answer;
  } else if (random == 16) {
    regex = watchouts[15].answer;
  } else if (random == 17) {
    regex = watchouts[16].answer;
  } else if (random == 18) {
    regex = watchouts[17].answer;
  }
  let option1 = document.getElementById("option-1");
  let option2 = document.getElementById("option-2");
  let option3 = document.getElementById("option-3");
  let option4 = document.getElementById("option-4");
  option1.style.backgroundColor = "";
  option2.style.backgroundColor = "";
  option3.style.backgroundColor = "";
  option4.style.backgroundColor = "";
  //generate false answers
  let falseA = Math.floor(Math.random() * 18) + 1;
  //make sure falseA != random
  if (!wo_mc_unused.includes(falseA)) {
    //while the value is not in unused
    while (!wo_mc_unused.includes(falseA)) {
      //generate a new random number and check if it is in array
      falseA = Math.floor(Math.random() * 18) + 1;
    }
  }
  let delA = wo_mc_unused.indexOf(falseA);
  if (delA !== -1) {
    wo_mc_unused.splice(delA, 1);
  }
  let falseB = Math.floor(Math.random() * 18) + 1;
  //make sure falseB != falseA or random
  if (!wo_mc_unused.includes(falseB)) {
    //while the value is not in unused
    while (!wo_mc_unused.includes(falseB)) {
      //generate a new random number and check if it is in array
      falseB = Math.floor(Math.random() * 18) + 1;
    }
  }
  let delB = wo_mc_unused.indexOf(falseB);
  if (delB !== -1) {
    wo_mc_unused.splice(delB, 1);
  }
  let falseC = Math.floor(Math.random() * 18) + 1;
  if (!wo_mc_unused.includes(falseC)) {
    //while the value is not in unused
    while (!wo_mc_unused.includes(falseC)) {
      //generate a new random number and check if it is in array
      falseC = Math.floor(Math.random() * 18) + 1;
    }
  }
  let delC = wo_mc_unused.indexOf(falseC);
  if (delC !== -1) {
    wo_mc_unused.splice(delC, 1);
  }

  //generate random answer position
  let randomPosition = Math.floor(Math.random() * 3) + 1;

  //render text accordingly
  if (randomPosition == 1) {
    option1.textContent = watchouts[random - 1].text;
    option2.textContent = watchouts[falseA - 1].text;
    option3.textContent = watchouts[falseB - 1].text;
    option4.textContent = watchouts[falseC - 1].text;
  } else if (randomPosition == 2) {
    option1.textContent = watchouts[falseA - 1].text;
    option2.textContent = watchouts[random - 1].text;
    option3.textContent = watchouts[falseB - 1].text;
    option4.textContent = watchouts[falseC - 1].text;
  } else if (randomPosition == 3) {
    option1.textContent = watchouts[falseA - 1].text;
    option2.textContent = watchouts[falseB - 1].text;
    option3.textContent = watchouts[random - 1].text;
    option4.textContent = watchouts[falseC - 1].text;
  } else {
    option1.textContent = watchouts[falseA - 1].text;
    option2.textContent = watchouts[falseB - 1].text;
    option3.textContent = watchouts[falseC - 1].text;
    option4.textContent = watchouts[random - 1].text;
  }
  option1.addEventListener("click", function () {
    if (randomPosition == 1) {
      option1.style.backgroundColor = "#9ABC6B";
      option2.style.backgroundColor = "#D6858E";
      option3.style.backgroundColor = "#D6858E";
      option4.style.backgroundColor = "#D6858E";
      document.getElementById("again").disabled = false;
    } else {
      option1.style.backgroundColor = "#D6858E";
    }
  });
  option2.addEventListener("click", function () {
    if (randomPosition == 2) {
      option2.style.backgroundColor = "#9ABC6B";
      option1.style.backgroundColor = "#D6858E";
      option3.style.backgroundColor = "#D6858E";
      option4.style.backgroundColor = "#D6858E";
      document.getElementById("again").disabled = false;
    } else {
      option2.style.backgroundColor = "#D6858E";
    }
  });
  option3.addEventListener("click", function () {
    if (randomPosition == 3) {
      option3.style.backgroundColor = "#9ABC6B";
      option2.style.backgroundColor = "#D6858E";
      option1.style.backgroundColor = "#D6858E";
      option4.style.backgroundColor = "#D6858E";
      document.getElementById("again").disabled = false;
    } else {
      option3.style.backgroundColor = "#D6858E";
    }
  });
  option4.addEventListener("click", function () {
    if (randomPosition == 4) {
      option4.style.backgroundColor = "#9ABC6B";
      option2.style.backgroundColor = "#D6858E";
      option3.style.backgroundColor = "#D6858E";
      option1.style.backgroundColor = "#D6858E";
      document.getElementById("again").disabled = false;
    } else {
      option4.style.backgroundColor = "#D6858E";
    }
  });
}
// user selects watchout multiple choice numbers
let wo_mcnum_ques = document.getElementById("wo_mcnum_ques");
let wo_mcnum_unused = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
];
function wo_mc_num() {
  wo_mcnum_unused = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];
  document.getElementById("body-main").style.backgroundColor = "whitesmoke";
  document.getElementById("again").disabled = true;
  let random = Math.floor(Math.random() * 18) + 1; //returns a random number from 1 to 18
  //take number out of array so it is not used again
  let delNum = wo_mcnum_unused.indexOf(random);
  if (delNum !== -1) {
    wo_mcnum_unused.splice(delNum, 1);
  }

  if (random == 1) {
    wo_mcnum_ques.textContent = watchouts[0].text;
    answer = watchouts[0].number;
  } else if (random == 2) {
    wo_mcnum_ques.textContent = watchouts[1].text;
    answer = watchouts[1].number;
  } else if (random == 3) {
    wo_mcnum_ques.textContent = watchouts[2].text;
    answer = watchouts[2].number;
  } else if (random == 4) {
    wo_mcnum_ques.textContent = watchouts[3].text;
    answer = watchouts[3].number;
  } else if (random == 5) {
    wo_mcnum_ques.textContent = watchouts[4].text;
    answer = watchouts[4].number;
  } else if (random == 6) {
    wo_mcnum_ques.textContent = watchouts[5].text;
    answer = watchouts[5].number;
  } else if (random == 7) {
    wo_mcnum_ques.textContent = watchouts[6].text;
    answer = watchouts[6].number;
  } else if (random == 8) {
    wo_mcnum_ques.textContent = watchouts[7].text;
    answer = watchouts[7].number;
  } else if (random == 9) {
    wo_mcnum_ques.textContent = watchouts[8].text;
    answer = watchouts[8].number;
  } else if (random == 10) {
    wo_mcnum_ques.textContent = watchouts[9].text;
    answer = watchouts[9].number;
  } else if (random == 11) {
    wo_mcnum_ques.textContent = watchouts[10].text;
    answer = watchouts[10].number;
  } else if (random == 12) {
    wo_mcnum_ques.textContent = watchouts[11].text;
    answer = watchouts[11].number;
  } else if (random == 13) {
    wo_mcnum_ques.textContent = watchouts[12].text;
    answer = watchouts[12].number;
  } else if (random == 14) {
    wo_mcnum_ques.textContent = watchouts[13].text;
    answer = watchouts[13].number;
  } else if (random == 15) {
    wo_mcnum_ques.textContent = watchouts[14].text;
    answer = watchouts[14].number;
  } else if (random == 16) {
    wo_mcnum_ques.textContent = watchouts[15].text;
    answer = watchouts[15].number;
  } else if (random == 17) {
    wo_mcnum_ques.textContent = watchouts[16].text;
    answer = watchouts[16].number;
  } else if (random == 18) {
    wo_mcnum_ques.textContent = watchouts[17].text;
    answer = watchouts[17].number;
  }
  let option1 = document.getElementById("option-1");
  let option2 = document.getElementById("option-2");
  let option3 = document.getElementById("option-3");
  let option4 = document.getElementById("option-4");
  option1.style.backgroundColor = "";
  option2.style.backgroundColor = "";
  option3.style.backgroundColor = "";
  option4.style.backgroundColor = "";
  //generate false answers
  let falseA = Math.floor(Math.random() * 18) + 1;
  //make sure falseA != random
  if (!wo_mcnum_unused.includes(falseA)) {
    //while the value is not in unused
    while (!wo_mcnum_unused.includes(falseA)) {
      //generate a new random number and check if it is in array
      falseA = Math.floor(Math.random() * 18) + 1;
    }
  }
  let delA = wo_mcnum_unused.indexOf(falseA);
  if (delA !== -1) {
    wo_mcnum_unused.splice(delA, 1);
  }
  let falseB = Math.floor(Math.random() * 18) + 1;
  //make sure falseB != falseA or random
  if (!wo_mcnum_unused.includes(falseB)) {
    //while the value is not in unused
    while (!wo_mcnum_unused.includes(falseB)) {
      //generate a new random number and check if it is in array
      falseB = Math.floor(Math.random() * 18) + 1;
    }
  }
  let delB = wo_mcnum_unused.indexOf(falseB);
  if (delB !== -1) {
    wo_mcnum_unused.splice(delB, 1);
  }
  let falseC = Math.floor(Math.random() * 18) + 1;
  if (!wo_mcnum_unused.includes(falseC)) {
    //while the value is not in unused
    while (!wo_mcnum_unused.includes(falseC)) {
      //generate a new random number and check if it is in array
      falseC = Math.floor(Math.random() * 18) + 1;
    }
  }
  let delC = wo_mcnum_unused.indexOf(falseC);
  if (delC !== -1) {
    wo_mcnum_unused.splice(delC, 1);
  }

  //generate random answer position
  let randomPosition = Math.floor(Math.random() * 3) + 1;
  console.log(randomPosition);
  //render text accordingly
  if (randomPosition == 1) {
    option1.textContent = "Watchout #" + watchouts[random - 1].number;
    option2.textContent = "Watchout #" + watchouts[falseA - 1].number;
    option3.textContent = "Watchout #" + watchouts[falseB - 1].number;
    option4.textContent = "Watchout #" + watchouts[falseC - 1].number;
  } else if (randomPosition == 2) {
    option1.textContent = "Watchout #" + watchouts[falseA - 1].number;
    option2.textContent = "Watchout #" + watchouts[random - 1].number;
    option3.textContent = "Watchout #" + watchouts[falseB - 1].number;
    option4.textContent = "Watchout #" + watchouts[falseC - 1].number;
  } else if (randomPosition == 3) {
    option1.textContent = "Watchout #" + watchouts[falseA - 1].number;
    option2.textContent = "Watchout #" + watchouts[falseB - 1].number;
    option3.textContent = "Watchout #" + watchouts[random - 1].number;
    option4.textContent = "Watchout #" + watchouts[falseC - 1].number;
  } else {
    option1.textContent = "Watchout #" + watchouts[falseA - 1].number;
    option2.textContent = "Watchout #" + watchouts[falseB - 1].number;
    option3.textContent = "Watchout #" + watchouts[falseC - 1].number;
    option4.textContent = "Watchout #" + watchouts[random - 1].number;
  }
  option1.addEventListener("click", function () {
    if (randomPosition == 1) {
      option1.style.backgroundColor = "#9ABC6B";
      document.getElementById("again").disabled = false;
    } else {
      option1.style.backgroundColor = "#D6858E";
      document.getElementById("again").disabled = true;
    }
  });
  option2.addEventListener("click", function () {
    if (randomPosition == 2) {
      option2.style.backgroundColor = "#9ABC6B";
      document.getElementById("again").disabled = false;
    } else {
      option2.style.backgroundColor = "#D6858E";
      document.getElementById("again").disabled = true;
    }
  });
  option3.addEventListener("click", function () {
    if (randomPosition == 3) {
      option3.style.backgroundColor = "#9ABC6B";
      document.getElementById("again").disabled = false;
    } else {
      option3.style.backgroundColor = "#D6858E";
      document.getElementById("again").disabled = true;
    }
  });
  option4.addEventListener("click", function () {
    if (randomPosition == 4) {
      option4.style.backgroundColor = "#9ABC6B";
      document.getElementById("again").disabled = false;
    } else {
      option4.style.backgroundColor = "#D6858E";
      document.getElementById("again").disabled = true;
    }
  });
}

//user selects give me a fire order
let fo_def_ques = document.getElementById("fo_def_ques");
let fo_def_unused = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//user selects give me a fire order, i'll tell you number
function fo_def() {
  document.getElementById("fo_def_input").value = "";
  document.getElementById("body-main").style.backgroundColor = "whitesmoke";
  document.getElementById("fo_def_input").style.backgroundColor = "grey";
  document.getElementById("again").disabled = true;
  if (fo_def_unused.length == 0) {
    document.getElementById("again").disabled = false;
    fo_def_unused = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    fo_def_ques.textContent = "That's all 10! Play again?";
  } else {
    let answer = "";
    let random = Math.floor(Math.random() * 10) + 1; //returns a random number from 1 to 18
    //if the number has been used
    if (!wo_def_unused.includes(random)) {
      //while the value is not in unused
      while (!wo_def_unused.includes(random)) {
        //generate a new random number and check if it is in array
        random = Math.floor(Math.random() * 10) + 1;
      }
    }
    let delNum = wo_def_unused.indexOf(random);
    if (delNum !== -1) {
      wo_def_unused.splice(delNum, 1);
    }

    if (random == 1) {
      fo_def_ques.textContent = fire_orders[0].text;
      answer = fire_orders[0].number;
    } else if (random == 2) {
      fo_def_ques.textContent = fire_orders[1].text;
      answer = fire_orders[1].number;
    } else if (random == 3) {
      fo_def_ques.textContent = fire_orders[2].text;
      answer = fire_orders[2].number;
    } else if (random == 4) {
      fo_def_ques.textContent = fire_orders[3].text;
      answer = fire_orders[3].number;
    } else if (random == 5) {
      fo_def_ques.textContent = fire_orders[4].text;
      answer = fire_orders[4].number;
    } else if (random == 6) {
      fo_def_ques.textContent = fire_orders[5].text;
      answer = fire_orders[5].number;
    } else if (random == 7) {
      fo_def_ques.textContent = fire_orders[6].text;
      answer = fire_orders[6].number;
    } else if (random == 8) {
      fo_def_ques.textContent = fire_orders[7].text;
      answer = fire_orders[7].number;
      x;
    } else if (random == 9) {
      fo_def_ques.textContent = fire_orders[8].text;
      answer = fire_orders[8].number;
    } else if (random == 10) {
      fo_def_ques.textContent = fire_orders[9].text;
      answer = fire_orders[9].number;
    }
    let bg = document.getElementById("fo_def_input");
    bg.oninput = function test_fo_def() {
      let usr_input = document.getElementById("fo_def_input").value;
      if (usr_input == answer) {
        bg.style.backgroundColor = "#9ABC6B";
        document.getElementById("body-main").style.backgroundColor = "#9ABC6B";
        document.getElementById("again").disabled = false;
      } else {
        bg.style.backgroundColor = "#D6858E";
      }
    };
  }
}
let fo_num_ques = document.getElementById("fo_num_ques");
let fo_num_unused = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//user selects give me a fire order number, i'll tell you the fire order
function fo_num() {
  document.getElementById("fo_num_input").value = "";
  document.getElementById("body-main").style.backgroundColor = "whitesmoke";
  document.getElementById("fo_num_input").style.backgroundColor = "grey";
  document.getElementById("again").disabled = true;
  if (fo_num_unused.length == 0) {
    document.getElementById("again").disabled = false;
    fo_num_unused = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    fo_num_ques.textContent = "That's all 10! Go again?";
  } else {
    let random = Math.floor(Math.random() * 10) + 1; //returns a random number from 1 to 18
    //if the number has been used
    if (!fo_num_unused.includes(random)) {
      //while the value is not in unused
      while (!fo_num_unused.includes(random)) {
        //generate a new random number and check if it is in array
        random = Math.floor(Math.random() * 10) + 1;
      }
    }
    let delNum = fo_num_unused.indexOf(random);
    if (delNum !== -1) {
      fo_num_unused.splice(delNum, 1);
    }
    let regex = "";
    document.getElementById("fo_num_ques").textContent =
      "What is Watchout #" + random + "?";
    if (random == 1) {
      regex = fire_orders[0].answer;
    } else if (random == 2) {
      regex = fire_orders[1].answer;
    } else if (random == 3) {
      regex = fire_orders[2].answer;
    } else if (random == 4) {
      regex = fire_orders[3].answer;
    } else if (random == 5) {
      regex = fire_orders[4].answer;
    } else if (random == 6) {
      regex = fire_orders[5].answer;
    } else if (random == 7) {
      regex = fire_orders[6].answer;
    } else if (random == 8) {
      regex = fire_orders[7].answer;
    } else if (random == 9) {
      regex = fire_orders[8].answer;
    } else if (random == 10) {
      regex = fire_orders[9].answer;
    } //need to do RegExp matching here .match()
    document.getElementById("fo_num_ques").textContent =
      "What is Fire Order #" + random + "?";
    let bg = document.getElementById("fo_num_input");
    bg.oninput = function test_fo_num() {
      //FIX
      let usr_input = document.getElementById("fo_num_input").value;
      if (regex.test(usr_input)) {
        bg.style.backgroundColor = "#9ABC6B";
        document.getElementById("body-main").style.backgroundColor = "#9ABC6B";
        document.getElementById("again").disabled = false;
      } else {
        bg.style.backgroundColor = "#D6858E";
      } //end of else
    }; //end of test_fo_num function
  } //end of fo_num function
}

//user selects fire orders multiple choice
let fo_mc_ques = document.getElementById("fo_mc_ques");
let fo_mc_unused = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function fo_mc() {
  fo_mc_unused = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  document.getElementById("body-main").style.backgroundColor = "whitesmoke";
  document.getElementById("again").disabled = true;
  let random = Math.floor(Math.random() * 10) + 1; //returns a random number from 1 to 18
  //take number out of array so it is not used again
  let delNum = fo_mc_unused.indexOf(random);
  if (delNum !== -1) {
    fo_mc_unused.splice(delNum, 1);
  }
  document.getElementById("fo_mc_ques").textContent =
    "What is Fire Order #" + random + "?";
  if (random == 1) {
    regex = fire_orders[0].text;
  } else if (random == 2) {
    regex = fire_orders[1].text;
  } else if (random == 3) {
    regex = fire_orders[2].text;
  } else if (random == 4) {
    regex = fire_orders[3].text;
  } else if (random == 5) {
    regex = fire_orders[4].text;
  } else if (random == 6) {
    regex = fire_orders[5].text;
  } else if (random == 7) {
    regex = fire_orders[6].text;
  } else if (random == 8) {
    regex = fire_orders[7].text;
  } else if (random == 9) {
    regex = fire_orders[8].text;
  } else if (random == 10) {
    regex = fire_orders[9].text;
  } else if (random == 11) {
    regex = fire_orders[10].text;
  }
  let option1 = document.getElementById("option-1");
  let option2 = document.getElementById("option-2");
  let option3 = document.getElementById("option-3");
  let option4 = document.getElementById("option-4");
  option1.style.backgroundColor = "";
  option2.style.backgroundColor = "";
  option3.style.backgroundColor = "";
  option4.style.backgroundColor = "";
  //generate false answers
  let falseA = Math.floor(Math.random() * 10) + 1;
  //make sure falseA != random
  if (!fo_mc_unused.includes(falseA)) {
    //while the value is not in unused
    while (!fo_mc_unused.includes(falseA)) {
      //generate a new random number and check if it is in array
      falseA = Math.floor(Math.random() * 10) + 1;
    }
  }
  let delA = fo_mc_unused.indexOf(falseA);
  if (delA !== -1) {
    fo_mc_unused.splice(delA, 1);
  }
  let falseB = Math.floor(Math.random() * 10) + 1;
  //make sure falseB != falseA or random
  if (!fo_mc_unused.includes(falseB)) {
    //while the value is not in unused
    while (!fo_mc_unused.includes(falseB)) {
      //generate a new random number and check if it is in array
      falseB = Math.floor(Math.random() * 10) + 1;
    }
  }
  let delB = fo_mc_unused.indexOf(falseB);
  if (delB !== -1) {
    fo_mc_unused.splice(delB, 1);
  }
  let falseC = Math.floor(Math.random() * 10) + 1;
  if (!fo_mc_unused.includes(falseC)) {
    //while the value is not in unused
    while (!fo_mc_unused.includes(falseC)) {
      //generate a new random number and check if it is in array
      falseC = Math.floor(Math.random() * 10) + 1;
    }
  }
  let delC = fo_mc_unused.indexOf(falseC);
  if (delC !== -1) {
    fo_mc_unused.splice(delC, 1);
  }

  //generate random answer position
  let randomPosition = Math.floor(Math.random() * 3) + 1;

  //render text accordingly
  if (randomPosition == 1) {
    option1.textContent = fire_orders[random - 1].text;
    option2.textContent = fire_orders[falseA - 1].text;
    option3.textContent = fire_orders[falseB - 1].text;
    option4.textContent = fire_orders[falseC - 1].text;
  } else if (randomPosition == 2) {
    option1.textContent = fire_orders[falseA - 1].text;
    option2.textContent = fire_orders[random - 1].text;
    option3.textContent = fire_orders[falseB - 1].text;
    option4.textContent = fire_orders[falseC - 1].text;
  } else if (randomPosition == 3) {
    option1.textContent = fire_orders[falseA - 1].text;
    option2.textContent = fire_orders[falseB - 1].text;
    option3.textContent = fire_orders[random - 1].text;
    option4.textContent = fire_orders[falseC - 1].text;
  } else {
    option1.textContent = fire_orders[falseA - 1].text;
    option2.textContent = fire_orders[falseB - 1].text;
    option3.textContent = fire_orders[falseC - 1].text;
    option4.textContent = fire_orders[random - 1].text;
  }
  option1.addEventListener("click", function () {
    if (randomPosition == 1) {
      option1.style.backgroundColor = "#9ABC6B";
      document.getElementById("again").disabled = false;
    } else {
      option1.style.backgroundColor = "#D6858E";
      document.getElementById("again").disabled = true;
    }
  });
  option2.addEventListener("click", function () {
    if (randomPosition == 2) {
      option2.style.backgroundColor = "#9ABC6B";
      document.getElementById("again").disabled = false;
    } else {
      option2.style.backgroundColor = "#D6858E";
      document.getElementById("again").disabled = true;
    }
  });
  option3.addEventListener("click", function () {
    if (randomPosition == 3) {
      option3.style.backgroundColor = "#9ABC6B";
      document.getElementById("again").disabled = false;
    } else {
      option3.style.backgroundColor = "#D6858E";
      document.getElementById("again").disabled = true;
    }
  });
  option4.addEventListener("click", function () {
    if (randomPosition == 4) {
      option4.style.backgroundColor = "#9ABC6B";
      document.getElementById("again").disabled = false;
    } else {
      option4.style.backgroundColor = "#D6858E";
      document.getElementById("again").disabled = true;
    }
  });
}

// user selects watchout multiple choice numbers
let fo_mcnum_ques = document.getElementById("fo_mcnum_ques");
let fo_mcnum_unused = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function fo_mc_num() {
  fo_mcnum_unused = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  document.getElementById("body-main").style.backgroundColor = "whitesmoke";
  document.getElementById("again").disabled = true;
  let random = Math.floor(Math.random() * 10) + 1; //returns a random number from 1 to 18
  //take number out of array so it is not used again
  let delNum = fo_mcnum_unused.indexOf(random);
  if (delNum !== -1) {
    fo_mcnum_unused.splice(delNum, 1);
  }

  if (random == 1) {
    fo_mcnum_ques.textContent = fire_orders[0].text;
    answer = fire_orders[0].number;
  } else if (random == 2) {
    fo_mcnum_ques.textContent = fire_orders[1].text;
    answer = fire_orders[1].number;
  } else if (random == 3) {
    fo_mcnum_ques.textContent = fire_orders[2].text;
    answer = fire_orders[2].number;
  } else if (random == 4) {
    fo_mcnum_ques.textContent = fire_orders[3].text;
    answer = fire_orders[3].number;
  } else if (random == 5) {
    fo_mcnum_ques.textContent = fire_orders[4].text;
    answer = fire_orders[4].number;
  } else if (random == 6) {
    fo_mcnum_ques.textContent = fire_orders[5].text;
    answer = fire_orders[5].number;
  } else if (random == 7) {
    fo_mcnum_ques.textContent = fire_orders[6].text;
    answer = fire_orders[6].number;
  } else if (random == 8) {
    fo_mcnum_ques.textContent = fire_orders[7].text;
    answer = fire_orders[7].number;
  } else if (random == 9) {
    fo_mcnum_ques.textContent = fire_orders[8].text;
    answer = fire_orders[8].number;
  } else if (random == 10) {
    fo_mcnum_ques.textContent = fire_orders[9].text;
    answer = fire_orders[9].number;
  }
  let option1 = document.getElementById("option-1");
  let option2 = document.getElementById("option-2");
  let option3 = document.getElementById("option-3");
  let option4 = document.getElementById("option-4");
  option1.style.backgroundColor = "";
  option2.style.backgroundColor = "";
  option3.style.backgroundColor = "";
  option4.style.backgroundColor = "";
  //generate false answers
  let falseA = Math.floor(Math.random() * 10) + 1;
  //make sure falseA != random
  if (!fo_mcnum_unused.includes(falseA)) {
    //while the value is not in unused
    while (!fo_mcnum_unused.includes(falseA)) {
      //generate a new random number and check if it is in array
      falseA = Math.floor(Math.random() * 10) + 1;
    }
  }
  let delA = fo_mcnum_unused.indexOf(falseA);
  if (delA !== -1) {
    fo_mcnum_unused.splice(delA, 1);
  }
  let falseB = Math.floor(Math.random() * 10) + 1;
  //make sure falseB != falseA or random
  if (!fo_mcnum_unused.includes(falseB)) {
    //while the value is not in unused
    while (!fo_mcnum_unused.includes(falseB)) {
      //generate a new random number and check if it is in array
      falseB = Math.floor(Math.random() * 10) + 1;
    }
  }
  let delB = fo_mcnum_unused.indexOf(falseB);
  if (delB !== -1) {
    fo_mcnum_unused.splice(delB, 1);
  }
  let falseC = Math.floor(Math.random() * 10) + 1;
  if (!fo_mcnum_unused.includes(falseC)) {
    //while the value is not in unused
    while (!fo_mcnum_unused.includes(falseC)) {
      //generate a new random number and check if it is in array
      falseC = Math.floor(Math.random() * 10) + 1;
    }
  }
  let delC = fo_mcnum_unused.indexOf(falseC);
  if (delC !== -1) {
    fo_mcnum_unused.splice(delC, 1);
  }
  //generate random answer position
  let randomPosition = Math.floor(Math.random() * 3) + 1;
  //render text accordingly
  if (randomPosition == 1) {
    option1.textContent = "Fire Order #" + fire_orders[random - 1].number;
    option2.textContent = "Fire Order #" + fire_orders[falseA - 1].number;
    option3.textContent = "Fire Order #" + fire_orders[falseB - 1].number;
    option4.textContent = "Fire Order #" + fire_orders[falseC - 1].number;
  } else if (randomPosition == 2) {
    option1.textContent = "Fire Order #" + fire_orders[falseA - 1].number;
    option2.textContent = "Fire Order #" + fire_orders[random - 1].number;
    option3.textContent = "Fire Order #" + fire_orders[falseB - 1].number;
    option4.textContent = "Fire Order #" + fire_orders[falseC - 1].number;
  } else if (randomPosition == 3) {
    option1.textContent = "Fire Order #" + fire_orders[falseA - 1].number;
    option2.textContent = "Fire Order #" + fire_orders[falseB - 1].number;
    option3.textContent = "Fire Order #" + fire_orders[random - 1].number;
    option4.textContent = "Fire Order #" + fire_orders[falseC - 1].number;
  } else {
    option1.textContent = "Fire Order #" + fire_orders[falseA - 1].number;
    option2.textContent = "Fire Order #" + fire_orders[falseB - 1].number;
    option3.textContent = "Fire Order #" + fire_orders[falseC - 1].number;
    option4.textContent = "Fire Order #" + fire_orders[random - 1].number;
  }
  option1.addEventListener("click", function () {
    if (randomPosition == 1) {
      option1.style.backgroundColor = "#9ABC6B";
      document.getElementById("again").disabled = false;
    } else {
      option1.style.backgroundColor = "#D6858E";
      document.getElementById("again").disabled = true;
    }
  });
  option2.addEventListener("click", function () {
    if (randomPosition == 2) {
      option2.style.backgroundColor = "#9ABC6B";
      document.getElementById("again").disabled = false;
    } else {
      option2.style.backgroundColor = "#D6858E";
      document.getElementById("again").disabled = true;
    }
  });
  option3.addEventListener("click", function () {
    if (randomPosition == 3) {
      option3.style.backgroundColor = "#9ABC6B";
      document.getElementById("again").disabled = false;
    } else {
      option3.style.backgroundColor = "#D6858E";
      document.getElementById("again").disabled = true;
    }
  });
  option4.addEventListener("click", function () {
    if (randomPosition == 4) {
      option4.style.backgroundColor = "#9ABC6B";
      document.getElementById("again").disabled = false;
    } else {
      option4.style.backgroundColor = "#D6858E";
      document.getElementById("again").disabled = true;
    }
  });
}
