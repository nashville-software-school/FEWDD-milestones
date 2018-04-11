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
* Setup `Match` and `Miss`

```jsx
<Match exactly pattern="/" component={App} />
<Match pattern="/guide/:guideId" component={Guide} />
<Miss component={NotFound} />
```


**Pro-tip**
* Remember to add the "keys" that React likes to your dynamic data rendering.
* `import {BrowserRouter, Match, Miss} from 'react-router';`
* https://tylermcginnis.com/react-router-nested-routes/

