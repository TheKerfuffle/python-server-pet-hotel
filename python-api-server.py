import flask
import psycopg2
from flask import request, jsonify
from psycopg2.extras import RealDictCursor

app = flask.Flask(__name__)
app.config["DEBUG"] = True


conn = psycopg2.connect(
        host="localhost",
        port="5432",
        user="charlie",
        database="zoo_animals"
)

@app.route('/', methods=['GET'])
def home():
    return "<h1>Hello World!</h1><p>From Python and Flask!</p>"


@app.route('/api/animals', methods=['POST'])
def create_book():
    print('request.json is a dict!', request.json)
    print('if you\'re using multipart/form data, use request.form instead!', request.form)
    title = request.json['title']
    author = request.json['author']
    try:
        # Avoid getting arrays of arrays!
        cursor = conn.cursor(cursor_factory=RealDictCursor)

        print(title, author)
        insertQuery = "INSERT INTO books (title, author) VALUES (%s, %s)"
        # if only only one param, still needs to be a tuple --> cursor.execute(insertQuery, (title,)) <-- comma matters!
        cursor.execute(insertQuery, (title, author))
        # really for sure commit the query
        conn.commit()
        count = cursor.rowcount
        print(count, "Book inserted")
        # respond nicely
        result = {'status': 'CREATED'}
        return jsonify(result), 201
    except (Exception, psycopg2.Error) as error:
        # there was a problem
        print("Failed to insert book", error)
        # respond with error
        result = {'status': 'ERROR'}
        return jsonify(result), 500
    finally:
        # clean up our cursor
        if(cursor):
            cursor.close()


@app.route('/api/animals', methods=['GET'])
def list_animals():
    # Use RealDictCursor to convert DB records into Dict objects
    cursor = conn.cursor(cursor_factory=RealDictCursor)

    postgreSQL_select_Query = "SELECT * FROM species"
    # execute query
    cursor.execute(postgreSQL_select_Query)
    # Selecting rows from mobile table using cursor.fetchall
    books = cursor.fetchall()
    # respond, status 200 is added for us
    return jsonify(books)

    # for row in books:
    #     print("Id = ", row[0], )
    #     print("Title = ", row[1])
    #     print("Author  = ", row[2], "\n")


app.run()