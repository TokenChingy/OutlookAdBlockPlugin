const targetStrings = [
  "It looks like you're using an ad blocker. To maximize the space in your inbox, sign up for ",
  'Upgrade to Office 365 with ',
];

let targetsFound = 0;

let targetHunt = setInterval(() => {
  if (targetsFound >= 3) {
    clearInterval(targetHunt);
    console.log(targetsFound);
  }

  let spanTargets = document.querySelectorAll('span');

  spanTargets.forEach(element => {
    if (
      element.textContent.includes(targetStrings[0]) ||
      element.textContent.includes(targetStrings[1])
    ) {
      let targetAd = element.parentNode.parentNode.parentNode;

      targetsFound++;
      targetAd.parentNode.removeChild(targetAd);

      console.log('Killed...');
    }
  });

  console.log('Hunting...');
}, 1 / 1000);
