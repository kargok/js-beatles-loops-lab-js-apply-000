// add solution here
function theBeatlesPlay(musicians,instruments) {
  const a = []
  for (counter = 0; counter < musicians.length; counter++) {
    s = musicians[counter] + " plays " + instruments[counter];
    a.push(s)
  }
}