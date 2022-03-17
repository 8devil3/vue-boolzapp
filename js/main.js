const app = new Vue({
    el: "#root",
    data: {
        searchContact: '',
        activeIndexContact: null,
        activeMsgId: null,
        contactId: null,
        isNewMsgEmpty: false,
        btnDeleteChat: false,
        user: {
            id: 'A1',
            name: "Sofia",
            avatar: "avatar_io.jpg",
        },
        directory: [
            {
                id: '',
                name: "michele",
                avatar: "avatar_1.jpg",
                newMsg: '',
                message: [
                    {
                        type: "in",
                        idMsg: '',
                        text: "messaggio 1",
                        dateTime: "2022-03-12T12:54:00",
                    },
                    {
                        type: "out",
                        idMsg: '',
                        text: "messaggio 2",
                        dateTime: "2022-02-08T15:03:00",
                    },
                    {
                        type: "in",
                        idMsg: '',
                        text: "messaggio 3",
                        dateTime: "2022-03-13T18:12:00",
                    },
                    {
                        type: "out",
                        idMsg: '',
                        text: "messaggio 4",
                        dateTime: "2022-02-10T09:34:00",
                    },
                ],
            },
        
            {
                id: '',
                name: "fabio",
                avatar: "avatar_2.jpg",
                newMsg: '',
                message: [
                    {
                        type: "in",
                        idMsg: '',
                        text: "messaggio 1",
                        dateTime: "2022-03-12T12:54:00",
                    },
                    {
                        type: "out",
                        idMsg: '',
                        text: "messaggio 2",
                        dateTime: "2022-03-08T15:03:00",
                    },
                    {
                        type: "out",
                        idMsg: '',
                        text: "messaggio 3",
                        dateTime: "2021-07-13T18:12:00",
                    },
                    {
                        type: "out",
                        idMsg: '',
                        text: "messaggio 7",
                        dateTime: "2022-03-10T09:34:00",
                    },
                ],
            },
        
            {
                id: '',
                name: "samuele",
                avatar: "avatar_3.jpg",
                newMsg: '',
                message: [
                    {
                        type: "in",
                        idMsg: '',
                        text: "messaggio 1",
                        dateTime: "2022-03-12T12:54:00",
                    },
                    {
                        type: "out",
                        idMsg: '',
                        text: "messaggio 2",
                        dateTime: "2022-03-08T15:03:00",
                    },
                    {
                        type: "in",
                        idMsg: '',
                        text: "messaggio 3",
                        dateTime: "2021-07-13T18:12:00",
                    },
                    {
                        type: "out",
                        idMsg: '',
                        text: "messaggio 98",
                        dateTime: "2022-03-10T09:34:00",
                    },
                ],
            },
        
            {
                id: '',
                name: "alessandro b.",
                avatar: "avatar_4.jpg",
                newMsg: '',
                message: [
                    {
                        type: "in",
                        idMsg: '',
                        text: "messaggio 456",
                        dateTime: "2022-03-12T12:54:00",
                    },
                    {
                        type: "out",
                        idMsg: '',
                        text: "messaggio 53q",
                        dateTime: "2022-03-08T15:03:00",
                    },
                    {
                        type: "in",
                        idMsg: '',
                        text: "messaggio 543",
                        dateTime: "2021-07-13T18:12:00",
                    },
                    {
                        type: "out",
                        idMsg: '',
                        text: "messaggio 56",
                        dateTime: "2022-03-10T09:34:00",
                    },
                ],
            },
        
            {
                id: '',
                name: "alessandro l.",
                avatar: "avatar_5.jpg",
                newMsg: '',
                message: [
                    {
                        type: "in",
                        idMsg: '',
                        text: "messaggio 676",
                        dateTime: "2022-03-12T12:54:00",
                    },
                    {
                        type: "out",
                        idMsg: '',
                        text: "messaggio 24",
                        dateTime: "2022-03-08T15:03:00",
                    },
                    {
                        type: "in",
                        idMsg: '',
                        text: "messaggio 463",
                        dateTime: "2021-07-13T18:12:00",
                    },
                    {
                        type: "out",
                        idMsg: '',
                        text: "messaggio 676",
                        dateTime: "2022-03-10T09:34:00",
                    },
                ],
            },
        
            {
                id: '',
                name: "claudia",
                avatar: "avatar_6.jpg",
                newMsg: '',
                message: [
                    {
                        type: "in",
                        idMsg: '',
                        text: "messaggio 7546",
                        dateTime: "2022-03-12T12:54:00",
                    },
                    {
                        type: "out",
                        idMsg: '',
                        text: "messaggio 32354",
                        dateTime: "2022-03-08T15:03:00",
                    },
                    {
                        type: "in",
                        idMsg: '',
                        text: "messaggio 4654",
                        dateTime: "2021-07-13T18:12:00",
                    },
                    {
                        type: "out",
                        idMsg: '',
                        text: "messaggio 56546",
                        dateTime: "2022-03-10T09:34:00",
                    },
                ],
            },
        
            {
                id: '',
                name: "federico",
                avatar: "avatar_7.jpg",
                newMsg: '',
                message: [
                    {
                        type: "in",
                        idMsg: '',
                        text: "messaggio 675345",
                        dateTime: "2022-03-12T12:54:00",
                    },
                    {
                        type: "out",
                        idMsg: '',
                        text: "messaggio 234567",
                        dateTime: "2022-03-08T15:03:00",
                    },
                    {
                        type: "in",
                        idMsg: '',
                        text: "messaggio 56567",
                        dateTime: "2021-07-13T18:12:00",
                    },
                    {
                        type: "out",
                        idMsg: '',
                        text: "messaggio 7876",
                        dateTime: "2022-03-10T09:34:00",
                    },
                ],
            },
        
            {
                id: '',
                name: "davide",
                avatar: "avatar_8.jpg",
                newMsg: '',
                message: [
                    {
                        type: "in",
                        idMsg: '',
                        text: "messaggio 676734",
                        dateTime: "2022-03-12T12:54:00",
                    },
                    {
                        type: "out",
                        idMsg: '',
                        text: "messaggio 527787",
                        dateTime: "2022-03-08T15:03:00",
                    },
                    {
                        type: "in",
                        idMsg: '',
                        text: "messaggio 8787",
                        dateTime: "2021-07-13T18:12:00",
                    },
                    {
                        type: "out",
                        idMsg: '',
                        text: "messaggio 7987",
                        dateTime: "2022-03-10T09:34:00",
                    },
                ],
            },
        ],
    },
    methods: {
        filterList(searchContact) { //filtro dei contatti
            if (searchContact == ''){
                return this.directory;
            } else {
                return this.directory.filter(element => {
                    return element.name.toLowerCase().match(searchContact.toLowerCase());
                });
            }
        },

        getChat(id){ //recupero la chat del contatto attivo
            return this.directory.filter(msg => {
                return msg.id == id;
            }).sort((a, b) => {
                return new Date(a.dateTime) - new Date(b.dateTime)
            });
        },
        
        sortMsg(){ //riordino i messaggi per data
            this.directory.forEach(element => {
                element.message.sort((a, b) => {
                    return new Date(a.dateTime) - new Date(b.dateTime)
                });
            });
        },
        
        getLastMsgTime(indx){ //recupero data/ora dell'ultimo messaggo del contatto selezionato
            return this.directory[indx].message[this.directory[indx].message.length - 1].dateTime;
        },

        sendMsg(indx){ //invio messaggio

            const newMsgSending = this.directory[indx].newMsg;

            if (newMsgSending == '') { //controllo messaggio vuoto
                this.isNewMsgEmpty = true;
            } else {
                this.isNewMsgEmpty = false,

                this.directory[indx].message.push({
                    idMsg: this.randomId(12),
                    type: 'out',
                    text: newMsgSending,
                    dateTime: luxon.DateTime.now(),
                });
    
                newMsgSending = '';
    
                setTimeout(() => { //timeout risposta automatica
                    this.receivedMsg(indx);
                }, 2000);
            }

        },

        receivedMsg(indx){ //risposta automatica
            this.directory[indx].message.push({
                idMsg: this.randomId(12),
                type: 'in',
                text: 'ok',
                dateTime: luxon.DateTime.now(),
            });
        },

        deleteMsg(i){
            this.directory[this.activeIndexContact].message.splice(i, 1);

            this.activeMsgId = null;
        },

        deleteChat(){
            this.directory.splice(this.activeIndexContact, 1);

            this.btnDeleteChat = null;
        },

        formatDate(dt){ //formatto data/ora con luxon
            let relDateAndTime = luxon.DateTime.fromISO(dt);

            if (relDateAndTime.toRelativeCalendar() == 'oggi') {
                return relDateAndTime.toFormat('HH:mm');
            } else {
                return relDateAndTime.toRelativeCalendar() + ' alle ' + relDateAndTime.toFormat('HH:mm');
            }
        },

        randomId(ds){ //generazione casuale di ID
            const hexArr = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
            let newID = [];

            for (let i = 0; i < ds; i++) {
                let digit = hexArr[Math.floor(Math.random() * hexArr.length)];
                newID.push(digit);
            }

            return newID.join('');
        },

        setRandomId() {
            //random ID per gli utenti (8 caratteri)
            this.directory.forEach((element) => {
                element.id = this.randomId(8);

            });

            //random ID per i messaggi (12 caratteri)
            this.directory.forEach((element) => {
                element.message.forEach(itm => {
                    itm.idMsg = this.randomId(12);
                });
            });
        }
    },
    created() { //l'app inizia riordinando i messaggi per data/ora
        this.sortMsg();
        this.setRandomId();
    }
});
