new Vue({
	el: '#app',
	data: {
		arrEmail: [],
	},
	methods: {
        // getEmail() {
		// 	axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
		// 		.then(axiosResponse => {
		// 			// console.log(axiosResponse);
		// 			this.arrEmail.push(axiosResponse.data.response);
		// 		})
		// },
		getEmail() {
			this.arrEmail = [];
			for (let i = 0; i < 10; i++) {
				axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
				.then(axiosResponse => {
					// console.log(axiosResponse);
					this.arrEmail.push(axiosResponse.data.response);
				})
			}
		},
	},
});