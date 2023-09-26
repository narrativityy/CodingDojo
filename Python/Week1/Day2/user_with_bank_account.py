class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = []
        self.account.append(BankAccount(1.02, 0))

    def make_deposit(self, amount, index):
        self.account[index].deposit(amount)

    def make_withdrawal(self, amount, index):
        self.account[index].withdraw(amount)

    def display_user_balance(self, index):
        self.account[index].display_account_info()

    def add_new_account(self, interest_rate, amount):
        self.account.append(BankAccount(interest_rate, amount))

    def transfer_money(self, amount, index1, user2, index2):
        self.account[index1].withdraw(amount)
        user2.account[index2].deposit(amount)


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

user = User("Jake", "jake@gmail.com")
user.display_user_balance(0)
user.add_new_account(1.10, 400)
user.display_user_balance(1)

user2 = User("John", "john@gmail.com")
user2.display_user_balance(0)
user2.add_new_account(1.10, 400)
user2.display_user_balance(1)

user.transfer_money(200, 1, user2, 0)
user.display_user_balance(1)
user2.display_user_balance(0)