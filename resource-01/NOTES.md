# Important Notes


## Notes related to the '04 - Introduzindo Volumes aos nossos Containers'

- Command to create a anonymous volume:

```bash
docker run -d -p 80:80 --name phpmessages_container --rm -v /data phpmessages
```

- Command to create a named volume:

```bash
docker run -d -p 80:80 --name phpmessages_container -v phpvolume:/var/www/html/ --rm phpmessages
```

- Command to list volumes:

```bash
docker volume ls
```

- Run the application

```bash
localhost:80
```

And then include the message: "Hello World" and then open the **[localhost/messages/msg-0.txt](localhost/messages/msg-0.txt)**