
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

  // let embed = '<div class="powr-reviews"' + 'id=' + `"${park[input]}"` + '>' + '</div>'; //this one works
  let embed = `<div class="powr-reviews" id="${park[input]}"></div>`; //testing

  /*show a 'loading...' thing at the top when they click on the button so the slow pace of the reviews appearing doesn't make user think it's not working */
  //creating dynamic title based on users selection, but first have it say loading...
  // title.innerHTML = 'loading...';
  //try textContent
  title.textContent =`loading...`
  //after 2 seconds name of park takes place of 'loading...' text
  function nameDelay() {
    const myVar = setTimeout(realname, 2000);
  }
  function realname() {
    // title.innerHTML = `${parkname[input]}`;
    //try textContent
    if (element.children[0].clientHeight > 0) 
      {title.textContent =`${parkname[input]}`;
    } else {
      title.textContent = `there is a problem with the reviews engine, please try again`;
    }
  }
  //if the POWr info is available, run nameDelay to show parkname instead of 'loading...'
    nameDelay();

  // title.style.backgroundColor = 'red'; 
  title.style.padding = '.5rem 0';
  //creating dynamic reviews section based on users selection
  element.innerHTML = embed;
});

/*maybe add the #title div and #element div to page after click event, so that #interface truly is centered.
Somehow change background size to 'cover' or whole page, so doesn't go from pic, to white bottom, to filling page w green once review load....should stay green the whole time w no jankiness.
Perhaps there should be an if(!embed) statement so #element div has something loaded if the POWr does not respond and doesn't load reviews */