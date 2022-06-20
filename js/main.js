const appVue = new Vue({
    el: "#app",
        data: {
            randomEmails:[],
        },
        methods: {
            event() {
                this.randomEmails = [];

                for (let i = 0; i < 10; i++) {
                    axios
                    .get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((axiosResp) => {
                        this.randomEmails.push(axiosResp.data.response);
                    })
                }
            },
        },
    });