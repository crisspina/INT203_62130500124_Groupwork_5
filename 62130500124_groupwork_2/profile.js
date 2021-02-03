const app = {
    data() {
        return {
            firstname : 'Natcha',
            lastname :'Phannoi',
            myprofilepic : './images/profile.jpg',
            follower : 905,
            article : 9 ,
            ratings :8.9,
            position : 'SIT Student',
            chat : 'Facebook',
            follow :'Instragram',
            ig : 'https://www.instagram.com/naatcha.nine/',
            fb : 'https://www.facebook.com/profile.php?id=100013446739234'

        }
    },
}
moutedApp = Vue.createApp(app).mount('#app')
