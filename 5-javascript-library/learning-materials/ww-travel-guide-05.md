# Wide World Travel Guides

**You need to complete steps 1-4 before this one**

## Include Routing

* Selecting a guide will display it in a new view (page).
*
```
 this.context.router.transitionTo(`/guide/${guideId}`)
 ```

* Incorporate `react-router-dom` to view the individual guides.
* Include a "Show List" button

```jsx
<Route exact path="/" component={Guides} />
<Route path="/guides/:id" component={OneGuide} />
```


**Pro-tip**
* Remember to add the "keys" that React likes to your dynamic data rendering.
```
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
```

* Reference: https://tylermcginnis.com/react-router-nested-routes/

