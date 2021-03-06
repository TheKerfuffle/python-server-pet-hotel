import flask
import psycopg2
from flask import request, jsonify
from psycopg2.extras import RealDictCursor

app = flask.Flask(__name__)
app.config["DEBUG"] = True


conn = psycopg2.connect(
        host="localhost",
        port="5432",
        database="pet-hotel",
)

pets_dict = []


@app.route('/', methods=['GET'])
def home():
    return "<h1>Hello World!</h1><p>From Python and Flask!</p>"




# ****************************************GET ROUTES****************************************
# PETS - With Join
@app.route('/api/pets', methods=['GET'])
def list_pets():
    # Use RealDictCursor to convert DB records into Dict objects
    cursor = conn.cursor(cursor_factory=RealDictCursor)

    postgreSQL_select_Query = "SELECT pets.id, pets.name, pets.breed, pets.color, pets.checked, owner.owner_name FROM pets JOIN owner ON owner.id=pets.owner_id;"
    # execute query
    cursor.execute(postgreSQL_select_Query)
    # Selecting rows from mobile table using cursor.fetchall
    pets = cursor.fetchall()
    # respond, status 200 is added for us
    pets_dict.append(pets)
    return jsonify(pets)




# OWNERS
@app.route('/api/owners', methods=['GET'])
def list_owners():
    # Use RealDictCursor to convert DB records into Dict objects
    cursor = conn.cursor(cursor_factory=RealDictCursor)

    postgreSQL_select_Query = "SELECT * FROM owner"
    # execute query
    cursor.execute(postgreSQL_select_Query)
    # Selecting rows from mobile table using cursor.fetchall
    books = cursor.fetchall()
    # respond, status 200 is added for us
    return jsonify(books)



# ****************************************PUT ROUTES****************************************
# PETS - Ideally using ID
@app.route('/api/pets', methods=['PUT'])
def set_checked():
    # Use RealDictCursor to convert DB records into Dict objects
    cursor = conn.cursor(cursor_factory=RealDictCursor)

    print('request.form',request.form)
    checked = request.form['checked']
    pet_id = request.form['pet_id']

    try:
        postgreSQL_select_Query = "UPDATE pets SET checked=(%s) where id=(%s);"
        # execute query
        cursor.execute(postgreSQL_select_Query, (checked, pet_id))

        conn.commit()

        count = cursor.rowcount
        print(count, "PET UPDATED")
        # respond nicely
        result = {'status': 'UPDATED'}
        return jsonify(result), 200
    except (Exception, psycopg2.Error) as error:
        # there was a problem
        print("Failed to update pet", error)
        # respond with error
        result = {'status': 'ERROR'}
        return jsonify(result), 500
    finally:
        # clean up our cursor
        if(cursor):
            cursor.close()

# ****************************************POST ROUTES****************************************

# OWNERS
@app.route('/api/owners', methods=['POST'])
def create_owner():
    print('request.json is a dict!', request.json)
    print('if you\'re using multipart/form data, use request.form instead!', request.form)
    # title = request.json['title']
    # author = request.json['author']

    owner = request.form['owner']
    print(owner)
    try:
        # Avoid getting arrays of arrays!
        cursor = conn.cursor(cursor_factory=RealDictCursor)

        # print(owner)
        insertQuery = "INSERT INTO owner (owner_name) VALUES (%s)"
        # if only only one param, still needs to be a tuple --> 
        # cursor.execute(insertQuery, (title,)) <-- comma matters!
        cursor.execute(insertQuery, (owner,))
        # really for sure commit the query
        conn.commit()
        count = cursor.rowcount
        print(count, "Owner Inserted")
        # respond nicely
        result = {'status': 'CREATED'}
        return jsonify(result), 201
    except (Exception, psycopg2.Error) as error:
        # there was a problem
        print("Failed to insert owner", error)
        # respond with error
        result = {'status': 'ERROR'}
        return jsonify(result), 500
    finally:
        # clean up our cursor
        if(cursor):
            cursor.close()

# PETS
@app.route('/api/pets', methods=['POST'])
def create_pet():
    print('request.json is a dict!', request.json)
    print('if you\'re using multipart/form data, use request.form instead!', request.form)
    # title = request.json['title']
    # author = request.json['author']

    name = request.form['name']
    breed = request.form['breed']
    color = request.form['color']
    ownerID = request.form['owner_id']
    print(name)
    print(breed)
    print(color)
    print(ownerID)
    try:
        # Avoid getting arrays of arrays!
        cursor = conn.cursor(cursor_factory=RealDictCursor)

        # print(owner)
        insertQuery = "INSERT INTO pets (name, breed, color, owner_id) VALUES (%s,%s,%s,%s)"
        # if only only one param, still needs to be a tuple --> 
        # cursor.execute(insertQuery, (title,)) <-- comma matters!
        cursor.execute(insertQuery, (name, breed, color, ownerID))
        # really for sure commit the query
        conn.commit()
        count = cursor.rowcount
        print(count, "Pet Inserted")
        # respond nicely
        result = {'status': 'CREATED'}
        return jsonify(result), 201
    except (Exception, psycopg2.Error) as error:
        # there was a problem
        print("Failed to insert pet", error)
        # respond with error
        result = {'status': 'ERROR'}
        return jsonify(result), 500
    finally:
        # clean up our cursor
        if(cursor):
            cursor.close()



# DELETE PET
@app.route('/api/pets', methods=["DELETE"])
def pet_delete():
    petID = request.form['pet_id']

    cursor = conn.cursor(cursor_factory=RealDictCursor)

    postgreSQL_select_Query = "DELETE FROM pets WHERE id=(%s);"
    # execute query
    cursor.execute(postgreSQL_select_Query, (petID))

    conn.commit()

    return 'Success removing pet'

   

    # for pet in pets_dict:
    #     if pet['id'] == int(id):
    #         pets_dict.remove(pet)
    # return 'Success removing pet'


app.run()