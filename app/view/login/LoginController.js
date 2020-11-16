Ext.define('LoginApp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias:'controller.logincontroler',

    onLoginClick:function(){
        localStorage.setItem('LoggedIn',true);
        // Remove Login Window
        this.getView().destroy();

        // Add the main view to the viewport
        Ext.widget('app-main');
        
    }
});