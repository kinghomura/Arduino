import socket
host="10.128.3.70"
port = 49999

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
            cs.sendall(msg)
sock.close
