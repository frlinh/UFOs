# An Analysis of UFO sightings

## Project Overview
Created a webpage and dynamic table using data research funded by W. Avy, a UFO-enthusiast and amateur ufologist. This webpage provides an in-depth analysis of UFO sightings by allowing users to filter for single criteria input or multiple criteria inputs.  The criteria include sighting Date, City, State, Country, and UFO Shape.

## Resources
- Data Source: Data research funded by W. Avy, a UFO-enthusiast and amateur ufologist
- Software: JavaScript, HTML, and CSS

## Features
Users can enter single criteria or multiple criteria in the search fields located on the left side of the webpage.  The dynamic table on the right will filter the UFO sightings based on the user’s input.  For example, users can filter UFO sightings based on a specific Date and State as shown in the image below.

![search_date_state](https://github.com/frlinh/UFOs/blob/ebebacb2db08b05c937e8737b5b8f91129d13908/static/images/mission-to-mars-search-state.png)

Users can filter UFO sightings by City as shown in the image below.

![search_city](https://github.com/frlinh/UFOs/blob/ebebacb2db08b05c937e8737b5b8f91129d13908/static/images/mission-to-mars-search-city.png)

Users can also filter UFO sightings by UFO Shape as shown in the image below. 

![search_shape](https://github.com/frlinh/UFOs/blob/ebebacb2db08b05c937e8737b5b8f91129d13908/static/images/mission-to-mars-search-shape.png)

## Summary
Limitations:
- The search fields are case-sensitive.  This can steer users away if they are unable to generate results caused by the case sensitivity.
- Each search field only allows one input at a time.  This is limiting in case users want to search results for multiple Cities or States, or even results within a date range.

Development recommendations:
- Add a date range option for the Date field
- Add multiple choice dropdown menu option for City, State, Country, and UFO Shape field
- Add a dynamic map to pinpoint UFO sightings
