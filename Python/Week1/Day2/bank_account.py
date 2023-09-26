class BankAccount:
    def __init__(self, int_rate, balance):
        self.int_rate = int_rate
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
        else:
            print("Insufficient funds: Charging a $5 fee")
            self.balance -= 5

    def display_account_info(self):
        print(f"Balance: ${self.balance}")

    def yield_interest(self):
        if self.balance > 0:
            self.balance = self.balance * self.int_rate

bank_account = BankAccount(1.10, 100)
bank_account.display_account_info()
bank_account.deposit(300)
bank_account.display_account_info()
bank_account.yield_interest()
bank_account.display_account_info()
bank_account.withdraw(200)
bank_account.display_account_info()
bank_account.withdraw(200)
bank_account.display_account_info()
bank_account.withdraw(50)
bank_account.display_account_info()