class BankAccount {
  constructor(accountNumber, ownerName, balance) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    document.write(`Deposited ${amount} into account ${this.accountNumber}.New balance: ${this.balance}<br>`);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      document.write("Insufficient funds<br>");
    } else {
      this.balance -= amount;
      document.write(`Withdrawn ${amount} from account ${this.accountNumber}.New balance: ${this.balance}<br>`);
    }
  }

  getBalance() {
    return this.balance;
  }

  displayAccountInfo() {
    document.write(`Account Number: ${this.accountNumber}<br>Owner Name: ${this.ownerName}<br>Balance: $${this.balance}<br><br>`);
  }
}

// Create two instances of BankAccount
const account1 = new BankAccount(1001, "John Doe", 1000);
const account2 = new BankAccount(1002, "Jane Smith", 2000);

// Deposit, withdraw, and display account information for account1
account1.deposit(500);
account1.withdraw(200);
account1.displayAccountInfo();


// Deposit, withdraw, and display account information for account2
account2.deposit(1000);
account2.withdraw(500);
account2.displayAccountInfo();

