<h2 align="center">Concert World</h2>

![React](https://img.shields.io/badge/react.js-16.3.2-brightgreen.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)(https://opensource.org/licenses/MIT)

## Overview
Find all the shows in the world from your favorite bands.

<p align="center"><img width=95% src="https://drive.google.com/uc?id=1Z0BbH3cX563UBgF8_K_xB_7YizSJlfKP"></p>

## Fetch request
This app populates state with data from the Bands In Town API through this fetch request in App.js.
You must have your own API key from Bands In Town which you can obtain here:  
http://www.artists.bandsintown.com/bandsintown-api

```javascript
renderBandEvents = (band) => {
  fetch(TheURL + band + TheKey).then(x => x.json()).then((band) => {
    this.setState({band: band})
  })

  fetch(TheURL + band + '/events' + TheKey).then(x => x.json()).then((events) => {
    this.setState({
      events: events,
      allEvents: events
    })
  })
}
```
<br>

## Install
This app requires React.  

<br>

https://www.npmjs.com/package/react  

https://www.npmjs.com/package/react-dom  

<br>

After installing dependencies, run a Concert World local server. From the app directory...
```javascript
npm start
```

<br>

## Search
Using the search bar, type a band name to see upcoming shows.
<p align="center"><img width=95% src="https://drive.google.com/uc?id=18Pi-PpzhxNp_fESGntmU2ESajuFaOLaY"></p>
You can click the "Add Show" button to the right of the show you select in order to add to your list. The button will disappear to indicate the show has been added.

<br>

## My Shows
Click on the "MY SHOWS" button on the left hand side to display shows you have added to your list.
<p align="center"><img width=95% src="https://drive.google.com/uc?id=1y2C_0wO5dP6E3MNSBTrp0W-8XAEd1ErR"></p>
You can remove shows you no longer wish to save by clicking the remove button to the right of the event.
<br>

## Filter by city
Filter by city through the dropdown in the select menu.
<p align="center"><img width=95% src="https://drive.google.com/uc?id=1ZsaIWj8xjXa2AKwfElqtWrCiiDr10dLk"></p>

The below function, contained in EventContainer.js filters by city.
```javascript
handleSearch = (event) => {
  if(event.target.value === 'See all') {
    this.props.changeEvents(this.props.allEvents)
  } else {
    let events = this.props.events.filter((show) => {
      return show.venue.city === event.target.value.slice(0, event.target.value.length - 6)
    })
    this.props.changeEvents(events)
  }
}
```

<br>

## Acknowledgements
Bands In Town API  

http://www.artists.bandsintown.com/bandsintown-api

<br>

## License
MIT

<br>
