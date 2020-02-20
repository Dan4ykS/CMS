import sqlite3 

conn = sqlite3.connect('users.db')
cur = conn.cursor()
#cur.execute('DROP TABLE IF EXISTS users')
sql = '''CREATE TABLE users (name TEXT NOT NULL,
                             email TEXT,
                             passwd TEXT,
                             PRIMARY KEY (name))'''
cur.execute(sql)
conn.commit()
conn.close() 
print('Tables created')

