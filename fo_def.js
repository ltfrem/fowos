// 18 Watchout Situtations
const wo1 = "Fire not scouted and sized up.";
let wo1_answer = new RegExp(/\s*?[Ff][Ii][Rr][Ee]\s*?[Nn][Oo][Tt]\s*?[Ss][Cc][Oo][Uu][Tt][Ee][Dd]\s*?[Aa][Nn][Dd]\s*?[Ss][Ii][Zz][Ee][Dd]\s*?[Uu][Pp][.]?\s*?/);
const wo2 = "In country not seen in daylight.";
let wo2_answer = new RegExp(/\s*?[Ii][Nn]\s*?[Cc][Oo][Uu][Nn][Tt][Rr][Yy]\s*?[Nn][Oo][Tt]\s*?[Ss][Ee][Ee][Nn]\s*?[Ii][Nn]\s*?[Dd][Aa][Yy][Ll][Ii][Gg][Hh][Tt][.]?\s*?/);
const wo3 = "Safety zones and escape routes not identified.";
let wo3_answer = new RegExp(/\s*?[Ss][Aa][Ff][Ee][Tt][Yy]\s*?[Zz][Oo][Nn][Ee][Ss]\s*?[Aa][Nn][Dd]\s*?[Ee][Ss][Cc][Aa][Pp][Ee]\s*?[Rr][Oo][Uu][Tt][Ee][Ss]\s*?[Nn][Oo][Tt]\s*?[Ii][Dd][Ee][Nn][Tt][Ii][Ff][Ii][Ee][Dd][.]?\s*?/);
const wo4 = "Unfamiliar with weather and local factors influencing fire behavior.";
let wo4_answer = new RegExp(/\s*?[Uu][Nn][Ff][Aa][Mm][Ii][Ll][Ii][Aa][Rr]\s*?[Ww][Ii][Tt][Hh]\s*?[Ww][Ee][Aa][Tt][Hh][Ee][Rr]\s*?[Aa][Nn][Dd]\s*?[Ll][Oo][Cc][Aa][Ll]\s*?[Ff][Aa][Cc][Tt][Oo][Rr][Ss]\s*?[Ii][Nn][Ff][Ll][Uu][Ee][Nn][Cc][Ii][Nn][Gg]\s*?[Ff][Ii][Rr][Ee]\s*?[Bb][Ee][Hh][Aa][Vv][Ii][Oo][Rr][.]?\s*?/);
const wo5 = "Uninformed on strategy, tactics, and hazards.";
let wo5_answer = new RegExp(/\s*?[Uu][Nn][Ii][Nn][Ff][Oo][Rr][Mm][Ee][Dd]\s*?[Oo][Nn]\s*?[Ss][Tt][Rr][Aa][Tt][Ee][Gg][Yy][,]?\s*?[Tt][Aa][Cc][Tt][Ii][Cc][Ss][,]?\s*?[Aa][Nn][Dd]\s*?[Hh][Aa][Zz][Aa][Rr][Dd][Ss][.]?\s*?/);
const wo6 = "Instructions and assignments not clear.";
let wo6_answer = new RegExp(/\s*?[Ii][Nn][Ss][Tt][Rr][Uu][Cc][Tt][Ii][Oo][Nn][Ss]\s*?[Aa][Nn][Dd]\s*?[Aa][Ss][Ss][Ii][Gg][Nn][Mm][Ee][Nn][Tt][Ss]\s*?[Nn][Oo][Tt]\s*?[Cc][Ll][Ee][Aa][Rr][.]?\s*?/);
const wo7 = "No communication link with crew members or supervisor.";
let wo7_answer = new RegExp(/\s*?[Nn][Oo]\s*?[Cc][Oo][Mm][Mm][Uu][Nn][Ii][Cc][Aa][Tt][Ii][Oo][Nn]\s*?[Ll][Ii][Nn][Kk]\s*?[Ww]?[Ii]?[Tt]?[Hh]?[Bb]?[Ee]?[Tt]?[Ww]?[Ee]?[Ee]?[Nn]?\s*?[Cc][Rr][Ee][Ww]\s*?[Mm][Ee][Mm][Bb][Ee][Rr][Ss]\s*?[Oo]?[Rr]?[Aa]?[Nn]?[Dd]?\s*?[Ss][Uu][Pp][Ee][Rr][Vv][Ii][Ss][Oo][Rr][Ss]?[.]?\s*?/);
const wo8 = "Constructing line without safe anchor point.";
let wo8_answer = new RegExp(/\s*?[Cc][Oo][Nn][Ss][Tt][Rr][Uu][Cc][Tt][Ii][Nn][Gg]\s*?[Ff]?[Ii]?[Rr]?[Ee]?[Ll][Ii][Nn][Ee]\s*?[Ww][Ii][Tt][Hh][Oo][Uu][Tt]\s*?[Ss][Aa][Ff][Ee]\s*?[Aa][Nn][Cc][Hh][Oo][Rr]\s*?[Pp][Oo][Ii][Nn][Tt][Ss]?[.]?\s*?/);
const wo9 = "Building fireline downhill with fire below.";
let wo9_answer = new RegExp(/\s*?[Cc]?[Oo]?[Nn]?[Ss]?[Tt]?[Rr]?[Uu]?[Cc]?[Tt]?[Ii]?[Nn]?[Gg]?[Bb]?[Uu]?[Ii]?[Ll]?[Dd]?[Ii]?[Nn]?[Gg]?\s*?[Ff]?[Ii]?[Rr]?[Ee]?[Ll][Ii][Nn][Ee]\s*?[Dd][Oo][Ww][Nn][Hh][Ii][Ll][Ll]\s*?[Ww][Ii][Tt][Hh]\s*?[Ff][Ii][Rr][Ee]\s*?[Bb][Ee][Ll][Oo][Ww]\s*?[.]?\s*?/);
const wo10 = "Attempting frontal assault on fire.";
let wo10_answer = new RegExp(/\s*?[Aa][Tt][Tt][Ee][Mm][Pp][Tt][Ii][Nn][Gg]\s*?[Ff][Rr][Oo][Nn][Tt][Aa][Ll]\s*?[Aa][Ss][Ss][Aa][Uu][Ll][Tt]\s*?[Oo][Nn]\s*?[Ff][Ii][Rr][Ee]\s*?[.]?\s*?/);
const wo11 = "Unburned fuel between you and fire.";
let wo11_answer = new RegExp(/\s*?[Uu][Nn][Bb][Uu][Rr][Nn][Ee][Dd]\s*?[Ff][Uu][Ee][Ll]\s*?[Bb][Ee][Tt][Ww][Ee][Ee][Nn]\s*?[Yy][Oo][Uu]\s*?[Aa][Nn][Dd]\s*?[Tt]?[Hh]?[Ee]?\s*?[Ff][Ii][Rr][Ee]\s*?[.]?\s*?/);
const wo12 = "Cannot see main fire; not in contact with someone who can.";
let wo12_answer = new RegExp(/\s*?[Cc][Aa][Nn][Nn][Oo][Tt]\s*?[Ss][Ee][Ee]\s*?[Mm][Aa][Ii][Nn]\s*?[Ff][Ii][Rr][Ee][,;.]?\s*?[Aa]?[Nn]?[Dd]?\s*?[Nn][Oo][Tt]\s*?[Ii][Nn]\s*?[Cc][Oo][Nn][Tt][Aa][Cc][Tt]\s*?[Ww][Ii][Tt][Hh]\s*?[Ss][Oo][Mm][Ee][Oo][Nn][Ee]\s*?[Ww][Hh][Oo]\s*?[Cc][Aa][Nn][.]?\s*?/);
const wo13 = "On a hillside where rolling material can ignite fuel below.";
let wo13_answer = new RegExp(/\s*?[Oo][Nn]\s*?[Aa]\s*?[Hh][Ii][Ll][Ll][Ss]?[Ii]?[Dd]?[Ee]?\s*?[Ww][Hh][Ee][Rr][Ee]\s*?[Rr][Oo][Ll][Ll][Ii][Nn][Gg]\s*?[Mm][Aa][Tt][Ee][Rr][Ii][Aa][Ll][Ss]?\s*?[Cc][Aa][Nn]\s*?[Ii][Gg][Nn][Ii][Tt][Ee]\s*?[Ff][Uu][Ee][Ll][Ss]?\s*?[Bb][Ee][Ll][Oo][Ww][.]?\s*?/);
const wo14 = "Weather becoming hotter and drier.";
let wo14_answer = new RegExp(/\s*?[Ww][Ee][Aa][Tt][Hh][Ee][Rr]\s*?[Bb][Ee][Cc][Oo][Mm][Ii][Nn][Gg]\s*?[Hh][Oo][Tt][Tt][Ee][Rr]\s*?[Aa][Nn][Dd]\s*?[Dd][Rr][Ii][Ee][Rr][.]?\s*?/);
const wo15 = "Wind increases and/or changes direction.";
let wo15_answer = new RegExp(/\s*?[Ww][Ii][Nn][Dd]\s*?[Ii][Nn][Cc][Rr][Ee][Aa][Ss][Ee][Ss]\s*?[Aa][Nn][Dd][\/,]?\s*?[Oo][Rr]\s*?[Cc][Hh][Aa][Nn][Gg][Ee][Ss]\s*?[Dd][Ii][Rr][Ee][Cc][Tt][Ii][Oo][Nn][Ss]?[.]?\s*?/);
const wo16 = "Getting frequent spot fires across line.";
let wo16_answer = new RegExp(/\s*?[Gg][Ee][Tt][Tt][Ii][Nn][Gg]\s*?[Ff][Rr][Ee][Qq][Uu][Ee][Nn][Tt]\s*?[Ss][Pp][Oo][Tt]\s*?[Ff][Ii][Rr][Ee][Ss]\s*?[Aa][Cc][Rr][Oo][Ss][Ss]\s*?[Tt]?[Hh]?[Ee]?\s*?[Ff]?[Ii]?[Rr]?[Ee]?[Ll][Ii][Nn][Ee][.]?\s*?/);
const wo17 = "Terrain and fuels make escape to safety zones difficult.";
let wo17_answer = new RegExp(/\s*?[Tt][Ee][Rr][Rr][Aa][Ii][Nn]\s*?[Aa][Nn][Dd]\s*?[Ff][Uu][Ee][Ll][Ss]?\s*?[Mm][Aa][Kk][Ee][Ss]?\s*?[Ee][Ss][Cc][Aa][Pp][Ee]\s*?[Tt][Oo]\s*?[Ss][Aa][Ff][Ee][Tt][Yy]\s*?[Zz][Oo][Nn][Ee][Ss]\s*?[Dd][Ii][Ff][Ff][Ii][Cc][Uu][Ll][Tt][.]?\s*?/);
const wo18 = "Taking a nap near fireline.";
let wo18_answer = new RegExp(/\s*?[Tt]?[Aa]?[Kk]?[Ii]?[Nn]?[Gg]?\s*?[Aa]?\s*?[Nn]?[Aa]?[Pp]?\s*?[Nn]?[Aa]?[Pp]?[Pp]?[Ii]?[Nn]?[Gg]?\s*?[Nn][Ee][Aa][Rr]\s*?[Aa]?\s*?[Ff]?[Ii]?[Rr]?[Ee]?[Ll][Ii][Nn][Ee][.]?\s*?/);
//10 Standard Fire Orders
const fo1 = "Keep informed on fire weather conditions and forecasts.";
let fo1_answer = new RegExp(/\s*?[Kk][Ee][Ee][Pp]\s*?[Ii][Nn][Ff][Oo][Rr][Mm][Ee][Dd]\s*?[Oo][NnFf]\s*?[Ff][Ii][Rr][Ee]\s*?[Ww][Ee][Aa][Tt][Hh][Ee][Rr]\s*?[Cc][Oo][Nn][Dd][Ii][Tt][Ii][Oo][Nn][Ss]\s*?[Aa][Nn][Dd]\s*?[Ff][Oo][Rr][Ee][Cc][Aa][Ss][Tt][Ss][.]?\s*?/);
const fo2 = "Know what your fire is doing at all times.";
let fo2_answer = new RegExp(/\s*?[Kk][Nn][Oo][Ww]\s*?[Ww][Hh][Aa][Tt]\s*?[Yy][Oo][Uu][Rr]\s*?[Ff][Ii][Rr][Ee]\s*?[Ii][Ss]\s*?[Dd][Oo][Ii][Nn][Gg]\s*?[Aa][Tt]\s*?[Aa][Ll][Ll]\s*?[Tt][Ii][Mm][Ee][Ss][.]?\s*?/);
const fo3 = "Base all actions on the current and expected behavior of the fire.";
let fo3_answer = new RegExp(/\s*?[Bb][Aa][Ss][Ee]\s*?[Aa][Ll][Ll]\s*?[Aa][Cc][Tt][Ii][Oo][Nn][Ss]\s*?[Oo][Nn]\s*?[Tt]?[Hh]?[Ee]?\s*?[Cc][Uu][Rr][Rr][Ee][Nn][Tt]\s*?[Aa][Nn][Dd]\s*?[Ee][Xx][Pp][Ee][Cc][Tt][Ee][Dd]\s*?[Bb][Ee][Hh][Aa][Vv][Ii][Oo][Rr]\s*?[Oo][Ff]\s*?[Tt][Hh][Ee]\s*?[Ff][Ii][Rr][Ee][.]?\s*?/);
const fo4 = "Identify escape routes and safety zones and make them known.";
let fo4_answer = new RegExp(/\s*?[Ii][Dd][Ee][Nn][Tt][Ii][Ff][Yy]\s*?[Ee][Ss][Cc][Aa][Pp][Ee]\s*?[Rr][Oo][Uu][Tt][Ee][Ss]\s*?[Aa][Nn][Dd]\s*?[Ss][Aa][Ff][Ee][Tt][Yy]\s*?[Zz][Oo][Nn][Ee][Ss]\s*?[Aa][Nn][Dd]\s*?[Mm][Aa][Kk][Ee]\s*?[Tt][Hh][Ee][Mm]\s*?[Kk][Nn][Oo][Ww][Nn][.]?\s*?/);
const fo5 = "Post lookouts when there is possible danger.";
let fo5_answer = new RegExp(/\s*?[Pp][Oo][Ss][Tt]\s*?[Ll][Oo][Oo][Kk][Oo][Uu][Tt][Ss]\s*?[Ww][Hh][Ee][Nn]\s*?[Tt][Hh][Ee][Rr][Ee]\s*?[Ii][Ss]\s*?[Pp][Oo][Ss][Ss][Ii][Bb][Ll][Ee]\s*?[Dd][Aa][Nn][Gg][Ee][Rr][.]?\s*?/);
const fo6 = "Be alert. Keep calm. Think clearly. Act decisively.";
let fo6_answer = new RegExp(/\s*?[Bb][Ee]\s*?[Aa][Ll][Ee][Rr][Tt][.,]?\s*?[Kk][Ee][Ee][Pp]\s*?[Cc][Aa][Ll][Mm][,.]?\s*?[Tt][Hh][Ii][Nn][Kk]\s*?[Cc][Ll][Ee][Aa][Rr][Ll][Yy][,.]?\s*?[Aa][Cc][Tt]\s*?[Dd][Ee][Cc][Ii][Ss][Ii][Vv][Ee][Ll][Yy][.]?\s*?/);
const fo7 = "Maintain prompt communications with your forces, your supervisor, and adjoining forces.";
let fo7_answer = new RegExp(/\s*?[Mm][Aa][Ii][Nn][Tt][Aa][Ii][Nn]\s*?[Pp][Rr][Oo][Mm][Pp][Tt]\s*?[Cc][Oo][Mm][Mm][Uu][Nn][Ii][Cc][Aa][Tt][Ii][Oo][Nn][Ss]\s*?[Ww][Ii][Tt][Hh]\s*?[Yy][Oo][Uu][Rr]\s*?[Ff][Oo][Rr][Cc][Ee][Ss][,]\s*?[Yy][Oo][Uu][Rr]\s*?[Ss][Uu][Pp][Ee][Rr][Vv][Ii][Ss][Oo][Rr][,]\s*?[Aa][Nn][Dd]\s*?[Aa][Dd][Jj][Oo][Ii][Nn][Ii][Nn][Gg]\s*?[Ff][Oo][Rr][Cc][Ee][Ss][.]?\s*?/);
const fo8 = "Give clear instructions and ensure they are understood.";
let fo8_answer = new RegExp(/\s*?[Gg][Ii][Vv][Ee]\s*?[Cc][Ll][Ee][Aa][Rr]\s*?[Ii][Nn][Ss][Tt][Rr][Uu][Cc][Tt][Ii][Oo][Nn][Ss]\s*?[Aa][Nn][Dd]\s*?[Ee][Nn][Ss][Uu][Rr][Ee]\s*?[Tt]?[Hh]?[Aa]?[Tt]?\s*?[Tt][Hh][Ee][Yy]\s*?[Aa][Rr][Ee]\s*?[Uu][Nn][Dd][Ee][Rr][Ss][Tt][Oo][Oo][Dd][.]?\s*?/);
const fo9 = "Maintain control of your forces at all times.";
let fo9_answer = new RegExp(/\s*?[Mm][Aa][Ii][Nn][Tt][Aa][Ii][Nn]\s*?[Cc][Oo][Nn][Tt][Rr][Oo][Ll]\s*?[Oo][Ff]\s*?[Yy][Oo][Uu][Rr]\s*?[Ff][Oo][Rr][Cc][Ee][Ss]\s*?[Aa][Tt]\s*?[Aa][Ll][Ll]\s*?[Tt][Ii][Mm][Ee][Ss][.]?\s*?/);
const fo10 = "Fight fire aggressively, having provided for safety first.";
let fo10_answer = new RegExp(/\s*?[Ff][Ii][Gg][Hh][Tt]\s*?[Ff][Ii][Rr][Ee]\s*?[Aa][Gg][Gg][Rr][Ee][Ss][Ss][Ii][Vv][Ee][Ll][Yy][,]?\s*?[Hh][Aa][Vv][Ii][Nn][Gg]\s*?[Pp][Rr][Oo][Vv][Ii][Dd][Ee][Dd]\s*?[Ff][Oo][Rr]\s*?[Ss][Aa][Ff][Ee][Tt][Yy]\s*?[Ff][Ii][Rr][Ss][Tt][.]?\s*?/);

//document.getElementById("fo_def_input").style.backgroundColor = "#FFFFFF";
let random = Math.floor(Math.random() * 10) + 1;
console.log(random);
let answer = "";
window.onload = function() {
  question();
  function question() {
  if (random == 1) {
    document.getElementById("fo_def_ques").innerHTML = fo1;
    answer = 1;
  } else if (random == 2) {
    document.getElementById("fo_def_ques").innerHTML = fo2;
    answer = 2;
  } else if (random == 3) {
    document.getElementById("fo_def_ques").innerHTML = fo3;
    answer = 3;
  } else if (random == 4) {
    document.getElementById("fo_def_ques").innerHTML = fo4;
    answer = 4;
  } else if (random == 5) {
    document.getElementById("fo_def_ques").innerHTML = fo5;
    answer = 5;
  } else if (random == 6) {
    document.getElementById("fo_def_ques").innerHTML = fo6;
    answer = 6;
  } else if (random == 7) {
    document.getElementById("fo_def_ques").innerHTML = fo7;
    answer = 7;
  } else if (random == 8) {
    document.getElementById("fo_def_ques").innerHTML = fo8;
    answer = 8;
  } else if (random == 9) {
    document.getElementById("fo_def_ques").innerHTML = fo9;
    answer = 9;
  } else if (random == 10) {
    document.getElementById("fo_def_ques").innerHTML = fo10;
    answer = 10;
  };
};
};
  let bg = document.getElementById("fo_def_input");
  bg.oninput = function test_fo_def() {
    let usr_input = document.getElementById("fo_def_input").value;
    if (usr_input == answer) {
      bg.style.backgroundColor = "#9ABC6B";
      document.getElementById("another_3").style.display = "block";
      document.getElementById("another_3").addEventListener("click", fo_def);
    } else {
      bg.style.backgroundColor = "#D6858E";
    } //end of else
  }; //end of test_fo_def function
