import socket
import random
import time
import MySQLdb



while (1):
    ran_num = random.random() * 100
    num = round(ran_num, 2)
    print(num)
    time.sleep(1)
