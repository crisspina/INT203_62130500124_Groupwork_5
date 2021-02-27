app.component('photo-view',{
    props:["photo"],
    template:
    /*html*/
    `
    <div class="largeImg" v-show="photo.show === true"  :class= "{lightbox: photo.show === true}" >
        <i class="fa fa-times" aria-hidden="true" @click="clickExpand(photo.id)"></i>
        <img :src="photo.src">
    </div>
    `,
    methods:{
        clickExpand(id){
            this.$emit('click-expand',id)
        }
    }
})