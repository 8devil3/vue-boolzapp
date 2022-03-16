const app = new Vue({
    el: "#root",
    data: {
        filteredInput: '',
        user: {
            id: 'A1',
            name: "Sofia",
            avatar: "avatar_io.jpg",
        },
        directory: [],
        chat: [],
        selected: null,
        chatSelected: [],
    },
    methods: {
        filterList(filteredInput) { //filtro dei contatti
            if (filteredInput == ''){
                return this.directory;
            } else {
                return this.directory.filter(contact => {
                    return contact.name.toLowerCase().match(filteredInput.toLowerCase());
                });
            }
        },
        getSelectedContact(i){
            this.selected = i;
        },
        getChat(i){
            this.chatSelected = this.chat.filter(msg => {
                if(msg.idChat == i){
                    return msg.text;
                }
            });
        },
        formatDate(dt){
            return luxon.DateTime.fromISO(dt).toFormat('dd/MM/yyyy HH:mm');
        },
        formatTime(dt){
            return luxon.DateTime.fromISO(dt).toFormat('HH:mm');
        },
        getData(){ //recupero i dati degli utenti

            contacts.forEach(element => {
                this.directory.push(element);
            });

            msg.forEach(element => {
                this.chat.push(element);
            });
        },

    },
    created() {
        this.getData();
    }
});
