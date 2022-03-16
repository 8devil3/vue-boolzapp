const app = new Vue({
    el: "#root",
    data: {
        searchContact: '',
        activeIndexContact: null,
        contactId: null,
        sentMsg: '',
        user: {
            id: 'A1',
            name: "Sofia",
            avatar: "avatar_io.jpg",
        },
        directory: [
            {
                id: 10,
                name: "michele",
                avatar: "avatar_1.jpg",
                message: [
                    {
                        type: "in",
                        text: "messaggio 1",
                        dateTime: "2022-03-12T12:54:00",
                    },
                    {
                        idMsg: "65466",
                        type: "out",
                        text: "messaggio 2",
                        dateTime: "2022-02-08T15:03:00",
                    },
                    {
                        type: "in",
                        text: "messaggio 3",
                        dateTime: "2022-03-13T18:12:00",
                    },
                    {
                        type: "out",
                        text: "messaggio 4",
                        dateTime: "2022-02-10T09:34:00",
                    },
                ],
            },
        
            {
                id: 20,
                name: "fabio",
                avatar: "avatar_2.jpg",
                message: [
                    {
                        type: "in",
                        text: "messaggio 1",
                        dateTime: "2022-03-12T12:54:00",
                    },
                    {
                        idMsg: "65466",
                        type: "out",
                        text: "messaggio 2",
                        dateTime: "2022-03-08T15:03:00",
                    },
                    {
                        type: "out",
                        text: "messaggio 3",
                        dateTime: "2021-07-13T18:12:00",
                    },
                    {
                        type: "out",
                        text: "messaggio 7",
                        dateTime: "2022-03-10T09:34:00",
                    },
                ],
            },
        
            {
                id: 30,
                name: "samuele",
                avatar: "avatar_3.jpg",
                message: [
                    {
                        type: "in",
                        text: "messaggio 1",
                        dateTime: "2022-03-12T12:54:00",
                    },
                    {
                        idMsg: "65466",
                        type: "out",
                        text: "messaggio 2",
                        dateTime: "2022-03-08T15:03:00",
                    },
                    {
                        type: "in",
                        text: "messaggio 3",
                        dateTime: "2021-07-13T18:12:00",
                    },
                    {
                        type: "out",
                        text: "messaggio 98",
                        dateTime: "2022-03-10T09:34:00",
                    },
                ],
            },
        
            {
                id: 40,
                name: "alessandro b.",
                avatar: "avatar_4.jpg",
                message: [
                    {
                        type: "in",
                        text: "messaggio 456",
                        dateTime: "2022-03-12T12:54:00",
                    },
                    {
                        idMsg: "65466",
                        type: "out",
                        text: "messaggio 53q",
                        dateTime: "2022-03-08T15:03:00",
                    },
                    {
                        type: "in",
                        text: "messaggio 543",
                        dateTime: "2021-07-13T18:12:00",
                    },
                    {
                        type: "out",
                        text: "messaggio 56",
                        dateTime: "2022-03-10T09:34:00",
                    },
                ],
            },
        
            {
                id: 50,
                name: "alessandro l.",
                avatar: "avatar_5.jpg",
                message: [
                    {
                        type: "in",
                        text: "messaggio 676",
                        dateTime: "2022-03-12T12:54:00",
                    },
                    {
                        idMsg: "65466",
                        type: "out",
                        text: "messaggio 24",
                        dateTime: "2022-03-08T15:03:00",
                    },
                    {
                        type: "in",
                        text: "messaggio 463",
                        dateTime: "2021-07-13T18:12:00",
                    },
                    {
                        type: "out",
                        text: "messaggio 676",
                        dateTime: "2022-03-10T09:34:00",
                    },
                ],
            },
        
            {
                id: 60,
                name: "claudia",
                avatar: "avatar_6.jpg",
                message: [
                    {
                        type: "in",
                        text: "messaggio 7546",
                        dateTime: "2022-03-12T12:54:00",
                    },
                    {
                        idMsg: "65466",
                        type: "out",
                        text: "messaggio 32354",
                        dateTime: "2022-03-08T15:03:00",
                    },
                    {
                        type: "in",
                        text: "messaggio 4654",
                        dateTime: "2021-07-13T18:12:00",
                    },
                    {
                        type: "out",
                        text: "messaggio 56546",
                        dateTime: "2022-03-10T09:34:00",
                    },
                ],
            },
        
            {
                id: 70,
                name: "federico",
                avatar: "avatar_7.jpg",
                message: [
                    {
                        type: "in",
                        text: "messaggio 675345",
                        dateTime: "2022-03-12T12:54:00",
                    },
                    {
                        idMsg: "65466",
                        type: "out",
                        text: "messaggio 234567",
                        dateTime: "2022-03-08T15:03:00",
                    },
                    {
                        type: "in",
                        text: "messaggio 56567",
                        dateTime: "2021-07-13T18:12:00",
                    },
                    {
                        type: "out",
                        text: "messaggio 7876",
                        dateTime: "2022-03-10T09:34:00",
                    },
                ],
            },
        
            {
                id: 80,
                name: "davide",
                avatar: "avatar_8.jpg",
                message: [
                    {
                        type: "in",
                        text: "messaggio 676734",
                        dateTime: "2022-03-12T12:54:00",
                    },
                    {
                        idMsg: "65466",
                        type: "out",
                        text: "messaggio 527787",
                        dateTime: "2022-03-08T15:03:00",
                    },
                    {
                        type: "in",
                        text: "messaggio 8787",
                        dateTime: "2021-07-13T18:12:00",
                    },
                    {
                        type: "out",
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

        sendMsg(txt, indx, id){ //invio messaggio
            this.directory[indx].message.push({
                id: id,
                type: 'out',
                text: txt,
                dateTime: luxon.DateTime.now(),
            });

            this.getChat(id);
            this.sentMsg = '';

            setTimeout(() => { //timeout risposta automatica
                this.receivedMsg(indx, id);
            }, 1000);
        },

        receivedMsg(indx, id){ //risposta automatica
            this.directory[indx].message.push({
                id: id,
                type: 'in',
                text: 'ok',
                dateTime: luxon.DateTime.now(),
            });

            this.getChat(id);
        },

        formatDate(dt){ //formatto data/ora con luxon
            let relDateAndTime = luxon.DateTime.fromISO(dt);
            return relDateAndTime.toRelativeCalendar() + ' alle ' + relDateAndTime.toFormat('HH:mm');
        },
    },
    created() { //l'app inizia riordinando i messaggi per data/ora
        this.sortMsg();
    }
});
