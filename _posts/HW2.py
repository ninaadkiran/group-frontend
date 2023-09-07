print('Welcome to AskPython Quiz')
answer=input('Are you ready to play the Quiz ? (yes/no) :')
score=0
total_questions=3

if answer.lower()=='yes':
    answer=input('Question 1: What is the capital of California?')
    if answer.lower()=='sacramento':
        score += 1
        print('correct')
    else:
        print('Wrong Answer :(')


    answer=input('Question 2: What is our mascot? ')
    if answer.lower()=='nighthawk':
        score += 1
        print('correct')
    else:
        print('Wrong Answer :(')

    answer=input('Question 3: What is 1+1 ?')
    if answer.lower()=='2':
        score += 1
        print('correct')
    else:
        print('Wrong Answer :(')

print('Thankyou for Playing this small quiz game, you attempted',score,"questions correctly!")
mark=(score/total_questions)*100
print('Marks obtained:',mark)