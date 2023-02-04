// 18 Watchout Situtations
const watchouts = [];
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
    /\s*?[Mm][Aa][Ii][Nn][Tt][Aa][Ii][Nn]\s*?[Pp][Rr][Oo][Mm][Pp][Tt]\s*?[Cc][Oo][Mm][Mm][Uu][Nn][Ii][Cc][Aa][Tt][Ii][Oo][Nn][Ss]\s*?[Ww][Ii][Tt][Hh]\s*?[Yy][Oo][Uu][Rr]\s*?[Ff][Oo][Rr][Cc][Ee][Ss][,]\s*?[Yy][Oo][Uu][Rr]\s*?[Ss][Uu][Pp][Ee][Rr][Vv][Ii][Ss][Oo][Rr][,]\s*?[Aa][Nn][Dd]\s*?[Aa][Dd][Jj][Oo][Ii][Nn][Ii][Nn][Gg]\s*?[Ff][Oo][Rr][Cc][Ee][Ss][.]?\s*?/
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
console.log(watchouts);
console.log(fire_orders);
