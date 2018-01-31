# Asynchronous Programming with XHR

You've already used XHR requests to make asynchronous calls. In jQuery, we can use an asynchronous HTTP (Ajax) request which abstracts away the XHR event listeners. Let's look at asynchronous programming using jQuery [jQuery Intro](JQUERY_INTRO.md). Asynchronous programming will feel a bit weird at first, because up until this point, you are used to your code working in a clear, one-directional path. Sure, you've learned to split code up into modules, but if you can follow the path of logic through the modules, it's fairly easy to comprehend how the code works.

Async throws a wrench into all of that. The first thing you need to understand is that requesting resources from somewhere on the Internet can take anywhere between 200ms and 5 seconds.

Let's look at an example workflow.

1. Request weather information for the next 3 days from the Weather Underground service.
1. When that request completes, build an HTML representation of that data, and update the DOM.
1. Attach an event listener to the container of all the representations to detect when a user clicks on one.

Here's some pseudo code.

```js
const weatherEl = document.querySelector(".weather")

$.ajax({
  method: "GET",
  url: "http://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1"
}).then(function (weatherData) {
  let weatherInfo = "<section id='weatherContainer'>"

  // Add a <div> for each day in the forecast inside the container
  weatherData.list.forEach(day => {
    weatherInfo += `
      <div class="${day.dt}">
        ${day.main.temp_min} - ${day.main.temp_max}
      </div>
    `
  })

  weatherInfo += "</section>"
  weatherEl.innerHTML = weatherInfo
})

// When user clicks on any of the individual day elements, show the class name
document.querySelector(".weatherContainer").addEventListener("click", function (event) {
  console.log(event.target.className)
})
```

This looks like it should work. Yet, it won't. JavaScript will throw an exception saying that it can't invoke `addEventListener` on *undefined*. When JavaScript executes that last line of code, the asynchronous operation of loading the weather data isn't complete yet, so the `.weatherContainer` element doesn't exist yet.

When you make JavaScript perform an XHR, it uses a mechanism called the *event loop* to make the HTTP request, wait for the response, and then execute a callback function that was provided with the request. You are already familiar with this mechanism because you've used event listeners.

When you add an event listener to a DOM element, you provide a callback function that will be executed when that event is triggered. The function isn't executed immediately when JavaScript attaches the listener.

```js
document.querySelector(".firstName").addEventListener(
  "keypress",
  function (event) {    // This function is not executed until a key is pressed
    console.log(event)
  }
)
```

XHRs work similarly. When an XHR request gets a response, an event is fired. That event is the `load` event. jQuery abstracts that event listener away for you. You don't have to listen for that event. What you do is pass a callback function to the `done()` method on the XHR itself. Inside jQuery, it listens for the `load` event, and when that happens, your callback function is executed.
