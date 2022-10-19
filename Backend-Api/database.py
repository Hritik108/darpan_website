import sqlite3
from sqlite3 import Error
from datetime import datetime

FILE = "Darpan_users.db"
TABLE = "users"


class saveData:
    def __init__(self):

        self.table_name = "UserData"

        try:
            self.conn = sqlite3.connect(FILE)
        except Error as e:
            print(e)

        self.cursor = self.conn.cursor()
        self.CreateTable()

    def CreateTable(self):
        query = f"""CREATE TABLE IF NOT EXISTS {TABLE}
                    (name TEXT, number INTEGER , email TEXT , place TEXT
                    ,comments TEXT, time Date, id INTEGER PRIMARY KEY AUTOINCREMENT)"""
        self.cursor.execute(query)
        self.conn.commit()

    def InsertRecords(self, name, number, email, place, comments):
        """
        saves the given message in the table
        :param name: str
        :param msg: str
        :param time: datetime
        :return: None
        """
        query = f"INSERT INTO {TABLE} VALUES (?, ?, ?, ?, ?, ?, ?)"
        self.cursor.execute(query, (name, number, email,
                            place, comments, datetime.now(), None))

        self.conn.commit()

    def get_data(self):
        """
        A method to see the data from the table
        """

        query = f"SELECT * FROM {TABLE}"
        self.cursor.execute(query)
        result = self.cursor.fetchall()
        print(result)
        self.conn.commit()
        self.close()

    def close(self):
        """
        close the db connection
        :return: None
        """
        self.conn.close()
