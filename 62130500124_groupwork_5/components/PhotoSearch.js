app.component('photo-search', {
    props: ["photos"],
    data() {
        return {
            isHidden: true,
            inputSearch: '',
        }
    },
    template:

        /*html*/
        `
    
        <button v-on:click="isHidden = !isHidden" :class="{show: isHidden == false}">
        <!-- icon from material-icon -->
        <span class="material-icons p-1 rounded-sm focus:outline-none">
            search
        </span>
    </button>
    <!-- search form -->
    <div class="searchForm" v-if="isHidden == false">
        <input v-model="inputSearch"
            class="rounded-md ml-2 p-1 w-80 placeholder-gray-500 placeholder-opacity-50 focus:outline-none text-black rounded-sm"
            type="text" placeholder="Please enter text for searching photos">
        <button class="ml-2 p-1 rounded-sm focus:outline-none bg-blue-500 text-white"
            @click="toggleCancel">Cancel</button>
    </div>

    


`,
    methods: {
        toggleCancel() {
            this.inputSearch = '';
            this.isHidden = !this.isHidden;
        }

    },
    watch: {
        inputSearch: function () {
            this.$emit('searching', this.inputSearch);
        }
    }
});