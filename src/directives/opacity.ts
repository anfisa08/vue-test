export default {
    inserted: function (el: HTMLElement) {
        el.style.opacity = '0.8';
    },
    update: function(el: HTMLElement){
        if(el.innerHTML.includes('<span class="highlighted">'))
            el.style.opacity = '1'
        else
            el.style.opacity = '0.8';
    }
}