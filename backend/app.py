from flask import Flask, request, jsonify
import os
import psycopg2 as psy
from dotenv import load_dotenv

app = Flask(__name__)

load_dotenv()

username = os.getenv('username')
pwd = os.getenv('password')
print(f"Username: {username}, Password: {pwd}")


def get_db_connection():
    conn = psy.connect(dbname='TaxTrack', user = 'postgres', password = pwd, host = 'localhost')
    
    return conn


@app.route('/add_user', methods = ['POST'])
def add_user():
    data = request.get_json()
    name = data['name']
    email = data['email']
    
    conn = get_db_connection()
    cursor = conn.cursor()
    
    cursor.execute('INSERT INTO tax_details(name, email_id) VALUES(%s, %s)', (name, email))
    
    conn.commit()
    cursor.close()
    conn.close()
    
    return jsonify({'status': 'User data added'}), 201

@app.route('/get_users', methods=['GET'])
def get_users():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('SELECT * FROM tax_details')
    rows = cur.fetchall()
    cur.close()
    conn.close()
    
    return jsonify(rows)

if __name__ == '__main__':
    app.run(debug=True)