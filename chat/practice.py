import csv
import datetime
import random
import time

while (1):
    ran_num = random.random() * 100
    num = round(ran_num, 2)
    # print(num)


    f = open("data.csv", "a")
    writer = csv.writer(f, lineterminator='\n')
    writer.writerow([datetime.datetime.today(), num])
    f.close()

    f = open("nowTemp.csv", "w")
    writer = csv.writer(f, lineterminator='\n')
    writer.writerow([datetime.datetime.today(), num])
    f.close()

    # textFile
    with open("nowTemp.txt", mode='w') as f:
        f.write(str(num))

    time.sleep(1)
