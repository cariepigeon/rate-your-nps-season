
//POWr embed on test
/*<div class="powr-comments" id="3f34732f_1577584230"></div><script src="https://www.powr.io/powr.js?platform=14"></script>*/


//replace the array values with the POWr codes for each nps unit
/* const park = ['c6bca771_1579292693', '50cfe230_1579293158'];
const parkname = ['Abraham Lincoln Birthplace National Historical Park', 'Arcadia National Park']; */

//try using object instead of 2 arrays above
const parks = [
  {
    name: 'Abraham Lincoln Birthplace National Historical Park',
    code: 'c6bca771_1579292693'
  },
  {
    name: 'Arcadia National Park',
    code: '50cfe230_1579293158'
  },
  {
    name: 'Adams National Historical Park',
    code: '3d5933d6_1579294968'
  },
  {
    name:'African American Cival War Memorial',
    code:'e10f729b_1579295063'
  },
  {
    name: 'African Burial Ground National Monument',
    code: 'cb501ffe_1579295141'
  },
  {
    name: 'Agate Fossil Beds National Monument',
    code: 'e328e097_1579295222'
  },
  {
    name: 'Ala Kahakai National Historic Trail',
    code: '59c67b4d_1579295281'
  },
  {
    name: 'Alagnak Wild River',
    code: 'd6d421a0_1579295352'
  },
  {
    name: 'Alaska Public Lands',
    code: '2e9e03f5_1579295416'
  },
]

const btn = document.getElementById('btn-read');

const element = document.getElementById('element');
const title = document.getElementById('title');
const body = document.getElementById('picture');


/*event listener to make console/element div do its thing*/
btn.addEventListener('click', () => {
  /*convert input into a number so we can use as an index to grab from 'park' array.  input option value numbers must match up with the 'park' array index numbers of corresponding POWr review elements*/
  const input = parseInt(document.getElementById('npsunit').value);
  //input value number
  console.log(input);

  //input text
  console.log(parks[input]);

  // let embed = '<div class="powr-reviews"' + 'id=' + `"${park[input]}"` + '>' + '</div>'; //this one works
  let embed = `<div class="powr-comments" id="${parks[input].code}"></div>`; //testing
  //creating dynamic reviews section based on users selection
  element.innerHTML = embed;
  /*show a 'loading...' thing at the top when they click on the button so the slow pace of the reviews appearing doesn't make user think it's not working */
  //creating dynamic title based on users selection, but first have it say loading...
  // title.innerHTML = 'loading...';
  //try textContent
  title.textContent =`loading...`

  /* check every millisecond second for element height change, if change, change title to park name */
  function checkLoad() {
    console.log('checking...');
    if (element.children[0].clientHeight > 0) {
      title.textContent =`${parks[input].name}`;
    }
  }
  let checkingLoad = setInterval(checkLoad, 100);

  //if after 5 seconds no height, print problem w reviews engine
  function noLoad() {
    if (element.children[0].clientHeight <= 0) {
      title.textContent = `there is a problem with the reviews engine, please try again`;
    }
  }
  setTimeout(() => { clearInterval(checkingLoad); noLoad(); }, 5000);

  title.style.padding = '.5rem 0';
});

/*maybe add the #title div and #element div to page after click event, so that #interface truly is centered.
Somehow change background size to 'cover' or whole page, so doesn't go from pic, to white bottom, to filling page w green once review load....should stay green the whole time w no jankiness.
Perhaps there should be an if(!embed) statement so #element div has something loaded if the POWr does not respond and doesn't load reviews */