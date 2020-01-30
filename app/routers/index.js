/**
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2016/12/29.
 */
import React from 'react' // 引入react
import { Route, IndexRoute } from 'react-router' // 引入react路由

import App from './../compontens/app'
import Index from './../compontens/index'
import Index2 from './../compontens/index2'
import Index3 from './../compontens/index3'
import About from './../compontens/about'
import Items from './../containers/items'
import Detail from './../containers/detail'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <Route path="about" component={Index2} />
    <Route path="materia/:materia/:ano" component={Index} />
    <Route path="items" component={Index3} />
    <Route path="news/:id" component={Detail} />
  </Route>
)
