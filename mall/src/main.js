import Vue from 'vue';
import App from './App.vue';
// import Router from './router';
import 'vant/lib/icon/local.css';
import '@/assets/scss/global.scss';
import '@/assets/scss/iconfont/iconfont.css';

import VueCutDown from '@chenfengyuan/vue-countdown';

import filters from '@/filter';

Vue.use(Router);

Vue.component(VueCutDown.name, VueCutDown);
Vue.use(filters);

import { Lazyload, Button, Icon, Cell, CellGroup, Loading, Toast } from "vant";

Vue.use(Button);
Vue.use(Icon);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Loading);
Vue.use(Toast);
Vue.use(Lazyload, {
  preLoad: 1.3,
  error: require('@/assets/images/goods_default.png'),
  loading: require('./assets/images/goods_default.png'),
  attempt: 1,
  listenEvents: ['scroll'],
  lazyComponent: true  
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
