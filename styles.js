Vue.component("ClickCounter", {
template: '<button @click="count++">{{count}}</button>'
, data() {
return {
count: 0
}
}
})
new Vue({
el: "#app"
})
//first method

let starRating = document.querySelector('select');
starRating.addEventListener('change', (e) => {
document.body.style.setProperty('--star-count', e.target.value);
});

/* switcher*/
get threshold() {
return this.getAttribute('threshold') || 'var(--measure)';
}

set threshold(val) {
return this.setAttribute('threshold', val);
}
