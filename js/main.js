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
        sentMsg: '',
        inputID: null,
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
        getChat(id){
            this.chatSelected = this.chat.filter(msg => {
                return msg.idChat == id;
            }).sort((a, b) => {
                return new Date(a.dateTime) - new Date(b.dateTime)
            });
            
            return this.inputID = id;
        },
        sendMsg(txt, id){
            this.chat.push({
                idChat: id,
                type: 'out',
                text: txt,
                dateTime: luxon.DateTime.now(),
            });
            this.getChat(id);
            this.sentMsg = '';

            setTimeout(() => {
                this.receivedMsg(id);
            }, 1000);
        },
        receivedMsg(id){
            this.chat.push({
                idChat: id,
                type: 'in',
                text: 'ok',
                dateTime: luxon.DateTime.now(),
            });
            this.getChat(id);
        },
        formatDate(dt){
            return luxon.DateTime.fromISO(dt).toRelativeCalendar();
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
    },
});
