#файлик чисто, чтобы посмотреть, что там в табличку попало
import sqlite3

conn = sqlite3.connect('users.db')
cur = conn.cursor()
cur.execute('SELECT name, email, passwd FROM users')
text = ''
for (name,email,passwd) in cur.fetchall(): 
    text = text + " " + name + ' ' + email + " " + passwd + '\n'
print(text)
