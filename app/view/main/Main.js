/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('LoginApp.view.main.Main', {
    extend: 'Ext.container.Container',

    requires: [
        'LoginApp.view.main.MainController',
        'LoginApp.view.main.MainModel'
    ],

    xtype: 'app-main',

    controller: 'main',
    plugins: 'viewport',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'panel',
        bind: {
            title: '{name}'
        },
        region: 'west',
        html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
        width: 250,
        split: true,
        tbar: [{
            text: 'Button',
            handler: 'onClickButton'
        }]
    }, {
        region: 'center',
        xtype: 'tabpanel',
        items: [
            {
                title: 'Tab 1',
                html: '<h2>Content appropriate for the current navigation.</h2>'
            },
            {
                title: 'Tab 2',
                html: '<h2>Content appropriate for the current navigation.</h2>'
            }
        ]
    }]
});