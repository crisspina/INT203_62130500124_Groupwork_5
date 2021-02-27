app.component('photo-item', {
    props: {

    },
    template:
        /*html*/
        `
        <div class="row" class="col-lg-6 mb-2 pr-lg-1 ">
        <div v-for="(photo,index) in filteredSearch" :key="photos.id" v-if="filteredSearch.length !== 0">
            <p class="font-semibold">{{photo.title}}</p>
                <img class="rounded shadow-sm my-3" :src="photo.src" @click="expandPic(photo.src)">
                <!-- show icon -->
                <div class="flex flex-row justify-end space-x-1">
                <!-- icon heart -->
                    <button class='mb-6' @click="favIcon(index)">
                        <svg class="fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                    </button>
                </div>
        </div>
        </div>
        
    `,
    data() {
        return {
            photos: [{
                    id: '1',
                    src: 'images/jack.jpg',
                    done: false,
                    title: 'Jack Avery',
                    show: false
                },
                {
                    id: '2',
                    src: 'images/corbyn.jpg',
                    done: false,
                    title: 'Corbyn Besson',
                    show: false
                },
                {
                    id: '3',
                    src: 'images/jonah.jpg',
                    done: false,
                    title: 'Jonah Marais',
                    show: false

                },
                {
                    id: '4',
                    src: './images/zach.jpg',
                    done: false,
                    title: 'Zach Herron',
                    show: false
                },
                {
                    id: '5',
                    src: './images/daniel.jpg',
                    done: false,
                    title: 'Daniel Seavay',
                    show: false
                }
            ],

        }

    },
    methods:{
        favIcon(index) {
            this.photos[index].done = !this.photos[index].done
        },
        expandPic(index){
            if(!this.expandPhoto){
                this.photoIndex = index;
            }
            this.expandPhoto = !this.expandPhoto;
        }
    }

})