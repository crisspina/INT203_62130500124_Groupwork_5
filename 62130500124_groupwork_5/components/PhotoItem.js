app.component('photo-list',{
    props:["photo"],
    template:
    /*html*/
    `
    <p class="font-semibold">{{photo.title}}</p>
    <img class="rounded shadow-sm my-3" :src="photo.src" @click="clickExpand(photo.id)">
    <!-- show icon -->
    <div class="flex flex-row justify-end space-x-1">
        <!-- icon heart -->
        <button class='mb-6' @click="clickFav(photo.id)">
            <svg class="fill-current text-red-500" xmlns="http://www.w3.org/2000/svg"
                height="24" viewBox="0 0 24 24" width="24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
        </button>
    </div>
    `,
    methods:{
        clickFav(id){
            this.$emit('click-fav',id)
        },
        clickExpand(index){
            this.$emit('click-expand',index)
        }
    }
})