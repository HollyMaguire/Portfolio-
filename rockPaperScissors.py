import random

print("Winning Rules of the Rock paper scissor game as follows: \n"
      + "Rock vs paper->paper wins \n"
      + "Rock vs scissor->Rock wins \n"
      + "paper vs scissor->scissor wins \n")
while True:
    print("Enter choice \n 1. Rock \n 2. paper \n 3. scissor \n")
    choice = int(input("User turn: "))

    while choice > 3 \
            or choice < 1:
        choice = int(input("enter valid input: "))
    if choice == 1:
        choice_name = 'Rock'
    elif choice == 2:
        choice_name = 'paper'
    else:
        choice_name = 'scissor'

    print("user choice is: " + choice_name)
    print("\nNow for the computers turn.......")

    computer_choice = random.randint(1, 3)

    while computer_choice == choice:
        computer_choice = random.randint(1, 3)

    if computer_choice == 1:
        computer_choice_name = 'Rock'
    elif computer_choice == 2:
        computer_choice_name = 'paper'
    else:
        computer_choice_name = 'scissor'

    print("Computer chose: " + computer_choice_name)
    print(choice_name + " V/s " + computer_choice_name)

    if ((choice == 1
         and computer_choice == 2)
            or
            (choice == 2 and computer_choice == 1)):
        print("paper wins => ", end="")
        result = "paper"

    elif ((choice == 1
           and computer_choice == 3)
          or
          (choice == 3
           and computer_choice == 1)):
        print("Rock wins, all others are inferior =>", end="")
        result = "Rock"
    else:
        print("scissors wins =>", end="")
        result = "scissor"

    if result == choice_name:
        print("<== You win ==>")
    else:
        print("<== you loose ==>")

    print("Do you want to play again? (Y/N)")
    ans = input()

    if ans == 'n' or ans == 'N':
        break

print("\nThanks for playing")
