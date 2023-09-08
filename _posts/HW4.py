print('Welcome to AskPython Quiz')
answer=input('Are you ready to play the Quiz ? (yes/no) :')
score=0
total_questions=3

if answer.lower()=='yes':
    answer=input('Question 1: What sport does Brandon play?')
    if answer.lower()=='volleyball':
        score += 1
        print("\x1b[32mCorrect\x1b[0m")
    else:
        print("\x1b[31mWrong\x1b[0m")


    answer=input('Question 2: What position does he play? ')
    if answer.lower()=='libero':
        score += 1
        print("\x1b[32mCorrect\x1b[0m")
    else:
        print("\x1b[31mWrong\x1b[0m")

    answer=input('Question 3: Who is the better coder between Brandon and Ninaad?')
    if answer.lower()=='ninaad':
        score += 1
        print("\x1b[32mCorrect\x1b[0m")
    else:
        print("\x1b[31mWrong\x1b[0m")

print('Thankyou for Playing this small quiz game, you attempted',score,"questions correctly!")
mark=(score/total_questions)*100
rounded_mark = round(mark, 2)
print('Marks obtained as percentage:',rounded_mark)