import Vue from "vue";
import HelloWorld  from './components/HelloWorld.vue';
import About  from './components/About.vue';

Vue.config.productionTip = false;
console.log('============ init Vue instance =================');

Vue.component('helloworld', HelloWorld);
Vue.component('about-comp', About);


new Vue().$mount("#app");


