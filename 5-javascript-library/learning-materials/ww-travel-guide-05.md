# Wide World Travel Guides

**You need to complete steps 1-4 before this one**

## Include Routing

* Selecting a guide will display it in a new view (page).

```jsx
<Link to={`${match.url}/${id}`}>{title}</Link>
```

* Incorporate `react-router-dom` to view the individual guides.
* Include a "Show Guides" button

```jsx
<Route exact path="/" component={Guides} />
<Route path="/guides/:id" component={OneGuide} />
```


**Pro-tip**
* Remember to add "keys" to your looped items. React needs a unique value when rendering dynamic data.

```
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
```

## Great Walk-through
* Reference: https://tylermcginnis.com/react-router-nested-routes/

