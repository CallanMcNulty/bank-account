function BankAccount(name, initialDeposit) {
  this.name = name;
  this.balance = initialDeposit;
  this.history = [];
}

BankAccount.prototype.transact = function(amount) {
  this.balance += amount;
  this.history.push(amount);
}

var account;
$(document).ready(function() {

  $("#register").submit(function(event) {
    event.preventDefault();
    account = new BankAccount($("#register-name").val(), parseInt($("#register-initial").val()));
    debugger;
  });
  $("#transact").submit(function(event) {
    event.preventDefault();
    account.transact(parseInt($("#transact-amount").val()));
  });
});
