/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('LoginApp.Application', {
    extend: 'Ext.app.Application',

    name: 'LoginApp',

    stores: [],

    views: [
        'LoginApp.view.login.Login',
        'LoginApp.view.main.Main'
    ],

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    launch: function () {
        var loogedIn;

        loogedIn = localStorage.getItem('LoggedIn');

        Ext.widget(loogedIn ? 'app-main' : 'loginwin');

        // Ext.widget('login');
        // Ext.create({
        //     xtype:'loginwin'
        // });
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
