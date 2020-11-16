Ext.define('LoginApp.view.login.Login', {
    extend: 'Ext.window.Window',

    xtype: 'loginwin',
    controller: 'logincontroler',
    bodyPadding: 10,
    title: 'Login Window',
    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.Window',
    ],

    closable: false,
    autoShow: true,
    modal: true,
    width: 400,

    items: [{
        xtype: 'form',
        reference: 'form',
        items: [
            {
                xtype: 'textfield',
                name: 'username',
                fieldLabel: 'Username',
                allowBlank: false
            },
            {
                xtype: 'textfield',
                name: 'password',
                inputType: 'password',
                fieldLabel: 'Password',
                allowBlank: false
            },
            {
                xtype: 'displayfield',
                hideEmptyLabel: false,
                value: 'Enter any non-blank password'
            }
        ],
        buttons: [
            {
                text: 'Login',
                formBind: true,
                listeners: {
                    click: 'onLoginClick'
                }
            }
        ]
    }]
});