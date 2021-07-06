({
	doInit : function(component, event, helper) {
		helper.getAccountList(component);
	},
    deleteAccount : function(component,event,helper){
        event.preventDefault();
        var accountName = event.target.getElementsByClassName('account-name')[0].value;
        confirm('Delete the ' + accountName + ' account? (don’t worry, this won’t actually work!)');
    },
    giveAlert : function(component,event,helper){
        alert('Account deleted');
    }
})