
//POWr embed on test
/*<script src="https://www.powr.io/powr.js?platform=html"></script><div class="powr-reviews" id="ac6813e6_1574355481"></div>*/


//replace the array values with the POWr codes for each nps unit
const park = ['ac6813e6_1574355481', 'f15deb3a_1574369280'];
const parkname = ['park 1', 'park 2'];

const btn = document.getElementById('btn-read');

const element = document.getElementById('element');
const title = document.getElementById('title');
const body = document.getElementById('picture');


/*event listener to make console/element div do its thing*/
btn.addEventListener('click', () => {
  
  //change id of body so that background image goes away and we get background color
  body.id = 'noimage';

  /*convert input into a number so we can use as an index to grab from 'park' array.  input option value numbers must match up with the 'park' array index numbers of corresponding POWr review elements*/
  const input = parseInt(document.getElementById('npsunit').value);
  // const titleHead = document.getElementById('npsunit');
  //input value number
  console.log(input);

  //input text
  console.log(park[input]);

  let embed = '<div class="powr-reviews"' + 'id=' + `"${park[input]}"` + '>' + '</div>'; //this one works

  /*show a 'loading...' thing at the top when they click on the button so the slow pace of the reviews appearing doesn't make user think it's not working */
  //creating dynamic title based on users selection, but first have it say loading...
  title.innerHTML = 'loading...';
  //after 2 seconds name of park takes place of 'loading...' text
  function nameDelay() {
    const myVar = setTimeout(realname, 2000);
  }
  function realname() {
    title.innerHTML = `${parkname[input]}`;
  }
  //if the POWr info is available, run nameDelay to show parkname instead of 'loading...'
  if (embed) {
    nameDelay();
  }

  // title.style.backgroundColor = 'red'; 
  title.style.padding = '.5rem 0';
  //creating dynamic reviews section based on users selection
  element.innerHTML = embed;
});

/*maybe move the input button box to the center of page on initial page load, then when user clicks the desired park and 'go' button the input box, etc div goes to top of the page, while the 'element' div loads into the rest of the page */