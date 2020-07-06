var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      name: 'Dima',
      google: 'https://www.google.com/',
      tagToPaste: '<div>tag to Paste</div>',
      numberToChange: 0,
      text: 'using v-model u can connect input field and a variable',
      classActive: true,
    },
    methods: {
        greet: function(name) {
            return `Hello ${name}!`;
        },
        introduce() {
            return `My name is ${this.name}`;
        },
        defaultValue() {
            this.numberToChange = 0;
        },
        add(number) {
            this.numberToChange += number;
        },
        substract(number) {
            this.numberToChange -= number;
        }
    },
    computed: {
        async parse() {
            return await fetch('https://www.sbidea.ru/05032020').then(() =>
                document.getElementById('id')
            )
        }
    }

  })