import cgi
import sqlite3 

conn = sqlite3.connect('users.db') 
cur = conn.cursor()
form = cgi.FieldStorage() #извлечь данные из формы

if 'username' in form and 'email' in form and 'pass' in form:  
    user = form['username'].value  
    email = form['email'].value 
    ps = form['pass'].value
    pswd = hash(ps)
    try:
        cur.execute('INSERT INTO users(name, email, passwd) VALUES (?, ?, ?)', 
                    (user,email,pswd))  
        conn.commit()  
        conn.close()
    except IntegrityError:
        #Здесь, наверно, должно выводиться что-то вроде: "СЕРЕЖА666 УЖЕ СУЩЕСТВУЕТ"
        print("Not a unique name. Try entering a different username")
else:
    #А здесь: "ЗАПОЛНИ ВСЕ ПОЛЯ, ДУРАЧОК"
    print("Not all fields are filled in")
