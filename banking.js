function Account(accountNum, bal) {
  this._accountNumber = accountNum;
  this._balance = bal;
}

Account.prototype.deposit = function(amount) {
  return this._balance += amount;
}

Account.prototype.withdraw = function(amount) {
  if(this._balance < amount) {
    return `There are not enough to withdraw.`;
  } else {
    return this._balance -= amount;
  }
}

Account.prototype.checkBalance = function(type) {
  return `${type} Balance is ${this._balance}`;
}

function SavingAccount(accountNum, bal, interest) {
  Account.call(this, accountNum, bal);
  this._interestRate = interest;
}

SavingAccount.prototype = Object.create(Account.prototype);
SavingAccount.prototype.constructor = SavingAccount;

SavingAccount.prototype.addInterest = function() {
  return this._balance += (this._balance * this._interestRate);
}

function CheckingAccount(accountNum, bal) {
  Account.call(this, accountNum, bal);
}

CheckingAccount.prototype = Object.create(Account.prototype);
CheckingAccount.prototype.constructor = CheckingAccount;

CheckingAccount.prototype.withdrawUsingCheck = function(amount) {
  if(this._balance < amount) {
    return `There are not enough to withdraw.`;
  } else {
    return this._balance -= amount;
  }
}

const account1 = new Account(1010101023, 20000);
account1.deposit(500);
console.log(account1.checkBalance("Account"));
account1.withdraw(1000);
console.log(account1.checkBalance("Account"));

const saving1 = new SavingAccount(1919191919, 3000, 0.05);
console.log(saving1.checkBalance("Saving"));
saving1.addInterest();
console.log(saving1.checkBalance("Saving"));

const checking1 = new CheckingAccount(23423423434, 50000);
console.log(checking1.checkBalance("Checking"));
checking1.withdrawUsingCheck(20000);
console.log(checking1.checkBalance("Checking"));
