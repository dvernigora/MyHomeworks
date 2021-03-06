// noinspection JSAnnotator
var ATM = {
    is_auth: false,
    current_user:false,
    current_type:false,
    // all cash of ATM
    cash: 2000,
    userActions: {},
    // all available users
    users: [
        {number: "0000", pin: "000", debet: 0, type: "admin"}, // EXTENDED
        {number: "0025", pin: "123", debet: 675, type: "user"}
    ],
    // authorization
    auth: function(number, pin) {
        var userslenght = this.users.length;
        for (var i = 0; i < userslenght; i ++) {
            this.current_user = this.users[i];
            if ((this.current_user.number === number) && (this.current_user.pin === pin)) {
                this.is_auth = true;
                this.current_type = this.current_user.type;
                this.userActions.usType = this.current_type;
                console.log('autorized');
                return;
            }
        }
        console.log('not autorized');
    },
    // check current debet
    check: function() {
        if (!this.is_auth || this.current_type === 'admin') {
            console.log('you entered incorrect information');
            return;
        }
        this.userActions.check = 'account verification';
        return this.current_user.debet;
    },
    // get cash - available for user only
    getCash: function(amount) {
        if (!this.is_auth || this.current_type === 'admin') {
            console.log('you entered incorrect information');
            return;
        }
        if ((amount > this.current_user.debet) && (amount <= this.cash)) {
            console.log('there are not enough funds on the account');
            return;
        }
        if (amount === undefined) {
            amount = 0;
        }
        this.cash -= amount;
        this.userActions.getCash = amount;
        return this.current_user.debet -= amount;
    },
    // load cash - available for user only
    loadCash: function(amount){
        if (!this.is_auth || this.current_type === 'admin') {
            console.log('you entered incorrect information');
            return;
        }
        if (amount === undefined) {
            amount = 0;
        }
        this.cash += amount;
        this.userActions.loadCash = amount;
        return this.current_user.debet += amount;
    },
    // load cash to ATM - available for admin only - EXTENDED
    load_cash: function(addition) {
        if (!(this.current_type === 'admin')) {
            console.log('you entered incorrect information')
            return;
        }
        if (addition === undefined) {
            addition = 0;
        }
        this.userActions.load_cash = addition;
        return this.cash += addition;
    },
    // get report about cash actions - available for admin only - EXTENDED
    getReport: function() {
        for (var key in this.userActions) {
            console.log(key + ' => ' + this.userActions[key]);
            delete this.userActions[key];
        }
        },
    // log out
    logout: function() {
        this.is_auth = false;
        this.current_user = false;
        this.current_type = false;
    }
};