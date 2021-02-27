const app = Vue.createApp({
    data() {
        return {
            expandPhoto: false,
            photoIndex: '',
            inputSearch: '',
            heart: 'images/heart.png',
            name: "Why don't we",
            type: "My husband",
            photos: [{
                    id: '1',
                    src: 'images/jack.jpg',
                    like: false,
                    title: 'Jack Avery',
                    show: false 
                },
                {
                    id: '2',
                    src: 'images/corbyn.jpg',
                    like: false,
                    title: 'Corbyn Besson',
                    show: false 
                },
                {
                    id: '3',
                    src: 'images/jonah.jpg',
                    like: false,
                    title: 'Jonah Marais',
                    show: false 
                
                },
                {
                    id: '4',
                    src: './images/zach.jpg',
                    like: false,
                    title: 'Zach Herron',
                    show: false 
                },
                {
                    id: '5',
                    src: './images/daniel.jpg',
                    like: false,
                    title: 'Daniel Seavay',
                    show: false 
                }
            ],
            isHidden: true

        }
    },
    methods: {
        toggleLike(id){
            for (let index = 0; index < this.photos.length; index++) {
                if (this.photos[index].id == id) {
                    this.photos[index].like = !this.photos[index].like;
                } 
            }
        },
        expandPic(index){
            if(!this.expandPhoto){
                this.photoIndex = index;
            }
            this.expandPhoto = !this.expandPhoto;
        },
        popupImage(id){
            for (let index = 0; index < this.photos.length; index++) {
                if (this.photos[index].id == id) {
                    this.photos[index].show = !this.photos[index].show;
                } 
            }
        },
        toggleCancel() {
            this.inputSearch = '';
            this.isHidden = !this.isHidden;
        },
       
    },


    computed: {
        filteredSearch() {
            return this.photos.filter(showSearch => {
                return showSearch.title.toLowerCase().includes(this.inputSearch.toLowerCase())
            })

        },
        countLike() {
            return this.photos.filter(t => !t.like).length
        },
        countofphotos() {
            return this.photos.length
        }
    }
})
