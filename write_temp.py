import socket
import csv
import datetime
import random
import time
host="10.128.3.70"
host="10.97.2.97"

port = 49999

def write_temp(temp):

    # csvFile
    f = open("data.csv", "a")
    writer = csv.writer(f, lineterminator='\n')
    writer.writerow([datetime.datetime.today(), temp])
    f.close()

    f = open("nowTemp.csv", "w")
    writer = csv.writer(f, lineterminator='\n')
    writer.writerow([datetime.datetime.today(), temp])
    f.close()

    # textFile
    with open("nowTemp.txt", mode='w') as f:
        f.write(temp)



sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR,1)
sock.bind((host, port))
sock.listen(1)

while True:
    cs, caddr = sock.accept()

    with cs:
        while True:
            msg = cs.recv(1024)
            if not msg:
                break
            print(msg.decode('ascii'))
            write_temp(msg.decode('ascii'))
            cs.sendall(msg)
sock.close
