// add solution here
function theBeatlesPlay(musicians,instruments) {
  const a = [];
  var s = "";
  var i = 0;
  for (i = 0; i < musicians.length; i++) {
    s = musicians[i] + " plays " + instruments[i];
    a.push(s);
  }
  return a;
}

function johnLennonFacts(arg1) {
  var flag = 0;
  const arg2 = [];
  while (flag <= arg1.length) {
    arg2[flag] = arg1[flag] + "!!!";
    flag++;
  }
  return arg2;
}