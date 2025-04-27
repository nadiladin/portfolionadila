function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6C5lpeyvlq2":
        Script1();
        break;
      case "600F0CsggNH":
        Script2();
        break;
      case "6D0Xje3KwEg":
        Script3();
        break;
      case "5eHmPYgV69h":
        Script4();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('6cLISLUhq4l');
const duration = 750;
const easing = 'ease-out';
const id = '5w2BlMWZiil';
const pulseAmount = 0.07;
const delay = 2000;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('6PwSUn6cCxg');
const duration = 750;
const easing = 'ease-out';
const id = '6LT9XzsX9Ez';
const pulseAmount = 0.07;
const delay = 2000;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  const target = object('6DUmj9ISXub');
const duration = 750;
const easing = 'ease-out';
const id = '67PM4CGm6fy';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('6DUmj9ISXub');
const duration = 750;
const easing = 'ease-out';
const id = '67PM4CGm6fy_reverse';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
