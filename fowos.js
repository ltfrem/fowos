//10 Standard Fire Orders
let fo1 = "Keep informed on fire weather conditions and forecasts.";
let fo1_answer = /^Keep informed of fire weather conditions and forecasts/;
let fo2 = "Know what your fire is doing at all times.";
let fo3 = "Base all actions on the current and expected behavior of the fire.";
let fo4 = "Identify escape routes and safety zones and make them known.";
let fo5 = "Post lookouts when there is possible danger.";
let fo6 = "Be alert. Keep calm. Think clearly. Act decisively.";
let fo7 = "Maintain prompt communications with your forces, your supervisor, and adjoining forces.";
let fo8 = "Give clear instructions and ensure they are understood.";
let fo9 = "Maintain control of your forces at all times.";
let fo10 = "Fight fire aggressively, having provided for safety first.";
// 18 Watchout Situtations
let wo1 = "Fire not scouted and sized up.";
let wo2 = "In country not seen in daylight.";
let wo3 = "Safety zones and escape routes not identified.";
let wo4 = "Unfamiliar with weather and local factors influencing fire behavior.";
let wo5 = "Uninformed on strategy, tactics, and hazards.";
let wo6 = "Instructions and assignments not clear.";
let wo7 = "No communication link with crew members or supervisor.";
let wo8 = "Constructing line without safe anchor point.";
let wo9 = "Building fireline downhill with fire below.";
let wo10 = "Attempting frontal assault on fire.";
let wo11 = "Unburned fuel between you and fire.";
let wo12 = "Cannot see main fire; not in contact with someone who can.";
let wo13 = "On a hillside where rolling material can ignite fuel below.";
let wo14 = "Weather becoming hotter and drier.";
let wo15 = "Wind increases and/or changes direction.";
let wo16 = "Getting frequent spot fires across line.";
let wo17 = "Terrain and fuels make escape to safety zones difficult.";
let wo18 = "Taking a nap near fireline.";

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('wo_def').addEventListener('click', wo_def);
  document.getElementById('wo_num').addEventListener('click', wo_num);
  document.getElementById('fo_def').addEventListener('click', fo_def);
  document.getElementById('fo_num').addEventListener('click', fo_num);
});
//user selects give me a watchout
function wo_def() {
  let question = '';
  let random = Math.floor(Math.random() * 10) + 1; //returns a random number from 1 to 10
  if (random == 1) {
    question = prompt(wo1);
  } else if (random == 2) {
    question = prompt(wo2);
  } else if (random == 3) {
    question = prompt(wo3);
  } else if (random == 4) {
    question = prompt(wo4);
  } else if (random == 5) {
    question = prompt(wo5);
  } else if (random == 6) {
    question = prompt(wo6);
  } else if (random == 7) {
    question = prompt(wo7);
  } else if (random == 8) {
    question = prompt(wo8);
  } else if (random == 9) {
    question = prompt(wo9);
  } else if (random == 10) {
    question = prompt(wo10);
  } else if (random == 11) {
    question = prompt(wo11);
  } else if (random == 12) {
    question = prompt(wo12);
  } else if (random == 13) {
    question = prompt(wo13);
  } else if (random == 14) {
    question = prompt(wo14);
  } else if (random == 15) {
    question = prompt(wo15);
  } else if (random == 16) {
    question = prompt(wo16);
  } else if (random == 17) {
    question = prompt(wo17);
  } else if (random == 18) {
    question = prompt(wo18);
  }
  return question
};
//user selects 'give me a watchout number'
function wo_num() {
  let random = Math.floor(Math.random() * 10) + 1; //returns a random number from 1 to 10
  prompt('What is Watchout #' + random + '?');
};
//user selects give me a fire order
function fo_def() {
  let random = Math.floor(Math.random() * 18) + 1;
  if (random == 1) {
    prompt(fo1);
  } else if (random == 2) {
    prompt(fo2);
  } else if (random == 3) {
    prompt(fo3);
  } else if (random == 4) {
    prompt(fo4);
  } else if (random == 5) {
    prompt(fo5);
  } else if (random == 6) {
    prompt(fo6);
  } else if (random == 7) {
    prompt(fo7);
  } else if (prompt == 8) {
    prompt(fo8);
  } else if (prompt == 9) {
    prompt(fo9);
  } else if (prompt == 10) {
    prompt(fo10);
  }
};
//user selects 'give me a fire order number'
function fo_num() {
  let random = Math.floor(Math.random() * 18) + 1;
  prompt('What is Fire Order #' + random + '?');
};
function test_wo_def() {

};
function test_wo_num() {

};
function test_fo_def() {

};
function test_fo_num() {

};
//now i need to do regexp to evaluate each entry
